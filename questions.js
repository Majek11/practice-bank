const CHAPTERS = [
    {
        "id": 1,
        "name": "Java Syntax, I/O & Variables"
    },
    {
        "id": 2,
        "name": "Operators & Arithmetic Expressions"
    },
    {
        "id": 3,
        "name": "Intro to Classes & Objects"
    },
    {
        "id": 4,
        "name": "Conditionals & Control Flow"
    },
    {
        "id": 5,
        "name": "Loops & Repetition Logic"
    },
    {
        "id": 6,
        "name": "Methods & Code Reusability"
    },
    {
        "id": 7,
        "name": "1D/2D Arrays & ArrayLists"
    },
    {
        "id": 8,
        "name": "Encapsulation & Class Design"
    },
    {
        "id": 9,
        "name": "Object Hierarchy & Inheritance"
    },
    {
        "id": 10,
        "name": "Polymorphism & Interfaces"
    },
    {
        "id": 11,
        "name": "Robustness & Exception Handling"
    },
    {
        "id": 12,
        "name": "Strings, StringBuilder & Regex"
    },
    {
        "id": 13,
        "name": "File I/O Streams & Persistence"
    },
    {
        "id": 14,
        "name": "Recursion & Backtracking"
    },
    {
        "id": 15,
        "name": "Searching, Sorting & Big O"
    },
    {
        "id": 16,
        "name": "Collections Framework (List, Set, Map)"
    },
    {
        "id": 17,
        "name": "Generics & Type Safety"
    },
    {
        "id": 18,
        "name": "Streams API & Functional Lambdas"
    },
    {
        "id": 19,
        "name": "Multithreading & Concurrency"
    },
    {
        "id": 20,
        "name": "Design Patterns in Java"
    },
    {
        "id": 21,
        "name": "Database Access & JDBC"
    },
    {
        "id": 22,
        "name": "Unit Testing & Assertions"
    },
    {
        "id": 23,
        "name": "Modern Java Features (Records, Var)"
    },
    {
        "id": 24,
        "name": "Network Programming & Sockets"
    },
    {
        "id": 25,
        "name": "Enterprise Java & REST Web APIs"
    }
];

const QUESTIONS = [
    {
        "id": "c1-01",
        "chapter": 1,
        "topic": "Java Basics",
        "difficulty": "easy",
        "title": "Concept 1.1 \u2014 Exercise 1.1: Java Environment & Output Warmup #1",
        "prompt": [
            "Write a program for Exercise 1.1 that prints student message #1 to stdout formatted with System.out.println or printf."
        ],
        "io": "Output:\n[Java Practice] Student Warmup #1: Ready for Java Practice!",
        "hint": "Use System.out.println(\"[Java Practice] ...\");",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 1.1 \u2014 Exercise 1.1: Java Environment & Output Warmup #1\n        \n    }\n}"
    },
    {
        "id": "c1-02",
        "chapter": 1,
        "topic": "Java Basics",
        "difficulty": "easy",
        "title": "Concept 1.2 \u2014 Exercise 1.2: Java Environment & Output Warmup #2",
        "prompt": [
            "Write a program for Exercise 1.2 that prints student message #2 to stdout formatted with System.out.println or printf."
        ],
        "io": "Output:\n[Java Practice] Student Warmup #2: Ready for Java Practice!",
        "hint": "Use System.out.println(\"[Java Practice] ...\");",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 1.2 \u2014 Exercise 1.2: Java Environment & Output Warmup #2\n        \n    }\n}"
    },
    {
        "id": "c1-03",
        "chapter": 1,
        "topic": "Java Basics",
        "difficulty": "easy",
        "title": "Concept 1.3 \u2014 Exercise 1.3: Java Environment & Output Warmup #3",
        "prompt": [
            "Write a program for Exercise 1.3 that prints student message #3 to stdout formatted with System.out.println or printf."
        ],
        "io": "Output:\n[Java Practice] Student Warmup #3: Ready for Java Practice!",
        "hint": "Use System.out.println(\"[Java Practice] ...\");",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 1.3 \u2014 Exercise 1.3: Java Environment & Output Warmup #3\n        \n    }\n}"
    },
    {
        "id": "c1-04",
        "chapter": 1,
        "topic": "Java Basics",
        "difficulty": "easy",
        "title": "Concept 1.4 \u2014 Exercise 1.4: Java Environment & Output Warmup #4",
        "prompt": [
            "Write a program for Exercise 1.4 that prints student message #4 to stdout formatted with System.out.println or printf."
        ],
        "io": "Output:\n[Java Practice] Student Warmup #4: Ready for Java Practice!",
        "hint": "Use System.out.println(\"[Java Practice] ...\");",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 1.4 \u2014 Exercise 1.4: Java Environment & Output Warmup #4\n        \n    }\n}"
    },
    {
        "id": "c1-05",
        "chapter": 1,
        "topic": "Java Basics",
        "difficulty": "easy",
        "title": "Concept 1.5 \u2014 Exercise 1.5: Java Environment & Output Warmup #5",
        "prompt": [
            "Write a program for Exercise 1.5 that prints student message #5 to stdout formatted with System.out.println or printf."
        ],
        "io": "Output:\n[Java Practice] Student Warmup #5: Ready for Java Practice!",
        "hint": "Use System.out.println(\"[Java Practice] ...\");",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 1.5 \u2014 Exercise 1.5: Java Environment & Output Warmup #5\n        \n    }\n}"
    },
    {
        "id": "c1-06",
        "chapter": 1,
        "topic": "Java Basics",
        "difficulty": "easy",
        "title": "Concept 1.6 \u2014 Exercise 1.6: Java Environment & Output Warmup #6",
        "prompt": [
            "Write a program for Exercise 1.6 that prints student message #6 to stdout formatted with System.out.println or printf."
        ],
        "io": "Output:\n[Java Practice] Student Warmup #6: Ready for Java Practice!",
        "hint": "Use System.out.println(\"[Java Practice] ...\");",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 1.6 \u2014 Exercise 1.6: Java Environment & Output Warmup #6\n        \n    }\n}"
    },
    {
        "id": "c1-07",
        "chapter": 1,
        "topic": "Java Basics",
        "difficulty": "easy",
        "title": "Concept 1.7 \u2014 Exercise 1.7: Java Environment & Output Warmup #7",
        "prompt": [
            "Write a program for Exercise 1.7 that prints student message #7 to stdout formatted with System.out.println or printf."
        ],
        "io": "Output:\n[Java Practice] Student Warmup #7: Ready for Java Practice!",
        "hint": "Use System.out.println(\"[Java Practice] ...\");",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 1.7 \u2014 Exercise 1.7: Java Environment & Output Warmup #7\n        \n    }\n}"
    },
    {
        "id": "c1-08",
        "chapter": 1,
        "topic": "Java Basics",
        "difficulty": "easy",
        "title": "Concept 1.8 \u2014 Exercise 1.8: Java Environment & Output Warmup #8",
        "prompt": [
            "Write a program for Exercise 1.8 that prints student message #8 to stdout formatted with System.out.println or printf."
        ],
        "io": "Output:\n[Java Practice] Student Warmup #8: Ready for Java Practice!",
        "hint": "Use System.out.println(\"[Java Practice] ...\");",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 1.8 \u2014 Exercise 1.8: Java Environment & Output Warmup #8\n        \n    }\n}"
    },
    {
        "id": "c1-09",
        "chapter": 1,
        "topic": "Java Basics",
        "difficulty": "easy",
        "title": "Concept 1.9 \u2014 Exercise 1.9: Java Environment & Output Warmup #9",
        "prompt": [
            "Write a program for Exercise 1.9 that prints student message #9 to stdout formatted with System.out.println or printf."
        ],
        "io": "Output:\n[Java Practice] Student Warmup #9: Ready for Java Practice!",
        "hint": "Use System.out.println(\"[Java Practice] ...\");",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 1.9 \u2014 Exercise 1.9: Java Environment & Output Warmup #9\n        \n    }\n}"
    },
    {
        "id": "c1-10",
        "chapter": 1,
        "topic": "Java Basics",
        "difficulty": "easy",
        "title": "Concept 1.10 \u2014 Exercise 1.10: Java Environment & Output Warmup #10",
        "prompt": [
            "Write a program for Exercise 1.10 that prints student message #10 to stdout formatted with System.out.println or printf."
        ],
        "io": "Output:\n[Java Practice] Student Warmup #10: Ready for Java Practice!",
        "hint": "Use System.out.println(\"[Java Practice] ...\");",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 1.10 \u2014 Exercise 1.10: Java Environment & Output Warmup #10\n        \n    }\n}"
    },
    {
        "id": "c1-11",
        "chapter": 1,
        "topic": "Java Basics",
        "difficulty": "easy",
        "title": "Concept 1.11 \u2014 Exercise 1.11: Java Environment & Output Warmup #11",
        "prompt": [
            "Write a program for Exercise 1.11 that prints student message #11 to stdout formatted with System.out.println or printf."
        ],
        "io": "Output:\n[Java Practice] Student Warmup #11: Ready for Java Practice!",
        "hint": "Use System.out.println(\"[Java Practice] ...\");",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 1.11 \u2014 Exercise 1.11: Java Environment & Output Warmup #11\n        \n    }\n}"
    },
    {
        "id": "c1-12",
        "chapter": 1,
        "topic": "Java Basics",
        "difficulty": "easy",
        "title": "Concept 1.12 \u2014 Exercise 1.12: Java Environment & Output Warmup #12",
        "prompt": [
            "Write a program for Exercise 1.12 that prints student message #12 to stdout formatted with System.out.println or printf."
        ],
        "io": "Output:\n[Java Practice] Student Warmup #12: Ready for Java Practice!",
        "hint": "Use System.out.println(\"[Java Practice] ...\");",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 1.12 \u2014 Exercise 1.12: Java Environment & Output Warmup #12\n        \n    }\n}"
    },
    {
        "id": "c1-13",
        "chapter": 1,
        "topic": "Java Basics",
        "difficulty": "easy",
        "title": "Concept 1.13 \u2014 Exercise 1.13: Java Environment & Output Warmup #13",
        "prompt": [
            "Write a program for Exercise 1.13 that prints student message #13 to stdout formatted with System.out.println or printf."
        ],
        "io": "Output:\n[Java Practice] Student Warmup #13: Ready for Java Practice!",
        "hint": "Use System.out.println(\"[Java Practice] ...\");",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 1.13 \u2014 Exercise 1.13: Java Environment & Output Warmup #13\n        \n    }\n}"
    },
    {
        "id": "c1-14",
        "chapter": 1,
        "topic": "Java Basics",
        "difficulty": "easy",
        "title": "Concept 1.14 \u2014 Exercise 1.14: Java Environment & Output Warmup #14",
        "prompt": [
            "Write a program for Exercise 1.14 that prints student message #14 to stdout formatted with System.out.println or printf."
        ],
        "io": "Output:\n[Java Practice] Student Warmup #14: Ready for Java Practice!",
        "hint": "Use System.out.println(\"[Java Practice] ...\");",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 1.14 \u2014 Exercise 1.14: Java Environment & Output Warmup #14\n        \n    }\n}"
    },
    {
        "id": "c1-15",
        "chapter": 1,
        "topic": "Java Basics",
        "difficulty": "easy",
        "title": "Concept 1.15 \u2014 Exercise 1.15: Java Environment & Output Warmup #15",
        "prompt": [
            "Write a program for Exercise 1.15 that prints student message #15 to stdout formatted with System.out.println or printf."
        ],
        "io": "Output:\n[Java Practice] Student Warmup #15: Ready for Java Practice!",
        "hint": "Use System.out.println(\"[Java Practice] ...\");",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 1.15 \u2014 Exercise 1.15: Java Environment & Output Warmup #15\n        \n    }\n}"
    },
    {
        "id": "c1-16",
        "chapter": 1,
        "topic": "Java Basics",
        "difficulty": "medium",
        "title": "Concept 1.16 \u2014 Exercise 1.16: Java Environment & Output Warmup #16",
        "prompt": [
            "Write a program for Exercise 1.16 that prints student message #16 to stdout formatted with System.out.println or printf."
        ],
        "io": "Output:\n[Java Practice] Student Warmup #16: Ready for Java Practice!",
        "hint": "Use System.out.println(\"[Java Practice] ...\");",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 1.16 \u2014 Exercise 1.16: Java Environment & Output Warmup #16\n        \n    }\n}"
    },
    {
        "id": "c1-17",
        "chapter": 1,
        "topic": "Java Basics",
        "difficulty": "medium",
        "title": "Concept 1.17 \u2014 Exercise 1.17: Java Environment & Output Warmup #17",
        "prompt": [
            "Write a program for Exercise 1.17 that prints student message #17 to stdout formatted with System.out.println or printf."
        ],
        "io": "Output:\n[Java Practice] Student Warmup #17: Ready for Java Practice!",
        "hint": "Use System.out.println(\"[Java Practice] ...\");",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 1.17 \u2014 Exercise 1.17: Java Environment & Output Warmup #17\n        \n    }\n}"
    },
    {
        "id": "c1-18",
        "chapter": 1,
        "topic": "Java Basics",
        "difficulty": "medium",
        "title": "Concept 1.18 \u2014 Exercise 1.18: Java Environment & Output Warmup #18",
        "prompt": [
            "Write a program for Exercise 1.18 that prints student message #18 to stdout formatted with System.out.println or printf."
        ],
        "io": "Output:\n[Java Practice] Student Warmup #18: Ready for Java Practice!",
        "hint": "Use System.out.println(\"[Java Practice] ...\");",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 1.18 \u2014 Exercise 1.18: Java Environment & Output Warmup #18\n        \n    }\n}"
    },
    {
        "id": "c1-19",
        "chapter": 1,
        "topic": "Java Basics",
        "difficulty": "medium",
        "title": "Concept 1.19 \u2014 Exercise 1.19: Java Environment & Output Warmup #19",
        "prompt": [
            "Write a program for Exercise 1.19 that prints student message #19 to stdout formatted with System.out.println or printf."
        ],
        "io": "Output:\n[Java Practice] Student Warmup #19: Ready for Java Practice!",
        "hint": "Use System.out.println(\"[Java Practice] ...\");",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 1.19 \u2014 Exercise 1.19: Java Environment & Output Warmup #19\n        \n    }\n}"
    },
    {
        "id": "c1-20",
        "chapter": 1,
        "topic": "Java Basics",
        "difficulty": "medium",
        "title": "Concept 1.20 \u2014 Exercise 1.20: Java Environment & Output Warmup #20",
        "prompt": [
            "Write a program for Exercise 1.20 that prints student message #20 to stdout formatted with System.out.println or printf."
        ],
        "io": "Output:\n[Java Practice] Student Warmup #20: Ready for Java Practice!",
        "hint": "Use System.out.println(\"[Java Practice] ...\");",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 1.20 \u2014 Exercise 1.20: Java Environment & Output Warmup #20\n        \n    }\n}"
    },
    {
        "id": "c1-21",
        "chapter": 1,
        "topic": "Java Basics",
        "difficulty": "medium",
        "title": "Concept 1.21 \u2014 Exercise 1.21: Java Environment & Output Warmup #21",
        "prompt": [
            "Write a program for Exercise 1.21 that prints student message #21 to stdout formatted with System.out.println or printf."
        ],
        "io": "Output:\n[Java Practice] Student Warmup #21: Ready for Java Practice!",
        "hint": "Use System.out.println(\"[Java Practice] ...\");",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 1.21 \u2014 Exercise 1.21: Java Environment & Output Warmup #21\n        \n    }\n}"
    },
    {
        "id": "c1-22",
        "chapter": 1,
        "topic": "Java Basics",
        "difficulty": "medium",
        "title": "Concept 1.22 \u2014 Exercise 1.22: Java Environment & Output Warmup #22",
        "prompt": [
            "Write a program for Exercise 1.22 that prints student message #22 to stdout formatted with System.out.println or printf."
        ],
        "io": "Output:\n[Java Practice] Student Warmup #22: Ready for Java Practice!",
        "hint": "Use System.out.println(\"[Java Practice] ...\");",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 1.22 \u2014 Exercise 1.22: Java Environment & Output Warmup #22\n        \n    }\n}"
    },
    {
        "id": "c1-23",
        "chapter": 1,
        "topic": "Java Basics",
        "difficulty": "medium",
        "title": "Concept 1.23 \u2014 Exercise 1.23: Java Environment & Output Warmup #23",
        "prompt": [
            "Write a program for Exercise 1.23 that prints student message #23 to stdout formatted with System.out.println or printf."
        ],
        "io": "Output:\n[Java Practice] Student Warmup #23: Ready for Java Practice!",
        "hint": "Use System.out.println(\"[Java Practice] ...\");",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 1.23 \u2014 Exercise 1.23: Java Environment & Output Warmup #23\n        \n    }\n}"
    },
    {
        "id": "c1-24",
        "chapter": 1,
        "topic": "Java Basics",
        "difficulty": "medium",
        "title": "Concept 1.24 \u2014 Exercise 1.24: Java Environment & Output Warmup #24",
        "prompt": [
            "Write a program for Exercise 1.24 that prints student message #24 to stdout formatted with System.out.println or printf."
        ],
        "io": "Output:\n[Java Practice] Student Warmup #24: Ready for Java Practice!",
        "hint": "Use System.out.println(\"[Java Practice] ...\");",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 1.24 \u2014 Exercise 1.24: Java Environment & Output Warmup #24\n        \n    }\n}"
    },
    {
        "id": "c1-25",
        "chapter": 1,
        "topic": "Java Basics",
        "difficulty": "medium",
        "title": "Concept 1.25 \u2014 Exercise 1.25: Java Environment & Output Warmup #25",
        "prompt": [
            "Write a program for Exercise 1.25 that prints student message #25 to stdout formatted with System.out.println or printf."
        ],
        "io": "Output:\n[Java Practice] Student Warmup #25: Ready for Java Practice!",
        "hint": "Use System.out.println(\"[Java Practice] ...\");",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 1.25 \u2014 Exercise 1.25: Java Environment & Output Warmup #25\n        \n    }\n}"
    },
    {
        "id": "c1-26",
        "chapter": 1,
        "topic": "Java Basics",
        "difficulty": "medium",
        "title": "Concept 1.26 \u2014 Exercise 1.26: Java Environment & Output Warmup #26",
        "prompt": [
            "Write a program for Exercise 1.26 that prints student message #26 to stdout formatted with System.out.println or printf."
        ],
        "io": "Output:\n[Java Practice] Student Warmup #26: Ready for Java Practice!",
        "hint": "Use System.out.println(\"[Java Practice] ...\");",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 1.26 \u2014 Exercise 1.26: Java Environment & Output Warmup #26\n        \n    }\n}"
    },
    {
        "id": "c1-27",
        "chapter": 1,
        "topic": "Java Basics",
        "difficulty": "medium",
        "title": "Concept 1.27 \u2014 Exercise 1.27: Java Environment & Output Warmup #27",
        "prompt": [
            "Write a program for Exercise 1.27 that prints student message #27 to stdout formatted with System.out.println or printf."
        ],
        "io": "Output:\n[Java Practice] Student Warmup #27: Ready for Java Practice!",
        "hint": "Use System.out.println(\"[Java Practice] ...\");",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 1.27 \u2014 Exercise 1.27: Java Environment & Output Warmup #27\n        \n    }\n}"
    },
    {
        "id": "c1-28",
        "chapter": 1,
        "topic": "Java Basics",
        "difficulty": "medium",
        "title": "Concept 1.28 \u2014 Exercise 1.28: Java Environment & Output Warmup #28",
        "prompt": [
            "Write a program for Exercise 1.28 that prints student message #28 to stdout formatted with System.out.println or printf."
        ],
        "io": "Output:\n[Java Practice] Student Warmup #28: Ready for Java Practice!",
        "hint": "Use System.out.println(\"[Java Practice] ...\");",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 1.28 \u2014 Exercise 1.28: Java Environment & Output Warmup #28\n        \n    }\n}"
    },
    {
        "id": "c1-29",
        "chapter": 1,
        "topic": "Java Basics",
        "difficulty": "medium",
        "title": "Concept 1.29 \u2014 Exercise 1.29: Java Environment & Output Warmup #29",
        "prompt": [
            "Write a program for Exercise 1.29 that prints student message #29 to stdout formatted with System.out.println or printf."
        ],
        "io": "Output:\n[Java Practice] Student Warmup #29: Ready for Java Practice!",
        "hint": "Use System.out.println(\"[Java Practice] ...\");",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 1.29 \u2014 Exercise 1.29: Java Environment & Output Warmup #29\n        \n    }\n}"
    },
    {
        "id": "c1-30",
        "chapter": 1,
        "topic": "Java Basics",
        "difficulty": "medium",
        "title": "Concept 1.30 \u2014 Exercise 1.30: Java Environment & Output Warmup #30",
        "prompt": [
            "Write a program for Exercise 1.30 that prints student message #30 to stdout formatted with System.out.println or printf."
        ],
        "io": "Output:\n[Java Practice] Student Warmup #30: Ready for Java Practice!",
        "hint": "Use System.out.println(\"[Java Practice] ...\");",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 1.30 \u2014 Exercise 1.30: Java Environment & Output Warmup #30\n        \n    }\n}"
    },
    {
        "id": "c2-01",
        "chapter": 2,
        "topic": "Operators & Arithmetic",
        "difficulty": "easy",
        "title": "Concept 2.1 \u2014 Displaying Text with Multiple Statements",
        "prompt": [
            "Exercise 2.1: Write a program that implements displaying text with multiple statements."
        ],
        "io": "Input: Standard scanner input\nOutput: Computed result for Displaying Text with Multiple Statements",
        "hint": "Refer to Scanner input and basic operators.",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 2.1 \u2014 Displaying Text with Multiple Statements\n        \n    }\n}"
    },
    {
        "id": "c2-02",
        "chapter": 2,
        "topic": "Operators & Arithmetic",
        "difficulty": "easy",
        "title": "Concept 2.2 \u2014 Displaying Text with Single Statement",
        "prompt": [
            "Exercise 2.2: Write a program that implements displaying text with single statement."
        ],
        "io": "Input: Standard scanner input\nOutput: Computed result for Displaying Text with Single Statement",
        "hint": "Refer to Scanner input and basic operators.",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 2.2 \u2014 Displaying Text with Single Statement\n        \n    }\n}"
    },
    {
        "id": "c2-03",
        "chapter": 2,
        "topic": "Operators & Arithmetic",
        "difficulty": "easy",
        "title": "Concept 2.3 \u2014 Printing Text on Multiple Lines",
        "prompt": [
            "Exercise 2.3: Write a program that implements printing text on multiple lines."
        ],
        "io": "Input: Standard scanner input\nOutput: Computed result for Printing Text on Multiple Lines",
        "hint": "Refer to Scanner input and basic operators.",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 2.3 \u2014 Printing Text on Multiple Lines\n        \n    }\n}"
    },
    {
        "id": "c2-04",
        "chapter": 2,
        "topic": "Operators & Arithmetic",
        "difficulty": "easy",
        "title": "Concept 2.4 \u2014 Displaying Formatted Text",
        "prompt": [
            "Exercise 2.4: Write a program that implements displaying formatted text."
        ],
        "io": "Input: Standard scanner input\nOutput: Computed result for Displaying Formatted Text",
        "hint": "Refer to Scanner input and basic operators.",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 2.4 \u2014 Displaying Formatted Text\n        \n    }\n}"
    },
    {
        "id": "c2-05",
        "chapter": 2,
        "topic": "Operators & Arithmetic",
        "difficulty": "easy",
        "title": "Concept 2.5 \u2014 Addition of Two Integers",
        "prompt": [
            "Exercise 2.5: Write a program that implements addition of two integers."
        ],
        "io": "Input: Standard scanner input\nOutput: Computed result for Addition of Two Integers",
        "hint": "Refer to Scanner input and basic operators.",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 2.5 \u2014 Addition of Two Integers\n        \n    }\n}"
    },
    {
        "id": "c2-06",
        "chapter": 2,
        "topic": "Operators & Arithmetic",
        "difficulty": "easy",
        "title": "Concept 2.6 \u2014 Arithmetic Operators",
        "prompt": [
            "Exercise 2.6: Write a program that implements arithmetic operators."
        ],
        "io": "Input: Standard scanner input\nOutput: Computed result for Arithmetic Operators",
        "hint": "Refer to Scanner input and basic operators.",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 2.6 \u2014 Arithmetic Operators\n        \n    }\n}"
    },
    {
        "id": "c2-07",
        "chapter": 2,
        "topic": "Operators & Arithmetic",
        "difficulty": "easy",
        "title": "Concept 2.7 \u2014 Comparing Integers",
        "prompt": [
            "Exercise 2.7: Write a program that implements comparing integers."
        ],
        "io": "Input: Standard scanner input\nOutput: Computed result for Comparing Integers",
        "hint": "Refer to Scanner input and basic operators.",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 2.7 \u2014 Comparing Integers\n        \n    }\n}"
    },
    {
        "id": "c2-08",
        "chapter": 2,
        "topic": "Operators & Arithmetic",
        "difficulty": "easy",
        "title": "Concept 2.8 \u2014 Product of Three Integers",
        "prompt": [
            "Exercise 2.8: Write a program that implements product of three integers."
        ],
        "io": "Input: Standard scanner input\nOutput: Computed result for Product of Three Integers",
        "hint": "Refer to Scanner input and basic operators.",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 2.8 \u2014 Product of Three Integers\n        \n    }\n}"
    },
    {
        "id": "c2-09",
        "chapter": 2,
        "topic": "Operators & Arithmetic",
        "difficulty": "easy",
        "title": "Concept 2.9 \u2014 Circle Area & Perimeter",
        "prompt": [
            "Exercise 2.9: Write a program that implements circle area & perimeter."
        ],
        "io": "Input: Standard scanner input\nOutput: Computed result for Circle Area & Perimeter",
        "hint": "Refer to Scanner input and basic operators.",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 2.9 \u2014 Circle Area & Perimeter\n        \n    }\n}"
    },
    {
        "id": "c2-10",
        "chapter": 2,
        "topic": "Operators & Arithmetic",
        "difficulty": "easy",
        "title": "Concept 2.10 \u2014 Characters & ASCII Values",
        "prompt": [
            "Exercise 2.10: Write a program that implements characters & ascii values."
        ],
        "io": "Input: Standard scanner input\nOutput: Computed result for Characters & ASCII Values",
        "hint": "Refer to Scanner input and basic operators.",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 2.10 \u2014 Characters & ASCII Values\n        \n    }\n}"
    },
    {
        "id": "c2-11",
        "chapter": 2,
        "topic": "Operators & Arithmetic",
        "difficulty": "medium",
        "title": "Concept 2.11 \u2014 Displaying Shapes with Asterisks",
        "prompt": [
            "Exercise 2.11: Write a program that implements displaying shapes with asterisks."
        ],
        "io": "Input: Standard scanner input\nOutput: Computed result for Displaying Shapes with Asterisks",
        "hint": "Refer to Scanner input and basic operators.",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 2.11 \u2014 Displaying Shapes with Asterisks\n        \n    }\n}"
    },
    {
        "id": "c2-12",
        "chapter": 2,
        "topic": "Operators & Arithmetic",
        "difficulty": "medium",
        "title": "Concept 2.12 \u2014 Integer Value of a Character",
        "prompt": [
            "Exercise 2.12: Write a program that implements integer value of a character."
        ],
        "io": "Input: Standard scanner input\nOutput: Computed result for Integer Value of a Character",
        "hint": "Refer to Scanner input and basic operators.",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 2.12 \u2014 Integer Value of a Character\n        \n    }\n}"
    },
    {
        "id": "c2-13",
        "chapter": 2,
        "topic": "Operators & Arithmetic",
        "difficulty": "medium",
        "title": "Concept 2.13 \u2014 Separating Digits in 5-digit Integer",
        "prompt": [
            "Exercise 2.13: Write a program that implements separating digits in 5-digit integer."
        ],
        "io": "Input: Standard scanner input\nOutput: Computed result for Separating Digits in 5-digit Integer",
        "hint": "Refer to Scanner input and basic operators.",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 2.13 \u2014 Separating Digits in 5-digit Integer\n        \n    }\n}"
    },
    {
        "id": "c2-14",
        "chapter": 2,
        "topic": "Operators & Arithmetic",
        "difficulty": "medium",
        "title": "Concept 2.14 \u2014 Table of Squares and Cubes",
        "prompt": [
            "Exercise 2.14: Write a program that implements table of squares and cubes."
        ],
        "io": "Input: Standard scanner input\nOutput: Computed result for Table of Squares and Cubes",
        "hint": "Refer to Scanner input and basic operators.",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 2.14 \u2014 Table of Squares and Cubes\n        \n    }\n}"
    },
    {
        "id": "c2-15",
        "chapter": 2,
        "topic": "Operators & Arithmetic",
        "difficulty": "medium",
        "title": "Concept 2.15 \u2014 Counting Positive, Negative & Zero Values",
        "prompt": [
            "Exercise 2.15: Write a program that implements counting positive, negative & zero values."
        ],
        "io": "Input: Standard scanner input\nOutput: Computed result for Counting Positive, Negative & Zero Values",
        "hint": "Refer to Scanner input and basic operators.",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 2.15 \u2014 Counting Positive, Negative & Zero Values\n        \n    }\n}"
    },
    {
        "id": "c2-16",
        "chapter": 2,
        "topic": "Operators & Arithmetic",
        "difficulty": "medium",
        "title": "Concept 2.16 \u2014 Body Mass Index (BMI) Calculator",
        "prompt": [
            "Exercise 2.16: Write a program that implements body mass index (bmi) calculator."
        ],
        "io": "Input: Standard scanner input\nOutput: Computed result for Body Mass Index (BMI) Calculator",
        "hint": "Refer to Scanner input and basic operators.",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 2.16 \u2014 Body Mass Index (BMI) Calculator\n        \n    }\n}"
    },
    {
        "id": "c2-17",
        "chapter": 2,
        "topic": "Operators & Arithmetic",
        "difficulty": "medium",
        "title": "Concept 2.17 \u2014 World Population Growth Calculator",
        "prompt": [
            "Exercise 2.17: Write a program that implements world population growth calculator."
        ],
        "io": "Input: Standard scanner input\nOutput: Computed result for World Population Growth Calculator",
        "hint": "Refer to Scanner input and basic operators.",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 2.17 \u2014 World Population Growth Calculator\n        \n    }\n}"
    },
    {
        "id": "c2-18",
        "chapter": 2,
        "topic": "Operators & Arithmetic",
        "difficulty": "medium",
        "title": "Concept 2.18 \u2014 Target Heart Rate Calculator",
        "prompt": [
            "Exercise 2.18: Write a program that implements target heart rate calculator."
        ],
        "io": "Input: Standard scanner input\nOutput: Computed result for Target Heart Rate Calculator",
        "hint": "Refer to Scanner input and basic operators.",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 2.18 \u2014 Target Heart Rate Calculator\n        \n    }\n}"
    },
    {
        "id": "c2-19",
        "chapter": 2,
        "topic": "Operators & Arithmetic",
        "difficulty": "medium",
        "title": "Concept 2.19 \u2014 Carpool Savings Calculator",
        "prompt": [
            "Exercise 2.19: Write a program that implements carpool savings calculator."
        ],
        "io": "Input: Standard scanner input\nOutput: Computed result for Carpool Savings Calculator",
        "hint": "Refer to Scanner input and basic operators.",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 2.19 \u2014 Carpool Savings Calculator\n        \n    }\n}"
    },
    {
        "id": "c2-20",
        "chapter": 2,
        "topic": "Operators & Arithmetic",
        "difficulty": "medium",
        "title": "Concept 2.20 \u2014 Checkerboard Pattern of Asterisks",
        "prompt": [
            "Exercise 2.20: Write a program that implements checkerboard pattern of asterisks."
        ],
        "io": "Input: Standard scanner input\nOutput: Computed result for Checkerboard Pattern of Asterisks",
        "hint": "Refer to Scanner input and basic operators.",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 2.20 \u2014 Checkerboard Pattern of Asterisks\n        \n    }\n}"
    },
    {
        "id": "c2-21",
        "chapter": 2,
        "topic": "Operators & Arithmetic",
        "difficulty": "medium",
        "title": "Concept 2.21 \u2014 Multiples of an Integer",
        "prompt": [
            "Exercise 2.21: Write a program that implements multiples of an integer."
        ],
        "io": "Input: Standard scanner input\nOutput: Computed result for Multiples of an Integer",
        "hint": "Refer to Scanner input and basic operators.",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 2.21 \u2014 Multiples of an Integer\n        \n    }\n}"
    },
    {
        "id": "c2-22",
        "chapter": 2,
        "topic": "Operators & Arithmetic",
        "difficulty": "medium",
        "title": "Concept 2.22 \u2014 Diameter, Circumference and Area of Circle",
        "prompt": [
            "Exercise 2.22: Write a program that implements diameter, circumference and area of circle."
        ],
        "io": "Input: Standard scanner input\nOutput: Computed result for Diameter, Circumference and Area of Circle",
        "hint": "Refer to Scanner input and basic operators.",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 2.22 \u2014 Diameter, Circumference and Area of Circle\n        \n    }\n}"
    },
    {
        "id": "c2-23",
        "chapter": 2,
        "topic": "Operators & Arithmetic",
        "difficulty": "hard",
        "title": "Concept 2.23 \u2014 Largest and Smallest Integer in 5 Inputs",
        "prompt": [
            "Exercise 2.23: Write a program that implements largest and smallest integer in 5 inputs."
        ],
        "io": "Input: Standard scanner input\nOutput: Computed result for Largest and Smallest Integer in 5 Inputs",
        "hint": "Refer to Scanner input and basic operators.",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 2.23 \u2014 Largest and Smallest Integer in 5 Inputs\n        \n    }\n}"
    },
    {
        "id": "c2-24",
        "chapter": 2,
        "topic": "Operators & Arithmetic",
        "difficulty": "hard",
        "title": "Concept 2.24 \u2014 Even or Odd Integer Check",
        "prompt": [
            "Exercise 2.24: Write a program that implements even or odd integer check."
        ],
        "io": "Input: Standard scanner input\nOutput: Computed result for Even or Odd Integer Check",
        "hint": "Refer to Scanner input and basic operators.",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 2.24 \u2014 Even or Odd Integer Check\n        \n    }\n}"
    },
    {
        "id": "c2-25",
        "chapter": 2,
        "topic": "Operators & Arithmetic",
        "difficulty": "hard",
        "title": "Concept 2.25 \u2014 Divisibility by 3 and 5",
        "prompt": [
            "Exercise 2.25: Write a program that implements divisibility by 3 and 5."
        ],
        "io": "Input: Standard scanner input\nOutput: Computed result for Divisibility by 3 and 5",
        "hint": "Refer to Scanner input and basic operators.",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 2.25 \u2014 Divisibility by 3 and 5\n        \n    }\n}"
    },
    {
        "id": "c2-26",
        "chapter": 2,
        "topic": "Operators & Arithmetic",
        "difficulty": "hard",
        "title": "Concept 2.26 \u2014 Pythagorean Distance",
        "prompt": [
            "Exercise 2.26: Write a program that implements pythagorean distance."
        ],
        "io": "Input: Standard scanner input\nOutput: Computed result for Pythagorean Distance",
        "hint": "Refer to Scanner input and basic operators.",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 2.26 \u2014 Pythagorean Distance\n        \n    }\n}"
    },
    {
        "id": "c2-27",
        "chapter": 2,
        "topic": "Operators & Arithmetic",
        "difficulty": "hard",
        "title": "Concept 2.27 \u2014 Currency Converter",
        "prompt": [
            "Exercise 2.27: Write a program that implements currency converter."
        ],
        "io": "Input: Standard scanner input\nOutput: Computed result for Currency Converter",
        "hint": "Refer to Scanner input and basic operators.",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 2.27 \u2014 Currency Converter\n        \n    }\n}"
    },
    {
        "id": "c2-28",
        "chapter": 2,
        "topic": "Operators & Arithmetic",
        "difficulty": "hard",
        "title": "Concept 2.28 \u2014 Time Converter (Seconds to Hours/Min)",
        "prompt": [
            "Exercise 2.28: Write a program that implements time converter (seconds to hours/min)."
        ],
        "io": "Input: Standard scanner input\nOutput: Computed result for Time Converter (Seconds to Hours/Min)",
        "hint": "Refer to Scanner input and basic operators.",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 2.28 \u2014 Time Converter (Seconds to Hours/Min)\n        \n    }\n}"
    },
    {
        "id": "c2-29",
        "chapter": 2,
        "topic": "Operators & Arithmetic",
        "difficulty": "hard",
        "title": "Concept 2.29 \u2014 Compound Comparison",
        "prompt": [
            "Exercise 2.29: Write a program that implements compound comparison."
        ],
        "io": "Input: Standard scanner input\nOutput: Computed result for Compound Comparison",
        "hint": "Refer to Scanner input and basic operators.",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 2.29 \u2014 Compound Comparison\n        \n    }\n}"
    },
    {
        "id": "c2-30",
        "chapter": 2,
        "topic": "Operators & Arithmetic",
        "difficulty": "hard",
        "title": "Concept 2.30 \u2014 Celsius to Fahrenheit Converter",
        "prompt": [
            "Exercise 2.30: Write a program that implements celsius to fahrenheit converter."
        ],
        "io": "Input: Standard scanner input\nOutput: Computed result for Celsius to Fahrenheit Converter",
        "hint": "Refer to Scanner input and basic operators.",
        "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        // TODO: Write your code for Concept 2.30 \u2014 Celsius to Fahrenheit Converter\n        \n    }\n}"
    },
    {
        "id": "c3-01",
        "chapter": 3,
        "topic": "OOP",
        "difficulty": "easy",
        "title": "Concept 3.1 \u2014 Account Class with Deposit Method",
        "prompt": [
            "Exercise 3.1: Implement the `AccountClasswithDepositMethod` class with instance variables, getters, setters, and business logic methods."
        ],
        "io": "Output: Validated record for Account Class with Deposit Method",
        "hint": "Ensure encapsulation (private fields) and constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 3.1 \u2014 Account Class with Deposit Method\n        \n    }\n}"
    },
    {
        "id": "c3-02",
        "chapter": 3,
        "topic": "OOP",
        "difficulty": "easy",
        "title": "Concept 3.2 \u2014 Account Class with Withdraw Method",
        "prompt": [
            "Exercise 3.2: Implement the `AccountClasswithWithdrawMethod` class with instance variables, getters, setters, and business logic methods."
        ],
        "io": "Output: Validated record for Account Class with Withdraw Method",
        "hint": "Ensure encapsulation (private fields) and constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 3.2 \u2014 Account Class with Withdraw Method\n        \n    }\n}"
    },
    {
        "id": "c3-03",
        "chapter": 3,
        "topic": "OOP",
        "difficulty": "easy",
        "title": "Concept 3.3 \u2014 Invoice Class for Hardware Store",
        "prompt": [
            "Exercise 3.3: Implement the `InvoiceClassforHardwareStore` class with instance variables, getters, setters, and business logic methods."
        ],
        "io": "Output: Validated record for Invoice Class for Hardware Store",
        "hint": "Ensure encapsulation (private fields) and constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 3.3 \u2014 Invoice Class for Hardware Store\n        \n    }\n}"
    },
    {
        "id": "c3-04",
        "chapter": 3,
        "topic": "OOP",
        "difficulty": "easy",
        "title": "Concept 3.4 \u2014 Employee Class with Year-End Raise",
        "prompt": [
            "Exercise 3.4: Implement the `EmployeeClasswithYear-EndRaise` class with instance variables, getters, setters, and business logic methods."
        ],
        "io": "Output: Validated record for Employee Class with Year-End Raise",
        "hint": "Ensure encapsulation (private fields) and constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 3.4 \u2014 Employee Class with Year-End Raise\n        \n    }\n}"
    },
    {
        "id": "c3-05",
        "chapter": 3,
        "topic": "OOP",
        "difficulty": "easy",
        "title": "Concept 3.5 \u2014 Date Class for Day, Month, Year",
        "prompt": [
            "Exercise 3.5: Implement the `DateClassforDay,Month,Year` class with instance variables, getters, setters, and business logic methods."
        ],
        "io": "Output: Validated record for Date Class for Day, Month, Year",
        "hint": "Ensure encapsulation (private fields) and constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 3.5 \u2014 Date Class for Day, Month, Year\n        \n    }\n}"
    },
    {
        "id": "c3-06",
        "chapter": 3,
        "topic": "OOP",
        "difficulty": "easy",
        "title": "Concept 3.6 \u2014 HeartRates Calculator Class",
        "prompt": [
            "Exercise 3.6: Implement the `HeartRatesCalculatorClass` class with instance variables, getters, setters, and business logic methods."
        ],
        "io": "Output: Validated record for HeartRates Calculator Class",
        "hint": "Ensure encapsulation (private fields) and constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 3.6 \u2014 HeartRates Calculator Class\n        \n    }\n}"
    },
    {
        "id": "c3-07",
        "chapter": 3,
        "topic": "OOP",
        "difficulty": "easy",
        "title": "Concept 3.7 \u2014 TargetHeartRate Calculator",
        "prompt": [
            "Exercise 3.7: Implement the `TargetHeartRateCalculator` class with instance variables, getters, setters, and business logic methods."
        ],
        "io": "Output: Validated record for TargetHeartRate Calculator",
        "hint": "Ensure encapsulation (private fields) and constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 3.7 \u2014 TargetHeartRate Calculator\n        \n    }\n}"
    },
    {
        "id": "c3-08",
        "chapter": 3,
        "topic": "OOP",
        "difficulty": "easy",
        "title": "Concept 3.8 \u2014 HealthProfile Record System",
        "prompt": [
            "Exercise 3.8: Implement the `HealthProfileRecordSystem` class with instance variables, getters, setters, and business logic methods."
        ],
        "io": "Output: Validated record for HealthProfile Record System",
        "hint": "Ensure encapsulation (private fields) and constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 3.8 \u2014 HealthProfile Record System\n        \n    }\n}"
    },
    {
        "id": "c3-09",
        "chapter": 3,
        "topic": "OOP",
        "difficulty": "easy",
        "title": "Concept 3.9 \u2014 Item Billing & Tax Calculator",
        "prompt": [
            "Exercise 3.9: Implement the `ItemBilling&TaxCalculator` class with instance variables, getters, setters, and business logic methods."
        ],
        "io": "Output: Validated record for Item Billing & Tax Calculator",
        "hint": "Ensure encapsulation (private fields) and constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 3.9 \u2014 Item Billing & Tax Calculator\n        \n    }\n}"
    },
    {
        "id": "c3-10",
        "chapter": 3,
        "topic": "OOP",
        "difficulty": "easy",
        "title": "Concept 3.10 \u2014 BankAccount Interest Adder",
        "prompt": [
            "Exercise 3.10: Implement the `BankAccountInterestAdder` class with instance variables, getters, setters, and business logic methods."
        ],
        "io": "Output: Validated record for BankAccount Interest Adder",
        "hint": "Ensure encapsulation (private fields) and constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 3.10 \u2014 BankAccount Interest Adder\n        \n    }\n}"
    },
    {
        "id": "c3-11",
        "chapter": 3,
        "topic": "OOP",
        "difficulty": "medium",
        "title": "Concept 3.11 \u2014 Car Rental Rate Calculator",
        "prompt": [
            "Exercise 3.11: Implement the `CarRentalRateCalculator` class with instance variables, getters, setters, and business logic methods."
        ],
        "io": "Output: Validated record for Car Rental Rate Calculator",
        "hint": "Ensure encapsulation (private fields) and constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 3.11 \u2014 Car Rental Rate Calculator\n        \n    }\n}"
    },
    {
        "id": "c3-12",
        "chapter": 3,
        "topic": "OOP",
        "difficulty": "medium",
        "title": "Concept 3.12 \u2014 Book Store Inventory Item",
        "prompt": [
            "Exercise 3.12: Implement the `BookStoreInventoryItem` class with instance variables, getters, setters, and business logic methods."
        ],
        "io": "Output: Validated record for Book Store Inventory Item",
        "hint": "Ensure encapsulation (private fields) and constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 3.12 \u2014 Book Store Inventory Item\n        \n    }\n}"
    },
    {
        "id": "c3-13",
        "chapter": 3,
        "topic": "OOP",
        "difficulty": "medium",
        "title": "Concept 3.13 \u2014 Student Profile Class",
        "prompt": [
            "Exercise 3.13: Implement the `StudentProfileClass` class with instance variables, getters, setters, and business logic methods."
        ],
        "io": "Output: Validated record for Student Profile Class",
        "hint": "Ensure encapsulation (private fields) and constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 3.13 \u2014 Student Profile Class\n        \n    }\n}"
    },
    {
        "id": "c3-14",
        "chapter": 3,
        "topic": "OOP",
        "difficulty": "medium",
        "title": "Concept 3.14 \u2014 Product Class with SKU",
        "prompt": [
            "Exercise 3.14: Implement the `ProductClasswithSKU` class with instance variables, getters, setters, and business logic methods."
        ],
        "io": "Output: Validated record for Product Class with SKU",
        "hint": "Ensure encapsulation (private fields) and constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 3.14 \u2014 Product Class with SKU\n        \n    }\n}"
    },
    {
        "id": "c3-15",
        "chapter": 3,
        "topic": "OOP",
        "difficulty": "medium",
        "title": "Concept 3.15 \u2014 Rectangle Dimension Class",
        "prompt": [
            "Exercise 3.15: Implement the `RectangleDimensionClass` class with instance variables, getters, setters, and business logic methods."
        ],
        "io": "Output: Validated record for Rectangle Dimension Class",
        "hint": "Ensure encapsulation (private fields) and constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 3.15 \u2014 Rectangle Dimension Class\n        \n    }\n}"
    },
    {
        "id": "c3-16",
        "chapter": 3,
        "topic": "OOP",
        "difficulty": "medium",
        "title": "Concept 3.16 \u2014 Circle Class with Radius Setter",
        "prompt": [
            "Exercise 3.16: Implement the `CircleClasswithRadiusSetter` class with instance variables, getters, setters, and business logic methods."
        ],
        "io": "Output: Validated record for Circle Class with Radius Setter",
        "hint": "Ensure encapsulation (private fields) and constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 3.16 \u2014 Circle Class with Radius Setter\n        \n    }\n}"
    },
    {
        "id": "c3-17",
        "chapter": 3,
        "topic": "OOP",
        "difficulty": "medium",
        "title": "Concept 3.17 \u2014 Point2D Coordinates Class",
        "prompt": [
            "Exercise 3.17: Implement the `Point2DCoordinatesClass` class with instance variables, getters, setters, and business logic methods."
        ],
        "io": "Output: Validated record for Point2D Coordinates Class",
        "hint": "Ensure encapsulation (private fields) and constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 3.17 \u2014 Point2D Coordinates Class\n        \n    }\n}"
    },
    {
        "id": "c3-18",
        "chapter": 3,
        "topic": "OOP",
        "difficulty": "medium",
        "title": "Concept 3.18 \u2014 Time12Hour Converter Class",
        "prompt": [
            "Exercise 3.18: Implement the `Time12HourConverterClass` class with instance variables, getters, setters, and business logic methods."
        ],
        "io": "Output: Validated record for Time12Hour Converter Class",
        "hint": "Ensure encapsulation (private fields) and constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 3.18 \u2014 Time12Hour Converter Class\n        \n    }\n}"
    },
    {
        "id": "c3-19",
        "chapter": 3,
        "topic": "OOP",
        "difficulty": "medium",
        "title": "Concept 3.19 \u2014 Pet Information System",
        "prompt": [
            "Exercise 3.19: Implement the `PetInformationSystem` class with instance variables, getters, setters, and business logic methods."
        ],
        "io": "Output: Validated record for Pet Information System",
        "hint": "Ensure encapsulation (private fields) and constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 3.19 \u2014 Pet Information System\n        \n    }\n}"
    },
    {
        "id": "c3-20",
        "chapter": 3,
        "topic": "OOP",
        "difficulty": "medium",
        "title": "Concept 3.20 \u2014 Course Grade Calculator",
        "prompt": [
            "Exercise 3.20: Implement the `CourseGradeCalculator` class with instance variables, getters, setters, and business logic methods."
        ],
        "io": "Output: Validated record for Course Grade Calculator",
        "hint": "Ensure encapsulation (private fields) and constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 3.20 \u2014 Course Grade Calculator\n        \n    }\n}"
    },
    {
        "id": "c3-21",
        "chapter": 3,
        "topic": "OOP",
        "difficulty": "medium",
        "title": "Concept 3.21 \u2014 Movie Ticket Booking System",
        "prompt": [
            "Exercise 3.21: Implement the `MovieTicketBookingSystem` class with instance variables, getters, setters, and business logic methods."
        ],
        "io": "Output: Validated record for Movie Ticket Booking System",
        "hint": "Ensure encapsulation (private fields) and constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 3.21 \u2014 Movie Ticket Booking System\n        \n    }\n}"
    },
    {
        "id": "c3-22",
        "chapter": 3,
        "topic": "OOP",
        "difficulty": "medium",
        "title": "Concept 3.22 \u2014 Mobile Phone Tariff Plan",
        "prompt": [
            "Exercise 3.22: Implement the `MobilePhoneTariffPlan` class with instance variables, getters, setters, and business logic methods."
        ],
        "io": "Output: Validated record for Mobile Phone Tariff Plan",
        "hint": "Ensure encapsulation (private fields) and constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 3.22 \u2014 Mobile Phone Tariff Plan\n        \n    }\n}"
    },
    {
        "id": "c3-23",
        "chapter": 3,
        "topic": "OOP",
        "difficulty": "hard",
        "title": "Concept 3.23 \u2014 Gym Membership Calculator",
        "prompt": [
            "Exercise 3.23: Implement the `GymMembershipCalculator` class with instance variables, getters, setters, and business logic methods."
        ],
        "io": "Output: Validated record for Gym Membership Calculator",
        "hint": "Ensure encapsulation (private fields) and constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 3.23 \u2014 Gym Membership Calculator\n        \n    }\n}"
    },
    {
        "id": "c3-24",
        "chapter": 3,
        "topic": "OOP",
        "difficulty": "hard",
        "title": "Concept 3.24 \u2014 Flight Reservation Record",
        "prompt": [
            "Exercise 3.24: Implement the `FlightReservationRecord` class with instance variables, getters, setters, and business logic methods."
        ],
        "io": "Output: Validated record for Flight Reservation Record",
        "hint": "Ensure encapsulation (private fields) and constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 3.24 \u2014 Flight Reservation Record\n        \n    }\n}"
    },
    {
        "id": "c3-25",
        "chapter": 3,
        "topic": "OOP",
        "difficulty": "hard",
        "title": "Concept 3.25 \u2014 Library Book Tracker",
        "prompt": [
            "Exercise 3.25: Implement the `LibraryBookTracker` class with instance variables, getters, setters, and business logic methods."
        ],
        "io": "Output: Validated record for Library Book Tracker",
        "hint": "Ensure encapsulation (private fields) and constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 3.25 \u2014 Library Book Tracker\n        \n    }\n}"
    },
    {
        "id": "c3-26",
        "chapter": 3,
        "topic": "OOP",
        "difficulty": "hard",
        "title": "Concept 3.26 \u2014 Electricity Bill Calculator",
        "prompt": [
            "Exercise 3.26: Implement the `ElectricityBillCalculator` class with instance variables, getters, setters, and business logic methods."
        ],
        "io": "Output: Validated record for Electricity Bill Calculator",
        "hint": "Ensure encapsulation (private fields) and constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 3.26 \u2014 Electricity Bill Calculator\n        \n    }\n}"
    },
    {
        "id": "c3-27",
        "chapter": 3,
        "topic": "OOP",
        "difficulty": "hard",
        "title": "Concept 3.27 \u2014 Restaurant Order Bill",
        "prompt": [
            "Exercise 3.27: Implement the `RestaurantOrderBill` class with instance variables, getters, setters, and business logic methods."
        ],
        "io": "Output: Validated record for Restaurant Order Bill",
        "hint": "Ensure encapsulation (private fields) and constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 3.27 \u2014 Restaurant Order Bill\n        \n    }\n}"
    },
    {
        "id": "c3-28",
        "chapter": 3,
        "topic": "OOP",
        "difficulty": "hard",
        "title": "Concept 3.28 \u2014 Parking Spot Booking Class",
        "prompt": [
            "Exercise 3.28: Implement the `ParkingSpotBookingClass` class with instance variables, getters, setters, and business logic methods."
        ],
        "io": "Output: Validated record for Parking Spot Booking Class",
        "hint": "Ensure encapsulation (private fields) and constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 3.28 \u2014 Parking Spot Booking Class\n        \n    }\n}"
    },
    {
        "id": "c3-29",
        "chapter": 3,
        "topic": "OOP",
        "difficulty": "hard",
        "title": "Concept 3.29 \u2014 Shopping Cart Item Class",
        "prompt": [
            "Exercise 3.29: Implement the `ShoppingCartItemClass` class with instance variables, getters, setters, and business logic methods."
        ],
        "io": "Output: Validated record for Shopping Cart Item Class",
        "hint": "Ensure encapsulation (private fields) and constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 3.29 \u2014 Shopping Cart Item Class\n        \n    }\n}"
    },
    {
        "id": "c3-30",
        "chapter": 3,
        "topic": "OOP",
        "difficulty": "hard",
        "title": "Concept 3.30 \u2014 Bank Vault Security Code",
        "prompt": [
            "Exercise 3.30: Implement the `BankVaultSecurityCode` class with instance variables, getters, setters, and business logic methods."
        ],
        "io": "Output: Validated record for Bank Vault Security Code",
        "hint": "Ensure encapsulation (private fields) and constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 3.30 \u2014 Bank Vault Security Code\n        \n    }\n}"
    },
    {
        "id": "c4-01",
        "chapter": 4,
        "topic": "Conditionals",
        "difficulty": "easy",
        "title": "Concept 4.1 \u2014 Student Pass/Fail Counter",
        "prompt": [
            "Exercise 4.1: Write a Java program to solve `Student Pass/Fail Counter` using control structures (if, if-else, while)."
        ],
        "io": "Output: Processed output for Student Pass/Fail Counter",
        "hint": "Use while loops or nested if statements.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 4.1 \u2014 Student Pass/Fail Counter\n        \n    }\n}"
    },
    {
        "id": "c4-02",
        "chapter": 4,
        "topic": "Conditionals",
        "difficulty": "easy",
        "title": "Concept 4.2 \u2014 Sentinel-Controlled Class Average",
        "prompt": [
            "Exercise 4.2: Write a Java program to solve `Sentinel-Controlled Class Average` using control structures (if, if-else, while)."
        ],
        "io": "Output: Processed output for Sentinel-Controlled Class Average",
        "hint": "Use while loops or nested if statements.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 4.2 \u2014 Sentinel-Controlled Class Average\n        \n    }\n}"
    },
    {
        "id": "c4-03",
        "chapter": 4,
        "topic": "Conditionals",
        "difficulty": "easy",
        "title": "Concept 4.3 \u2014 Gas Mileage Calculator",
        "prompt": [
            "Exercise 4.3: Write a Java program to solve `Gas Mileage Calculator` using control structures (if, if-else, while)."
        ],
        "io": "Output: Processed output for Gas Mileage Calculator",
        "hint": "Use while loops or nested if statements.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 4.3 \u2014 Gas Mileage Calculator\n        \n    }\n}"
    },
    {
        "id": "c4-04",
        "chapter": 4,
        "topic": "Conditionals",
        "difficulty": "easy",
        "title": "Concept 4.4 \u2014 Credit Limit Calculator",
        "prompt": [
            "Exercise 4.4: Write a Java program to solve `Credit Limit Calculator` using control structures (if, if-else, while)."
        ],
        "io": "Output: Processed output for Credit Limit Calculator",
        "hint": "Use while loops or nested if statements.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 4.4 \u2014 Credit Limit Calculator\n        \n    }\n}"
    },
    {
        "id": "c4-05",
        "chapter": 4,
        "topic": "Conditionals",
        "difficulty": "easy",
        "title": "Concept 4.5 \u2014 Sales Commission Calculator",
        "prompt": [
            "Exercise 4.5: Write a Java program to solve `Sales Commission Calculator` using control structures (if, if-else, while)."
        ],
        "io": "Output: Processed output for Sales Commission Calculator",
        "hint": "Use while loops or nested if statements.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 4.5 \u2014 Sales Commission Calculator\n        \n    }\n}"
    },
    {
        "id": "c4-06",
        "chapter": 4,
        "topic": "Conditionals",
        "difficulty": "easy",
        "title": "Concept 4.6 \u2014 Employee Salary Calculator",
        "prompt": [
            "Exercise 4.6: Write a Java program to solve `Employee Salary Calculator` using control structures (if, if-else, while)."
        ],
        "io": "Output: Processed output for Employee Salary Calculator",
        "hint": "Use while loops or nested if statements.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 4.6 \u2014 Employee Salary Calculator\n        \n    }\n}"
    },
    {
        "id": "c4-07",
        "chapter": 4,
        "topic": "Conditionals",
        "difficulty": "easy",
        "title": "Concept 4.7 \u2014 Find the Largest Integer",
        "prompt": [
            "Exercise 4.7: Write a Java program to solve `Find the Largest Integer` using control structures (if, if-else, while)."
        ],
        "io": "Output: Processed output for Find the Largest Integer",
        "hint": "Use while loops or nested if statements.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 4.7 \u2014 Find the Largest Integer\n        \n    }\n}"
    },
    {
        "id": "c4-08",
        "chapter": 4,
        "topic": "Conditionals",
        "difficulty": "easy",
        "title": "Concept 4.8 \u2014 Find the Two Largest Integers",
        "prompt": [
            "Exercise 4.8: Write a Java program to solve `Find the Two Largest Integers` using control structures (if, if-else, while)."
        ],
        "io": "Output: Processed output for Find the Two Largest Integers",
        "hint": "Use while loops or nested if statements.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 4.8 \u2014 Find the Two Largest Integers\n        \n    }\n}"
    },
    {
        "id": "c4-09",
        "chapter": 4,
        "topic": "Conditionals",
        "difficulty": "easy",
        "title": "Concept 4.9 \u2014 Tabular Output of Multiples",
        "prompt": [
            "Exercise 4.9: Write a Java program to solve `Tabular Output of Multiples` using control structures (if, if-else, while)."
        ],
        "io": "Output: Processed output for Tabular Output of Multiples",
        "hint": "Use while loops or nested if statements.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 4.9 \u2014 Tabular Output of Multiples\n        \n    }\n}"
    },
    {
        "id": "c4-10",
        "chapter": 4,
        "topic": "Conditionals",
        "difficulty": "easy",
        "title": "Concept 4.10 \u2014 Square of Asterisks",
        "prompt": [
            "Exercise 4.10: Write a Java program to solve `Square of Asterisks` using control structures (if, if-else, while)."
        ],
        "io": "Output: Processed output for Square of Asterisks",
        "hint": "Use while loops or nested if statements.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 4.10 \u2014 Square of Asterisks\n        \n    }\n}"
    },
    {
        "id": "c4-11",
        "chapter": 4,
        "topic": "Conditionals",
        "difficulty": "medium",
        "title": "Concept 4.11 \u2014 Hollow Square of Asterisks",
        "prompt": [
            "Exercise 4.11: Write a Java program to solve `Hollow Square of Asterisks` using control structures (if, if-else, while)."
        ],
        "io": "Output: Processed output for Hollow Square of Asterisks",
        "hint": "Use while loops or nested if statements.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 4.11 \u2014 Hollow Square of Asterisks\n        \n    }\n}"
    },
    {
        "id": "c4-12",
        "chapter": 4,
        "topic": "Conditionals",
        "difficulty": "medium",
        "title": "Concept 4.12 \u2014 Palindrome Tester (5 Digits)",
        "prompt": [
            "Exercise 4.12: Write a Java program to solve `Palindrome Tester (5 Digits)` using control structures (if, if-else, while)."
        ],
        "io": "Output: Processed output for Palindrome Tester (5 Digits)",
        "hint": "Use while loops or nested if statements.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 4.12 \u2014 Palindrome Tester (5 Digits)\n        \n    }\n}"
    },
    {
        "id": "c4-13",
        "chapter": 4,
        "topic": "Conditionals",
        "difficulty": "medium",
        "title": "Concept 4.13 \u2014 Printing Decimal Equivalent of Binary",
        "prompt": [
            "Exercise 4.13: Write a Java program to solve `Printing Decimal Equivalent of Binary` using control structures (if, if-else, while)."
        ],
        "io": "Output: Processed output for Printing Decimal Equivalent of Binary",
        "hint": "Use while loops or nested if statements.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 4.13 \u2014 Printing Decimal Equivalent of Binary\n        \n    }\n}"
    },
    {
        "id": "c4-14",
        "chapter": 4,
        "topic": "Conditionals",
        "difficulty": "medium",
        "title": "Concept 4.14 \u2014 Checkerboard Pattern of Asterisks",
        "prompt": [
            "Exercise 4.14: Write a Java program to solve `Checkerboard Pattern of Asterisks` using control structures (if, if-else, while)."
        ],
        "io": "Output: Processed output for Checkerboard Pattern of Asterisks",
        "hint": "Use while loops or nested if statements.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 4.14 \u2014 Checkerboard Pattern of Asterisks\n        \n    }\n}"
    },
    {
        "id": "c4-15",
        "chapter": 4,
        "topic": "Conditionals",
        "difficulty": "medium",
        "title": "Concept 4.15 \u2014 Multiples of 2 with Infinite Loop",
        "prompt": [
            "Exercise 4.15: Write a Java program to solve `Multiples of 2 with Infinite Loop` using control structures (if, if-else, while)."
        ],
        "io": "Output: Processed output for Multiples of 2 with Infinite Loop",
        "hint": "Use while loops or nested if statements.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 4.15 \u2014 Multiples of 2 with Infinite Loop\n        \n    }\n}"
    },
    {
        "id": "c4-16",
        "chapter": 4,
        "topic": "Conditionals",
        "difficulty": "medium",
        "title": "Concept 4.16 \u2014 Sides of a Triangle Tester",
        "prompt": [
            "Exercise 4.16: Write a Java program to solve `Sides of a Triangle Tester` using control structures (if, if-else, while)."
        ],
        "io": "Output: Processed output for Sides of a Triangle Tester",
        "hint": "Use while loops or nested if statements.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 4.16 \u2014 Sides of a Triangle Tester\n        \n    }\n}"
    },
    {
        "id": "c4-17",
        "chapter": 4,
        "topic": "Conditionals",
        "difficulty": "medium",
        "title": "Concept 4.17 \u2014 Sides of a Right Triangle Tester",
        "prompt": [
            "Exercise 4.17: Write a Java program to solve `Sides of a Right Triangle Tester` using control structures (if, if-else, while)."
        ],
        "io": "Output: Processed output for Sides of a Right Triangle Tester",
        "hint": "Use while loops or nested if statements.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 4.17 \u2014 Sides of a Right Triangle Tester\n        \n    }\n}"
    },
    {
        "id": "c4-18",
        "chapter": 4,
        "topic": "Conditionals",
        "difficulty": "medium",
        "title": "Concept 4.18 \u2014 Factorial Calculator (n!)",
        "prompt": [
            "Exercise 4.18: Write a Java program to solve `Factorial Calculator (n!)` using control structures (if, if-else, while)."
        ],
        "io": "Output: Processed output for Factorial Calculator (n!)",
        "hint": "Use while loops or nested if statements.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 4.18 \u2014 Factorial Calculator (n!)\n        \n    }\n}"
    },
    {
        "id": "c4-19",
        "chapter": 4,
        "topic": "Conditionals",
        "difficulty": "medium",
        "title": "Concept 4.19 \u2014 Euler's Constant e Estimation",
        "prompt": [
            "Exercise 4.19: Write a Java program to solve `Euler's Constant e Estimation` using control structures (if, if-else, while)."
        ],
        "io": "Output: Processed output for Euler's Constant e Estimation",
        "hint": "Use while loops or nested if statements.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 4.19 \u2014 Euler's Constant e Estimation\n        \n    }\n}"
    },
    {
        "id": "c4-20",
        "chapter": 4,
        "topic": "Conditionals",
        "difficulty": "medium",
        "title": "Concept 4.20 \u2014 e^x Exponential Estimation",
        "prompt": [
            "Exercise 4.20: Write a Java program to solve `e^x Exponential Estimation` using control structures (if, if-else, while)."
        ],
        "io": "Output: Processed output for e^x Exponential Estimation",
        "hint": "Use while loops or nested if statements.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 4.20 \u2014 e^x Exponential Estimation\n        \n    }\n}"
    },
    {
        "id": "c4-21",
        "chapter": 4,
        "topic": "Conditionals",
        "difficulty": "medium",
        "title": "Concept 4.21 \u2014 Enforcing Security with Cryptography",
        "prompt": [
            "Exercise 4.21: Write a Java program to solve `Enforcing Security with Cryptography` using control structures (if, if-else, while)."
        ],
        "io": "Output: Processed output for Enforcing Security with Cryptography",
        "hint": "Use while loops or nested if statements.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 4.21 \u2014 Enforcing Security with Cryptography\n        \n    }\n}"
    },
    {
        "id": "c4-22",
        "chapter": 4,
        "topic": "Conditionals",
        "difficulty": "medium",
        "title": "Concept 4.22 \u2014 Decrypting Encrypted 4-digit Code",
        "prompt": [
            "Exercise 4.22: Write a Java program to solve `Decrypting Encrypted 4-digit Code` using control structures (if, if-else, while)."
        ],
        "io": "Output: Processed output for Decrypting Encrypted 4-digit Code",
        "hint": "Use while loops or nested if statements.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 4.22 \u2014 Decrypting Encrypted 4-digit Code\n        \n    }\n}"
    },
    {
        "id": "c4-23",
        "chapter": 4,
        "topic": "Conditionals",
        "difficulty": "hard",
        "title": "Concept 4.23 \u2014 Dangling-Else Problem Analysis",
        "prompt": [
            "Exercise 4.23: Write a Java program to solve `Dangling-Else Problem Analysis` using control structures (if, if-else, while)."
        ],
        "io": "Output: Processed output for Dangling-Else Problem Analysis",
        "hint": "Use while loops or nested if statements.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 4.23 \u2014 Dangling-Else Problem Analysis\n        \n    }\n}"
    },
    {
        "id": "c4-24",
        "chapter": 4,
        "topic": "Conditionals",
        "difficulty": "hard",
        "title": "Concept 4.24 \u2014 Pre-increment vs Post-increment",
        "prompt": [
            "Exercise 4.24: Write a Java program to solve `Pre-increment vs Post-increment` using control structures (if, if-else, while)."
        ],
        "io": "Output: Processed output for Pre-increment vs Post-increment",
        "hint": "Use while loops or nested if statements.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 4.24 \u2014 Pre-increment vs Post-increment\n        \n    }\n}"
    },
    {
        "id": "c4-25",
        "chapter": 4,
        "topic": "Conditionals",
        "difficulty": "hard",
        "title": "Concept 4.25 \u2014 Nested Control Structures",
        "prompt": [
            "Exercise 4.25: Write a Java program to solve `Nested Control Structures` using control structures (if, if-else, while)."
        ],
        "io": "Output: Processed output for Nested Control Structures",
        "hint": "Use while loops or nested if statements.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 4.25 \u2014 Nested Control Structures\n        \n    }\n}"
    },
    {
        "id": "c4-26",
        "chapter": 4,
        "topic": "Conditionals",
        "difficulty": "hard",
        "title": "Concept 4.26 \u2014 World Population Growth Projection",
        "prompt": [
            "Exercise 4.26: Write a Java program to solve `World Population Growth Projection` using control structures (if, if-else, while)."
        ],
        "io": "Output: Processed output for World Population Growth Projection",
        "hint": "Use while loops or nested if statements.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 4.26 \u2014 World Population Growth Projection\n        \n    }\n}"
    },
    {
        "id": "c4-27",
        "chapter": 4,
        "topic": "Conditionals",
        "difficulty": "hard",
        "title": "Concept 4.27 \u2014 Target Heart Rate Monitoring",
        "prompt": [
            "Exercise 4.27: Write a Java program to solve `Target Heart Rate Monitoring` using control structures (if, if-else, while)."
        ],
        "io": "Output: Processed output for Target Heart Rate Monitoring",
        "hint": "Use while loops or nested if statements.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 4.27 \u2014 Target Heart Rate Monitoring\n        \n    }\n}"
    },
    {
        "id": "c4-28",
        "chapter": 4,
        "topic": "Conditionals",
        "difficulty": "hard",
        "title": "Concept 4.28 \u2014 Tax Calculator for Salary Brackets",
        "prompt": [
            "Exercise 4.28: Write a Java program to solve `Tax Calculator for Salary Brackets` using control structures (if, if-else, while)."
        ],
        "io": "Output: Processed output for Tax Calculator for Salary Brackets",
        "hint": "Use while loops or nested if statements.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 4.28 \u2014 Tax Calculator for Salary Brackets\n        \n    }\n}"
    },
    {
        "id": "c4-29",
        "chapter": 4,
        "topic": "Conditionals",
        "difficulty": "hard",
        "title": "Concept 4.29 \u2014 Sales Commission Range Finder",
        "prompt": [
            "Exercise 4.29: Write a Java program to solve `Sales Commission Range Finder` using control structures (if, if-else, while)."
        ],
        "io": "Output: Processed output for Sales Commission Range Finder",
        "hint": "Use while loops or nested if statements.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 4.29 \u2014 Sales Commission Range Finder\n        \n    }\n}"
    },
    {
        "id": "c4-30",
        "chapter": 4,
        "topic": "Conditionals",
        "difficulty": "hard",
        "title": "Concept 4.30 \u2014 Salesperson Earnings Table",
        "prompt": [
            "Exercise 4.30: Write a Java program to solve `Salesperson Earnings Table` using control structures (if, if-else, while)."
        ],
        "io": "Output: Processed output for Salesperson Earnings Table",
        "hint": "Use while loops or nested if statements.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 4.30 \u2014 Salesperson Earnings Table\n        \n    }\n}"
    },
    {
        "id": "c5-01",
        "chapter": 5,
        "topic": "Loops",
        "difficulty": "easy",
        "title": "Concept 5.1 \u2014 Summing Integers with For Loop",
        "prompt": [
            "Exercise 5.1: Implement `Summing Integers with For Loop` using for loops, do-while, or switch statements."
        ],
        "io": "Output: Output pattern for Summing Integers with For Loop",
        "hint": "Utilize counter-controlled for loops or switch blocks.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 5.1 \u2014 Summing Integers with For Loop\n        \n    }\n}"
    },
    {
        "id": "c5-02",
        "chapter": 5,
        "topic": "Loops",
        "difficulty": "easy",
        "title": "Concept 5.2 \u2014 Compound-Interest Calculator",
        "prompt": [
            "Exercise 5.2: Implement `Compound-Interest Calculator` using for loops, do-while, or switch statements."
        ],
        "io": "Output: Output pattern for Compound-Interest Calculator",
        "hint": "Utilize counter-controlled for loops or switch blocks.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 5.2 \u2014 Compound-Interest Calculator\n        \n    }\n}"
    },
    {
        "id": "c5-03",
        "chapter": 5,
        "topic": "Loops",
        "difficulty": "easy",
        "title": "Concept 5.3 \u2014 Bar Chart Printing Program",
        "prompt": [
            "Exercise 5.3: Implement `Bar Chart Printing Program` using for loops, do-while, or switch statements."
        ],
        "io": "Output: Output pattern for Bar Chart Printing Program",
        "hint": "Utilize counter-controlled for loops or switch blocks.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 5.3 \u2014 Bar Chart Printing Program\n        \n    }\n}"
    },
    {
        "id": "c5-04",
        "chapter": 5,
        "topic": "Loops",
        "difficulty": "easy",
        "title": "Concept 5.4 \u2014 Calculating Sales for 5 Products",
        "prompt": [
            "Exercise 5.4: Implement `Calculating Sales for 5 Products` using for loops, do-while, or switch statements."
        ],
        "io": "Output: Output pattern for Calculating Sales for 5 Products",
        "hint": "Utilize counter-controlled for loops or switch blocks.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 5.4 \u2014 Calculating Sales for 5 Products\n        \n    }\n}"
    },
    {
        "id": "c5-05",
        "chapter": 5,
        "topic": "Loops",
        "difficulty": "easy",
        "title": "Concept 5.5 \u2014 Find the Smallest Integer",
        "prompt": [
            "Exercise 5.5: Implement `Find the Smallest Integer` using for loops, do-while, or switch statements."
        ],
        "io": "Output: Output pattern for Find the Smallest Integer",
        "hint": "Utilize counter-controlled for loops or switch blocks.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 5.5 \u2014 Find the Smallest Integer\n        \n    }\n}"
    },
    {
        "id": "c5-06",
        "chapter": 5,
        "topic": "Loops",
        "difficulty": "easy",
        "title": "Concept 5.6 \u2014 Product of Odd Integers (1 to 15)",
        "prompt": [
            "Exercise 5.6: Implement `Product of Odd Integers (1 to 15)` using for loops, do-while, or switch statements."
        ],
        "io": "Output: Output pattern for Product of Odd Integers (1 to 15)",
        "hint": "Utilize counter-controlled for loops or switch blocks.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 5.6 \u2014 Product of Odd Integers (1 to 15)\n        \n    }\n}"
    },
    {
        "id": "c5-07",
        "chapter": 5,
        "topic": "Loops",
        "difficulty": "easy",
        "title": "Concept 5.7 \u2014 Factorials of 1 to 20",
        "prompt": [
            "Exercise 5.7: Implement `Factorials of 1 to 20` using for loops, do-while, or switch statements."
        ],
        "io": "Output: Output pattern for Factorials of 1 to 20",
        "hint": "Utilize counter-controlled for loops or switch blocks.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 5.7 \u2014 Factorials of 1 to 20\n        \n    }\n}"
    },
    {
        "id": "c5-08",
        "chapter": 5,
        "topic": "Loops",
        "difficulty": "easy",
        "title": "Concept 5.8 \u2014 Modified Compound-Interest with Integers",
        "prompt": [
            "Exercise 5.8: Implement `Modified Compound-Interest with Integers` using for loops, do-while, or switch statements."
        ],
        "io": "Output: Output pattern for Modified Compound-Interest with Integers",
        "hint": "Utilize counter-controlled for loops or switch blocks.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 5.8 \u2014 Modified Compound-Interest with Integers\n        \n    }\n}"
    },
    {
        "id": "c5-09",
        "chapter": 5,
        "topic": "Loops",
        "difficulty": "easy",
        "title": "Concept 5.9 \u2014 Triangle Printing Patterns (4 Shapes)",
        "prompt": [
            "Exercise 5.9: Implement `Triangle Printing Patterns (4 Shapes)` using for loops, do-while, or switch statements."
        ],
        "io": "Output: Output pattern for Triangle Printing Patterns (4 Shapes)",
        "hint": "Utilize counter-controlled for loops or switch blocks.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 5.9 \u2014 Triangle Printing Patterns (4 Shapes)\n        \n    }\n}"
    },
    {
        "id": "c5-10",
        "chapter": 5,
        "topic": "Loops",
        "difficulty": "easy",
        "title": "Concept 5.10 \u2014 Pythagorean Triples Finder (Sides <= 500)",
        "prompt": [
            "Exercise 5.10: Implement `Pythagorean Triples Finder (Sides <= 500)` using for loops, do-while, or switch statements."
        ],
        "io": "Output: Output pattern for Pythagorean Triples Finder (Sides <= 500)",
        "hint": "Utilize counter-controlled for loops or switch blocks.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 5.10 \u2014 Pythagorean Triples Finder (Sides <= 500)\n        \n    }\n}"
    },
    {
        "id": "c5-11",
        "chapter": 5,
        "topic": "Loops",
        "difficulty": "medium",
        "title": "Concept 5.11 \u2014 Calculating the Value of Pi",
        "prompt": [
            "Exercise 5.11: Implement `Calculating the Value of Pi` using for loops, do-while, or switch statements."
        ],
        "io": "Output: Output pattern for Calculating the Value of Pi",
        "hint": "Utilize counter-controlled for loops or switch blocks.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 5.11 \u2014 Calculating the Value of Pi\n        \n    }\n}"
    },
    {
        "id": "c5-12",
        "chapter": 5,
        "topic": "Loops",
        "difficulty": "medium",
        "title": "Concept 5.12 \u2014 DeMorgan\u2019s Laws Verification",
        "prompt": [
            "Exercise 5.12: Implement `DeMorgan\u2019s Laws Verification` using for loops, do-while, or switch statements."
        ],
        "io": "Output: Output pattern for DeMorgan\u2019s Laws Verification",
        "hint": "Utilize counter-controlled for loops or switch blocks.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 5.12 \u2014 DeMorgan\u2019s Laws Verification\n        \n    }\n}"
    },
    {
        "id": "c5-13",
        "chapter": 5,
        "topic": "Loops",
        "difficulty": "medium",
        "title": "Concept 5.13 \u2014 Diamond Printing Pattern",
        "prompt": [
            "Exercise 5.13: Implement `Diamond Printing Pattern` using for loops, do-while, or switch statements."
        ],
        "io": "Output: Output pattern for Diamond Printing Pattern",
        "hint": "Utilize counter-controlled for loops or switch blocks.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 5.13 \u2014 Diamond Printing Pattern\n        \n    }\n}"
    },
    {
        "id": "c5-14",
        "chapter": 5,
        "topic": "Loops",
        "difficulty": "medium",
        "title": "Concept 5.14 \u2014 Modified Diamond Pattern",
        "prompt": [
            "Exercise 5.14: Implement `Modified Diamond Pattern` using for loops, do-while, or switch statements."
        ],
        "io": "Output: Output pattern for Modified Diamond Pattern",
        "hint": "Utilize counter-controlled for loops or switch blocks.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 5.14 \u2014 Modified Diamond Pattern\n        \n    }\n}"
    },
    {
        "id": "c5-15",
        "chapter": 5,
        "topic": "Loops",
        "difficulty": "medium",
        "title": "Concept 5.15 \u2014 Structured Break Statement",
        "prompt": [
            "Exercise 5.15: Implement `Structured Break Statement` using for loops, do-while, or switch statements."
        ],
        "io": "Output: Output pattern for Structured Break Statement",
        "hint": "Utilize counter-controlled for loops or switch blocks.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 5.15 \u2014 Structured Break Statement\n        \n    }\n}"
    },
    {
        "id": "c5-16",
        "chapter": 5,
        "topic": "Loops",
        "difficulty": "medium",
        "title": "Concept 5.16 \u2014 Structured Continue Statement",
        "prompt": [
            "Exercise 5.16: Implement `Structured Continue Statement` using for loops, do-while, or switch statements."
        ],
        "io": "Output: Output pattern for Structured Continue Statement",
        "hint": "Utilize counter-controlled for loops or switch blocks.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 5.16 \u2014 Structured Continue Statement\n        \n    }\n}"
    },
    {
        "id": "c5-17",
        "chapter": 5,
        "topic": "Loops",
        "difficulty": "medium",
        "title": "Concept 5.17 \u2014 Fair Tax Calculator",
        "prompt": [
            "Exercise 5.17: Implement `Fair Tax Calculator` using for loops, do-while, or switch statements."
        ],
        "io": "Output: Output pattern for Fair Tax Calculator",
        "hint": "Utilize counter-controlled for loops or switch blocks.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 5.17 \u2014 Fair Tax Calculator\n        \n    }\n}"
    },
    {
        "id": "c5-18",
        "chapter": 5,
        "topic": "Loops",
        "difficulty": "medium",
        "title": "Concept 5.18 \u2014 Global Warming Facts Quiz",
        "prompt": [
            "Exercise 5.18: Implement `Global Warming Facts Quiz` using for loops, do-while, or switch statements."
        ],
        "io": "Output: Output pattern for Global Warming Facts Quiz",
        "hint": "Utilize counter-controlled for loops or switch blocks.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 5.18 \u2014 Global Warming Facts Quiz\n        \n    }\n}"
    },
    {
        "id": "c5-19",
        "chapter": 5,
        "topic": "Loops",
        "difficulty": "medium",
        "title": "Concept 5.19 \u2014 Auto Policy Matrix Comparison",
        "prompt": [
            "Exercise 5.19: Implement `Auto Policy Matrix Comparison` using for loops, do-while, or switch statements."
        ],
        "io": "Output: Output pattern for Auto Policy Matrix Comparison",
        "hint": "Utilize counter-controlled for loops or switch blocks.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 5.19 \u2014 Auto Policy Matrix Comparison\n        \n    }\n}"
    },
    {
        "id": "c5-20",
        "chapter": 5,
        "topic": "Loops",
        "difficulty": "medium",
        "title": "Concept 5.20 \u2014 Switch Statement Grade Counter",
        "prompt": [
            "Exercise 5.20: Implement `Switch Statement Grade Counter` using for loops, do-while, or switch statements."
        ],
        "io": "Output: Output pattern for Switch Statement Grade Counter",
        "hint": "Utilize counter-controlled for loops or switch blocks.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 5.20 \u2014 Switch Statement Grade Counter\n        \n    }\n}"
    },
    {
        "id": "c5-21",
        "chapter": 5,
        "topic": "Loops",
        "difficulty": "medium",
        "title": "Concept 5.21 \u2014 Nested Loop Multiplication Table",
        "prompt": [
            "Exercise 5.21: Implement `Nested Loop Multiplication Table` using for loops, do-while, or switch statements."
        ],
        "io": "Output: Output pattern for Nested Loop Multiplication Table",
        "hint": "Utilize counter-controlled for loops or switch blocks.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 5.21 \u2014 Nested Loop Multiplication Table\n        \n    }\n}"
    },
    {
        "id": "c5-22",
        "chapter": 5,
        "topic": "Loops",
        "difficulty": "medium",
        "title": "Concept 5.22 \u2014 Switch Case Menu Selector",
        "prompt": [
            "Exercise 5.22: Implement `Switch Case Menu Selector` using for loops, do-while, or switch statements."
        ],
        "io": "Output: Output pattern for Switch Case Menu Selector",
        "hint": "Utilize counter-controlled for loops or switch blocks.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 5.22 \u2014 Switch Case Menu Selector\n        \n    }\n}"
    },
    {
        "id": "c5-23",
        "chapter": 5,
        "topic": "Loops",
        "difficulty": "hard",
        "title": "Concept 5.23 \u2014 Fibonacci Series with Loops",
        "prompt": [
            "Exercise 5.23: Implement `Fibonacci Series with Loops` using for loops, do-while, or switch statements."
        ],
        "io": "Output: Output pattern for Fibonacci Series with Loops",
        "hint": "Utilize counter-controlled for loops or switch blocks.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 5.23 \u2014 Fibonacci Series with Loops\n        \n    }\n}"
    },
    {
        "id": "c5-24",
        "chapter": 5,
        "topic": "Loops",
        "difficulty": "hard",
        "title": "Concept 5.24 \u2014 Sum of Harmonic Series",
        "prompt": [
            "Exercise 5.24: Implement `Sum of Harmonic Series` using for loops, do-while, or switch statements."
        ],
        "io": "Output: Output pattern for Sum of Harmonic Series",
        "hint": "Utilize counter-controlled for loops or switch blocks.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 5.24 \u2014 Sum of Harmonic Series\n        \n    }\n}"
    },
    {
        "id": "c5-25",
        "chapter": 5,
        "topic": "Loops",
        "difficulty": "hard",
        "title": "Concept 5.25 \u2014 Sum of Squares vs Square of Sums",
        "prompt": [
            "Exercise 5.25: Implement `Sum of Squares vs Square of Sums` using for loops, do-while, or switch statements."
        ],
        "io": "Output: Output pattern for Sum of Squares vs Square of Sums",
        "hint": "Utilize counter-controlled for loops or switch blocks.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 5.25 \u2014 Sum of Squares vs Square of Sums\n        \n    }\n}"
    },
    {
        "id": "c5-26",
        "chapter": 5,
        "topic": "Loops",
        "difficulty": "hard",
        "title": "Concept 5.26 \u2014 Prime Number Listing (1 to 100)",
        "prompt": [
            "Exercise 5.26: Implement `Prime Number Listing (1 to 100)` using for loops, do-while, or switch statements."
        ],
        "io": "Output: Output pattern for Prime Number Listing (1 to 100)",
        "hint": "Utilize counter-controlled for loops or switch blocks.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 5.26 \u2014 Prime Number Listing (1 to 100)\n        \n    }\n}"
    },
    {
        "id": "c5-27",
        "chapter": 5,
        "topic": "Loops",
        "difficulty": "hard",
        "title": "Concept 5.27 \u2014 ASCII Character Table Printer",
        "prompt": [
            "Exercise 5.27: Implement `ASCII Character Table Printer` using for loops, do-while, or switch statements."
        ],
        "io": "Output: Output pattern for ASCII Character Table Printer",
        "hint": "Utilize counter-controlled for loops or switch blocks.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 5.27 \u2014 ASCII Character Table Printer\n        \n    }\n}"
    },
    {
        "id": "c5-28",
        "chapter": 5,
        "topic": "Loops",
        "difficulty": "hard",
        "title": "Concept 5.28 \u2014 Leap Year Counter",
        "prompt": [
            "Exercise 5.28: Implement `Leap Year Counter` using for loops, do-while, or switch statements."
        ],
        "io": "Output: Output pattern for Leap Year Counter",
        "hint": "Utilize counter-controlled for loops or switch blocks.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 5.28 \u2014 Leap Year Counter\n        \n    }\n}"
    },
    {
        "id": "c5-29",
        "chapter": 5,
        "topic": "Loops",
        "difficulty": "hard",
        "title": "Concept 5.29 \u2014 Calendar Day of Week Finder",
        "prompt": [
            "Exercise 5.29: Implement `Calendar Day of Week Finder` using for loops, do-while, or switch statements."
        ],
        "io": "Output: Output pattern for Calendar Day of Week Finder",
        "hint": "Utilize counter-controlled for loops or switch blocks.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 5.29 \u2014 Calendar Day of Week Finder\n        \n    }\n}"
    },
    {
        "id": "c5-30",
        "chapter": 5,
        "topic": "Loops",
        "difficulty": "hard",
        "title": "Concept 5.30 \u2014 Roman Numeral Converter (1 to 10)",
        "prompt": [
            "Exercise 5.30: Implement `Roman Numeral Converter (1 to 10)` using for loops, do-while, or switch statements."
        ],
        "io": "Output: Output pattern for Roman Numeral Converter (1 to 10)",
        "hint": "Utilize counter-controlled for loops or switch blocks.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 5.30 \u2014 Roman Numeral Converter (1 to 10)\n        \n    }\n}"
    },
    {
        "id": "c6-01",
        "chapter": 6,
        "topic": "Methods",
        "difficulty": "easy",
        "title": "Concept 6.1 \u2014 Math Class Methods Exploration",
        "prompt": [
            "Exercise 6.1: Write a static method to compute `Math Class Methods Exploration`."
        ],
        "io": "Output: Method call results for Math Class Methods Exploration",
        "hint": "Define static methods inside or outside Main.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 6.1 \u2014 Math Class Methods Exploration\n        \n    }\n}"
    },
    {
        "id": "c6-02",
        "chapter": 6,
        "topic": "Methods",
        "difficulty": "easy",
        "title": "Concept 6.2 \u2014 Sphere Volume Calculator",
        "prompt": [
            "Exercise 6.2: Write a static method to compute `Sphere Volume Calculator`."
        ],
        "io": "Output: Method call results for Sphere Volume Calculator",
        "hint": "Define static methods inside or outside Main.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 6.2 \u2014 Sphere Volume Calculator\n        \n    }\n}"
    },
    {
        "id": "c6-03",
        "chapter": 6,
        "topic": "Methods",
        "difficulty": "easy",
        "title": "Concept 6.3 \u2014 Parking Garage Charges",
        "prompt": [
            "Exercise 6.3: Write a static method to compute `Parking Garage Charges`."
        ],
        "io": "Output: Method call results for Parking Garage Charges",
        "hint": "Define static methods inside or outside Main.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 6.3 \u2014 Parking Garage Charges\n        \n    }\n}"
    },
    {
        "id": "c6-04",
        "chapter": 6,
        "topic": "Methods",
        "difficulty": "easy",
        "title": "Concept 6.4 \u2014 Rounding Numbers to Integer (Math.floor)",
        "prompt": [
            "Exercise 6.4: Write a static method to compute `Rounding Numbers to Integer (Math.floor)`."
        ],
        "io": "Output: Method call results for Rounding Numbers to Integer (Math.floor)",
        "hint": "Define static methods inside or outside Main.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 6.4 \u2014 Rounding Numbers to Integer (Math.floor)\n        \n    }\n}"
    },
    {
        "id": "c6-05",
        "chapter": 6,
        "topic": "Methods",
        "difficulty": "easy",
        "title": "Concept 6.5 \u2014 Rounding Numbers to Specific Decimal Places",
        "prompt": [
            "Exercise 6.5: Write a static method to compute `Rounding Numbers to Specific Decimal Places`."
        ],
        "io": "Output: Method call results for Rounding Numbers to Specific Decimal Places",
        "hint": "Define static methods inside or outside Main.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 6.5 \u2014 Rounding Numbers to Specific Decimal Places\n        \n    }\n}"
    },
    {
        "id": "c6-06",
        "chapter": 6,
        "topic": "Methods",
        "difficulty": "easy",
        "title": "Concept 6.6 \u2014 Exponentiation Method (integerPower)",
        "prompt": [
            "Exercise 6.6: Write a static method to compute `Exponentiation Method (integerPower)`."
        ],
        "io": "Output: Method call results for Exponentiation Method (integerPower)",
        "hint": "Define static methods inside or outside Main.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 6.6 \u2014 Exponentiation Method (integerPower)\n        \n    }\n}"
    },
    {
        "id": "c6-07",
        "chapter": 6,
        "topic": "Methods",
        "difficulty": "easy",
        "title": "Concept 6.7 \u2014 Hypotenuse Calculations",
        "prompt": [
            "Exercise 6.7: Write a static method to compute `Hypotenuse Calculations`."
        ],
        "io": "Output: Method call results for Hypotenuse Calculations",
        "hint": "Define static methods inside or outside Main.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 6.7 \u2014 Hypotenuse Calculations\n        \n    }\n}"
    },
    {
        "id": "c6-08",
        "chapter": 6,
        "topic": "Methods",
        "difficulty": "easy",
        "title": "Concept 6.8 \u2014 Determining Multiples (isMultiple)",
        "prompt": [
            "Exercise 6.8: Write a static method to compute `Determining Multiples (isMultiple)`."
        ],
        "io": "Output: Method call results for Determining Multiples (isMultiple)",
        "hint": "Define static methods inside or outside Main.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 6.8 \u2014 Determining Multiples (isMultiple)\n        \n    }\n}"
    },
    {
        "id": "c6-09",
        "chapter": 6,
        "topic": "Methods",
        "difficulty": "easy",
        "title": "Concept 6.9 \u2014 Even or Odd Determination (isEven)",
        "prompt": [
            "Exercise 6.9: Write a static method to compute `Even or Odd Determination (isEven)`."
        ],
        "io": "Output: Method call results for Even or Odd Determination (isEven)",
        "hint": "Define static methods inside or outside Main.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 6.9 \u2014 Even or Odd Determination (isEven)\n        \n    }\n}"
    },
    {
        "id": "c6-10",
        "chapter": 6,
        "topic": "Methods",
        "difficulty": "easy",
        "title": "Concept 6.10 \u2014 Displaying Square of Asterisks",
        "prompt": [
            "Exercise 6.10: Write a static method to compute `Displaying Square of Asterisks`."
        ],
        "io": "Output: Method call results for Displaying Square of Asterisks",
        "hint": "Define static methods inside or outside Main.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 6.10 \u2014 Displaying Square of Asterisks\n        \n    }\n}"
    },
    {
        "id": "c6-11",
        "chapter": 6,
        "topic": "Methods",
        "difficulty": "medium",
        "title": "Concept 6.11 \u2014 Displaying Solid Square of Custom Character",
        "prompt": [
            "Exercise 6.11: Write a static method to compute `Displaying Solid Square of Custom Character`."
        ],
        "io": "Output: Method call results for Displaying Solid Square of Custom Character",
        "hint": "Define static methods inside or outside Main.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 6.11 \u2014 Displaying Solid Square of Custom Character\n        \n    }\n}"
    },
    {
        "id": "c6-12",
        "chapter": 6,
        "topic": "Methods",
        "difficulty": "medium",
        "title": "Concept 6.12 \u2014 Circle Area Calculator",
        "prompt": [
            "Exercise 6.12: Write a static method to compute `Circle Area Calculator`."
        ],
        "io": "Output: Method call results for Circle Area Calculator",
        "hint": "Define static methods inside or outside Main.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 6.12 \u2014 Circle Area Calculator\n        \n    }\n}"
    },
    {
        "id": "c6-13",
        "chapter": 6,
        "topic": "Methods",
        "difficulty": "medium",
        "title": "Concept 6.13 \u2014 Separating Digits of an Integer",
        "prompt": [
            "Exercise 6.13: Write a static method to compute `Separating Digits of an Integer`."
        ],
        "io": "Output: Method call results for Separating Digits of an Integer",
        "hint": "Define static methods inside or outside Main.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 6.13 \u2014 Separating Digits of an Integer\n        \n    }\n}"
    },
    {
        "id": "c6-14",
        "chapter": 6,
        "topic": "Methods",
        "difficulty": "medium",
        "title": "Concept 6.14 \u2014 Temperature Conversion (Celsius/Fahrenheit)",
        "prompt": [
            "Exercise 6.14: Write a static method to compute `Temperature Conversion (Celsius/Fahrenheit)`."
        ],
        "io": "Output: Method call results for Temperature Conversion (Celsius/Fahrenheit)",
        "hint": "Define static methods inside or outside Main.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 6.14 \u2014 Temperature Conversion (Celsius/Fahrenheit)\n        \n    }\n}"
    },
    {
        "id": "c6-15",
        "chapter": 6,
        "topic": "Methods",
        "difficulty": "medium",
        "title": "Concept 6.15 \u2014 Minimum of Three Double Numbers",
        "prompt": [
            "Exercise 6.15: Write a static method to compute `Minimum of Three Double Numbers`."
        ],
        "io": "Output: Method call results for Minimum of Three Double Numbers",
        "hint": "Define static methods inside or outside Main.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 6.15 \u2014 Minimum of Three Double Numbers\n        \n    }\n}"
    },
    {
        "id": "c6-16",
        "chapter": 6,
        "topic": "Methods",
        "difficulty": "medium",
        "title": "Concept 6.16 \u2014 Prime Numbers Listing (1 to 10000)",
        "prompt": [
            "Exercise 6.16: Write a static method to compute `Prime Numbers Listing (1 to 10000)`."
        ],
        "io": "Output: Method call results for Prime Numbers Listing (1 to 10000)",
        "hint": "Define static methods inside or outside Main.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 6.16 \u2014 Prime Numbers Listing (1 to 10000)\n        \n    }\n}"
    },
    {
        "id": "c6-17",
        "chapter": 6,
        "topic": "Methods",
        "difficulty": "medium",
        "title": "Concept 6.17 \u2014 Reversing Digits of an Integer",
        "prompt": [
            "Exercise 6.17: Write a static method to compute `Reversing Digits of an Integer`."
        ],
        "io": "Output: Method call results for Reversing Digits of an Integer",
        "hint": "Define static methods inside or outside Main.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 6.17 \u2014 Reversing Digits of an Integer\n        \n    }\n}"
    },
    {
        "id": "c6-18",
        "chapter": 6,
        "topic": "Methods",
        "difficulty": "medium",
        "title": "Concept 6.18 \u2014 Greatest Common Divisor (GCD)",
        "prompt": [
            "Exercise 6.18: Write a static method to compute `Greatest Common Divisor (GCD)`."
        ],
        "io": "Output: Method call results for Greatest Common Divisor (GCD)",
        "hint": "Define static methods inside or outside Main.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 6.18 \u2014 Greatest Common Divisor (GCD)\n        \n    }\n}"
    },
    {
        "id": "c6-19",
        "chapter": 6,
        "topic": "Methods",
        "difficulty": "medium",
        "title": "Concept 6.19 \u2014 Quality Points Grade Assessor",
        "prompt": [
            "Exercise 6.19: Write a static method to compute `Quality Points Grade Assessor`."
        ],
        "io": "Output: Method call results for Quality Points Grade Assessor",
        "hint": "Define static methods inside or outside Main.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 6.19 \u2014 Quality Points Grade Assessor\n        \n    }\n}"
    },
    {
        "id": "c6-20",
        "chapter": 6,
        "topic": "Methods",
        "difficulty": "medium",
        "title": "Concept 6.20 \u2014 Coin Tossing Simulation",
        "prompt": [
            "Exercise 6.20: Write a static method to compute `Coin Tossing Simulation`."
        ],
        "io": "Output: Method call results for Coin Tossing Simulation",
        "hint": "Define static methods inside or outside Main.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 6.20 \u2014 Coin Tossing Simulation\n        \n    }\n}"
    },
    {
        "id": "c6-21",
        "chapter": 6,
        "topic": "Methods",
        "difficulty": "medium",
        "title": "Concept 6.21 \u2014 Guess the Number Game (1 to 1000)",
        "prompt": [
            "Exercise 6.21: Write a static method to compute `Guess the Number Game (1 to 1000)`."
        ],
        "io": "Output: Method call results for Guess the Number Game (1 to 1000)",
        "hint": "Define static methods inside or outside Main.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 6.21 \u2014 Guess the Number Game (1 to 1000)\n        \n    }\n}"
    },
    {
        "id": "c6-22",
        "chapter": 6,
        "topic": "Methods",
        "difficulty": "medium",
        "title": "Concept 6.22 \u2014 Craps Game Simulation",
        "prompt": [
            "Exercise 6.22: Write a static method to compute `Craps Game Simulation`."
        ],
        "io": "Output: Method call results for Craps Game Simulation",
        "hint": "Define static methods inside or outside Main.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 6.22 \u2014 Craps Game Simulation\n        \n    }\n}"
    },
    {
        "id": "c6-23",
        "chapter": 6,
        "topic": "Methods",
        "difficulty": "hard",
        "title": "Concept 6.23 \u2014 Distance Between Two Points",
        "prompt": [
            "Exercise 6.23: Write a static method to compute `Distance Between Two Points`."
        ],
        "io": "Output: Method call results for Distance Between Two Points",
        "hint": "Define static methods inside or outside Main.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 6.23 \u2014 Distance Between Two Points\n        \n    }\n}"
    },
    {
        "id": "c6-24",
        "chapter": 6,
        "topic": "Methods",
        "difficulty": "hard",
        "title": "Concept 6.24 \u2014 Perfect Numbers Finder",
        "prompt": [
            "Exercise 6.24: Write a static method to compute `Perfect Numbers Finder`."
        ],
        "io": "Output: Method call results for Perfect Numbers Finder",
        "hint": "Define static methods inside or outside Main.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 6.24 \u2014 Perfect Numbers Finder\n        \n    }\n}"
    },
    {
        "id": "c6-25",
        "chapter": 6,
        "topic": "Methods",
        "difficulty": "hard",
        "title": "Concept 6.25 \u2014 Coin Toss Counter (Heads/Tails)",
        "prompt": [
            "Exercise 6.25: Write a static method to compute `Coin Toss Counter (Heads/Tails)`."
        ],
        "io": "Output: Method call results for Coin Toss Counter (Heads/Tails)",
        "hint": "Define static methods inside or outside Main.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 6.25 \u2014 Coin Toss Counter (Heads/Tails)\n        \n    }\n}"
    },
    {
        "id": "c6-26",
        "chapter": 6,
        "topic": "Methods",
        "difficulty": "hard",
        "title": "Concept 6.26 \u2014 Random Number Generation Ranges",
        "prompt": [
            "Exercise 6.26: Write a static method to compute `Random Number Generation Ranges`."
        ],
        "io": "Output: Method call results for Random Number Generation Ranges",
        "hint": "Define static methods inside or outside Main.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 6.26 \u2014 Random Number Generation Ranges\n        \n    }\n}"
    },
    {
        "id": "c6-27",
        "chapter": 6,
        "topic": "Methods",
        "difficulty": "hard",
        "title": "Concept 6.27 \u2014 Method Overloading Demonstration",
        "prompt": [
            "Exercise 6.27: Write a static method to compute `Method Overloading Demonstration`."
        ],
        "io": "Output: Method call results for Method Overloading Demonstration",
        "hint": "Define static methods inside or outside Main.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 6.27 \u2014 Method Overloading Demonstration\n        \n    }\n}"
    },
    {
        "id": "c6-28",
        "chapter": 6,
        "topic": "Methods",
        "difficulty": "hard",
        "title": "Concept 6.28 \u2014 Recursive vs Iterative Factorial",
        "prompt": [
            "Exercise 6.28: Write a static method to compute `Recursive vs Iterative Factorial`."
        ],
        "io": "Output: Method call results for Recursive vs Iterative Factorial",
        "hint": "Define static methods inside or outside Main.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 6.28 \u2014 Recursive vs Iterative Factorial\n        \n    }\n}"
    },
    {
        "id": "c6-29",
        "chapter": 6,
        "topic": "Methods",
        "difficulty": "hard",
        "title": "Concept 6.29 \u2014 Inline Method Optimization",
        "prompt": [
            "Exercise 6.29: Write a static method to compute `Inline Method Optimization`."
        ],
        "io": "Output: Method call results for Inline Method Optimization",
        "hint": "Define static methods inside or outside Main.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 6.29 \u2014 Inline Method Optimization\n        \n    }\n}"
    },
    {
        "id": "c6-30",
        "chapter": 6,
        "topic": "Methods",
        "difficulty": "hard",
        "title": "Concept 6.30 \u2014 Scope of Variables Demonstration",
        "prompt": [
            "Exercise 6.30: Write a static method to compute `Scope of Variables Demonstration`."
        ],
        "io": "Output: Method call results for Scope of Variables Demonstration",
        "hint": "Define static methods inside or outside Main.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 6.30 \u2014 Scope of Variables Demonstration\n        \n    }\n}"
    },
    {
        "id": "c7-01",
        "chapter": 7,
        "topic": "Arrays",
        "difficulty": "easy",
        "title": "Concept 7.1 \u2014 Initializing Array Elements to Zero",
        "prompt": [
            "Exercise 7.1: Solve `Initializing Array Elements to Zero` using 1D/2D arrays or ArrayLists."
        ],
        "io": "Output: Array processing result for Initializing Array Elements to Zero",
        "hint": "Use arrays (e.g. int[] or int[][]) or java.util.ArrayList.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 7.1 \u2014 Initializing Array Elements to Zero\n        \n    }\n}"
    },
    {
        "id": "c7-02",
        "chapter": 7,
        "topic": "Arrays",
        "difficulty": "easy",
        "title": "Concept 7.2 \u2014 Summing Array Elements",
        "prompt": [
            "Exercise 7.2: Solve `Summing Array Elements` using 1D/2D arrays or ArrayLists."
        ],
        "io": "Output: Array processing result for Summing Array Elements",
        "hint": "Use arrays (e.g. int[] or int[][]) or java.util.ArrayList.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 7.2 \u2014 Summing Array Elements\n        \n    }\n}"
    },
    {
        "id": "c7-03",
        "chapter": 7,
        "topic": "Arrays",
        "difficulty": "easy",
        "title": "Concept 7.3 \u2014 Displaying Array Elements in Bar Chart",
        "prompt": [
            "Exercise 7.3: Solve `Displaying Array Elements in Bar Chart` using 1D/2D arrays or ArrayLists."
        ],
        "io": "Output: Array processing result for Displaying Array Elements in Bar Chart",
        "hint": "Use arrays (e.g. int[] or int[][]) or java.util.ArrayList.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 7.3 \u2014 Displaying Array Elements in Bar Chart\n        \n    }\n}"
    },
    {
        "id": "c7-04",
        "chapter": 7,
        "topic": "Arrays",
        "difficulty": "easy",
        "title": "Concept 7.4 \u2014 Sales Commission Range Array",
        "prompt": [
            "Exercise 7.4: Solve `Sales Commission Range Array` using 1D/2D arrays or ArrayLists."
        ],
        "io": "Output: Array processing result for Sales Commission Range Array",
        "hint": "Use arrays (e.g. int[] or int[][]) or java.util.ArrayList.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 7.4 \u2014 Sales Commission Range Array\n        \n    }\n}"
    },
    {
        "id": "c7-05",
        "chapter": 7,
        "topic": "Arrays",
        "difficulty": "easy",
        "title": "Concept 7.5 \u2014 Duplicate Elimination in 1D Array",
        "prompt": [
            "Exercise 7.5: Solve `Duplicate Elimination in 1D Array` using 1D/2D arrays or ArrayLists."
        ],
        "io": "Output: Array processing result for Duplicate Elimination in 1D Array",
        "hint": "Use arrays (e.g. int[] or int[][]) or java.util.ArrayList.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 7.5 \u2014 Duplicate Elimination in 1D Array\n        \n    }\n}"
    },
    {
        "id": "c7-06",
        "chapter": 7,
        "topic": "Arrays",
        "difficulty": "easy",
        "title": "Concept 7.6 \u2014 Dice Rolling Tally (36,000 Rolls)",
        "prompt": [
            "Exercise 7.6: Solve `Dice Rolling Tally (36,000 Rolls)` using 1D/2D arrays or ArrayLists."
        ],
        "io": "Output: Array processing result for Dice Rolling Tally (36,000 Rolls)",
        "hint": "Use arrays (e.g. int[] or int[][]) or java.util.ArrayList.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 7.6 \u2014 Dice Rolling Tally (36,000 Rolls)\n        \n    }\n}"
    },
    {
        "id": "c7-07",
        "chapter": 7,
        "topic": "Arrays",
        "difficulty": "easy",
        "title": "Concept 7.7 \u2014 Airline Reservations System",
        "prompt": [
            "Exercise 7.7: Solve `Airline Reservations System` using 1D/2D arrays or ArrayLists."
        ],
        "io": "Output: Array processing result for Airline Reservations System",
        "hint": "Use arrays (e.g. int[] or int[][]) or java.util.ArrayList.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 7.7 \u2014 Airline Reservations System\n        \n    }\n}"
    },
    {
        "id": "c7-08",
        "chapter": 7,
        "topic": "Arrays",
        "difficulty": "easy",
        "title": "Concept 7.8 \u2014 Total Sales in 2D Array",
        "prompt": [
            "Exercise 7.8: Solve `Total Sales in 2D Array` using 1D/2D arrays or ArrayLists."
        ],
        "io": "Output: Array processing result for Total Sales in 2D Array",
        "hint": "Use arrays (e.g. int[] or int[][]) or java.util.ArrayList.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 7.8 \u2014 Total Sales in 2D Array\n        \n    }\n}"
    },
    {
        "id": "c7-09",
        "chapter": 7,
        "topic": "Arrays",
        "difficulty": "easy",
        "title": "Concept 7.9 \u2014 Turtle Graphics Simulation",
        "prompt": [
            "Exercise 7.9: Solve `Turtle Graphics Simulation` using 1D/2D arrays or ArrayLists."
        ],
        "io": "Output: Array processing result for Turtle Graphics Simulation",
        "hint": "Use arrays (e.g. int[] or int[][]) or java.util.ArrayList.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 7.9 \u2014 Turtle Graphics Simulation\n        \n    }\n}"
    },
    {
        "id": "c7-10",
        "chapter": 7,
        "topic": "Arrays",
        "difficulty": "easy",
        "title": "Concept 7.10 \u2014 Knight's Tour Chess Problem",
        "prompt": [
            "Exercise 7.10: Solve `Knight's Tour Chess Problem` using 1D/2D arrays or ArrayLists."
        ],
        "io": "Output: Array processing result for Knight's Tour Chess Problem",
        "hint": "Use arrays (e.g. int[] or int[][]) or java.util.ArrayList.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 7.10 \u2014 Knight's Tour Chess Problem\n        \n    }\n}"
    },
    {
        "id": "c7-11",
        "chapter": 7,
        "topic": "Arrays",
        "difficulty": "medium",
        "title": "Concept 7.11 \u2014 Eight Queens Chess Problem",
        "prompt": [
            "Exercise 7.11: Solve `Eight Queens Chess Problem` using 1D/2D arrays or ArrayLists."
        ],
        "io": "Output: Array processing result for Eight Queens Chess Problem",
        "hint": "Use arrays (e.g. int[] or int[][]) or java.util.ArrayList.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 7.11 \u2014 Eight Queens Chess Problem\n        \n    }\n}"
    },
    {
        "id": "c7-12",
        "chapter": 7,
        "topic": "Arrays",
        "difficulty": "medium",
        "title": "Concept 7.12 \u2014 Sieve of Eratosthenes (Primes)",
        "prompt": [
            "Exercise 7.12: Solve `Sieve of Eratosthenes (Primes)` using 1D/2D arrays or ArrayLists."
        ],
        "io": "Output: Array processing result for Sieve of Eratosthenes (Primes)",
        "hint": "Use arrays (e.g. int[] or int[][]) or java.util.ArrayList.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 7.12 \u2014 Sieve of Eratosthenes (Primes)\n        \n    }\n}"
    },
    {
        "id": "c7-13",
        "chapter": 7,
        "topic": "Arrays",
        "difficulty": "medium",
        "title": "Concept 7.13 \u2014 Variable-Length Argument List (Product)",
        "prompt": [
            "Exercise 7.13: Solve `Variable-Length Argument List (Product)` using 1D/2D arrays or ArrayLists."
        ],
        "io": "Output: Array processing result for Variable-Length Argument List (Product)",
        "hint": "Use arrays (e.g. int[] or int[][]) or java.util.ArrayList.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 7.13 \u2014 Variable-Length Argument List (Product)\n        \n    }\n}"
    },
    {
        "id": "c7-14",
        "chapter": 7,
        "topic": "Arrays",
        "difficulty": "medium",
        "title": "Concept 7.14 \u2014 Command-Line Arguments Processing",
        "prompt": [
            "Exercise 7.14: Solve `Command-Line Arguments Processing` using 1D/2D arrays or ArrayLists."
        ],
        "io": "Output: Array processing result for Command-Line Arguments Processing",
        "hint": "Use arrays (e.g. int[] or int[][]) or java.util.ArrayList.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 7.14 \u2014 Command-Line Arguments Processing\n        \n    }\n}"
    },
    {
        "id": "c7-15",
        "chapter": 7,
        "topic": "Arrays",
        "difficulty": "medium",
        "title": "Concept 7.15 \u2014 Array Reversal in Place",
        "prompt": [
            "Exercise 7.15: Solve `Array Reversal in Place` using 1D/2D arrays or ArrayLists."
        ],
        "io": "Output: Array processing result for Array Reversal in Place",
        "hint": "Use arrays (e.g. int[] or int[][]) or java.util.ArrayList.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 7.15 \u2014 Array Reversal in Place\n        \n    }\n}"
    },
    {
        "id": "c7-16",
        "chapter": 7,
        "topic": "Arrays",
        "difficulty": "medium",
        "title": "Concept 7.16 \u2014 Pass-by-Value vs Pass-by-Reference Test",
        "prompt": [
            "Exercise 7.16: Solve `Pass-by-Value vs Pass-by-Reference Test` using 1D/2D arrays or ArrayLists."
        ],
        "io": "Output: Array processing result for Pass-by-Value vs Pass-by-Reference Test",
        "hint": "Use arrays (e.g. int[] or int[][]) or java.util.ArrayList.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 7.16 \u2014 Pass-by-Value vs Pass-by-Reference Test\n        \n    }\n}"
    },
    {
        "id": "c7-17",
        "chapter": 7,
        "topic": "Arrays",
        "difficulty": "medium",
        "title": "Concept 7.17 \u2014 GradeBook Class with 2D Arrays",
        "prompt": [
            "Exercise 7.17: Solve `GradeBook Class with 2D Arrays` using 1D/2D arrays or ArrayLists."
        ],
        "io": "Output: Array processing result for GradeBook Class with 2D Arrays",
        "hint": "Use arrays (e.g. int[] or int[][]) or java.util.ArrayList.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 7.17 \u2014 GradeBook Class with 2D Arrays\n        \n    }\n}"
    },
    {
        "id": "c7-18",
        "chapter": 7,
        "topic": "Arrays",
        "difficulty": "medium",
        "title": "Concept 7.18 \u2014 ArrayList Operations (Strings)",
        "prompt": [
            "Exercise 7.18: Solve `ArrayList Operations (Strings)` using 1D/2D arrays or ArrayLists."
        ],
        "io": "Output: Array processing result for ArrayList Operations (Strings)",
        "hint": "Use arrays (e.g. int[] or int[][]) or java.util.ArrayList.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 7.18 \u2014 ArrayList Operations (Strings)\n        \n    }\n}"
    },
    {
        "id": "c7-19",
        "chapter": 7,
        "topic": "Arrays",
        "difficulty": "medium",
        "title": "Concept 7.19 \u2014 Fibonacci Sequence Array",
        "prompt": [
            "Exercise 7.19: Solve `Fibonacci Sequence Array` using 1D/2D arrays or ArrayLists."
        ],
        "io": "Output: Array processing result for Fibonacci Sequence Array",
        "hint": "Use arrays (e.g. int[] or int[][]) or java.util.ArrayList.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 7.19 \u2014 Fibonacci Sequence Array\n        \n    }\n}"
    },
    {
        "id": "c7-20",
        "chapter": 7,
        "topic": "Arrays",
        "difficulty": "medium",
        "title": "Concept 7.20 \u2014 Matrix Multiplication (2D Arrays)",
        "prompt": [
            "Exercise 7.20: Solve `Matrix Multiplication (2D Arrays)` using 1D/2D arrays or ArrayLists."
        ],
        "io": "Output: Array processing result for Matrix Multiplication (2D Arrays)",
        "hint": "Use arrays (e.g. int[] or int[][]) or java.util.ArrayList.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 7.20 \u2014 Matrix Multiplication (2D Arrays)\n        \n    }\n}"
    },
    {
        "id": "c7-21",
        "chapter": 7,
        "topic": "Arrays",
        "difficulty": "medium",
        "title": "Concept 7.21 \u2014 Symmetric Matrix Checker",
        "prompt": [
            "Exercise 7.21: Solve `Symmetric Matrix Checker` using 1D/2D arrays or ArrayLists."
        ],
        "io": "Output: Array processing result for Symmetric Matrix Checker",
        "hint": "Use arrays (e.g. int[] or int[][]) or java.util.ArrayList.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 7.21 \u2014 Symmetric Matrix Checker\n        \n    }\n}"
    },
    {
        "id": "c7-22",
        "chapter": 7,
        "topic": "Arrays",
        "difficulty": "medium",
        "title": "Concept 7.22 \u2014 Pascal's Triangle Generator",
        "prompt": [
            "Exercise 7.22: Solve `Pascal's Triangle Generator` using 1D/2D arrays or ArrayLists."
        ],
        "io": "Output: Array processing result for Pascal's Triangle Generator",
        "hint": "Use arrays (e.g. int[] or int[][]) or java.util.ArrayList.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 7.22 \u2014 Pascal's Triangle Generator\n        \n    }\n}"
    },
    {
        "id": "c7-23",
        "chapter": 7,
        "topic": "Arrays",
        "difficulty": "hard",
        "title": "Concept 7.23 \u2014 Selection Sort on Array",
        "prompt": [
            "Exercise 7.23: Solve `Selection Sort on Array` using 1D/2D arrays or ArrayLists."
        ],
        "io": "Output: Array processing result for Selection Sort on Array",
        "hint": "Use arrays (e.g. int[] or int[][]) or java.util.ArrayList.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 7.23 \u2014 Selection Sort on Array\n        \n    }\n}"
    },
    {
        "id": "c7-24",
        "chapter": 7,
        "topic": "Arrays",
        "difficulty": "hard",
        "title": "Concept 7.24 \u2014 Binary Search on Array",
        "prompt": [
            "Exercise 7.24: Solve `Binary Search on Array` using 1D/2D arrays or ArrayLists."
        ],
        "io": "Output: Array processing result for Binary Search on Array",
        "hint": "Use arrays (e.g. int[] or int[][]) or java.util.ArrayList.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 7.24 \u2014 Binary Search on Array\n        \n    }\n}"
    },
    {
        "id": "c7-25",
        "chapter": 7,
        "topic": "Arrays",
        "difficulty": "hard",
        "title": "Concept 7.25 \u2014 Linear Search on Array",
        "prompt": [
            "Exercise 7.25: Solve `Linear Search on Array` using 1D/2D arrays or ArrayLists."
        ],
        "io": "Output: Array processing result for Linear Search on Array",
        "hint": "Use arrays (e.g. int[] or int[][]) or java.util.ArrayList.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 7.25 \u2014 Linear Search on Array\n        \n    }\n}"
    },
    {
        "id": "c7-26",
        "chapter": 7,
        "topic": "Arrays",
        "difficulty": "hard",
        "title": "Concept 7.26 \u2014 Shuffling a Deck of Cards",
        "prompt": [
            "Exercise 7.26: Solve `Shuffling a Deck of Cards` using 1D/2D arrays or ArrayLists."
        ],
        "io": "Output: Array processing result for Shuffling a Deck of Cards",
        "hint": "Use arrays (e.g. int[] or int[][]) or java.util.ArrayList.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 7.26 \u2014 Shuffling a Deck of Cards\n        \n    }\n}"
    },
    {
        "id": "c7-27",
        "chapter": 7,
        "topic": "Arrays",
        "difficulty": "hard",
        "title": "Concept 7.27 \u2014 Polling Survey Results Tally",
        "prompt": [
            "Exercise 7.27: Solve `Polling Survey Results Tally` using 1D/2D arrays or ArrayLists."
        ],
        "io": "Output: Array processing result for Polling Survey Results Tally",
        "hint": "Use arrays (e.g. int[] or int[][]) or java.util.ArrayList.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 7.27 \u2014 Polling Survey Results Tally\n        \n    }\n}"
    },
    {
        "id": "c7-28",
        "chapter": 7,
        "topic": "Arrays",
        "difficulty": "hard",
        "title": "Concept 7.28 \u2014 Array Copying Techniques",
        "prompt": [
            "Exercise 7.28: Solve `Array Copying Techniques` using 1D/2D arrays or ArrayLists."
        ],
        "io": "Output: Array processing result for Array Copying Techniques",
        "hint": "Use arrays (e.g. int[] or int[][]) or java.util.ArrayList.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 7.28 \u2014 Array Copying Techniques\n        \n    }\n}"
    },
    {
        "id": "c7-29",
        "chapter": 7,
        "topic": "Arrays",
        "difficulty": "hard",
        "title": "Concept 7.29 \u2014 Frequency Distribution Counter",
        "prompt": [
            "Exercise 7.29: Solve `Frequency Distribution Counter` using 1D/2D arrays or ArrayLists."
        ],
        "io": "Output: Array processing result for Frequency Distribution Counter",
        "hint": "Use arrays (e.g. int[] or int[][]) or java.util.ArrayList.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 7.29 \u2014 Frequency Distribution Counter\n        \n    }\n}"
    },
    {
        "id": "c7-30",
        "chapter": 7,
        "topic": "Arrays",
        "difficulty": "hard",
        "title": "Concept 7.30 \u2014 Spiral Matrix Printing",
        "prompt": [
            "Exercise 7.30: Solve `Spiral Matrix Printing` using 1D/2D arrays or ArrayLists."
        ],
        "io": "Output: Array processing result for Spiral Matrix Printing",
        "hint": "Use arrays (e.g. int[] or int[][]) or java.util.ArrayList.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 7.30 \u2014 Spiral Matrix Printing\n        \n    }\n}"
    },
    {
        "id": "c8-01",
        "chapter": 8,
        "topic": "OOP",
        "difficulty": "easy",
        "title": "Concept 8.1 \u2014 Time2 Class with Universal & Standard Time",
        "prompt": [
            "Exercise 8.1: Create `Time2 Class with Universal & Standard Time` enforcing encapsulation, static members, and overloaded constructors."
        ],
        "io": "Output: Class instance data for Time2 Class with Universal & Standard Time",
        "hint": "Verify constructors and access modifiers.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 8.1 \u2014 Time2 Class with Universal & Standard Time\n        \n    }\n}"
    },
    {
        "id": "c8-02",
        "chapter": 8,
        "topic": "OOP",
        "difficulty": "easy",
        "title": "Concept 8.2 \u2014 Rectangle Class with Dimension Validation",
        "prompt": [
            "Exercise 8.2: Create `Rectangle Class with Dimension Validation` enforcing encapsulation, static members, and overloaded constructors."
        ],
        "io": "Output: Class instance data for Rectangle Class with Dimension Validation",
        "hint": "Verify constructors and access modifiers.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 8.2 \u2014 Rectangle Class with Dimension Validation\n        \n    }\n}"
    },
    {
        "id": "c8-03",
        "chapter": 8,
        "topic": "OOP",
        "difficulty": "easy",
        "title": "Concept 8.3 \u2014 SavingsAccount Class with Annual Interest",
        "prompt": [
            "Exercise 8.3: Create `SavingsAccount Class with Annual Interest` enforcing encapsulation, static members, and overloaded constructors."
        ],
        "io": "Output: Class instance data for SavingsAccount Class with Annual Interest",
        "hint": "Verify constructors and access modifiers.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 8.3 \u2014 SavingsAccount Class with Annual Interest\n        \n    }\n}"
    },
    {
        "id": "c8-04",
        "chapter": 8,
        "topic": "OOP",
        "difficulty": "easy",
        "title": "Concept 8.4 \u2014 Complex Numbers Class (Real & Imaginary)",
        "prompt": [
            "Exercise 8.4: Create `Complex Numbers Class (Real & Imaginary)` enforcing encapsulation, static members, and overloaded constructors."
        ],
        "io": "Output: Class instance data for Complex Numbers Class (Real & Imaginary)",
        "hint": "Verify constructors and access modifiers.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 8.4 \u2014 Complex Numbers Class (Real & Imaginary)\n        \n    }\n}"
    },
    {
        "id": "c8-05",
        "chapter": 8,
        "topic": "OOP",
        "difficulty": "easy",
        "title": "Concept 8.5 \u2014 Rational Numbers Class (Fractions)",
        "prompt": [
            "Exercise 8.5: Create `Rational Numbers Class (Fractions)` enforcing encapsulation, static members, and overloaded constructors."
        ],
        "io": "Output: Class instance data for Rational Numbers Class (Fractions)",
        "hint": "Verify constructors and access modifiers.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 8.5 \u2014 Rational Numbers Class (Fractions)\n        \n    }\n}"
    },
    {
        "id": "c8-06",
        "chapter": 8,
        "topic": "OOP",
        "difficulty": "easy",
        "title": "Concept 8.6 \u2014 Date Class with Month-Day-Year",
        "prompt": [
            "Exercise 8.6: Create `Date Class with Month-Day-Year` enforcing encapsulation, static members, and overloaded constructors."
        ],
        "io": "Output: Class instance data for Date Class with Month-Day-Year",
        "hint": "Verify constructors and access modifiers.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 8.6 \u2014 Date Class with Month-Day-Year\n        \n    }\n}"
    },
    {
        "id": "c8-07",
        "chapter": 8,
        "topic": "OOP",
        "difficulty": "easy",
        "title": "Concept 8.7 \u2014 Employee Class with Static Count",
        "prompt": [
            "Exercise 8.7: Create `Employee Class with Static Count` enforcing encapsulation, static members, and overloaded constructors."
        ],
        "io": "Output: Class instance data for Employee Class with Static Count",
        "hint": "Verify constructors and access modifiers.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 8.7 \u2014 Employee Class with Static Count\n        \n    }\n}"
    },
    {
        "id": "c8-08",
        "chapter": 8,
        "topic": "OOP",
        "difficulty": "easy",
        "title": "Concept 8.8 \u2014 Emergency Vehicle Locator",
        "prompt": [
            "Exercise 8.8: Create `Emergency Vehicle Locator` enforcing encapsulation, static members, and overloaded constructors."
        ],
        "io": "Output: Class instance data for Emergency Vehicle Locator",
        "hint": "Verify constructors and access modifiers.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 8.8 \u2014 Emergency Vehicle Locator\n        \n    }\n}"
    },
    {
        "id": "c8-09",
        "chapter": 8,
        "topic": "OOP",
        "difficulty": "easy",
        "title": "Concept 8.9 \u2014 HugeInteger Class (40-digit Numbers)",
        "prompt": [
            "Exercise 8.9: Create `HugeInteger Class (40-digit Numbers)` enforcing encapsulation, static members, and overloaded constructors."
        ],
        "io": "Output: Class instance data for HugeInteger Class (40-digit Numbers)",
        "hint": "Verify constructors and access modifiers.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 8.9 \u2014 HugeInteger Class (40-digit Numbers)\n        \n    }\n}"
    },
    {
        "id": "c8-10",
        "chapter": 8,
        "topic": "OOP",
        "difficulty": "easy",
        "title": "Concept 8.10 \u2014 Set of Integers Class (BitSet)",
        "prompt": [
            "Exercise 8.10: Create `Set of Integers Class (BitSet)` enforcing encapsulation, static members, and overloaded constructors."
        ],
        "io": "Output: Class instance data for Set of Integers Class (BitSet)",
        "hint": "Verify constructors and access modifiers.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 8.10 \u2014 Set of Integers Class (BitSet)\n        \n    }\n}"
    },
    {
        "id": "c8-11",
        "chapter": 8,
        "topic": "OOP",
        "difficulty": "medium",
        "title": "Concept 8.11 \u2014 DateAndTime Combination Class",
        "prompt": [
            "Exercise 8.11: Create `DateAndTime Combination Class` enforcing encapsulation, static members, and overloaded constructors."
        ],
        "io": "Output: Class instance data for DateAndTime Combination Class",
        "hint": "Verify constructors and access modifiers.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 8.11 \u2014 DateAndTime Combination Class\n        \n    }\n}"
    },
    {
        "id": "c8-12",
        "chapter": 8,
        "topic": "OOP",
        "difficulty": "medium",
        "title": "Concept 8.12 \u2014 Tick Method for Time2 Class",
        "prompt": [
            "Exercise 8.12: Create `Tick Method for Time2 Class` enforcing encapsulation, static members, and overloaded constructors."
        ],
        "io": "Output: Class instance data for Tick Method for Time2 Class",
        "hint": "Verify constructors and access modifiers.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 8.12 \u2014 Tick Method for Time2 Class\n        \n    }\n}"
    },
    {
        "id": "c8-13",
        "chapter": 8,
        "topic": "OOP",
        "difficulty": "medium",
        "title": "Concept 8.13 \u2014 Enum Type TrafficLight",
        "prompt": [
            "Exercise 8.13: Create `Enum Type TrafficLight` enforcing encapsulation, static members, and overloaded constructors."
        ],
        "io": "Output: Class instance data for Enum Type TrafficLight",
        "hint": "Verify constructors and access modifiers.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 8.13 \u2014 Enum Type TrafficLight\n        \n    }\n}"
    },
    {
        "id": "c8-14",
        "chapter": 8,
        "topic": "OOP",
        "difficulty": "medium",
        "title": "Concept 8.14 \u2014 Enum Type Book",
        "prompt": [
            "Exercise 8.14: Create `Enum Type Book` enforcing encapsulation, static members, and overloaded constructors."
        ],
        "io": "Output: Class instance data for Enum Type Book",
        "hint": "Verify constructors and access modifiers.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 8.14 \u2014 Enum Type Book\n        \n    }\n}"
    },
    {
        "id": "c8-15",
        "chapter": 8,
        "topic": "OOP",
        "difficulty": "medium",
        "title": "Concept 8.15 \u2014 Static Import Math Demonstration",
        "prompt": [
            "Exercise 8.15: Create `Static Import Math Demonstration` enforcing encapsulation, static members, and overloaded constructors."
        ],
        "io": "Output: Class instance data for Static Import Math Demonstration",
        "hint": "Verify constructors and access modifiers.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 8.15 \u2014 Static Import Math Demonstration\n        \n    }\n}"
    },
    {
        "id": "c8-16",
        "chapter": 8,
        "topic": "OOP",
        "difficulty": "medium",
        "title": "Concept 8.16 \u2014 Package Access Test",
        "prompt": [
            "Exercise 8.16: Create `Package Access Test` enforcing encapsulation, static members, and overloaded constructors."
        ],
        "io": "Output: Class instance data for Package Access Test",
        "hint": "Verify constructors and access modifiers.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 8.16 \u2014 Package Access Test\n        \n    }\n}"
    },
    {
        "id": "c8-17",
        "chapter": 8,
        "topic": "OOP",
        "difficulty": "medium",
        "title": "Concept 8.17 \u2014 Composition vs Inheritance Demonstration",
        "prompt": [
            "Exercise 8.17: Create `Composition vs Inheritance Demonstration` enforcing encapsulation, static members, and overloaded constructors."
        ],
        "io": "Output: Class instance data for Composition vs Inheritance Demonstration",
        "hint": "Verify constructors and access modifiers.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 8.17 \u2014 Composition vs Inheritance Demonstration\n        \n    }\n}"
    },
    {
        "id": "c8-18",
        "chapter": 8,
        "topic": "OOP",
        "difficulty": "medium",
        "title": "Concept 8.18 \u2014 Garbage Collection Test",
        "prompt": [
            "Exercise 8.18: Create `Garbage Collection Test` enforcing encapsulation, static members, and overloaded constructors."
        ],
        "io": "Output: Class instance data for Garbage Collection Test",
        "hint": "Verify constructors and access modifiers.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 8.18 \u2014 Garbage Collection Test\n        \n    }\n}"
    },
    {
        "id": "c8-19",
        "chapter": 8,
        "topic": "OOP",
        "difficulty": "medium",
        "title": "Concept 8.19 \u2014 Final Instance Variable Test",
        "prompt": [
            "Exercise 8.19: Create `Final Instance Variable Test` enforcing encapsulation, static members, and overloaded constructors."
        ],
        "io": "Output: Class instance data for Final Instance Variable Test",
        "hint": "Verify constructors and access modifiers.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 8.19 \u2014 Final Instance Variable Test\n        \n    }\n}"
    },
    {
        "id": "c8-20",
        "chapter": 8,
        "topic": "OOP",
        "difficulty": "medium",
        "title": "Concept 8.20 \u2014 This Reference Demonstration",
        "prompt": [
            "Exercise 8.20: Create `This Reference Demonstration` enforcing encapsulation, static members, and overloaded constructors."
        ],
        "io": "Output: Class instance data for This Reference Demonstration",
        "hint": "Verify constructors and access modifiers.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 8.20 \u2014 This Reference Demonstration\n        \n    }\n}"
    },
    {
        "id": "c8-21",
        "chapter": 8,
        "topic": "OOP",
        "difficulty": "medium",
        "title": "Concept 8.21 \u2014 Overloaded Constructors Test",
        "prompt": [
            "Exercise 8.21: Create `Overloaded Constructors Test` enforcing encapsulation, static members, and overloaded constructors."
        ],
        "io": "Output: Class instance data for Overloaded Constructors Test",
        "hint": "Verify constructors and access modifiers.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 8.21 \u2014 Overloaded Constructors Test\n        \n    }\n}"
    },
    {
        "id": "c8-22",
        "chapter": 8,
        "topic": "OOP",
        "difficulty": "medium",
        "title": "Concept 8.22 \u2014 Default Constructor Generator",
        "prompt": [
            "Exercise 8.22: Create `Default Constructor Generator` enforcing encapsulation, static members, and overloaded constructors."
        ],
        "io": "Output: Class instance data for Default Constructor Generator",
        "hint": "Verify constructors and access modifiers.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 8.22 \u2014 Default Constructor Generator\n        \n    }\n}"
    },
    {
        "id": "c8-23",
        "chapter": 8,
        "topic": "OOP",
        "difficulty": "hard",
        "title": "Concept 8.23 \u2014 Bank Branch Manager Class",
        "prompt": [
            "Exercise 8.23: Create `Bank Branch Manager Class` enforcing encapsulation, static members, and overloaded constructors."
        ],
        "io": "Output: Class instance data for Bank Branch Manager Class",
        "hint": "Verify constructors and access modifiers.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 8.23 \u2014 Bank Branch Manager Class\n        \n    }\n}"
    },
    {
        "id": "c8-24",
        "chapter": 8,
        "topic": "OOP",
        "difficulty": "hard",
        "title": "Concept 8.24 \u2014 Flight Schedule Tracker",
        "prompt": [
            "Exercise 8.24: Create `Flight Schedule Tracker` enforcing encapsulation, static members, and overloaded constructors."
        ],
        "io": "Output: Class instance data for Flight Schedule Tracker",
        "hint": "Verify constructors and access modifiers.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 8.24 \u2014 Flight Schedule Tracker\n        \n    }\n}"
    },
    {
        "id": "c8-25",
        "chapter": 8,
        "topic": "OOP",
        "difficulty": "hard",
        "title": "Concept 8.25 \u2014 Hotel Room Reservation",
        "prompt": [
            "Exercise 8.25: Create `Hotel Room Reservation` enforcing encapsulation, static members, and overloaded constructors."
        ],
        "io": "Output: Class instance data for Hotel Room Reservation",
        "hint": "Verify constructors and access modifiers.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 8.25 \u2014 Hotel Room Reservation\n        \n    }\n}"
    },
    {
        "id": "c8-26",
        "chapter": 8,
        "topic": "OOP",
        "difficulty": "hard",
        "title": "Concept 8.26 \u2014 Customer Account Ledger",
        "prompt": [
            "Exercise 8.26: Create `Customer Account Ledger` enforcing encapsulation, static members, and overloaded constructors."
        ],
        "io": "Output: Class instance data for Customer Account Ledger",
        "hint": "Verify constructors and access modifiers.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 8.26 \u2014 Customer Account Ledger\n        \n    }\n}"
    },
    {
        "id": "c8-27",
        "chapter": 8,
        "topic": "OOP",
        "difficulty": "hard",
        "title": "Concept 8.27 \u2014 Inventory Warehouse Manager",
        "prompt": [
            "Exercise 8.27: Create `Inventory Warehouse Manager` enforcing encapsulation, static members, and overloaded constructors."
        ],
        "io": "Output: Class instance data for Inventory Warehouse Manager",
        "hint": "Verify constructors and access modifiers.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 8.27 \u2014 Inventory Warehouse Manager\n        \n    }\n}"
    },
    {
        "id": "c8-28",
        "chapter": 8,
        "topic": "OOP",
        "difficulty": "hard",
        "title": "Concept 8.28 \u2014 Student Academic Transcript",
        "prompt": [
            "Exercise 8.28: Create `Student Academic Transcript` enforcing encapsulation, static members, and overloaded constructors."
        ],
        "io": "Output: Class instance data for Student Academic Transcript",
        "hint": "Verify constructors and access modifiers.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 8.28 \u2014 Student Academic Transcript\n        \n    }\n}"
    },
    {
        "id": "c8-29",
        "chapter": 8,
        "topic": "OOP",
        "difficulty": "hard",
        "title": "Concept 8.29 \u2014 Medical Patient Chart",
        "prompt": [
            "Exercise 8.29: Create `Medical Patient Chart` enforcing encapsulation, static members, and overloaded constructors."
        ],
        "io": "Output: Class instance data for Medical Patient Chart",
        "hint": "Verify constructors and access modifiers.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 8.29 \u2014 Medical Patient Chart\n        \n    }\n}"
    },
    {
        "id": "c8-30",
        "chapter": 8,
        "topic": "OOP",
        "difficulty": "hard",
        "title": "Concept 8.30 \u2014 Car Maintenance Tracker",
        "prompt": [
            "Exercise 8.30: Create `Car Maintenance Tracker` enforcing encapsulation, static members, and overloaded constructors."
        ],
        "io": "Output: Class instance data for Car Maintenance Tracker",
        "hint": "Verify constructors and access modifiers.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 8.30 \u2014 Car Maintenance Tracker\n        \n    }\n}"
    },
    {
        "id": "c9-01",
        "chapter": 9,
        "topic": "OOP",
        "difficulty": "easy",
        "title": "Concept 9.1 \u2014 CommissionEmployee Class Implementation",
        "prompt": [
            "Exercise 9.1: Design the superclass and subclass hierarchy for `CommissionEmployee Class Implementation`."
        ],
        "io": "Output: Polymorphic subclass output for CommissionEmployee Class Implementation",
        "hint": "Use `extends` and `super(...)` constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 9.1 \u2014 CommissionEmployee Class Implementation\n        \n    }\n}"
    },
    {
        "id": "c9-02",
        "chapter": 9,
        "topic": "OOP",
        "difficulty": "easy",
        "title": "Concept 9.2 \u2014 BasePlusCommissionEmployee Superclass/Subclass",
        "prompt": [
            "Exercise 9.2: Design the superclass and subclass hierarchy for `BasePlusCommissionEmployee Superclass/Subclass`."
        ],
        "io": "Output: Polymorphic subclass output for BasePlusCommissionEmployee Superclass/Subclass",
        "hint": "Use `extends` and `super(...)` constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 9.2 \u2014 BasePlusCommissionEmployee Superclass/Subclass\n        \n    }\n}"
    },
    {
        "id": "c9-03",
        "chapter": 9,
        "topic": "OOP",
        "difficulty": "easy",
        "title": "Concept 9.3 \u2014 Quadrilateral Hierarchy (Trapezoid, Parallelogram)",
        "prompt": [
            "Exercise 9.3: Design the superclass and subclass hierarchy for `Quadrilateral Hierarchy (Trapezoid, Parallelogram)`."
        ],
        "io": "Output: Polymorphic subclass output for Quadrilateral Hierarchy (Trapezoid, Parallelogram)",
        "hint": "Use `extends` and `super(...)` constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 9.3 \u2014 Quadrilateral Hierarchy (Trapezoid, Parallelogram)\n        \n    }\n}"
    },
    {
        "id": "c9-04",
        "chapter": 9,
        "topic": "OOP",
        "difficulty": "easy",
        "title": "Concept 9.4 \u2014 Shape Hierarchy (TwoDimensional, ThreeDimensional)",
        "prompt": [
            "Exercise 9.4: Design the superclass and subclass hierarchy for `Shape Hierarchy (TwoDimensional, ThreeDimensional)`."
        ],
        "io": "Output: Polymorphic subclass output for Shape Hierarchy (TwoDimensional, ThreeDimensional)",
        "hint": "Use `extends` and `super(...)` constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 9.4 \u2014 Shape Hierarchy (TwoDimensional, ThreeDimensional)\n        \n    }\n}"
    },
    {
        "id": "c9-05",
        "chapter": 9,
        "topic": "OOP",
        "difficulty": "easy",
        "title": "Concept 9.5 \u2014 Vehicle Hierarchy (Car, Truck, Bicycle)",
        "prompt": [
            "Exercise 9.5: Design the superclass and subclass hierarchy for `Vehicle Hierarchy (Car, Truck, Bicycle)`."
        ],
        "io": "Output: Polymorphic subclass output for Vehicle Hierarchy (Car, Truck, Bicycle)",
        "hint": "Use `extends` and `super(...)` constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 9.5 \u2014 Vehicle Hierarchy (Car, Truck, Bicycle)\n        \n    }\n}"
    },
    {
        "id": "c9-06",
        "chapter": 9,
        "topic": "OOP",
        "difficulty": "easy",
        "title": "Concept 9.6 \u2014 Animal Hierarchy (Dog, Cat, Bird)",
        "prompt": [
            "Exercise 9.6: Design the superclass and subclass hierarchy for `Animal Hierarchy (Dog, Cat, Bird)`."
        ],
        "io": "Output: Polymorphic subclass output for Animal Hierarchy (Dog, Cat, Bird)",
        "hint": "Use `extends` and `super(...)` constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 9.6 \u2014 Animal Hierarchy (Dog, Cat, Bird)\n        \n    }\n}"
    },
    {
        "id": "c9-07",
        "chapter": 9,
        "topic": "OOP",
        "difficulty": "easy",
        "title": "Concept 9.7 \u2014 Employee Hierarchy (Hourly, Salaried)",
        "prompt": [
            "Exercise 9.7: Design the superclass and subclass hierarchy for `Employee Hierarchy (Hourly, Salaried)`."
        ],
        "io": "Output: Polymorphic subclass output for Employee Hierarchy (Hourly, Salaried)",
        "hint": "Use `extends` and `super(...)` constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 9.7 \u2014 Employee Hierarchy (Hourly, Salaried)\n        \n    }\n}"
    },
    {
        "id": "c9-08",
        "chapter": 9,
        "topic": "OOP",
        "difficulty": "easy",
        "title": "Concept 9.8 \u2014 BankAccount Hierarchy (Savings, Checking)",
        "prompt": [
            "Exercise 9.8: Design the superclass and subclass hierarchy for `BankAccount Hierarchy (Savings, Checking)`."
        ],
        "io": "Output: Polymorphic subclass output for BankAccount Hierarchy (Savings, Checking)",
        "hint": "Use `extends` and `super(...)` constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 9.8 \u2014 BankAccount Hierarchy (Savings, Checking)\n        \n    }\n}"
    },
    {
        "id": "c9-09",
        "chapter": 9,
        "topic": "OOP",
        "difficulty": "easy",
        "title": "Concept 9.9 \u2014 Protected Access Modifier Evaluation",
        "prompt": [
            "Exercise 9.9: Design the superclass and subclass hierarchy for `Protected Access Modifier Evaluation`."
        ],
        "io": "Output: Polymorphic subclass output for Protected Access Modifier Evaluation",
        "hint": "Use `extends` and `super(...)` constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 9.9 \u2014 Protected Access Modifier Evaluation\n        \n    }\n}"
    },
    {
        "id": "c9-10",
        "chapter": 9,
        "topic": "OOP",
        "difficulty": "easy",
        "title": "Concept 9.10 \u2014 Super Constructor Explicit Invocation",
        "prompt": [
            "Exercise 9.10: Design the superclass and subclass hierarchy for `Super Constructor Explicit Invocation`."
        ],
        "io": "Output: Polymorphic subclass output for Super Constructor Explicit Invocation",
        "hint": "Use `extends` and `super(...)` constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 9.10 \u2014 Super Constructor Explicit Invocation\n        \n    }\n}"
    },
    {
        "id": "c9-11",
        "chapter": 9,
        "topic": "OOP",
        "difficulty": "medium",
        "title": "Concept 9.11 \u2014 Method Overriding with @Override",
        "prompt": [
            "Exercise 9.11: Design the superclass and subclass hierarchy for `Method Overriding with @Override`."
        ],
        "io": "Output: Polymorphic subclass output for Method Overriding with @Override",
        "hint": "Use `extends` and `super(...)` constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 9.11 \u2014 Method Overriding with @Override\n        \n    }\n}"
    },
    {
        "id": "c9-12",
        "chapter": 9,
        "topic": "OOP",
        "difficulty": "medium",
        "title": "Concept 9.12 \u2014 Composition alternative to Inheritance",
        "prompt": [
            "Exercise 9.12: Design the superclass and subclass hierarchy for `Composition alternative to Inheritance`."
        ],
        "io": "Output: Polymorphic subclass output for Composition alternative to Inheritance",
        "hint": "Use `extends` and `super(...)` constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 9.12 \u2014 Composition alternative to Inheritance\n        \n    }\n}"
    },
    {
        "id": "c9-13",
        "chapter": 9,
        "topic": "OOP",
        "difficulty": "medium",
        "title": "Concept 9.13 \u2014 Polyline Graphic Object Hierarchy",
        "prompt": [
            "Exercise 9.13: Design the superclass and subclass hierarchy for `Polyline Graphic Object Hierarchy`."
        ],
        "io": "Output: Polymorphic subclass output for Polyline Graphic Object Hierarchy",
        "hint": "Use `extends` and `super(...)` constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 9.13 \u2014 Polyline Graphic Object Hierarchy\n        \n    }\n}"
    },
    {
        "id": "c9-14",
        "chapter": 9,
        "topic": "OOP",
        "difficulty": "medium",
        "title": "Concept 9.14 \u2014 Electronic Device Hierarchy (Phone, Laptop)",
        "prompt": [
            "Exercise 9.14: Design the superclass and subclass hierarchy for `Electronic Device Hierarchy (Phone, Laptop)`."
        ],
        "io": "Output: Polymorphic subclass output for Electronic Device Hierarchy (Phone, Laptop)",
        "hint": "Use `extends` and `super(...)` constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 9.14 \u2014 Electronic Device Hierarchy (Phone, Laptop)\n        \n    }\n}"
    },
    {
        "id": "c9-15",
        "chapter": 9,
        "topic": "OOP",
        "difficulty": "medium",
        "title": "Concept 9.15 \u2014 Book Hierarchy (Textbook, Novel)",
        "prompt": [
            "Exercise 9.15: Design the superclass and subclass hierarchy for `Book Hierarchy (Textbook, Novel)`."
        ],
        "io": "Output: Polymorphic subclass output for Book Hierarchy (Textbook, Novel)",
        "hint": "Use `extends` and `super(...)` constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 9.15 \u2014 Book Hierarchy (Textbook, Novel)\n        \n    }\n}"
    },
    {
        "id": "c9-16",
        "chapter": 9,
        "topic": "OOP",
        "difficulty": "medium",
        "title": "Concept 9.16 \u2014 Academic Person Hierarchy (Student, Professor)",
        "prompt": [
            "Exercise 9.16: Design the superclass and subclass hierarchy for `Academic Person Hierarchy (Student, Professor)`."
        ],
        "io": "Output: Polymorphic subclass output for Academic Person Hierarchy (Student, Professor)",
        "hint": "Use `extends` and `super(...)` constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 9.16 \u2014 Academic Person Hierarchy (Student, Professor)\n        \n    }\n}"
    },
    {
        "id": "c9-17",
        "chapter": 9,
        "topic": "OOP",
        "difficulty": "medium",
        "title": "Concept 9.17 \u2014 Furniture Hierarchy (Chair, Table)",
        "prompt": [
            "Exercise 9.17: Design the superclass and subclass hierarchy for `Furniture Hierarchy (Chair, Table)`."
        ],
        "io": "Output: Polymorphic subclass output for Furniture Hierarchy (Chair, Table)",
        "hint": "Use `extends` and `super(...)` constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 9.17 \u2014 Furniture Hierarchy (Chair, Table)\n        \n    }\n}"
    },
    {
        "id": "c9-18",
        "chapter": 9,
        "topic": "OOP",
        "difficulty": "medium",
        "title": "Concept 9.18 \u2014 Apparel Hierarchy (Shirt, Pants)",
        "prompt": [
            "Exercise 9.18: Design the superclass and subclass hierarchy for `Apparel Hierarchy (Shirt, Pants)`."
        ],
        "io": "Output: Polymorphic subclass output for Apparel Hierarchy (Shirt, Pants)",
        "hint": "Use `extends` and `super(...)` constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 9.18 \u2014 Apparel Hierarchy (Shirt, Pants)\n        \n    }\n}"
    },
    {
        "id": "c9-19",
        "chapter": 9,
        "topic": "OOP",
        "difficulty": "medium",
        "title": "Concept 9.19 \u2014 Food Item Hierarchy (Fruit, Vegetable)",
        "prompt": [
            "Exercise 9.19: Design the superclass and subclass hierarchy for `Food Item Hierarchy (Fruit, Vegetable)`."
        ],
        "io": "Output: Polymorphic subclass output for Food Item Hierarchy (Fruit, Vegetable)",
        "hint": "Use `extends` and `super(...)` constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 9.19 \u2014 Food Item Hierarchy (Fruit, Vegetable)\n        \n    }\n}"
    },
    {
        "id": "c9-20",
        "chapter": 9,
        "topic": "OOP",
        "difficulty": "medium",
        "title": "Concept 9.20 \u2014 Building Hierarchy (House, Skyscraper)",
        "prompt": [
            "Exercise 9.20: Design the superclass and subclass hierarchy for `Building Hierarchy (House, Skyscraper)`."
        ],
        "io": "Output: Polymorphic subclass output for Building Hierarchy (House, Skyscraper)",
        "hint": "Use `extends` and `super(...)` constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 9.20 \u2014 Building Hierarchy (House, Skyscraper)\n        \n    }\n}"
    },
    {
        "id": "c9-21",
        "chapter": 9,
        "topic": "OOP",
        "difficulty": "medium",
        "title": "Concept 9.21 \u2014 Transaction Hierarchy (Deposit, Withdrawal)",
        "prompt": [
            "Exercise 9.21: Design the superclass and subclass hierarchy for `Transaction Hierarchy (Deposit, Withdrawal)`."
        ],
        "io": "Output: Polymorphic subclass output for Transaction Hierarchy (Deposit, Withdrawal)",
        "hint": "Use `extends` and `super(...)` constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 9.21 \u2014 Transaction Hierarchy (Deposit, Withdrawal)\n        \n    }\n}"
    },
    {
        "id": "c9-22",
        "chapter": 9,
        "topic": "OOP",
        "difficulty": "medium",
        "title": "Concept 9.22 \u2014 Order Hierarchy (OnlineOrder, StoreOrder)",
        "prompt": [
            "Exercise 9.22: Design the superclass and subclass hierarchy for `Order Hierarchy (OnlineOrder, StoreOrder)`."
        ],
        "io": "Output: Polymorphic subclass output for Order Hierarchy (OnlineOrder, StoreOrder)",
        "hint": "Use `extends` and `super(...)` constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 9.22 \u2014 Order Hierarchy (OnlineOrder, StoreOrder)\n        \n    }\n}"
    },
    {
        "id": "c9-23",
        "chapter": 9,
        "topic": "OOP",
        "difficulty": "hard",
        "title": "Concept 9.23 \u2014 Notification Hierarchy (Email, SMS)",
        "prompt": [
            "Exercise 9.23: Design the superclass and subclass hierarchy for `Notification Hierarchy (Email, SMS)`."
        ],
        "io": "Output: Polymorphic subclass output for Notification Hierarchy (Email, SMS)",
        "hint": "Use `extends` and `super(...)` constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 9.23 \u2014 Notification Hierarchy (Email, SMS)\n        \n    }\n}"
    },
    {
        "id": "c9-24",
        "chapter": 9,
        "topic": "OOP",
        "difficulty": "hard",
        "title": "Concept 9.24 \u2014 Payment Method Hierarchy (CreditCard, Paypal)",
        "prompt": [
            "Exercise 9.24: Design the superclass and subclass hierarchy for `Payment Method Hierarchy (CreditCard, Paypal)`."
        ],
        "io": "Output: Polymorphic subclass output for Payment Method Hierarchy (CreditCard, Paypal)",
        "hint": "Use `extends` and `super(...)` constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 9.24 \u2014 Payment Method Hierarchy (CreditCard, Paypal)\n        \n    }\n}"
    },
    {
        "id": "c9-25",
        "chapter": 9,
        "topic": "OOP",
        "difficulty": "hard",
        "title": "Concept 9.25 \u2014 Game Character Hierarchy (Warrior, Mage)",
        "prompt": [
            "Exercise 9.25: Design the superclass and subclass hierarchy for `Game Character Hierarchy (Warrior, Mage)`."
        ],
        "io": "Output: Polymorphic subclass output for Game Character Hierarchy (Warrior, Mage)",
        "hint": "Use `extends` and `super(...)` constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 9.25 \u2014 Game Character Hierarchy (Warrior, Mage)\n        \n    }\n}"
    },
    {
        "id": "c9-26",
        "chapter": 9,
        "topic": "OOP",
        "difficulty": "hard",
        "title": "Concept 9.26 \u2014 Media Hierarchy (Audio, Video)",
        "prompt": [
            "Exercise 9.26: Design the superclass and subclass hierarchy for `Media Hierarchy (Audio, Video)`."
        ],
        "io": "Output: Polymorphic subclass output for Media Hierarchy (Audio, Video)",
        "hint": "Use `extends` and `super(...)` constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 9.26 \u2014 Media Hierarchy (Audio, Video)\n        \n    }\n}"
    },
    {
        "id": "c9-27",
        "chapter": 9,
        "topic": "OOP",
        "difficulty": "hard",
        "title": "Concept 9.27 \u2014 Instrument Hierarchy (Guitar, Piano)",
        "prompt": [
            "Exercise 9.27: Design the superclass and subclass hierarchy for `Instrument Hierarchy (Guitar, Piano)`."
        ],
        "io": "Output: Polymorphic subclass output for Instrument Hierarchy (Guitar, Piano)",
        "hint": "Use `extends` and `super(...)` constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 9.27 \u2014 Instrument Hierarchy (Guitar, Piano)\n        \n    }\n}"
    },
    {
        "id": "c9-28",
        "chapter": 9,
        "topic": "OOP",
        "difficulty": "hard",
        "title": "Concept 9.28 \u2014 User Account Hierarchy (Admin, Regular)",
        "prompt": [
            "Exercise 9.28: Design the superclass and subclass hierarchy for `User Account Hierarchy (Admin, Regular)`."
        ],
        "io": "Output: Polymorphic subclass output for User Account Hierarchy (Admin, Regular)",
        "hint": "Use `extends` and `super(...)` constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 9.28 \u2014 User Account Hierarchy (Admin, Regular)\n        \n    }\n}"
    },
    {
        "id": "c9-29",
        "chapter": 9,
        "topic": "OOP",
        "difficulty": "hard",
        "title": "Concept 9.29 \u2014 Sensor Hierarchy (Temperature, Pressure)",
        "prompt": [
            "Exercise 9.29: Design the superclass and subclass hierarchy for `Sensor Hierarchy (Temperature, Pressure)`."
        ],
        "io": "Output: Polymorphic subclass output for Sensor Hierarchy (Temperature, Pressure)",
        "hint": "Use `extends` and `super(...)` constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 9.29 \u2014 Sensor Hierarchy (Temperature, Pressure)\n        \n    }\n}"
    },
    {
        "id": "c9-30",
        "chapter": 9,
        "topic": "OOP",
        "difficulty": "hard",
        "title": "Concept 9.30 \u2014 Robot Hierarchy (Industrial, Service)",
        "prompt": [
            "Exercise 9.30: Design the superclass and subclass hierarchy for `Robot Hierarchy (Industrial, Service)`."
        ],
        "io": "Output: Polymorphic subclass output for Robot Hierarchy (Industrial, Service)",
        "hint": "Use `extends` and `super(...)` constructors.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 9.30 \u2014 Robot Hierarchy (Industrial, Service)\n        \n    }\n}"
    },
    {
        "id": "c10-01",
        "chapter": 10,
        "topic": "OOP",
        "difficulty": "easy",
        "title": "Concept 10.1 \u2014 Payable Interface Implementation",
        "prompt": [
            "Exercise 10.1: Define an interface or abstract class for `Payable Interface Implementation` and process polymorphically."
        ],
        "io": "Output: Polymorphic method execution for Payable Interface Implementation",
        "hint": "Use interface definitions and abstract method implementations.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 10.1 \u2014 Payable Interface Implementation\n        \n    }\n}"
    },
    {
        "id": "c10-02",
        "chapter": 10,
        "topic": "OOP",
        "difficulty": "easy",
        "title": "Concept 10.2 \u2014 Abstract Employee Class Hierarchy",
        "prompt": [
            "Exercise 10.2: Define an interface or abstract class for `Abstract Employee Class Hierarchy` and process polymorphically."
        ],
        "io": "Output: Polymorphic method execution for Abstract Employee Class Hierarchy",
        "hint": "Use interface definitions and abstract method implementations.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 10.2 \u2014 Abstract Employee Class Hierarchy\n        \n    }\n}"
    },
    {
        "id": "c10-03",
        "chapter": 10,
        "topic": "OOP",
        "difficulty": "easy",
        "title": "Concept 10.3 \u2014 Shape 2D & 3D Interface Hierarchy",
        "prompt": [
            "Exercise 10.3: Define an interface or abstract class for `Shape 2D & 3D Interface Hierarchy` and process polymorphically."
        ],
        "io": "Output: Polymorphic method execution for Shape 2D & 3D Interface Hierarchy",
        "hint": "Use interface definitions and abstract method implementations.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 10.3 \u2014 Shape 2D & 3D Interface Hierarchy\n        \n    }\n}"
    },
    {
        "id": "c10-04",
        "chapter": 10,
        "topic": "OOP",
        "difficulty": "easy",
        "title": "Concept 10.4 \u2014 CarbonFootprint Interface (Building, Car, Bicycle)",
        "prompt": [
            "Exercise 10.4: Define an interface or abstract class for `CarbonFootprint Interface (Building, Car, Bicycle)` and process polymorphically."
        ],
        "io": "Output: Polymorphic method execution for CarbonFootprint Interface (Building, Car, Bicycle)",
        "hint": "Use interface definitions and abstract method implementations.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 10.4 \u2014 CarbonFootprint Interface (Building, Car, Bicycle)\n        \n    }\n}"
    },
    {
        "id": "c10-05",
        "chapter": 10,
        "topic": "OOP",
        "difficulty": "easy",
        "title": "Concept 10.5 \u2014 Invoice & Employee Polymorphic Processing",
        "prompt": [
            "Exercise 10.5: Define an interface or abstract class for `Invoice & Employee Polymorphic Processing` and process polymorphically."
        ],
        "io": "Output: Polymorphic method execution for Invoice & Employee Polymorphic Processing",
        "hint": "Use interface definitions and abstract method implementations.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 10.5 \u2014 Invoice & Employee Polymorphic Processing\n        \n    }\n}"
    },
    {
        "id": "c10-06",
        "chapter": 10,
        "topic": "OOP",
        "difficulty": "easy",
        "title": "Concept 10.6 \u2014 Payroll System Modification with Bonus",
        "prompt": [
            "Exercise 10.6: Define an interface or abstract class for `Payroll System Modification with Bonus` and process polymorphically."
        ],
        "io": "Output: Polymorphic method execution for Payroll System Modification with Bonus",
        "hint": "Use interface definitions and abstract method implementations.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 10.6 \u2014 Payroll System Modification with Bonus\n        \n    }\n}"
    },
    {
        "id": "c10-07",
        "chapter": 10,
        "topic": "OOP",
        "difficulty": "easy",
        "title": "Concept 10.7 \u2014 Abstract Class vs Interface Comparison",
        "prompt": [
            "Exercise 10.7: Define an interface or abstract class for `Abstract Class vs Interface Comparison` and process polymorphically."
        ],
        "io": "Output: Polymorphic method execution for Abstract Class vs Interface Comparison",
        "hint": "Use interface definitions and abstract method implementations.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 10.7 \u2014 Abstract Class vs Interface Comparison\n        \n    }\n}"
    },
    {
        "id": "c10-08",
        "chapter": 10,
        "topic": "OOP",
        "difficulty": "easy",
        "title": "Concept 10.8 \u2014 Polymorphic Array Processing",
        "prompt": [
            "Exercise 10.8: Define an interface or abstract class for `Polymorphic Array Processing` and process polymorphically."
        ],
        "io": "Output: Polymorphic method execution for Polymorphic Array Processing",
        "hint": "Use interface definitions and abstract method implementations.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 10.8 \u2014 Polymorphic Array Processing\n        \n    }\n}"
    },
    {
        "id": "c10-09",
        "chapter": 10,
        "topic": "OOP",
        "difficulty": "easy",
        "title": "Concept 10.9 \u2014 Interface Default Methods Demonstration",
        "prompt": [
            "Exercise 10.9: Define an interface or abstract class for `Interface Default Methods Demonstration` and process polymorphically."
        ],
        "io": "Output: Polymorphic method execution for Interface Default Methods Demonstration",
        "hint": "Use interface definitions and abstract method implementations.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 10.9 \u2014 Interface Default Methods Demonstration\n        \n    }\n}"
    },
    {
        "id": "c10-10",
        "chapter": 10,
        "topic": "OOP",
        "difficulty": "easy",
        "title": "Concept 10.10 \u2014 Interface Static Methods Demonstration",
        "prompt": [
            "Exercise 10.10: Define an interface or abstract class for `Interface Static Methods Demonstration` and process polymorphically."
        ],
        "io": "Output: Polymorphic method execution for Interface Static Methods Demonstration",
        "hint": "Use interface definitions and abstract method implementations.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 10.10 \u2014 Interface Static Methods Demonstration\n        \n    }\n}"
    },
    {
        "id": "c10-11",
        "chapter": 10,
        "topic": "OOP",
        "difficulty": "medium",
        "title": "Concept 10.11 \u2014 Multiple Interface Implementation",
        "prompt": [
            "Exercise 10.11: Define an interface or abstract class for `Multiple Interface Implementation` and process polymorphically."
        ],
        "io": "Output: Polymorphic method execution for Multiple Interface Implementation",
        "hint": "Use interface definitions and abstract method implementations.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 10.11 \u2014 Multiple Interface Implementation\n        \n    }\n}"
    },
    {
        "id": "c10-12",
        "chapter": 10,
        "topic": "OOP",
        "difficulty": "medium",
        "title": "Concept 10.12 \u2014 Downcasting and instanceof Operator",
        "prompt": [
            "Exercise 10.12: Define an interface or abstract class for `Downcasting and instanceof Operator` and process polymorphically."
        ],
        "io": "Output: Polymorphic method execution for Downcasting and instanceof Operator",
        "hint": "Use interface definitions and abstract method implementations.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 10.12 \u2014 Downcasting and instanceof Operator\n        \n    }\n}"
    },
    {
        "id": "c10-13",
        "chapter": 10,
        "topic": "OOP",
        "difficulty": "medium",
        "title": "Concept 10.13 \u2014 Serializable Interface Usage",
        "prompt": [
            "Exercise 10.13: Define an interface or abstract class for `Serializable Interface Usage` and process polymorphically."
        ],
        "io": "Output: Polymorphic method execution for Serializable Interface Usage",
        "hint": "Use interface definitions and abstract method implementations.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 10.13 \u2014 Serializable Interface Usage\n        \n    }\n}"
    },
    {
        "id": "c10-14",
        "chapter": 10,
        "topic": "OOP",
        "difficulty": "medium",
        "title": "Concept 10.14 \u2014 Comparable Interface Implementation",
        "prompt": [
            "Exercise 10.14: Define an interface or abstract class for `Comparable Interface Implementation` and process polymorphically."
        ],
        "io": "Output: Polymorphic method execution for Comparable Interface Implementation",
        "hint": "Use interface definitions and abstract method implementations.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 10.14 \u2014 Comparable Interface Implementation\n        \n    }\n}"
    },
    {
        "id": "c10-15",
        "chapter": 10,
        "topic": "OOP",
        "difficulty": "medium",
        "title": "Concept 10.15 \u2014 Comparator Interface Custom Sorting",
        "prompt": [
            "Exercise 10.15: Define an interface or abstract class for `Comparator Interface Custom Sorting` and process polymorphically."
        ],
        "io": "Output: Polymorphic method execution for Comparator Interface Custom Sorting",
        "hint": "Use interface definitions and abstract method implementations.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 10.15 \u2014 Comparator Interface Custom Sorting\n        \n    }\n}"
    },
    {
        "id": "c10-16",
        "chapter": 10,
        "topic": "OOP",
        "difficulty": "medium",
        "title": "Concept 10.16 \u2014 Printable Interface Implementation",
        "prompt": [
            "Exercise 10.16: Define an interface or abstract class for `Printable Interface Implementation` and process polymorphically."
        ],
        "io": "Output: Polymorphic method execution for Printable Interface Implementation",
        "hint": "Use interface definitions and abstract method implementations.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 10.16 \u2014 Printable Interface Implementation\n        \n    }\n}"
    },
    {
        "id": "c10-17",
        "chapter": 10,
        "topic": "OOP",
        "difficulty": "medium",
        "title": "Concept 10.17 \u2014 Exportable Data Interface",
        "prompt": [
            "Exercise 10.17: Define an interface or abstract class for `Exportable Data Interface` and process polymorphically."
        ],
        "io": "Output: Polymorphic method execution for Exportable Data Interface",
        "hint": "Use interface definitions and abstract method implementations.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 10.17 \u2014 Exportable Data Interface\n        \n    }\n}"
    },
    {
        "id": "c10-18",
        "chapter": 10,
        "topic": "OOP",
        "difficulty": "medium",
        "title": "Concept 10.18 \u2014 Encryptable Security Interface",
        "prompt": [
            "Exercise 10.18: Define an interface or abstract class for `Encryptable Security Interface` and process polymorphically."
        ],
        "io": "Output: Polymorphic method execution for Encryptable Security Interface",
        "hint": "Use interface definitions and abstract method implementations.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 10.18 \u2014 Encryptable Security Interface\n        \n    }\n}"
    },
    {
        "id": "c10-19",
        "chapter": 10,
        "topic": "OOP",
        "difficulty": "medium",
        "title": "Concept 10.19 \u2014 Resizable Graphic Object Interface",
        "prompt": [
            "Exercise 10.19: Define an interface or abstract class for `Resizable Graphic Object Interface` and process polymorphically."
        ],
        "io": "Output: Polymorphic method execution for Resizable Graphic Object Interface",
        "hint": "Use interface definitions and abstract method implementations.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 10.19 \u2014 Resizable Graphic Object Interface\n        \n    }\n}"
    },
    {
        "id": "c10-20",
        "chapter": 10,
        "topic": "OOP",
        "difficulty": "medium",
        "title": "Concept 10.20 \u2014 Movable Sprite Interface",
        "prompt": [
            "Exercise 10.20: Define an interface or abstract class for `Movable Sprite Interface` and process polymorphically."
        ],
        "io": "Output: Polymorphic method execution for Movable Sprite Interface",
        "hint": "Use interface definitions and abstract method implementations.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 10.20 \u2014 Movable Sprite Interface\n        \n    }\n}"
    },
    {
        "id": "c10-21",
        "chapter": 10,
        "topic": "OOP",
        "difficulty": "medium",
        "title": "Concept 10.21 \u2014 Auditable Financial Interface",
        "prompt": [
            "Exercise 10.21: Define an interface or abstract class for `Auditable Financial Interface` and process polymorphically."
        ],
        "io": "Output: Polymorphic method execution for Auditable Financial Interface",
        "hint": "Use interface definitions and abstract method implementations.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 10.21 \u2014 Auditable Financial Interface\n        \n    }\n}"
    },
    {
        "id": "c10-22",
        "chapter": 10,
        "topic": "OOP",
        "difficulty": "medium",
        "title": "Concept 10.22 \u2014 Searchable Inventory Interface",
        "prompt": [
            "Exercise 10.22: Define an interface or abstract class for `Searchable Inventory Interface` and process polymorphically."
        ],
        "io": "Output: Polymorphic method execution for Searchable Inventory Interface",
        "hint": "Use interface definitions and abstract method implementations.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 10.22 \u2014 Searchable Inventory Interface\n        \n    }\n}"
    },
    {
        "id": "c10-23",
        "chapter": 10,
        "topic": "OOP",
        "difficulty": "hard",
        "title": "Concept 10.23 \u2014 Loggable System Event Interface",
        "prompt": [
            "Exercise 10.23: Define an interface or abstract class for `Loggable System Event Interface` and process polymorphically."
        ],
        "io": "Output: Polymorphic method execution for Loggable System Event Interface",
        "hint": "Use interface definitions and abstract method implementations.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 10.23 \u2014 Loggable System Event Interface\n        \n    }\n}"
    },
    {
        "id": "c10-24",
        "chapter": 10,
        "topic": "OOP",
        "difficulty": "hard",
        "title": "Concept 10.24 \u2014 Validateable User Form Interface",
        "prompt": [
            "Exercise 10.24: Define an interface or abstract class for `Validateable User Form Interface` and process polymorphically."
        ],
        "io": "Output: Polymorphic method execution for Validateable User Form Interface",
        "hint": "Use interface definitions and abstract method implementations.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 10.24 \u2014 Validateable User Form Interface\n        \n    }\n}"
    },
    {
        "id": "c10-25",
        "chapter": 10,
        "topic": "OOP",
        "difficulty": "hard",
        "title": "Concept 10.25 \u2014 Cacheable Data Provider Interface",
        "prompt": [
            "Exercise 10.25: Define an interface or abstract class for `Cacheable Data Provider Interface` and process polymorphically."
        ],
        "io": "Output: Polymorphic method execution for Cacheable Data Provider Interface",
        "hint": "Use interface definitions and abstract method implementations.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 10.25 \u2014 Cacheable Data Provider Interface\n        \n    }\n}"
    },
    {
        "id": "c10-26",
        "chapter": 10,
        "topic": "OOP",
        "difficulty": "hard",
        "title": "Concept 10.26 \u2014 Cloneable Deep Copy Implementation",
        "prompt": [
            "Exercise 10.26: Define an interface or abstract class for `Cloneable Deep Copy Implementation` and process polymorphically."
        ],
        "io": "Output: Polymorphic method execution for Cloneable Deep Copy Implementation",
        "hint": "Use interface definitions and abstract method implementations.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 10.26 \u2014 Cloneable Deep Copy Implementation\n        \n    }\n}"
    },
    {
        "id": "c10-27",
        "chapter": 10,
        "topic": "OOP",
        "difficulty": "hard",
        "title": "Concept 10.27 \u2014 Connectable Network Service",
        "prompt": [
            "Exercise 10.27: Define an interface or abstract class for `Connectable Network Service` and process polymorphically."
        ],
        "io": "Output: Polymorphic method execution for Connectable Network Service",
        "hint": "Use interface definitions and abstract method implementations.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 10.27 \u2014 Connectable Network Service\n        \n    }\n}"
    },
    {
        "id": "c10-28",
        "chapter": 10,
        "topic": "OOP",
        "difficulty": "hard",
        "title": "Concept 10.28 \u2014 Renderable UI Widget Interface",
        "prompt": [
            "Exercise 10.28: Define an interface or abstract class for `Renderable UI Widget Interface` and process polymorphically."
        ],
        "io": "Output: Polymorphic method execution for Renderable UI Widget Interface",
        "hint": "Use interface definitions and abstract method implementations.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 10.28 \u2014 Renderable UI Widget Interface\n        \n    }\n}"
    },
    {
        "id": "c10-29",
        "chapter": 10,
        "topic": "OOP",
        "difficulty": "hard",
        "title": "Concept 10.29 \u2014 Streamable Media Interface",
        "prompt": [
            "Exercise 10.29: Define an interface or abstract class for `Streamable Media Interface` and process polymorphically."
        ],
        "io": "Output: Polymorphic method execution for Streamable Media Interface",
        "hint": "Use interface definitions and abstract method implementations.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 10.29 \u2014 Streamable Media Interface\n        \n    }\n}"
    },
    {
        "id": "c10-30",
        "chapter": 10,
        "topic": "OOP",
        "difficulty": "hard",
        "title": "Concept 10.30 \u2014 Configurable System Module",
        "prompt": [
            "Exercise 10.30: Define an interface or abstract class for `Configurable System Module` and process polymorphically."
        ],
        "io": "Output: Polymorphic method execution for Configurable System Module",
        "hint": "Use interface definitions and abstract method implementations.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 10.30 \u2014 Configurable System Module\n        \n    }\n}"
    },
    {
        "id": "c11-01",
        "chapter": 11,
        "topic": "Exception Handling",
        "difficulty": "easy",
        "title": "Concept 11.1 \u2014 Division by Zero Exception Handling",
        "prompt": [
            "Exercise 11.1: Implement exception handling logic for `Division by Zero Exception Handling` using try-catch-finally."
        ],
        "io": "Output: Handled exception message for Division by Zero Exception Handling",
        "hint": "Use try { ... } catch (Exception e) { ... } finally { ... }",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 11.1 \u2014 Division by Zero Exception Handling\n        \n    }\n}"
    },
    {
        "id": "c11-02",
        "chapter": 11,
        "topic": "Exception Handling",
        "difficulty": "easy",
        "title": "Concept 11.2 \u2014 InputMismatchException Retry Loop",
        "prompt": [
            "Exercise 11.2: Implement exception handling logic for `InputMismatchException Retry Loop` using try-catch-finally."
        ],
        "io": "Output: Handled exception message for InputMismatchException Retry Loop",
        "hint": "Use try { ... } catch (Exception e) { ... } finally { ... }",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 11.2 \u2014 InputMismatchException Retry Loop\n        \n    }\n}"
    },
    {
        "id": "c11-03",
        "chapter": 11,
        "topic": "Exception Handling",
        "difficulty": "easy",
        "title": "Concept 11.3 \u2014 Exception Subclass Hierarchy (ExceptionA, B, C)",
        "prompt": [
            "Exercise 11.3: Implement exception handling logic for `Exception Subclass Hierarchy (ExceptionA, B, C)` using try-catch-finally."
        ],
        "io": "Output: Handled exception message for Exception Subclass Hierarchy (ExceptionA, B, C)",
        "hint": "Use try { ... } catch (Exception e) { ... } finally { ... }",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 11.3 \u2014 Exception Subclass Hierarchy (ExceptionA, B, C)\n        \n    }\n}"
    },
    {
        "id": "c11-04",
        "chapter": 11,
        "topic": "Exception Handling",
        "difficulty": "easy",
        "title": "Concept 11.4 \u2014 Catching Base Class Exceptions",
        "prompt": [
            "Exercise 11.4: Implement exception handling logic for `Catching Base Class Exceptions` using try-catch-finally."
        ],
        "io": "Output: Handled exception message for Catching Base Class Exceptions",
        "hint": "Use try { ... } catch (Exception e) { ... } finally { ... }",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 11.4 \u2014 Catching Base Class Exceptions\n        \n    }\n}"
    },
    {
        "id": "c11-05",
        "chapter": 11,
        "topic": "Exception Handling",
        "difficulty": "easy",
        "title": "Concept 11.5 \u2014 Catching NullPointerException & ArrayIndexOutOfBounds",
        "prompt": [
            "Exercise 11.5: Implement exception handling logic for `Catching NullPointerException & ArrayIndexOutOfBounds` using try-catch-finally."
        ],
        "io": "Output: Handled exception message for Catching NullPointerException & ArrayIndexOutOfBounds",
        "hint": "Use try { ... } catch (Exception e) { ... } finally { ... }",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 11.5 \u2014 Catching NullPointerException & ArrayIndexOutOfBounds\n        \n    }\n}"
    },
    {
        "id": "c11-06",
        "chapter": 11,
        "topic": "Exception Handling",
        "difficulty": "easy",
        "title": "Concept 11.6 \u2014 Order of Catch Blocks Validation",
        "prompt": [
            "Exercise 11.6: Implement exception handling logic for `Order of Catch Blocks Validation` using try-catch-finally."
        ],
        "io": "Output: Handled exception message for Order of Catch Blocks Validation",
        "hint": "Use try { ... } catch (Exception e) { ... } finally { ... }",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 11.6 \u2014 Order of Catch Blocks Validation\n        \n    }\n}"
    },
    {
        "id": "c11-07",
        "chapter": 11,
        "topic": "Exception Handling",
        "difficulty": "easy",
        "title": "Concept 11.7 \u2014 Rethrowing Exceptions (Rethrowing Exception)",
        "prompt": [
            "Exercise 11.7: Implement exception handling logic for `Rethrowing Exceptions (Rethrowing Exception)` using try-catch-finally."
        ],
        "io": "Output: Handled exception message for Rethrowing Exceptions (Rethrowing Exception)",
        "hint": "Use try { ... } catch (Exception e) { ... } finally { ... }",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 11.7 \u2014 Rethrowing Exceptions (Rethrowing Exception)\n        \n    }\n}"
    },
    {
        "id": "c11-08",
        "chapter": 11,
        "topic": "Exception Handling",
        "difficulty": "easy",
        "title": "Concept 11.8 \u2014 Uncaught Exceptions Stack Trace Analysis",
        "prompt": [
            "Exercise 11.8: Implement exception handling logic for `Uncaught Exceptions Stack Trace Analysis` using try-catch-finally."
        ],
        "io": "Output: Handled exception message for Uncaught Exceptions Stack Trace Analysis",
        "hint": "Use try { ... } catch (Exception e) { ... } finally { ... }",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 11.8 \u2014 Uncaught Exceptions Stack Trace Analysis\n        \n    }\n}"
    },
    {
        "id": "c11-09",
        "chapter": 11,
        "topic": "Exception Handling",
        "difficulty": "easy",
        "title": "Concept 11.9 \u2014 Chained Exceptions with getCause()",
        "prompt": [
            "Exercise 11.9: Implement exception handling logic for `Chained Exceptions with getCause()` using try-catch-finally."
        ],
        "io": "Output: Handled exception message for Chained Exceptions with getCause()",
        "hint": "Use try { ... } catch (Exception e) { ... } finally { ... }",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 11.9 \u2014 Chained Exceptions with getCause()\n        \n    }\n}"
    },
    {
        "id": "c11-10",
        "chapter": 11,
        "topic": "Exception Handling",
        "difficulty": "easy",
        "title": "Concept 11.10 \u2014 Custom Exception Class (InvalidScoreException)",
        "prompt": [
            "Exercise 11.10: Implement exception handling logic for `Custom Exception Class (InvalidScoreException)` using try-catch-finally."
        ],
        "io": "Output: Handled exception message for Custom Exception Class (InvalidScoreException)",
        "hint": "Use try { ... } catch (Exception e) { ... } finally { ... }",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 11.10 \u2014 Custom Exception Class (InvalidScoreException)\n        \n    }\n}"
    },
    {
        "id": "c11-11",
        "chapter": 11,
        "topic": "Exception Handling",
        "difficulty": "medium",
        "title": "Concept 11.11 \u2014 Custom Exception Class (NegativeBalanceException)",
        "prompt": [
            "Exercise 11.11: Implement exception handling logic for `Custom Exception Class (NegativeBalanceException)` using try-catch-finally."
        ],
        "io": "Output: Handled exception message for Custom Exception Class (NegativeBalanceException)",
        "hint": "Use try { ... } catch (Exception e) { ... } finally { ... }",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 11.11 \u2014 Custom Exception Class (NegativeBalanceException)\n        \n    }\n}"
    },
    {
        "id": "c11-12",
        "chapter": 11,
        "topic": "Exception Handling",
        "difficulty": "medium",
        "title": "Concept 11.12 \u2014 Custom Exception Class (OverdraftException)",
        "prompt": [
            "Exercise 11.12: Implement exception handling logic for `Custom Exception Class (OverdraftException)` using try-catch-finally."
        ],
        "io": "Output: Handled exception message for Custom Exception Class (OverdraftException)",
        "hint": "Use try { ... } catch (Exception e) { ... } finally { ... }",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 11.12 \u2014 Custom Exception Class (OverdraftException)\n        \n    }\n}"
    },
    {
        "id": "c11-13",
        "chapter": 11,
        "topic": "Exception Handling",
        "difficulty": "medium",
        "title": "Concept 11.13 \u2014 Finally Block Execution Behavior",
        "prompt": [
            "Exercise 11.13: Implement exception handling logic for `Finally Block Execution Behavior` using try-catch-finally."
        ],
        "io": "Output: Handled exception message for Finally Block Execution Behavior",
        "hint": "Use try { ... } catch (Exception e) { ... } finally { ... }",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 11.13 \u2014 Finally Block Execution Behavior\n        \n    }\n}"
    },
    {
        "id": "c11-14",
        "chapter": 11,
        "topic": "Exception Handling",
        "difficulty": "medium",
        "title": "Concept 11.14 \u2014 Resource Leak Prevention with Finally",
        "prompt": [
            "Exercise 11.14: Implement exception handling logic for `Resource Leak Prevention with Finally` using try-catch-finally."
        ],
        "io": "Output: Handled exception message for Resource Leak Prevention with Finally",
        "hint": "Use try { ... } catch (Exception e) { ... } finally { ... }",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 11.14 \u2014 Resource Leak Prevention with Finally\n        \n    }\n}"
    },
    {
        "id": "c11-15",
        "chapter": 11,
        "topic": "Exception Handling",
        "difficulty": "medium",
        "title": "Concept 11.15 \u2014 Try-with-Resources Statement",
        "prompt": [
            "Exercise 11.15: Implement exception handling logic for `Try-with-Resources Statement` using try-catch-finally."
        ],
        "io": "Output: Handled exception message for Try-with-Resources Statement",
        "hint": "Use try { ... } catch (Exception e) { ... } finally { ... }",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 11.15 \u2014 Try-with-Resources Statement\n        \n    }\n}"
    },
    {
        "id": "c11-16",
        "chapter": 11,
        "topic": "Exception Handling",
        "difficulty": "medium",
        "title": "Concept 11.16 \u2014 Multi-Catch Block (Exception1 | Exception2)",
        "prompt": [
            "Exercise 11.16: Implement exception handling logic for `Multi-Catch Block (Exception1 | Exception2)` using try-catch-finally."
        ],
        "io": "Output: Handled exception message for Multi-Catch Block (Exception1 | Exception2)",
        "hint": "Use try { ... } catch (Exception e) { ... } finally { ... }",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 11.16 \u2014 Multi-Catch Block (Exception1 | Exception2)\n        \n    }\n}"
    },
    {
        "id": "c11-17",
        "chapter": 11,
        "topic": "Exception Handling",
        "difficulty": "medium",
        "title": "Concept 11.17 \u2014 Throwing Checked vs Unchecked Exceptions",
        "prompt": [
            "Exercise 11.17: Implement exception handling logic for `Throwing Checked vs Unchecked Exceptions` using try-catch-finally."
        ],
        "io": "Output: Handled exception message for Throwing Checked vs Unchecked Exceptions",
        "hint": "Use try { ... } catch (Exception e) { ... } finally { ... }",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 11.17 \u2014 Throwing Checked vs Unchecked Exceptions\n        \n    }\n}"
    },
    {
        "id": "c11-18",
        "chapter": 11,
        "topic": "Exception Handling",
        "difficulty": "medium",
        "title": "Concept 11.18 \u2014 Method Exception Propagation",
        "prompt": [
            "Exercise 11.18: Implement exception handling logic for `Method Exception Propagation` using try-catch-finally."
        ],
        "io": "Output: Handled exception message for Method Exception Propagation",
        "hint": "Use try { ... } catch (Exception e) { ... } finally { ... }",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 11.18 \u2014 Method Exception Propagation\n        \n    }\n}"
    },
    {
        "id": "c11-19",
        "chapter": 11,
        "topic": "Exception Handling",
        "difficulty": "medium",
        "title": "Concept 11.19 \u2014 Constructor Exception Handling",
        "prompt": [
            "Exercise 11.19: Implement exception handling logic for `Constructor Exception Handling` using try-catch-finally."
        ],
        "io": "Output: Handled exception message for Constructor Exception Handling",
        "hint": "Use try { ... } catch (Exception e) { ... } finally { ... }",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 11.19 \u2014 Constructor Exception Handling\n        \n    }\n}"
    },
    {
        "id": "c11-20",
        "chapter": 11,
        "topic": "Exception Handling",
        "difficulty": "medium",
        "title": "Concept 11.20 \u2014 File Not Found Exception Handling",
        "prompt": [
            "Exercise 11.20: Implement exception handling logic for `File Not Found Exception Handling` using try-catch-finally."
        ],
        "io": "Output: Handled exception message for File Not Found Exception Handling",
        "hint": "Use try { ... } catch (Exception e) { ... } finally { ... }",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 11.20 \u2014 File Not Found Exception Handling\n        \n    }\n}"
    },
    {
        "id": "c11-21",
        "chapter": 11,
        "topic": "Exception Handling",
        "difficulty": "medium",
        "title": "Concept 11.21 \u2014 Number Format Exception Converter",
        "prompt": [
            "Exercise 11.21: Implement exception handling logic for `Number Format Exception Converter` using try-catch-finally."
        ],
        "io": "Output: Handled exception message for Number Format Exception Converter",
        "hint": "Use try { ... } catch (Exception e) { ... } finally { ... }",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 11.21 \u2014 Number Format Exception Converter\n        \n    }\n}"
    },
    {
        "id": "c11-22",
        "chapter": 11,
        "topic": "Exception Handling",
        "difficulty": "medium",
        "title": "Concept 11.22 \u2014 Array Index Out Of Bounds Safeguard",
        "prompt": [
            "Exercise 11.22: Implement exception handling logic for `Array Index Out Of Bounds Safeguard` using try-catch-finally."
        ],
        "io": "Output: Handled exception message for Array Index Out Of Bounds Safeguard",
        "hint": "Use try { ... } catch (Exception e) { ... } finally { ... }",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 11.22 \u2014 Array Index Out Of Bounds Safeguard\n        \n    }\n}"
    },
    {
        "id": "c11-23",
        "chapter": 11,
        "topic": "Exception Handling",
        "difficulty": "hard",
        "title": "Concept 11.23 \u2014 Class Cast Exception Handler",
        "prompt": [
            "Exercise 11.23: Implement exception handling logic for `Class Cast Exception Handler` using try-catch-finally."
        ],
        "io": "Output: Handled exception message for Class Cast Exception Handler",
        "hint": "Use try { ... } catch (Exception e) { ... } finally { ... }",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 11.23 \u2014 Class Cast Exception Handler\n        \n    }\n}"
    },
    {
        "id": "c11-24",
        "chapter": 11,
        "topic": "Exception Handling",
        "difficulty": "hard",
        "title": "Concept 11.24 \u2014 Illegal Argument Exception Guard",
        "prompt": [
            "Exercise 11.24: Implement exception handling logic for `Illegal Argument Exception Guard` using try-catch-finally."
        ],
        "io": "Output: Handled exception message for Illegal Argument Exception Guard",
        "hint": "Use try { ... } catch (Exception e) { ... } finally { ... }",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 11.24 \u2014 Illegal Argument Exception Guard\n        \n    }\n}"
    },
    {
        "id": "c11-25",
        "chapter": 11,
        "topic": "Exception Handling",
        "difficulty": "hard",
        "title": "Concept 11.25 \u2014 Illegal State Exception Validator",
        "prompt": [
            "Exercise 11.25: Implement exception handling logic for `Illegal State Exception Validator` using try-catch-finally."
        ],
        "io": "Output: Handled exception message for Illegal State Exception Validator",
        "hint": "Use try { ... } catch (Exception e) { ... } finally { ... }",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 11.25 \u2014 Illegal State Exception Validator\n        \n    }\n}"
    },
    {
        "id": "c11-26",
        "chapter": 11,
        "topic": "Exception Handling",
        "difficulty": "hard",
        "title": "Concept 11.26 \u2014 Concurrent Modification Exception Shield",
        "prompt": [
            "Exercise 11.26: Implement exception handling logic for `Concurrent Modification Exception Shield` using try-catch-finally."
        ],
        "io": "Output: Handled exception message for Concurrent Modification Exception Shield",
        "hint": "Use try { ... } catch (Exception e) { ... } finally { ... }",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 11.26 \u2014 Concurrent Modification Exception Shield\n        \n    }\n}"
    },
    {
        "id": "c11-27",
        "chapter": 11,
        "topic": "Exception Handling",
        "difficulty": "hard",
        "title": "Concept 11.27 \u2014 Stack Overflow Catch Failure Analysis",
        "prompt": [
            "Exercise 11.27: Implement exception handling logic for `Stack Overflow Catch Failure Analysis` using try-catch-finally."
        ],
        "io": "Output: Handled exception message for Stack Overflow Catch Failure Analysis",
        "hint": "Use try { ... } catch (Exception e) { ... } finally { ... }",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 11.27 \u2014 Stack Overflow Catch Failure Analysis\n        \n    }\n}"
    },
    {
        "id": "c11-28",
        "chapter": 11,
        "topic": "Exception Handling",
        "difficulty": "hard",
        "title": "Concept 11.28 \u2014 Out Of Memory Exception Simulation",
        "prompt": [
            "Exercise 11.28: Implement exception handling logic for `Out Of Memory Exception Simulation` using try-catch-finally."
        ],
        "io": "Output: Handled exception message for Out Of Memory Exception Simulation",
        "hint": "Use try { ... } catch (Exception e) { ... } finally { ... }",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 11.28 \u2014 Out Of Memory Exception Simulation\n        \n    }\n}"
    },
    {
        "id": "c11-29",
        "chapter": 11,
        "topic": "Exception Handling",
        "difficulty": "hard",
        "title": "Concept 11.29 \u2014 Security Exception Check",
        "prompt": [
            "Exercise 11.29: Implement exception handling logic for `Security Exception Check` using try-catch-finally."
        ],
        "io": "Output: Handled exception message for Security Exception Check",
        "hint": "Use try { ... } catch (Exception e) { ... } finally { ... }",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 11.29 \u2014 Security Exception Check\n        \n    }\n}"
    },
    {
        "id": "c11-30",
        "chapter": 11,
        "topic": "Exception Handling",
        "difficulty": "hard",
        "title": "Concept 11.30 \u2014 Timeout Exception Handler",
        "prompt": [
            "Exercise 11.30: Implement exception handling logic for `Timeout Exception Handler` using try-catch-finally."
        ],
        "io": "Output: Handled exception message for Timeout Exception Handler",
        "hint": "Use try { ... } catch (Exception e) { ... } finally { ... }",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 11.30 \u2014 Timeout Exception Handler\n        \n    }\n}"
    },
    {
        "id": "c12-01",
        "chapter": 12,
        "topic": "Strings",
        "difficulty": "easy",
        "title": "Concept 12.1 \u2014 String Comparison Methods (equals, compareTo)",
        "prompt": [
            "Exercise 12.1: Implement `String Comparison Methods (equals, compareTo)` using String methods, StringBuilder, or Regular Expressions."
        ],
        "io": "Output: Processed string output for String Comparison Methods (equals, compareTo)",
        "hint": "Use java.lang.String or java.lang.StringBuilder.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 12.1 \u2014 String Comparison Methods (equals, compareTo)\n        \n    }\n}"
    },
    {
        "id": "c12-02",
        "chapter": 12,
        "topic": "Strings",
        "difficulty": "easy",
        "title": "Concept 12.2 \u2014 String Region Match Check",
        "prompt": [
            "Exercise 12.2: Implement `String Region Match Check` using String methods, StringBuilder, or Regular Expressions."
        ],
        "io": "Output: Processed string output for String Region Match Check",
        "hint": "Use java.lang.String or java.lang.StringBuilder.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 12.2 \u2014 String Region Match Check\n        \n    }\n}"
    },
    {
        "id": "c12-03",
        "chapter": 12,
        "topic": "Strings",
        "difficulty": "easy",
        "title": "Concept 12.3 \u2014 String Start/End Check (startsWith, endsWith)",
        "prompt": [
            "Exercise 12.3: Implement `String Start/End Check (startsWith, endsWith)` using String methods, StringBuilder, or Regular Expressions."
        ],
        "io": "Output: Processed string output for String Start/End Check (startsWith, endsWith)",
        "hint": "Use java.lang.String or java.lang.StringBuilder.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 12.3 \u2014 String Start/End Check (startsWith, endsWith)\n        \n    }\n}"
    },
    {
        "id": "c12-04",
        "chapter": 12,
        "topic": "Strings",
        "difficulty": "easy",
        "title": "Concept 12.4 \u2014 String Search Methods (indexOf, lastIndexOf)",
        "prompt": [
            "Exercise 12.4: Implement `String Search Methods (indexOf, lastIndexOf)` using String methods, StringBuilder, or Regular Expressions."
        ],
        "io": "Output: Processed string output for String Search Methods (indexOf, lastIndexOf)",
        "hint": "Use java.lang.String or java.lang.StringBuilder.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 12.4 \u2014 String Search Methods (indexOf, lastIndexOf)\n        \n    }\n}"
    },
    {
        "id": "c12-05",
        "chapter": 12,
        "topic": "Strings",
        "difficulty": "easy",
        "title": "Concept 12.5 \u2014 Extracting Substrings (substring)",
        "prompt": [
            "Exercise 12.5: Implement `Extracting Substrings (substring)` using String methods, StringBuilder, or Regular Expressions."
        ],
        "io": "Output: Processed string output for Extracting Substrings (substring)",
        "hint": "Use java.lang.String or java.lang.StringBuilder.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 12.5 \u2014 Extracting Substrings (substring)\n        \n    }\n}"
    },
    {
        "id": "c12-06",
        "chapter": 12,
        "topic": "Strings",
        "difficulty": "easy",
        "title": "Concept 12.6 \u2014 Concatenating Strings (concat vs +)",
        "prompt": [
            "Exercise 12.6: Implement `Concatenating Strings (concat vs +)` using String methods, StringBuilder, or Regular Expressions."
        ],
        "io": "Output: Processed string output for Concatenating Strings (concat vs +)",
        "hint": "Use java.lang.String or java.lang.StringBuilder.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 12.6 \u2014 Concatenating Strings (concat vs +)\n        \n    }\n}"
    },
    {
        "id": "c12-07",
        "chapter": 12,
        "topic": "Strings",
        "difficulty": "easy",
        "title": "Concept 12.7 \u2014 Miscellaneous String Methods (toLowerCase, trim)",
        "prompt": [
            "Exercise 12.7: Implement `Miscellaneous String Methods (toLowerCase, trim)` using String methods, StringBuilder, or Regular Expressions."
        ],
        "io": "Output: Processed string output for Miscellaneous String Methods (toLowerCase, trim)",
        "hint": "Use java.lang.String or java.lang.StringBuilder.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 12.7 \u2014 Miscellaneous String Methods (toLowerCase, trim)\n        \n    }\n}"
    },
    {
        "id": "c12-08",
        "chapter": 12,
        "topic": "Strings",
        "difficulty": "easy",
        "title": "Concept 12.8 \u2014 StringBuilder Capacity and Length",
        "prompt": [
            "Exercise 12.8: Implement `StringBuilder Capacity and Length` using String methods, StringBuilder, or Regular Expressions."
        ],
        "io": "Output: Processed string output for StringBuilder Capacity and Length",
        "hint": "Use java.lang.String or java.lang.StringBuilder.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 12.8 \u2014 StringBuilder Capacity and Length\n        \n    }\n}"
    },
    {
        "id": "c12-09",
        "chapter": 12,
        "topic": "Strings",
        "difficulty": "easy",
        "title": "Concept 12.9 \u2014 StringBuilder Append Methods",
        "prompt": [
            "Exercise 12.9: Implement `StringBuilder Append Methods` using String methods, StringBuilder, or Regular Expressions."
        ],
        "io": "Output: Processed string output for StringBuilder Append Methods",
        "hint": "Use java.lang.String or java.lang.StringBuilder.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 12.9 \u2014 StringBuilder Append Methods\n        \n    }\n}"
    },
    {
        "id": "c12-10",
        "chapter": 12,
        "topic": "Strings",
        "difficulty": "easy",
        "title": "Concept 12.10 \u2014 StringBuilder Insert, Delete and Replace",
        "prompt": [
            "Exercise 12.10: Implement `StringBuilder Insert, Delete and Replace` using String methods, StringBuilder, or Regular Expressions."
        ],
        "io": "Output: Processed string output for StringBuilder Insert, Delete and Replace",
        "hint": "Use java.lang.String or java.lang.StringBuilder.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 12.10 \u2014 StringBuilder Insert, Delete and Replace\n        \n    }\n}"
    },
    {
        "id": "c12-11",
        "chapter": 12,
        "topic": "Strings",
        "difficulty": "medium",
        "title": "Concept 12.11 \u2014 Character Class Static Methods (isDigit, isLetter)",
        "prompt": [
            "Exercise 12.11: Implement `Character Class Static Methods (isDigit, isLetter)` using String methods, StringBuilder, or Regular Expressions."
        ],
        "io": "Output: Processed string output for Character Class Static Methods (isDigit, isLetter)",
        "hint": "Use java.lang.String or java.lang.StringBuilder.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 12.11 \u2014 Character Class Static Methods (isDigit, isLetter)\n        \n    }\n}"
    },
    {
        "id": "c12-12",
        "chapter": 12,
        "topic": "Strings",
        "difficulty": "medium",
        "title": "Concept 12.12 \u2014 Tokenizing Strings with String.split",
        "prompt": [
            "Exercise 12.12: Implement `Tokenizing Strings with String.split` using String methods, StringBuilder, or Regular Expressions."
        ],
        "io": "Output: Processed string output for Tokenizing Strings with String.split",
        "hint": "Use java.lang.String or java.lang.StringBuilder.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 12.12 \u2014 Tokenizing Strings with String.split\n        \n    }\n}"
    },
    {
        "id": "c12-13",
        "chapter": 12,
        "topic": "Strings",
        "difficulty": "medium",
        "title": "Concept 12.13 \u2014 Reversing Words in a Sentence",
        "prompt": [
            "Exercise 12.13: Implement `Reversing Words in a Sentence` using String methods, StringBuilder, or Regular Expressions."
        ],
        "io": "Output: Processed string output for Reversing Words in a Sentence",
        "hint": "Use java.lang.String or java.lang.StringBuilder.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 12.13 \u2014 Reversing Words in a Sentence\n        \n    }\n}"
    },
    {
        "id": "c12-14",
        "chapter": 12,
        "topic": "Strings",
        "difficulty": "medium",
        "title": "Concept 12.14 \u2014 Pig Latin Translator",
        "prompt": [
            "Exercise 12.14: Implement `Pig Latin Translator` using String methods, StringBuilder, or Regular Expressions."
        ],
        "io": "Output: Processed string output for Pig Latin Translator",
        "hint": "Use java.lang.String or java.lang.StringBuilder.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 12.14 \u2014 Pig Latin Translator\n        \n    }\n}"
    },
    {
        "id": "c12-15",
        "chapter": 12,
        "topic": "Strings",
        "difficulty": "medium",
        "title": "Concept 12.15 \u2014 Telephone Number Parser",
        "prompt": [
            "Exercise 12.15: Implement `Telephone Number Parser` using String methods, StringBuilder, or Regular Expressions."
        ],
        "io": "Output: Processed string output for Telephone Number Parser",
        "hint": "Use java.lang.String or java.lang.StringBuilder.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 12.15 \u2014 Telephone Number Parser\n        \n    }\n}"
    },
    {
        "id": "c12-16",
        "chapter": 12,
        "topic": "Strings",
        "difficulty": "medium",
        "title": "Concept 12.16 \u2014 Text Analysis (Word & Character Counts)",
        "prompt": [
            "Exercise 12.16: Implement `Text Analysis (Word & Character Counts)` using String methods, StringBuilder, or Regular Expressions."
        ],
        "io": "Output: Processed string output for Text Analysis (Word & Character Counts)",
        "hint": "Use java.lang.String or java.lang.StringBuilder.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 12.16 \u2014 Text Analysis (Word & Character Counts)\n        \n    }\n}"
    },
    {
        "id": "c12-17",
        "chapter": 12,
        "topic": "Strings",
        "difficulty": "medium",
        "title": "Concept 12.17 \u2014 Check for Rhyming Words",
        "prompt": [
            "Exercise 12.17: Implement `Check for Rhyming Words` using String methods, StringBuilder, or Regular Expressions."
        ],
        "io": "Output: Processed string output for Check for Rhyming Words",
        "hint": "Use java.lang.String or java.lang.StringBuilder.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 12.17 \u2014 Check for Rhyming Words\n        \n    }\n}"
    },
    {
        "id": "c12-18",
        "chapter": 12,
        "topic": "Strings",
        "difficulty": "medium",
        "title": "Concept 12.18 \u2014 Alphabetical Sorting of Strings",
        "prompt": [
            "Exercise 12.18: Implement `Alphabetical Sorting of Strings` using String methods, StringBuilder, or Regular Expressions."
        ],
        "io": "Output: Processed string output for Alphabetical Sorting of Strings",
        "hint": "Use java.lang.String or java.lang.StringBuilder.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 12.18 \u2014 Alphabetical Sorting of Strings\n        \n    }\n}"
    },
    {
        "id": "c12-19",
        "chapter": 12,
        "topic": "Strings",
        "difficulty": "medium",
        "title": "Concept 12.19 \u2014 Regular Expression Social Security Number",
        "prompt": [
            "Exercise 12.19: Implement `Regular Expression Social Security Number` using String methods, StringBuilder, or Regular Expressions."
        ],
        "io": "Output: Processed string output for Regular Expression Social Security Number",
        "hint": "Use java.lang.String or java.lang.StringBuilder.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 12.19 \u2014 Regular Expression Social Security Number\n        \n    }\n}"
    },
    {
        "id": "c12-20",
        "chapter": 12,
        "topic": "Strings",
        "difficulty": "medium",
        "title": "Concept 12.20 \u2014 Regular Expression Phone Number Validation",
        "prompt": [
            "Exercise 12.20: Implement `Regular Expression Phone Number Validation` using String methods, StringBuilder, or Regular Expressions."
        ],
        "io": "Output: Processed string output for Regular Expression Phone Number Validation",
        "hint": "Use java.lang.String or java.lang.StringBuilder.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 12.20 \u2014 Regular Expression Phone Number Validation\n        \n    }\n}"
    },
    {
        "id": "c12-21",
        "chapter": 12,
        "topic": "Strings",
        "difficulty": "medium",
        "title": "Concept 12.21 \u2014 Regular Expression Email Address Checker",
        "prompt": [
            "Exercise 12.21: Implement `Regular Expression Email Address Checker` using String methods, StringBuilder, or Regular Expressions."
        ],
        "io": "Output: Processed string output for Regular Expression Email Address Checker",
        "hint": "Use java.lang.String or java.lang.StringBuilder.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 12.21 \u2014 Regular Expression Email Address Checker\n        \n    }\n}"
    },
    {
        "id": "c12-22",
        "chapter": 12,
        "topic": "Strings",
        "difficulty": "medium",
        "title": "Concept 12.22 \u2014 Regular Expression Zip Code Validator",
        "prompt": [
            "Exercise 12.22: Implement `Regular Expression Zip Code Validator` using String methods, StringBuilder, or Regular Expressions."
        ],
        "io": "Output: Processed string output for Regular Expression Zip Code Validator",
        "hint": "Use java.lang.String or java.lang.StringBuilder.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 12.22 \u2014 Regular Expression Zip Code Validator\n        \n    }\n}"
    },
    {
        "id": "c12-23",
        "chapter": 12,
        "topic": "Strings",
        "difficulty": "hard",
        "title": "Concept 12.23 \u2014 Regular Expression Date Format Validator",
        "prompt": [
            "Exercise 12.23: Implement `Regular Expression Date Format Validator` using String methods, StringBuilder, or Regular Expressions."
        ],
        "io": "Output: Processed string output for Regular Expression Date Format Validator",
        "hint": "Use java.lang.String or java.lang.StringBuilder.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 12.23 \u2014 Regular Expression Date Format Validator\n        \n    }\n}"
    },
    {
        "id": "c12-24",
        "chapter": 12,
        "topic": "Strings",
        "difficulty": "hard",
        "title": "Concept 12.24 \u2014 Replacing Substrings with Regex",
        "prompt": [
            "Exercise 12.24: Implement `Replacing Substrings with Regex` using String methods, StringBuilder, or Regular Expressions."
        ],
        "io": "Output: Processed string output for Replacing Substrings with Regex",
        "hint": "Use java.lang.String or java.lang.StringBuilder.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 12.24 \u2014 Replacing Substrings with Regex\n        \n    }\n}"
    },
    {
        "id": "c12-25",
        "chapter": 12,
        "topic": "Strings",
        "difficulty": "hard",
        "title": "Concept 12.25 \u2014 Morse Code Translator",
        "prompt": [
            "Exercise 12.25: Implement `Morse Code Translator` using String methods, StringBuilder, or Regular Expressions."
        ],
        "io": "Output: Processed string output for Morse Code Translator",
        "hint": "Use java.lang.String or java.lang.StringBuilder.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 12.25 \u2014 Morse Code Translator\n        \n    }\n}"
    },
    {
        "id": "c12-26",
        "chapter": 12,
        "topic": "Strings",
        "difficulty": "hard",
        "title": "Concept 12.26 \u2014 Luhn Algorithm Credit Card Check",
        "prompt": [
            "Exercise 12.26: Implement `Luhn Algorithm Credit Card Check` using String methods, StringBuilder, or Regular Expressions."
        ],
        "io": "Output: Processed string output for Luhn Algorithm Credit Card Check",
        "hint": "Use java.lang.String or java.lang.StringBuilder.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 12.26 \u2014 Luhn Algorithm Credit Card Check\n        \n    }\n}"
    },
    {
        "id": "c12-27",
        "chapter": 12,
        "topic": "Strings",
        "difficulty": "hard",
        "title": "Concept 12.27 \u2014 String Palindrome Tester",
        "prompt": [
            "Exercise 12.27: Implement `String Palindrome Tester` using String methods, StringBuilder, or Regular Expressions."
        ],
        "io": "Output: Processed string output for String Palindrome Tester",
        "hint": "Use java.lang.String or java.lang.StringBuilder.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 12.27 \u2014 String Palindrome Tester\n        \n    }\n}"
    },
    {
        "id": "c12-28",
        "chapter": 12,
        "topic": "Strings",
        "difficulty": "hard",
        "title": "Concept 12.28 \u2014 Anagram Checker",
        "prompt": [
            "Exercise 12.28: Implement `Anagram Checker` using String methods, StringBuilder, or Regular Expressions."
        ],
        "io": "Output: Processed string output for Anagram Checker",
        "hint": "Use java.lang.String or java.lang.StringBuilder.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 12.28 \u2014 Anagram Checker\n        \n    }\n}"
    },
    {
        "id": "c12-29",
        "chapter": 12,
        "topic": "Strings",
        "difficulty": "hard",
        "title": "Concept 12.29 \u2014 Vowel and Consonant Counter",
        "prompt": [
            "Exercise 12.29: Implement `Vowel and Consonant Counter` using String methods, StringBuilder, or Regular Expressions."
        ],
        "io": "Output: Processed string output for Vowel and Consonant Counter",
        "hint": "Use java.lang.String or java.lang.StringBuilder.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 12.29 \u2014 Vowel and Consonant Counter\n        \n    }\n}"
    },
    {
        "id": "c12-30",
        "chapter": 12,
        "topic": "Strings",
        "difficulty": "hard",
        "title": "Concept 12.30 \u2014 Compressing Strings (Run-Length Encoding)",
        "prompt": [
            "Exercise 12.30: Implement `Compressing Strings (Run-Length Encoding)` using String methods, StringBuilder, or Regular Expressions."
        ],
        "io": "Output: Processed string output for Compressing Strings (Run-Length Encoding)",
        "hint": "Use java.lang.String or java.lang.StringBuilder.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 12.30 \u2014 Compressing Strings (Run-Length Encoding)\n        \n    }\n}"
    },
    {
        "id": "c13-01",
        "chapter": 13,
        "topic": "Files & I/O",
        "difficulty": "easy",
        "title": "Concept 13.1 \u2014 File & Directory Information Retrieval",
        "prompt": [
            "Exercise 13.1: Implement file or stream processing for `File & Directory Information Retrieval`."
        ],
        "io": "Output: File/Stream operation result for File & Directory Information Retrieval",
        "hint": "Use java.io.File, java.util.Scanner, or java.nio.file.Paths.",
        "starterCode": "import java.io.*;\nimport java.nio.file.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 13.1 \u2014 File & Directory Information Retrieval\n        \n    }\n}"
    },
    {
        "id": "c13-02",
        "chapter": 13,
        "topic": "Files & I/O",
        "difficulty": "easy",
        "title": "Concept 13.2 \u2014 Writing Text to File with Formatter",
        "prompt": [
            "Exercise 13.2: Implement file or stream processing for `Writing Text to File with Formatter`."
        ],
        "io": "Output: File/Stream operation result for Writing Text to File with Formatter",
        "hint": "Use java.io.File, java.util.Scanner, or java.nio.file.Paths.",
        "starterCode": "import java.io.*;\nimport java.nio.file.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 13.2 \u2014 Writing Text to File with Formatter\n        \n    }\n}"
    },
    {
        "id": "c13-03",
        "chapter": 13,
        "topic": "Files & I/O",
        "difficulty": "easy",
        "title": "Concept 13.3 \u2014 Reading Text from File with Scanner",
        "prompt": [
            "Exercise 13.3: Implement file or stream processing for `Reading Text from File with Scanner`."
        ],
        "io": "Output: File/Stream operation result for Reading Text from File with Scanner",
        "hint": "Use java.io.File, java.util.Scanner, or java.nio.file.Paths.",
        "starterCode": "import java.io.*;\nimport java.nio.file.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 13.3 \u2014 Reading Text from File with Scanner\n        \n    }\n}"
    },
    {
        "id": "c13-04",
        "chapter": 13,
        "topic": "Files & I/O",
        "difficulty": "easy",
        "title": "Concept 13.4 \u2014 Credit Inquiry Program (Account Filter)",
        "prompt": [
            "Exercise 13.4: Implement file or stream processing for `Credit Inquiry Program (Account Filter)`."
        ],
        "io": "Output: File/Stream operation result for Credit Inquiry Program (Account Filter)",
        "hint": "Use java.io.File, java.util.Scanner, or java.nio.file.Paths.",
        "starterCode": "import java.io.*;\nimport java.nio.file.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 13.4 \u2014 Credit Inquiry Program (Account Filter)\n        \n    }\n}"
    },
    {
        "id": "c13-05",
        "chapter": 13,
        "topic": "Files & I/O",
        "difficulty": "easy",
        "title": "Concept 13.5 \u2014 Sequential-Access File Creation",
        "prompt": [
            "Exercise 13.5: Implement file or stream processing for `Sequential-Access File Creation`."
        ],
        "io": "Output: File/Stream operation result for Sequential-Access File Creation",
        "hint": "Use java.io.File, java.util.Scanner, or java.nio.file.Paths.",
        "starterCode": "import java.io.*;\nimport java.nio.file.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 13.5 \u2014 Sequential-Access File Creation\n        \n    }\n}"
    },
    {
        "id": "c13-06",
        "chapter": 13,
        "topic": "Files & I/O",
        "difficulty": "easy",
        "title": "Concept 13.6 \u2014 Sequential-Access File Reading",
        "prompt": [
            "Exercise 13.6: Implement file or stream processing for `Sequential-Access File Reading`."
        ],
        "io": "Output: File/Stream operation result for Sequential-Access File Reading",
        "hint": "Use java.io.File, java.util.Scanner, or java.nio.file.Paths.",
        "starterCode": "import java.io.*;\nimport java.nio.file.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 13.6 \u2014 Sequential-Access File Reading\n        \n    }\n}"
    },
    {
        "id": "c13-07",
        "chapter": 13,
        "topic": "Files & I/O",
        "difficulty": "easy",
        "title": "Concept 13.7 \u2014 Updating Sequential Master File",
        "prompt": [
            "Exercise 13.7: Implement file or stream processing for `Updating Sequential Master File`."
        ],
        "io": "Output: File/Stream operation result for Updating Sequential Master File",
        "hint": "Use java.io.File, java.util.Scanner, or java.nio.file.Paths.",
        "starterCode": "import java.io.*;\nimport java.nio.file.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 13.7 \u2014 Updating Sequential Master File\n        \n    }\n}"
    },
    {
        "id": "c13-08",
        "chapter": 13,
        "topic": "Files & I/O",
        "difficulty": "easy",
        "title": "Concept 13.8 \u2014 Transaction Record Processor",
        "prompt": [
            "Exercise 13.8: Implement file or stream processing for `Transaction Record Processor`."
        ],
        "io": "Output: File/Stream operation result for Transaction Record Processor",
        "hint": "Use java.io.File, java.util.Scanner, or java.nio.file.Paths.",
        "starterCode": "import java.io.*;\nimport java.nio.file.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 13.8 \u2014 Transaction Record Processor\n        \n    }\n}"
    },
    {
        "id": "c13-09",
        "chapter": 13,
        "topic": "Files & I/O",
        "difficulty": "easy",
        "title": "Concept 13.9 \u2014 File Matching Program (Master & Transaction)",
        "prompt": [
            "Exercise 13.9: Implement file or stream processing for `File Matching Program (Master & Transaction)`."
        ],
        "io": "Output: File/Stream operation result for File Matching Program (Master & Transaction)",
        "hint": "Use java.io.File, java.util.Scanner, or java.nio.file.Paths.",
        "starterCode": "import java.io.*;\nimport java.nio.file.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 13.9 \u2014 File Matching Program (Master & Transaction)\n        \n    }\n}"
    },
    {
        "id": "c13-10",
        "chapter": 13,
        "topic": "Files & I/O",
        "difficulty": "easy",
        "title": "Concept 13.10 \u2014 Object Serialization to File",
        "prompt": [
            "Exercise 13.10: Implement file or stream processing for `Object Serialization to File`."
        ],
        "io": "Output: File/Stream operation result for Object Serialization to File",
        "hint": "Use java.io.File, java.util.Scanner, or java.nio.file.Paths.",
        "starterCode": "import java.io.*;\nimport java.nio.file.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 13.10 \u2014 Object Serialization to File\n        \n    }\n}"
    },
    {
        "id": "c13-11",
        "chapter": 13,
        "topic": "Files & I/O",
        "difficulty": "medium",
        "title": "Concept 13.11 \u2014 Deserializing Objects from File",
        "prompt": [
            "Exercise 13.11: Implement file or stream processing for `Deserializing Objects from File`."
        ],
        "io": "Output: File/Stream operation result for Deserializing Objects from File",
        "hint": "Use java.io.File, java.util.Scanner, or java.nio.file.Paths.",
        "starterCode": "import java.io.*;\nimport java.nio.file.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 13.11 \u2014 Deserializing Objects from File\n        \n    }\n}"
    },
    {
        "id": "c13-12",
        "chapter": 13,
        "topic": "Files & I/O",
        "difficulty": "medium",
        "title": "Concept 13.12 \u2014 JFileChooser Dialog Demonstration",
        "prompt": [
            "Exercise 13.12: Implement file or stream processing for `JFileChooser Dialog Demonstration`."
        ],
        "io": "Output: File/Stream operation result for JFileChooser Dialog Demonstration",
        "hint": "Use java.io.File, java.util.Scanner, or java.nio.file.Paths.",
        "starterCode": "import java.io.*;\nimport java.nio.file.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 13.12 \u2014 JFileChooser Dialog Demonstration\n        \n    }\n}"
    },
    {
        "id": "c13-13",
        "chapter": 13,
        "topic": "Files & I/O",
        "difficulty": "medium",
        "title": "Concept 13.13 \u2014 Counting Characters, Words and Lines in File",
        "prompt": [
            "Exercise 13.13: Implement file or stream processing for `Counting Characters, Words and Lines in File`."
        ],
        "io": "Output: File/Stream operation result for Counting Characters, Words and Lines in File",
        "hint": "Use java.io.File, java.util.Scanner, or java.nio.file.Paths.",
        "starterCode": "import java.io.*;\nimport java.nio.file.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 13.13 \u2014 Counting Characters, Words and Lines in File\n        \n    }\n}"
    },
    {
        "id": "c13-14",
        "chapter": 13,
        "topic": "Files & I/O",
        "difficulty": "medium",
        "title": "Concept 13.14 \u2014 Phishing Scanner Keyword Search",
        "prompt": [
            "Exercise 13.14: Implement file or stream processing for `Phishing Scanner Keyword Search`."
        ],
        "io": "Output: File/Stream operation result for Phishing Scanner Keyword Search",
        "hint": "Use java.io.File, java.util.Scanner, or java.nio.file.Paths.",
        "starterCode": "import java.io.*;\nimport java.nio.file.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 13.14 \u2014 Phishing Scanner Keyword Search\n        \n    }\n}"
    },
    {
        "id": "c13-15",
        "chapter": 13,
        "topic": "Files & I/O",
        "difficulty": "medium",
        "title": "Concept 13.15 \u2014 Word Frequency Counter in File",
        "prompt": [
            "Exercise 13.15: Implement file or stream processing for `Word Frequency Counter in File`."
        ],
        "io": "Output: File/Stream operation result for Word Frequency Counter in File",
        "hint": "Use java.io.File, java.util.Scanner, or java.nio.file.Paths.",
        "starterCode": "import java.io.*;\nimport java.nio.file.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 13.15 \u2014 Word Frequency Counter in File\n        \n    }\n}"
    },
    {
        "id": "c13-16",
        "chapter": 13,
        "topic": "Files & I/O",
        "difficulty": "medium",
        "title": "Concept 13.16 \u2014 Merging Two Text Files",
        "prompt": [
            "Exercise 13.16: Implement file or stream processing for `Merging Two Text Files`."
        ],
        "io": "Output: File/Stream operation result for Merging Two Text Files",
        "hint": "Use java.io.File, java.util.Scanner, or java.nio.file.Paths.",
        "starterCode": "import java.io.*;\nimport java.nio.file.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 13.16 \u2014 Merging Two Text Files\n        \n    }\n}"
    },
    {
        "id": "c13-17",
        "chapter": 13,
        "topic": "Files & I/O",
        "difficulty": "medium",
        "title": "Concept 13.17 \u2014 Splitting Large File into Chunks",
        "prompt": [
            "Exercise 13.17: Implement file or stream processing for `Splitting Large File into Chunks`."
        ],
        "io": "Output: File/Stream operation result for Splitting Large File into Chunks",
        "hint": "Use java.io.File, java.util.Scanner, or java.nio.file.Paths.",
        "starterCode": "import java.io.*;\nimport java.nio.file.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 13.17 \u2014 Splitting Large File into Chunks\n        \n    }\n}"
    },
    {
        "id": "c13-18",
        "chapter": 13,
        "topic": "Files & I/O",
        "difficulty": "medium",
        "title": "Concept 13.18 \u2014 File Encryption & Decryption",
        "prompt": [
            "Exercise 13.18: Implement file or stream processing for `File Encryption & Decryption`."
        ],
        "io": "Output: File/Stream operation result for File Encryption & Decryption",
        "hint": "Use java.io.File, java.util.Scanner, or java.nio.file.Paths.",
        "starterCode": "import java.io.*;\nimport java.nio.file.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 13.18 \u2014 File Encryption & Decryption\n        \n    }\n}"
    },
    {
        "id": "c13-19",
        "chapter": 13,
        "topic": "Files & I/O",
        "difficulty": "medium",
        "title": "Concept 13.19 \u2014 Directory Tree Traversal (NIO Path)",
        "prompt": [
            "Exercise 13.19: Implement file or stream processing for `Directory Tree Traversal (NIO Path)`."
        ],
        "io": "Output: File/Stream operation result for Directory Tree Traversal (NIO Path)",
        "hint": "Use java.io.File, java.util.Scanner, or java.nio.file.Paths.",
        "starterCode": "import java.io.*;\nimport java.nio.file.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 13.19 \u2014 Directory Tree Traversal (NIO Path)\n        \n    }\n}"
    },
    {
        "id": "c13-20",
        "chapter": 13,
        "topic": "Files & I/O",
        "difficulty": "medium",
        "title": "Concept 13.20 \u2014 Files Class Operations (copy, move, delete)",
        "prompt": [
            "Exercise 13.20: Implement file or stream processing for `Files Class Operations (copy, move, delete)`."
        ],
        "io": "Output: File/Stream operation result for Files Class Operations (copy, move, delete)",
        "hint": "Use java.io.File, java.util.Scanner, or java.nio.file.Paths.",
        "starterCode": "import java.io.*;\nimport java.nio.file.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 13.20 \u2014 Files Class Operations (copy, move, delete)\n        \n    }\n}"
    },
    {
        "id": "c13-21",
        "chapter": 13,
        "topic": "Files & I/O",
        "difficulty": "medium",
        "title": "Concept 13.21 \u2014 Reading File Lines into List",
        "prompt": [
            "Exercise 13.21: Implement file or stream processing for `Reading File Lines into List`."
        ],
        "io": "Output: File/Stream operation result for Reading File Lines into List",
        "hint": "Use java.io.File, java.util.Scanner, or java.nio.file.Paths.",
        "starterCode": "import java.io.*;\nimport java.nio.file.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 13.21 \u2014 Reading File Lines into List\n        \n    }\n}"
    },
    {
        "id": "c13-22",
        "chapter": 13,
        "topic": "Files & I/O",
        "difficulty": "medium",
        "title": "Concept 13.22 \u2014 Writing Byte Array to Binary File",
        "prompt": [
            "Exercise 13.22: Implement file or stream processing for `Writing Byte Array to Binary File`."
        ],
        "io": "Output: File/Stream operation result for Writing Byte Array to Binary File",
        "hint": "Use java.io.File, java.util.Scanner, or java.nio.file.Paths.",
        "starterCode": "import java.io.*;\nimport java.nio.file.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 13.22 \u2014 Writing Byte Array to Binary File\n        \n    }\n}"
    },
    {
        "id": "c13-23",
        "chapter": 13,
        "topic": "Files & I/O",
        "difficulty": "hard",
        "title": "Concept 13.23 \u2014 Reading Binary File Data",
        "prompt": [
            "Exercise 13.23: Implement file or stream processing for `Reading Binary File Data`."
        ],
        "io": "Output: File/Stream operation result for Reading Binary File Data",
        "hint": "Use java.io.File, java.util.Scanner, or java.nio.file.Paths.",
        "starterCode": "import java.io.*;\nimport java.nio.file.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 13.23 \u2014 Reading Binary File Data\n        \n    }\n}"
    },
    {
        "id": "c13-24",
        "chapter": 13,
        "topic": "Files & I/O",
        "difficulty": "hard",
        "title": "Concept 13.24 \u2014 CSV File Parser & Exporter",
        "prompt": [
            "Exercise 13.24: Implement file or stream processing for `CSV File Parser & Exporter`."
        ],
        "io": "Output: File/Stream operation result for CSV File Parser & Exporter",
        "hint": "Use java.io.File, java.util.Scanner, or java.nio.file.Paths.",
        "starterCode": "import java.io.*;\nimport java.nio.file.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 13.24 \u2014 CSV File Parser & Exporter\n        \n    }\n}"
    },
    {
        "id": "c13-25",
        "chapter": 13,
        "topic": "Files & I/O",
        "difficulty": "hard",
        "title": "Concept 13.25 \u2014 JSON Data Formatting to File",
        "prompt": [
            "Exercise 13.25: Implement file or stream processing for `JSON Data Formatting to File`."
        ],
        "io": "Output: File/Stream operation result for JSON Data Formatting to File",
        "hint": "Use java.io.File, java.util.Scanner, or java.nio.file.Paths.",
        "starterCode": "import java.io.*;\nimport java.nio.file.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 13.25 \u2014 JSON Data Formatting to File\n        \n    }\n}"
    },
    {
        "id": "c13-26",
        "chapter": 13,
        "topic": "Files & I/O",
        "difficulty": "hard",
        "title": "Concept 13.26 \u2014 Log File Appender",
        "prompt": [
            "Exercise 13.26: Implement file or stream processing for `Log File Appender`."
        ],
        "io": "Output: File/Stream operation result for Log File Appender",
        "hint": "Use java.io.File, java.util.Scanner, or java.nio.file.Paths.",
        "starterCode": "import java.io.*;\nimport java.nio.file.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 13.26 \u2014 Log File Appender\n        \n    }\n}"
    },
    {
        "id": "c13-27",
        "chapter": 13,
        "topic": "Files & I/O",
        "difficulty": "hard",
        "title": "Concept 13.27 \u2014 Backup Copy Generator",
        "prompt": [
            "Exercise 13.27: Implement file or stream processing for `Backup Copy Generator`."
        ],
        "io": "Output: File/Stream operation result for Backup Copy Generator",
        "hint": "Use java.io.File, java.util.Scanner, or java.nio.file.Paths.",
        "starterCode": "import java.io.*;\nimport java.nio.file.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 13.27 \u2014 Backup Copy Generator\n        \n    }\n}"
    },
    {
        "id": "c13-28",
        "chapter": 13,
        "topic": "Files & I/O",
        "difficulty": "hard",
        "title": "Concept 13.28 \u2014 File Checksum SHA-256 Calculator",
        "prompt": [
            "Exercise 13.28: Implement file or stream processing for `File Checksum SHA-256 Calculator`."
        ],
        "io": "Output: File/Stream operation result for File Checksum SHA-256 Calculator",
        "hint": "Use java.io.File, java.util.Scanner, or java.nio.file.Paths.",
        "starterCode": "import java.io.*;\nimport java.nio.file.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 13.28 \u2014 File Checksum SHA-256 Calculator\n        \n    }\n}"
    },
    {
        "id": "c13-29",
        "chapter": 13,
        "topic": "Files & I/O",
        "difficulty": "hard",
        "title": "Concept 13.29 \u2014 File Compression Zip Archive",
        "prompt": [
            "Exercise 13.29: Implement file or stream processing for `File Compression Zip Archive`."
        ],
        "io": "Output: File/Stream operation result for File Compression Zip Archive",
        "hint": "Use java.io.File, java.util.Scanner, or java.nio.file.Paths.",
        "starterCode": "import java.io.*;\nimport java.nio.file.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 13.29 \u2014 File Compression Zip Archive\n        \n    }\n}"
    },
    {
        "id": "c13-30",
        "chapter": 13,
        "topic": "Files & I/O",
        "difficulty": "hard",
        "title": "Concept 13.30 \u2014 Temporary File Manager",
        "prompt": [
            "Exercise 13.30: Implement file or stream processing for `Temporary File Manager`."
        ],
        "io": "Output: File/Stream operation result for Temporary File Manager",
        "hint": "Use java.io.File, java.util.Scanner, or java.nio.file.Paths.",
        "starterCode": "import java.io.*;\nimport java.nio.file.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 13.30 \u2014 Temporary File Manager\n        \n    }\n}"
    },
    {
        "id": "c14-01",
        "chapter": 14,
        "topic": "Recursion",
        "difficulty": "easy",
        "title": "Concept 14.1 \u2014 Recursive Factorial Method",
        "prompt": [
            "Exercise 14.1: Implement a recursive algorithm to solve `Recursive Factorial Method`."
        ],
        "io": "Output: Recursive result for Recursive Factorial Method",
        "hint": "Define base case and recursive call step.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 14.1 \u2014 Recursive Factorial Method\n        \n    }\n}"
    },
    {
        "id": "c14-02",
        "chapter": 14,
        "topic": "Recursion",
        "difficulty": "easy",
        "title": "Concept 14.2 \u2014 Recursive Fibonacci Method",
        "prompt": [
            "Exercise 14.2: Implement a recursive algorithm to solve `Recursive Fibonacci Method`."
        ],
        "io": "Output: Recursive result for Recursive Fibonacci Method",
        "hint": "Define base case and recursive call step.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 14.2 \u2014 Recursive Fibonacci Method\n        \n    }\n}"
    },
    {
        "id": "c14-03",
        "chapter": 14,
        "topic": "Recursion",
        "difficulty": "easy",
        "title": "Concept 14.3 \u2014 Recursive Greatest Common Divisor (GCD)",
        "prompt": [
            "Exercise 14.3: Implement a recursive algorithm to solve `Recursive Greatest Common Divisor (GCD)`."
        ],
        "io": "Output: Recursive result for Recursive Greatest Common Divisor (GCD)",
        "hint": "Define base case and recursive call step.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 14.3 \u2014 Recursive Greatest Common Divisor (GCD)\n        \n    }\n}"
    },
    {
        "id": "c14-04",
        "chapter": 14,
        "topic": "Recursion",
        "difficulty": "easy",
        "title": "Concept 14.4 \u2014 Recursive Power Method (base^exponent)",
        "prompt": [
            "Exercise 14.4: Implement a recursive algorithm to solve `Recursive Power Method (base^exponent)`."
        ],
        "io": "Output: Recursive result for Recursive Power Method (base^exponent)",
        "hint": "Define base case and recursive call step.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 14.4 \u2014 Recursive Power Method (base^exponent)\n        \n    }\n}"
    },
    {
        "id": "c14-05",
        "chapter": 14,
        "topic": "Recursion",
        "difficulty": "easy",
        "title": "Concept 14.5 \u2014 Recursive Visualizing Factorial Call Stack",
        "prompt": [
            "Exercise 14.5: Implement a recursive algorithm to solve `Recursive Visualizing Factorial Call Stack`."
        ],
        "io": "Output: Recursive result for Recursive Visualizing Factorial Call Stack",
        "hint": "Define base case and recursive call step.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 14.5 \u2014 Recursive Visualizing Factorial Call Stack\n        \n    }\n}"
    },
    {
        "id": "c14-06",
        "chapter": 14,
        "topic": "Recursion",
        "difficulty": "easy",
        "title": "Concept 14.6 \u2014 Towers of Hanoi Recursive Solver",
        "prompt": [
            "Exercise 14.6: Implement a recursive algorithm to solve `Towers of Hanoi Recursive Solver`."
        ],
        "io": "Output: Recursive result for Towers of Hanoi Recursive Solver",
        "hint": "Define base case and recursive call step.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 14.6 \u2014 Towers of Hanoi Recursive Solver\n        \n    }\n}"
    },
    {
        "id": "c14-07",
        "chapter": 14,
        "topic": "Recursion",
        "difficulty": "easy",
        "title": "Concept 14.7 \u2014 Recursive Printing Array Elements",
        "prompt": [
            "Exercise 14.7: Implement a recursive algorithm to solve `Recursive Printing Array Elements`."
        ],
        "io": "Output: Recursive result for Recursive Printing Array Elements",
        "hint": "Define base case and recursive call step.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 14.7 \u2014 Recursive Printing Array Elements\n        \n    }\n}"
    },
    {
        "id": "c14-08",
        "chapter": 14,
        "topic": "Recursion",
        "difficulty": "easy",
        "title": "Concept 14.8 \u2014 Recursive Printing Array Backwards",
        "prompt": [
            "Exercise 14.8: Implement a recursive algorithm to solve `Recursive Printing Array Backwards`."
        ],
        "io": "Output: Recursive result for Recursive Printing Array Backwards",
        "hint": "Define base case and recursive call step.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 14.8 \u2014 Recursive Printing Array Backwards\n        \n    }\n}"
    },
    {
        "id": "c14-09",
        "chapter": 14,
        "topic": "Recursion",
        "difficulty": "easy",
        "title": "Concept 14.9 \u2014 Recursive Finding Minimum Element in Array",
        "prompt": [
            "Exercise 14.9: Implement a recursive algorithm to solve `Recursive Finding Minimum Element in Array`."
        ],
        "io": "Output: Recursive result for Recursive Finding Minimum Element in Array",
        "hint": "Define base case and recursive call step.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 14.9 \u2014 Recursive Finding Minimum Element in Array\n        \n    }\n}"
    },
    {
        "id": "c14-10",
        "chapter": 14,
        "topic": "Recursion",
        "difficulty": "easy",
        "title": "Concept 14.10 \u2014 Recursive String Reversal",
        "prompt": [
            "Exercise 14.10: Implement a recursive algorithm to solve `Recursive String Reversal`."
        ],
        "io": "Output: Recursive result for Recursive String Reversal",
        "hint": "Define base case and recursive call step.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 14.10 \u2014 Recursive String Reversal\n        \n    }\n}"
    },
    {
        "id": "c14-11",
        "chapter": 14,
        "topic": "Recursion",
        "difficulty": "medium",
        "title": "Concept 14.11 \u2014 Recursive Palindrome Checker",
        "prompt": [
            "Exercise 14.11: Implement a recursive algorithm to solve `Recursive Palindrome Checker`."
        ],
        "io": "Output: Recursive result for Recursive Palindrome Checker",
        "hint": "Define base case and recursive call step.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 14.11 \u2014 Recursive Palindrome Checker\n        \n    }\n}"
    },
    {
        "id": "c14-12",
        "chapter": 14,
        "topic": "Recursion",
        "difficulty": "medium",
        "title": "Concept 14.12 \u2014 Recursive Linear Search",
        "prompt": [
            "Exercise 14.12: Implement a recursive algorithm to solve `Recursive Linear Search`."
        ],
        "io": "Output: Recursive result for Recursive Linear Search",
        "hint": "Define base case and recursive call step.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 14.12 \u2014 Recursive Linear Search\n        \n    }\n}"
    },
    {
        "id": "c14-13",
        "chapter": 14,
        "topic": "Recursion",
        "difficulty": "medium",
        "title": "Concept 14.13 \u2014 Recursive Binary Search",
        "prompt": [
            "Exercise 14.13: Implement a recursive algorithm to solve `Recursive Binary Search`."
        ],
        "io": "Output: Recursive result for Recursive Binary Search",
        "hint": "Define base case and recursive call step.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 14.13 \u2014 Recursive Binary Search\n        \n    }\n}"
    },
    {
        "id": "c14-14",
        "chapter": 14,
        "topic": "Recursion",
        "difficulty": "medium",
        "title": "Concept 14.14 \u2014 Eight Queens Recursive Backtracking",
        "prompt": [
            "Exercise 14.14: Implement a recursive algorithm to solve `Eight Queens Recursive Backtracking`."
        ],
        "io": "Output: Recursive result for Eight Queens Recursive Backtracking",
        "hint": "Define base case and recursive call step.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 14.14 \u2014 Eight Queens Recursive Backtracking\n        \n    }\n}"
    },
    {
        "id": "c14-15",
        "chapter": 14,
        "topic": "Recursion",
        "difficulty": "medium",
        "title": "Concept 14.15 \u2014 Maze Traversal Recursive Backtracking",
        "prompt": [
            "Exercise 14.15: Implement a recursive algorithm to solve `Maze Traversal Recursive Backtracking`."
        ],
        "io": "Output: Recursive result for Maze Traversal Recursive Backtracking",
        "hint": "Define base case and recursive call step.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 14.15 \u2014 Maze Traversal Recursive Backtracking\n        \n    }\n}"
    },
    {
        "id": "c14-16",
        "chapter": 14,
        "topic": "Recursion",
        "difficulty": "medium",
        "title": "Concept 14.16 \u2014 Koch Snowflake Fractal Calculation",
        "prompt": [
            "Exercise 14.16: Implement a recursive algorithm to solve `Koch Snowflake Fractal Calculation`."
        ],
        "io": "Output: Recursive result for Koch Snowflake Fractal Calculation",
        "hint": "Define base case and recursive call step.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 14.16 \u2014 Koch Snowflake Fractal Calculation\n        \n    }\n}"
    },
    {
        "id": "c14-17",
        "chapter": 14,
        "topic": "Recursion",
        "difficulty": "medium",
        "title": "Concept 14.17 \u2014 Sierpinski Triangle Fractal",
        "prompt": [
            "Exercise 14.17: Implement a recursive algorithm to solve `Sierpinski Triangle Fractal`."
        ],
        "io": "Output: Recursive result for Sierpinski Triangle Fractal",
        "hint": "Define base case and recursive call step.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 14.17 \u2014 Sierpinski Triangle Fractal\n        \n    }\n}"
    },
    {
        "id": "c14-18",
        "chapter": 14,
        "topic": "Recursion",
        "difficulty": "medium",
        "title": "Concept 14.18 \u2014 Recursive Sum of Integers (1 to N)",
        "prompt": [
            "Exercise 14.18: Implement a recursive algorithm to solve `Recursive Sum of Integers (1 to N)`."
        ],
        "io": "Output: Recursive result for Recursive Sum of Integers (1 to N)",
        "hint": "Define base case and recursive call step.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 14.18 \u2014 Recursive Sum of Integers (1 to N)\n        \n    }\n}"
    },
    {
        "id": "c14-19",
        "chapter": 14,
        "topic": "Recursion",
        "difficulty": "medium",
        "title": "Concept 14.19 \u2014 Recursive Multiplication via Addition",
        "prompt": [
            "Exercise 14.19: Implement a recursive algorithm to solve `Recursive Multiplication via Addition`."
        ],
        "io": "Output: Recursive result for Recursive Multiplication via Addition",
        "hint": "Define base case and recursive call step.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 14.19 \u2014 Recursive Multiplication via Addition\n        \n    }\n}"
    },
    {
        "id": "c14-20",
        "chapter": 14,
        "topic": "Recursion",
        "difficulty": "medium",
        "title": "Concept 14.20 \u2014 Recursive Count Down Timer",
        "prompt": [
            "Exercise 14.20: Implement a recursive algorithm to solve `Recursive Count Down Timer`."
        ],
        "io": "Output: Recursive result for Recursive Count Down Timer",
        "hint": "Define base case and recursive call step.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 14.20 \u2014 Recursive Count Down Timer\n        \n    }\n}"
    },
    {
        "id": "c14-21",
        "chapter": 14,
        "topic": "Recursion",
        "difficulty": "medium",
        "title": "Concept 14.21 \u2014 Recursive Sum of Array Digits",
        "prompt": [
            "Exercise 14.21: Implement a recursive algorithm to solve `Recursive Sum of Array Digits`."
        ],
        "io": "Output: Recursive result for Recursive Sum of Array Digits",
        "hint": "Define base case and recursive call step.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 14.21 \u2014 Recursive Sum of Array Digits\n        \n    }\n}"
    },
    {
        "id": "c14-22",
        "chapter": 14,
        "topic": "Recursion",
        "difficulty": "medium",
        "title": "Concept 14.22 \u2014 Recursive Decimal to Binary Converter",
        "prompt": [
            "Exercise 14.22: Implement a recursive algorithm to solve `Recursive Decimal to Binary Converter`."
        ],
        "io": "Output: Recursive result for Recursive Decimal to Binary Converter",
        "hint": "Define base case and recursive call step.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 14.22 \u2014 Recursive Decimal to Binary Converter\n        \n    }\n}"
    },
    {
        "id": "c14-23",
        "chapter": 14,
        "topic": "Recursion",
        "difficulty": "hard",
        "title": "Concept 14.23 \u2014 Recursive Binary to Decimal Converter",
        "prompt": [
            "Exercise 14.23: Implement a recursive algorithm to solve `Recursive Binary to Decimal Converter`."
        ],
        "io": "Output: Recursive result for Recursive Binary to Decimal Converter",
        "hint": "Define base case and recursive call step.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 14.23 \u2014 Recursive Binary to Decimal Converter\n        \n    }\n}"
    },
    {
        "id": "c14-24",
        "chapter": 14,
        "topic": "Recursion",
        "difficulty": "hard",
        "title": "Concept 14.24 \u2014 Recursive Permutations Generator",
        "prompt": [
            "Exercise 14.24: Implement a recursive algorithm to solve `Recursive Permutations Generator`."
        ],
        "io": "Output: Recursive result for Recursive Permutations Generator",
        "hint": "Define base case and recursive call step.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 14.24 \u2014 Recursive Permutations Generator\n        \n    }\n}"
    },
    {
        "id": "c14-25",
        "chapter": 14,
        "topic": "Recursion",
        "difficulty": "hard",
        "title": "Concept 14.25 \u2014 Recursive Combinations Generator",
        "prompt": [
            "Exercise 14.25: Implement a recursive algorithm to solve `Recursive Combinations Generator`."
        ],
        "io": "Output: Recursive result for Recursive Combinations Generator",
        "hint": "Define base case and recursive call step.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 14.25 \u2014 Recursive Combinations Generator\n        \n    }\n}"
    },
    {
        "id": "c14-26",
        "chapter": 14,
        "topic": "Recursion",
        "difficulty": "hard",
        "title": "Concept 14.26 \u2014 Recursive Linked List Length Count",
        "prompt": [
            "Exercise 14.26: Implement a recursive algorithm to solve `Recursive Linked List Length Count`."
        ],
        "io": "Output: Recursive result for Recursive Linked List Length Count",
        "hint": "Define base case and recursive call step.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 14.26 \u2014 Recursive Linked List Length Count\n        \n    }\n}"
    },
    {
        "id": "c14-27",
        "chapter": 14,
        "topic": "Recursion",
        "difficulty": "hard",
        "title": "Concept 14.27 \u2014 Recursive Linked List Reverse Print",
        "prompt": [
            "Exercise 14.27: Implement a recursive algorithm to solve `Recursive Linked List Reverse Print`."
        ],
        "io": "Output: Recursive result for Recursive Linked List Reverse Print",
        "hint": "Define base case and recursive call step.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 14.27 \u2014 Recursive Linked List Reverse Print\n        \n    }\n}"
    },
    {
        "id": "c14-28",
        "chapter": 14,
        "topic": "Recursion",
        "difficulty": "hard",
        "title": "Concept 14.28 \u2014 Recursive Tree Traversal (Inorder)",
        "prompt": [
            "Exercise 14.28: Implement a recursive algorithm to solve `Recursive Tree Traversal (Inorder)`."
        ],
        "io": "Output: Recursive result for Recursive Tree Traversal (Inorder)",
        "hint": "Define base case and recursive call step.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 14.28 \u2014 Recursive Tree Traversal (Inorder)\n        \n    }\n}"
    },
    {
        "id": "c14-29",
        "chapter": 14,
        "topic": "Recursion",
        "difficulty": "hard",
        "title": "Concept 14.29 \u2014 Recursive Tree Traversal (Preorder)",
        "prompt": [
            "Exercise 14.29: Implement a recursive algorithm to solve `Recursive Tree Traversal (Preorder)`."
        ],
        "io": "Output: Recursive result for Recursive Tree Traversal (Preorder)",
        "hint": "Define base case and recursive call step.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 14.29 \u2014 Recursive Tree Traversal (Preorder)\n        \n    }\n}"
    },
    {
        "id": "c14-30",
        "chapter": 14,
        "topic": "Recursion",
        "difficulty": "hard",
        "title": "Concept 14.30 \u2014 Recursive Tree Traversal (Postorder)",
        "prompt": [
            "Exercise 14.30: Implement a recursive algorithm to solve `Recursive Tree Traversal (Postorder)`."
        ],
        "io": "Output: Recursive result for Recursive Tree Traversal (Postorder)",
        "hint": "Define base case and recursive call step.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 14.30 \u2014 Recursive Tree Traversal (Postorder)\n        \n    }\n}"
    },
    {
        "id": "c15-01",
        "chapter": 15,
        "topic": "Searching & Sorting",
        "difficulty": "easy",
        "title": "Concept 15.1 \u2014 Linear Search Implementation",
        "prompt": [
            "Exercise 15.1: Implement `Linear Search Implementation` and analyze algorithm efficiency."
        ],
        "io": "Output: Sorted/Searched result for Linear Search Implementation",
        "hint": "Implement search or sort algorithm and measure execution steps.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 15.1 \u2014 Linear Search Implementation\n        \n    }\n}"
    },
    {
        "id": "c15-02",
        "chapter": 15,
        "topic": "Searching & Sorting",
        "difficulty": "easy",
        "title": "Concept 15.2 \u2014 Binary Search Implementation",
        "prompt": [
            "Exercise 15.2: Implement `Binary Search Implementation` and analyze algorithm efficiency."
        ],
        "io": "Output: Sorted/Searched result for Binary Search Implementation",
        "hint": "Implement search or sort algorithm and measure execution steps.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 15.2 \u2014 Binary Search Implementation\n        \n    }\n}"
    },
    {
        "id": "c15-03",
        "chapter": 15,
        "topic": "Searching & Sorting",
        "difficulty": "easy",
        "title": "Concept 15.3 \u2014 Selection Sort Implementation",
        "prompt": [
            "Exercise 15.3: Implement `Selection Sort Implementation` and analyze algorithm efficiency."
        ],
        "io": "Output: Sorted/Searched result for Selection Sort Implementation",
        "hint": "Implement search or sort algorithm and measure execution steps.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 15.3 \u2014 Selection Sort Implementation\n        \n    }\n}"
    },
    {
        "id": "c15-04",
        "chapter": 15,
        "topic": "Searching & Sorting",
        "difficulty": "easy",
        "title": "Concept 15.4 \u2014 Insertion Sort Implementation",
        "prompt": [
            "Exercise 15.4: Implement `Insertion Sort Implementation` and analyze algorithm efficiency."
        ],
        "io": "Output: Sorted/Searched result for Insertion Sort Implementation",
        "hint": "Implement search or sort algorithm and measure execution steps.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 15.4 \u2014 Insertion Sort Implementation\n        \n    }\n}"
    },
    {
        "id": "c15-05",
        "chapter": 15,
        "topic": "Searching & Sorting",
        "difficulty": "easy",
        "title": "Concept 15.5 \u2014 Bubble Sort Implementation",
        "prompt": [
            "Exercise 15.5: Implement `Bubble Sort Implementation` and analyze algorithm efficiency."
        ],
        "io": "Output: Sorted/Searched result for Bubble Sort Implementation",
        "hint": "Implement search or sort algorithm and measure execution steps.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 15.5 \u2014 Bubble Sort Implementation\n        \n    }\n}"
    },
    {
        "id": "c15-06",
        "chapter": 15,
        "topic": "Searching & Sorting",
        "difficulty": "easy",
        "title": "Concept 15.6 \u2014 Enhanced Bubble Sort (Early Exit)",
        "prompt": [
            "Exercise 15.6: Implement `Enhanced Bubble Sort (Early Exit)` and analyze algorithm efficiency."
        ],
        "io": "Output: Sorted/Searched result for Enhanced Bubble Sort (Early Exit)",
        "hint": "Implement search or sort algorithm and measure execution steps.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 15.6 \u2014 Enhanced Bubble Sort (Early Exit)\n        \n    }\n}"
    },
    {
        "id": "c15-07",
        "chapter": 15,
        "topic": "Searching & Sorting",
        "difficulty": "easy",
        "title": "Concept 15.7 \u2014 Bucket Sort Implementation",
        "prompt": [
            "Exercise 15.7: Implement `Bucket Sort Implementation` and analyze algorithm efficiency."
        ],
        "io": "Output: Sorted/Searched result for Bucket Sort Implementation",
        "hint": "Implement search or sort algorithm and measure execution steps.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 15.7 \u2014 Bucket Sort Implementation\n        \n    }\n}"
    },
    {
        "id": "c15-08",
        "chapter": 15,
        "topic": "Searching & Sorting",
        "difficulty": "easy",
        "title": "Concept 15.8 \u2014 Quicksort Implementation",
        "prompt": [
            "Exercise 15.8: Implement `Quicksort Implementation` and analyze algorithm efficiency."
        ],
        "io": "Output: Sorted/Searched result for Quicksort Implementation",
        "hint": "Implement search or sort algorithm and measure execution steps.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 15.8 \u2014 Quicksort Implementation\n        \n    }\n}"
    },
    {
        "id": "c15-09",
        "chapter": 15,
        "topic": "Searching & Sorting",
        "difficulty": "easy",
        "title": "Concept 15.9 \u2014 Merge Sort Implementation",
        "prompt": [
            "Exercise 15.9: Implement `Merge Sort Implementation` and analyze algorithm efficiency."
        ],
        "io": "Output: Sorted/Searched result for Merge Sort Implementation",
        "hint": "Implement search or sort algorithm and measure execution steps.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 15.9 \u2014 Merge Sort Implementation\n        \n    }\n}"
    },
    {
        "id": "c15-10",
        "chapter": 15,
        "topic": "Searching & Sorting",
        "difficulty": "easy",
        "title": "Concept 15.10 \u2014 Big O Notation Analysis Comparison",
        "prompt": [
            "Exercise 15.10: Implement `Big O Notation Analysis Comparison` and analyze algorithm efficiency."
        ],
        "io": "Output: Sorted/Searched result for Big O Notation Analysis Comparison",
        "hint": "Implement search or sort algorithm and measure execution steps.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 15.10 \u2014 Big O Notation Analysis Comparison\n        \n    }\n}"
    },
    {
        "id": "c15-11",
        "chapter": 15,
        "topic": "Searching & Sorting",
        "difficulty": "medium",
        "title": "Concept 15.11 \u2014 Linear Search Performance Test",
        "prompt": [
            "Exercise 15.11: Implement `Linear Search Performance Test` and analyze algorithm efficiency."
        ],
        "io": "Output: Sorted/Searched result for Linear Search Performance Test",
        "hint": "Implement search or sort algorithm and measure execution steps.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 15.11 \u2014 Linear Search Performance Test\n        \n    }\n}"
    },
    {
        "id": "c15-12",
        "chapter": 15,
        "topic": "Searching & Sorting",
        "difficulty": "medium",
        "title": "Concept 15.12 \u2014 Binary Search Performance Test",
        "prompt": [
            "Exercise 15.12: Implement `Binary Search Performance Test` and analyze algorithm efficiency."
        ],
        "io": "Output: Sorted/Searched result for Binary Search Performance Test",
        "hint": "Implement search or sort algorithm and measure execution steps.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 15.12 \u2014 Binary Search Performance Test\n        \n    }\n}"
    },
    {
        "id": "c15-13",
        "chapter": 15,
        "topic": "Searching & Sorting",
        "difficulty": "medium",
        "title": "Concept 15.13 \u2014 Selection Sort Step-by-Step Print",
        "prompt": [
            "Exercise 15.13: Implement `Selection Sort Step-by-Step Print` and analyze algorithm efficiency."
        ],
        "io": "Output: Sorted/Searched result for Selection Sort Step-by-Step Print",
        "hint": "Implement search or sort algorithm and measure execution steps.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 15.13 \u2014 Selection Sort Step-by-Step Print\n        \n    }\n}"
    },
    {
        "id": "c15-14",
        "chapter": 15,
        "topic": "Searching & Sorting",
        "difficulty": "medium",
        "title": "Concept 15.14 \u2014 Insertion Sort Step-by-Step Print",
        "prompt": [
            "Exercise 15.14: Implement `Insertion Sort Step-by-Step Print` and analyze algorithm efficiency."
        ],
        "io": "Output: Sorted/Searched result for Insertion Sort Step-by-Step Print",
        "hint": "Implement search or sort algorithm and measure execution steps.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 15.14 \u2014 Insertion Sort Step-by-Step Print\n        \n    }\n}"
    },
    {
        "id": "c15-15",
        "chapter": 15,
        "topic": "Searching & Sorting",
        "difficulty": "medium",
        "title": "Concept 15.15 \u2014 Merge Sort Step-by-Step Print",
        "prompt": [
            "Exercise 15.15: Implement `Merge Sort Step-by-Step Print` and analyze algorithm efficiency."
        ],
        "io": "Output: Sorted/Searched result for Merge Sort Step-by-Step Print",
        "hint": "Implement search or sort algorithm and measure execution steps.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 15.15 \u2014 Merge Sort Step-by-Step Print\n        \n    }\n}"
    },
    {
        "id": "c15-16",
        "chapter": 15,
        "topic": "Searching & Sorting",
        "difficulty": "medium",
        "title": "Concept 15.16 \u2014 Quicksort Partition Strategy",
        "prompt": [
            "Exercise 15.16: Implement `Quicksort Partition Strategy` and analyze algorithm efficiency."
        ],
        "io": "Output: Sorted/Searched result for Quicksort Partition Strategy",
        "hint": "Implement search or sort algorithm and measure execution steps.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 15.16 \u2014 Quicksort Partition Strategy\n        \n    }\n}"
    },
    {
        "id": "c15-17",
        "chapter": 15,
        "topic": "Searching & Sorting",
        "difficulty": "medium",
        "title": "Concept 15.17 \u2014 Radix Sort Implementation",
        "prompt": [
            "Exercise 15.17: Implement `Radix Sort Implementation` and analyze algorithm efficiency."
        ],
        "io": "Output: Sorted/Searched result for Radix Sort Implementation",
        "hint": "Implement search or sort algorithm and measure execution steps.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 15.17 \u2014 Radix Sort Implementation\n        \n    }\n}"
    },
    {
        "id": "c15-18",
        "chapter": 15,
        "topic": "Searching & Sorting",
        "difficulty": "medium",
        "title": "Concept 15.18 \u2014 Heap Sort Implementation",
        "prompt": [
            "Exercise 15.18: Implement `Heap Sort Implementation` and analyze algorithm efficiency."
        ],
        "io": "Output: Sorted/Searched result for Heap Sort Implementation",
        "hint": "Implement search or sort algorithm and measure execution steps.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 15.18 \u2014 Heap Sort Implementation\n        \n    }\n}"
    },
    {
        "id": "c15-19",
        "chapter": 15,
        "topic": "Searching & Sorting",
        "difficulty": "medium",
        "title": "Concept 15.19 \u2014 Shell Sort Implementation",
        "prompt": [
            "Exercise 15.19: Implement `Shell Sort Implementation` and analyze algorithm efficiency."
        ],
        "io": "Output: Sorted/Searched result for Shell Sort Implementation",
        "hint": "Implement search or sort algorithm and measure execution steps.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 15.19 \u2014 Shell Sort Implementation\n        \n    }\n}"
    },
    {
        "id": "c15-20",
        "chapter": 15,
        "topic": "Searching & Sorting",
        "difficulty": "medium",
        "title": "Concept 15.20 \u2014 Counting Sort Implementation",
        "prompt": [
            "Exercise 15.20: Implement `Counting Sort Implementation` and analyze algorithm efficiency."
        ],
        "io": "Output: Sorted/Searched result for Counting Sort Implementation",
        "hint": "Implement search or sort algorithm and measure execution steps.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 15.20 \u2014 Counting Sort Implementation\n        \n    }\n}"
    },
    {
        "id": "c15-21",
        "chapter": 15,
        "topic": "Searching & Sorting",
        "difficulty": "medium",
        "title": "Concept 15.21 \u2014 Binary Search on String Array",
        "prompt": [
            "Exercise 15.21: Implement `Binary Search on String Array` and analyze algorithm efficiency."
        ],
        "io": "Output: Sorted/Searched result for Binary Search on String Array",
        "hint": "Implement search or sort algorithm and measure execution steps.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 15.21 \u2014 Binary Search on String Array\n        \n    }\n}"
    },
    {
        "id": "c15-22",
        "chapter": 15,
        "topic": "Searching & Sorting",
        "difficulty": "medium",
        "title": "Concept 15.22 \u2014 Selection Sort on Custom Object Array",
        "prompt": [
            "Exercise 15.22: Implement `Selection Sort on Custom Object Array` and analyze algorithm efficiency."
        ],
        "io": "Output: Sorted/Searched result for Selection Sort on Custom Object Array",
        "hint": "Implement search or sort algorithm and measure execution steps.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 15.22 \u2014 Selection Sort on Custom Object Array\n        \n    }\n}"
    },
    {
        "id": "c15-23",
        "chapter": 15,
        "topic": "Searching & Sorting",
        "difficulty": "hard",
        "title": "Concept 15.23 \u2014 Comparator Based Custom Sort",
        "prompt": [
            "Exercise 15.23: Implement `Comparator Based Custom Sort` and analyze algorithm efficiency."
        ],
        "io": "Output: Sorted/Searched result for Comparator Based Custom Sort",
        "hint": "Implement search or sort algorithm and measure execution steps.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 15.23 \u2014 Comparator Based Custom Sort\n        \n    }\n}"
    },
    {
        "id": "c15-24",
        "chapter": 15,
        "topic": "Searching & Sorting",
        "difficulty": "hard",
        "title": "Concept 15.24 \u2014 Parallel Sort Timings (Arrays.parallelSort)",
        "prompt": [
            "Exercise 15.24: Implement `Parallel Sort Timings (Arrays.parallelSort)` and analyze algorithm efficiency."
        ],
        "io": "Output: Sorted/Searched result for Parallel Sort Timings (Arrays.parallelSort)",
        "hint": "Implement search or sort algorithm and measure execution steps.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 15.24 \u2014 Parallel Sort Timings (Arrays.parallelSort)\n        \n    }\n}"
    },
    {
        "id": "c15-25",
        "chapter": 15,
        "topic": "Searching & Sorting",
        "difficulty": "hard",
        "title": "Concept 15.25 \u2014 Search & Sort Benchmark Suite",
        "prompt": [
            "Exercise 15.25: Implement `Search & Sort Benchmark Suite` and analyze algorithm efficiency."
        ],
        "io": "Output: Sorted/Searched result for Search & Sort Benchmark Suite",
        "hint": "Implement search or sort algorithm and measure execution steps.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 15.25 \u2014 Search & Sort Benchmark Suite\n        \n    }\n}"
    },
    {
        "id": "c15-26",
        "chapter": 15,
        "topic": "Searching & Sorting",
        "difficulty": "hard",
        "title": "Concept 15.26 \u2014 Median of Three Quicksort",
        "prompt": [
            "Exercise 15.26: Implement `Median of Three Quicksort` and analyze algorithm efficiency."
        ],
        "io": "Output: Sorted/Searched result for Median of Three Quicksort",
        "hint": "Implement search or sort algorithm and measure execution steps.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 15.26 \u2014 Median of Three Quicksort\n        \n    }\n}"
    },
    {
        "id": "c15-27",
        "chapter": 15,
        "topic": "Searching & Sorting",
        "difficulty": "hard",
        "title": "Concept 15.27 \u2014 Stable vs Unstable Sort Test",
        "prompt": [
            "Exercise 15.27: Implement `Stable vs Unstable Sort Test` and analyze algorithm efficiency."
        ],
        "io": "Output: Sorted/Searched result for Stable vs Unstable Sort Test",
        "hint": "Implement search or sort algorithm and measure execution steps.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 15.27 \u2014 Stable vs Unstable Sort Test\n        \n    }\n}"
    },
    {
        "id": "c15-28",
        "chapter": 15,
        "topic": "Searching & Sorting",
        "difficulty": "hard",
        "title": "Concept 15.28 \u2014 In-Place Reversal Sort",
        "prompt": [
            "Exercise 15.28: Implement `In-Place Reversal Sort` and analyze algorithm efficiency."
        ],
        "io": "Output: Sorted/Searched result for In-Place Reversal Sort",
        "hint": "Implement search or sort algorithm and measure execution steps.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 15.28 \u2014 In-Place Reversal Sort\n        \n    }\n}"
    },
    {
        "id": "c15-29",
        "chapter": 15,
        "topic": "Searching & Sorting",
        "difficulty": "hard",
        "title": "Concept 15.29 \u2014 Matrix Search (Sorted 2D)",
        "prompt": [
            "Exercise 15.29: Implement `Matrix Search (Sorted 2D)` and analyze algorithm efficiency."
        ],
        "io": "Output: Sorted/Searched result for Matrix Search (Sorted 2D)",
        "hint": "Implement search or sort algorithm and measure execution steps.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 15.29 \u2014 Matrix Search (Sorted 2D)\n        \n    }\n}"
    },
    {
        "id": "c15-30",
        "chapter": 15,
        "topic": "Searching & Sorting",
        "difficulty": "hard",
        "title": "Concept 15.30 \u2014 External Sorting Concept Simulator",
        "prompt": [
            "Exercise 15.30: Implement `External Sorting Concept Simulator` and analyze algorithm efficiency."
        ],
        "io": "Output: Sorted/Searched result for External Sorting Concept Simulator",
        "hint": "Implement search or sort algorithm and measure execution steps.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 15.30 \u2014 External Sorting Concept Simulator\n        \n    }\n}"
    },
    {
        "id": "c16-01",
        "chapter": 16,
        "topic": "Collections",
        "difficulty": "easy",
        "title": "Concept 16.1 \u2014 ArrayList Basic Operations",
        "prompt": [
            "Exercise 16.1: Implement `ArrayList Basic Operations` using Java Collections Framework."
        ],
        "io": "Output: Collection state for ArrayList Basic Operations",
        "hint": "Use java.util.* interfaces (List, Set, Map, Queue).",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 16.1 \u2014 ArrayList Basic Operations\n        \n    }\n}"
    },
    {
        "id": "c16-02",
        "chapter": 16,
        "topic": "Collections",
        "difficulty": "easy",
        "title": "Concept 16.2 \u2014 LinkedList Insertion & Removal",
        "prompt": [
            "Exercise 16.2: Implement `LinkedList Insertion & Removal` using Java Collections Framework."
        ],
        "io": "Output: Collection state for LinkedList Insertion & Removal",
        "hint": "Use java.util.* interfaces (List, Set, Map, Queue).",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 16.2 \u2014 LinkedList Insertion & Removal\n        \n    }\n}"
    },
    {
        "id": "c16-03",
        "chapter": 16,
        "topic": "Collections",
        "difficulty": "easy",
        "title": "Concept 16.3 \u2014 HashSet Unique Element Filtering",
        "prompt": [
            "Exercise 16.3: Implement `HashSet Unique Element Filtering` using Java Collections Framework."
        ],
        "io": "Output: Collection state for HashSet Unique Element Filtering",
        "hint": "Use java.util.* interfaces (List, Set, Map, Queue).",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 16.3 \u2014 HashSet Unique Element Filtering\n        \n    }\n}"
    },
    {
        "id": "c16-04",
        "chapter": 16,
        "topic": "Collections",
        "difficulty": "easy",
        "title": "Concept 16.4 \u2014 TreeSet Sorted Order Storage",
        "prompt": [
            "Exercise 16.4: Implement `TreeSet Sorted Order Storage` using Java Collections Framework."
        ],
        "io": "Output: Collection state for TreeSet Sorted Order Storage",
        "hint": "Use java.util.* interfaces (List, Set, Map, Queue).",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 16.4 \u2014 TreeSet Sorted Order Storage\n        \n    }\n}"
    },
    {
        "id": "c16-05",
        "chapter": 16,
        "topic": "Collections",
        "difficulty": "easy",
        "title": "Concept 16.5 \u2014 HashMap Key-Value Mapping",
        "prompt": [
            "Exercise 16.5: Implement `HashMap Key-Value Mapping` using Java Collections Framework."
        ],
        "io": "Output: Collection state for HashMap Key-Value Mapping",
        "hint": "Use java.util.* interfaces (List, Set, Map, Queue).",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 16.5 \u2014 HashMap Key-Value Mapping\n        \n    }\n}"
    },
    {
        "id": "c16-06",
        "chapter": 16,
        "topic": "Collections",
        "difficulty": "easy",
        "title": "Concept 16.6 \u2014 TreeMap Sorted Key Lookup",
        "prompt": [
            "Exercise 16.6: Implement `TreeMap Sorted Key Lookup` using Java Collections Framework."
        ],
        "io": "Output: Collection state for TreeMap Sorted Key Lookup",
        "hint": "Use java.util.* interfaces (List, Set, Map, Queue).",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 16.6 \u2014 TreeMap Sorted Key Lookup\n        \n    }\n}"
    },
    {
        "id": "c16-07",
        "chapter": 16,
        "topic": "Collections",
        "difficulty": "easy",
        "title": "Concept 16.7 \u2014 PriorityQueue Min-Heap Simulation",
        "prompt": [
            "Exercise 16.7: Implement `PriorityQueue Min-Heap Simulation` using Java Collections Framework."
        ],
        "io": "Output: Collection state for PriorityQueue Min-Heap Simulation",
        "hint": "Use java.util.* interfaces (List, Set, Map, Queue).",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 16.7 \u2014 PriorityQueue Min-Heap Simulation\n        \n    }\n}"
    },
    {
        "id": "c16-08",
        "chapter": 16,
        "topic": "Collections",
        "difficulty": "easy",
        "title": "Concept 16.8 \u2014 ArrayDeque Double-Ended Queue",
        "prompt": [
            "Exercise 16.8: Implement `ArrayDeque Double-Ended Queue` using Java Collections Framework."
        ],
        "io": "Output: Collection state for ArrayDeque Double-Ended Queue",
        "hint": "Use java.util.* interfaces (List, Set, Map, Queue).",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 16.8 \u2014 ArrayDeque Double-Ended Queue\n        \n    }\n}"
    },
    {
        "id": "c16-09",
        "chapter": 16,
        "topic": "Collections",
        "difficulty": "easy",
        "title": "Concept 16.9 \u2014 Stack Push & Pop Simulator",
        "prompt": [
            "Exercise 16.9: Implement `Stack Push & Pop Simulator` using Java Collections Framework."
        ],
        "io": "Output: Collection state for Stack Push & Pop Simulator",
        "hint": "Use java.util.* interfaces (List, Set, Map, Queue).",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 16.9 \u2014 Stack Push & Pop Simulator\n        \n    }\n}"
    },
    {
        "id": "c16-10",
        "chapter": 16,
        "topic": "Collections",
        "difficulty": "easy",
        "title": "Concept 16.10 \u2014 Iterating with Iterator vs For-Each",
        "prompt": [
            "Exercise 16.10: Implement `Iterating with Iterator vs For-Each` using Java Collections Framework."
        ],
        "io": "Output: Collection state for Iterating with Iterator vs For-Each",
        "hint": "Use java.util.* interfaces (List, Set, Map, Queue).",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 16.10 \u2014 Iterating with Iterator vs For-Each\n        \n    }\n}"
    },
    {
        "id": "c16-11",
        "chapter": 16,
        "topic": "Collections",
        "difficulty": "medium",
        "title": "Concept 16.11 \u2014 Bulk Collection Operations (addAll, removeAll)",
        "prompt": [
            "Exercise 16.11: Implement `Bulk Collection Operations (addAll, removeAll)` using Java Collections Framework."
        ],
        "io": "Output: Collection state for Bulk Collection Operations (addAll, removeAll)",
        "hint": "Use java.util.* interfaces (List, Set, Map, Queue).",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 16.11 \u2014 Bulk Collection Operations (addAll, removeAll)\n        \n    }\n}"
    },
    {
        "id": "c16-12",
        "chapter": 16,
        "topic": "Collections",
        "difficulty": "medium",
        "title": "Concept 16.12 \u2014 Frequency Counting with Map",
        "prompt": [
            "Exercise 16.12: Implement `Frequency Counting with Map` using Java Collections Framework."
        ],
        "io": "Output: Collection state for Frequency Counting with Map",
        "hint": "Use java.util.* interfaces (List, Set, Map, Queue).",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 16.12 \u2014 Frequency Counting with Map\n        \n    }\n}"
    },
    {
        "id": "c16-13",
        "chapter": 16,
        "topic": "Collections",
        "difficulty": "medium",
        "title": "Concept 16.13 \u2014 Grouping Elements by Category",
        "prompt": [
            "Exercise 16.13: Implement `Grouping Elements by Category` using Java Collections Framework."
        ],
        "io": "Output: Collection state for Grouping Elements by Category",
        "hint": "Use java.util.* interfaces (List, Set, Map, Queue).",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 16.13 \u2014 Grouping Elements by Category\n        \n    }\n}"
    },
    {
        "id": "c16-14",
        "chapter": 16,
        "topic": "Collections",
        "difficulty": "medium",
        "title": "Concept 16.14 \u2014 Synchronized Collection Wrapping",
        "prompt": [
            "Exercise 16.14: Implement `Synchronized Collection Wrapping` using Java Collections Framework."
        ],
        "io": "Output: Collection state for Synchronized Collection Wrapping",
        "hint": "Use java.util.* interfaces (List, Set, Map, Queue).",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 16.14 \u2014 Synchronized Collection Wrapping\n        \n    }\n}"
    },
    {
        "id": "c16-15",
        "chapter": 16,
        "topic": "Collections",
        "difficulty": "medium",
        "title": "Concept 16.15 \u2014 Unmodifiable List View Guard",
        "prompt": [
            "Exercise 16.15: Implement `Unmodifiable List View Guard` using Java Collections Framework."
        ],
        "io": "Output: Collection state for Unmodifiable List View Guard",
        "hint": "Use java.util.* interfaces (List, Set, Map, Queue).",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 16.15 \u2014 Unmodifiable List View Guard\n        \n    }\n}"
    },
    {
        "id": "c16-16",
        "chapter": 16,
        "topic": "Collections",
        "difficulty": "medium",
        "title": "Concept 16.16 \u2014 Custom Object Key in HashMap (hashCode/equals)",
        "prompt": [
            "Exercise 16.16: Implement `Custom Object Key in HashMap (hashCode/equals)` using Java Collections Framework."
        ],
        "io": "Output: Collection state for Custom Object Key in HashMap (hashCode/equals)",
        "hint": "Use java.util.* interfaces (List, Set, Map, Queue).",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 16.16 \u2014 Custom Object Key in HashMap (hashCode/equals)\n        \n    }\n}"
    },
    {
        "id": "c16-17",
        "chapter": 16,
        "topic": "Collections",
        "difficulty": "medium",
        "title": "Concept 16.17 \u2014 NavigableSet SubSet Queries",
        "prompt": [
            "Exercise 16.17: Implement `NavigableSet SubSet Queries` using Java Collections Framework."
        ],
        "io": "Output: Collection state for NavigableSet SubSet Queries",
        "hint": "Use java.util.* interfaces (List, Set, Map, Queue).",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 16.17 \u2014 NavigableSet SubSet Queries\n        \n    }\n}"
    },
    {
        "id": "c16-18",
        "chapter": 16,
        "topic": "Collections",
        "difficulty": "medium",
        "title": "Concept 16.18 \u2014 Queue Poll & Offer Pattern",
        "prompt": [
            "Exercise 16.18: Implement `Queue Poll & Offer Pattern` using Java Collections Framework."
        ],
        "io": "Output: Collection state for Queue Poll & Offer Pattern",
        "hint": "Use java.util.* interfaces (List, Set, Map, Queue).",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 16.18 \u2014 Queue Poll & Offer Pattern\n        \n    }\n}"
    },
    {
        "id": "c16-19",
        "chapter": 16,
        "topic": "Collections",
        "difficulty": "medium",
        "title": "Concept 16.19 \u2014 Sorting List with Collections.sort",
        "prompt": [
            "Exercise 16.19: Implement `Sorting List with Collections.sort` using Java Collections Framework."
        ],
        "io": "Output: Collection state for Sorting List with Collections.sort",
        "hint": "Use java.util.* interfaces (List, Set, Map, Queue).",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 16.19 \u2014 Sorting List with Collections.sort\n        \n    }\n}"
    },
    {
        "id": "c16-20",
        "chapter": 16,
        "topic": "Collections",
        "difficulty": "medium",
        "title": "Concept 16.20 \u2014 Binary Search on Collections",
        "prompt": [
            "Exercise 16.20: Implement `Binary Search on Collections` using Java Collections Framework."
        ],
        "io": "Output: Collection state for Binary Search on Collections",
        "hint": "Use java.util.* interfaces (List, Set, Map, Queue).",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 16.20 \u2014 Binary Search on Collections\n        \n    }\n}"
    },
    {
        "id": "c16-21",
        "chapter": 16,
        "topic": "Collections",
        "difficulty": "medium",
        "title": "Concept 16.21 \u2014 Shuffling & Reversing Lists",
        "prompt": [
            "Exercise 16.21: Implement `Shuffling & Reversing Lists` using Java Collections Framework."
        ],
        "io": "Output: Collection state for Shuffling & Reversing Lists",
        "hint": "Use java.util.* interfaces (List, Set, Map, Queue).",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 16.21 \u2014 Shuffling & Reversing Lists\n        \n    }\n}"
    },
    {
        "id": "c16-22",
        "chapter": 16,
        "topic": "Collections",
        "difficulty": "medium",
        "title": "Concept 16.22 \u2014 Intersection of Two Sets",
        "prompt": [
            "Exercise 16.22: Implement `Intersection of Two Sets` using Java Collections Framework."
        ],
        "io": "Output: Collection state for Intersection of Two Sets",
        "hint": "Use java.util.* interfaces (List, Set, Map, Queue).",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 16.22 \u2014 Intersection of Two Sets\n        \n    }\n}"
    },
    {
        "id": "c16-23",
        "chapter": 16,
        "topic": "Collections",
        "difficulty": "hard",
        "title": "Concept 16.23 \u2014 Union & Difference of Sets",
        "prompt": [
            "Exercise 16.23: Implement `Union & Difference of Sets` using Java Collections Framework."
        ],
        "io": "Output: Collection state for Union & Difference of Sets",
        "hint": "Use java.util.* interfaces (List, Set, Map, Queue).",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 16.23 \u2014 Union & Difference of Sets\n        \n    }\n}"
    },
    {
        "id": "c16-24",
        "chapter": 16,
        "topic": "Collections",
        "difficulty": "hard",
        "title": "Concept 16.24 \u2014 LRU Cache Simulation with LinkedHashMap",
        "prompt": [
            "Exercise 16.24: Implement `LRU Cache Simulation with LinkedHashMap` using Java Collections Framework."
        ],
        "io": "Output: Collection state for LRU Cache Simulation with LinkedHashMap",
        "hint": "Use java.util.* interfaces (List, Set, Map, Queue).",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 16.24 \u2014 LRU Cache Simulation with LinkedHashMap\n        \n    }\n}"
    },
    {
        "id": "c16-25",
        "chapter": 16,
        "topic": "Collections",
        "difficulty": "hard",
        "title": "Concept 16.25 \u2014 Multi-Map Simulation with Lists",
        "prompt": [
            "Exercise 16.25: Implement `Multi-Map Simulation with Lists` using Java Collections Framework."
        ],
        "io": "Output: Collection state for Multi-Map Simulation with Lists",
        "hint": "Use java.util.* interfaces (List, Set, Map, Queue).",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 16.25 \u2014 Multi-Map Simulation with Lists\n        \n    }\n}"
    },
    {
        "id": "c16-26",
        "chapter": 16,
        "topic": "Collections",
        "difficulty": "hard",
        "title": "Concept 16.26 \u2014 Inverting a Key-Value Map",
        "prompt": [
            "Exercise 16.26: Implement `Inverting a Key-Value Map` using Java Collections Framework."
        ],
        "io": "Output: Collection state for Inverting a Key-Value Map",
        "hint": "Use java.util.* interfaces (List, Set, Map, Queue).",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 16.26 \u2014 Inverting a Key-Value Map\n        \n    }\n}"
    },
    {
        "id": "c16-27",
        "chapter": 16,
        "topic": "Collections",
        "difficulty": "hard",
        "title": "Concept 16.27 \u2014 Counting Word Frequencies in Text",
        "prompt": [
            "Exercise 16.27: Implement `Counting Word Frequencies in Text` using Java Collections Framework."
        ],
        "io": "Output: Collection state for Counting Word Frequencies in Text",
        "hint": "Use java.util.* interfaces (List, Set, Map, Queue).",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 16.27 \u2014 Counting Word Frequencies in Text\n        \n    }\n}"
    },
    {
        "id": "c16-28",
        "chapter": 16,
        "topic": "Collections",
        "difficulty": "hard",
        "title": "Concept 16.28 \u2014 Top K Frequent Elements Finder",
        "prompt": [
            "Exercise 16.28: Implement `Top K Frequent Elements Finder` using Java Collections Framework."
        ],
        "io": "Output: Collection state for Top K Frequent Elements Finder",
        "hint": "Use java.util.* interfaces (List, Set, Map, Queue).",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 16.28 \u2014 Top K Frequent Elements Finder\n        \n    }\n}"
    },
    {
        "id": "c16-29",
        "chapter": 16,
        "topic": "Collections",
        "difficulty": "hard",
        "title": "Concept 16.29 \u2014 Deduplicating Preserving Insertion Order",
        "prompt": [
            "Exercise 16.29: Implement `Deduplicating Preserving Insertion Order` using Java Collections Framework."
        ],
        "io": "Output: Collection state for Deduplicating Preserving Insertion Order",
        "hint": "Use java.util.* interfaces (List, Set, Map, Queue).",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 16.29 \u2014 Deduplicating Preserving Insertion Order\n        \n    }\n}"
    },
    {
        "id": "c16-30",
        "chapter": 16,
        "topic": "Collections",
        "difficulty": "hard",
        "title": "Concept 16.30 \u2014 Merging Two Sorted Maps",
        "prompt": [
            "Exercise 16.30: Implement `Merging Two Sorted Maps` using Java Collections Framework."
        ],
        "io": "Output: Collection state for Merging Two Sorted Maps",
        "hint": "Use java.util.* interfaces (List, Set, Map, Queue).",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 16.30 \u2014 Merging Two Sorted Maps\n        \n    }\n}"
    },
    {
        "id": "c17-01",
        "chapter": 17,
        "topic": "Generics",
        "difficulty": "easy",
        "title": "Concept 17.1 \u2014 Generic Box Wrapper Class",
        "prompt": [
            "Exercise 17.1: Design generic classes/methods for `Generic Box Wrapper Class`."
        ],
        "io": "Output: Type-safe generic execution for Generic Box Wrapper Class",
        "hint": "Use type parameters <T> or wildcard types <?>.",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 17.1 \u2014 Generic Box Wrapper Class\n        \n    }\n}"
    },
    {
        "id": "c17-02",
        "chapter": 17,
        "topic": "Generics",
        "difficulty": "easy",
        "title": "Concept 17.2 \u2014 Generic Pair Holder (Two Types)",
        "prompt": [
            "Exercise 17.2: Design generic classes/methods for `Generic Pair Holder (Two Types)`."
        ],
        "io": "Output: Type-safe generic execution for Generic Pair Holder (Two Types)",
        "hint": "Use type parameters <T> or wildcard types <?>.",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 17.2 \u2014 Generic Pair Holder (Two Types)\n        \n    }\n}"
    },
    {
        "id": "c17-03",
        "chapter": 17,
        "topic": "Generics",
        "difficulty": "easy",
        "title": "Concept 17.3 \u2014 Generic Stack Implementation",
        "prompt": [
            "Exercise 17.3: Design generic classes/methods for `Generic Stack Implementation`."
        ],
        "io": "Output: Type-safe generic execution for Generic Stack Implementation",
        "hint": "Use type parameters <T> or wildcard types <?>.",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 17.3 \u2014 Generic Stack Implementation\n        \n    }\n}"
    },
    {
        "id": "c17-04",
        "chapter": 17,
        "topic": "Generics",
        "difficulty": "easy",
        "title": "Concept 17.4 \u2014 Generic Array Swap Method",
        "prompt": [
            "Exercise 17.4: Design generic classes/methods for `Generic Array Swap Method`."
        ],
        "io": "Output: Type-safe generic execution for Generic Array Swap Method",
        "hint": "Use type parameters <T> or wildcard types <?>.",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 17.4 \u2014 Generic Array Swap Method\n        \n    }\n}"
    },
    {
        "id": "c17-05",
        "chapter": 17,
        "topic": "Generics",
        "difficulty": "easy",
        "title": "Concept 17.5 \u2014 Generic Minimum Element Finder",
        "prompt": [
            "Exercise 17.5: Design generic classes/methods for `Generic Minimum Element Finder`."
        ],
        "io": "Output: Type-safe generic execution for Generic Minimum Element Finder",
        "hint": "Use type parameters <T> or wildcard types <?>.",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 17.5 \u2014 Generic Minimum Element Finder\n        \n    }\n}"
    },
    {
        "id": "c17-06",
        "chapter": 17,
        "topic": "Generics",
        "difficulty": "easy",
        "title": "Concept 17.6 \u2014 Bounded Type Parameter (T extends Number)",
        "prompt": [
            "Exercise 17.6: Design generic classes/methods for `Bounded Type Parameter (T extends Number)`."
        ],
        "io": "Output: Type-safe generic execution for Bounded Type Parameter (T extends Number)",
        "hint": "Use type parameters <T> or wildcard types <?>.",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 17.6 \u2014 Bounded Type Parameter (T extends Number)\n        \n    }\n}"
    },
    {
        "id": "c17-07",
        "chapter": 17,
        "topic": "Generics",
        "difficulty": "easy",
        "title": "Concept 17.7 \u2014 Upper Bounded Wildcards (? extends Number)",
        "prompt": [
            "Exercise 17.7: Design generic classes/methods for `Upper Bounded Wildcards (? extends Number)`."
        ],
        "io": "Output: Type-safe generic execution for Upper Bounded Wildcards (? extends Number)",
        "hint": "Use type parameters <T> or wildcard types <?>.",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 17.7 \u2014 Upper Bounded Wildcards (? extends Number)\n        \n    }\n}"
    },
    {
        "id": "c17-08",
        "chapter": 17,
        "topic": "Generics",
        "difficulty": "easy",
        "title": "Concept 17.8 \u2014 Lower Bounded Wildcards (? super Integer)",
        "prompt": [
            "Exercise 17.8: Design generic classes/methods for `Lower Bounded Wildcards (? super Integer)`."
        ],
        "io": "Output: Type-safe generic execution for Lower Bounded Wildcards (? super Integer)",
        "hint": "Use type parameters <T> or wildcard types <?>.",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 17.8 \u2014 Lower Bounded Wildcards (? super Integer)\n        \n    }\n}"
    },
    {
        "id": "c17-09",
        "chapter": 17,
        "topic": "Generics",
        "difficulty": "easy",
        "title": "Concept 17.9 \u2014 Unbounded Wildcard Collections",
        "prompt": [
            "Exercise 17.9: Design generic classes/methods for `Unbounded Wildcard Collections`."
        ],
        "io": "Output: Type-safe generic execution for Unbounded Wildcard Collections",
        "hint": "Use type parameters <T> or wildcard types <?>.",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 17.9 \u2014 Unbounded Wildcard Collections\n        \n    }\n}"
    },
    {
        "id": "c17-10",
        "chapter": 17,
        "topic": "Generics",
        "difficulty": "easy",
        "title": "Concept 17.10 \u2014 Generic Interface Implementation",
        "prompt": [
            "Exercise 17.10: Design generic classes/methods for `Generic Interface Implementation`."
        ],
        "io": "Output: Type-safe generic execution for Generic Interface Implementation",
        "hint": "Use type parameters <T> or wildcard types <?>.",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 17.10 \u2014 Generic Interface Implementation\n        \n    }\n}"
    },
    {
        "id": "c17-11",
        "chapter": 17,
        "topic": "Generics",
        "difficulty": "medium",
        "title": "Concept 17.11 \u2014 Generic Matrix Grid Container",
        "prompt": [
            "Exercise 17.11: Design generic classes/methods for `Generic Matrix Grid Container`."
        ],
        "io": "Output: Type-safe generic execution for Generic Matrix Grid Container",
        "hint": "Use type parameters <T> or wildcard types <?>.",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 17.11 \u2014 Generic Matrix Grid Container\n        \n    }\n}"
    },
    {
        "id": "c17-12",
        "chapter": 17,
        "topic": "Generics",
        "difficulty": "medium",
        "title": "Concept 17.12 \u2014 Type Erasure Evaluation",
        "prompt": [
            "Exercise 17.12: Design generic classes/methods for `Type Erasure Evaluation`."
        ],
        "io": "Output: Type-safe generic execution for Type Erasure Evaluation",
        "hint": "Use type parameters <T> or wildcard types <?>.",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 17.12 \u2014 Type Erasure Evaluation\n        \n    }\n}"
    },
    {
        "id": "c17-13",
        "chapter": 17,
        "topic": "Generics",
        "difficulty": "medium",
        "title": "Concept 17.13 \u2014 Generic Cache Storage System",
        "prompt": [
            "Exercise 17.13: Design generic classes/methods for `Generic Cache Storage System`."
        ],
        "io": "Output: Type-safe generic execution for Generic Cache Storage System",
        "hint": "Use type parameters <T> or wildcard types <?>.",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 17.13 \u2014 Generic Cache Storage System\n        \n    }\n}"
    },
    {
        "id": "c17-14",
        "chapter": 17,
        "topic": "Generics",
        "difficulty": "medium",
        "title": "Concept 17.14 \u2014 Generic Repository Pattern",
        "prompt": [
            "Exercise 17.14: Design generic classes/methods for `Generic Repository Pattern`."
        ],
        "io": "Output: Type-safe generic execution for Generic Repository Pattern",
        "hint": "Use type parameters <T> or wildcard types <?>.",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 17.14 \u2014 Generic Repository Pattern\n        \n    }\n}"
    },
    {
        "id": "c17-15",
        "chapter": 17,
        "topic": "Generics",
        "difficulty": "medium",
        "title": "Concept 17.15 \u2014 Generic Comparison Utility",
        "prompt": [
            "Exercise 17.15: Design generic classes/methods for `Generic Comparison Utility`."
        ],
        "io": "Output: Type-safe generic execution for Generic Comparison Utility",
        "hint": "Use type parameters <T> or wildcard types <?>.",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 17.15 \u2014 Generic Comparison Utility\n        \n    }\n}"
    },
    {
        "id": "c17-16",
        "chapter": 17,
        "topic": "Generics",
        "difficulty": "medium",
        "title": "Concept 17.16 \u2014 Generic Builder Pattern",
        "prompt": [
            "Exercise 17.16: Design generic classes/methods for `Generic Builder Pattern`."
        ],
        "io": "Output: Type-safe generic execution for Generic Builder Pattern",
        "hint": "Use type parameters <T> or wildcard types <?>.",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 17.16 \u2014 Generic Builder Pattern\n        \n    }\n}"
    },
    {
        "id": "c17-17",
        "chapter": 17,
        "topic": "Generics",
        "difficulty": "medium",
        "title": "Concept 17.17 \u2014 Generic Event Publisher",
        "prompt": [
            "Exercise 17.17: Design generic classes/methods for `Generic Event Publisher`."
        ],
        "io": "Output: Type-safe generic execution for Generic Event Publisher",
        "hint": "Use type parameters <T> or wildcard types <?>.",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 17.17 \u2014 Generic Event Publisher\n        \n    }\n}"
    },
    {
        "id": "c17-18",
        "chapter": 17,
        "topic": "Generics",
        "difficulty": "medium",
        "title": "Concept 17.18 \u2014 Generic Result Wrapper (Success/Failure)",
        "prompt": [
            "Exercise 17.18: Design generic classes/methods for `Generic Result Wrapper (Success/Failure)`."
        ],
        "io": "Output: Type-safe generic execution for Generic Result Wrapper (Success/Failure)",
        "hint": "Use type parameters <T> or wildcard types <?>.",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 17.18 \u2014 Generic Result Wrapper (Success/Failure)\n        \n    }\n}"
    },
    {
        "id": "c17-19",
        "chapter": 17,
        "topic": "Generics",
        "difficulty": "medium",
        "title": "Concept 17.19 \u2014 Generic Tree Node Structure",
        "prompt": [
            "Exercise 17.19: Design generic classes/methods for `Generic Tree Node Structure`."
        ],
        "io": "Output: Type-safe generic execution for Generic Tree Node Structure",
        "hint": "Use type parameters <T> or wildcard types <?>.",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 17.19 \u2014 Generic Tree Node Structure\n        \n    }\n}"
    },
    {
        "id": "c17-20",
        "chapter": 17,
        "topic": "Generics",
        "difficulty": "medium",
        "title": "Concept 17.20 \u2014 Generic Graph Node Structure",
        "prompt": [
            "Exercise 17.20: Design generic classes/methods for `Generic Graph Node Structure`."
        ],
        "io": "Output: Type-safe generic execution for Generic Graph Node Structure",
        "hint": "Use type parameters <T> or wildcard types <?>.",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 17.20 \u2014 Generic Graph Node Structure\n        \n    }\n}"
    },
    {
        "id": "c17-21",
        "chapter": 17,
        "topic": "Generics",
        "difficulty": "medium",
        "title": "Concept 17.21 \u2014 Generic Circular Buffer",
        "prompt": [
            "Exercise 17.21: Design generic classes/methods for `Generic Circular Buffer`."
        ],
        "io": "Output: Type-safe generic execution for Generic Circular Buffer",
        "hint": "Use type parameters <T> or wildcard types <?>.",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 17.21 \u2014 Generic Circular Buffer\n        \n    }\n}"
    },
    {
        "id": "c17-22",
        "chapter": 17,
        "topic": "Generics",
        "difficulty": "medium",
        "title": "Concept 17.22 \u2014 Generic Priority Queue Wrapper",
        "prompt": [
            "Exercise 17.22: Design generic classes/methods for `Generic Priority Queue Wrapper`."
        ],
        "io": "Output: Type-safe generic execution for Generic Priority Queue Wrapper",
        "hint": "Use type parameters <T> or wildcard types <?>.",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 17.22 \u2014 Generic Priority Queue Wrapper\n        \n    }\n}"
    },
    {
        "id": "c17-23",
        "chapter": 17,
        "topic": "Generics",
        "difficulty": "hard",
        "title": "Concept 17.23 \u2014 Generic Object Pool",
        "prompt": [
            "Exercise 17.23: Design generic classes/methods for `Generic Object Pool`."
        ],
        "io": "Output: Type-safe generic execution for Generic Object Pool",
        "hint": "Use type parameters <T> or wildcard types <?>.",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 17.23 \u2014 Generic Object Pool\n        \n    }\n}"
    },
    {
        "id": "c17-24",
        "chapter": 17,
        "topic": "Generics",
        "difficulty": "hard",
        "title": "Concept 17.24 \u2014 Generic Filter Predicate",
        "prompt": [
            "Exercise 17.24: Design generic classes/methods for `Generic Filter Predicate`."
        ],
        "io": "Output: Type-safe generic execution for Generic Filter Predicate",
        "hint": "Use type parameters <T> or wildcard types <?>.",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 17.24 \u2014 Generic Filter Predicate\n        \n    }\n}"
    },
    {
        "id": "c17-25",
        "chapter": 17,
        "topic": "Generics",
        "difficulty": "hard",
        "title": "Concept 17.25 \u2014 Generic Mapper Function",
        "prompt": [
            "Exercise 17.25: Design generic classes/methods for `Generic Mapper Function`."
        ],
        "io": "Output: Type-safe generic execution for Generic Mapper Function",
        "hint": "Use type parameters <T> or wildcard types <?>.",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 17.25 \u2014 Generic Mapper Function\n        \n    }\n}"
    },
    {
        "id": "c17-26",
        "chapter": 17,
        "topic": "Generics",
        "difficulty": "hard",
        "title": "Concept 17.26 \u2014 Generic Key-Value Tuple",
        "prompt": [
            "Exercise 17.26: Design generic classes/methods for `Generic Key-Value Tuple`."
        ],
        "io": "Output: Type-safe generic execution for Generic Key-Value Tuple",
        "hint": "Use type parameters <T> or wildcard types <?>.",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 17.26 \u2014 Generic Key-Value Tuple\n        \n    }\n}"
    },
    {
        "id": "c17-27",
        "chapter": 17,
        "topic": "Generics",
        "difficulty": "hard",
        "title": "Concept 17.27 \u2014 Generic Range Checker",
        "prompt": [
            "Exercise 17.27: Design generic classes/methods for `Generic Range Checker`."
        ],
        "io": "Output: Type-safe generic execution for Generic Range Checker",
        "hint": "Use type parameters <T> or wildcard types <?>.",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 17.27 \u2014 Generic Range Checker\n        \n    }\n}"
    },
    {
        "id": "c17-28",
        "chapter": 17,
        "topic": "Generics",
        "difficulty": "hard",
        "title": "Concept 17.28 \u2014 Generic Collection Converter",
        "prompt": [
            "Exercise 17.28: Design generic classes/methods for `Generic Collection Converter`."
        ],
        "io": "Output: Type-safe generic execution for Generic Collection Converter",
        "hint": "Use type parameters <T> or wildcard types <?>.",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 17.28 \u2014 Generic Collection Converter\n        \n    }\n}"
    },
    {
        "id": "c17-29",
        "chapter": 17,
        "topic": "Generics",
        "difficulty": "hard",
        "title": "Concept 17.29 \u2014 Generic Factory Provider",
        "prompt": [
            "Exercise 17.29: Design generic classes/methods for `Generic Factory Provider`."
        ],
        "io": "Output: Type-safe generic execution for Generic Factory Provider",
        "hint": "Use type parameters <T> or wildcard types <?>.",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 17.29 \u2014 Generic Factory Provider\n        \n    }\n}"
    },
    {
        "id": "c17-30",
        "chapter": 17,
        "topic": "Generics",
        "difficulty": "hard",
        "title": "Concept 17.30 \u2014 Generic Type Safe Map",
        "prompt": [
            "Exercise 17.30: Design generic classes/methods for `Generic Type Safe Map`."
        ],
        "io": "Output: Type-safe generic execution for Generic Type Safe Map",
        "hint": "Use type parameters <T> or wildcard types <?>.",
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 17.30 \u2014 Generic Type Safe Map\n        \n    }\n}"
    },
    {
        "id": "c18-01",
        "chapter": 18,
        "topic": "Streams & Lambdas",
        "difficulty": "easy",
        "title": "Concept 18.1 \u2014 Filtering List with Stream.filter",
        "prompt": [
            "Exercise 18.1: Implement `Filtering List with Stream.filter` using Java 8+ Streams API & Lambda expressions."
        ],
        "io": "Output: Processed stream output for Filtering List with Stream.filter",
        "hint": "Use java.util.stream.Stream and Collectors.",
        "starterCode": "import java.util.*;\nimport java.util.stream.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 18.1 \u2014 Filtering List with Stream.filter\n        \n    }\n}"
    },
    {
        "id": "c18-02",
        "chapter": 18,
        "topic": "Streams & Lambdas",
        "difficulty": "easy",
        "title": "Concept 18.2 \u2014 Transforming Elements with Stream.map",
        "prompt": [
            "Exercise 18.2: Implement `Transforming Elements with Stream.map` using Java 8+ Streams API & Lambda expressions."
        ],
        "io": "Output: Processed stream output for Transforming Elements with Stream.map",
        "hint": "Use java.util.stream.Stream and Collectors.",
        "starterCode": "import java.util.*;\nimport java.util.stream.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 18.2 \u2014 Transforming Elements with Stream.map\n        \n    }\n}"
    },
    {
        "id": "c18-03",
        "chapter": 18,
        "topic": "Streams & Lambdas",
        "difficulty": "easy",
        "title": "Concept 18.3 \u2014 Reducing Values with Stream.reduce",
        "prompt": [
            "Exercise 18.3: Implement `Reducing Values with Stream.reduce` using Java 8+ Streams API & Lambda expressions."
        ],
        "io": "Output: Processed stream output for Reducing Values with Stream.reduce",
        "hint": "Use java.util.stream.Stream and Collectors.",
        "starterCode": "import java.util.*;\nimport java.util.stream.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 18.3 \u2014 Reducing Values with Stream.reduce\n        \n    }\n}"
    },
    {
        "id": "c18-04",
        "chapter": 18,
        "topic": "Streams & Lambdas",
        "difficulty": "easy",
        "title": "Concept 18.4 \u2014 Collecting Results with Collectors.toList",
        "prompt": [
            "Exercise 18.4: Implement `Collecting Results with Collectors.toList` using Java 8+ Streams API & Lambda expressions."
        ],
        "io": "Output: Processed stream output for Collecting Results with Collectors.toList",
        "hint": "Use java.util.stream.Stream and Collectors.",
        "starterCode": "import java.util.*;\nimport java.util.stream.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 18.4 \u2014 Collecting Results with Collectors.toList\n        \n    }\n}"
    },
    {
        "id": "c18-05",
        "chapter": 18,
        "topic": "Streams & Lambdas",
        "difficulty": "easy",
        "title": "Concept 18.5 \u2014 Grouping Data with Collectors.groupingBy",
        "prompt": [
            "Exercise 18.5: Implement `Grouping Data with Collectors.groupingBy` using Java 8+ Streams API & Lambda expressions."
        ],
        "io": "Output: Processed stream output for Grouping Data with Collectors.groupingBy",
        "hint": "Use java.util.stream.Stream and Collectors.",
        "starterCode": "import java.util.*;\nimport java.util.stream.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 18.5 \u2014 Grouping Data with Collectors.groupingBy\n        \n    }\n}"
    },
    {
        "id": "c18-06",
        "chapter": 18,
        "topic": "Streams & Lambdas",
        "difficulty": "easy",
        "title": "Concept 18.6 \u2014 Joining Strings with Collectors.joining",
        "prompt": [
            "Exercise 18.6: Implement `Joining Strings with Collectors.joining` using Java 8+ Streams API & Lambda expressions."
        ],
        "io": "Output: Processed stream output for Joining Strings with Collectors.joining",
        "hint": "Use java.util.stream.Stream and Collectors.",
        "starterCode": "import java.util.*;\nimport java.util.stream.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 18.6 \u2014 Joining Strings with Collectors.joining\n        \n    }\n}"
    },
    {
        "id": "c18-07",
        "chapter": 18,
        "topic": "Streams & Lambdas",
        "difficulty": "easy",
        "title": "Concept 18.7 \u2014 FlatMap Flattening Nested Lists",
        "prompt": [
            "Exercise 18.7: Implement `FlatMap Flattening Nested Lists` using Java 8+ Streams API & Lambda expressions."
        ],
        "io": "Output: Processed stream output for FlatMap Flattening Nested Lists",
        "hint": "Use java.util.stream.Stream and Collectors.",
        "starterCode": "import java.util.*;\nimport java.util.stream.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 18.7 \u2014 FlatMap Flattening Nested Lists\n        \n    }\n}"
    },
    {
        "id": "c18-08",
        "chapter": 18,
        "topic": "Streams & Lambdas",
        "difficulty": "easy",
        "title": "Concept 18.8 \u2014 Distinct & Sorted Stream Pipeline",
        "prompt": [
            "Exercise 18.8: Implement `Distinct & Sorted Stream Pipeline` using Java 8+ Streams API & Lambda expressions."
        ],
        "io": "Output: Processed stream output for Distinct & Sorted Stream Pipeline",
        "hint": "Use java.util.stream.Stream and Collectors.",
        "starterCode": "import java.util.*;\nimport java.util.stream.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 18.8 \u2014 Distinct & Sorted Stream Pipeline\n        \n    }\n}"
    },
    {
        "id": "c18-09",
        "chapter": 18,
        "topic": "Streams & Lambdas",
        "difficulty": "easy",
        "title": "Concept 18.9 \u2014 Stream Min & Max Finder",
        "prompt": [
            "Exercise 18.9: Implement `Stream Min & Max Finder` using Java 8+ Streams API & Lambda expressions."
        ],
        "io": "Output: Processed stream output for Stream Min & Max Finder",
        "hint": "Use java.util.stream.Stream and Collectors.",
        "starterCode": "import java.util.*;\nimport java.util.stream.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 18.9 \u2014 Stream Min & Max Finder\n        \n    }\n}"
    },
    {
        "id": "c18-10",
        "chapter": 18,
        "topic": "Streams & Lambdas",
        "difficulty": "easy",
        "title": "Concept 18.10 \u2014 Counting Elements with Stream.count",
        "prompt": [
            "Exercise 18.10: Implement `Counting Elements with Stream.count` using Java 8+ Streams API & Lambda expressions."
        ],
        "io": "Output: Processed stream output for Counting Elements with Stream.count",
        "hint": "Use java.util.stream.Stream and Collectors.",
        "starterCode": "import java.util.*;\nimport java.util.stream.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 18.10 \u2014 Counting Elements with Stream.count\n        \n    }\n}"
    },
    {
        "id": "c18-11",
        "chapter": 18,
        "topic": "Streams & Lambdas",
        "difficulty": "medium",
        "title": "Concept 18.11 \u2014 Parallel Streams Performance Test",
        "prompt": [
            "Exercise 18.11: Implement `Parallel Streams Performance Test` using Java 8+ Streams API & Lambda expressions."
        ],
        "io": "Output: Processed stream output for Parallel Streams Performance Test",
        "hint": "Use java.util.stream.Stream and Collectors.",
        "starterCode": "import java.util.*;\nimport java.util.stream.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 18.11 \u2014 Parallel Streams Performance Test\n        \n    }\n}"
    },
    {
        "id": "c18-12",
        "chapter": 18,
        "topic": "Streams & Lambdas",
        "difficulty": "medium",
        "title": "Concept 18.12 \u2014 IntStream Range & Summary Statistics",
        "prompt": [
            "Exercise 18.12: Implement `IntStream Range & Summary Statistics` using Java 8+ Streams API & Lambda expressions."
        ],
        "io": "Output: Processed stream output for IntStream Range & Summary Statistics",
        "hint": "Use java.util.stream.Stream and Collectors.",
        "starterCode": "import java.util.*;\nimport java.util.stream.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 18.12 \u2014 IntStream Range & Summary Statistics\n        \n    }\n}"
    },
    {
        "id": "c18-13",
        "chapter": 18,
        "topic": "Streams & Lambdas",
        "difficulty": "medium",
        "title": "Concept 18.13 \u2014 Custom FunctionalInterface Definition",
        "prompt": [
            "Exercise 18.13: Implement `Custom FunctionalInterface Definition` using Java 8+ Streams API & Lambda expressions."
        ],
        "io": "Output: Processed stream output for Custom FunctionalInterface Definition",
        "hint": "Use java.util.stream.Stream and Collectors.",
        "starterCode": "import java.util.*;\nimport java.util.stream.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 18.13 \u2014 Custom FunctionalInterface Definition\n        \n    }\n}"
    },
    {
        "id": "c18-14",
        "chapter": 18,
        "topic": "Streams & Lambdas",
        "difficulty": "medium",
        "title": "Concept 18.14 \u2014 Predicate Composition (and, or, negate)",
        "prompt": [
            "Exercise 18.14: Implement `Predicate Composition (and, or, negate)` using Java 8+ Streams API & Lambda expressions."
        ],
        "io": "Output: Processed stream output for Predicate Composition (and, or, negate)",
        "hint": "Use java.util.stream.Stream and Collectors.",
        "starterCode": "import java.util.*;\nimport java.util.stream.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 18.14 \u2014 Predicate Composition (and, or, negate)\n        \n    }\n}"
    },
    {
        "id": "c18-15",
        "chapter": 18,
        "topic": "Streams & Lambdas",
        "difficulty": "medium",
        "title": "Concept 18.15 \u2014 Function Composition (andThen, compose)",
        "prompt": [
            "Exercise 18.15: Implement `Function Composition (andThen, compose)` using Java 8+ Streams API & Lambda expressions."
        ],
        "io": "Output: Processed stream output for Function Composition (andThen, compose)",
        "hint": "Use java.util.stream.Stream and Collectors.",
        "starterCode": "import java.util.*;\nimport java.util.stream.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 18.15 \u2014 Function Composition (andThen, compose)\n        \n    }\n}"
    },
    {
        "id": "c18-16",
        "chapter": 18,
        "topic": "Streams & Lambdas",
        "difficulty": "medium",
        "title": "Concept 18.16 \u2014 Consumer & Supplier Demonstration",
        "prompt": [
            "Exercise 18.16: Implement `Consumer & Supplier Demonstration` using Java 8+ Streams API & Lambda expressions."
        ],
        "io": "Output: Processed stream output for Consumer & Supplier Demonstration",
        "hint": "Use java.util.stream.Stream and Collectors.",
        "starterCode": "import java.util.*;\nimport java.util.stream.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 18.16 \u2014 Consumer & Supplier Demonstration\n        \n    }\n}"
    },
    {
        "id": "c18-17",
        "chapter": 18,
        "topic": "Streams & Lambdas",
        "difficulty": "medium",
        "title": "Concept 18.17 \u2014 UnaryOperator & BinaryOperator Use",
        "prompt": [
            "Exercise 18.17: Implement `UnaryOperator & BinaryOperator Use` using Java 8+ Streams API & Lambda expressions."
        ],
        "io": "Output: Processed stream output for UnaryOperator & BinaryOperator Use",
        "hint": "Use java.util.stream.Stream and Collectors.",
        "starterCode": "import java.util.*;\nimport java.util.stream.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 18.17 \u2014 UnaryOperator & BinaryOperator Use\n        \n    }\n}"
    },
    {
        "id": "c18-18",
        "chapter": 18,
        "topic": "Streams & Lambdas",
        "difficulty": "medium",
        "title": "Concept 18.18 \u2014 Optional Type Handling (orElse, map)",
        "prompt": [
            "Exercise 18.18: Implement `Optional Type Handling (orElse, map)` using Java 8+ Streams API & Lambda expressions."
        ],
        "io": "Output: Processed stream output for Optional Type Handling (orElse, map)",
        "hint": "Use java.util.stream.Stream and Collectors.",
        "starterCode": "import java.util.*;\nimport java.util.stream.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 18.18 \u2014 Optional Type Handling (orElse, map)\n        \n    }\n}"
    },
    {
        "id": "c18-19",
        "chapter": 18,
        "topic": "Streams & Lambdas",
        "difficulty": "medium",
        "title": "Concept 18.19 \u2014 Finding First Matching Element (findFirst)",
        "prompt": [
            "Exercise 18.19: Implement `Finding First Matching Element (findFirst)` using Java 8+ Streams API & Lambda expressions."
        ],
        "io": "Output: Processed stream output for Finding First Matching Element (findFirst)",
        "hint": "Use java.util.stream.Stream and Collectors.",
        "starterCode": "import java.util.*;\nimport java.util.stream.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 18.19 \u2014 Finding First Matching Element (findFirst)\n        \n    }\n}"
    },
    {
        "id": "c18-20",
        "chapter": 18,
        "topic": "Streams & Lambdas",
        "difficulty": "medium",
        "title": "Concept 18.20 \u2014 Checking Conditions (anyMatch, allMatch)",
        "prompt": [
            "Exercise 18.20: Implement `Checking Conditions (anyMatch, allMatch)` using Java 8+ Streams API & Lambda expressions."
        ],
        "io": "Output: Processed stream output for Checking Conditions (anyMatch, allMatch)",
        "hint": "Use java.util.stream.Stream and Collectors.",
        "starterCode": "import java.util.*;\nimport java.util.stream.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 18.20 \u2014 Checking Conditions (anyMatch, allMatch)\n        \n    }\n}"
    },
    {
        "id": "c18-21",
        "chapter": 18,
        "topic": "Streams & Lambdas",
        "difficulty": "medium",
        "title": "Concept 18.21 \u2014 Custom Comparator with Stream.sorted",
        "prompt": [
            "Exercise 18.21: Implement `Custom Comparator with Stream.sorted` using Java 8+ Streams API & Lambda expressions."
        ],
        "io": "Output: Processed stream output for Custom Comparator with Stream.sorted",
        "hint": "Use java.util.stream.Stream and Collectors.",
        "starterCode": "import java.util.*;\nimport java.util.stream.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 18.21 \u2014 Custom Comparator with Stream.sorted\n        \n    }\n}"
    },
    {
        "id": "c18-22",
        "chapter": 18,
        "topic": "Streams & Lambdas",
        "difficulty": "medium",
        "title": "Concept 18.22 \u2014 Partitioning Data with Collectors.partitioningBy",
        "prompt": [
            "Exercise 18.22: Implement `Partitioning Data with Collectors.partitioningBy` using Java 8+ Streams API & Lambda expressions."
        ],
        "io": "Output: Processed stream output for Partitioning Data with Collectors.partitioningBy",
        "hint": "Use java.util.stream.Stream and Collectors.",
        "starterCode": "import java.util.*;\nimport java.util.stream.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 18.22 \u2014 Partitioning Data with Collectors.partitioningBy\n        \n    }\n}"
    },
    {
        "id": "c18-23",
        "chapter": 18,
        "topic": "Streams & Lambdas",
        "difficulty": "hard",
        "title": "Concept 18.23 \u2014 Summarizing Ints with Collectors.summarizingInt",
        "prompt": [
            "Exercise 18.23: Implement `Summarizing Ints with Collectors.summarizingInt` using Java 8+ Streams API & Lambda expressions."
        ],
        "io": "Output: Processed stream output for Summarizing Ints with Collectors.summarizingInt",
        "hint": "Use java.util.stream.Stream and Collectors.",
        "starterCode": "import java.util.*;\nimport java.util.stream.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 18.23 \u2014 Summarizing Ints with Collectors.summarizingInt\n        \n    }\n}"
    },
    {
        "id": "c18-24",
        "chapter": 18,
        "topic": "Streams & Lambdas",
        "difficulty": "hard",
        "title": "Concept 18.24 \u2014 Creating Custom Collector",
        "prompt": [
            "Exercise 18.24: Implement `Creating Custom Collector` using Java 8+ Streams API & Lambda expressions."
        ],
        "io": "Output: Processed stream output for Creating Custom Collector",
        "hint": "Use java.util.stream.Stream and Collectors.",
        "starterCode": "import java.util.*;\nimport java.util.stream.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 18.24 \u2014 Creating Custom Collector\n        \n    }\n}"
    },
    {
        "id": "c18-25",
        "chapter": 18,
        "topic": "Streams & Lambdas",
        "difficulty": "hard",
        "title": "Concept 18.25 \u2014 Stream Infinite Generator (Stream.generate)",
        "prompt": [
            "Exercise 18.25: Implement `Stream Infinite Generator (Stream.generate)` using Java 8+ Streams API & Lambda expressions."
        ],
        "io": "Output: Processed stream output for Stream Infinite Generator (Stream.generate)",
        "hint": "Use java.util.stream.Stream and Collectors.",
        "starterCode": "import java.util.*;\nimport java.util.stream.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 18.25 \u2014 Stream Infinite Generator (Stream.generate)\n        \n    }\n}"
    },
    {
        "id": "c18-26",
        "chapter": 18,
        "topic": "Streams & Lambdas",
        "difficulty": "hard",
        "title": "Concept 18.26 \u2014 Stream Iterate Counter",
        "prompt": [
            "Exercise 18.26: Implement `Stream Iterate Counter` using Java 8+ Streams API & Lambda expressions."
        ],
        "io": "Output: Processed stream output for Stream Iterate Counter",
        "hint": "Use java.util.stream.Stream and Collectors.",
        "starterCode": "import java.util.*;\nimport java.util.stream.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 18.26 \u2014 Stream Iterate Counter\n        \n    }\n}"
    },
    {
        "id": "c18-27",
        "chapter": 18,
        "topic": "Streams & Lambdas",
        "difficulty": "hard",
        "title": "Concept 18.27 \u2014 Lazy Evaluation Demonstration",
        "prompt": [
            "Exercise 18.27: Implement `Lazy Evaluation Demonstration` using Java 8+ Streams API & Lambda expressions."
        ],
        "io": "Output: Processed stream output for Lazy Evaluation Demonstration",
        "hint": "Use java.util.stream.Stream and Collectors.",
        "starterCode": "import java.util.*;\nimport java.util.stream.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 18.27 \u2014 Lazy Evaluation Demonstration\n        \n    }\n}"
    },
    {
        "id": "c18-28",
        "chapter": 18,
        "topic": "Streams & Lambdas",
        "difficulty": "hard",
        "title": "Concept 18.28 \u2014 Filtering Null Values with Streams",
        "prompt": [
            "Exercise 18.28: Implement `Filtering Null Values with Streams` using Java 8+ Streams API & Lambda expressions."
        ],
        "io": "Output: Processed stream output for Filtering Null Values with Streams",
        "hint": "Use java.util.stream.Stream and Collectors.",
        "starterCode": "import java.util.*;\nimport java.util.stream.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 18.28 \u2014 Filtering Null Values with Streams\n        \n    }\n}"
    },
    {
        "id": "c18-29",
        "chapter": 18,
        "topic": "Streams & Lambdas",
        "difficulty": "hard",
        "title": "Concept 18.29 \u2014 Top N Elements with limit & skip",
        "prompt": [
            "Exercise 18.29: Implement `Top N Elements with limit & skip` using Java 8+ Streams API & Lambda expressions."
        ],
        "io": "Output: Processed stream output for Top N Elements with limit & skip",
        "hint": "Use java.util.stream.Stream and Collectors.",
        "starterCode": "import java.util.*;\nimport java.util.stream.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 18.29 \u2014 Top N Elements with limit & skip\n        \n    }\n}"
    },
    {
        "id": "c18-30",
        "chapter": 18,
        "topic": "Streams & Lambdas",
        "difficulty": "hard",
        "title": "Concept 18.30 \u2014 Complex Stream ETL Transformation",
        "prompt": [
            "Exercise 18.30: Implement `Complex Stream ETL Transformation` using Java 8+ Streams API & Lambda expressions."
        ],
        "io": "Output: Processed stream output for Complex Stream ETL Transformation",
        "hint": "Use java.util.stream.Stream and Collectors.",
        "starterCode": "import java.util.*;\nimport java.util.stream.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 18.30 \u2014 Complex Stream ETL Transformation\n        \n    }\n}"
    },
    {
        "id": "c19-01",
        "chapter": 19,
        "topic": "Concurrency",
        "difficulty": "easy",
        "title": "Concept 19.1 \u2014 Creating Thread by Extending Thread",
        "prompt": [
            "Exercise 19.1: Write concurrent Java code for `Creating Thread by Extending Thread`."
        ],
        "io": "Output: Thread execution logs for Creating Thread by Extending Thread",
        "hint": "Use java.lang.Thread, java.util.concurrent.*.",
        "starterCode": "import java.util.concurrent.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 19.1 \u2014 Creating Thread by Extending Thread\n        \n    }\n}"
    },
    {
        "id": "c19-02",
        "chapter": 19,
        "topic": "Concurrency",
        "difficulty": "easy",
        "title": "Concept 19.2 \u2014 Creating Thread with Runnable Interface",
        "prompt": [
            "Exercise 19.2: Write concurrent Java code for `Creating Thread with Runnable Interface`."
        ],
        "io": "Output: Thread execution logs for Creating Thread with Runnable Interface",
        "hint": "Use java.lang.Thread, java.util.concurrent.*.",
        "starterCode": "import java.util.concurrent.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 19.2 \u2014 Creating Thread with Runnable Interface\n        \n    }\n}"
    },
    {
        "id": "c19-03",
        "chapter": 19,
        "topic": "Concurrency",
        "difficulty": "easy",
        "title": "Concept 19.3 \u2014 Thread Sleep & Join Coordination",
        "prompt": [
            "Exercise 19.3: Write concurrent Java code for `Thread Sleep & Join Coordination`."
        ],
        "io": "Output: Thread execution logs for Thread Sleep & Join Coordination",
        "hint": "Use java.lang.Thread, java.util.concurrent.*.",
        "starterCode": "import java.util.concurrent.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 19.3 \u2014 Thread Sleep & Join Coordination\n        \n    }\n}"
    },
    {
        "id": "c19-04",
        "chapter": 19,
        "topic": "Concurrency",
        "difficulty": "easy",
        "title": "Concept 19.4 \u2014 Synchronized Method Guarding Counter",
        "prompt": [
            "Exercise 19.4: Write concurrent Java code for `Synchronized Method Guarding Counter`."
        ],
        "io": "Output: Thread execution logs for Synchronized Method Guarding Counter",
        "hint": "Use java.lang.Thread, java.util.concurrent.*.",
        "starterCode": "import java.util.concurrent.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 19.4 \u2014 Synchronized Method Guarding Counter\n        \n    }\n}"
    },
    {
        "id": "c19-05",
        "chapter": 19,
        "topic": "Concurrency",
        "difficulty": "easy",
        "title": "Concept 19.5 \u2014 Synchronized Block for Critical Section",
        "prompt": [
            "Exercise 19.5: Write concurrent Java code for `Synchronized Block for Critical Section`."
        ],
        "io": "Output: Thread execution logs for Synchronized Block for Critical Section",
        "hint": "Use java.lang.Thread, java.util.concurrent.*.",
        "starterCode": "import java.util.concurrent.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 19.5 \u2014 Synchronized Block for Critical Section\n        \n    }\n}"
    },
    {
        "id": "c19-06",
        "chapter": 19,
        "topic": "Concurrency",
        "difficulty": "easy",
        "title": "Concept 19.6 \u2014 Volatile Keyword Flag Signal",
        "prompt": [
            "Exercise 19.6: Write concurrent Java code for `Volatile Keyword Flag Signal`."
        ],
        "io": "Output: Thread execution logs for Volatile Keyword Flag Signal",
        "hint": "Use java.lang.Thread, java.util.concurrent.*.",
        "starterCode": "import java.util.concurrent.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 19.6 \u2014 Volatile Keyword Flag Signal\n        \n    }\n}"
    },
    {
        "id": "c19-07",
        "chapter": 19,
        "topic": "Concurrency",
        "difficulty": "easy",
        "title": "Concept 19.7 \u2014 AtomicInteger Concurrent Increment",
        "prompt": [
            "Exercise 19.7: Write concurrent Java code for `AtomicInteger Concurrent Increment`."
        ],
        "io": "Output: Thread execution logs for AtomicInteger Concurrent Increment",
        "hint": "Use java.lang.Thread, java.util.concurrent.*.",
        "starterCode": "import java.util.concurrent.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 19.7 \u2014 AtomicInteger Concurrent Increment\n        \n    }\n}"
    },
    {
        "id": "c19-08",
        "chapter": 19,
        "topic": "Concurrency",
        "difficulty": "easy",
        "title": "Concept 19.8 \u2014 ReentrantLock Explicit Lock Guard",
        "prompt": [
            "Exercise 19.8: Write concurrent Java code for `ReentrantLock Explicit Lock Guard`."
        ],
        "io": "Output: Thread execution logs for ReentrantLock Explicit Lock Guard",
        "hint": "Use java.lang.Thread, java.util.concurrent.*.",
        "starterCode": "import java.util.concurrent.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 19.8 \u2014 ReentrantLock Explicit Lock Guard\n        \n    }\n}"
    },
    {
        "id": "c19-09",
        "chapter": 19,
        "topic": "Concurrency",
        "difficulty": "easy",
        "title": "Concept 19.9 \u2014 Condition Variables (await/signal)",
        "prompt": [
            "Exercise 19.9: Write concurrent Java code for `Condition Variables (await/signal)`."
        ],
        "io": "Output: Thread execution logs for Condition Variables (await/signal)",
        "hint": "Use java.lang.Thread, java.util.concurrent.*.",
        "starterCode": "import java.util.concurrent.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 19.9 \u2014 Condition Variables (await/signal)\n        \n    }\n}"
    },
    {
        "id": "c19-10",
        "chapter": 19,
        "topic": "Concurrency",
        "difficulty": "easy",
        "title": "Concept 19.10 \u2014 Producer-Consumer with ArrayBlockingQueue",
        "prompt": [
            "Exercise 19.10: Write concurrent Java code for `Producer-Consumer with ArrayBlockingQueue`."
        ],
        "io": "Output: Thread execution logs for Producer-Consumer with ArrayBlockingQueue",
        "hint": "Use java.lang.Thread, java.util.concurrent.*.",
        "starterCode": "import java.util.concurrent.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 19.10 \u2014 Producer-Consumer with ArrayBlockingQueue\n        \n    }\n}"
    },
    {
        "id": "c19-11",
        "chapter": 19,
        "topic": "Concurrency",
        "difficulty": "medium",
        "title": "Concept 19.11 \u2014 Thread Pool Executor (FixedThreadPool)",
        "prompt": [
            "Exercise 19.11: Write concurrent Java code for `Thread Pool Executor (FixedThreadPool)`."
        ],
        "io": "Output: Thread execution logs for Thread Pool Executor (FixedThreadPool)",
        "hint": "Use java.lang.Thread, java.util.concurrent.*.",
        "starterCode": "import java.util.concurrent.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 19.11 \u2014 Thread Pool Executor (FixedThreadPool)\n        \n    }\n}"
    },
    {
        "id": "c19-12",
        "chapter": 19,
        "topic": "Concurrency",
        "difficulty": "medium",
        "title": "Concept 19.12 \u2014 ScheduledExecutorService Periodic Task",
        "prompt": [
            "Exercise 19.12: Write concurrent Java code for `ScheduledExecutorService Periodic Task`."
        ],
        "io": "Output: Thread execution logs for ScheduledExecutorService Periodic Task",
        "hint": "Use java.lang.Thread, java.util.concurrent.*.",
        "starterCode": "import java.util.concurrent.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 19.12 \u2014 ScheduledExecutorService Periodic Task\n        \n    }\n}"
    },
    {
        "id": "c19-13",
        "chapter": 19,
        "topic": "Concurrency",
        "difficulty": "medium",
        "title": "Concept 19.13 \u2014 Callable & Future Async Return",
        "prompt": [
            "Exercise 19.13: Write concurrent Java code for `Callable & Future Async Return`."
        ],
        "io": "Output: Thread execution logs for Callable & Future Async Return",
        "hint": "Use java.lang.Thread, java.util.concurrent.*.",
        "starterCode": "import java.util.concurrent.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 19.13 \u2014 Callable & Future Async Return\n        \n    }\n}"
    },
    {
        "id": "c19-14",
        "chapter": 19,
        "topic": "Concurrency",
        "difficulty": "medium",
        "title": "Concept 19.14 \u2014 CompletableFuture Async Pipeline",
        "prompt": [
            "Exercise 19.14: Write concurrent Java code for `CompletableFuture Async Pipeline`."
        ],
        "io": "Output: Thread execution logs for CompletableFuture Async Pipeline",
        "hint": "Use java.lang.Thread, java.util.concurrent.*.",
        "starterCode": "import java.util.concurrent.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 19.14 \u2014 CompletableFuture Async Pipeline\n        \n    }\n}"
    },
    {
        "id": "c19-15",
        "chapter": 19,
        "topic": "Concurrency",
        "difficulty": "medium",
        "title": "Concept 19.15 \u2014 CountDownLatch Barrier Coordination",
        "prompt": [
            "Exercise 19.15: Write concurrent Java code for `CountDownLatch Barrier Coordination`."
        ],
        "io": "Output: Thread execution logs for CountDownLatch Barrier Coordination",
        "hint": "Use java.lang.Thread, java.util.concurrent.*.",
        "starterCode": "import java.util.concurrent.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 19.15 \u2014 CountDownLatch Barrier Coordination\n        \n    }\n}"
    },
    {
        "id": "c19-16",
        "chapter": 19,
        "topic": "Concurrency",
        "difficulty": "medium",
        "title": "Concept 19.16 \u2014 CyclicBarrier Synchronizer",
        "prompt": [
            "Exercise 19.16: Write concurrent Java code for `CyclicBarrier Synchronizer`."
        ],
        "io": "Output: Thread execution logs for CyclicBarrier Synchronizer",
        "hint": "Use java.lang.Thread, java.util.concurrent.*.",
        "starterCode": "import java.util.concurrent.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 19.16 \u2014 CyclicBarrier Synchronizer\n        \n    }\n}"
    },
    {
        "id": "c19-17",
        "chapter": 19,
        "topic": "Concurrency",
        "difficulty": "medium",
        "title": "Concept 19.17 \u2014 Semaphore Resource Pool Control",
        "prompt": [
            "Exercise 19.17: Write concurrent Java code for `Semaphore Resource Pool Control`."
        ],
        "io": "Output: Thread execution logs for Semaphore Resource Pool Control",
        "hint": "Use java.lang.Thread, java.util.concurrent.*.",
        "starterCode": "import java.util.concurrent.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 19.17 \u2014 Semaphore Resource Pool Control\n        \n    }\n}"
    },
    {
        "id": "c19-18",
        "chapter": 19,
        "topic": "Concurrency",
        "difficulty": "medium",
        "title": "Concept 19.18 \u2014 ConcurrentHashMap Thread-Safe Map",
        "prompt": [
            "Exercise 19.18: Write concurrent Java code for `ConcurrentHashMap Thread-Safe Map`."
        ],
        "io": "Output: Thread execution logs for ConcurrentHashMap Thread-Safe Map",
        "hint": "Use java.lang.Thread, java.util.concurrent.*.",
        "starterCode": "import java.util.concurrent.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 19.18 \u2014 ConcurrentHashMap Thread-Safe Map\n        \n    }\n}"
    },
    {
        "id": "c19-19",
        "chapter": 19,
        "topic": "Concurrency",
        "difficulty": "medium",
        "title": "Concept 19.19 \u2014 CopyOnWriteArrayList Thread-Safe List",
        "prompt": [
            "Exercise 19.19: Write concurrent Java code for `CopyOnWriteArrayList Thread-Safe List`."
        ],
        "io": "Output: Thread execution logs for CopyOnWriteArrayList Thread-Safe List",
        "hint": "Use java.lang.Thread, java.util.concurrent.*.",
        "starterCode": "import java.util.concurrent.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 19.19 \u2014 CopyOnWriteArrayList Thread-Safe List\n        \n    }\n}"
    },
    {
        "id": "c19-20",
        "chapter": 19,
        "topic": "Concurrency",
        "difficulty": "medium",
        "title": "Concept 19.20 \u2014 ReadWriteLock Shared Read Lock",
        "prompt": [
            "Exercise 19.20: Write concurrent Java code for `ReadWriteLock Shared Read Lock`."
        ],
        "io": "Output: Thread execution logs for ReadWriteLock Shared Read Lock",
        "hint": "Use java.lang.Thread, java.util.concurrent.*.",
        "starterCode": "import java.util.concurrent.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 19.20 \u2014 ReadWriteLock Shared Read Lock\n        \n    }\n}"
    },
    {
        "id": "c19-21",
        "chapter": 19,
        "topic": "Concurrency",
        "difficulty": "medium",
        "title": "Concept 19.21 \u2014 Thread Local Storage (ThreadLocal)",
        "prompt": [
            "Exercise 19.21: Write concurrent Java code for `Thread Local Storage (ThreadLocal)`."
        ],
        "io": "Output: Thread execution logs for Thread Local Storage (ThreadLocal)",
        "hint": "Use java.lang.Thread, java.util.concurrent.*.",
        "starterCode": "import java.util.concurrent.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 19.21 \u2014 Thread Local Storage (ThreadLocal)\n        \n    }\n}"
    },
    {
        "id": "c19-22",
        "chapter": 19,
        "topic": "Concurrency",
        "difficulty": "medium",
        "title": "Concept 19.22 \u2014 Deadlock Simulation & Detection",
        "prompt": [
            "Exercise 19.22: Write concurrent Java code for `Deadlock Simulation & Detection`."
        ],
        "io": "Output: Thread execution logs for Deadlock Simulation & Detection",
        "hint": "Use java.lang.Thread, java.util.concurrent.*.",
        "starterCode": "import java.util.concurrent.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 19.22 \u2014 Deadlock Simulation & Detection\n        \n    }\n}"
    },
    {
        "id": "c19-23",
        "chapter": 19,
        "topic": "Concurrency",
        "difficulty": "hard",
        "title": "Concept 19.23 \u2014 Livelock & Starvation Demo",
        "prompt": [
            "Exercise 19.23: Write concurrent Java code for `Livelock & Starvation Demo`."
        ],
        "io": "Output: Thread execution logs for Livelock & Starvation Demo",
        "hint": "Use java.lang.Thread, java.util.concurrent.*.",
        "starterCode": "import java.util.concurrent.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 19.23 \u2014 Livelock & Starvation Demo\n        \n    }\n}"
    },
    {
        "id": "c19-24",
        "chapter": 19,
        "topic": "Concurrency",
        "difficulty": "hard",
        "title": "Concept 19.24 \u2014 Fork/Join Framework Parallel Computing",
        "prompt": [
            "Exercise 19.24: Write concurrent Java code for `Fork/Join Framework Parallel Computing`."
        ],
        "io": "Output: Thread execution logs for Fork/Join Framework Parallel Computing",
        "hint": "Use java.lang.Thread, java.util.concurrent.*.",
        "starterCode": "import java.util.concurrent.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 19.24 \u2014 Fork/Join Framework Parallel Computing\n        \n    }\n}"
    },
    {
        "id": "c19-25",
        "chapter": 19,
        "topic": "Concurrency",
        "difficulty": "hard",
        "title": "Concept 19.25 \u2014 Work-Stealing Pool Execution",
        "prompt": [
            "Exercise 19.25: Write concurrent Java code for `Work-Stealing Pool Execution`."
        ],
        "io": "Output: Thread execution logs for Work-Stealing Pool Execution",
        "hint": "Use java.lang.Thread, java.util.concurrent.*.",
        "starterCode": "import java.util.concurrent.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 19.25 \u2014 Work-Stealing Pool Execution\n        \n    }\n}"
    },
    {
        "id": "c19-26",
        "chapter": 19,
        "topic": "Concurrency",
        "difficulty": "hard",
        "title": "Concept 19.26 \u2014 Phaser Advance Coordination",
        "prompt": [
            "Exercise 19.26: Write concurrent Java code for `Phaser Advance Coordination`."
        ],
        "io": "Output: Thread execution logs for Phaser Advance Coordination",
        "hint": "Use java.lang.Thread, java.util.concurrent.*.",
        "starterCode": "import java.util.concurrent.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 19.26 \u2014 Phaser Advance Coordination\n        \n    }\n}"
    },
    {
        "id": "c19-27",
        "chapter": 19,
        "topic": "Concurrency",
        "difficulty": "hard",
        "title": "Concept 19.27 \u2014 Thread Interrupt Signal Handling",
        "prompt": [
            "Exercise 19.27: Write concurrent Java code for `Thread Interrupt Signal Handling`."
        ],
        "io": "Output: Thread execution logs for Thread Interrupt Signal Handling",
        "hint": "Use java.lang.Thread, java.util.concurrent.*.",
        "starterCode": "import java.util.concurrent.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 19.27 \u2014 Thread Interrupt Signal Handling\n        \n    }\n}"
    },
    {
        "id": "c19-28",
        "chapter": 19,
        "topic": "Concurrency",
        "difficulty": "hard",
        "title": "Concept 19.28 \u2014 Lock-Free Lockless Stack",
        "prompt": [
            "Exercise 19.28: Write concurrent Java code for `Lock-Free Lockless Stack`."
        ],
        "io": "Output: Thread execution logs for Lock-Free Lockless Stack",
        "hint": "Use java.lang.Thread, java.util.concurrent.*.",
        "starterCode": "import java.util.concurrent.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 19.28 \u2014 Lock-Free Lockless Stack\n        \n    }\n}"
    },
    {
        "id": "c19-29",
        "chapter": 19,
        "topic": "Concurrency",
        "difficulty": "hard",
        "title": "Concept 19.29 \u2014 Concurrent SkipList Map Lookup",
        "prompt": [
            "Exercise 19.29: Write concurrent Java code for `Concurrent SkipList Map Lookup`."
        ],
        "io": "Output: Thread execution logs for Concurrent SkipList Map Lookup",
        "hint": "Use java.lang.Thread, java.util.concurrent.*.",
        "starterCode": "import java.util.concurrent.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 19.29 \u2014 Concurrent SkipList Map Lookup\n        \n    }\n}"
    },
    {
        "id": "c19-30",
        "chapter": 19,
        "topic": "Concurrency",
        "difficulty": "hard",
        "title": "Concept 19.30 \u2014 Asynchronous Task Benchmark",
        "prompt": [
            "Exercise 19.30: Write concurrent Java code for `Asynchronous Task Benchmark`."
        ],
        "io": "Output: Thread execution logs for Asynchronous Task Benchmark",
        "hint": "Use java.lang.Thread, java.util.concurrent.*.",
        "starterCode": "import java.util.concurrent.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO: Write your code for Concept 19.30 \u2014 Asynchronous Task Benchmark\n        \n    }\n}"
    },
    {
        "id": "c20-01",
        "chapter": 20,
        "topic": "Design Patterns",
        "difficulty": "easy",
        "title": "Concept 20.1 \u2014 Singleton Pattern (Thread-Safe Bill Pugh)",
        "prompt": [
            "Exercise 20.1: Implement the `Singleton Pattern (Thread-Safe Bill Pugh)` in Java."
        ],
        "io": "Output: Design pattern execution for Singleton Pattern (Thread-Safe Bill Pugh)",
        "hint": "Demonstrate clean architectural abstraction.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 20.1 \u2014 Singleton Pattern (Thread-Safe Bill Pugh)\n        \n    }\n}"
    },
    {
        "id": "c20-02",
        "chapter": 20,
        "topic": "Design Patterns",
        "difficulty": "easy",
        "title": "Concept 20.2 \u2014 Factory Method Pattern (Shape Factory)",
        "prompt": [
            "Exercise 20.2: Implement the `Factory Method Pattern (Shape Factory)` in Java."
        ],
        "io": "Output: Design pattern execution for Factory Method Pattern (Shape Factory)",
        "hint": "Demonstrate clean architectural abstraction.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 20.2 \u2014 Factory Method Pattern (Shape Factory)\n        \n    }\n}"
    },
    {
        "id": "c20-03",
        "chapter": 20,
        "topic": "Design Patterns",
        "difficulty": "easy",
        "title": "Concept 20.3 \u2014 Abstract Factory Pattern (UI Theme)",
        "prompt": [
            "Exercise 20.3: Implement the `Abstract Factory Pattern (UI Theme)` in Java."
        ],
        "io": "Output: Design pattern execution for Abstract Factory Pattern (UI Theme)",
        "hint": "Demonstrate clean architectural abstraction.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 20.3 \u2014 Abstract Factory Pattern (UI Theme)\n        \n    }\n}"
    },
    {
        "id": "c20-04",
        "chapter": 20,
        "topic": "Design Patterns",
        "difficulty": "easy",
        "title": "Concept 20.4 \u2014 Builder Pattern (Complex Order Construction)",
        "prompt": [
            "Exercise 20.4: Implement the `Builder Pattern (Complex Order Construction)` in Java."
        ],
        "io": "Output: Design pattern execution for Builder Pattern (Complex Order Construction)",
        "hint": "Demonstrate clean architectural abstraction.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 20.4 \u2014 Builder Pattern (Complex Order Construction)\n        \n    }\n}"
    },
    {
        "id": "c20-05",
        "chapter": 20,
        "topic": "Design Patterns",
        "difficulty": "easy",
        "title": "Concept 20.5 \u2014 Prototype Pattern (Object Cloning)",
        "prompt": [
            "Exercise 20.5: Implement the `Prototype Pattern (Object Cloning)` in Java."
        ],
        "io": "Output: Design pattern execution for Prototype Pattern (Object Cloning)",
        "hint": "Demonstrate clean architectural abstraction.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 20.5 \u2014 Prototype Pattern (Object Cloning)\n        \n    }\n}"
    },
    {
        "id": "c20-06",
        "chapter": 20,
        "topic": "Design Patterns",
        "difficulty": "easy",
        "title": "Concept 20.6 \u2014 Adapter Pattern (Legacy Interface Integration)",
        "prompt": [
            "Exercise 20.6: Implement the `Adapter Pattern (Legacy Interface Integration)` in Java."
        ],
        "io": "Output: Design pattern execution for Adapter Pattern (Legacy Interface Integration)",
        "hint": "Demonstrate clean architectural abstraction.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 20.6 \u2014 Adapter Pattern (Legacy Interface Integration)\n        \n    }\n}"
    },
    {
        "id": "c20-07",
        "chapter": 20,
        "topic": "Design Patterns",
        "difficulty": "easy",
        "title": "Concept 20.7 \u2014 Bridge Pattern (Device and Remote Control)",
        "prompt": [
            "Exercise 20.7: Implement the `Bridge Pattern (Device and Remote Control)` in Java."
        ],
        "io": "Output: Design pattern execution for Bridge Pattern (Device and Remote Control)",
        "hint": "Demonstrate clean architectural abstraction.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 20.7 \u2014 Bridge Pattern (Device and Remote Control)\n        \n    }\n}"
    },
    {
        "id": "c20-08",
        "chapter": 20,
        "topic": "Design Patterns",
        "difficulty": "easy",
        "title": "Concept 20.8 \u2014 Composite Pattern (File System Tree)",
        "prompt": [
            "Exercise 20.8: Implement the `Composite Pattern (File System Tree)` in Java."
        ],
        "io": "Output: Design pattern execution for Composite Pattern (File System Tree)",
        "hint": "Demonstrate clean architectural abstraction.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 20.8 \u2014 Composite Pattern (File System Tree)\n        \n    }\n}"
    },
    {
        "id": "c20-09",
        "chapter": 20,
        "topic": "Design Patterns",
        "difficulty": "easy",
        "title": "Concept 20.9 \u2014 Decorator Pattern (Coffee Addons)",
        "prompt": [
            "Exercise 20.9: Implement the `Decorator Pattern (Coffee Addons)` in Java."
        ],
        "io": "Output: Design pattern execution for Decorator Pattern (Coffee Addons)",
        "hint": "Demonstrate clean architectural abstraction.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 20.9 \u2014 Decorator Pattern (Coffee Addons)\n        \n    }\n}"
    },
    {
        "id": "c20-10",
        "chapter": 20,
        "topic": "Design Patterns",
        "difficulty": "easy",
        "title": "Concept 20.10 \u2014 Facade Pattern (Home Theater Controller)",
        "prompt": [
            "Exercise 20.10: Implement the `Facade Pattern (Home Theater Controller)` in Java."
        ],
        "io": "Output: Design pattern execution for Facade Pattern (Home Theater Controller)",
        "hint": "Demonstrate clean architectural abstraction.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 20.10 \u2014 Facade Pattern (Home Theater Controller)\n        \n    }\n}"
    },
    {
        "id": "c20-11",
        "chapter": 20,
        "topic": "Design Patterns",
        "difficulty": "medium",
        "title": "Concept 20.11 \u2014 Flyweight Pattern (Text Character Rendering)",
        "prompt": [
            "Exercise 20.11: Implement the `Flyweight Pattern (Text Character Rendering)` in Java."
        ],
        "io": "Output: Design pattern execution for Flyweight Pattern (Text Character Rendering)",
        "hint": "Demonstrate clean architectural abstraction.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 20.11 \u2014 Flyweight Pattern (Text Character Rendering)\n        \n    }\n}"
    },
    {
        "id": "c20-12",
        "chapter": 20,
        "topic": "Design Patterns",
        "difficulty": "medium",
        "title": "Concept 20.12 \u2014 Proxy Pattern (Image Lazy Loading)",
        "prompt": [
            "Exercise 20.12: Implement the `Proxy Pattern (Image Lazy Loading)` in Java."
        ],
        "io": "Output: Design pattern execution for Proxy Pattern (Image Lazy Loading)",
        "hint": "Demonstrate clean architectural abstraction.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 20.12 \u2014 Proxy Pattern (Image Lazy Loading)\n        \n    }\n}"
    },
    {
        "id": "c20-13",
        "chapter": 20,
        "topic": "Design Patterns",
        "difficulty": "medium",
        "title": "Concept 20.13 \u2014 Chain of Responsibility (Logger Filter)",
        "prompt": [
            "Exercise 20.13: Implement the `Chain of Responsibility (Logger Filter)` in Java."
        ],
        "io": "Output: Design pattern execution for Chain of Responsibility (Logger Filter)",
        "hint": "Demonstrate clean architectural abstraction.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 20.13 \u2014 Chain of Responsibility (Logger Filter)\n        \n    }\n}"
    },
    {
        "id": "c20-14",
        "chapter": 20,
        "topic": "Design Patterns",
        "difficulty": "medium",
        "title": "Concept 20.14 \u2014 Command Pattern (Remote Control Buttons)",
        "prompt": [
            "Exercise 20.14: Implement the `Command Pattern (Remote Control Buttons)` in Java."
        ],
        "io": "Output: Design pattern execution for Command Pattern (Remote Control Buttons)",
        "hint": "Demonstrate clean architectural abstraction.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 20.14 \u2014 Command Pattern (Remote Control Buttons)\n        \n    }\n}"
    },
    {
        "id": "c20-15",
        "chapter": 20,
        "topic": "Design Patterns",
        "difficulty": "medium",
        "title": "Concept 20.15 \u2014 Interpreter Pattern (Math Expression)",
        "prompt": [
            "Exercise 20.15: Implement the `Interpreter Pattern (Math Expression)` in Java."
        ],
        "io": "Output: Design pattern execution for Interpreter Pattern (Math Expression)",
        "hint": "Demonstrate clean architectural abstraction.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 20.15 \u2014 Interpreter Pattern (Math Expression)\n        \n    }\n}"
    },
    {
        "id": "c20-16",
        "chapter": 20,
        "topic": "Design Patterns",
        "difficulty": "medium",
        "title": "Concept 20.16 \u2014 Iterator Pattern (Custom Collection Iterator)",
        "prompt": [
            "Exercise 20.16: Implement the `Iterator Pattern (Custom Collection Iterator)` in Java."
        ],
        "io": "Output: Design pattern execution for Iterator Pattern (Custom Collection Iterator)",
        "hint": "Demonstrate clean architectural abstraction.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 20.16 \u2014 Iterator Pattern (Custom Collection Iterator)\n        \n    }\n}"
    },
    {
        "id": "c20-17",
        "chapter": 20,
        "topic": "Design Patterns",
        "difficulty": "medium",
        "title": "Concept 20.17 \u2014 Mediator Pattern (Chat Room Protocol)",
        "prompt": [
            "Exercise 20.17: Implement the `Mediator Pattern (Chat Room Protocol)` in Java."
        ],
        "io": "Output: Design pattern execution for Mediator Pattern (Chat Room Protocol)",
        "hint": "Demonstrate clean architectural abstraction.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 20.17 \u2014 Mediator Pattern (Chat Room Protocol)\n        \n    }\n}"
    },
    {
        "id": "c20-18",
        "chapter": 20,
        "topic": "Design Patterns",
        "difficulty": "medium",
        "title": "Concept 20.18 \u2014 Memento Pattern (Undo State Recovery)",
        "prompt": [
            "Exercise 20.18: Implement the `Memento Pattern (Undo State Recovery)` in Java."
        ],
        "io": "Output: Design pattern execution for Memento Pattern (Undo State Recovery)",
        "hint": "Demonstrate clean architectural abstraction.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 20.18 \u2014 Memento Pattern (Undo State Recovery)\n        \n    }\n}"
    },
    {
        "id": "c20-19",
        "chapter": 20,
        "topic": "Design Patterns",
        "difficulty": "medium",
        "title": "Concept 20.19 \u2014 Observer Pattern (Event Listener Dispatch)",
        "prompt": [
            "Exercise 20.19: Implement the `Observer Pattern (Event Listener Dispatch)` in Java."
        ],
        "io": "Output: Design pattern execution for Observer Pattern (Event Listener Dispatch)",
        "hint": "Demonstrate clean architectural abstraction.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 20.19 \u2014 Observer Pattern (Event Listener Dispatch)\n        \n    }\n}"
    },
    {
        "id": "c20-20",
        "chapter": 20,
        "topic": "Design Patterns",
        "difficulty": "medium",
        "title": "Concept 20.20 \u2014 State Pattern (Vending Machine States)",
        "prompt": [
            "Exercise 20.20: Implement the `State Pattern (Vending Machine States)` in Java."
        ],
        "io": "Output: Design pattern execution for State Pattern (Vending Machine States)",
        "hint": "Demonstrate clean architectural abstraction.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 20.20 \u2014 State Pattern (Vending Machine States)\n        \n    }\n}"
    },
    {
        "id": "c20-21",
        "chapter": 20,
        "topic": "Design Patterns",
        "difficulty": "medium",
        "title": "Concept 20.21 \u2014 Strategy Pattern (Payment Options)",
        "prompt": [
            "Exercise 20.21: Implement the `Strategy Pattern (Payment Options)` in Java."
        ],
        "io": "Output: Design pattern execution for Strategy Pattern (Payment Options)",
        "hint": "Demonstrate clean architectural abstraction.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 20.21 \u2014 Strategy Pattern (Payment Options)\n        \n    }\n}"
    },
    {
        "id": "c20-22",
        "chapter": 20,
        "topic": "Design Patterns",
        "difficulty": "medium",
        "title": "Concept 20.22 \u2014 Template Method Pattern (Data Parser)",
        "prompt": [
            "Exercise 20.22: Implement the `Template Method Pattern (Data Parser)` in Java."
        ],
        "io": "Output: Design pattern execution for Template Method Pattern (Data Parser)",
        "hint": "Demonstrate clean architectural abstraction.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 20.22 \u2014 Template Method Pattern (Data Parser)\n        \n    }\n}"
    },
    {
        "id": "c20-23",
        "chapter": 20,
        "topic": "Design Patterns",
        "difficulty": "hard",
        "title": "Concept 20.23 \u2014 Visitor Pattern (Document Exporter)",
        "prompt": [
            "Exercise 20.23: Implement the `Visitor Pattern (Document Exporter)` in Java."
        ],
        "io": "Output: Design pattern execution for Visitor Pattern (Document Exporter)",
        "hint": "Demonstrate clean architectural abstraction.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 20.23 \u2014 Visitor Pattern (Document Exporter)\n        \n    }\n}"
    },
    {
        "id": "c20-24",
        "chapter": 20,
        "topic": "Design Patterns",
        "difficulty": "hard",
        "title": "Concept 20.24 \u2014 Dependency Injection Pattern",
        "prompt": [
            "Exercise 20.24: Implement the `Dependency Injection Pattern` in Java."
        ],
        "io": "Output: Design pattern execution for Dependency Injection Pattern",
        "hint": "Demonstrate clean architectural abstraction.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 20.24 \u2014 Dependency Injection Pattern\n        \n    }\n}"
    },
    {
        "id": "c20-25",
        "chapter": 20,
        "topic": "Design Patterns",
        "difficulty": "hard",
        "title": "Concept 20.25 \u2014 Service Locator Pattern",
        "prompt": [
            "Exercise 20.25: Implement the `Service Locator Pattern` in Java."
        ],
        "io": "Output: Design pattern execution for Service Locator Pattern",
        "hint": "Demonstrate clean architectural abstraction.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 20.25 \u2014 Service Locator Pattern\n        \n    }\n}"
    },
    {
        "id": "c20-26",
        "chapter": 20,
        "topic": "Design Patterns",
        "difficulty": "hard",
        "title": "Concept 20.26 \u2014 DAO (Data Access Object) Pattern",
        "prompt": [
            "Exercise 20.26: Implement the `DAO (Data Access Object) Pattern` in Java."
        ],
        "io": "Output: Design pattern execution for DAO (Data Access Object) Pattern",
        "hint": "Demonstrate clean architectural abstraction.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 20.26 \u2014 DAO (Data Access Object) Pattern\n        \n    }\n}"
    },
    {
        "id": "c20-27",
        "chapter": 20,
        "topic": "Design Patterns",
        "difficulty": "hard",
        "title": "Concept 20.27 \u2014 DTO (Data Transfer Object) Pattern",
        "prompt": [
            "Exercise 20.27: Implement the `DTO (Data Transfer Object) Pattern` in Java."
        ],
        "io": "Output: Design pattern execution for DTO (Data Transfer Object) Pattern",
        "hint": "Demonstrate clean architectural abstraction.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 20.27 \u2014 DTO (Data Transfer Object) Pattern\n        \n    }\n}"
    },
    {
        "id": "c20-28",
        "chapter": 20,
        "topic": "Design Patterns",
        "difficulty": "hard",
        "title": "Concept 20.28 \u2014 MVC (Model-View-Controller) Architecture",
        "prompt": [
            "Exercise 20.28: Implement the `MVC (Model-View-Controller) Architecture` in Java."
        ],
        "io": "Output: Design pattern execution for MVC (Model-View-Controller) Architecture",
        "hint": "Demonstrate clean architectural abstraction.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 20.28 \u2014 MVC (Model-View-Controller) Architecture\n        \n    }\n}"
    },
    {
        "id": "c20-29",
        "chapter": 20,
        "topic": "Design Patterns",
        "difficulty": "hard",
        "title": "Concept 20.29 \u2014 Repository Pattern",
        "prompt": [
            "Exercise 20.29: Implement the `Repository Pattern` in Java."
        ],
        "io": "Output: Design pattern execution for Repository Pattern",
        "hint": "Demonstrate clean architectural abstraction.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 20.29 \u2014 Repository Pattern\n        \n    }\n}"
    },
    {
        "id": "c20-30",
        "chapter": 20,
        "topic": "Design Patterns",
        "difficulty": "hard",
        "title": "Concept 20.30 \u2014 Specification Pattern",
        "prompt": [
            "Exercise 20.30: Implement the `Specification Pattern` in Java."
        ],
        "io": "Output: Design pattern execution for Specification Pattern",
        "hint": "Demonstrate clean architectural abstraction.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 20.30 \u2014 Specification Pattern\n        \n    }\n}"
    },
    {
        "id": "c21-01",
        "chapter": 21,
        "topic": "Database",
        "difficulty": "easy",
        "title": "Concept 21.1 \u2014 Simulated JDBC Connection Setup",
        "prompt": [
            "Exercise 21.1: Write Java code simulating `Simulated JDBC Connection Setup`."
        ],
        "io": "Output: DB operation log for Simulated JDBC Connection Setup",
        "hint": "Simulate persistence layer and SQL parameter mapping.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 21.1 \u2014 Simulated JDBC Connection Setup\n        \n    }\n}"
    },
    {
        "id": "c21-02",
        "chapter": 21,
        "topic": "Database",
        "difficulty": "easy",
        "title": "Concept 21.2 \u2014 PreparedStatement Parameter Binding",
        "prompt": [
            "Exercise 21.2: Write Java code simulating `PreparedStatement Parameter Binding`."
        ],
        "io": "Output: DB operation log for PreparedStatement Parameter Binding",
        "hint": "Simulate persistence layer and SQL parameter mapping.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 21.2 \u2014 PreparedStatement Parameter Binding\n        \n    }\n}"
    },
    {
        "id": "c21-03",
        "chapter": 21,
        "topic": "Database",
        "difficulty": "easy",
        "title": "Concept 21.3 \u2014 ResultSet Iteration & Data Mapping",
        "prompt": [
            "Exercise 21.3: Write Java code simulating `ResultSet Iteration & Data Mapping`."
        ],
        "io": "Output: DB operation log for ResultSet Iteration & Data Mapping",
        "hint": "Simulate persistence layer and SQL parameter mapping.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 21.3 \u2014 ResultSet Iteration & Data Mapping\n        \n    }\n}"
    },
    {
        "id": "c21-04",
        "chapter": 21,
        "topic": "Database",
        "difficulty": "easy",
        "title": "Concept 21.4 \u2014 Database Transaction Commit & Rollback",
        "prompt": [
            "Exercise 21.4: Write Java code simulating `Database Transaction Commit & Rollback`."
        ],
        "io": "Output: DB operation log for Database Transaction Commit & Rollback",
        "hint": "Simulate persistence layer and SQL parameter mapping.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 21.4 \u2014 Database Transaction Commit & Rollback\n        \n    }\n}"
    },
    {
        "id": "c21-05",
        "chapter": 21,
        "topic": "Database",
        "difficulty": "easy",
        "title": "Concept 21.5 \u2014 Batch Processing for Bulk Inserts",
        "prompt": [
            "Exercise 21.5: Write Java code simulating `Batch Processing for Bulk Inserts`."
        ],
        "io": "Output: DB operation log for Batch Processing for Bulk Inserts",
        "hint": "Simulate persistence layer and SQL parameter mapping.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 21.5 \u2014 Batch Processing for Bulk Inserts\n        \n    }\n}"
    },
    {
        "id": "c21-06",
        "chapter": 21,
        "topic": "Database",
        "difficulty": "easy",
        "title": "Concept 21.6 \u2014 CallableStatement Stored Procedure",
        "prompt": [
            "Exercise 21.6: Write Java code simulating `CallableStatement Stored Procedure`."
        ],
        "io": "Output: DB operation log for CallableStatement Stored Procedure",
        "hint": "Simulate persistence layer and SQL parameter mapping.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 21.6 \u2014 CallableStatement Stored Procedure\n        \n    }\n}"
    },
    {
        "id": "c21-07",
        "chapter": 21,
        "topic": "Database",
        "difficulty": "easy",
        "title": "Concept 21.7 \u2014 Database Metadata Inspection",
        "prompt": [
            "Exercise 21.7: Write Java code simulating `Database Metadata Inspection`."
        ],
        "io": "Output: DB operation log for Database Metadata Inspection",
        "hint": "Simulate persistence layer and SQL parameter mapping.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 21.7 \u2014 Database Metadata Inspection\n        \n    }\n}"
    },
    {
        "id": "c21-08",
        "chapter": 21,
        "topic": "Database",
        "difficulty": "easy",
        "title": "Concept 21.8 \u2014 Connection Pooling Configuration",
        "prompt": [
            "Exercise 21.8: Write Java code simulating `Connection Pooling Configuration`."
        ],
        "io": "Output: DB operation log for Connection Pooling Configuration",
        "hint": "Simulate persistence layer and SQL parameter mapping.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 21.8 \u2014 Connection Pooling Configuration\n        \n    }\n}"
    },
    {
        "id": "c21-09",
        "chapter": 21,
        "topic": "Database",
        "difficulty": "easy",
        "title": "Concept 21.9 \u2014 SQL Injection Protection Tester",
        "prompt": [
            "Exercise 21.9: Write Java code simulating `SQL Injection Protection Tester`."
        ],
        "io": "Output: DB operation log for SQL Injection Protection Tester",
        "hint": "Simulate persistence layer and SQL parameter mapping.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 21.9 \u2014 SQL Injection Protection Tester\n        \n    }\n}"
    },
    {
        "id": "c21-10",
        "chapter": 21,
        "topic": "Database",
        "difficulty": "easy",
        "title": "Concept 21.10 \u2014 ORM Entity Mapping Simulation",
        "prompt": [
            "Exercise 21.10: Write Java code simulating `ORM Entity Mapping Simulation`."
        ],
        "io": "Output: DB operation log for ORM Entity Mapping Simulation",
        "hint": "Simulate persistence layer and SQL parameter mapping.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 21.10 \u2014 ORM Entity Mapping Simulation\n        \n    }\n}"
    },
    {
        "id": "c21-11",
        "chapter": 21,
        "topic": "Database",
        "difficulty": "medium",
        "title": "Concept 21.11 \u2014 CRUD Operations Ledger",
        "prompt": [
            "Exercise 21.11: Write Java code simulating `CRUD Operations Ledger`."
        ],
        "io": "Output: DB operation log for CRUD Operations Ledger",
        "hint": "Simulate persistence layer and SQL parameter mapping.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 21.11 \u2014 CRUD Operations Ledger\n        \n    }\n}"
    },
    {
        "id": "c21-12",
        "chapter": 21,
        "topic": "Database",
        "difficulty": "medium",
        "title": "Concept 21.12 \u2014 Auto-Generated Key Retrieval",
        "prompt": [
            "Exercise 21.12: Write Java code simulating `Auto-Generated Key Retrieval`."
        ],
        "io": "Output: DB operation log for Auto-Generated Key Retrieval",
        "hint": "Simulate persistence layer and SQL parameter mapping.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 21.12 \u2014 Auto-Generated Key Retrieval\n        \n    }\n}"
    },
    {
        "id": "c21-13",
        "chapter": 21,
        "topic": "Database",
        "difficulty": "medium",
        "title": "Concept 21.13 \u2014 Scrollable & Updatable ResultSet",
        "prompt": [
            "Exercise 21.13: Write Java code simulating `Scrollable & Updatable ResultSet`."
        ],
        "io": "Output: DB operation log for Scrollable & Updatable ResultSet",
        "hint": "Simulate persistence layer and SQL parameter mapping.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 21.13 \u2014 Scrollable & Updatable ResultSet\n        \n    }\n}"
    },
    {
        "id": "c21-14",
        "chapter": 21,
        "topic": "Database",
        "difficulty": "medium",
        "title": "Concept 21.14 \u2014 Blob & Clob Storage Handler",
        "prompt": [
            "Exercise 21.14: Write Java code simulating `Blob & Clob Storage Handler`."
        ],
        "io": "Output: DB operation log for Blob & Clob Storage Handler",
        "hint": "Simulate persistence layer and SQL parameter mapping.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 21.14 \u2014 Blob & Clob Storage Handler\n        \n    }\n}"
    },
    {
        "id": "c21-15",
        "chapter": 21,
        "topic": "Database",
        "difficulty": "medium",
        "title": "Concept 21.15 \u2014 Savepoints in Database Transactions",
        "prompt": [
            "Exercise 21.15: Write Java code simulating `Savepoints in Database Transactions`."
        ],
        "io": "Output: DB operation log for Savepoints in Database Transactions",
        "hint": "Simulate persistence layer and SQL parameter mapping.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 21.15 \u2014 Savepoints in Database Transactions\n        \n    }\n}"
    },
    {
        "id": "c21-16",
        "chapter": 21,
        "topic": "Database",
        "difficulty": "medium",
        "title": "Concept 21.16 \u2014 RowSet Cached Offline Container",
        "prompt": [
            "Exercise 21.16: Write Java code simulating `RowSet Cached Offline Container`."
        ],
        "io": "Output: DB operation log for RowSet Cached Offline Container",
        "hint": "Simulate persistence layer and SQL parameter mapping.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 21.16 \u2014 RowSet Cached Offline Container\n        \n    }\n}"
    },
    {
        "id": "c21-17",
        "chapter": 21,
        "topic": "Database",
        "difficulty": "medium",
        "title": "Concept 21.17 \u2014 Database Index Lookup Simulator",
        "prompt": [
            "Exercise 21.17: Write Java code simulating `Database Index Lookup Simulator`."
        ],
        "io": "Output: DB operation log for Database Index Lookup Simulator",
        "hint": "Simulate persistence layer and SQL parameter mapping.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 21.17 \u2014 Database Index Lookup Simulator\n        \n    }\n}"
    },
    {
        "id": "c21-18",
        "chapter": 21,
        "topic": "Database",
        "difficulty": "medium",
        "title": "Concept 21.18 \u2014 Optimistic Locking Version Check",
        "prompt": [
            "Exercise 21.18: Write Java code simulating `Optimistic Locking Version Check`."
        ],
        "io": "Output: DB operation log for Optimistic Locking Version Check",
        "hint": "Simulate persistence layer and SQL parameter mapping.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 21.18 \u2014 Optimistic Locking Version Check\n        \n    }\n}"
    },
    {
        "id": "c21-19",
        "chapter": 21,
        "topic": "Database",
        "difficulty": "medium",
        "title": "Concept 21.19 \u2014 Pessimistic Locking Simulation",
        "prompt": [
            "Exercise 21.19: Write Java code simulating `Pessimistic Locking Simulation`."
        ],
        "io": "Output: DB operation log for Pessimistic Locking Simulation",
        "hint": "Simulate persistence layer and SQL parameter mapping.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 21.19 \u2014 Pessimistic Locking Simulation\n        \n    }\n}"
    },
    {
        "id": "c21-20",
        "chapter": 21,
        "topic": "Database",
        "difficulty": "medium",
        "title": "Concept 21.20 \u2014 Database Migration Script Engine",
        "prompt": [
            "Exercise 21.20: Write Java code simulating `Database Migration Script Engine`."
        ],
        "io": "Output: DB operation log for Database Migration Script Engine",
        "hint": "Simulate persistence layer and SQL parameter mapping.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 21.20 \u2014 Database Migration Script Engine\n        \n    }\n}"
    },
    {
        "id": "c21-21",
        "chapter": 21,
        "topic": "Database",
        "difficulty": "medium",
        "title": "Concept 21.21 \u2014 In-Memory H2 DB Mock Query",
        "prompt": [
            "Exercise 21.21: Write Java code simulating `In-Memory H2 DB Mock Query`."
        ],
        "io": "Output: DB operation log for In-Memory H2 DB Mock Query",
        "hint": "Simulate persistence layer and SQL parameter mapping.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 21.21 \u2014 In-Memory H2 DB Mock Query\n        \n    }\n}"
    },
    {
        "id": "c21-22",
        "chapter": 21,
        "topic": "Database",
        "difficulty": "medium",
        "title": "Concept 21.22 \u2014 Paginated Query Executor",
        "prompt": [
            "Exercise 21.22: Write Java code simulating `Paginated Query Executor`."
        ],
        "io": "Output: DB operation log for Paginated Query Executor",
        "hint": "Simulate persistence layer and SQL parameter mapping.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 21.22 \u2014 Paginated Query Executor\n        \n    }\n}"
    },
    {
        "id": "c21-23",
        "chapter": 21,
        "topic": "Database",
        "difficulty": "hard",
        "title": "Concept 21.23 \u2014 Multi-Tenant Data Router",
        "prompt": [
            "Exercise 21.23: Write Java code simulating `Multi-Tenant Data Router`."
        ],
        "io": "Output: DB operation log for Multi-Tenant Data Router",
        "hint": "Simulate persistence layer and SQL parameter mapping.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 21.23 \u2014 Multi-Tenant Data Router\n        \n    }\n}"
    },
    {
        "id": "c21-24",
        "chapter": 21,
        "topic": "Database",
        "difficulty": "hard",
        "title": "Concept 21.24 \u2014 Auditing Entity Field Tracker",
        "prompt": [
            "Exercise 21.24: Write Java code simulating `Auditing Entity Field Tracker`."
        ],
        "io": "Output: DB operation log for Auditing Entity Field Tracker",
        "hint": "Simulate persistence layer and SQL parameter mapping.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 21.24 \u2014 Auditing Entity Field Tracker\n        \n    }\n}"
    },
    {
        "id": "c21-25",
        "chapter": 21,
        "topic": "Database",
        "difficulty": "hard",
        "title": "Concept 21.25 \u2014 Event Log Persistence Engine",
        "prompt": [
            "Exercise 21.25: Write Java code simulating `Event Log Persistence Engine`."
        ],
        "io": "Output: DB operation log for Event Log Persistence Engine",
        "hint": "Simulate persistence layer and SQL parameter mapping.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 21.25 \u2014 Event Log Persistence Engine\n        \n    }\n}"
    },
    {
        "id": "c21-26",
        "chapter": 21,
        "topic": "Database",
        "difficulty": "hard",
        "title": "Concept 21.26 \u2014 Database Health Check Ping",
        "prompt": [
            "Exercise 21.26: Write Java code simulating `Database Health Check Ping`."
        ],
        "io": "Output: DB operation log for Database Health Check Ping",
        "hint": "Simulate persistence layer and SQL parameter mapping.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 21.26 \u2014 Database Health Check Ping\n        \n    }\n}"
    },
    {
        "id": "c21-27",
        "chapter": 21,
        "topic": "Database",
        "difficulty": "hard",
        "title": "Concept 21.27 \u2014 Dynamic Query Builder",
        "prompt": [
            "Exercise 21.27: Write Java code simulating `Dynamic Query Builder`."
        ],
        "io": "Output: DB operation log for Dynamic Query Builder",
        "hint": "Simulate persistence layer and SQL parameter mapping.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 21.27 \u2014 Dynamic Query Builder\n        \n    }\n}"
    },
    {
        "id": "c21-28",
        "chapter": 21,
        "topic": "Database",
        "difficulty": "hard",
        "title": "Concept 21.28 \u2014 Cascading Delete Simulator",
        "prompt": [
            "Exercise 21.28: Write Java code simulating `Cascading Delete Simulator`."
        ],
        "io": "Output: DB operation log for Cascading Delete Simulator",
        "hint": "Simulate persistence layer and SQL parameter mapping.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 21.28 \u2014 Cascading Delete Simulator\n        \n    }\n}"
    },
    {
        "id": "c21-29",
        "chapter": 21,
        "topic": "Database",
        "difficulty": "hard",
        "title": "Concept 21.29 \u2014 Join Result DTO Mapper",
        "prompt": [
            "Exercise 21.29: Write Java code simulating `Join Result DTO Mapper`."
        ],
        "io": "Output: DB operation log for Join Result DTO Mapper",
        "hint": "Simulate persistence layer and SQL parameter mapping.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 21.29 \u2014 Join Result DTO Mapper\n        \n    }\n}"
    },
    {
        "id": "c21-30",
        "chapter": 21,
        "topic": "Database",
        "difficulty": "hard",
        "title": "Concept 21.30 \u2014 Database Connection Pool Metrics",
        "prompt": [
            "Exercise 21.30: Write Java code simulating `Database Connection Pool Metrics`."
        ],
        "io": "Output: DB operation log for Database Connection Pool Metrics",
        "hint": "Simulate persistence layer and SQL parameter mapping.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 21.30 \u2014 Database Connection Pool Metrics\n        \n    }\n}"
    },
    {
        "id": "c22-01",
        "chapter": 22,
        "topic": "Testing",
        "difficulty": "easy",
        "title": "Concept 22.1 \u2014 Basic Assertion Checks (assertEquals, assertTrue)",
        "prompt": [
            "Exercise 22.1: Write a test runner and assertions for `Basic Assertion Checks (assertEquals, assertTrue)`."
        ],
        "io": "Output: Test pass/fail results for Basic Assertion Checks (assertEquals, assertTrue)",
        "hint": "Implement assertion checks and mock validation.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 22.1 \u2014 Basic Assertion Checks (assertEquals, assertTrue)\n        \n    }\n}"
    },
    {
        "id": "c22-02",
        "chapter": 22,
        "topic": "Testing",
        "difficulty": "easy",
        "title": "Concept 22.2 \u2014 Testing Exception Throwing (assertThrows)",
        "prompt": [
            "Exercise 22.2: Write a test runner and assertions for `Testing Exception Throwing (assertThrows)`."
        ],
        "io": "Output: Test pass/fail results for Testing Exception Throwing (assertThrows)",
        "hint": "Implement assertion checks and mock validation.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 22.2 \u2014 Testing Exception Throwing (assertThrows)\n        \n    }\n}"
    },
    {
        "id": "c22-03",
        "chapter": 22,
        "topic": "Testing",
        "difficulty": "easy",
        "title": "Concept 22.3 \u2014 Test Lifecycle Setup & Teardown",
        "prompt": [
            "Exercise 22.3: Write a test runner and assertions for `Test Lifecycle Setup & Teardown`."
        ],
        "io": "Output: Test pass/fail results for Test Lifecycle Setup & Teardown",
        "hint": "Implement assertion checks and mock validation.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 22.3 \u2014 Test Lifecycle Setup & Teardown\n        \n    }\n}"
    },
    {
        "id": "c22-04",
        "chapter": 22,
        "topic": "Testing",
        "difficulty": "easy",
        "title": "Concept 22.4 \u2014 Parameterized Tests with Various Inputs",
        "prompt": [
            "Exercise 22.4: Write a test runner and assertions for `Parameterized Tests with Various Inputs`."
        ],
        "io": "Output: Test pass/fail results for Parameterized Tests with Various Inputs",
        "hint": "Implement assertion checks and mock validation.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 22.4 \u2014 Parameterized Tests with Various Inputs\n        \n    }\n}"
    },
    {
        "id": "c22-05",
        "chapter": 22,
        "topic": "Testing",
        "difficulty": "easy",
        "title": "Concept 22.5 \u2014 Mocking Dependencies with Test Double",
        "prompt": [
            "Exercise 22.5: Write a test runner and assertions for `Mocking Dependencies with Test Double`."
        ],
        "io": "Output: Test pass/fail results for Mocking Dependencies with Test Double",
        "hint": "Implement assertion checks and mock validation.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 22.5 \u2014 Mocking Dependencies with Test Double\n        \n    }\n}"
    },
    {
        "id": "c22-06",
        "chapter": 22,
        "topic": "Testing",
        "difficulty": "easy",
        "title": "Concept 22.6 \u2014 Stubbing Method Return Values",
        "prompt": [
            "Exercise 22.6: Write a test runner and assertions for `Stubbing Method Return Values`."
        ],
        "io": "Output: Test pass/fail results for Stubbing Method Return Values",
        "hint": "Implement assertion checks and mock validation.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 22.6 \u2014 Stubbing Method Return Values\n        \n    }\n}"
    },
    {
        "id": "c22-07",
        "chapter": 22,
        "topic": "Testing",
        "difficulty": "easy",
        "title": "Concept 22.7 \u2014 Verifying Method Call Counts",
        "prompt": [
            "Exercise 22.7: Write a test runner and assertions for `Verifying Method Call Counts`."
        ],
        "io": "Output: Test pass/fail results for Verifying Method Call Counts",
        "hint": "Implement assertion checks and mock validation.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 22.7 \u2014 Verifying Method Call Counts\n        \n    }\n}"
    },
    {
        "id": "c22-08",
        "chapter": 22,
        "topic": "Testing",
        "difficulty": "easy",
        "title": "Concept 22.8 \u2014 Testing Asynchronous Code Timeouts",
        "prompt": [
            "Exercise 22.8: Write a test runner and assertions for `Testing Asynchronous Code Timeouts`."
        ],
        "io": "Output: Test pass/fail results for Testing Asynchronous Code Timeouts",
        "hint": "Implement assertion checks and mock validation.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 22.8 \u2014 Testing Asynchronous Code Timeouts\n        \n    }\n}"
    },
    {
        "id": "c22-09",
        "chapter": 22,
        "topic": "Testing",
        "difficulty": "easy",
        "title": "Concept 22.9 \u2014 Grouped Assertions (assertAll)",
        "prompt": [
            "Exercise 22.9: Write a test runner and assertions for `Grouped Assertions (assertAll)`."
        ],
        "io": "Output: Test pass/fail results for Grouped Assertions (assertAll)",
        "hint": "Implement assertion checks and mock validation.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 22.9 \u2014 Grouped Assertions (assertAll)\n        \n    }\n}"
    },
    {
        "id": "c22-10",
        "chapter": 22,
        "topic": "Testing",
        "difficulty": "easy",
        "title": "Concept 22.10 \u2014 Disabled Test Conditions (@Disabled)",
        "prompt": [
            "Exercise 22.10: Write a test runner and assertions for `Disabled Test Conditions (@Disabled)`."
        ],
        "io": "Output: Test pass/fail results for Disabled Test Conditions (@Disabled)",
        "hint": "Implement assertion checks and mock validation.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 22.10 \u2014 Disabled Test Conditions (@Disabled)\n        \n    }\n}"
    },
    {
        "id": "c22-11",
        "chapter": 22,
        "topic": "Testing",
        "difficulty": "medium",
        "title": "Concept 22.11 \u2014 Custom Test Extensions",
        "prompt": [
            "Exercise 22.11: Write a test runner and assertions for `Custom Test Extensions`."
        ],
        "io": "Output: Test pass/fail results for Custom Test Extensions",
        "hint": "Implement assertion checks and mock validation.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 22.11 \u2014 Custom Test Extensions\n        \n    }\n}"
    },
    {
        "id": "c22-12",
        "chapter": 22,
        "topic": "Testing",
        "difficulty": "medium",
        "title": "Concept 22.12 \u2014 Testing Boundary Values",
        "prompt": [
            "Exercise 22.12: Write a test runner and assertions for `Testing Boundary Values`."
        ],
        "io": "Output: Test pass/fail results for Testing Boundary Values",
        "hint": "Implement assertion checks and mock validation.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 22.12 \u2014 Testing Boundary Values\n        \n    }\n}"
    },
    {
        "id": "c22-13",
        "chapter": 22,
        "topic": "Testing",
        "difficulty": "medium",
        "title": "Concept 22.13 \u2014 Equivalence Partitioning Test Suite",
        "prompt": [
            "Exercise 22.13: Write a test runner and assertions for `Equivalence Partitioning Test Suite`."
        ],
        "io": "Output: Test pass/fail results for Equivalence Partitioning Test Suite",
        "hint": "Implement assertion checks and mock validation.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 22.13 \u2014 Equivalence Partitioning Test Suite\n        \n    }\n}"
    },
    {
        "id": "c22-14",
        "chapter": 22,
        "topic": "Testing",
        "difficulty": "medium",
        "title": "Concept 22.14 \u2014 Mutation Testing Check",
        "prompt": [
            "Exercise 22.14: Write a test runner and assertions for `Mutation Testing Check`."
        ],
        "io": "Output: Test pass/fail results for Mutation Testing Check",
        "hint": "Implement assertion checks and mock validation.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 22.14 \u2014 Mutation Testing Check\n        \n    }\n}"
    },
    {
        "id": "c22-15",
        "chapter": 22,
        "topic": "Testing",
        "difficulty": "medium",
        "title": "Concept 22.15 \u2014 Test Coverage Analysis Mock",
        "prompt": [
            "Exercise 22.15: Write a test runner and assertions for `Test Coverage Analysis Mock`."
        ],
        "io": "Output: Test pass/fail results for Test Coverage Analysis Mock",
        "hint": "Implement assertion checks and mock validation.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 22.15 \u2014 Test Coverage Analysis Mock\n        \n    }\n}"
    },
    {
        "id": "c22-16",
        "chapter": 22,
        "topic": "Testing",
        "difficulty": "medium",
        "title": "Concept 22.16 \u2014 Testing Equals & HashCode Contract",
        "prompt": [
            "Exercise 22.16: Write a test runner and assertions for `Testing Equals & HashCode Contract`."
        ],
        "io": "Output: Test pass/fail results for Testing Equals & HashCode Contract",
        "hint": "Implement assertion checks and mock validation.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 22.16 \u2014 Testing Equals & HashCode Contract\n        \n    }\n}"
    },
    {
        "id": "c22-17",
        "chapter": 22,
        "topic": "Testing",
        "difficulty": "medium",
        "title": "Concept 22.17 \u2014 Testing Serialization / Deserialization",
        "prompt": [
            "Exercise 22.17: Write a test runner and assertions for `Testing Serialization / Deserialization`."
        ],
        "io": "Output: Test pass/fail results for Testing Serialization / Deserialization",
        "hint": "Implement assertion checks and mock validation.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 22.17 \u2014 Testing Serialization / Deserialization\n        \n    }\n}"
    },
    {
        "id": "c22-18",
        "chapter": 22,
        "topic": "Testing",
        "difficulty": "medium",
        "title": "Concept 22.18 \u2014 Behavior Driven Development (BDD) Test",
        "prompt": [
            "Exercise 22.18: Write a test runner and assertions for `Behavior Driven Development (BDD) Test`."
        ],
        "io": "Output: Test pass/fail results for Behavior Driven Development (BDD) Test",
        "hint": "Implement assertion checks and mock validation.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 22.18 \u2014 Behavior Driven Development (BDD) Test\n        \n    }\n}"
    },
    {
        "id": "c22-19",
        "chapter": 22,
        "topic": "Testing",
        "difficulty": "medium",
        "title": "Concept 22.19 \u2014 Fixtures & Data Generators",
        "prompt": [
            "Exercise 22.19: Write a test runner and assertions for `Fixtures & Data Generators`."
        ],
        "io": "Output: Test pass/fail results for Fixtures & Data Generators",
        "hint": "Implement assertion checks and mock validation.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 22.19 \u2014 Fixtures & Data Generators\n        \n    }\n}"
    },
    {
        "id": "c22-20",
        "chapter": 22,
        "topic": "Testing",
        "difficulty": "medium",
        "title": "Concept 22.20 \u2014 Spying Real Objects",
        "prompt": [
            "Exercise 22.20: Write a test runner and assertions for `Spying Real Objects`."
        ],
        "io": "Output: Test pass/fail results for Spying Real Objects",
        "hint": "Implement assertion checks and mock validation.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 22.20 \u2014 Spying Real Objects\n        \n    }\n}"
    },
    {
        "id": "c22-21",
        "chapter": 22,
        "topic": "Testing",
        "difficulty": "medium",
        "title": "Concept 22.21 \u2014 Capturing Method Arguments",
        "prompt": [
            "Exercise 22.21: Write a test runner and assertions for `Capturing Method Arguments`."
        ],
        "io": "Output: Test pass/fail results for Capturing Method Arguments",
        "hint": "Implement assertion checks and mock validation.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 22.21 \u2014 Capturing Method Arguments\n        \n    }\n}"
    },
    {
        "id": "c22-22",
        "chapter": 22,
        "topic": "Testing",
        "difficulty": "medium",
        "title": "Concept 22.22 \u2014 Testing Concurrent Thread Conditions",
        "prompt": [
            "Exercise 22.22: Write a test runner and assertions for `Testing Concurrent Thread Conditions`."
        ],
        "io": "Output: Test pass/fail results for Testing Concurrent Thread Conditions",
        "hint": "Implement assertion checks and mock validation.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 22.22 \u2014 Testing Concurrent Thread Conditions\n        \n    }\n}"
    },
    {
        "id": "c22-23",
        "chapter": 22,
        "topic": "Testing",
        "difficulty": "hard",
        "title": "Concept 22.23 \u2014 Spring Boot Test Slice Simulation",
        "prompt": [
            "Exercise 22.23: Write a test runner and assertions for `Spring Boot Test Slice Simulation`."
        ],
        "io": "Output: Test pass/fail results for Spring Boot Test Slice Simulation",
        "hint": "Implement assertion checks and mock validation.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 22.23 \u2014 Spring Boot Test Slice Simulation\n        \n    }\n}"
    },
    {
        "id": "c22-24",
        "chapter": 22,
        "topic": "Testing",
        "difficulty": "hard",
        "title": "Concept 22.24 \u2014 REST API Endpoint Contract Test",
        "prompt": [
            "Exercise 22.24: Write a test runner and assertions for `REST API Endpoint Contract Test`."
        ],
        "io": "Output: Test pass/fail results for REST API Endpoint Contract Test",
        "hint": "Implement assertion checks and mock validation.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 22.24 \u2014 REST API Endpoint Contract Test\n        \n    }\n}"
    },
    {
        "id": "c22-25",
        "chapter": 22,
        "topic": "Testing",
        "difficulty": "hard",
        "title": "Concept 22.25 \u2014 Database State Assertion Test",
        "prompt": [
            "Exercise 22.25: Write a test runner and assertions for `Database State Assertion Test`."
        ],
        "io": "Output: Test pass/fail results for Database State Assertion Test",
        "hint": "Implement assertion checks and mock validation.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 22.25 \u2014 Database State Assertion Test\n        \n    }\n}"
    },
    {
        "id": "c22-26",
        "chapter": 22,
        "topic": "Testing",
        "difficulty": "hard",
        "title": "Concept 22.26 \u2014 Flaky Test Detector & Retry",
        "prompt": [
            "Exercise 22.26: Write a test runner and assertions for `Flaky Test Detector & Retry`."
        ],
        "io": "Output: Test pass/fail results for Flaky Test Detector & Retry",
        "hint": "Implement assertion checks and mock validation.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 22.26 \u2014 Flaky Test Detector & Retry\n        \n    }\n}"
    },
    {
        "id": "c22-27",
        "chapter": 22,
        "topic": "Testing",
        "difficulty": "hard",
        "title": "Concept 22.27 \u2014 Benchmark Performance Test Unit",
        "prompt": [
            "Exercise 22.27: Write a test runner and assertions for `Benchmark Performance Test Unit`."
        ],
        "io": "Output: Test pass/fail results for Benchmark Performance Test Unit",
        "hint": "Implement assertion checks and mock validation.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 22.27 \u2014 Benchmark Performance Test Unit\n        \n    }\n}"
    },
    {
        "id": "c22-28",
        "chapter": 22,
        "topic": "Testing",
        "difficulty": "hard",
        "title": "Concept 22.28 \u2014 Architecture Rule Test Verification",
        "prompt": [
            "Exercise 22.28: Write a test runner and assertions for `Architecture Rule Test Verification`."
        ],
        "io": "Output: Test pass/fail results for Architecture Rule Test Verification",
        "hint": "Implement assertion checks and mock validation.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 22.28 \u2014 Architecture Rule Test Verification\n        \n    }\n}"
    },
    {
        "id": "c22-29",
        "chapter": 22,
        "topic": "Testing",
        "difficulty": "hard",
        "title": "Concept 22.29 \u2014 Custom Matchers with Hamcrest",
        "prompt": [
            "Exercise 22.29: Write a test runner and assertions for `Custom Matchers with Hamcrest`."
        ],
        "io": "Output: Test pass/fail results for Custom Matchers with Hamcrest",
        "hint": "Implement assertion checks and mock validation.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 22.29 \u2014 Custom Matchers with Hamcrest\n        \n    }\n}"
    },
    {
        "id": "c22-30",
        "chapter": 22,
        "topic": "Testing",
        "difficulty": "hard",
        "title": "Concept 22.30 \u2014 Snapshot Testing Simulator",
        "prompt": [
            "Exercise 22.30: Write a test runner and assertions for `Snapshot Testing Simulator`."
        ],
        "io": "Output: Test pass/fail results for Snapshot Testing Simulator",
        "hint": "Implement assertion checks and mock validation.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 22.30 \u2014 Snapshot Testing Simulator\n        \n    }\n}"
    },
    {
        "id": "c23-01",
        "chapter": 23,
        "topic": "Modern Java",
        "difficulty": "easy",
        "title": "Concept 23.1 \u2014 Record Class Definition & Immutability",
        "prompt": [
            "Exercise 23.1: Utilize modern Java (Java 17-21+) features for `Record Class Definition & Immutability`."
        ],
        "io": "Output: Modern Java execution result for Record Class Definition & Immutability",
        "hint": "Use Records, Sealed Classes, pattern matching, or var.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 23.1 \u2014 Record Class Definition & Immutability\n        \n    }\n}"
    },
    {
        "id": "c23-02",
        "chapter": 23,
        "topic": "Modern Java",
        "difficulty": "easy",
        "title": "Concept 23.2 \u2014 Record Compact Constructor Validation",
        "prompt": [
            "Exercise 23.2: Utilize modern Java (Java 17-21+) features for `Record Compact Constructor Validation`."
        ],
        "io": "Output: Modern Java execution result for Record Compact Constructor Validation",
        "hint": "Use Records, Sealed Classes, pattern matching, or var.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 23.2 \u2014 Record Compact Constructor Validation\n        \n    }\n}"
    },
    {
        "id": "c23-03",
        "chapter": 23,
        "topic": "Modern Java",
        "difficulty": "easy",
        "title": "Concept 23.3 \u2014 Record Method Overriding",
        "prompt": [
            "Exercise 23.3: Utilize modern Java (Java 17-21+) features for `Record Method Overriding`."
        ],
        "io": "Output: Modern Java execution result for Record Method Overriding",
        "hint": "Use Records, Sealed Classes, pattern matching, or var.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 23.3 \u2014 Record Method Overriding\n        \n    }\n}"
    },
    {
        "id": "c23-04",
        "chapter": 23,
        "topic": "Modern Java",
        "difficulty": "easy",
        "title": "Concept 23.4 \u2014 Sealed Classes & Permitted Subclasses",
        "prompt": [
            "Exercise 23.4: Utilize modern Java (Java 17-21+) features for `Sealed Classes & Permitted Subclasses`."
        ],
        "io": "Output: Modern Java execution result for Sealed Classes & Permitted Subclasses",
        "hint": "Use Records, Sealed Classes, pattern matching, or var.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 23.4 \u2014 Sealed Classes & Permitted Subclasses\n        \n    }\n}"
    },
    {
        "id": "c23-05",
        "chapter": 23,
        "topic": "Modern Java",
        "difficulty": "easy",
        "title": "Concept 23.5 \u2014 Pattern Matching for switch Expressions",
        "prompt": [
            "Exercise 23.5: Utilize modern Java (Java 17-21+) features for `Pattern Matching for switch Expressions`."
        ],
        "io": "Output: Modern Java execution result for Pattern Matching for switch Expressions",
        "hint": "Use Records, Sealed Classes, pattern matching, or var.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 23.5 \u2014 Pattern Matching for switch Expressions\n        \n    }\n}"
    },
    {
        "id": "c23-06",
        "chapter": 23,
        "topic": "Modern Java",
        "difficulty": "easy",
        "title": "Concept 23.6 \u2014 Pattern Matching for instanceof",
        "prompt": [
            "Exercise 23.6: Utilize modern Java (Java 17-21+) features for `Pattern Matching for instanceof`."
        ],
        "io": "Output: Modern Java execution result for Pattern Matching for instanceof",
        "hint": "Use Records, Sealed Classes, pattern matching, or var.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 23.6 \u2014 Pattern Matching for instanceof\n        \n    }\n}"
    },
    {
        "id": "c23-07",
        "chapter": 23,
        "topic": "Modern Java",
        "difficulty": "easy",
        "title": "Concept 23.7 \u2014 Local Variable Type Inference (var)",
        "prompt": [
            "Exercise 23.7: Utilize modern Java (Java 17-21+) features for `Local Variable Type Inference (var)`."
        ],
        "io": "Output: Modern Java execution result for Local Variable Type Inference (var)",
        "hint": "Use Records, Sealed Classes, pattern matching, or var.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 23.7 \u2014 Local Variable Type Inference (var)\n        \n    }\n}"
    },
    {
        "id": "c23-08",
        "chapter": 23,
        "topic": "Modern Java",
        "difficulty": "easy",
        "title": "Concept 23.8 \u2014 Text Blocks Multiline Formatting",
        "prompt": [
            "Exercise 23.8: Utilize modern Java (Java 17-21+) features for `Text Blocks Multiline Formatting`."
        ],
        "io": "Output: Modern Java execution result for Text Blocks Multiline Formatting",
        "hint": "Use Records, Sealed Classes, pattern matching, or var.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 23.8 \u2014 Text Blocks Multiline Formatting\n        \n    }\n}"
    },
    {
        "id": "c23-09",
        "chapter": 23,
        "topic": "Modern Java",
        "difficulty": "easy",
        "title": "Concept 23.9 \u2014 Switch Expressions with yield",
        "prompt": [
            "Exercise 23.9: Utilize modern Java (Java 17-21+) features for `Switch Expressions with yield`."
        ],
        "io": "Output: Modern Java execution result for Switch Expressions with yield",
        "hint": "Use Records, Sealed Classes, pattern matching, or var.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 23.9 \u2014 Switch Expressions with yield\n        \n    }\n}"
    },
    {
        "id": "c23-10",
        "chapter": 23,
        "topic": "Modern Java",
        "difficulty": "easy",
        "title": "Concept 23.10 \u2014 Scoped Values Demonstration",
        "prompt": [
            "Exercise 23.10: Utilize modern Java (Java 17-21+) features for `Scoped Values Demonstration`."
        ],
        "io": "Output: Modern Java execution result for Scoped Values Demonstration",
        "hint": "Use Records, Sealed Classes, pattern matching, or var.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 23.10 \u2014 Scoped Values Demonstration\n        \n    }\n}"
    },
    {
        "id": "c23-11",
        "chapter": 23,
        "topic": "Modern Java",
        "difficulty": "medium",
        "title": "Concept 23.11 \u2014 Virtual Threads (Project Loom)",
        "prompt": [
            "Exercise 23.11: Utilize modern Java (Java 17-21+) features for `Virtual Threads (Project Loom)`."
        ],
        "io": "Output: Modern Java execution result for Virtual Threads (Project Loom)",
        "hint": "Use Records, Sealed Classes, pattern matching, or var.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 23.11 \u2014 Virtual Threads (Project Loom)\n        \n    }\n}"
    },
    {
        "id": "c23-12",
        "chapter": 23,
        "topic": "Modern Java",
        "difficulty": "medium",
        "title": "Concept 23.12 \u2014 Vector API Vectorized Computation",
        "prompt": [
            "Exercise 23.12: Utilize modern Java (Java 17-21+) features for `Vector API Vectorized Computation`."
        ],
        "io": "Output: Modern Java execution result for Vector API Vectorized Computation",
        "hint": "Use Records, Sealed Classes, pattern matching, or var.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 23.12 \u2014 Vector API Vectorized Computation\n        \n    }\n}"
    },
    {
        "id": "c23-13",
        "chapter": 23,
        "topic": "Modern Java",
        "difficulty": "medium",
        "title": "Concept 23.13 \u2014 Foreign Function & Memory API (FFM)",
        "prompt": [
            "Exercise 23.13: Utilize modern Java (Java 17-21+) features for `Foreign Function & Memory API (FFM)`."
        ],
        "io": "Output: Modern Java execution result for Foreign Function & Memory API (FFM)",
        "hint": "Use Records, Sealed Classes, pattern matching, or var.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 23.13 \u2014 Foreign Function & Memory API (FFM)\n        \n    }\n}"
    },
    {
        "id": "c23-14",
        "chapter": 23,
        "topic": "Modern Java",
        "difficulty": "medium",
        "title": "Concept 23.14 \u2014 Sequenced Collections (SequencedCollection)",
        "prompt": [
            "Exercise 23.14: Utilize modern Java (Java 17-21+) features for `Sequenced Collections (SequencedCollection)`."
        ],
        "io": "Output: Modern Java execution result for Sequenced Collections (SequencedCollection)",
        "hint": "Use Records, Sealed Classes, pattern matching, or var.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 23.14 \u2014 Sequenced Collections (SequencedCollection)\n        \n    }\n}"
    },
    {
        "id": "c23-15",
        "chapter": 23,
        "topic": "Modern Java",
        "difficulty": "medium",
        "title": "Concept 23.15 \u2014 Record Patterns Unpacking",
        "prompt": [
            "Exercise 23.15: Utilize modern Java (Java 17-21+) features for `Record Patterns Unpacking`."
        ],
        "io": "Output: Modern Java execution result for Record Patterns Unpacking",
        "hint": "Use Records, Sealed Classes, pattern matching, or var.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 23.15 \u2014 Record Patterns Unpacking\n        \n    }\n}"
    },
    {
        "id": "c23-16",
        "chapter": 23,
        "topic": "Modern Java",
        "difficulty": "medium",
        "title": "Concept 23.16 \u2014 Null-Pointer Exception Helpful Messages",
        "prompt": [
            "Exercise 23.16: Utilize modern Java (Java 17-21+) features for `Null-Pointer Exception Helpful Messages`."
        ],
        "io": "Output: Modern Java execution result for Null-Pointer Exception Helpful Messages",
        "hint": "Use Records, Sealed Classes, pattern matching, or var.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 23.16 \u2014 Null-Pointer Exception Helpful Messages\n        \n    }\n}"
    },
    {
        "id": "c23-17",
        "chapter": 23,
        "topic": "Modern Java",
        "difficulty": "medium",
        "title": "Concept 23.17 \u2014 Stream.toList Direct Collector",
        "prompt": [
            "Exercise 23.17: Utilize modern Java (Java 17-21+) features for `Stream.toList Direct Collector`."
        ],
        "io": "Output: Modern Java execution result for Stream.toList Direct Collector",
        "hint": "Use Records, Sealed Classes, pattern matching, or var.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 23.17 \u2014 Stream.toList Direct Collector\n        \n    }\n}"
    },
    {
        "id": "c23-18",
        "chapter": 23,
        "topic": "Modern Java",
        "difficulty": "medium",
        "title": "Concept 23.18 \u2014 String.isBlank & String.repeat",
        "prompt": [
            "Exercise 23.18: Utilize modern Java (Java 17-21+) features for `String.isBlank & String.repeat`."
        ],
        "io": "Output: Modern Java execution result for String.isBlank & String.repeat",
        "hint": "Use Records, Sealed Classes, pattern matching, or var.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 23.18 \u2014 String.isBlank & String.repeat\n        \n    }\n}"
    },
    {
        "id": "c23-19",
        "chapter": 23,
        "topic": "Modern Java",
        "difficulty": "medium",
        "title": "Concept 23.19 \u2014 Optional.isEmpty Counterpart",
        "prompt": [
            "Exercise 23.19: Utilize modern Java (Java 17-21+) features for `Optional.isEmpty Counterpart`."
        ],
        "io": "Output: Modern Java execution result for Optional.isEmpty Counterpart",
        "hint": "Use Records, Sealed Classes, pattern matching, or var.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 23.19 \u2014 Optional.isEmpty Counterpart\n        \n    }\n}"
    },
    {
        "id": "c23-20",
        "chapter": 23,
        "topic": "Modern Java",
        "difficulty": "medium",
        "title": "Concept 23.20 \u2014 CompletableFuture.failedFuture",
        "prompt": [
            "Exercise 23.20: Utilize modern Java (Java 17-21+) features for `CompletableFuture.failedFuture`."
        ],
        "io": "Output: Modern Java execution result for CompletableFuture.failedFuture",
        "hint": "Use Records, Sealed Classes, pattern matching, or var.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 23.20 \u2014 CompletableFuture.failedFuture\n        \n    }\n}"
    },
    {
        "id": "c23-21",
        "chapter": 23,
        "topic": "Modern Java",
        "difficulty": "medium",
        "title": "Concept 23.21 \u2014 Files.readString & Files.writeString",
        "prompt": [
            "Exercise 23.21: Utilize modern Java (Java 17-21+) features for `Files.readString & Files.writeString`."
        ],
        "io": "Output: Modern Java execution result for Files.readString & Files.writeString",
        "hint": "Use Records, Sealed Classes, pattern matching, or var.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 23.21 \u2014 Files.readString & Files.writeString\n        \n    }\n}"
    },
    {
        "id": "c23-22",
        "chapter": 23,
        "topic": "Modern Java",
        "difficulty": "medium",
        "title": "Concept 23.22 \u2014 Predicate.not Adapter",
        "prompt": [
            "Exercise 23.22: Utilize modern Java (Java 17-21+) features for `Predicate.not Adapter`."
        ],
        "io": "Output: Modern Java execution result for Predicate.not Adapter",
        "hint": "Use Records, Sealed Classes, pattern matching, or var.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 23.22 \u2014 Predicate.not Adapter\n        \n    }\n}"
    },
    {
        "id": "c23-23",
        "chapter": 23,
        "topic": "Modern Java",
        "difficulty": "hard",
        "title": "Concept 23.23 \u2014 Math.clamp Helper Method",
        "prompt": [
            "Exercise 23.23: Utilize modern Java (Java 17-21+) features for `Math.clamp Helper Method`."
        ],
        "io": "Output: Modern Java execution result for Math.clamp Helper Method",
        "hint": "Use Records, Sealed Classes, pattern matching, or var.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 23.23 \u2014 Math.clamp Helper Method\n        \n    }\n}"
    },
    {
        "id": "c23-24",
        "chapter": 23,
        "topic": "Modern Java",
        "difficulty": "hard",
        "title": "Concept 23.24 \u2014 Structured Concurrency Scope",
        "prompt": [
            "Exercise 23.24: Utilize modern Java (Java 17-21+) features for `Structured Concurrency Scope`."
        ],
        "io": "Output: Modern Java execution result for Structured Concurrency Scope",
        "hint": "Use Records, Sealed Classes, pattern matching, or var.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 23.24 \u2014 Structured Concurrency Scope\n        \n    }\n}"
    },
    {
        "id": "c23-25",
        "chapter": 23,
        "topic": "Modern Java",
        "difficulty": "hard",
        "title": "Concept 23.25 \u2014 Primitive Types in Pattern Matching",
        "prompt": [
            "Exercise 23.25: Utilize modern Java (Java 17-21+) features for `Primitive Types in Pattern Matching`."
        ],
        "io": "Output: Modern Java execution result for Primitive Types in Pattern Matching",
        "hint": "Use Records, Sealed Classes, pattern matching, or var.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 23.25 \u2014 Primitive Types in Pattern Matching\n        \n    }\n}"
    },
    {
        "id": "c23-26",
        "chapter": 23,
        "topic": "Modern Java",
        "difficulty": "hard",
        "title": "Concept 23.26 \u2014 Switch Exhaustiveness Checking",
        "prompt": [
            "Exercise 23.26: Utilize modern Java (Java 17-21+) features for `Switch Exhaustiveness Checking`."
        ],
        "io": "Output: Modern Java execution result for Switch Exhaustiveness Checking",
        "hint": "Use Records, Sealed Classes, pattern matching, or var.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 23.26 \u2014 Switch Exhaustiveness Checking\n        \n    }\n}"
    },
    {
        "id": "c23-27",
        "chapter": 23,
        "topic": "Modern Java",
        "difficulty": "hard",
        "title": "Concept 23.27 \u2014 Immutable Collections (List.of, Map.of)",
        "prompt": [
            "Exercise 23.27: Utilize modern Java (Java 17-21+) features for `Immutable Collections (List.of, Map.of)`."
        ],
        "io": "Output: Modern Java execution result for Immutable Collections (List.of, Map.of)",
        "hint": "Use Records, Sealed Classes, pattern matching, or var.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 23.27 \u2014 Immutable Collections (List.of, Map.of)\n        \n    }\n}"
    },
    {
        "id": "c23-28",
        "chapter": 23,
        "topic": "Modern Java",
        "difficulty": "hard",
        "title": "Concept 23.28 \u2014 Compact Number Formatting",
        "prompt": [
            "Exercise 23.28: Utilize modern Java (Java 17-21+) features for `Compact Number Formatting`."
        ],
        "io": "Output: Modern Java execution result for Compact Number Formatting",
        "hint": "Use Records, Sealed Classes, pattern matching, or var.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 23.28 \u2014 Compact Number Formatting\n        \n    }\n}"
    },
    {
        "id": "c23-29",
        "chapter": 23,
        "topic": "Modern Java",
        "difficulty": "hard",
        "title": "Concept 23.29 \u2014 ProcessHandle API & Process Control",
        "prompt": [
            "Exercise 23.29: Utilize modern Java (Java 17-21+) features for `ProcessHandle API & Process Control`."
        ],
        "io": "Output: Modern Java execution result for ProcessHandle API & Process Control",
        "hint": "Use Records, Sealed Classes, pattern matching, or var.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 23.29 \u2014 ProcessHandle API & Process Control\n        \n    }\n}"
    },
    {
        "id": "c23-30",
        "chapter": 23,
        "topic": "Modern Java",
        "difficulty": "hard",
        "title": "Concept 23.30 \u2014 Modern Java Feature Matrix",
        "prompt": [
            "Exercise 23.30: Utilize modern Java (Java 17-21+) features for `Modern Java Feature Matrix`."
        ],
        "io": "Output: Modern Java execution result for Modern Java Feature Matrix",
        "hint": "Use Records, Sealed Classes, pattern matching, or var.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 23.30 \u2014 Modern Java Feature Matrix\n        \n    }\n}"
    },
    {
        "id": "c24-01",
        "chapter": 24,
        "topic": "Networking",
        "difficulty": "easy",
        "title": "Concept 24.1 \u2014 Simple Socket Client Connection",
        "prompt": [
            "Exercise 24.1: Build network logic for `Simple Socket Client Connection`."
        ],
        "io": "Output: Socket/Network operation log for Simple Socket Client Connection",
        "hint": "Use java.net.* or java.net.http.HttpClient.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 24.1 \u2014 Simple Socket Client Connection\n        \n    }\n}"
    },
    {
        "id": "c24-02",
        "chapter": 24,
        "topic": "Networking",
        "difficulty": "easy",
        "title": "Concept 24.2 \u2014 Echo Server with ServerSocket",
        "prompt": [
            "Exercise 24.2: Build network logic for `Echo Server with ServerSocket`."
        ],
        "io": "Output: Socket/Network operation log for Echo Server with ServerSocket",
        "hint": "Use java.net.* or java.net.http.HttpClient.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 24.2 \u2014 Echo Server with ServerSocket\n        \n    }\n}"
    },
    {
        "id": "c24-03",
        "chapter": 24,
        "topic": "Networking",
        "difficulty": "easy",
        "title": "Concept 24.3 \u2014 Multi-Threaded TCP Server",
        "prompt": [
            "Exercise 24.3: Build network logic for `Multi-Threaded TCP Server`."
        ],
        "io": "Output: Socket/Network operation log for Multi-Threaded TCP Server",
        "hint": "Use java.net.* or java.net.http.HttpClient.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 24.3 \u2014 Multi-Threaded TCP Server\n        \n    }\n}"
    },
    {
        "id": "c24-04",
        "chapter": 24,
        "topic": "Networking",
        "difficulty": "easy",
        "title": "Concept 24.4 \u2014 UDP DatagramSocket Sender & Receiver",
        "prompt": [
            "Exercise 24.4: Build network logic for `UDP DatagramSocket Sender & Receiver`."
        ],
        "io": "Output: Socket/Network operation log for UDP DatagramSocket Sender & Receiver",
        "hint": "Use java.net.* or java.net.http.HttpClient.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 24.4 \u2014 UDP DatagramSocket Sender & Receiver\n        \n    }\n}"
    },
    {
        "id": "c24-05",
        "chapter": 24,
        "topic": "Networking",
        "difficulty": "easy",
        "title": "Concept 24.5 \u2014 HTTP Client with HttpClient API",
        "prompt": [
            "Exercise 24.5: Build network logic for `HTTP Client with HttpClient API`."
        ],
        "io": "Output: Socket/Network operation log for HTTP Client with HttpClient API",
        "hint": "Use java.net.* or java.net.http.HttpClient.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 24.5 \u2014 HTTP Client with HttpClient API\n        \n    }\n}"
    },
    {
        "id": "c24-06",
        "chapter": 24,
        "topic": "Networking",
        "difficulty": "easy",
        "title": "Concept 24.6 \u2014 Asynchronous HTTP Requests",
        "prompt": [
            "Exercise 24.6: Build network logic for `Asynchronous HTTP Requests`."
        ],
        "io": "Output: Socket/Network operation log for Asynchronous HTTP Requests",
        "hint": "Use java.net.* or java.net.http.HttpClient.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 24.6 \u2014 Asynchronous HTTP Requests\n        \n    }\n}"
    },
    {
        "id": "c24-07",
        "chapter": 24,
        "topic": "Networking",
        "difficulty": "easy",
        "title": "Concept 24.7 \u2014 URL & URLConnection File Downloader",
        "prompt": [
            "Exercise 24.7: Build network logic for `URL & URLConnection File Downloader`."
        ],
        "io": "Output: Socket/Network operation log for URL & URLConnection File Downloader",
        "hint": "Use java.net.* or java.net.http.HttpClient.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 24.7 \u2014 URL & URLConnection File Downloader\n        \n    }\n}"
    },
    {
        "id": "c24-08",
        "chapter": 24,
        "topic": "Networking",
        "difficulty": "easy",
        "title": "Concept 24.8 \u2014 Parsing Query Parameters & Headers",
        "prompt": [
            "Exercise 24.8: Build network logic for `Parsing Query Parameters & Headers`."
        ],
        "io": "Output: Socket/Network operation log for Parsing Query Parameters & Headers",
        "hint": "Use java.net.* or java.net.http.HttpClient.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 24.8 \u2014 Parsing Query Parameters & Headers\n        \n    }\n}"
    },
    {
        "id": "c24-09",
        "chapter": 24,
        "topic": "Networking",
        "difficulty": "easy",
        "title": "Concept 24.9 \u2014 SSL / TLS Secure Socket Setup",
        "prompt": [
            "Exercise 24.9: Build network logic for `SSL / TLS Secure Socket Setup`."
        ],
        "io": "Output: Socket/Network operation log for SSL / TLS Secure Socket Setup",
        "hint": "Use java.net.* or java.net.http.HttpClient.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 24.9 \u2014 SSL / TLS Secure Socket Setup\n        \n    }\n}"
    },
    {
        "id": "c24-10",
        "chapter": 24,
        "topic": "Networking",
        "difficulty": "easy",
        "title": "Concept 24.10 \u2014 Non-Blocking I/O (NIO SocketChannel)",
        "prompt": [
            "Exercise 24.10: Build network logic for `Non-Blocking I/O (NIO SocketChannel)`."
        ],
        "io": "Output: Socket/Network operation log for Non-Blocking I/O (NIO SocketChannel)",
        "hint": "Use java.net.* or java.net.http.HttpClient.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 24.10 \u2014 Non-Blocking I/O (NIO SocketChannel)\n        \n    }\n}"
    },
    {
        "id": "c24-11",
        "chapter": 24,
        "topic": "Networking",
        "difficulty": "medium",
        "title": "Concept 24.11 \u2014 NIO Selector Event Loop Multiplexing",
        "prompt": [
            "Exercise 24.11: Build network logic for `NIO Selector Event Loop Multiplexing`."
        ],
        "io": "Output: Socket/Network operation log for NIO Selector Event Loop Multiplexing",
        "hint": "Use java.net.* or java.net.http.HttpClient.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 24.11 \u2014 NIO Selector Event Loop Multiplexing\n        \n    }\n}"
    },
    {
        "id": "c24-12",
        "chapter": 24,
        "topic": "Networking",
        "difficulty": "medium",
        "title": "Concept 24.12 \u2014 WebSocket Protocol Client",
        "prompt": [
            "Exercise 24.12: Build network logic for `WebSocket Protocol Client`."
        ],
        "io": "Output: Socket/Network operation log for WebSocket Protocol Client",
        "hint": "Use java.net.* or java.net.http.HttpClient.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 24.12 \u2014 WebSocket Protocol Client\n        \n    }\n}"
    },
    {
        "id": "c24-13",
        "chapter": 24,
        "topic": "Networking",
        "difficulty": "medium",
        "title": "Concept 24.13 \u2014 Custom Packet Binary Serialization",
        "prompt": [
            "Exercise 24.13: Build network logic for `Custom Packet Binary Serialization`."
        ],
        "io": "Output: Socket/Network operation log for Custom Packet Binary Serialization",
        "hint": "Use java.net.* or java.net.http.HttpClient.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 24.13 \u2014 Custom Packet Binary Serialization\n        \n    }\n}"
    },
    {
        "id": "c24-14",
        "chapter": 24,
        "topic": "Networking",
        "difficulty": "medium",
        "title": "Concept 24.14 \u2014 IP Address Resolution (InetAddress)",
        "prompt": [
            "Exercise 24.14: Build network logic for `IP Address Resolution (InetAddress)`."
        ],
        "io": "Output: Socket/Network operation log for IP Address Resolution (InetAddress)",
        "hint": "Use java.net.* or java.net.http.HttpClient.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 24.14 \u2014 IP Address Resolution (InetAddress)\n        \n    }\n}"
    },
    {
        "id": "c24-15",
        "chapter": 24,
        "topic": "Networking",
        "difficulty": "medium",
        "title": "Concept 24.15 \u2014 Network Interface Enumeration",
        "prompt": [
            "Exercise 24.15: Build network logic for `Network Interface Enumeration`."
        ],
        "io": "Output: Socket/Network operation log for Network Interface Enumeration",
        "hint": "Use java.net.* or java.net.http.HttpClient.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 24.15 \u2014 Network Interface Enumeration\n        \n    }\n}"
    },
    {
        "id": "c24-16",
        "chapter": 24,
        "topic": "Networking",
        "difficulty": "medium",
        "title": "Concept 24.16 \u2014 Port Scanner Simulator",
        "prompt": [
            "Exercise 24.16: Build network logic for `Port Scanner Simulator`."
        ],
        "io": "Output: Socket/Network operation log for Port Scanner Simulator",
        "hint": "Use java.net.* or java.net.http.HttpClient.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 24.16 \u2014 Port Scanner Simulator\n        \n    }\n}"
    },
    {
        "id": "c24-17",
        "chapter": 24,
        "topic": "Networking",
        "difficulty": "medium",
        "title": "Concept 24.17 \u2014 Keep-Alive Heartbeat Protocol",
        "prompt": [
            "Exercise 24.17: Build network logic for `Keep-Alive Heartbeat Protocol`."
        ],
        "io": "Output: Socket/Network operation log for Keep-Alive Heartbeat Protocol",
        "hint": "Use java.net.* or java.net.http.HttpClient.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 24.17 \u2014 Keep-Alive Heartbeat Protocol\n        \n    }\n}"
    },
    {
        "id": "c24-18",
        "chapter": 24,
        "topic": "Networking",
        "difficulty": "medium",
        "title": "Concept 24.18 \u2014 Chunked Transfer Encoding Handler",
        "prompt": [
            "Exercise 24.18: Build network logic for `Chunked Transfer Encoding Handler`."
        ],
        "io": "Output: Socket/Network operation log for Chunked Transfer Encoding Handler",
        "hint": "Use java.net.* or java.net.http.HttpClient.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 24.18 \u2014 Chunked Transfer Encoding Handler\n        \n    }\n}"
    },
    {
        "id": "c24-19",
        "chapter": 24,
        "topic": "Networking",
        "difficulty": "medium",
        "title": "Concept 24.19 \u2014 Simple HTTP Web Server from Scratch",
        "prompt": [
            "Exercise 24.19: Build network logic for `Simple HTTP Web Server from Scratch`."
        ],
        "io": "Output: Socket/Network operation log for Simple HTTP Web Server from Scratch",
        "hint": "Use java.net.* or java.net.http.HttpClient.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 24.19 \u2014 Simple HTTP Web Server from Scratch\n        \n    }\n}"
    },
    {
        "id": "c24-20",
        "chapter": 24,
        "topic": "Networking",
        "difficulty": "medium",
        "title": "Concept 24.20 \u2014 REST Client JSON Consumer",
        "prompt": [
            "Exercise 24.20: Build network logic for `REST Client JSON Consumer`."
        ],
        "io": "Output: Socket/Network operation log for REST Client JSON Consumer",
        "hint": "Use java.net.* or java.net.http.HttpClient.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 24.20 \u2014 REST Client JSON Consumer\n        \n    }\n}"
    },
    {
        "id": "c24-21",
        "chapter": 24,
        "topic": "Networking",
        "difficulty": "medium",
        "title": "Concept 24.21 \u2014 Proxy Connection Route",
        "prompt": [
            "Exercise 24.21: Build network logic for `Proxy Connection Route`."
        ],
        "io": "Output: Socket/Network operation log for Proxy Connection Route",
        "hint": "Use java.net.* or java.net.http.HttpClient.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 24.21 \u2014 Proxy Connection Route\n        \n    }\n}"
    },
    {
        "id": "c24-22",
        "chapter": 24,
        "topic": "Networking",
        "difficulty": "medium",
        "title": "Concept 24.22 \u2014 Bandwidth Throttler Simulator",
        "prompt": [
            "Exercise 24.22: Build network logic for `Bandwidth Throttler Simulator`."
        ],
        "io": "Output: Socket/Network operation log for Bandwidth Throttler Simulator",
        "hint": "Use java.net.* or java.net.http.HttpClient.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 24.22 \u2014 Bandwidth Throttler Simulator\n        \n    }\n}"
    },
    {
        "id": "c24-23",
        "chapter": 24,
        "topic": "Networking",
        "difficulty": "hard",
        "title": "Concept 24.23 \u2014 Socket Timeout Guard",
        "prompt": [
            "Exercise 24.23: Build network logic for `Socket Timeout Guard`."
        ],
        "io": "Output: Socket/Network operation log for Socket Timeout Guard",
        "hint": "Use java.net.* or java.net.http.HttpClient.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 24.23 \u2014 Socket Timeout Guard\n        \n    }\n}"
    },
    {
        "id": "c24-24",
        "chapter": 24,
        "topic": "Networking",
        "difficulty": "hard",
        "title": "Concept 24.24 \u2014 Broadcast Datagram Beacon",
        "prompt": [
            "Exercise 24.24: Build network logic for `Broadcast Datagram Beacon`."
        ],
        "io": "Output: Socket/Network operation log for Broadcast Datagram Beacon",
        "hint": "Use java.net.* or java.net.http.HttpClient.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 24.24 \u2014 Broadcast Datagram Beacon\n        \n    }\n}"
    },
    {
        "id": "c24-25",
        "chapter": 24,
        "topic": "Networking",
        "difficulty": "hard",
        "title": "Concept 24.25 \u2014 Multicast Group Membership Protocol",
        "prompt": [
            "Exercise 24.25: Build network logic for `Multicast Group Membership Protocol`."
        ],
        "io": "Output: Socket/Network operation log for Multicast Group Membership Protocol",
        "hint": "Use java.net.* or java.net.http.HttpClient.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 24.25 \u2014 Multicast Group Membership Protocol\n        \n    }\n}"
    },
    {
        "id": "c24-26",
        "chapter": 24,
        "topic": "Networking",
        "difficulty": "hard",
        "title": "Concept 24.26 \u2014 Zero-Copy File Transfer (FileChannel.transferTo)",
        "prompt": [
            "Exercise 24.26: Build network logic for `Zero-Copy File Transfer (FileChannel.transferTo)`."
        ],
        "io": "Output: Socket/Network operation log for Zero-Copy File Transfer (FileChannel.transferTo)",
        "hint": "Use java.net.* or java.net.http.HttpClient.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 24.26 \u2014 Zero-Copy File Transfer (FileChannel.transferTo)\n        \n    }\n}"
    },
    {
        "id": "c24-27",
        "chapter": 24,
        "topic": "Networking",
        "difficulty": "hard",
        "title": "Concept 24.27 \u2014 Server-Sent Events (SSE) Stream",
        "prompt": [
            "Exercise 24.27: Build network logic for `Server-Sent Events (SSE) Stream`."
        ],
        "io": "Output: Socket/Network operation log for Server-Sent Events (SSE) Stream",
        "hint": "Use java.net.* or java.net.http.HttpClient.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 24.27 \u2014 Server-Sent Events (SSE) Stream\n        \n    }\n}"
    },
    {
        "id": "c24-28",
        "chapter": 24,
        "topic": "Networking",
        "difficulty": "hard",
        "title": "Concept 24.28 \u2014 Socket Reconnection Retry Backoff",
        "prompt": [
            "Exercise 24.28: Build network logic for `Socket Reconnection Retry Backoff`."
        ],
        "io": "Output: Socket/Network operation log for Socket Reconnection Retry Backoff",
        "hint": "Use java.net.* or java.net.http.HttpClient.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 24.28 \u2014 Socket Reconnection Retry Backoff\n        \n    }\n}"
    },
    {
        "id": "c24-29",
        "chapter": 24,
        "topic": "Networking",
        "difficulty": "hard",
        "title": "Concept 24.29 \u2014 Reverse Proxy Dispatcher",
        "prompt": [
            "Exercise 24.29: Build network logic for `Reverse Proxy Dispatcher`."
        ],
        "io": "Output: Socket/Network operation log for Reverse Proxy Dispatcher",
        "hint": "Use java.net.* or java.net.http.HttpClient.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 24.29 \u2014 Reverse Proxy Dispatcher\n        \n    }\n}"
    },
    {
        "id": "c24-30",
        "chapter": 24,
        "topic": "Networking",
        "difficulty": "hard",
        "title": "Concept 24.30 \u2014 Network Protocol Benchmark",
        "prompt": [
            "Exercise 24.30: Build network logic for `Network Protocol Benchmark`."
        ],
        "io": "Output: Socket/Network operation log for Network Protocol Benchmark",
        "hint": "Use java.net.* or java.net.http.HttpClient.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 24.30 \u2014 Network Protocol Benchmark\n        \n    }\n}"
    },
    {
        "id": "c25-01",
        "chapter": 25,
        "topic": "Enterprise",
        "difficulty": "easy",
        "title": "Concept 25.1 \u2014 HTTP Request Routing Engine",
        "prompt": [
            "Exercise 25.1: Build enterprise API logic for `HTTP Request Routing Engine`."
        ],
        "io": "Output: API HTTP response for HTTP Request Routing Engine",
        "hint": "Structure REST endpoints, DTOs, and controller handling.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 25.1 \u2014 HTTP Request Routing Engine\n        \n    }\n}"
    },
    {
        "id": "c25-02",
        "chapter": 25,
        "topic": "Enterprise",
        "difficulty": "easy",
        "title": "Concept 25.2 \u2014 JSON Serialization & Deserialization Engine",
        "prompt": [
            "Exercise 25.2: Build enterprise API logic for `JSON Serialization & Deserialization Engine`."
        ],
        "io": "Output: API HTTP response for JSON Serialization & Deserialization Engine",
        "hint": "Structure REST endpoints, DTOs, and controller handling.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 25.2 \u2014 JSON Serialization & Deserialization Engine\n        \n    }\n}"
    },
    {
        "id": "c25-03",
        "chapter": 25,
        "topic": "Enterprise",
        "difficulty": "easy",
        "title": "Concept 25.3 \u2014 REST API GET Endpoint Controller",
        "prompt": [
            "Exercise 25.3: Build enterprise API logic for `REST API GET Endpoint Controller`."
        ],
        "io": "Output: API HTTP response for REST API GET Endpoint Controller",
        "hint": "Structure REST endpoints, DTOs, and controller handling.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 25.3 \u2014 REST API GET Endpoint Controller\n        \n    }\n}"
    },
    {
        "id": "c25-04",
        "chapter": 25,
        "topic": "Enterprise",
        "difficulty": "easy",
        "title": "Concept 25.4 \u2014 REST API POST Endpoint Controller",
        "prompt": [
            "Exercise 25.4: Build enterprise API logic for `REST API POST Endpoint Controller`."
        ],
        "io": "Output: API HTTP response for REST API POST Endpoint Controller",
        "hint": "Structure REST endpoints, DTOs, and controller handling.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 25.4 \u2014 REST API POST Endpoint Controller\n        \n    }\n}"
    },
    {
        "id": "c25-05",
        "chapter": 25,
        "topic": "Enterprise",
        "difficulty": "easy",
        "title": "Concept 25.5 \u2014 REST API PUT & DELETE Controllers",
        "prompt": [
            "Exercise 25.5: Build enterprise API logic for `REST API PUT & DELETE Controllers`."
        ],
        "io": "Output: API HTTP response for REST API PUT & DELETE Controllers",
        "hint": "Structure REST endpoints, DTOs, and controller handling.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 25.5 \u2014 REST API PUT & DELETE Controllers\n        \n    }\n}"
    },
    {
        "id": "c25-06",
        "chapter": 25,
        "topic": "Enterprise",
        "difficulty": "easy",
        "title": "Concept 25.6 \u2014 Middleware Filter Chain Execution",
        "prompt": [
            "Exercise 25.6: Build enterprise API logic for `Middleware Filter Chain Execution`."
        ],
        "io": "Output: API HTTP response for Middleware Filter Chain Execution",
        "hint": "Structure REST endpoints, DTOs, and controller handling.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 25.6 \u2014 Middleware Filter Chain Execution\n        \n    }\n}"
    },
    {
        "id": "c25-07",
        "chapter": 25,
        "topic": "Enterprise",
        "difficulty": "easy",
        "title": "Concept 25.7 \u2014 JWT Authentication & Verification",
        "prompt": [
            "Exercise 25.7: Build enterprise API logic for `JWT Authentication & Verification`."
        ],
        "io": "Output: API HTTP response for JWT Authentication & Verification",
        "hint": "Structure REST endpoints, DTOs, and controller handling.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 25.7 \u2014 JWT Authentication & Verification\n        \n    }\n}"
    },
    {
        "id": "c25-08",
        "chapter": 25,
        "topic": "Enterprise",
        "difficulty": "easy",
        "title": "Concept 25.8 \u2014 Role-Based Access Control (RBAC)",
        "prompt": [
            "Exercise 25.8: Build enterprise API logic for `Role-Based Access Control (RBAC)`."
        ],
        "io": "Output: API HTTP response for Role-Based Access Control (RBAC)",
        "hint": "Structure REST endpoints, DTOs, and controller handling.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 25.8 \u2014 Role-Based Access Control (RBAC)\n        \n    }\n}"
    },
    {
        "id": "c25-09",
        "chapter": 25,
        "topic": "Enterprise",
        "difficulty": "easy",
        "title": "Concept 25.9 \u2014 Request Validation & Error Handler",
        "prompt": [
            "Exercise 25.9: Build enterprise API logic for `Request Validation & Error Handler`."
        ],
        "io": "Output: API HTTP response for Request Validation & Error Handler",
        "hint": "Structure REST endpoints, DTOs, and controller handling.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 25.9 \u2014 Request Validation & Error Handler\n        \n    }\n}"
    },
    {
        "id": "c25-10",
        "chapter": 25,
        "topic": "Enterprise",
        "difficulty": "easy",
        "title": "Concept 25.10 \u2014 CORS Headers & Security Middleware",
        "prompt": [
            "Exercise 25.10: Build enterprise API logic for `CORS Headers & Security Middleware`."
        ],
        "io": "Output: API HTTP response for CORS Headers & Security Middleware",
        "hint": "Structure REST endpoints, DTOs, and controller handling.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 25.10 \u2014 CORS Headers & Security Middleware\n        \n    }\n}"
    },
    {
        "id": "c25-11",
        "chapter": 25,
        "topic": "Enterprise",
        "difficulty": "medium",
        "title": "Concept 25.11 \u2014 Rate Limiting Bucket Middleware",
        "prompt": [
            "Exercise 25.11: Build enterprise API logic for `Rate Limiting Bucket Middleware`."
        ],
        "io": "Output: API HTTP response for Rate Limiting Bucket Middleware",
        "hint": "Structure REST endpoints, DTOs, and controller handling.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 25.11 \u2014 Rate Limiting Bucket Middleware\n        \n    }\n}"
    },
    {
        "id": "c25-12",
        "chapter": 25,
        "topic": "Enterprise",
        "difficulty": "medium",
        "title": "Concept 25.12 \u2014 API Versioning Strategy Router",
        "prompt": [
            "Exercise 25.12: Build enterprise API logic for `API Versioning Strategy Router`."
        ],
        "io": "Output: API HTTP response for API Versioning Strategy Router",
        "hint": "Structure REST endpoints, DTOs, and controller handling.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 25.12 \u2014 API Versioning Strategy Router\n        \n    }\n}"
    },
    {
        "id": "c25-13",
        "chapter": 25,
        "topic": "Enterprise",
        "difficulty": "medium",
        "title": "Concept 25.13 \u2014 Health Check & Readiness Probes",
        "prompt": [
            "Exercise 25.13: Build enterprise API logic for `Health Check & Readiness Probes`."
        ],
        "io": "Output: API HTTP response for Health Check & Readiness Probes",
        "hint": "Structure REST endpoints, DTOs, and controller handling.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 25.13 \u2014 Health Check & Readiness Probes\n        \n    }\n}"
    },
    {
        "id": "c25-14",
        "chapter": 25,
        "topic": "Enterprise",
        "difficulty": "medium",
        "title": "Concept 25.14 \u2014 OpenAPI / Swagger Spec Generator",
        "prompt": [
            "Exercise 25.14: Build enterprise API logic for `OpenAPI / Swagger Spec Generator`."
        ],
        "io": "Output: API HTTP response for OpenAPI / Swagger Spec Generator",
        "hint": "Structure REST endpoints, DTOs, and controller handling.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 25.14 \u2014 OpenAPI / Swagger Spec Generator\n        \n    }\n}"
    },
    {
        "id": "c25-15",
        "chapter": 25,
        "topic": "Enterprise",
        "difficulty": "medium",
        "title": "Concept 25.15 \u2014 Hypermedia Links (HATEOAS) Builder",
        "prompt": [
            "Exercise 25.15: Build enterprise API logic for `Hypermedia Links (HATEOAS) Builder`."
        ],
        "io": "Output: API HTTP response for Hypermedia Links (HATEOAS) Builder",
        "hint": "Structure REST endpoints, DTOs, and controller handling.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 25.15 \u2014 Hypermedia Links (HATEOAS) Builder\n        \n    }\n}"
    },
    {
        "id": "c25-16",
        "chapter": 25,
        "topic": "Enterprise",
        "difficulty": "medium",
        "title": "Concept 25.16 \u2014 Event-Driven Architecture Message Bus",
        "prompt": [
            "Exercise 25.16: Build enterprise API logic for `Event-Driven Architecture Message Bus`."
        ],
        "io": "Output: API HTTP response for Event-Driven Architecture Message Bus",
        "hint": "Structure REST endpoints, DTOs, and controller handling.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 25.16 \u2014 Event-Driven Architecture Message Bus\n        \n    }\n}"
    },
    {
        "id": "c25-17",
        "chapter": 25,
        "topic": "Enterprise",
        "difficulty": "medium",
        "title": "Concept 25.17 \u2014 CQRS Command-Query Dispatcher",
        "prompt": [
            "Exercise 25.17: Build enterprise API logic for `CQRS Command-Query Dispatcher`."
        ],
        "io": "Output: API HTTP response for CQRS Command-Query Dispatcher",
        "hint": "Structure REST endpoints, DTOs, and controller handling.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 25.17 \u2014 CQRS Command-Query Dispatcher\n        \n    }\n}"
    },
    {
        "id": "c25-18",
        "chapter": 25,
        "topic": "Enterprise",
        "difficulty": "medium",
        "title": "Concept 25.18 \u2014 API Gateway Router",
        "prompt": [
            "Exercise 25.18: Build enterprise API logic for `API Gateway Router`."
        ],
        "io": "Output: API HTTP response for API Gateway Router",
        "hint": "Structure REST endpoints, DTOs, and controller handling.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 25.18 \u2014 API Gateway Router\n        \n    }\n}"
    },
    {
        "id": "c25-19",
        "chapter": 25,
        "topic": "Enterprise",
        "difficulty": "medium",
        "title": "Concept 25.19 \u2014 Circuit Breaker Resilience Pattern",
        "prompt": [
            "Exercise 25.19: Build enterprise API logic for `Circuit Breaker Resilience Pattern`."
        ],
        "io": "Output: API HTTP response for Circuit Breaker Resilience Pattern",
        "hint": "Structure REST endpoints, DTOs, and controller handling.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 25.19 \u2014 Circuit Breaker Resilience Pattern\n        \n    }\n}"
    },
    {
        "id": "c25-20",
        "chapter": 25,
        "topic": "Enterprise",
        "difficulty": "medium",
        "title": "Concept 25.20 \u2014 Distributed Tracing Context Carrier",
        "prompt": [
            "Exercise 25.20: Build enterprise API logic for `Distributed Tracing Context Carrier`."
        ],
        "io": "Output: API HTTP response for Distributed Tracing Context Carrier",
        "hint": "Structure REST endpoints, DTOs, and controller handling.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 25.20 \u2014 Distributed Tracing Context Carrier\n        \n    }\n}"
    },
    {
        "id": "c25-21",
        "chapter": 25,
        "topic": "Enterprise",
        "difficulty": "medium",
        "title": "Concept 25.21 \u2014 WebHook Event Receiver",
        "prompt": [
            "Exercise 25.21: Build enterprise API logic for `WebHook Event Receiver`."
        ],
        "io": "Output: API HTTP response for WebHook Event Receiver",
        "hint": "Structure REST endpoints, DTOs, and controller handling.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 25.21 \u2014 WebHook Event Receiver\n        \n    }\n}"
    },
    {
        "id": "c25-22",
        "chapter": 25,
        "topic": "Enterprise",
        "difficulty": "medium",
        "title": "Concept 25.22 \u2014 Multi-Part File Upload Handler",
        "prompt": [
            "Exercise 25.22: Build enterprise API logic for `Multi-Part File Upload Handler`."
        ],
        "io": "Output: API HTTP response for Multi-Part File Upload Handler",
        "hint": "Structure REST endpoints, DTOs, and controller handling.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 25.22 \u2014 Multi-Part File Upload Handler\n        \n    }\n}"
    },
    {
        "id": "c25-23",
        "chapter": 25,
        "topic": "Enterprise",
        "difficulty": "hard",
        "title": "Concept 25.23 \u2014 GraphQL Query Resolver Simulation",
        "prompt": [
            "Exercise 25.23: Build enterprise API logic for `GraphQL Query Resolver Simulation`."
        ],
        "io": "Output: API HTTP response for GraphQL Query Resolver Simulation",
        "hint": "Structure REST endpoints, DTOs, and controller handling.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 25.23 \u2014 GraphQL Query Resolver Simulation\n        \n    }\n}"
    },
    {
        "id": "c25-24",
        "chapter": 25,
        "topic": "Enterprise",
        "difficulty": "hard",
        "title": "Concept 25.24 \u2014 Server-Side Caching Middleware",
        "prompt": [
            "Exercise 25.24: Build enterprise API logic for `Server-Side Caching Middleware`."
        ],
        "io": "Output: API HTTP response for Server-Side Caching Middleware",
        "hint": "Structure REST endpoints, DTOs, and controller handling.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 25.24 \u2014 Server-Side Caching Middleware\n        \n    }\n}"
    },
    {
        "id": "c25-25",
        "chapter": 25,
        "topic": "Enterprise",
        "difficulty": "hard",
        "title": "Concept 25.25 \u2014 Idempotency Key Enforcement",
        "prompt": [
            "Exercise 25.25: Build enterprise API logic for `Idempotency Key Enforcement`."
        ],
        "io": "Output: API HTTP response for Idempotency Key Enforcement",
        "hint": "Structure REST endpoints, DTOs, and controller handling.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 25.25 \u2014 Idempotency Key Enforcement\n        \n    }\n}"
    },
    {
        "id": "c25-26",
        "chapter": 25,
        "topic": "Enterprise",
        "difficulty": "hard",
        "title": "Concept 25.26 \u2014 Microservice Service Discovery Mock",
        "prompt": [
            "Exercise 25.26: Build enterprise API logic for `Microservice Service Discovery Mock`."
        ],
        "io": "Output: API HTTP response for Microservice Service Discovery Mock",
        "hint": "Structure REST endpoints, DTOs, and controller handling.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 25.26 \u2014 Microservice Service Discovery Mock\n        \n    }\n}"
    },
    {
        "id": "c25-27",
        "chapter": 25,
        "topic": "Enterprise",
        "difficulty": "hard",
        "title": "Concept 25.27 \u2014 Batch API Processing Handler",
        "prompt": [
            "Exercise 25.27: Build enterprise API logic for `Batch API Processing Handler`."
        ],
        "io": "Output: API HTTP response for Batch API Processing Handler",
        "hint": "Structure REST endpoints, DTOs, and controller handling.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 25.27 \u2014 Batch API Processing Handler\n        \n    }\n}"
    },
    {
        "id": "c25-28",
        "chapter": 25,
        "topic": "Enterprise",
        "difficulty": "hard",
        "title": "Concept 25.28 \u2014 Graceful Shutdown Manager",
        "prompt": [
            "Exercise 25.28: Build enterprise API logic for `Graceful Shutdown Manager`."
        ],
        "io": "Output: API HTTP response for Graceful Shutdown Manager",
        "hint": "Structure REST endpoints, DTOs, and controller handling.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 25.28 \u2014 Graceful Shutdown Manager\n        \n    }\n}"
    },
    {
        "id": "c25-29",
        "chapter": 25,
        "topic": "Enterprise",
        "difficulty": "hard",
        "title": "Concept 25.29 \u2014 API Load Test Benchmarking",
        "prompt": [
            "Exercise 25.29: Build enterprise API logic for `API Load Test Benchmarking`."
        ],
        "io": "Output: API HTTP response for API Load Test Benchmarking",
        "hint": "Structure REST endpoints, DTOs, and controller handling.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 25.29 \u2014 API Load Test Benchmarking\n        \n    }\n}"
    },
    {
        "id": "c25-30",
        "chapter": 25,
        "topic": "Enterprise",
        "difficulty": "hard",
        "title": "Concept 25.30 \u2014 Full Stack Enterprise REST Controller",
        "prompt": [
            "Exercise 25.30: Build enterprise API logic for `Full Stack Enterprise REST Controller`."
        ],
        "io": "Output: API HTTP response for Full Stack Enterprise REST Controller",
        "hint": "Structure REST endpoints, DTOs, and controller handling.",
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write your code for Concept 25.30 \u2014 Full Stack Enterprise REST Controller\n        \n    }\n}"
    }
];
