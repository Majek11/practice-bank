const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const os = require('os');

const PORT = 8080;
const PUBLIC_DIR = __dirname;

const server = http.createServer((req, res) => {
    // CORS Headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    // API Endpoint: /api/run
    if (req.url === '/api/run' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', () => {
            try {
                const { code, input } = JSON.parse(body || '{}');
                if (!code || !code.trim()) {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ success: false, output: 'Error: No Java code provided.' }));
                    return;
                }

                // Check for class Main definition
                if (!code.includes('class Main') && !code.includes('class main')) {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({
                        success: false,
                        output: 'Compilation Error: Public class must be named "Main" (e.g. public class Main { ... }).'
                    }));
                    return;
                }

                // Create isolated temporary directory
                const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'java-sandbox-'));
                const javaFilePath = path.join(tmpDir, 'Main.java');
                fs.writeFileSync(javaFilePath, code);

                const compileCmd = `javac "${javaFilePath}"`;
                const runCmd = `java -Xmx128m -cp "${tmpDir}" Main`;

                const startTime = Date.now();

                // Step 1: Compile
                exec(compileCmd, { timeout: 6000 }, (compileErr, compileStdout, compileStderr) => {
                    if (compileErr) {
                        try { fs.rmSync(tmpDir, { recursive: true, force: true }); } catch (e) {}
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({
                            success: false,
                            execTimeMs: Date.now() - startTime,
                            output: `Compilation Error:\n${compileStderr || compileErr.message}`
                        }));
                        return;
                    }

                    // Step 2: Execute Java with direct stdin pipe
                    const child = exec(runCmd, { timeout: 5000 }, (runErr, runStdout, runStderr) => {
                        const execTimeMs = Date.now() - startTime;
                        try { fs.rmSync(tmpDir, { recursive: true, force: true }); } catch (e) {}

                        res.writeHead(200, { 'Content-Type': 'application/json' });

                        if (runErr) {
                            let errorOutput = runStderr || runErr.message || 'Execution Error';
                            if (errorOutput.includes('NoSuchElementException')) {
                                errorOutput += '\n\n💡 Tip: Your code uses Scanner to read input, but none was provided in the "Scanner Input (stdin)" box above!';
                            }
                            res.end(JSON.stringify({
                                success: false,
                                execTimeMs,
                                output: `Runtime Error:\n${errorOutput}`
                            }));
                        } else {
                            res.end(JSON.stringify({
                                success: true,
                                execTimeMs,
                                output: runStdout || 'Program executed successfully with no console output.'
                            }));
                        }
                    });

                    // Pipe input if provided, then close stdin
                    if (input && input.trim()) {
                        child.stdin.write(input + '\n');
                    }
                    child.stdin.end();
                });
            } catch (err) {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: false, output: 'Server Error: ' + err.message }));
            }
        });
        return;
    }

    // Serve static files
    let reqUrl = req.url.split('?')[0];
    if (reqUrl === '/') reqUrl = '/index.html';
    let filePath = path.join(PUBLIC_DIR, reqUrl);

    if (!filePath.startsWith(PUBLIC_DIR)) {
        res.writeHead(403);
        res.end('Forbidden');
        return;
    }

    fs.stat(filePath, (err, stats) => {
        if (err || !stats.isFile()) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
            return;
        }

        const ext = path.extname(filePath);
        const mimeTypes = {
            '.html': 'text/html',
            '.js': 'text/javascript',
            '.css': 'text/css',
            '.json': 'application/json',
            '.png': 'image/png',
            '.jpg': 'image/jpeg'
        };

        const contentType = mimeTypes[ext] || 'text/plain';
        res.writeHead(200, { 'Content-Type': contentType });
        fs.createReadStream(filePath).pipe(res);
    });
});

server.listen(PORT, () => {
    console.log(`Semicolon Practice Bank running on http://localhost:${PORT}`);
});
