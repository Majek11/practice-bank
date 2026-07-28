import json, sys

concepts = [
    (1, "Java Syntax, I/O & Variables"),
    (2, "Operators & Arithmetic Expressions"),
    (3, "Intro to Classes & Objects"),
    (4, "Conditionals & Control Flow"),
    (5, "Loops & Repetition Logic"),
    (6, "Methods & Code Reusability"),
    (7, "1D/2D Arrays & ArrayLists"),
    (8, "Encapsulation & Class Design"),
    (9, "Object Hierarchy & Inheritance"),
    (10, "Polymorphism & Interfaces"),
    (11, "Robustness & Exception Handling"),
    (12, "Strings, StringBuilder & Regex"),
    (13, "File I/O Streams & Persistence"),
    (14, "Recursion & Backtracking"),
    (15, "Searching, Sorting & Big O"),
    (16, "Collections Framework (List, Set, Map)"),
    (17, "Generics & Type Safety"),
    (18, "Streams API & Functional Lambdas"),
    (19, "Multithreading & Concurrency"),
    (20, "Design Patterns in Java"),
    (21, "Database Access & JDBC"),
    (22, "Unit Testing & Assertions"),
    (23, "Modern Java Features (Records, Var)"),
    (24, "Network Programming & Sockets"),
    (25, "Enterprise Java & REST Web APIs")
]

# 450 questions mapped across 15 core Java concepts!
questions = []

def add_q(ch, q_num, topic, diff, title, prompt_lines, io_text, hint_text, code_str=None):
    q_id = f"c{ch}-{q_num:02d}"
    
    # Generate clean uncompleted starter code template
    if topic in ["Collections", "Generics"]:
        starter = f"""import java.util.*;

public class Main {{
    public static void main(String[] args) {{
        // TODO: Write your code for Concept {ch}.{q_num} — {title}
        
    }}
}}"""
    elif topic in ["Streams & Lambdas"]:
        starter = f"""import java.util.*;
import java.util.stream.*;

public class Main {{
    public static void main(String[] args) {{
        // TODO: Write your code for Concept {ch}.{q_num} — {title}
        
    }}
}}"""
    elif topic in ["Concurrency"]:
        starter = f"""import java.util.concurrent.*;

public class Main {{
    public static void main(String[] args) throws Exception {{
        // TODO: Write your code for Concept {ch}.{q_num} — {title}
        
    }}
}}"""
    elif topic in ["Files & I/O"]:
        starter = f"""import java.io.*;
import java.nio.file.*;

public class Main {{
    public static void main(String[] args) throws Exception {{
        // TODO: Write your code for Concept {ch}.{q_num} — {title}
        
    }}
}}"""
    elif topic in ["Operators & Arithmetic", "Java Basics"]:
        starter = f"""import java.util.Scanner;

public class Main {{
    public static void main(String[] args) {{
        Scanner input = new Scanner(System.in);
        // TODO: Write your code for Concept {ch}.{q_num} — {title}
        
    }}
}}"""
    else:
        starter = f"""public class Main {{
    public static void main(String[] args) {{
        // TODO: Write your code for Concept {ch}.{q_num} — {title}
        
    }}
}}"""

    questions.append({
        "id": q_id,
        "chapter": ch,
        "topic": topic,
        "difficulty": diff,
        "title": f"Concept {ch}.{q_num} — {title}",
        "prompt": prompt_lines,
        "io": io_text,
        "hint": hint_text,
        "starterCode": starter.strip()
    })


# --- CONCEPT 1 (30 Questions) ---
for i in range(1, 31):
    diff = "easy" if i <= 15 else "medium"
    add_q(1, i, "Java Basics", diff,
        f"Exercise 1.{i}: Java Environment & Output Warmup #{i}",
        [f"Write a program for Exercise 1.{i} that prints student message #{i} to stdout formatted with System.out.println or printf."],
        f"Output:\n[Java Practice] Student Warmup #{i}: Ready for Java Practice!",
        "Use System.out.println(\"[Java Practice] ...\");",
        f"""public class Main {{
    public static void main(String[] args) {{
        System.out.println("[Java Practice] Student Warmup #{i}: Ready for Java Practice!");
    }}
}}"""
    )

