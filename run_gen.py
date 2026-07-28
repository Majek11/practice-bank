import json

chapters = [
    (1, "Ch 1: Intro to Computers & Java"),
    (2, "Ch 2: Intro to Java Apps & I/O"),
    (3, "Ch 3: Intro to Classes & Objects"),
    (4, "Ch 4: Control Statements Part 1 (If/While)"),
    (5, "Ch 5: Control Statements Part 2 (For/Switch)"),
    (6, "Ch 6: Methods — A Deeper Look"),
    (7, "Ch 7: Arrays & ArrayLists"),
    (8, "Ch 8: Classes & Objects — A Deeper Look"),
    (9, "Ch 9: OOP Inheritance"),
    (10, "Ch 10: OOP Polymorphism & Interfaces"),
    (11, "Ch 11: Exception Handling"),
    (14, "Ch 14: Strings & Regular Expressions"),
    (15, "Ch 15: Files & Input/Output Streams"),
    (18, "Ch 18: Recursion"),
    (19, "Ch 19: Searching, Sorting & Big O")
]

questions = []

def add_q(ch, q_num, topic, diff, title, prompt_lines, io_text, hint_text, code_str):
    q_id = f"ch{ch}-{q_num:02d}"
    questions.append({
        "id": q_id,
        "chapter": ch,
        "topic": topic,
        "difficulty": diff,
        "title": f"Deitel {ch}.{q_num} — {title}",
        "prompt": prompt_lines,
        "io": io_text,
        "hint": hint_text,
        "starterCode": code_str.strip()
    })

# --- CHAPTER 1 (30 Questions) ---
for i in range(1, 31):
    diff = "easy" if i <= 15 else "medium"
    add_q(1, i, "Java Basics", diff,
        f"Java Environment & Output Warmup #{i}",
        [f"Write a program for Exercise 1.{i} that prints student message #{i} to stdout formatted with System.out.println or printf."],
        f"Output:\n[Deitel Ch 1] Student Warmup #{i}: Ready for Semicolon Java Practice!",
        "Use System.out.println(\"[Deitel Ch 1] ...\");",
        f"""public class Main {{
    public static void main(String[] args) {{
        System.out.println("[Deitel Ch 1] Student Warmup #{i}: Ready for Semicolon Java Practice!");
    }}
}}"""
    )

# --- CHAPTER 2 (30 Questions) ---
ch2_titles = [
    "Displaying Text with Multiple Statements", "Displaying Text with Single Statement", "Printing Text on Multiple Lines",
    "Displaying Formatted Text", "Addition of Two Integers", "Arithmetic Operators", "Comparing Integers",
    "Product of Three Integers", "Circle Area & Perimeter", "Characters & ASCII Values", "Displaying Shapes with Asterisks",
    "Integer Value of a Character", "Separating Digits in 5-digit Integer", "Table of Squares and Cubes",
    "Counting Positive, Negative & Zero Values", "Body Mass Index (BMI) Calculator", "World Population Growth Calculator",
    "Target Heart Rate Calculator", "Carpool Savings Calculator", "Checkerboard Pattern of Asterisks",
    "Multiples of an Integer", "Diameter, Circumference and Area of Circle", "Largest and Smallest Integer in 5 Inputs",
    "Even or Odd Integer Check", "Divisibility by 3 and 5", "Pythagorean Distance", "Currency Converter",
    "Time Converter (Seconds to Hours/Min)", "Compound Comparison", "Celsius to Fahrenheit Converter"
]
for i in range(1, 31):
    t_name = ch2_titles[i-1]
    diff = "easy" if i <= 10 else ("medium" if i <= 22 else "hard")
    add_q(2, i, "Java Basics", diff,
        t_name,
        [f"Exercise 2.{i}: Write a program that implements {t_name.lower()} according to Deitel Chapter 2 specifications."],
        f"Input: Standard scanner input\nOutput: Computed result for {t_name}",
        f"Refer to Scanner input and basic operators in Deitel Chapter 2.",
        f"""import java.util.Scanner;

public class Main {{
    public static void main(String[] args) {{
        Scanner input = new Scanner("10 20");
        int a = input.hasNextInt() ? input.nextInt() : 10;
        int b = input.hasNextInt() ? input.nextInt() : 20;
        System.out.println("Deitel 2.{i} [{t_name}]: Result = " + (a + b));
    }}
}}"""
    )

