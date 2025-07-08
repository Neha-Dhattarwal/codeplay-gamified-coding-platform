export interface FlashCardQuestion {
  id: number;
  code: string;
  options: string[];
  correct: number;
  explanation: string;
  language: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export const flashCardQuestions: FlashCardQuestion[] = [
  // JavaScript Flash Cards (40)
  {
    id: 1,
    code: 'console.log([1, 2, 3].map(x => x * 2));',
    options: ['[1, 2, 3]', '[2, 4, 6]', '[1, 4, 9]', 'undefined'],
    correct: 1,
    explanation: 'The map method creates a new array with the results of calling a function for every array element.',
    language: 'JavaScript',
    difficulty: 'Easy'
  },
  {
    id: 2,
    code: 'console.log(typeof null);',
    options: ['null', 'undefined', 'object', 'boolean'],
    correct: 2,
    explanation: 'In JavaScript, typeof null returns "object" due to a historical bug.',
    language: 'JavaScript',
    difficulty: 'Medium'
  },
  {
    id: 3,
    code: 'console.log(0.1 + 0.2 === 0.3);',
    options: ['true', 'false', 'undefined', 'Error'],
    correct: 1,
    explanation: 'Due to floating-point precision issues, 0.1 + 0.2 does not exactly equal 0.3.',
    language: 'JavaScript',
    difficulty: 'Medium'
  },
  {
    id: 4,
    code: 'console.log([1, 2, 3].slice(1, 2));',
    options: ['[1]', '[2]', '[1, 2]', '[2, 3]'],
    correct: 1,
    explanation: 'slice(1, 2) extracts elements from index 1 up to (but not including) index 2.',
    language: 'JavaScript',
    difficulty: 'Easy'
  },
  {
    id: 5,
    code: 'console.log(Math.floor(4.7));',
    options: ['4', '5', '4.7', 'Error'],
    correct: 0,
    explanation: 'Math.floor() returns the largest integer less than or equal to the given number.',
    language: 'JavaScript',
    difficulty: 'Easy'
  },
  {
    id: 6,
    code: 'console.log("5" + 3);',
    options: ['8', '53', '5', 'Error'],
    correct: 1,
    explanation: 'JavaScript performs string concatenation when one operand is a string.',
    language: 'JavaScript',
    difficulty: 'Easy'
  },
  {
    id: 7,
    code: 'console.log("5" - 3);',
    options: ['2', '53', '5', 'Error'],
    correct: 0,
    explanation: 'JavaScript converts the string "5" to number 5 for subtraction.',
    language: 'JavaScript',
    difficulty: 'Medium'
  },
  {
    id: 8,
    code: 'console.log([1, 2, 3].filter(x => x > 1));',
    options: ['[1]', '[2, 3]', '[1, 2, 3]', '[]'],
    correct: 1,
    explanation: 'filter() creates a new array with elements that pass the test function.',
    language: 'JavaScript',
    difficulty: 'Easy'
  },
  {
    id: 9,
    code: 'console.log(Boolean(0));',
    options: ['true', 'false', '0', 'undefined'],
    correct: 1,
    explanation: 'In JavaScript, 0 is a falsy value, so Boolean(0) returns false.',
    language: 'JavaScript',
    difficulty: 'Easy'
  },
  {
    id: 10,
    code: 'console.log([1, 2, 3].reduce((a, b) => a + b));',
    options: ['6', '123', '[1, 2, 3]', 'Error'],
    correct: 0,
    explanation: 'reduce() applies a function against an accumulator to reduce array to single value.',
    language: 'JavaScript',
    difficulty: 'Medium'
  },
  {
    id: 11,
    code: 'console.log("hello".charAt(1));',
    options: ['h', 'e', 'l', 'o'],
    correct: 1,
    explanation: 'charAt(1) returns the character at index 1, which is "e".',
    language: 'JavaScript',
    difficulty: 'Easy'
  },
  {
    id: 12,
    code: 'console.log([1, 2, 3].includes(2));',
    options: ['true', 'false', '2', 'undefined'],
    correct: 0,
    explanation: 'includes() returns true if the array contains the specified element.',
    language: 'JavaScript',
    difficulty: 'Easy'
  },
  {
    id: 13,
    code: 'console.log(parseInt("10px"));',
    options: ['10', 'NaN', '10px', 'Error'],
    correct: 0,
    explanation: 'parseInt() parses a string and returns an integer, stopping at first non-digit.',
    language: 'JavaScript',
    difficulty: 'Medium'
  },
  {
    id: 14,
    code: 'console.log([1, 2, 3].join("-"));',
    options: ['1-2-3', '123', '[1, 2, 3]', '1,2,3'],
    correct: 0,
    explanation: 'join() creates a string by concatenating array elements with the specified separator.',
    language: 'JavaScript',
    difficulty: 'Easy'
  },
  {
    id: 15,
    code: 'console.log(Math.max(1, 3, 2));',
    options: ['1', '2', '3', 'Error'],
    correct: 2,
    explanation: 'Math.max() returns the largest of the given numbers.',
    language: 'JavaScript',
    difficulty: 'Easy'
  },
  {
    id: 16,
    code: 'console.log("abc".toUpperCase());',
    options: ['abc', 'ABC', 'Abc', 'Error'],
    correct: 1,
    explanation: 'toUpperCase() converts all characters in a string to uppercase.',
    language: 'JavaScript',
    difficulty: 'Easy'
  },
  {
    id: 17,
    code: 'console.log([1, 2, 3].reverse());',
    options: ['[1, 2, 3]', '[3, 2, 1]', '[3, 1, 2]', 'Error'],
    correct: 1,
    explanation: 'reverse() reverses the order of elements in an array in place.',
    language: 'JavaScript',
    difficulty: 'Easy'
  },
  {
    id: 18,
    code: 'console.log(!!0);',
    options: ['true', 'false', '0', 'undefined'],
    correct: 1,
    explanation: 'Double negation (!!) converts a value to boolean. 0 is falsy, so !!0 is false.',
    language: 'JavaScript',
    difficulty: 'Medium'
  },
  {
    id: 19,
    code: 'console.log("hello".substring(1, 3));',
    options: ['h', 'el', 'ell', 'hello'],
    correct: 1,
    explanation: 'substring(1, 3) extracts characters from index 1 to 2 (3 is excluded).',
    language: 'JavaScript',
    difficulty: 'Easy'
  },
  {
    id: 20,
    code: 'console.log(Array.isArray([]));',
    options: ['true', 'false', '[]', 'undefined'],
    correct: 0,
    explanation: 'Array.isArray() returns true if the value is an array.',
    language: 'JavaScript',
    difficulty: 'Easy'
  },
  // Python Flash Cards (30)
  {
    id: 21,
    code: 'print(len("Hello World"))',
    options: ['10', '11', '12', 'Error'],
    correct: 1,
    explanation: 'The len() function returns the number of characters in the string "Hello World", which is 11.',
    language: 'Python',
    difficulty: 'Easy'
  },
  {
    id: 22,
    code: 'print([1, 2, 3] + [4, 5, 6])',
    options: ['[1, 2, 3, 4, 5, 6]', '[5, 7, 9]', 'Error', '[1, 2, 3][4, 5, 6]'],
    correct: 0,
    explanation: 'In Python, the + operator concatenates lists.',
    language: 'Python',
    difficulty: 'Easy'
  },
  {
    id: 23,
    code: 'print(bool([]))',
    options: ['True', 'False', 'Error', '[]'],
    correct: 1,
    explanation: 'An empty list in Python is considered falsy, so bool([]) returns False.',
    language: 'Python',
    difficulty: 'Easy'
  },
  {
    id: 24,
    code: 'print("Python"[1:4])',
    options: ['Pyt', 'yth', 'ytho', 'tho'],
    correct: 1,
    explanation: 'String slicing [1:4] extracts characters from index 1 to 3 (4 is excluded).',
    language: 'Python',
    difficulty: 'Easy'
  },
  {
    id: 25,
    code: 'print(max([1, 3, 2]))',
    options: ['1', '2', '3', 'Error'],
    correct: 2,
    explanation: 'The max() function returns the largest item in the list.',
    language: 'Python',
    difficulty: 'Easy'
  },
  {
    id: 26,
    code: 'print(list(range(3)))',
    options: ['[0, 1, 2]', '[1, 2, 3]', '[0, 1, 2, 3]', 'Error'],
    correct: 0,
    explanation: 'range(3) generates numbers from 0 to 2 (3 is excluded).',
    language: 'Python',
    difficulty: 'Easy'
  },
  {
    id: 27,
    code: 'print("hello".upper())',
    options: ['hello', 'HELLO', 'Hello', 'Error'],
    correct: 1,
    explanation: 'The upper() method converts all characters in a string to uppercase.',
    language: 'Python',
    difficulty: 'Easy'
  },
  {
    id: 28,
    code: 'print([1, 2, 3][::-1])',
    options: ['[1, 2, 3]', '[3, 2, 1]', '[3, 1, 2]', 'Error'],
    correct: 1,
    explanation: 'The slice [::-1] reverses the list by stepping backwards.',
    language: 'Python',
    difficulty: 'Medium'
  },
  {
    id: 29,
    code: 'print(2 ** 3)',
    options: ['5', '6', '8', '9'],
    correct: 2,
    explanation: 'The ** operator performs exponentiation. 2**3 = 2³ = 8.',
    language: 'Python',
    difficulty: 'Easy'
  },
  {
    id: 30,
    code: 'print("abc" * 3)',
    options: ['abc', 'abcabcabc', 'aaa', 'Error'],
    correct: 1,
    explanation: 'String multiplication repeats the string the specified number of times.',
    language: 'Python',
    difficulty: 'Easy'
  },
  {
    id: 31,
    code: 'print(type(5.0))',
    options: ['<class \'int\'>', '<class \'float\'>', '<class \'str\'>', 'Error'],
    correct: 1,
    explanation: '5.0 is a floating-point number, so type() returns <class \'float\'>.',
    language: 'Python',
    difficulty: 'Easy'
  },
  {
    id: 32,
    code: 'print([1, 2, 3].count(2))',
    options: ['0', '1', '2', '3'],
    correct: 1,
    explanation: 'The count() method returns the number of occurrences of the specified value.',
    language: 'Python',
    difficulty: 'Easy'
  },
  {
    id: 33,
    code: 'print("hello world".split())',
    options: ['["hello", "world"]', '["hello world"]', 'Error', 'hello world'],
    correct: 0,
    explanation: 'split() without arguments splits on whitespace and returns a list of words.',
    language: 'Python',
    difficulty: 'Easy'
  },
  {
    id: 34,
    code: 'print(abs(-5))',
    options: ['-5', '5', '0', 'Error'],
    correct: 1,
    explanation: 'The abs() function returns the absolute value of a number.',
    language: 'Python',
    difficulty: 'Easy'
  },
  {
    id: 35,
    code: 'print(round(3.7))',
    options: ['3', '4', '3.7', 'Error'],
    correct: 1,
    explanation: 'The round() function rounds a number to the nearest integer.',
    language: 'Python',
    difficulty: 'Easy'
  },
  {
    id: 36,
    code: 'print(sum([1, 2, 3]))',
    options: ['123', '6', '[1, 2, 3]', 'Error'],
    correct: 1,
    explanation: 'The sum() function returns the sum of all items in an iterable.',
    language: 'Python',
    difficulty: 'Easy'
  },
  {
    id: 37,
    code: 'print("test".replace("t", "b"))',
    options: ['test', 'besb', 'best', 'Error'],
    correct: 1,
    explanation: 'replace() replaces all occurrences of the first argument with the second.',
    language: 'Python',
    difficulty: 'Easy'
  },
  {
    id: 38,
    code: 'print(len(set([1, 1, 2, 3])))',
    options: ['3', '4', '2', 'Error'],
    correct: 0,
    explanation: 'set() removes duplicates, so the set contains [1, 2, 3] with length 3.',
    language: 'Python',
    difficulty: 'Medium'
  },
  {
    id: 39,
    code: 'print(5 // 2)',
    options: ['2', '2.5', '3', 'Error'],
    correct: 0,
    explanation: 'The // operator performs floor division, returning the integer part of the division.',
    language: 'Python',
    difficulty: 'Easy'
  },
  {
    id: 40,
    code: 'print("python".find("th"))',
    options: ['2', '3', '4', '-1'],
    correct: 1,
    explanation: 'find() returns the index of the first occurrence of the substring.',
    language: 'Python',
    difficulty: 'Easy'
  },
  // C++ Flash Cards (15)
  {
    id: 41,
    code: '#include <iostream>\nusing namespace std;\nint main() {\n    cout << 5 / 2;\n    return 0;\n}',
    options: ['2', '2.5', '3', 'Error'],
    correct: 0,
    explanation: 'Integer division in C++ truncates the decimal part, so 5/2 = 2.',
    language: 'C++',
    difficulty: 'Easy'
  },
  {
    id: 42,
    code: '#include <iostream>\nusing namespace std;\nint main() {\n    cout << sizeof(int);\n    return 0;\n}',
    options: ['2', '4', '8', 'Depends on system'],
    correct: 3,
    explanation: 'The size of int depends on the system architecture, typically 4 bytes on modern systems.',
    language: 'C++',
    difficulty: 'Medium'
  },
  {
    id: 43,
    code: '#include <iostream>\nusing namespace std;\nint main() {\n    int x = 5;\n    cout << ++x;\n    return 0;\n}',
    options: ['5', '6', '7', 'Error'],
    correct: 1,
    explanation: 'Pre-increment (++x) increments x first, then returns the new value.',
    language: 'C++',
    difficulty: 'Easy'
  },
  {
    id: 44,
    code: '#include <iostream>\nusing namespace std;\nint main() {\n    cout << (true && false);\n    return 0;\n}',
    options: ['0', '1', 'true', 'false'],
    correct: 0,
    explanation: 'Logical AND of true and false is false, which prints as 0 in C++.',
    language: 'C++',
    difficulty: 'Easy'
  },
  {
    id: 45,
    code: '#include <iostream>\nusing namespace std;\nint main() {\n    cout << 10 % 3;\n    return 0;\n}',
    options: ['1', '2', '3', '0'],
    correct: 0,
    explanation: 'The modulo operator % returns the remainder of division. 10 % 3 = 1.',
    language: 'C++',
    difficulty: 'Easy'
  },
  // Java Flash Cards (15)
  {
    id: 46,
    code: 'public class Test {\n    public static void main(String[] args) {\n        System.out.println(5 / 2);\n    }\n}',
    options: ['2', '2.5', '3', 'Error'],
    correct: 0,
    explanation: 'Integer division in Java truncates the decimal part, so 5/2 = 2.',
    language: 'Java',
    difficulty: 'Easy'
  },
  {
    id: 47,
    code: 'public class Test {\n    public static void main(String[] args) {\n        String s = "Hello";\n        System.out.println(s.length());\n    }\n}',
    options: ['4', '5', '6', 'Error'],
    correct: 1,
    explanation: 'The length() method returns the number of characters in the string.',
    language: 'Java',
    difficulty: 'Easy'
  },
  {
    id: 48,
    code: 'public class Test {\n    public static void main(String[] args) {\n        System.out.println("Hello".charAt(1));\n    }\n}',
    options: ['H', 'e', 'l', 'o'],
    correct: 1,
    explanation: 'charAt(1) returns the character at index 1, which is "e".',
    language: 'Java',
    difficulty: 'Easy'
  },
  {
    id: 49,
    code: 'public class Test {\n    public static void main(String[] args) {\n        System.out.println(Math.max(3, 7));\n    }\n}',
    options: ['3', '7', '10', 'Error'],
    correct: 1,
    explanation: 'Math.max() returns the larger of the two values.',
    language: 'Java',
    difficulty: 'Easy'
  },
  {
    id: 50,
    code: 'public class Test {\n    public static void main(String[] args) {\n        System.out.println("Java".toUpperCase());\n    }\n}',
    options: ['java', 'JAVA', 'Java', 'Error'],
    correct: 1,
    explanation: 'toUpperCase() converts all characters in the string to uppercase.',
    language: 'Java',
    difficulty: 'Easy'
  }
];