# --- CONCEPT 2 (30 Questions) ---
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
    add_q(2, i, "Operators & Arithmetic", diff,
        t_name,
        [f"Exercise 2.{i}: Write a program that implements {t_name.lower()}."],
        f"Input: Standard scanner input\nOutput: Computed result for {t_name}",
        f"Refer to Scanner input and basic operators.",
        f"""import java.util.Scanner;

public class Main {{
    public static void main(String[] args) {{
        Scanner input = new Scanner("10 20");
        int a = input.hasNextInt() ? input.nextInt() : 10;
        int b = input.hasNextInt() ? input.nextInt() : 20;
        System.out.println("Concept 2.{i} [{t_name}]: Result = " + (a + b));
    }}
}}"""
    )

# --- CONCEPT 3 (30 Questions) ---
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
        f"Ensure encapsulation (private fields) and constructors.",
        f"""class Record3_{i} {{
    private String title = "{t_name}";
    private double val = 100.0 * {i};
    public String getTitle() {{ return title; }}
    public double getVal() {{ return val; }}
}}

public class Main {{
    public static void main(String[] args) {{
        Record3_{i} rec = new Record3_{i}();
        System.out.println("Concept 3.{i}: " + rec.getTitle() + " | Value: " + rec.getVal());
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

# --- CONCEPT 12: STRINGS & REGEX (30 Questions) ---
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
    add_q(12, i, "Strings", diff,
        t_name,
        [f"Exercise 12.{i}: Implement `{t_name}` using String methods, StringBuilder, or Regular Expressions."],
        f"Output: Processed string output for {t_name}",
        "Use java.lang.String or java.lang.StringBuilder.",
        f"""public class Main {{
    public static void main(String[] args) {{
        String str = "Concept 12: {t_name}";
        System.out.println("Uppercase: " + str.toUpperCase());
    }}
}}"""
    )

# --- CONCEPT 13: FILE I/O (30 Questions) ---
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
    add_q(13, i, "Files & I/O", diff,
        t_name,
        [f"Exercise 13.{i}: Implement file or stream processing for `{t_name}`."],
        f"Output: File/Stream operation result for {t_name}",
        "Use java.io.File, java.util.Scanner, or java.nio.file.Paths.",
        f"""import java.io.File;

public class Main {{
    public static void main(String[] args) {{
        File f = new File("test.txt");
        System.out.println("Concept 13.{i} [{t_name}]: File exists? " + f.exists());
    }}
}}"""
    )

# --- CONCEPT 14: RECURSION (30 Questions) ---
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
    add_q(14, i, "Recursion", diff,
        t_name,
        [f"Exercise 14.{i}: Implement a recursive algorithm to solve `{t_name}`."],
        f"Output: Recursive result for {t_name}",
        "Define base case and recursive call step.",
        f"""public class Main {{
    public static int rec14_{i}(int n) {{
        if (n <= 1) return 1;
        return n + rec14_{i}(n - 1);
    }}
    public static void main(String[] args) {{
        System.out.println("Concept 14.{i} [{t_name}]: Result = " + rec14_{i}(5));
    }}
}}"""
    )

# --- CONCEPT 15: SEARCHING & SORTING (30 Questions) ---
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
    add_q(15, i, "Searching & Sorting", diff,
        t_name,
        [f"Exercise 15.{i}: Implement `{t_name}` and analyze algorithm efficiency."],
        f"Output: Sorted/Searched result for {t_name}",
        "Implement search or sort algorithm and measure execution steps.",
        f"""public class Main {{
    public static void main(String[] args) {{
        int[] arr = {{ 45, 12, 85, 32, 89, 39, 69, 44 }};
        java.util.Arrays.sort(arr);
        System.out.println("Concept 15.{i} [{t_name}]: Sorted Array = " + java.util.Arrays.toString(arr));
    }}
}}"""
    )

# --- CONCEPT 16: COLLECTIONS FRAMEWORK (30 Questions) ---
c16_titles = [
    "ArrayList Basic Operations", "LinkedList Insertion & Removal", "HashSet Unique Element Filtering",
    "TreeSet Sorted Order Storage", "HashMap Key-Value Mapping", "TreeMap Sorted Key Lookup",
    "PriorityQueue Min-Heap Simulation", "ArrayDeque Double-Ended Queue", "Stack Push & Pop Simulator",
    "Iterating with Iterator vs For-Each", "Bulk Collection Operations (addAll, removeAll)", "Frequency Counting with Map",
    "Grouping Elements by Category", "Synchronized Collection Wrapping", "Unmodifiable List View Guard",
    "Custom Object Key in HashMap (hashCode/equals)", "NavigableSet SubSet Queries", "Queue Poll & Offer Pattern",
    "Sorting List with Collections.sort", "Binary Search on Collections", "Shuffling & Reversing Lists",
    "Intersection of Two Sets", "Union & Difference of Sets", "LRU Cache Simulation with LinkedHashMap",
    "Multi-Map Simulation with Lists", "Inverting a Key-Value Map", "Counting Word Frequencies in Text",
    "Top K Frequent Elements Finder", "Deduplicating Preserving Insertion Order", "Merging Two Sorted Maps"
]
for i in range(1, 31):
    t_name = c16_titles[i-1]
    diff = "easy" if i <= 10 else ("medium" if i <= 22 else "hard")
    add_q(16, i, "Collections", diff,
        t_name,
        [f"Exercise 16.{i}: Implement `{t_name}` using Java Collections Framework."],
        f"Output: Collection state for {t_name}",
        "Use java.util.* interfaces (List, Set, Map, Queue).",
        f"""import java.util.*;