# --- CHAPTER 3 (30 Questions) ---
ch3_titles = [
    "Account Class with Deposit Method", "Account Class with Withdraw Method", "Invoice Class for Hardware Store",
    "Employee Class with Year-End Raise", "Date Class for Day, Month, Year", "HeartRates Calculator Class",
    "TargetHeartRate Calculator", "HealthProfile Record System", "Item Billing & Tax Calculator",
    "BankAccount Interest Adder", "Car Rental Rate Calculator", "Book Store Inventory Item",
    "Student Profile Class", "Product Class with SKU", "Rectangle Dimension Class",
    "Circle Class with Radius Setter", "Point2D Coordinates Class", "Time12Hour Converter Class",
    "Pet Information System", "Course Grade Calculator", "Movie Ticket Booking System",
    "Mobile Phone Tariff Plan", "Gym Membership Calculator", "Flight Reservation Record",
    "Library Book Tracker", "Electricity Bill Calculator", "Restaurant Order Bill",
    "Parking Spot Booking Class", "Shopping Cart Item Class", "Bank Vault Security Code"
]
for i in range(1, 31):
    t_name = ch3_titles[i-1]
    diff = "easy" if i <= 10 else ("medium" if i <= 22 else "hard")
    add_q(3, i, "OOP", diff,
        t_name,
        [f"Exercise 3.{i}: Implement the `{t_name.replace(' ', '')}` class with instance variables, getters, setters, and business logic methods."],
        f"Output: Validated record for {t_name}",
        f"Ensure encapsulation (private fields) and constructors as described in Chapter 3.",
        f"""class Record3_{i} {{
    private String title = "{t_name}";
    private double val = 100.0 * {i};
    public String getTitle() {{ return title; }}
    public double getVal() {{ return val; }}
}}

public class Main {{
    public static void main(String[] args) {{
        Record3_{i} rec = new Record3_{i}();
        System.out.println("Deitel 3.{i}: " + rec.getTitle() + " | Value: " + rec.getVal());
    }}
}}"""
    )

# --- CHAPTER 4 (30 Questions) ---
ch4_titles = [
    "Student Pass/Fail Counter", "Sentinel-Controlled Class Average", "Gas Mileage Calculator",
    "Credit Limit Calculator", "Sales Commission Calculator", "Employee Salary Calculator",
    "Find the Largest Integer", "Find the Two Largest Integers", "Tabular Output of Multiples",
    "Square of Asterisks", "Hollow Square of Asterisks", "Palindrome Tester (5 Digits)",
    "Printing Decimal Equivalent of Binary", "Checkerboard Pattern of Asterisks", "Multiples of 2 with Infinite Loop",
    "Sides of a Triangle Tester", "Sides of a Right Triangle Tester", "Factorial Calculator (n!)",
    "Euler's Constant e Estimation", "e^x Exponential Estimation", "Enforcing Security with Cryptography",
    "Decrypting Encrypted 4-digit Code", "Dangling-Else Problem Analysis", "Pre-increment vs Post-increment",
    "Nested Control Structures", "World Population Growth Projection", "Target Heart Rate Monitoring",
    "Tax Calculator for Salary Brackets", "Sales Commission Range Finder", "Salesperson Earnings Table"
]
for i in range(1, 31):
    t_name = ch4_titles[i-1]
    diff = "easy" if i <= 10 else ("medium" if i <= 22 else "hard")
    add_q(4, i, "Conditionals", diff,
        t_name,
        [f"Exercise 4.{i}: Write a Java program to solve `{t_name}` using control structures (if, if-else, while)."],
        f"Output: Processed output for {t_name}",
        "Use while loops or nested if statements.",
        f"""public class Main {{
    public static void main(String[] args) {{
        int count = 0;
        int sum = 0;
        while (count < 5) {{
            sum += (count + 1) * {i};
            count++;
        }}
        System.out.println("Deitel 4.{i} [{t_name}]: Sum = " + sum);
    }}
}}"""
    )

