export interface BugChallenge {
  id: number;
  title: string;
  description: string;
  buggyCode: string;
  fixedCode: string;
  language: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  hints: string[];
  explanation: string;
  category: string;
}

export const bugHunterChallenges: BugChallenge[] = [
  // JavaScript Bugs (25)
  {
    id: 1,
    title: 'Array Index Bug',
    description: 'Fix the bug in this function that finds the maximum element in an array.',
    buggyCode: `function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i <= arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}`,
    fixedCode: `function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}`,
    language: 'JavaScript',
    difficulty: 'Easy',
    hints: ['Check the loop condition', 'Array indices start from 0'],
    explanation: 'The bug was in the loop condition. Using i <= arr.length causes an index out of bounds error. It should be i < arr.length.',
    category: 'Arrays'
  },
  {
    id: 2,
    title: 'Infinite Loop Bug',
    description: 'Fix the infinite loop in this factorial function.',
    buggyCode: `function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n);
}`,
    fixedCode: `function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}`,
    language: 'JavaScript',
    difficulty: 'Medium',
    hints: ['Check the recursive call', 'The parameter should change in recursion'],
    explanation: 'The recursive call should be factorial(n - 1), not factorial(n), to avoid infinite recursion.',
    category: 'Recursion'
  },
  {
    id: 3,
    title: 'Variable Scope Bug',
    description: 'Fix the scope issue in this function that counts occurrences.',
    buggyCode: `function countOccurrences(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            let count = 0;
            count++;
        }
    }
    return count;
}`,
    fixedCode: `function countOccurrences(arr, target) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            count++;
        }
    }
    return count;
}`,
    language: 'JavaScript',
    difficulty: 'Medium',
    hints: ['Check variable declaration placement', 'Variables should be accessible where they are used'],
    explanation: 'The count variable should be declared outside the loop to maintain its value across iterations.',
    category: 'Scope'
  },
  {
    id: 4,
    title: 'Type Coercion Bug',
    description: 'Fix the type comparison issue in this function.',
    buggyCode: `function isEqual(a, b) {
    return a == b;
}`,
    fixedCode: `function isEqual(a, b) {
    return a === b;
}`,
    language: 'JavaScript',
    difficulty: 'Easy',
    hints: ['Consider strict equality', 'Type coercion can cause unexpected results'],
    explanation: 'Use strict equality (===) instead of loose equality (==) to avoid type coercion issues.',
    category: 'Comparison'
  },
  {
    id: 5,
    title: 'Array Mutation Bug',
    description: 'Fix the function that should return a new sorted array without modifying the original.',
    buggyCode: `function getSorted(arr) {
    return arr.sort();
}`,
    fixedCode: `function getSorted(arr) {
    return [...arr].sort();
}`,
    language: 'JavaScript',
    difficulty: 'Medium',
    hints: ['Array.sort() modifies the original array', 'Create a copy before sorting'],
    explanation: 'Array.sort() modifies the original array. Use spread operator to create a copy first.',
    category: 'Arrays'
  },
  {
    id: 6,
    title: 'Async/Await Bug',
    description: 'Fix the async function that is not properly waiting for the promise.',
    buggyCode: `async function fetchData() {
    const data = fetch('/api/data');
    return data.json();
}`,
    fixedCode: `async function fetchData() {
    const data = await fetch('/api/data');
    return data.json();
}`,
    language: 'JavaScript',
    difficulty: 'Medium',
    hints: ['Missing await keyword', 'Promises need to be awaited'],
    explanation: 'The fetch call needs the await keyword to wait for the promise to resolve.',
    category: 'Async'
  },
  {
    id: 7,
    title: 'Closure Bug',
    description: 'Fix the closure issue in this loop.',
    buggyCode: `function createFunctions() {
    var functions = [];
    for (var i = 0; i < 3; i++) {
        functions.push(function() {
            return i;
        });
    }
    return functions;
}`,
    fixedCode: `function createFunctions() {
    var functions = [];
    for (let i = 0; i < 3; i++) {
        functions.push(function() {
            return i;
        });
    }
    return functions;
}`,
    language: 'JavaScript',
    difficulty: 'Hard',
    hints: ['Variable hoisting issue', 'Use let instead of var'],
    explanation: 'Use let instead of var to create block scope and capture the correct value of i.',
    category: 'Closures'
  },
  {
    id: 8,
    title: 'Object Property Bug',
    description: 'Fix the function that checks if an object has a property.',
    buggyCode: `function hasProperty(obj, prop) {
    return obj[prop] !== undefined;
}`,
    fixedCode: `function hasProperty(obj, prop) {
    return obj.hasOwnProperty(prop);
}`,
    language: 'JavaScript',
    difficulty: 'Medium',
    hints: ['Property might exist with undefined value', 'Use hasOwnProperty method'],
    explanation: 'A property can exist with undefined value. Use hasOwnProperty() to check property existence.',
    category: 'Objects'
  },
  {
    id: 9,
    title: 'String Concatenation Bug',
    description: 'Fix the function that should add numbers, not concatenate strings.',
    buggyCode: `function addNumbers(a, b) {
    return a + b;
}`,
    fixedCode: `function addNumbers(a, b) {
    return Number(a) + Number(b);
}`,
    language: 'JavaScript',
    difficulty: 'Easy',
    hints: ['Parameters might be strings', 'Convert to numbers before adding'],
    explanation: 'Convert parameters to numbers to ensure arithmetic addition instead of string concatenation.',
    category: 'Type Conversion'
  },
  {
    id: 10,
    title: 'Array Filter Bug',
    description: 'Fix the function that should filter even numbers.',
    buggyCode: `function getEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 1);
}`,
    fixedCode: `function getEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}`,
    language: 'JavaScript',
    difficulty: 'Easy',
    hints: ['Check the modulo condition', 'Even numbers have remainder 0'],
    explanation: 'Even numbers have remainder 0 when divided by 2, not 1.',
    category: 'Arrays'
  },
  // Python Bugs (25)
  {
    id: 11,
    title: 'Off-by-One Error',
    description: 'Fix the bug in this function that reverses a string.',
    buggyCode: `def reverse_string(s):
    result = ""
    for i in range(len(s), 0, -1):
        result += s[i]
    return result`,
    fixedCode: `def reverse_string(s):
    result = ""
    for i in range(len(s) - 1, -1, -1):
        result += s[i]
    return result`,
    language: 'Python',
    difficulty: 'Easy',
    hints: ['Check the range parameters', 'String indices start from 0'],
    explanation: 'The range should start from len(s) - 1, not len(s), to avoid index out of bounds.',
    category: 'Strings'
  },
  {
    id: 12,
    title: 'Logic Error',
    description: 'Fix the bug in this function that checks if a number is even.',
    buggyCode: `def is_even(n):
    if n % 2 == 1:
        return True
    else:
        return False`,
    fixedCode: `def is_even(n):
    if n % 2 == 0:
        return True
    else:
        return False`,
    language: 'Python',
    difficulty: 'Easy',
    hints: ['Check the modulo condition', 'Even numbers have remainder 0 when divided by 2'],
    explanation: 'The condition should check if n % 2 == 0 for even numbers, not n % 2 == 1.',
    category: 'Logic'
  },
  {
    id: 13,
    title: 'List Modification Bug',
    description: 'Fix the function that removes elements while iterating.',
    buggyCode: `def remove_evens(lst):
    for i in range(len(lst)):
        if lst[i] % 2 == 0:
            lst.remove(lst[i])
    return lst`,
    fixedCode: `def remove_evens(lst):
    return [x for x in lst if x % 2 != 0]`,
    language: 'Python',
    difficulty: 'Medium',
    hints: ['Modifying list while iterating causes issues', 'Use list comprehension'],
    explanation: 'Modifying a list while iterating can skip elements. Use list comprehension instead.',
    category: 'Lists'
  },
  {
    id: 14,
    title: 'Default Argument Bug',
    description: 'Fix the mutable default argument issue.',
    buggyCode: `def append_to_list(item, target_list=[]):
    target_list.append(item)
    return target_list`,
    fixedCode: `def append_to_list(item, target_list=None):
    if target_list is None:
        target_list = []
    target_list.append(item)
    return target_list`,
    language: 'Python',
    difficulty: 'Hard',
    hints: ['Mutable default arguments are dangerous', 'Use None as default'],
    explanation: 'Mutable default arguments are shared between function calls. Use None and create new list inside function.',
    category: 'Functions'
  },
  {
    id: 15,
    title: 'Dictionary Key Bug',
    description: 'Fix the function that counts character occurrences.',
    buggyCode: `def count_chars(s):
    counts = {}
    for char in s:
        counts[char] += 1
    return counts`,
    fixedCode: `def count_chars(s):
    counts = {}
    for char in s:
        counts[char] = counts.get(char, 0) + 1
    return counts`,
    language: 'Python',
    difficulty: 'Medium',
    hints: ['Key might not exist in dictionary', 'Use get() method with default value'],
    explanation: 'Use dict.get() with default value to handle missing keys, or check if key exists first.',
    category: 'Dictionaries'
  },
  {
    id: 16,
    title: 'Integer Division Bug',
    description: 'Fix the function that should return a float result.',
    buggyCode: `def calculate_average(numbers):
    return sum(numbers) / len(numbers)`,
    fixedCode: `def calculate_average(numbers):
    if len(numbers) == 0:
        return 0
    return sum(numbers) / len(numbers)`,
    language: 'Python',
    difficulty: 'Easy',
    hints: ['Division by zero error', 'Check for empty list'],
    explanation: 'Check for empty list to avoid division by zero error.',
    category: 'Math'
  },
  {
    id: 17,
    title: 'Variable Scope Bug',
    description: 'Fix the scope issue with the global variable.',
    buggyCode: `counter = 0

def increment():
    counter += 1
    return counter`,
    fixedCode: `counter = 0

def increment():
    global counter
    counter += 1
    return counter`,
    language: 'Python',
    difficulty: 'Medium',
    hints: ['Global variable modification', 'Use global keyword'],
    explanation: 'Use the global keyword to modify a global variable inside a function.',
    category: 'Scope'
  },
  {
    id: 18,
    title: 'String Comparison Bug',
    description: 'Fix the case-sensitive string comparison.',
    buggyCode: `def is_valid_email(email):
    return email.endswith('@gmail.com')`,
    fixedCode: `def is_valid_email(email):
    return email.lower().endswith('@gmail.com')`,
    language: 'Python',
    difficulty: 'Easy',
    hints: ['Case sensitivity issue', 'Convert to lowercase'],
    explanation: 'Convert email to lowercase to handle case-insensitive comparison.',
    category: 'Strings'
  },
  {
    id: 19,
    title: 'List Index Bug',
    description: 'Fix the function that finds the last element.',
    buggyCode: `def get_last_element(lst):
    return lst[len(lst)]`,
    fixedCode: `def get_last_element(lst):
    if len(lst) == 0:
        return None
    return lst[len(lst) - 1]`,
    language: 'Python',
    difficulty: 'Easy',
    hints: ['Index out of bounds', 'Last index is length - 1'],
    explanation: 'Last element index is len(lst) - 1, not len(lst). Also handle empty list.',
    category: 'Lists'
  },
  {
    id: 20,
    title: 'Exception Handling Bug',
    description: 'Fix the exception handling in this function.',
    buggyCode: `def safe_divide(a, b):
    try:
        return a / b
    except:
        return 0`,
    fixedCode: `def safe_divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return 0`,
    language: 'Python',
    difficulty: 'Medium',
    hints: ['Catch specific exceptions', 'Bare except catches everything'],
    explanation: 'Catch specific exceptions (ZeroDivisionError) instead of using bare except.',
    category: 'Exceptions'
  },
  // C++ Bugs (25)
  {
    id: 21,
    title: 'Memory Leak Bug',
    description: 'Fix the memory leak in this function.',
    buggyCode: `void processArray() {
    int* arr = new int[100];
    // Process array
    for (int i = 0; i < 100; i++) {
        arr[i] = i * 2;
    }
}`,
    fixedCode: `void processArray() {
    int* arr = new int[100];
    // Process array
    for (int i = 0; i < 100; i++) {
        arr[i] = i * 2;
    }
    delete[] arr;
}`,
    language: 'C++',
    difficulty: 'Medium',
    hints: ['Memory allocated with new', 'Must delete allocated memory'],
    explanation: 'Memory allocated with new[] must be freed with delete[] to prevent memory leaks.',
    category: 'Memory Management'
  },
  {
    id: 22,
    title: 'Array Bounds Bug',
    description: 'Fix the array bounds error.',
    buggyCode: `void printArray(int arr[], int size) {
    for (int i = 0; i <= size; i++) {
        cout << arr[i] << " ";
    }
}`,
    fixedCode: `void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        cout << arr[i] << " ";
    }
}`,
    language: 'C++',
    difficulty: 'Easy',
    hints: ['Loop condition error', 'Array indices go from 0 to size-1'],
    explanation: 'Loop should use i < size, not i <= size, to avoid accessing out-of-bounds memory.',
    category: 'Arrays'
  },
  {
    id: 23,
    title: 'Pointer Dereference Bug',
    description: 'Fix the null pointer dereference.',
    buggyCode: `int getValue(int* ptr) {
    return *ptr;
}`,
    fixedCode: `int getValue(int* ptr) {
    if (ptr != nullptr) {
        return *ptr;
    }
    return 0; // or throw exception
}`,
    language: 'C++',
    difficulty: 'Medium',
    hints: ['Check for null pointer', 'Dereference only valid pointers'],
    explanation: 'Always check if pointer is not null before dereferencing to avoid crashes.',
    category: 'Pointers'
  },
  {
    id: 24,
    title: 'Constructor Bug',
    description: 'Fix the constructor initialization issue.',
    buggyCode: `class Rectangle {
private:
    int width, height;
public:
    Rectangle(int w, int h) {
        width = w;
        height = h;
    }
};`,
    fixedCode: `class Rectangle {
private:
    int width, height;
public:
    Rectangle(int w, int h) : width(w), height(h) {
    }
};`,
    language: 'C++',
    difficulty: 'Medium',
    hints: ['Use member initializer list', 'More efficient initialization'],
    explanation: 'Use member initializer list for better performance and to initialize const members.',
    category: 'Classes'
  },
  {
    id: 25,
    title: 'Copy Constructor Bug',
    description: 'Fix the shallow copy issue.',
    buggyCode: `class MyClass {
private:
    int* data;
public:
    MyClass(int value) {
        data = new int(value);
    }
    ~MyClass() {
        delete data;
    }
};`,
    fixedCode: `class MyClass {
private:
    int* data;
public:
    MyClass(int value) {
        data = new int(value);
    }
    MyClass(const MyClass& other) {
        data = new int(*other.data);
    }
    MyClass& operator=(const MyClass& other) {
        if (this != &other) {
            delete data;
            data = new int(*other.data);
        }
        return *this;
    }
    ~MyClass() {
        delete data;
    }
};`,
    language: 'C++',
    difficulty: 'Hard',
    hints: ['Need copy constructor', 'Implement rule of three'],
    explanation: 'Classes with dynamic memory need copy constructor and assignment operator to avoid double deletion.',
    category: 'Classes'
  },
  // Java Bugs (25)
  {
    id: 26,
    title: 'Null Pointer Exception',
    description: 'Fix the potential null pointer exception.',
    buggyCode: `public String getLength(String str) {
    return String.valueOf(str.length());
}`,
    fixedCode: `public String getLength(String str) {
    if (str != null) {
        return String.valueOf(str.length());
    }
    return "0";
}`,
    language: 'Java',
    difficulty: 'Easy',
    hints: ['Check for null reference', 'String parameter might be null'],
    explanation: 'Always check for null before calling methods on object references.',
    category: 'Null Safety'
  },
  {
    id: 27,
    title: 'Integer Overflow Bug',
    description: 'Fix the integer overflow issue.',
    buggyCode: `public int multiply(int a, int b) {
    return a * b;
}`,
    fixedCode: `public long multiply(int a, int b) {
    return (long) a * b;
}`,
    language: 'Java',
    difficulty: 'Medium',
    hints: ['Integer multiplication can overflow', 'Use long for larger range'],
    explanation: 'Cast to long before multiplication to prevent integer overflow.',
    category: 'Math'
  },
  {
    id: 28,
    title: 'Array Index Bug',
    description: 'Fix the array index out of bounds error.',
    buggyCode: `public int findElement(int[] arr, int target) {
    for (int i = 0; i <= arr.length; i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;
}`,
    fixedCode: `public int findElement(int[] arr, int target) {
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;
}`,
    language: 'Java',
    difficulty: 'Easy',
    hints: ['Loop condition error', 'Array indices go from 0 to length-1'],
    explanation: 'Loop should use i < arr.length, not i <= arr.length.',
    category: 'Arrays'
  },
  {
    id: 29,
    title: 'String Comparison Bug',
    description: 'Fix the string comparison issue.',
    buggyCode: `public boolean isEqual(String a, String b) {
    return a == b;
}`,
    fixedCode: `public boolean isEqual(String a, String b) {
    if (a == null && b == null) return true;
    if (a == null || b == null) return false;
    return a.equals(b);
}`,
    language: 'Java',
    difficulty: 'Medium',
    hints: ['Use equals() method for strings', 'Handle null cases'],
    explanation: 'Use equals() method to compare string content, not == which compares references.',
    category: 'Strings'
  },
  {
    id: 30,
    title: 'Resource Leak Bug',
    description: 'Fix the resource leak in file handling.',
    buggyCode: `public String readFile(String filename) throws IOException {
    FileReader file = new FileReader(filename);
    BufferedReader reader = new BufferedReader(file);
    return reader.readLine();
}`,
    fixedCode: `public String readFile(String filename) throws IOException {
    try (FileReader file = new FileReader(filename);
         BufferedReader reader = new BufferedReader(file)) {
        return reader.readLine();
    }
}`,
    language: 'Java',
    difficulty: 'Medium',
    hints: ['Use try-with-resources', 'Close file resources'],
    explanation: 'Use try-with-resources to automatically close file resources and prevent leaks.',
    category: 'Resources'
  }
];