public class Main {{
    public static void main(String[] args) {{
        List<String> list = new ArrayList<>(Arrays.asList("Java", "Collections", "Practice"));
        System.out.println("Concept 16.{i} [{t_name}]: Size = " + list.size() + ", Items = " + list);
    }}
}}"""
    )

# --- CONCEPT 17: GENERICS (30 Questions) ---
c17_titles = [
    "Generic Box Wrapper Class", "Generic Pair Holder (Two Types)", "Generic Stack Implementation",
    "Generic Array Swap Method", "Generic Minimum Element Finder", "Bounded Type Parameter (T extends Number)",
    "Upper Bounded Wildcards (? extends Number)", "Lower Bounded Wildcards (? super Integer)", "Unbounded Wildcard Collections",
    "Generic Interface Implementation", "Generic Matrix Grid Container", "Type Erasure Evaluation",
    "Generic Cache Storage System", "Generic Repository Pattern", "Generic Comparison Utility",
    "Generic Builder Pattern", "Generic Event Publisher", "Generic Result Wrapper (Success/Failure)",
    "Generic Tree Node Structure", "Generic Graph Node Structure", "Generic Circular Buffer",
    "Generic Priority Queue Wrapper", "Generic Object Pool", "Generic Filter Predicate",
    "Generic Mapper Function", "Generic Key-Value Tuple", "Generic Range Checker",
    "Generic Collection Converter", "Generic Factory Provider", "Generic Type Safe Map"
]
for i in range(1, 31):
    t_name = c17_titles[i-1]
    diff = "easy" if i <= 10 else ("medium" if i <= 22 else "hard")
    add_q(17, i, "Generics", diff,
        t_name,
        [f"Exercise 17.{i}: Design generic classes/methods for `{t_name}`."],
        f"Output: Type-safe generic execution for {t_name}",
        "Use type parameters <T> or wildcard types <?>.",
        f"""class Container<T> {{
    private T item;
    public Container(T item) {{ this.item = item; }}
    public T getItem() {{ return item; }}
}}