# --- CHAPTER 5 (30 Questions) ---
ch5_titles = [
    "Summing Integers with For Loop", "Compound-Interest Calculator", "Bar Chart Printing Program",
    "Calculating Sales for 5 Products", "Find the Smallest Integer", "Product of Odd Integers (1 to 15)",
    "Factorials of 1 to 20", "Modified Compound-Interest with Integers", "Triangle Printing Patterns (4 Shapes)",
    "Pythagorean Triples Finder (Sides <= 500)", "Calculating the Value of Pi", "DeMorgan’s Laws Verification",
    "Diamond Printing Pattern", "Modified Diamond Pattern", "Structured Break Statement",
    "Structured Continue Statement", "Fair Tax Calculator", "Global Warming Facts Quiz",
    "Auto Policy Matrix Comparison", "Switch Statement Grade Counter", "Nested Loop Multiplication Table",
    "Switch Case Menu Selector", "Fibonacci Series with Loops", "Sum of Harmonic Series",
    "Sum of Squares vs Square of Sums", "Prime Number Listing (1 to 100)", "ASCII Character Table Printer",
    "Leap Year Counter", "Calendar Day of Week Finder", "Roman Numeral Converter (1 to 10)"
]
for i in range(1, 31):
    t_name = ch5_titles[i-1]
    diff = "easy" if i <= 10 else ("medium" if i <= 22 else "hard")
    add_q(5, i, "Loops", diff,
        t_name,
        [f"Exercise 5.{i}: Implement `{t_name}` using for loops, do-while, or switch statements."],
        f"Output: Output pattern for {t_name}",
        "Utilize counter-controlled for loops or switch blocks.",
        f"""public class Main {{
    public static void main(String[] args) {{
        int total = 0;
        for (int k = 1; k <= 5; k++) {{
            total += k * {i};
        }}
        System.out.println("Deitel 5.{i} [{t_name}]: Total = " + total);
    }}
}}"""
    )

# --- CHAPTER 6 (30 Questions) ---
ch6_titles = [
    "Math Class Methods Exploration", "Sphere Volume Calculator", "Parking Garage Charges",
    "Rounding Numbers to Integer (Math.floor)", "Rounding Numbers to Specific Decimal Places", "Exponentiation Method (integerPower)",
    "Hypotenuse Calculations", "Determining Multiples (isMultiple)", "Even or Odd Determination (isEven)",
    "Displaying Square of Asterisks", "Displaying Solid Square of Custom Character", "Circle Area Calculator",
    "Separating Digits of an Integer", "Temperature Conversion (Celsius/Fahrenheit)", "Minimum of Three Double Numbers",
    "Prime Numbers Listing (1 to 10000)", "Reversing Digits of an Integer", "Greatest Common Divisor (GCD)",
    "Quality Points Grade Assessor", "Coin Tossing Simulation", "Guess the Number Game (1 to 1000)",
    "Craps Game Simulation", "Distance Between Two Points", "Perfect Numbers Finder",
    "Coin Toss Counter (Heads/Tails)", "Random Number Generation Ranges", "Method Overloading Demonstration",
    "Recursive vs Iterative Factorial", "Inline Method Optimization", "Scope of Variables Demonstration"
]
for i in range(1, 31):
    t_name = ch6_titles[i-1]
    diff = "easy" if i <= 10 else ("medium" if i <= 22 else "hard")
    add_q(6, i, "Methods", diff,
        t_name,
        [f"Exercise 6.{i}: Write a static method to compute `{t_name}`."],
        f"Output: Method call results for {t_name}",
        "Define static methods inside or outside Main.",
        f"""public class Main {{
    public static int calc6_{i}(int x) {{
        return x * {i} + 7;
    }}
    public static void main(String[] args) {{
        System.out.println("Deitel 6.{i} [{t_name}]: Result = " + calc6_{i}(5));
    }}
}}"""
    )

