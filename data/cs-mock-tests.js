/* Computer Science (083) MCQ Mock Tests — CBSE Class 12
   15 tests × 5 MCQs each = 75 questions
   1 mark per correct answer | No negative marking | Duration: 5 minutes
   Topics: Python, File Handling, Stack, SQL, Networks, Database Concepts
*/

const csTests = [
  {
    id: 1,
    title: "CS Mini Test 1 — Python Output Prediction",
    duration: 300,
    questions: [
      {
        question: "What is the output of the following code?\n\nx = [1, 2, 3, 4, 5]\nprint(x[1:4:2])",
        options: ["[2, 4]", "[1, 3]", "[2, 3, 4]", "[1, 2, 3]"],
        correct: 0,
        explanation: "x[1:4:2] starts at index 1, ends before index 4, with step 2. So it picks indices 1 and 3, giving [2, 4]."
      },
      {
        question: "What is the output?\n\ndef func(a, b=5, c=10):\n    return a + b + c\n\nprint(func(3, c=2))",
        options: ["15", "10", "20", "Error"],
        correct: 1,
        explanation: "a=3, b uses default 5, c=2. So 3 + 5 + 2 = 10."
      },
      {
        question: "What is the output?\n\ns = \"COMPUTER\"\nprint(s[-3:])",
        options: ["TER", "COM", "PUT", "UTER"],
        correct: 0,
        explanation: "s[-3:] returns the last 3 characters of the string, which is 'TER'."
      },
      {
        question: "What is the output?\n\nd = {1: 'one', 2: 'two', 3: 'three'}\nprint(list(d.values()))",
        options: ["[1, 2, 3]", "['one', 'two', 'three']", "[(1, 'one'), (2, 'two'), (3, 'three')]", "{1: 'one', 2: 'two', 3: 'three'}"],
        correct: 1,
        explanation: "d.values() returns the values of the dictionary. list() converts it to ['one', 'two', 'three']."
      },
      {
        question: "What is the output?\n\nt = (10, 20, 30, 40)\nprint(t.index(30))",
        options: ["30", "3", "2", "Error"],
        correct: 2,
        explanation: "The index() method returns the position of the first occurrence of 30 in the tuple, which is index 2."
      }
    ]
  },
  {
    id: 2,
    title: "CS Mini Test 2 — SQL Queries",
    duration: 300,
    questions: [
      {
        question: "Consider the table EMPLOYEE(EmpNo, Name, Dept, Salary). What does the following query return?\n\nSELECT Dept, COUNT(*) FROM EMPLOYEE GROUP BY Dept HAVING COUNT(*) > 2;",
        options: [
          "Departments with more than 2 employees",
          "All departments with employee count",
          "Departments with exactly 2 employees",
          "Total number of employees"
        ],
        correct: 0,
        explanation: "GROUP BY Dept groups rows by department, COUNT(*) counts employees per group, and HAVING COUNT(*) > 2 filters to only those departments with more than 2 employees."
      },
      {
        question: "Which SQL clause is used to remove duplicate rows from the result set?",
        options: ["UNIQUE", "DISTINCT", "NO DUPLICATE", "REMOVE"],
        correct: 1,
        explanation: "The DISTINCT keyword in a SELECT statement eliminates duplicate rows from the result set."
      },
      {
        question: "Consider a table STUDENT with columns (RollNo, Name, Marks). Which query displays student names with marks between 60 and 90 (inclusive)?",
        options: [
          "SELECT Name FROM STUDENT WHERE Marks IN (60, 90);",
          "SELECT Name FROM STUDENT WHERE Marks BETWEEN 60 AND 90;",
          "SELECT Name FROM STUDENT WHERE Marks > 60 AND Marks < 90;",
          "SELECT Name FROM STUDENT WHERE Marks FROM 60 TO 90;"
        ],
        correct: 1,
        explanation: "BETWEEN 60 AND 90 includes both endpoints (60 and 90). Option C excludes the endpoints, and option A only checks for exactly 60 or 90."
      },
      {
        question: "What is the output of the following query?\n\nSELECT ROUND(15.567, 1);",
        options: ["15.5", "15.6", "16", "15.57"],
        correct: 1,
        explanation: "ROUND(15.567, 1) rounds 15.567 to 1 decimal place. Since the second decimal digit is 6 (>=5), it rounds up to 15.6."
      },
      {
        question: "Which aggregate function ignores NULL values while computing the result?",
        options: [
          "Only COUNT(*)",
          "Only SUM and AVG",
          "All aggregate functions except COUNT(*)",
          "None — all aggregate functions include NULL"
        ],
        correct: 2,
        explanation: "All aggregate functions (SUM, AVG, MIN, MAX, COUNT(column)) ignore NULL values. Only COUNT(*) counts all rows including those with NULLs."
      }
    ]
  },
  {
    id: 3,
    title: "CS Mini Test 3 — File Handling",
    duration: 300,
    questions: [
      {
        question: "What is the default mode when a file is opened using open('data.txt')?",
        options: ["w", "r", "a", "r+"],
        correct: 1,
        explanation: "The default mode for open() is 'r' (read mode). If the file does not exist, it raises FileNotFoundError."
      },
      {
        question: "Which module is required to read and write data in binary files using Python?",
        options: ["os", "csv", "pickle", "binary"],
        correct: 2,
        explanation: "The pickle module is used for serialization (dump) and deserialization (load) of Python objects to/from binary files."
      },
      {
        question: "What will the following code do?\n\nf = open('notes.txt', 'w')\nf.write('Hello')\nf.close()\nf = open('notes.txt', 'a')\nf.write(' World')\nf.close()",
        options: [
          "File contains: Hello World",
          "File contains: Hello",
          "File contains: World",
          "Error — file already closed"
        ],
        correct: 0,
        explanation: "'w' mode creates the file and writes 'Hello'. Then 'a' mode opens it for appending, adding ' World'. Final content: 'Hello World'."
      },
      {
        question: "Which method reads a single line from a text file?",
        options: ["read()", "readlines()", "readline()", "readone()"],
        correct: 2,
        explanation: "readline() reads one line at a time from the file. read() reads the entire file and readlines() returns a list of all lines."
      },
      {
        question: "What does the tell() method return?",
        options: [
          "The total size of the file",
          "The current position of the file pointer",
          "The number of lines in the file",
          "The last character read"
        ],
        correct: 1,
        explanation: "tell() returns the current position of the file pointer (in bytes) from the beginning of the file."
      }
    ]
  },
  {
    id: 4,
    title: "CS Mini Test 4 — Stack & Data Structures",
    duration: 300,
    questions: [
      {
        question: "What is the output after the following stack operations?\n\nstack = []\nstack.append(10)\nstack.append(20)\nstack.append(30)\nstack.pop()\nstack.append(40)\nprint(stack)",
        options: ["[10, 20, 40]", "[10, 20, 30]", "[40, 20, 10]", "[10, 30, 40]"],
        correct: 0,
        explanation: "Push 10, 20, 30 → [10, 20, 30]. Pop removes 30 → [10, 20]. Push 40 → [10, 20, 40]."
      },
      {
        question: "A stack is also called a:",
        options: ["FIFO structure", "LILO structure", "LIFO structure", "Random access structure"],
        correct: 2,
        explanation: "A stack follows Last In First Out (LIFO) principle — the last element pushed is the first one to be popped."
      },
      {
        question: "What is the postfix expression for the infix expression: A + B * C?",
        options: ["AB+C*", "ABC*+", "ABC+*", "+A*BC"],
        correct: 1,
        explanation: "Due to operator precedence, B*C is evaluated first. In postfix: BC* comes first, then A is added: ABC*+."
      },
      {
        question: "Consider a stack implemented as a list. Which condition indicates the stack is empty?",
        options: ["len(stack) == 1", "stack == None", "len(stack) == 0", "stack.top == -1"],
        correct: 2,
        explanation: "In Python, a stack using a list is empty when its length is 0, i.e., len(stack) == 0 or equivalently stack == []."
      },
      {
        question: "Which Python list method is used for the pop operation in a stack?",
        options: ["remove()", "del()", "pop()", "discard()"],
        correct: 2,
        explanation: "The pop() method removes and returns the last element from the list, which corresponds to the top of the stack."
      }
    ]
  },
  {
    id: 5,
    title: "CS Mini Test 5 — Computer Networks",
    duration: 300,
    questions: [
      {
        question: "Which network topology uses a central device to connect all computers?",
        options: ["Bus", "Ring", "Star", "Mesh"],
        correct: 2,
        explanation: "In Star topology, all computers are connected to a central hub or switch. If the central device fails, the entire network goes down."
      },
      {
        question: "Which protocol is used to transfer web pages over the internet?",
        options: ["FTP", "SMTP", "HTTP", "POP3"],
        correct: 2,
        explanation: "HTTP (HyperText Transfer Protocol) is used to transfer web pages from a web server to a browser. HTTPS is its secure version."
      },
      {
        question: "A network spread across a city is called a:",
        options: ["LAN", "MAN", "WAN", "PAN"],
        correct: 1,
        explanation: "A Metropolitan Area Network (MAN) covers a city or a large campus. LAN covers a building, WAN covers countries/continents, and PAN covers a few metres."
      },
      {
        question: "Which device operates at the Network layer (Layer 3) of the OSI model?",
        options: ["Hub", "Switch", "Router", "Repeater"],
        correct: 2,
        explanation: "A Router operates at Layer 3 (Network layer) and routes packets between different networks using IP addresses."
      },
      {
        question: "What is the full form of VoIP?",
        options: [
          "Voice over Internet Protocol",
          "Video over Internet Protocol",
          "Virtual over Internet Protocol",
          "Voice of Internet Provider"
        ],
        correct: 0,
        explanation: "VoIP stands for Voice over Internet Protocol. It allows voice communication over the internet instead of traditional phone lines."
      }
    ]
  },
  {
    id: 6,
    title: "CS Mini Test 6 — Python Error Finding",
    duration: 300,
    questions: [
      {
        question: "What type of error will the following code produce?\n\nmy_list = [1, 2, 3]\nprint(my_list[5])",
        options: ["SyntaxError", "TypeError", "IndexError", "ValueError"],
        correct: 2,
        explanation: "Accessing index 5 in a list with only 3 elements (indices 0-2) raises an IndexError."
      },
      {
        question: "What is the output?\n\ntry:\n    x = int('hello')\nexcept ValueError:\n    print('A', end=' ')\nexcept:\n    print('B', end=' ')\nfinally:\n    print('C')",
        options: ["A C", "B C", "A B C", "C"],
        correct: 0,
        explanation: "int('hello') raises ValueError, caught by the first except block printing 'A '. The finally block always runs, printing 'C'. Output: A C."
      },
      {
        question: "Identify the error in this code:\n\ndef greet(name)\n    print('Hello', name)",
        options: ["IndentationError", "SyntaxError — missing colon", "NameError", "TypeError"],
        correct: 1,
        explanation: "The function definition is missing a colon after the parameter list. It should be def greet(name): — this causes a SyntaxError."
      },
      {
        question: "What is the output?\n\na = 10\ndef func():\n    a = a + 5\n    print(a)\nfunc()",
        options: ["15", "10", "UnboundLocalError", "NameError"],
        correct: 2,
        explanation: "Inside func(), the assignment 'a = a + 5' makes 'a' a local variable. But reading 'a' on the right side before it is assigned raises UnboundLocalError."
      },
      {
        question: "What is the output?\n\nprint(type(3/2))\nprint(type(3//2))",
        options: [
          "<class 'float'>\\n<class 'int'>",
          "<class 'int'>\\n<class 'int'>",
          "<class 'float'>\\n<class 'float'>",
          "<class 'int'>\\n<class 'float'>"
        ],
        correct: 0,
        explanation: "The / operator always returns a float (1.5), while the // operator returns an int when both operands are int (1)."
      }
    ]
  },
  {
    id: 7,
    title: "CS Mini Test 7 — Database Concepts",
    duration: 300,
    questions: [
      {
        question: "In a relational database, the number of rows in a table is called:",
        options: ["Degree", "Cardinality", "Domain", "Attribute"],
        correct: 1,
        explanation: "Cardinality is the number of rows (tuples) in a table. Degree is the number of columns (attributes)."
      },
      {
        question: "Which key uniquely identifies each record in a table?",
        options: ["Foreign Key", "Candidate Key", "Primary Key", "Alternate Key"],
        correct: 2,
        explanation: "A Primary Key uniquely identifies each row in a table. It cannot contain NULL values and must be unique."
      },
      {
        question: "A foreign key in a table refers to the ______ of another table.",
        options: ["Alternate Key", "Candidate Key", "Primary Key", "Super Key"],
        correct: 2,
        explanation: "A Foreign Key is an attribute in one table that references the Primary Key of another table, establishing a relationship between the two tables."
      },
      {
        question: "If a table has 5 columns and 10 rows, what is its degree and cardinality?",
        options: [
          "Degree = 10, Cardinality = 5",
          "Degree = 5, Cardinality = 10",
          "Degree = 50, Cardinality = 50",
          "Degree = 5, Cardinality = 5"
        ],
        correct: 1,
        explanation: "Degree = number of columns = 5. Cardinality = number of rows = 10."
      },
      {
        question: "Which of the following is NOT a valid type of database key?",
        options: ["Composite Key", "Super Key", "Secondary Key", "Loop Key"],
        correct: 3,
        explanation: "Loop Key is not a valid database concept. Composite Key (multiple columns), Super Key (superset of candidate key), and Secondary Key (non-primary index) are all valid."
      }
    ]
  },
  {
    id: 8,
    title: "CS Mini Test 8 — SQL Output Prediction",
    duration: 300,
    questions: [
      {
        question: "Table: PRODUCTS(PID, PName, Price)\nData: (1,'Pen',10), (2,'Book',50), (3,'Bag',200), (4,'Pen',15)\n\nSELECT PName, MAX(Price) FROM PRODUCTS GROUP BY PName;",
        options: [
          "Pen 15\\nBook 50\\nBag 200",
          "Pen 10\\nBook 50\\nBag 200",
          "Bag 200",
          "Pen 25\\nBook 50\\nBag 200"
        ],
        correct: 0,
        explanation: "GROUP BY PName groups 'Pen' rows together. MAX(Price) for Pen is 15, Book is 50, Bag is 200."
      },
      {
        question: "What is the output?\n\nSELECT SUBSTR('INFORMATICS', 3, 4);",
        options: ["FORM", "INFO", "NFOR", "FORM"],
        correct: 0,
        explanation: "SUBSTR('INFORMATICS', 3, 4) extracts 4 characters starting from position 3. Position 3 is 'F', so the result is 'FORM'."
      },
      {
        question: "Table: EMP(EmpID, Name, Salary)\nData: (1,'Anu',5000), (2,'Bala',NULL), (3,'Charu',7000)\n\nSELECT SUM(Salary), AVG(Salary) FROM EMP;",
        options: [
          "12000, 4000",
          "12000, 6000",
          "NULL, NULL",
          "12000, 12000"
        ],
        correct: 1,
        explanation: "SUM ignores NULL: 5000+7000=12000. AVG ignores NULL and divides by count of non-null values: 12000/2=6000."
      },
      {
        question: "Which SQL command is used to add a new column to an existing table?",
        options: [
          "INSERT INTO",
          "UPDATE TABLE",
          "ALTER TABLE ... ADD",
          "MODIFY TABLE"
        ],
        correct: 2,
        explanation: "ALTER TABLE table_name ADD column_name datatype; is used to add a new column to an existing table."
      },
      {
        question: "What does the following query return?\n\nSELECT COUNT(DISTINCT City) FROM CUSTOMER;",
        options: [
          "Number of customers",
          "Number of unique cities",
          "List of all cities",
          "List of unique cities"
        ],
        correct: 1,
        explanation: "COUNT(DISTINCT City) counts only the unique (non-duplicate) city values, ignoring NULLs."
      }
    ]
  },
  {
    id: 9,
    title: "CS Mini Test 9 — Python Functions & Scope",
    duration: 300,
    questions: [
      {
        question: "What is the output?\n\ndef calc(x, y=2):\n    return x ** y\n\nprint(calc(3))\nprint(calc(3, 3))",
        options: ["6\\n9", "9\\n27", "9\\n9", "8\\n27"],
        correct: 1,
        explanation: "calc(3) → 3**2 = 9. calc(3,3) → 3**3 = 27."
      },
      {
        question: "What is the output?\n\ndef modify(lst):\n    lst.append(4)\n\nL = [1, 2, 3]\nmodify(L)\nprint(L)",
        options: ["[1, 2, 3]", "[1, 2, 3, 4]", "[4, 1, 2, 3]", "Error"],
        correct: 1,
        explanation: "Lists are mutable and passed by reference. The append inside modify() changes the original list L to [1, 2, 3, 4]."
      },
      {
        question: "What is the output?\n\nx = 50\ndef func():\n    global x\n    x = x + 10\nfunc()\nprint(x)",
        options: ["50", "60", "Error", "None"],
        correct: 1,
        explanation: "The 'global' keyword allows func() to modify the global variable x. So x becomes 50 + 10 = 60."
      },
      {
        question: "Which of the following is NOT a valid function call for:\ndef display(a, b, c=10):\n    print(a, b, c)",
        options: [
          "display(1, 2)",
          "display(1, 2, 3)",
          "display(a=1, b=2)",
          "display(a=1, 2, 3)"
        ],
        correct: 3,
        explanation: "In Python, positional arguments cannot follow keyword arguments. display(a=1, 2, 3) is a SyntaxError."
      },
      {
        question: "What is the output?\n\ndef func(*args):\n    print(type(args))\n\nfunc(1, 2, 3)",
        options: ["<class 'list'>", "<class 'tuple'>", "<class 'dict'>", "<class 'set'>"],
        correct: 1,
        explanation: "*args collects positional arguments into a tuple. So type(args) is <class 'tuple'>."
      }
    ]
  },
  {
    id: 10,
    title: "CS Mini Test 10 — CSV & Binary File Handling",
    duration: 300,
    questions: [
      {
        question: "Which module is used to work with CSV files in Python?",
        options: ["file", "csv", "os", "json"],
        correct: 1,
        explanation: "The csv module provides functionality to read from and write to CSV (Comma Separated Values) files."
      },
      {
        question: "What does the following code do?\n\nimport csv\nf = open('data.csv', 'w', newline='')\nwriter = csv.writer(f)\nwriter.writerow(['Name', 'Age'])\nf.close()",
        options: [
          "Reads a CSV file",
          "Writes a header row to a CSV file",
          "Appends data to a CSV file",
          "Deletes a CSV file"
        ],
        correct: 1,
        explanation: "csv.writer() creates a writer object. writerow() writes one row — here the header ['Name', 'Age'] — to the CSV file opened in 'w' mode."
      },
      {
        question: "To write a Python dictionary to a binary file, which pickle method is used?",
        options: ["pickle.save()", "pickle.dump()", "pickle.write()", "pickle.store()"],
        correct: 1,
        explanation: "pickle.dump(object, file) serializes a Python object and writes it to a binary file. pickle.load(file) is used to read it back."
      },
      {
        question: "What happens when pickle.load() reaches the end of a binary file?",
        options: [
          "Returns None",
          "Returns an empty string",
          "Raises EOFError",
          "Raises FileNotFoundError"
        ],
        correct: 2,
        explanation: "When there is no more data to read, pickle.load() raises an EOFError exception, which should be handled using try-except."
      },
      {
        question: "What is the correct way to open a binary file for reading?",
        options: [
          "open('file.dat', 'r')",
          "open('file.dat', 'rb')",
          "open('file.dat', 'br')",
          "open('file.dat', 'read-binary')"
        ],
        correct: 1,
        explanation: "'rb' stands for read-binary mode. The 'b' flag must be added to the standard mode character for binary file operations."
      }
    ]
  },
  {
    id: 11,
    title: "CS Mini Test 11 — Networks & Protocols",
    duration: 300,
    questions: [
      {
        question: "Which device regenerates a weakened signal to extend the range of a network?",
        options: ["Router", "Gateway", "Repeater", "Modem"],
        correct: 2,
        explanation: "A Repeater operates at the Physical layer and amplifies/regenerates a signal to extend transmission distance."
      },
      {
        question: "Which protocol is used to send emails?",
        options: ["POP3", "IMAP", "SMTP", "HTTP"],
        correct: 2,
        explanation: "SMTP (Simple Mail Transfer Protocol) is used to send emails. POP3 and IMAP are used to receive/retrieve emails."
      },
      {
        question: "In which topology does data travel in one direction in a closed loop?",
        options: ["Star", "Bus", "Ring", "Tree"],
        correct: 2,
        explanation: "In Ring topology, each device is connected to exactly two other devices, forming a circular path. Data travels in one direction (unidirectional)."
      },
      {
        question: "Which of the following is a guided (wired) transmission medium?",
        options: ["Microwave", "Bluetooth", "Optical Fibre", "Infrared"],
        correct: 2,
        explanation: "Optical Fibre is a guided (wired) medium that uses light signals. Microwave, Bluetooth, and Infrared are unguided (wireless) media."
      },
      {
        question: "What does a modem do?",
        options: [
          "Routes packets between networks",
          "Converts digital signals to analog and vice versa",
          "Connects multiple LANs",
          "Amplifies signals"
        ],
        correct: 1,
        explanation: "A Modem (Modulator-Demodulator) converts digital signals to analog for transmission over phone lines and analog back to digital at the receiving end."
      }
    ]
  },
  {
    id: 12,
    title: "CS Mini Test 12 — Python Strings & Lists",
    duration: 300,
    questions: [
      {
        question: "What is the output?\n\ns = 'Hello World'\nprint(s.split())",
        options: [
          "['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']",
          "['Hello', 'World']",
          "['Hello World']",
          "('Hello', 'World')"
        ],
        correct: 1,
        explanation: "split() without arguments splits the string by whitespace. So 'Hello World' becomes ['Hello', 'World']."
      },
      {
        question: "What is the output?\n\nL = [10, 20, 30, 40, 50]\nL.insert(2, 25)\nprint(L)",
        options: [
          "[10, 20, 25, 30, 40, 50]",
          "[10, 25, 20, 30, 40, 50]",
          "[10, 20, 30, 25, 40, 50]",
          "Error"
        ],
        correct: 0,
        explanation: "insert(2, 25) inserts 25 at index 2, shifting existing elements to the right. Result: [10, 20, 25, 30, 40, 50]."
      },
      {
        question: "What is the output?\n\nprint('Python'.find('th'))\nprint('Python'.find('xyz'))",
        options: ["2\\n-1", "3\\n-1", "2\\nError", "3\\nNone"],
        correct: 0,
        explanation: "find('th') returns index 2 (where 'th' starts in 'Python'). find('xyz') returns -1 as the substring is not found."
      },
      {
        question: "What is the output?\n\na = [1, 2, 3]\nb = a\nb.append(4)\nprint(a)",
        options: ["[1, 2, 3]", "[1, 2, 3, 4]", "[4, 1, 2, 3]", "Error"],
        correct: 1,
        explanation: "b = a does not create a copy — both a and b refer to the same list object. Modifying b also modifies a."
      },
      {
        question: "What is the output?\n\nprint('abcabc'.count('a'))",
        options: ["1", "2", "3", "0"],
        correct: 1,
        explanation: "count('a') returns the number of non-overlapping occurrences of 'a' in the string 'abcabc', which is 2."
      }
    ]
  },
  {
    id: 13,
    title: "CS Mini Test 13 — SQL Joins & Advanced Queries",
    duration: 300,
    questions: [
      {
        question: "Table A(ID, Name): (1,'Anu'), (2,'Bala'), (3,'Charu')\nTable B(ID, City): (1,'Delhi'), (3,'Mumbai'), (4,'Chennai')\n\nSELECT A.Name, B.City FROM A, B WHERE A.ID = B.ID;",
        options: [
          "Anu Delhi\\nCharu Mumbai",
          "Anu Delhi\\nBala NULL\\nCharu Mumbai",
          "Anu Delhi\\nCharu Mumbai\\nNULL Chennai",
          "All 9 combinations"
        ],
        correct: 0,
        explanation: "This is an equi-join (inner join). Only matching IDs (1 and 3) appear. ID 2 has no match in B, ID 4 has no match in A."
      },
      {
        question: "What does ORDER BY Name DESC do?",
        options: [
          "Sorts names in ascending order",
          "Sorts names in descending order",
          "Groups names in descending order",
          "Removes duplicate names"
        ],
        correct: 1,
        explanation: "ORDER BY Name DESC sorts the result set by the Name column in descending (reverse alphabetical) order."
      },
      {
        question: "Which SQL command is used to permanently save the changes made by DML commands?",
        options: ["SAVEPOINT", "ROLLBACK", "COMMIT", "GRANT"],
        correct: 2,
        explanation: "COMMIT permanently saves all changes made by INSERT, UPDATE, DELETE since the last COMMIT. ROLLBACK undoes them."
      },
      {
        question: "Table: BOOKS(BID, Title, Price)\nData: (1,'Python',300), (2,'Java',NULL), (3,'C++',250), (4,'SQL',NULL)\n\nSELECT COUNT(*), COUNT(Price) FROM BOOKS;",
        options: ["4, 4", "4, 2", "2, 2", "2, 4"],
        correct: 1,
        explanation: "COUNT(*) counts all rows = 4. COUNT(Price) counts only non-NULL values in the Price column = 2 (300 and 250)."
      },
      {
        question: "Which clause is used with SELECT to restrict groups returned by GROUP BY?",
        options: ["WHERE", "HAVING", "LIMIT", "CHECK"],
        correct: 1,
        explanation: "HAVING filters groups after GROUP BY. WHERE filters individual rows before grouping. HAVING can use aggregate functions, WHERE cannot."
      }
    ]
  },
  {
    id: 14,
    title: "CS Mini Test 14 — Stack Applications & Python Mixed",
    duration: 300,
    questions: [
      {
        question: "Evaluate the postfix expression: 5 3 2 * + 4 -",
        options: ["7", "22", "15", "5"],
        correct: 0,
        explanation: "Step by step: Push 5,3,2. Pop 2,3 → 3*2=6, push 6. Pop 6,5 → 5+6=11, push 11. Push 4. Pop 4,11 → 11-4=7."
      },
      {
        question: "What is the output?\n\ndef push(stack, item):\n    stack.append(item)\n\ndef pop(stack):\n    if stack:\n        return stack.pop()\n\nS = []\npush(S, 'A')\npush(S, 'B')\npush(S, 'C')\npop(S)\npop(S)\nprint(S)",
        options: ["['A']", "['C']", "['A', 'B']", "['B', 'C']"],
        correct: 0,
        explanation: "Push A, B, C → ['A','B','C']. First pop removes 'C' → ['A','B']. Second pop removes 'B' → ['A']."
      },
      {
        question: "What is the output?\n\nprint(bool(''), bool('0'), bool(0))",
        options: [
          "False True False",
          "False False False",
          "True True False",
          "False True True"
        ],
        correct: 0,
        explanation: "bool('') is False (empty string). bool('0') is True (non-empty string — the character '0'). bool(0) is False (zero integer)."
      },
      {
        question: "Which data structure is used for function call management in a program?",
        options: ["Queue", "Stack", "Linked List", "Tree"],
        correct: 1,
        explanation: "The call stack is used to manage function calls. When a function is called, its context is pushed; when it returns, it is popped."
      },
      {
        question: "What is the output?\n\nD = {'a': 1, 'b': 2}\nD['c'] = D.get('a', 0) + D.get('d', 5)\nprint(D['c'])",
        options: ["1", "5", "6", "Error"],
        correct: 2,
        explanation: "D.get('a', 0) returns 1 (key 'a' exists). D.get('d', 5) returns 5 (key 'd' missing, default 5). So D['c'] = 1 + 5 = 6."
      }
    ]
  },
  {
    id: 15,
    title: "CS Mini Test 15 — Mixed Revision",
    duration: 300,
    questions: [
      {
        question: "What is the output?\n\nimport pickle\ndata = {'name': 'Anu', 'marks': 95}\nf = open('stu.dat', 'wb')\npickle.dump(data, f)\nf.close()\n\nf = open('stu.dat', 'rb')\nresult = pickle.load(f)\nf.close()\nprint(result['name'])",
        options: ["{'name': 'Anu', 'marks': 95}", "Anu", "name", "Error"],
        correct: 1,
        explanation: "pickle.dump() writes the dictionary to the file. pickle.load() reads it back as a dictionary. result['name'] gives 'Anu'."
      },
      {
        question: "A switch operates at which layer of the OSI model?",
        options: [
          "Physical Layer (Layer 1)",
          "Data Link Layer (Layer 2)",
          "Network Layer (Layer 3)",
          "Transport Layer (Layer 4)"
        ],
        correct: 1,
        explanation: "A Switch operates at the Data Link Layer (Layer 2) and uses MAC addresses to forward frames to the correct port."
      },
      {
        question: "Table: STUDENT(RollNo, Name, Stream)\n\nWhich SQL command removes the entire table structure along with data?",
        options: ["DELETE FROM STUDENT;", "DROP TABLE STUDENT;", "REMOVE TABLE STUDENT;", "TRUNCATE TABLE STUDENT;"],
        correct: 1,
        explanation: "DROP TABLE removes the table structure and all data permanently. DELETE removes rows but keeps the structure. TRUNCATE removes all rows but keeps the structure."
      },
      {
        question: "What is the output?\n\nx = lambda a, b: a if a > b else b\nprint(x(10, 20))",
        options: ["10", "20", "True", "Error"],
        correct: 1,
        explanation: "The lambda returns a if a > b, else b. Since 10 is not greater than 20, it returns 20."
      },
      {
        question: "seek(0, 2) in file handling moves the file pointer to:",
        options: [
          "Beginning of the file",
          "Current position",
          "End of the file",
          "Position 2 from start"
        ],
        correct: 2,
        explanation: "seek(offset, whence) — whence=0 means from start, 1 means from current, 2 means from end. seek(0, 2) moves to 0 bytes from the end, i.e., the end of the file."
      }
    ]
  }
];

if (typeof module !== 'undefined') module.exports = csTests;