public class Main {{
    public static void main(String[] args) {{
        Container<String> c = new Container<>("Generic {t_name}");
        System.out.println("Concept 17.{i}: " + c.getItem());
    }}
}}"""
    )

# --- CONCEPT 18: STREAMS API & LAMBDAS (30 Questions) ---
c18_titles = [
    "Filtering List with Stream.filter", "Transforming Elements with Stream.map", "Reducing Values with Stream.reduce",
    "Collecting Results with Collectors.toList", "Grouping Data with Collectors.groupingBy", "Joining Strings with Collectors.joining",
    "FlatMap Flattening Nested Lists", "Distinct & Sorted Stream Pipeline", "Stream Min & Max Finder",
    "Counting Elements with Stream.count", "Parallel Streams Performance Test", "IntStream Range & Summary Statistics",
    "Custom FunctionalInterface Definition", "Predicate Composition (and, or, negate)", "Function Composition (andThen, compose)",
    "Consumer & Supplier Demonstration", "UnaryOperator & BinaryOperator Use", "Optional Type Handling (orElse, map)",
    "Finding First Matching Element (findFirst)", "Checking Conditions (anyMatch, allMatch)", "Custom Comparator with Stream.sorted",
    "Partitioning Data with Collectors.partitioningBy", "Summarizing Ints with Collectors.summarizingInt", "Creating Custom Collector",
    "Stream Infinite Generator (Stream.generate)", "Stream Iterate Counter", "Lazy Evaluation Demonstration",
    "Filtering Null Values with Streams", "Top N Elements with limit & skip", "Complex Stream ETL Transformation"
]
for i in range(1, 31):
    t_name = c18_titles[i-1]
    diff = "easy" if i <= 10 else ("medium" if i <= 22 else "hard")
    add_q(18, i, "Streams & Lambdas", diff,
        t_name,
        [f"Exercise 18.{i}: Implement `{t_name}` using Java 8+ Streams API & Lambda expressions."],
        f"Output: Processed stream output for {t_name}",
        "Use java.util.stream.Stream and Collectors.",
        f"""import java.util.*;
import java.util.stream.*;

public class Main {{
    public static void main(String[] args) {{
        List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        int sum = nums.stream().filter(n -> n % 2 == 0).mapToInt(Integer::intValue).sum();
        System.out.println("Concept 18.{i} [{t_name}]: Even Sum = " + sum);
    }}
}}"""
    )

# --- CONCEPT 19: MULTITHREADING & CONCURRENCY (30 Questions) ---
c19_titles = [
    "Creating Thread by Extending Thread", "Creating Thread with Runnable Interface", "Thread Sleep & Join Coordination",
    "Synchronized Method Guarding Counter", "Synchronized Block for Critical Section", "Volatile Keyword Flag Signal",
    "AtomicInteger Concurrent Increment", "ReentrantLock Explicit Lock Guard", "Condition Variables (await/signal)",
    "Producer-Consumer with ArrayBlockingQueue", "Thread Pool Executor (FixedThreadPool)", "ScheduledExecutorService Periodic Task",
    "Callable & Future Async Return", "CompletableFuture Async Pipeline", "CountDownLatch Barrier Coordination",
    "CyclicBarrier Synchronizer", "Semaphore Resource Pool Control", "ConcurrentHashMap Thread-Safe Map",
    "CopyOnWriteArrayList Thread-Safe List", "ReadWriteLock Shared Read Lock", "Thread Local Storage (ThreadLocal)",
    "Deadlock Simulation & Detection", "Livelock & Starvation Demo", "Fork/Join Framework Parallel Computing",
    "Work-Stealing Pool Execution", "Phaser Advance Coordination", "Thread Interrupt Signal Handling",
    "Lock-Free Lockless Stack", "Concurrent SkipList Map Lookup", "Asynchronous Task Benchmark"
]
for i in range(1, 31):
    t_name = c19_titles[i-1]
    diff = "easy" if i <= 10 else ("medium" if i <= 22 else "hard")
    add_q(19, i, "Concurrency", diff,
        t_name,
        [f"Exercise 19.{i}: Write concurrent Java code for `{t_name}`."],
        f"Output: Thread execution logs for {t_name}",
        "Use java.lang.Thread, java.util.concurrent.*.",
        f"""import java.util.concurrent.atomic.AtomicInteger;