# --- CHAPTER 7 (30 Questions) ---
ch7_titles = [
    "Initializing Array Elements to Zero", "Summing Array Elements", "Displaying Array Elements in Bar Chart",
    "Sales Commission Range Array", "Duplicate Elimination in 1D Array", "Dice Rolling Tally (36,000 Rolls)",
    "Airline Reservations System", "Total Sales in 2D Array", "Turtle Graphics Simulation",
    "Knight's Tour Chess Problem", "Eight Queens Chess Problem", "Sieve of Eratosthenes (Primes)",
    "Variable-Length Argument List (Product)", "Command-Line Arguments Processing", "Array Reversal in Place",
    "Pass-by-Value vs Pass-by-Reference Test", "GradeBook Class with 2D Arrays", "ArrayList Operations (Strings)",
    "Fibonacci Sequence Array", "Matrix Multiplication (2D Arrays)", "Symmetric Matrix Checker",
    "Pascal's Triangle Generator", "Selection Sort on Array", "Binary Search on Array",
    "Linear Search on Array", "Shuffling a Deck of Cards", "Polling Survey Results Tally",
    "Array Copying Techniques", "Frequency Distribution Counter", "Spiral Matrix Printing"
]
for i in range(1, 31):
    t_name = ch7_titles[i-1]
    diff = "easy" if i <= 10 else ("medium" if i <= 22 else "hard")
    add_q(7, i, "Arrays", diff,
        t_name,
        [f"Exercise 7.{i}: Solve `{t_name}` using 1D/2D arrays or ArrayLists."],
        f"Output: Array processing result for {t_name}",
        "Use arrays (e.g. int[] or int[][]) or java.util.ArrayList.",
        f"""public class Main {{
    public static void main(String[] args) {{
        int[] arr = {{ 10, 20, 30, 40, 50 }};
        int sum = 0;
        for (int n : arr) sum += n;
        System.out.println("Deitel 7.{i} [{t_name}]: Array Sum = " + (sum + {i}));
    }}
}}"""
    )

# --- CHAPTER 8 (30 Questions) ---
ch8_titles = [
    "Time2 Class with Universal & Standard Time", "Rectangle Class with Dimension Validation", "SavingsAccount Class with Annual Interest",
    "Complex Numbers Class (Real & Imaginary)", "Rational Numbers Class (Fractions)", "Date Class with Month-Day-Year", "Employee Class with Static Count",
    "Emergency Vehicle Locator", "HugeInteger Class (40-digit Numbers)", "Set of Integers Class (BitSet)", "DateAndTime Combination Class",
    "Tick Method for Time2 Class", "Enum Type TrafficLight", "Enum Type Book", "Static Import Math Demonstration", "Package Access Test",
    "Composition vs Inheritance Demonstration", "Garbage Collection Test", "Final Instance Variable Test", "This Reference Demonstration",
    "Overloaded Constructors Test", "Default Constructor Generator", "Bank Branch Manager Class", "Flight Schedule Tracker", "Hotel Room Reservation",
    "Customer Account Ledger", "Inventory Warehouse Manager", "Student Academic Transcript", "Medical Patient Chart", "Car Maintenance Tracker"
]
for i in range(1, 31):
    t_name = ch8_titles[i-1]
    diff = "easy" if i <= 10 else ("medium" if i <= 22 else "hard")
    add_q(8, i, "OOP", diff,
        t_name,
        [f"Exercise 8.{i}: Create `{t_name}` enforcing encapsulation, static members, and overloaded constructors."],
        f"Output: Class instance data for {t_name}",
        "Verify constructors and access modifiers.",
        f"""class Class8_{i} {{
    private static int instanceCount = 0;
    private String name = "{t_name}";
    public Class8_{i}() {{ instanceCount++; }}
    public String getName() {{ return name; }}
    public static int getCount() {{ return instanceCount; }}
}}

public class Main {{
    public static void main(String[] args) {{
        Class8_{i} obj = new Class8_{i}();
        System.out.println("Deitel 8.{i}: " + obj.getName() + " | Total Instances: " + Class8_{i}.getCount());
    }}
}}"""
    )

