"""


1. What is Python?
Answer:
Python is a high-level, interpreted programming language known for its simplicity and readability. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming. Python is widely used for web development, data science, machine learning, automation, and more.

2. What are Python's key features?
Answer:
Key features of Python:

Easy to learn and read: Python's syntax is clear and easy to understand.
Interpreted: Python code is executed line by line, which helps with debugging.
Dynamically typed: Variable types are determined at runtime.
Cross-platform: Python runs on multiple platforms, including Windows, macOS, and Linux.
Large standard library: Python includes a vast collection of modules and packages for various tasks.
Supports Object-Oriented Programming (OOP): Python supports classes, objects, inheritance, and polymorphism.
Extensive community support: Python has a large, active community for support and development.
3. What are Python's built-in data types?
Answer:
Python has several built-in data types, including:

Numeric Types: int, float, complex
Text Type: str
Sequence Types: list, tuple, range
Mapping Type: dict
Set Types: set, frozenset
Boolean Type: bool
Binary Types: bytes, bytearray, memoryview
None Type: None
4. What is a list in Python?
Answer:
A list is a mutable, ordered collection of items in Python. Lists can contain elements of different types, such as integers, strings, or other lists.

python
Copy code
my_list = [1, 2, 3, 'a', [4, 5]]
5. What is the difference between a list and a tuple in Python?
Answer:

List: A list is mutable, meaning you can change its content (add, remove, or update elements).

python
Copy code
my_list = [1, 2, 3]
my_list[0] = 10  # Allowed
Tuple: A tuple is immutable, meaning once it is created, you cannot change its elements.

python
Copy code
my_tuple = (1, 2, 3)
my_tuple[0] = 10  # Error: 'tuple' object does not support item assignment
6. What is a dictionary in Python?
Answer:
A dictionary is a collection of key-value pairs, where each key is unique. Dictionaries are unordered, and values can be of any data type.

python
Copy code
my_dict = {'name': 'Alice', 'age': 25}
7. What are functions in Python?
Answer:
A function in Python is a block of reusable code that performs a specific task. Functions are defined using the def keyword.

python
Copy code
def greet(name):
    return f"Hello, {name}!"
8. What are Python decorators?
Answer:
A decorator is a function that takes another function and extends its behavior without modifying it directly. It is typically used to modify the functionality of a function or method.

python
Copy code
def decorator(func):
    def wrapper():
        print("Before function call")
        func()
        print("After function call")
    return wrapper

@decorator
def say_hello():
    print("Hello!")
9. What are lambda functions in Python?
Answer:
A lambda function is an anonymous function that is defined using the lambda keyword. It is often used for short, throwaway functions.

python
Copy code
add = lambda x, y: x + y
print(add(3, 4))  # Output: 7
10. What is the difference between del, remove(), and pop() in Python?
Answer:

del: Deletes an element from a list based on its index or deletes the entire list.

python
Copy code
my_list = [1, 2, 3]
del my_list[1]  # Removes element at index 1
remove(): Removes the first occurrence of a specific value from a list.

python
Copy code
my_list = [1, 2, 3, 2]
my_list.remove(2)  # Removes the first occurrence of 2
pop(): Removes and returns the element at a specific index. If no index is provided, it removes and returns the last element.

python
Copy code
my_list = [1, 2, 3]
my_list.pop(1)  # Removes and returns element at index 1
11. What is list comprehension in Python?
Answer:
List comprehension provides a concise way to create lists based on existing lists or other iterables.

python
Copy code
squares = [x**2 for x in range(5)]
# Output: [0, 1, 4, 9, 16]
12. What is the purpose of self in Python?
Answer:
self refers to the instance of the class in Python. It is used to access the attributes and methods of the class within its instance methods.

python
Copy code
class Person:
    def __init__(self, name):
        self.name = name
    
    def greet(self):
        print(f"Hello, {self.name}")

p = Person("Alice")
p.greet()  # Output: Hello, Alice
13. What are exceptions in Python?
Answer:
Exceptions are runtime errors that occur during the execution of the program. They can be handled using try, except, else, and finally blocks.

python
Copy code
try:
    x = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero")
14. What is the difference between is and == in Python?
Answer:

is: Compares the identity of two objects, i.e., whether they refer to the same memory location.

python
Copy code
a = [1, 2, 3]
b = a
print(a is b)  # Output: True
==: Compares the values of two objects, i.e., whether they are equal.

python
Copy code
a = [1, 2, 3]
b = [1, 2, 3]
print(a == b)  # Output: True
15. How do you handle file operations in Python?
Answer:
Python provides built-in functions to handle files. Common operations include opening a file using open(), reading/writing to it, and closing it after the operation.

python
Copy code
with open('file.txt', 'r') as file:
    content = file.read()
    print(content)
Using with ensures that the file is properly closed even if an error occurs.


"""