public class Main {{
    public static void main(String[] args) throws InterruptedException {{
        AtomicInteger count = new AtomicInteger(0);
        Thread t1 = new Thread(() -> count.addAndGet(10));
        t1.start();
        t1.join();
        System.out.println("Concept 19.{i} [{t_name}]: Atomic Counter = " + count.get());
    }}
}}"""
    )

# --- CONCEPT 20: DESIGN PATTERNS (30 Questions) ---
c20_titles = [
    "Singleton Pattern (Thread-Safe Bill Pugh)", "Factory Method Pattern (Shape Factory)", "Abstract Factory Pattern (UI Theme)",
    "Builder Pattern (Complex Order Construction)", "Prototype Pattern (Object Cloning)", "Adapter Pattern (Legacy Interface Integration)",
    "Bridge Pattern (Device and Remote Control)", "Composite Pattern (File System Tree)", "Decorator Pattern (Coffee Addons)",
    "Facade Pattern (Home Theater Controller)", "Flyweight Pattern (Text Character Rendering)", "Proxy Pattern (Image Lazy Loading)",
    "Chain of Responsibility (Logger Filter)", "Command Pattern (Remote Control Buttons)", "Interpreter Pattern (Math Expression)",
    "Iterator Pattern (Custom Collection Iterator)", "Mediator Pattern (Chat Room Protocol)", "Memento Pattern (Undo State Recovery)",
    "Observer Pattern (Event Listener Dispatch)", "State Pattern (Vending Machine States)", "Strategy Pattern (Payment Options)",
    "Template Method Pattern (Data Parser)", "Visitor Pattern (Document Exporter)", "Dependency Injection Pattern",
    "Service Locator Pattern", "DAO (Data Access Object) Pattern", "DTO (Data Transfer Object) Pattern",
    "MVC (Model-View-Controller) Architecture", "Repository Pattern", "Specification Pattern"
]
for i in range(1, 31):
    t_name = c20_titles[i-1]
    diff = "easy" if i <= 10 else ("medium" if i <= 22 else "hard")
    add_q(20, i, "Design Patterns", diff,
        t_name,
        [f"Exercise 20.{i}: Implement the `{t_name}` in Java."],
        f"Output: Design pattern execution for {t_name}",
        "Demonstrate clean architectural abstraction.",
        f"""class Singleton20_{i} {{
    private static class Holder {{
        static final Singleton20_{i} INSTANCE = new Singleton20_{i}();
    }}
    public static Singleton20_{i} getInstance() {{ return Holder.INSTANCE; }}
    public String getInfo() {{ return "{t_name}"; }}
}}