# --- CHAPTER 9 (30 Questions) ---
ch9_titles = [
    "CommissionEmployee Class Implementation", "BasePlusCommissionEmployee Superclass/Subclass", "Quadrilateral Hierarchy (Trapezoid, Parallelogram)",
    "Shape Hierarchy (TwoDimensional, ThreeDimensional)", "Vehicle Hierarchy (Car, Truck, Bicycle)", "Animal Hierarchy (Dog, Cat, Bird)",
    "Employee Hierarchy (Hourly, Salaried)", "BankAccount Hierarchy (Savings, Checking)", "Protected Access Modifier Evaluation",
    "Super Constructor Explicit Invocation", "Method Overriding with @Override", "Composition alternative to Inheritance",
    "Polyline Graphic Object Hierarchy", "Electronic Device Hierarchy (Phone, Laptop)", "Book Hierarchy (Textbook, Novel)",
    "Academic Person Hierarchy (Student, Professor)", "Furniture Hierarchy (Chair, Table)", "Apparel Hierarchy (Shirt, Pants)",
    "Food Item Hierarchy (Fruit, Vegetable)", "Building Hierarchy (House, Skyscraper)", "Transaction Hierarchy (Deposit, Withdrawal)",
    "Order Hierarchy (OnlineOrder, StoreOrder)", "Notification Hierarchy (Email, SMS)", "Payment Method Hierarchy (CreditCard, Paypal)",
    "Game Character Hierarchy (Warrior, Mage)", "Media Hierarchy (Audio, Video)", "Instrument Hierarchy (Guitar, Piano)",
    "User Account Hierarchy (Admin, Regular)", "Sensor Hierarchy (Temperature, Pressure)", "Robot Hierarchy (Industrial, Service)"
]
for i in range(1, 31):
    t_name = ch9_titles[i-1]
    diff = "easy" if i <= 10 else ("medium" if i <= 22 else "hard")
    add_q(9, i, "OOP", diff,
        t_name,
        [f"Exercise 9.{i}: Design the superclass and subclass hierarchy for `{t_name}`."],
        f"Output: Polymorphic subclass output for {t_name}",
        "Use `extends` and `super(...)` constructors.",
        f"""class Base9_{i} {{
    protected String type = "Base {t_name}";
    public String getType() {{ return type; }}
}}
class Sub9_{i} extends Base9_{i} {{
    public Sub9_{i}() {{ this.type = "Subclass {t_name}"; }}
}}

public class Main {{
    public static void main(String[] args) {{
        Sub9_{i} sub = new Sub9_{i}();
        System.out.println("Deitel 9.{i}: " + sub.getType());
    }}
}}"""
    )

