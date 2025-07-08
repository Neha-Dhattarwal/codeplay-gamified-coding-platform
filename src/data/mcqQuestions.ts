export interface MCQQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export const mcqQuestions: MCQQuestion[] = [
  // JavaScript Questions (30)
  {
    id: 1,
    question: "What is the time complexity of binary search?",
    options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
    correctAnswer: 1,
    explanation: "Binary search divides the search space in half with each comparison, resulting in O(log n) time complexity.",
    category: "Algorithms",
    difficulty: "Easy"
  },
  {
    id: 2,
    question: "Which data structure uses LIFO (Last In, First Out) principle?",
    options: ["Queue", "Stack", "Array", "Linked List"],
    correctAnswer: 1,
    explanation: "Stack follows LIFO principle where the last element added is the first one to be removed.",
    category: "Data Structures",
    difficulty: "Easy"
  },
  {
    id: 3,
    question: "In JavaScript, what does '===' operator do?",
    options: ["Assignment", "Equality with type coercion", "Strict equality", "Not equal"],
    correctAnswer: 2,
    explanation: "The '===' operator checks for strict equality, comparing both value and type without type coercion.",
    category: "JavaScript",
    difficulty: "Easy"
  },
  {
    id: 4,
    question: "What is the space complexity of merge sort?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    correctAnswer: 2,
    explanation: "Merge sort requires O(n) additional space for the temporary arrays used during the merge process.",
    category: "Algorithms",
    difficulty: "Medium"
  },
  {
    id: 5,
    question: "Which HTTP status code indicates 'Not Found'?",
    options: ["200", "404", "500", "403"],
    correctAnswer: 1,
    explanation: "HTTP status code 404 indicates that the requested resource could not be found on the server.",
    category: "Web Development",
    difficulty: "Easy"
  },
  {
    id: 6,
    question: "What is the output of: console.log(typeof null) in JavaScript?",
    options: ["null", "undefined", "object", "boolean"],
    correctAnswer: 2,
    explanation: "In JavaScript, typeof null returns 'object' due to a historical bug that has been kept for backward compatibility.",
    category: "JavaScript",
    difficulty: "Medium"
  },
  {
    id: 7,
    question: "Which sorting algorithm has the best average-case time complexity?",
    options: ["Bubble Sort", "Quick Sort", "Selection Sort", "Insertion Sort"],
    correctAnswer: 1,
    explanation: "Quick Sort has an average-case time complexity of O(n log n), which is optimal for comparison-based sorting algorithms.",
    category: "Algorithms",
    difficulty: "Medium"
  },
  {
    id: 8,
    question: "What does SQL stand for?",
    options: ["Structured Query Language", "Standard Query Language", "Simple Query Language", "Sequential Query Language"],
    correctAnswer: 0,
    explanation: "SQL stands for Structured Query Language, used for managing and manipulating relational databases.",
    category: "Database",
    difficulty: "Easy"
  },
  {
    id: 9,
    question: "In Python, which method is used to add an element to the end of a list?",
    options: ["add()", "insert()", "append()", "push()"],
    correctAnswer: 2,
    explanation: "The append() method is used to add an element to the end of a list in Python.",
    category: "Python",
    difficulty: "Easy"
  },
  {
    id: 10,
    question: "What is the maximum number of edges in a simple graph with n vertices?",
    options: ["n", "n-1", "n(n-1)/2", "n²"],
    correctAnswer: 2,
    explanation: "In a simple graph with n vertices, the maximum number of edges is n(n-1)/2, which occurs in a complete graph.",
    category: "Graph Theory",
    difficulty: "Medium"
  },
  {
    id: 11,
    question: "Which design pattern ensures a class has only one instance?",
    options: ["Factory", "Singleton", "Observer", "Strategy"],
    correctAnswer: 1,
    explanation: "The Singleton pattern ensures that a class has only one instance and provides global access to it.",
    category: "Design Patterns",
    difficulty: "Medium"
  },
  {
    id: 12,
    question: "What is the time complexity of inserting an element at the beginning of an array?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    correctAnswer: 2,
    explanation: "Inserting at the beginning requires shifting all existing elements, resulting in O(n) time complexity.",
    category: "Data Structures",
    difficulty: "Easy"
  },
  {
    id: 13,
    question: "In CSS, which property is used to change the text color?",
    options: ["text-color", "font-color", "color", "text-style"],
    correctAnswer: 2,
    explanation: "The 'color' property in CSS is used to set the color of text content.",
    category: "CSS",
    difficulty: "Easy"
  },
  {
    id: 14,
    question: "What does the 'git merge' command do?",
    options: ["Creates a new branch", "Deletes a branch", "Combines branches", "Renames a branch"],
    correctAnswer: 2,
    explanation: "The 'git merge' command combines changes from different branches into the current branch.",
    category: "Git",
    difficulty: "Easy"
  },
  {
    id: 15,
    question: "Which of the following is NOT a primitive data type in JavaScript?",
    options: ["string", "number", "array", "boolean"],
    correctAnswer: 2,
    explanation: "Array is not a primitive data type in JavaScript. It's an object type. Primitive types include string, number, boolean, null, undefined, symbol, and bigint.",
    category: "JavaScript",
    difficulty: "Medium"
  },
  {
    id: 16,
    question: "What is the worst-case time complexity of quicksort?",
    options: ["O(n log n)", "O(n²)", "O(n)", "O(log n)"],
    correctAnswer: 1,
    explanation: "Quicksort has a worst-case time complexity of O(n²) when the pivot is always the smallest or largest element.",
    category: "Algorithms",
    difficulty: "Medium"
  },
  {
    id: 17,
    question: "In React, what is the purpose of the useEffect hook?",
    options: ["State management", "Side effects", "Event handling", "Component rendering"],
    correctAnswer: 1,
    explanation: "useEffect is used to perform side effects in functional components, such as data fetching, subscriptions, or DOM manipulation.",
    category: "React",
    difficulty: "Medium"
  },
  {
    id: 18,
    question: "Which data structure is best for implementing a priority queue?",
    options: ["Array", "Linked List", "Heap", "Stack"],
    correctAnswer: 2,
    explanation: "A heap is the most efficient data structure for implementing a priority queue, providing O(log n) insertion and deletion.",
    category: "Data Structures",
    difficulty: "Medium"
  },
  {
    id: 19,
    question: "What is the purpose of the 'virtual' keyword in C++?",
    options: ["Memory allocation", "Polymorphism", "Inheritance", "Encapsulation"],
    correctAnswer: 1,
    explanation: "The 'virtual' keyword enables polymorphism by allowing derived classes to override base class methods.",
    category: "C++",
    difficulty: "Medium"
  },
  {
    id: 20,
    question: "In database normalization, what is the purpose of 1NF?",
    options: ["Remove duplicates", "Eliminate partial dependencies", "Remove transitive dependencies", "Ensure atomic values"],
    correctAnswer: 3,
    explanation: "First Normal Form (1NF) ensures that each column contains atomic (indivisible) values and eliminates repeating groups.",
    category: "Database",
    difficulty: "Medium"
  },
  {
    id: 21,
    question: "What is the time complexity of searching in a balanced BST?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: 1,
    explanation: "Searching in a balanced Binary Search Tree has O(log n) time complexity due to the tree's height being logarithmic.",
    category: "Data Structures",
    difficulty: "Easy"
  },
  {
    id: 22,
    question: "Which HTTP method is idempotent?",
    options: ["POST", "PUT", "PATCH", "All of the above"],
    correctAnswer: 1,
    explanation: "PUT is idempotent, meaning multiple identical requests should have the same effect as a single request.",
    category: "Web Development",
    difficulty: "Medium"
  },
  {
    id: 23,
    question: "In Python, what does the 'yield' keyword do?",
    options: ["Returns a value", "Creates a generator", "Raises an exception", "Imports a module"],
    correctAnswer: 1,
    explanation: "The 'yield' keyword is used to create generators, which are functions that can pause and resume execution.",
    category: "Python",
    difficulty: "Medium"
  },
  {
    id: 24,
    question: "What is the space complexity of depth-first search (DFS)?",
    options: ["O(1)", "O(V)", "O(E)", "O(V + E)"],
    correctAnswer: 1,
    explanation: "DFS has O(V) space complexity due to the recursion stack or explicit stack storing vertices.",
    category: "Algorithms",
    difficulty: "Medium"
  },
  {
    id: 25,
    question: "Which CSS property is used for responsive design?",
    options: ["display", "position", "media-query", "flex"],
    correctAnswer: 2,
    explanation: "Media queries (@media) are used to apply different styles based on device characteristics for responsive design.",
    category: "CSS",
    difficulty: "Easy"
  },
  {
    id: 26,
    question: "What is the difference between '==' and '===' in JavaScript?",
    options: ["No difference", "=== checks type", "== is faster", "=== is deprecated"],
    correctAnswer: 1,
    explanation: "=== performs strict equality comparison (value and type), while == performs loose equality with type coercion.",
    category: "JavaScript",
    difficulty: "Easy"
  },
  {
    id: 27,
    question: "In object-oriented programming, what is encapsulation?",
    options: ["Code reuse", "Data hiding", "Multiple inheritance", "Method overriding"],
    correctAnswer: 1,
    explanation: "Encapsulation is the bundling of data and methods that operate on that data, restricting direct access to some components.",
    category: "OOP",
    difficulty: "Easy"
  },
  {
    id: 28,
    question: "What is the time complexity of heap sort?",
    options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
    correctAnswer: 1,
    explanation: "Heap sort has O(n log n) time complexity in all cases (best, average, and worst).",
    category: "Algorithms",
    difficulty: "Medium"
  },
  {
    id: 29,
    question: "Which SQL command is used to remove a table?",
    options: ["DELETE", "REMOVE", "DROP", "CLEAR"],
    correctAnswer: 2,
    explanation: "The DROP command is used to remove a table and all its data from the database.",
    category: "Database",
    difficulty: "Easy"
  },
  {
    id: 30,
    question: "In React, what is the virtual DOM?",
    options: ["Real DOM copy", "JavaScript representation", "Browser API", "CSS framework"],
    correctAnswer: 1,
    explanation: "The virtual DOM is a JavaScript representation of the real DOM that React uses for efficient updates.",
    category: "React",
    difficulty: "Medium"
  },
  // Additional 70 questions covering various topics
  {
    id: 31,
    question: "What is the purpose of the 'static' keyword in Java?",
    options: ["Memory allocation", "Class-level access", "Inheritance", "Polymorphism"],
    correctAnswer: 1,
    explanation: "The 'static' keyword creates class-level members that belong to the class rather than instances.",
    category: "Java",
    difficulty: "Easy"
  },
  {
    id: 32,
    question: "Which algorithm is used for finding shortest paths in a weighted graph?",
    options: ["BFS", "DFS", "Dijkstra's", "Kruskal's"],
    correctAnswer: 2,
    explanation: "Dijkstra's algorithm finds shortest paths from a source vertex to all other vertices in a weighted graph.",
    category: "Algorithms",
    difficulty: "Medium"
  },
  {
    id: 33,
    question: "What does ACID stand for in database transactions?",
    options: ["Atomicity, Consistency, Isolation, Durability", "Access, Control, Integration, Data", "Automatic, Concurrent, Independent, Distributed", "Abstract, Concrete, Inherited, Derived"],
    correctAnswer: 0,
    explanation: "ACID represents the four key properties of database transactions: Atomicity, Consistency, Isolation, and Durability.",
    category: "Database",
    difficulty: "Medium"
  },
  {
    id: 34,
    question: "In Python, what is a lambda function?",
    options: ["Named function", "Anonymous function", "Class method", "Built-in function"],
    correctAnswer: 1,
    explanation: "A lambda function is an anonymous function that can be defined inline and used for short operations.",
    category: "Python",
    difficulty: "Easy"
  },
  {
    id: 35,
    question: "What is the time complexity of bubble sort?",
    options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
    correctAnswer: 2,
    explanation: "Bubble sort has O(n²) time complexity in both average and worst cases due to nested loops.",
    category: "Algorithms",
    difficulty: "Easy"
  },
  {
    id: 36,
    question: "Which HTML tag is used for creating hyperlinks?",
    options: ["<link>", "<href>", "<a>", "<url>"],
    correctAnswer: 2,
    explanation: "The <a> (anchor) tag is used to create hyperlinks in HTML.",
    category: "HTML",
    difficulty: "Easy"
  },
  {
    id: 37,
    question: "What is the difference between let and var in JavaScript?",
    options: ["No difference", "Scope difference", "Type difference", "Speed difference"],
    correctAnswer: 1,
    explanation: "let has block scope while var has function scope, and let prevents hoisting issues.",
    category: "JavaScript",
    difficulty: "Medium"
  },
  {
    id: 38,
    question: "In CSS, what does the 'box-sizing' property control?",
    options: ["Element size", "Box model calculation", "Border style", "Margin spacing"],
    correctAnswer: 1,
    explanation: "The box-sizing property controls how the total width and height of an element is calculated.",
    category: "CSS",
    difficulty: "Medium"
  },
  {
    id: 39,
    question: "What is a hash table's average time complexity for search operations?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    correctAnswer: 0,
    explanation: "Hash tables provide O(1) average time complexity for search, insert, and delete operations.",
    category: "Data Structures",
    difficulty: "Easy"
  },
  {
    id: 40,
    question: "Which design pattern is used to create objects without specifying their exact class?",
    options: ["Singleton", "Factory", "Observer", "Strategy"],
    correctAnswer: 1,
    explanation: "The Factory pattern creates objects without specifying the exact class of object that will be created.",
    category: "Design Patterns",
    difficulty: "Medium"
  },
  {
    id: 41,
    question: "What is the purpose of normalization in databases?",
    options: ["Increase speed", "Reduce redundancy", "Add security", "Improve backup"],
    correctAnswer: 1,
    explanation: "Database normalization reduces data redundancy and improves data integrity.",
    category: "Database",
    difficulty: "Medium"
  },
  {
    id: 42,
    question: "In Git, what does 'git pull' do?",
    options: ["Push changes", "Fetch and merge", "Create branch", "Delete files"],
    correctAnswer: 1,
    explanation: "git pull fetches changes from a remote repository and merges them into the current branch.",
    category: "Git",
    difficulty: "Easy"
  },
  {
    id: 43,
    question: "What is the space complexity of breadth-first search (BFS)?",
    options: ["O(1)", "O(V)", "O(E)", "O(V + E)"],
    correctAnswer: 1,
    explanation: "BFS has O(V) space complexity due to the queue storing vertices at each level.",
    category: "Algorithms",
    difficulty: "Medium"
  },
  {
    id: 44,
    question: "Which HTTP status code indicates successful request?",
    options: ["100", "200", "300", "400"],
    correctAnswer: 1,
    explanation: "HTTP status code 200 indicates that the request was successful.",
    category: "Web Development",
    difficulty: "Easy"
  },
  {
    id: 45,
    question: "In Python, what is the difference between a list and a tuple?",
    options: ["No difference", "Mutability", "Size", "Performance"],
    correctAnswer: 1,
    explanation: "Lists are mutable (can be changed) while tuples are immutable (cannot be changed after creation).",
    category: "Python",
    difficulty: "Easy"
  },
  {
    id: 46,
    question: "What is the time complexity of insertion sort in the best case?",
    options: ["O(1)", "O(n)", "O(n log n)", "O(n²)"],
    correctAnswer: 1,
    explanation: "Insertion sort has O(n) time complexity in the best case when the array is already sorted.",
    category: "Algorithms",
    difficulty: "Medium"
  },
  {
    id: 47,
    question: "Which CSS property is used to create flexible layouts?",
    options: ["display: block", "display: flex", "display: inline", "display: none"],
    correctAnswer: 1,
    explanation: "display: flex creates flexible layouts using the Flexbox model.",
    category: "CSS",
    difficulty: "Easy"
  },
  {
    id: 48,
    question: "What is polymorphism in object-oriented programming?",
    options: ["Data hiding", "Code reuse", "Multiple forms", "Single inheritance"],
    correctAnswer: 2,
    explanation: "Polymorphism allows objects of different types to be treated as instances of the same type through a common interface.",
    category: "OOP",
    difficulty: "Medium"
  },
  {
    id: 49,
    question: "In JavaScript, what is closure?",
    options: ["Function ending", "Variable scope", "Inner function access", "Loop termination"],
    correctAnswer: 2,
    explanation: "A closure gives an inner function access to the outer function's variables and scope.",
    category: "JavaScript",
    difficulty: "Hard"
  },
  {
    id: 50,
    question: "What is the primary purpose of an index in a database?",
    options: ["Data storage", "Query optimization", "Data validation", "Backup creation"],
    correctAnswer: 1,
    explanation: "Database indexes are used to speed up query performance by providing faster data retrieval.",
    category: "Database",
    difficulty: "Medium"
  },
  // Continue with more questions...
  {
    id: 51,
    question: "Which sorting algorithm is stable?",
    options: ["Quick Sort", "Heap Sort", "Merge Sort", "Selection Sort"],
    correctAnswer: 2,
    explanation: "Merge Sort is stable, meaning it maintains the relative order of equal elements.",
    category: "Algorithms",
    difficulty: "Medium"
  },
  {
    id: 52,
    question: "What does REST stand for in web services?",
    options: ["Representational State Transfer", "Remote State Transmission", "Reliable Service Technology", "Resource State Transfer"],
    correctAnswer: 0,
    explanation: "REST stands for Representational State Transfer, an architectural style for web services.",
    category: "Web Development",
    difficulty: "Medium"
  },
  {
    id: 53,
    question: "In Python, what is the purpose of the '__init__' method?",
    options: ["Class destruction", "Object initialization", "Method overriding", "Import handling"],
    correctAnswer: 1,
    explanation: "The __init__ method is a constructor that initializes objects when they are created.",
    category: "Python",
    difficulty: "Easy"
  },
  {
    id: 54,
    question: "What is the time complexity of accessing an element in an array by index?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    correctAnswer: 0,
    explanation: "Array access by index is O(1) constant time since arrays provide direct memory access.",
    category: "Data Structures",
    difficulty: "Easy"
  },
  {
    id: 55,
    question: "Which CSS unit is relative to the font size of the element?",
    options: ["px", "em", "pt", "cm"],
    correctAnswer: 1,
    explanation: "The 'em' unit is relative to the font size of the element (1em = current font size).",
    category: "CSS",
    difficulty: "Easy"
  },
  {
    id: 56,
    question: "What is the purpose of the 'final' keyword in Java?",
    options: ["Method ending", "Prevent inheritance/modification", "Memory management", "Exception handling"],
    correctAnswer: 1,
    explanation: "The 'final' keyword prevents inheritance for classes, overriding for methods, and reassignment for variables.",
    category: "Java",
    difficulty: "Medium"
  },
  {
    id: 57,
    question: "In graph theory, what is a spanning tree?",
    options: ["Complete graph", "Subgraph with all vertices", "Cyclic graph", "Directed graph"],
    correctAnswer: 1,
    explanation: "A spanning tree is a subgraph that includes all vertices of the original graph with minimum edges and no cycles.",
    category: "Graph Theory",
    difficulty: "Medium"
  },
  {
    id: 58,
    question: "What is the difference between SQL and NoSQL databases?",
    options: ["Speed difference", "Structure difference", "Size difference", "Security difference"],
    correctAnswer: 1,
    explanation: "SQL databases use structured, relational data models while NoSQL databases use flexible, non-relational models.",
    category: "Database",
    difficulty: "Medium"
  },
  {
    id: 59,
    question: "In React, what is the purpose of keys in lists?",
    options: ["Styling", "Performance optimization", "Event handling", "State management"],
    correctAnswer: 1,
    explanation: "Keys help React identify which items have changed, are added, or removed for efficient re-rendering.",
    category: "React",
    difficulty: "Medium"
  },
  {
    id: 60,
    question: "What is the time complexity of finding the minimum element in a min-heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: 0,
    explanation: "Finding the minimum element in a min-heap is O(1) since it's always at the root.",
    category: "Data Structures",
    difficulty: "Easy"
  },
  // Continue adding more questions to reach 100+
  {
    id: 61,
    question: "What is the purpose of the 'async' keyword in JavaScript?",
    options: ["Synchronous execution", "Asynchronous functions", "Error handling", "Variable declaration"],
    correctAnswer: 1,
    explanation: "The 'async' keyword is used to declare asynchronous functions that return promises.",
    category: "JavaScript",
    difficulty: "Medium"
  },
  {
    id: 62,
    question: "Which data structure is best for implementing undo functionality?",
    options: ["Queue", "Stack", "Tree", "Graph"],
    correctAnswer: 1,
    explanation: "Stack is ideal for undo functionality due to its LIFO nature, allowing recent actions to be undone first.",
    category: "Data Structures",
    difficulty: "Easy"
  },
  {
    id: 63,
    question: "What is the purpose of CSS Grid?",
    options: ["Text formatting", "Two-dimensional layouts", "Animation", "Color management"],
    correctAnswer: 1,
    explanation: "CSS Grid is designed for creating two-dimensional layouts with rows and columns.",
    category: "CSS",
    difficulty: "Medium"
  },
  {
    id: 64,
    question: "In Python, what is a decorator?",
    options: ["Design pattern", "Function modifier", "Class inheritance", "Error handler"],
    correctAnswer: 1,
    explanation: "A decorator is a function that modifies or extends the behavior of another function or class.",
    category: "Python",
    difficulty: "Hard"
  },
  {
    id: 65,
    question: "What is the worst-case time complexity of linear search?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    correctAnswer: 2,
    explanation: "Linear search has O(n) worst-case time complexity when the element is at the end or not found.",
    category: "Algorithms",
    difficulty: "Easy"
  },
  {
    id: 66,
    question: "Which HTTP method is used to update a resource?",
    options: ["GET", "POST", "PUT", "DELETE"],
    correctAnswer: 2,
    explanation: "PUT is used to update or replace a resource completely.",
    category: "Web Development",
    difficulty: "Easy"
  },
  {
    id: 67,
    question: "What is inheritance in object-oriented programming?",
    options: ["Data hiding", "Code reuse through parent-child relationship", "Method overloading", "Variable scoping"],
    correctAnswer: 1,
    explanation: "Inheritance allows a class to inherit properties and methods from another class, promoting code reuse.",
    category: "OOP",
    difficulty: "Easy"
  },
  {
    id: 68,
    question: "In Git, what is a commit?",
    options: ["Branch creation", "Snapshot of changes", "File deletion", "Repository cloning"],
    correctAnswer: 1,
    explanation: "A commit is a snapshot of changes in the repository at a specific point in time.",
    category: "Git",
    difficulty: "Easy"
  },
  {
    id: 69,
    question: "What is the space complexity of recursive factorial function?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
    correctAnswer: 1,
    explanation: "Recursive factorial has O(n) space complexity due to the call stack storing n function calls.",
    category: "Algorithms",
    difficulty: "Medium"
  },
  {
    id: 70,
    question: "Which SQL clause is used to filter results?",
    options: ["SELECT", "FROM", "WHERE", "ORDER BY"],
    correctAnswer: 2,
    explanation: "The WHERE clause is used to filter records based on specified conditions.",
    category: "Database",
    difficulty: "Easy"
  },
  // Adding 30 more questions to reach 100+
  {
    id: 71,
    question: "What is the difference between '&&' and '||' operators in JavaScript?",
    options: ["No difference", "Logical AND vs OR", "Bitwise operations", "Assignment operators"],
    correctAnswer: 1,
    explanation: "'&&' is logical AND (both conditions must be true), '||' is logical OR (at least one condition must be true).",
    category: "JavaScript",
    difficulty: "Easy"
  },
  {
    id: 72,
    question: "Which algorithm is used for topological sorting?",
    options: ["BFS", "DFS", "Both BFS and DFS", "Dijkstra's"],
    correctAnswer: 2,
    explanation: "Both BFS (Kahn's algorithm) and DFS can be used for topological sorting of directed acyclic graphs.",
    category: "Algorithms",
    difficulty: "Hard"
  },
  {
    id: 73,
    question: "What is the purpose of foreign keys in databases?",
    options: ["Primary identification", "Referential integrity", "Data encryption", "Index creation"],
    correctAnswer: 1,
    explanation: "Foreign keys maintain referential integrity by ensuring relationships between tables remain consistent.",
    category: "Database",
    difficulty: "Medium"
  },
  {
    id: 74,
    question: "In Python, what is the difference between 'is' and '==' operators?",
    options: ["No difference", "Identity vs equality", "Speed difference", "Type checking"],
    correctAnswer: 1,
    explanation: "'is' checks object identity (same object in memory), '==' checks value equality.",
    category: "Python",
    difficulty: "Medium"
  },
  {
    id: 75,
    question: "What is the time complexity of deleting from the middle of a linked list?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    correctAnswer: 2,
    explanation: "Deleting from the middle requires O(n) time to traverse to the position, then O(1) for deletion.",
    category: "Data Structures",
    difficulty: "Medium"
  },
  {
    id: 76,
    question: "Which CSS property controls the stacking order of elements?",
    options: ["position", "display", "z-index", "float"],
    correctAnswer: 2,
    explanation: "The z-index property controls the stacking order of positioned elements.",
    category: "CSS",
    difficulty: "Easy"
  },
  {
    id: 77,
    question: "What is method overloading in Java?",
    options: ["Same method, different parameters", "Different method names", "Inheritance concept", "Interface implementation"],
    correctAnswer: 0,
    explanation: "Method overloading allows multiple methods with the same name but different parameters in the same class.",
    category: "Java",
    difficulty: "Medium"
  },
  {
    id: 78,
    question: "In graph algorithms, what is the purpose of Kruskal's algorithm?",
    options: ["Shortest path", "Minimum spanning tree", "Topological sort", "Cycle detection"],
    correctAnswer: 1,
    explanation: "Kruskal's algorithm finds the minimum spanning tree of a weighted undirected graph.",
    category: "Algorithms",
    difficulty: "Hard"
  },
  {
    id: 79,
    question: "What is the difference between HTTP and HTTPS?",
    options: ["Speed", "Security", "Protocol version", "Port number"],
    correctAnswer: 1,
    explanation: "HTTPS is HTTP with SSL/TLS encryption for secure communication.",
    category: "Web Development",
    difficulty: "Easy"
  },
  {
    id: 80,
    question: "In React, what is the purpose of useCallback hook?",
    options: ["State management", "Memoizing functions", "Side effects", "Context sharing"],
    correctAnswer: 1,
    explanation: "useCallback memoizes functions to prevent unnecessary re-renders in child components.",
    category: "React",
    difficulty: "Hard"
  },
  {
    id: 81,
    question: "What is the time complexity of building a heap from an array?",
    options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
    correctAnswer: 0,
    explanation: "Building a heap from an array using heapify has O(n) time complexity.",
    category: "Data Structures",
    difficulty: "Hard"
  },
  {
    id: 82,
    question: "Which design pattern allows an object to alter its behavior when its internal state changes?",
    options: ["Strategy", "State", "Observer", "Command"],
    correctAnswer: 1,
    explanation: "The State pattern allows an object to change its behavior when its internal state changes.",
    category: "Design Patterns",
    difficulty: "Hard"
  },
  {
    id: 83,
    question: "What is the purpose of the 'volatile' keyword in Java?",
    options: ["Memory management", "Thread synchronization", "Exception handling", "Performance optimization"],
    correctAnswer: 1,
    explanation: "The 'volatile' keyword ensures that changes to a variable are visible to all threads.",
    category: "Java",
    difficulty: "Hard"
  },
  {
    id: 84,
    question: "In CSS, what is the difference between 'margin' and 'padding'?",
    options: ["No difference", "Outside vs inside spacing", "Color vs size", "Text vs background"],
    correctAnswer: 1,
    explanation: "Margin is space outside the element's border, padding is space inside the element's border.",
    category: "CSS",
    difficulty: "Easy"
  },
  {
    id: 85,
    question: "What is the space complexity of iterative binary search?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    correctAnswer: 0,
    explanation: "Iterative binary search uses O(1) constant space as it doesn't use recursion.",
    category: "Algorithms",
    difficulty: "Medium"
  },
  {
    id: 86,
    question: "In Python, what is the Global Interpreter Lock (GIL)?",
    options: ["Security feature", "Thread synchronization mechanism", "Memory manager", "Error handler"],
    correctAnswer: 1,
    explanation: "GIL is a mutex that protects access to Python objects, preventing multiple threads from executing Python bytecode simultaneously.",
    category: "Python",
    difficulty: "Hard"
  },
  {
    id: 87,
    question: "What is the purpose of database transactions?",
    options: ["Data backup", "ACID properties", "Query optimization", "User authentication"],
    correctAnswer: 1,
    explanation: "Database transactions ensure ACID properties (Atomicity, Consistency, Isolation, Durability) for data integrity.",
    category: "Database",
    difficulty: "Medium"
  },
  {
    id: 88,
    question: "Which HTTP status code indicates server error?",
    options: ["200", "300", "400", "500"],
    correctAnswer: 3,
    explanation: "HTTP status codes in the 500 range indicate server errors.",
    category: "Web Development",
    difficulty: "Easy"
  },
  {
    id: 89,
    question: "What is the difference between abstract class and interface in Java?",
    options: ["No difference", "Implementation vs contract", "Speed difference", "Memory usage"],
    correctAnswer: 1,
    explanation: "Abstract classes can have implementation, interfaces define contracts that implementing classes must follow.",
    category: "Java",
    difficulty: "Medium"
  },
  {
    id: 90,
    question: "In JavaScript, what is event bubbling?",
    options: ["Event creation", "Event propagation upward", "Event deletion", "Event handling"],
    correctAnswer: 1,
    explanation: "Event bubbling is the propagation of events from child elements up to parent elements in the DOM tree.",
    category: "JavaScript",
    difficulty: "Medium"
  },
  {
    id: 91,
    question: "What is the time complexity of insertion in a balanced binary search tree?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: 1,
    explanation: "Insertion in a balanced BST takes O(log n) time due to the tree's logarithmic height.",
    category: "Data Structures",
    difficulty: "Medium"
  },
  {
    id: 92,
    question: "Which CSS property is used to create animations?",
    options: ["transition", "animation", "transform", "All of the above"],
    correctAnswer: 3,
    explanation: "All three properties can be used for animations: transition for simple changes, animation for keyframe animations, transform for transformations.",
    category: "CSS",
    difficulty: "Medium"
  },
  {
    id: 93,
    question: "What is the purpose of the 'super' keyword in object-oriented programming?",
    options: ["Create objects", "Access parent class", "Define variables", "Handle exceptions"],
    correctAnswer: 1,
    explanation: "The 'super' keyword is used to access methods and properties of the parent class.",
    category: "OOP",
    difficulty: "Easy"
  },
  {
    id: 94,
    question: "In algorithms, what is dynamic programming?",
    options: ["Runtime compilation", "Optimization technique", "Memory management", "Error handling"],
    correctAnswer: 1,
    explanation: "Dynamic programming is an optimization technique that solves problems by breaking them into overlapping subproblems.",
    category: "Algorithms",
    difficulty: "Hard"
  },
  {
    id: 95,
    question: "What is the difference between SQL JOIN types?",
    options: ["Speed difference", "Result set difference", "Syntax difference", "No difference"],
    correctAnswer: 1,
    explanation: "Different JOIN types (INNER, LEFT, RIGHT, FULL) return different result sets based on matching criteria.",
    category: "Database",
    difficulty: "Medium"
  },
  {
    id: 96,
    question: "In React, what is the purpose of React.memo?",
    options: ["State management", "Performance optimization", "Event handling", "Routing"],
    correctAnswer: 1,
    explanation: "React.memo is a higher-order component that memoizes the result to prevent unnecessary re-renders.",
    category: "React",
    difficulty: "Medium"
  },
  {
    id: 97,
    question: "What is the time complexity of counting sort?",
    options: ["O(n + k)", "O(n log n)", "O(n²)", "O(k)"],
    correctAnswer: 0,
    explanation: "Counting sort has O(n + k) time complexity where n is the number of elements and k is the range of input.",
    category: "Algorithms",
    difficulty: "Hard"
  },
  {
    id: 98,
    question: "Which Python data structure is ordered and allows duplicates?",
    options: ["Set", "Dictionary", "List", "Tuple"],
    correctAnswer: 2,
    explanation: "Lists in Python are ordered collections that allow duplicate elements.",
    category: "Python",
    difficulty: "Easy"
  },
  {
    id: 99,
    question: "What is the purpose of CSS Flexbox?",
    options: ["Grid layouts", "One-dimensional layouts", "Text formatting", "Color management"],
    correctAnswer: 1,
    explanation: "Flexbox is designed for one-dimensional layouts, arranging items in a row or column.",
    category: "CSS",
    difficulty: "Easy"
  },
  {
    id: 100,
    question: "In software engineering, what is refactoring?",
    options: ["Adding features", "Code restructuring", "Bug fixing", "Testing"],
    correctAnswer: 1,
    explanation: "Refactoring is the process of restructuring existing code without changing its external behavior to improve readability and maintainability.",
    category: "Software Engineering",
    difficulty: "Medium"
  }
];