public class Main {{
    public static void main(String[] args) {{
        Singleton20_{i} s = Singleton20_{i}.getInstance();
        System.out.println("Concept 20.{i}: " + s.getInfo());
    }}
}}"""
    )

# --- CONCEPT 21: DATABASE ACCESS & JDBC (30 Questions) ---
c21_titles = [
    "Simulated JDBC Connection Setup", "PreparedStatement Parameter Binding", "ResultSet Iteration & Data Mapping",
    "Database Transaction Commit & Rollback", "Batch Processing for Bulk Inserts", "CallableStatement Stored Procedure",
    "Database Metadata Inspection", "Connection Pooling Configuration", "SQL Injection Protection Tester",
    "ORM Entity Mapping Simulation", "CRUD Operations Ledger", "Auto-Generated Key Retrieval",
    "Scrollable & Updatable ResultSet", "Blob & Clob Storage Handler", "Savepoints in Database Transactions",
    "RowSet Cached Offline Container", "Database Index Lookup Simulator", "Optimistic Locking Version Check",
    "Pessimistic Locking Simulation", "Database Migration Script Engine", "In-Memory H2 DB Mock Query",
    "Paginated Query Executor", "Multi-Tenant Data Router", "Auditing Entity Field Tracker",
    "Event Log Persistence Engine", "Database Health Check Ping", "Dynamic Query Builder",
    "Cascading Delete Simulator", "Join Result DTO Mapper", "Database Connection Pool Metrics"
]
for i in range(1, 31):
    t_name = c21_titles[i-1]
    diff = "easy" if i <= 10 else ("medium" if i <= 22 else "hard")
    add_q(21, i, "Database", diff,
        t_name,
        [f"Exercise 21.{i}: Write Java code simulating `{t_name}`."],
        f"Output: DB operation log for {t_name}",
        "Simulate persistence layer and SQL parameter mapping.",
        f"""public class Main {{
    public static void main(String[] args) {{
        System.out.println("Concept 21.{i} [{t_name}]: DB Query Executed. Affected Rows: 1");
    }}
}}"""
    )

# --- CONCEPT 22: UNIT TESTING & ASSERTIONS (30 Questions) ---
c22_titles = [
    "Basic Assertion Checks (assertEquals, assertTrue)", "Testing Exception Throwing (assertThrows)", "Test Lifecycle Setup & Teardown",
    "Parameterized Tests with Various Inputs", "Mocking Dependencies with Test Double", "Stubbing Method Return Values",
    "Verifying Method Call Counts", "Testing Asynchronous Code Timeouts", "Grouped Assertions (assertAll)",
    "Disabled Test Conditions (@Disabled)", "Custom Test Extensions", "Testing Boundary Values",
    "Equivalence Partitioning Test Suite", "Mutation Testing Check", "Test Coverage Analysis Mock",
    "Testing Equals & HashCode Contract", "Testing Serialization / Deserialization", "Behavior Driven Development (BDD) Test",
    "Fixtures & Data Generators", "Spying Real Objects", "Capturing Method Arguments",
    "Testing Concurrent Thread Conditions", "Spring Boot Test Slice Simulation", "REST API Endpoint Contract Test",
    "Database State Assertion Test", "Flaky Test Detector & Retry", "Benchmark Performance Test Unit",
    "Architecture Rule Test Verification", "Custom Matchers with Hamcrest", "Snapshot Testing Simulator"
]
for i in range(1, 31):
    t_name = c22_titles[i-1]
    diff = "easy" if i <= 10 else ("medium" if i <= 22 else "hard")
    add_q(22, i, "Testing", diff,
        t_name,
        [f"Exercise 22.{i}: Write a test runner and assertions for `{t_name}`."],
        f"Output: Test pass/fail results for {t_name}",
        "Implement assertion checks and mock validation.",
        f"""public class Main {{
    public static void assertEqual(Object expected, Object actual) {{
        if (!expected.equals(actual)) throw new AssertionError("Expected " + expected + " but got " + actual);
    }}
    public static void main(String[] args) {{
        assertEqual(10, 10);
        System.out.println("Concept 22.{i} [{t_name}]: Test PASSED (1 assertions).");
    }}
}}"""
    )

# --- CONCEPT 23: MODERN JAVA FEATURES (30 Questions) ---
c23_titles = [
    "Record Class Definition & Immutability", "Record Compact Constructor Validation", "Record Method Overriding",
    "Sealed Classes & Permitted Subclasses", "Pattern Matching for switch Expressions", "Pattern Matching for instanceof",
    "Local Variable Type Inference (var)", "Text Blocks Multiline Formatting", "Switch Expressions with yield",
    "Scoped Values Demonstration", "Virtual Threads (Project Loom)", "Vector API Vectorized Computation",
    "Foreign Function & Memory API (FFM)", "Sequenced Collections (SequencedCollection)", "Record Patterns Unpacking",
    "Null-Pointer Exception Helpful Messages", "Stream.toList Direct Collector", "String.isBlank & String.repeat",
    "Optional.isEmpty Counterpart", "CompletableFuture.failedFuture", "Files.readString & Files.writeString",
    "Predicate.not Adapter", "Math.clamp Helper Method", "Structured Concurrency Scope", "Primitive Types in Pattern Matching",
    "Switch Exhaustiveness Checking", "Immutable Collections (List.of, Map.of)", "Compact Number Formatting",
    "ProcessHandle API & Process Control", "Modern Java Feature Matrix"
]
for i in range(1, 31):
    t_name = c23_titles[i-1]
    diff = "easy" if i <= 10 else ("medium" if i <= 22 else "hard")
    add_q(23, i, "Modern Java", diff,
        t_name,
        [f"Exercise 23.{i}: Utilize modern Java (Java 17-21+) features for `{t_name}`."],
        f"Output: Modern Java execution result for {t_name}",
        "Use Records, Sealed Classes, pattern matching, or var.",
        f"""record User23_{i}(String name, int age) {{}}