# --- CHAPTER 10 (30 Questions) ---
ch10_titles = [
    "Payable Interface Implementation", "Abstract Employee Class Hierarchy", "Shape 2D & 3D Interface Hierarchy",
    "CarbonFootprint Interface (Building, Car, Bicycle)", "Invoice & Employee Polymorphic Processing", "Payroll System Modification with Bonus",
    "Abstract Class vs Interface Comparison", "Polymorphic Array Processing", "Interface Default Methods Demonstration",
    "Interface Static Methods Demonstration", "Multiple Interface Implementation", "Downcasting and instanceof Operator",
    "Serializable Interface Usage", "Comparable Interface Implementation", "Comparator Interface Custom Sorting",
    "Printable Interface Implementation", "Exportable Data Interface", "Encryptable Security Interface",
    "Resizable Graphic Object Interface", "Movable Sprite Interface", "Auditable Financial Interface",
    "Searchable Inventory Interface", "Loggable System Event Interface", "Validateable User Form Interface",
    "Cacheable Data Provider Interface", "Cloneable Deep Copy Implementation", "Connectable Network Service",
    "Renderable UI Widget Interface", "Streamable Media Interface", "Configurable System Module"
]
for i in range(1, 31):
    t_name = ch10_titles[i-1]
    diff = "easy" if i <= 10 else ("medium" if i <= 22 else "hard")
    add_q(10, i, "OOP", diff,
        t_name,
        [f"Exercise 10.{i}: Define an interface or abstract class for `{t_name}` and process polymorphically."],
        f"Output: Polymorphic method execution for {t_name}",
        "Use interface definitions and abstract method implementations.",
        f"""interface Interface10_{i} {{
    void process();
}}

class Impl10_{i} implements Interface10_{i} {{
    public void process() {{
        System.out.println("Deitel 10.{i} [{t_name}]: Processed polymorphically!");
    }}
}}

public class Main {{
    public static void main(String[] args) {{
        Interface10_{i} obj = new Impl10_{i}();
        obj.process();
    }}
}}"""
    )

# --- CHAPTER 11 (30 Questions) ---
ch11_titles = [
    "Division by Zero Exception Handling", "InputMismatchException Retry Loop", "Exception Subclass Hierarchy (ExceptionA, B, C)",
    "Catching Base Class Exceptions", "Catching NullPointerException & ArrayIndexOutOfBounds", "Order of Catch Blocks Validation",
    "Rethrowing Exceptions (Rethrowing Exception)", "Uncaught Exceptions Stack Trace Analysis", "Chained Exceptions with getCause()",
    "Custom Exception Class (InvalidScoreException)", "Custom Exception Class (NegativeBalanceException)", "Custom Exception Class (OverdraftException)",
    "Finally Block Execution Behavior", "Resource Leak Prevention with Finally", "Try-with-Resources Statement",
    "Multi-Catch Block (Exception1 | Exception2)", "Throwing Checked vs Unchecked Exceptions", "Method Exception Propagation",
    "Constructor Exception Handling", "File Not Found Exception Handling", "Number Format Exception Converter",
    "Array Index Out Of Bounds Safeguard", "Class Cast Exception Handler", "Illegal Argument Exception Guard",
    "Illegal State Exception Validator", "Concurrent Modification Exception Shield", "Stack Overflow Catch Failure Analysis",
    "Out Of Memory Exception Simulation", "Security Exception Check", "Timeout Exception Handler"
]
for i in range(1, 31):
    t_name = ch11_titles[i-1]
    diff = "easy" if i <= 10 else ("medium" if i <= 22 else "hard")
    add_q(11, i, "Exception Handling", diff,
        t_name,
        [f"Exercise 11.{i}: Implement exception handling logic for `{t_name}` using try-catch-finally."],
        f"Output: Handled exception message for {t_name}",
        "Use try { ... } catch (Exception e) { ... } finally { ... }",
        f"""public class Main {{
    public static void main(String[] args) {{
        try {{
            if ({i} > 0) throw new IllegalArgumentException("{t_name} Exception Caught!");
        }} catch (Exception e) {{
            System.out.println("Deitel 11.{i}: " + e.getMessage());
        }} finally {{
            System.out.println("Deitel 11.{i}: Cleanup completed in finally block.");
        }}
    }}
}}"""
    )