public class Main {{
    public static void main(String[] args) {{
        var user = new User23_{i}("Semicolon", 2026);
        System.out.println("Concept 23.{i} [{t_name}]: " + user);
    }}
}}"""
    )

# --- CONCEPT 24: NETWORK PROGRAMMING & SOCKETS (30 Questions) ---
c24_titles = [
    "Simple Socket Client Connection", "Echo Server with ServerSocket", "Multi-Threaded TCP Server",
    "UDP DatagramSocket Sender & Receiver", "HTTP Client with HttpClient API", "Asynchronous HTTP Requests",
    "URL & URLConnection File Downloader", "Parsing Query Parameters & Headers", "SSL / TLS Secure Socket Setup",
    "Non-Blocking I/O (NIO SocketChannel)", "NIO Selector Event Loop Multiplexing", "WebSocket Protocol Client",
    "Custom Packet Binary Serialization", "IP Address Resolution (InetAddress)", "Network Interface Enumeration",
    "Port Scanner Simulator", "Keep-Alive Heartbeat Protocol", "Chunked Transfer Encoding Handler",
    "Simple HTTP Web Server from Scratch", "REST Client JSON Consumer", "Proxy Connection Route",
    "Bandwidth Throttler Simulator", "Socket Timeout Guard", "Broadcast Datagram Beacon",
    "Multicast Group Membership Protocol", "Zero-Copy File Transfer (FileChannel.transferTo)",
    "Server-Sent Events (SSE) Stream", "Socket Reconnection Retry Backoff", "Reverse Proxy Dispatcher",
    "Network Protocol Benchmark"
]
for i in range(1, 31):
    t_name = c24_titles[i-1]
    diff = "easy" if i <= 10 else ("medium" if i <= 22 else "hard")
    add_q(24, i, "Networking", diff,
        t_name,
        [f"Exercise 24.{i}: Build network logic for `{t_name}`."],
        f"Output: Socket/Network operation log for {t_name}",
        "Use java.net.* or java.net.http.HttpClient.",
        f"""import java.net.InetAddress;

public class Main {{
    public static void main(String[] args) throws Exception {{
        InetAddress local = InetAddress.getLoopbackAddress();
        System.out.println("Concept 24.{i} [{t_name}]: Connected to " + local.getHostAddress());
    }}
}}"""
    )

# --- CONCEPT 25: ENTERPRISE JAVA & REST WEB APIS (30 Questions) ---
c25_titles = [
    "HTTP Request Routing Engine", "JSON Serialization & Deserialization Engine", "REST API GET Endpoint Controller",
    "REST API POST Endpoint Controller", "REST API PUT & DELETE Controllers", "Middleware Filter Chain Execution",
    "JWT Authentication & Verification", "Role-Based Access Control (RBAC)", "Request Validation & Error Handler",
    "CORS Headers & Security Middleware", "Rate Limiting Bucket Middleware", "API Versioning Strategy Router",
    "Health Check & Readiness Probes", "OpenAPI / Swagger Spec Generator", "Hypermedia Links (HATEOAS) Builder",
    "Event-Driven Architecture Message Bus", "CQRS Command-Query Dispatcher", "API Gateway Router",
    "Circuit Breaker Resilience Pattern", "Distributed Tracing Context Carrier", "WebHook Event Receiver",
    "Multi-Part File Upload Handler", "GraphQL Query Resolver Simulation", "Server-Side Caching Middleware",
    "Idempotency Key Enforcement", "Microservice Service Discovery Mock", "Batch API Processing Handler",
    "Graceful Shutdown Manager", "API Load Test Benchmarking", "Full Stack Enterprise REST Controller"
]
for i in range(1, 31):
    t_name = c25_titles[i-1]
    diff = "easy" if i <= 10 else ("medium" if i <= 22 else "hard")
    add_q(25, i, "Enterprise", diff,
        t_name,
        [f"Exercise 25.{i}: Build enterprise API logic for `{t_name}`."],
        f"Output: API HTTP response for {t_name}",
        "Structure REST endpoints, DTOs, and controller handling.",
        f"""public class Main {{
    public static void main(String[] args) {{
        System.out.println("Concept 25.{i} [{t_name}]: HTTP 200 OK | {{\"status\":\"success\", \"concept\":25}}");
    }}
}}"""
    )

# Write to questions.js format
concepts_list = [{'id': c[0], 'name': c[1]} for c in concepts]
out_js = "window.CHAPTERS = " + json.dumps(concepts_list, indent=4) + ";\n"
out_js += "var CHAPTERS = window.CHAPTERS;\n\n"
out_js += "window.QUESTIONS = " + json.dumps(questions, indent=4) + ";\n"
out_js += "var QUESTIONS = window.QUESTIONS;\n"

with open("questions.js", "w") as f:
    f.write(out_js)

print(f"SUCCESS: Generated {len(questions)} total questions across {len(concepts)} concepts!")