# --- CHAPTER 14 (30 Questions) ---
ch14_titles = [
    "String Comparison Methods (equals, compareTo)", "String Region Match Check", "String Start/End Check (startsWith, endsWith)",
    "String Search Methods (indexOf, lastIndexOf)", "Extracting Substrings (substring)", "Concatenating Strings (concat vs +)",
    "Miscellaneous String Methods (toLowerCase, trim)", "StringBuilder Capacity and Length", "StringBuilder Append Methods",
    "StringBuilder Insert, Delete and Replace", "Character Class Static Methods (isDigit, isLetter)", "Tokenizing Strings with String.split",
    "Reversing Words in a Sentence", "Pig Latin Translator", "Telephone Number Parser",
    "Text Analysis (Word & Character Counts)", "Check for Rhyming Words", "Alphabetical Sorting of Strings",
    "Regular Expression Social Security Number", "Regular Expression Phone Number Validation", "Regular Expression Email Address Checker",
    "Regular Expression Zip Code Validator", "Regular Expression Date Format Validator", "Replacing Substrings with Regex",
    "Morse Code Translator", "Luhn Algorithm Credit Card Check", "String Palindrome Tester",
    "Anagram Checker", "Vowel and Consonant Counter", "Compressing Strings (Run-Length Encoding)"
]
for i in range(1, 31):
    t_name = ch14_titles[i-1]
    diff = "easy" if i <= 10 else ("medium" if i <= 22 else "hard")
    add_q(14, i, "Strings", diff,
        t_name,
        [f"Exercise 14.{i}: Implement `{t_name}` using String methods, StringBuilder, or Regular Expressions."],
        f"Output: Processed string output for {t_name}",
        "Use java.lang.String or java.lang.StringBuilder.",
        f"""public class Main {{
    public static void main(String[] args) {{
        String str = "Deitel Chapter 14: {t_name}";
        System.out.println("Uppercase: " + str.toUpperCase());
    }}
}}"""
    )

# --- CHAPTER 15 (30 Questions) ---
ch15_titles = [
    "File & Directory Information Retrieval", "Writing Text to File with Formatter", "Reading Text from File with Scanner",
    "Credit Inquiry Program (Account Filter)", "Sequential-Access File Creation", "Sequential-Access File Reading",
    "Updating Sequential Master File", "Transaction Record Processor", "File Matching Program (Master & Transaction)",
    "Object Serialization to File", "Deserializing Objects from File", "JFileChooser Dialog Demonstration",
    "Counting Characters, Words and Lines in File", "Phishing Scanner Keyword Search", "Word Frequency Counter in File",
    "Merging Two Text Files", "Splitting Large File into Chunks", "File Encryption & Decryption",
    "Directory Tree Traversal (NIO Path)", "Files Class Operations (copy, move, delete)", "Reading File Lines into List",
    "Writing Byte Array to Binary File", "Reading Binary File Data", "CSV File Parser & Exporter",
    "JSON Data Formatting to File", "Log File Appender", "Backup Copy Generator",
    "File Checksum SHA-256 Calculator", "File Compression Zip Archive", "Temporary File Manager"
]
for i in range(1, 31):
    t_name = ch15_titles[i-1]
    diff = "easy" if i <= 10 else ("medium" if i <= 22 else "hard")
    add_q(15, i, "Files & I/O", diff,
        t_name,
        [f"Exercise 15.{i}: Implement file or stream processing for `{t_name}`."],
        f"Output: File/Stream operation result for {t_name}",
        "Use java.io.File, java.util.Scanner, or java.nio.file.Paths.",
        f"""import java.io.File;

public class Main {{
    public static void main(String[] args) {{
        File f = new File("test.txt");
        System.out.println("Deitel 15.{i} [{t_name}]: File exists? " + f.exists());
    }}
}}"""
    )

# --- CHAPTER 18 (30 Questions) ---
ch18_titles = [
    "Recursive Factorial Method", "Recursive Fibonacci Method", "Recursive Greatest Common Divisor (GCD)",
    "Recursive Power Method (base^exponent)", "Recursive Visualizing Factorial Call Stack", "Towers of Hanoi Recursive Solver",
    "Recursive Printing Array Elements", "Recursive Printing Array Backwards", "Recursive Finding Minimum Element in Array",
    "Recursive String Reversal", "Recursive Palindrome Checker", "Recursive Linear Search",
    "Recursive Binary Search", "Eight Queens Recursive Backtracking", "Maze Traversal Recursive Backtracking",
    "Koch Snowflake Fractal Calculation", "Sierpinski Triangle Fractal", "Recursive Sum of Integers (1 to N)",
    "Recursive Multiplication via Addition", "Recursive Count Down Timer", "Recursive Sum of Array Digits",
    "Recursive Decimal to Binary Converter", "Recursive Binary to Decimal Converter", "Recursive Permutations Generator",
    "Recursive Combinations Generator", "Recursive Linked List Length Count", "Recursive Linked List Reverse Print",
    "Recursive Tree Traversal (Inorder)", "Recursive Tree Traversal (Preorder)", "Recursive Tree Traversal (Postorder)"
]
for i in range(1, 31):
    t_name = ch18_titles[i-1]
    diff = "easy" if i <= 10 else ("medium" if i <= 22 else "hard")
    add_q(18, i, "Recursion", diff,
        t_name,
        [f"Exercise 18.{i}: Implement a recursive algorithm to solve `{t_name}`."],
        f"Output: Recursive result for {t_name}",
        "Define base case and recursive call step.",
        f"""public class Main {{
    public static int rec18_{i}(int n) {{
        if (n <= 1) return 1;
        return n + rec18_{i}(n - 1);
    }}
    public static void main(String[] args) {{
        System.out.println("Deitel 18.{i} [{t_name}]: Result = " + rec18_{i}(5));
    }}
}}"""
    )

# --- CHAPTER 19 (30 Questions) ---
ch19_titles = [
    "Linear Search Implementation", "Binary Search Implementation", "Selection Sort Implementation",
    "Insertion Sort Implementation", "Bubble Sort Implementation", "Enhanced Bubble Sort (Early Exit)",
    "Bucket Sort Implementation", "Quicksort Implementation", "Merge Sort Implementation",
    "Big O Notation Analysis Comparison", "Linear Search Performance Test", "Binary Search Performance Test",
    "Selection Sort Step-by-Step Print", "Insertion Sort Step-by-Step Print", "Merge Sort Step-by-Step Print",
    "Quicksort Partition Strategy", "Radix Sort Implementation", "Heap Sort Implementation",
    "Shell Sort Implementation", "Counting Sort Implementation", "Binary Search on String Array",
    "Selection Sort on Custom Object Array", "Comparator Based Custom Sort", "Parallel Sort Timings (Arrays.parallelSort)",
    "Search & Sort Benchmark Suite", "Median of Three Quicksort", "Stable vs Unstable Sort Test",
    "In-Place Reversal Sort", "Matrix Search (Sorted 2D)", "External Sorting Concept Simulator"
]
for i in range(1, 31):
    t_name = ch19_titles[i-1]
    diff = "easy" if i <= 10 else ("medium" if i <= 22 else "hard")
    add_q(19, i, "Searching & Sorting", diff,
        t_name,
        [f"Exercise 19.{i}: Implement `{t_name}` and analyze algorithm efficiency."],
        f"Output: Sorted/Searched result for {t_name}",
        "Implement search or sort algorithm and measure execution steps.",
        f"""public class Main {{
    public static void main(String[] args) {{
        int[] arr = {{ 45, 12, 85, 32, 89, 39, 69, 44 }};
        java.util.Arrays.sort(arr);
        System.out.println("Deitel 19.{i} [{t_name}]: Sorted Array = " + java.util.Arrays.toString(arr));
    }}
}}"""
    )

ch_list = [{'id': c[0], 'name': c[1]} for c in chapters]
out_js = 'const CHAPTERS = ' + json.dumps(ch_list, indent=4) + ';\n\n'
out_js += 'const QUESTIONS = ' + json.dumps(questions, indent=4) + ';\n'

with open("questions.js", "w") as f:
    f.write(out_js)

print(f"SUCCESS: Generated {len(questions)} total questions across {len(chapters)} chapters!")
