import { Lesson } from "./models/lesson";
import {Hint} from "./models/hint";
import {ResearchData} from "@lib/models/research_data";

type LessonID = string;

export const Courses: Map<string, LessonID[]> = new Map([
    ["Python Algorithms", ["python-1", "python-2"]],
    ["Data structures", ["python-3"]],
]);

const hints1: Hint[] = [
    {
        index: 1,
        text: "The reason the code is not efficient is the sleep() function, which makes it to wait for too long. Try to make the sleep parameter lower and see how it affects the efficiency."
    },
    {
        index: 2,
        text: "To make this code as efficient as possible, try to remove the sleep() function completely and see how it affects the code execution."
    }
]

const hints2: Hint[] = [
    {
        index: 1,
        text: "You can use a faster sorting algorithm like QuickSort, MergeSort or HeapSort instead of the BubbleSort algorithm used in the code.",
        code: "def quickSort(arr):\n" +
            "  if len(arr) <= 1:\n" +
            "    return arr\n" +
            "  else:\n" +
            "    pivot = arr[0]\n" +
            "    left = []\n" +
            "    right = []\n" +
            "    for x in arr[1:]:\n" +
            "      if x < pivot:\n" +
            "        left.append(x)\n" +
            "      else:\n" +
            "        right.append(x)\n" +
            "    return quickSort(left) + [pivot] + quickSort(right)\n" +
            "\n" +
            "numbers = [64, 34, 25, 12, 22, 11, 90]\n" +
            "print(\"Sorted array is:\", quickSort(numbers))",
    },
    {
        index: 2,
        text: "You can use Python's inbuilt \`sorted()\` function which is an optimised version of TimSort, a hybrid sorting algorithm.",
        code: "numbers = [64, 34, 25, 12, 22, 11, 90]\n" +
            "print(\"Sorted array is:\", sorted(numbers))",
    }
]


const hints3: Hint[] = [
    {
        index: 1,
        text: "Consider using a different data structure for representing the todo list that is better suited for the operations being performed.",
    },
    {
        index: 2,
        text: "The set data structure has an average time complexity of O(1) for checking if an element is in the set, so this can be used to check if an element is already present in the set, which makes the code faster.",
    },
    {
        index: 3,
        text: "This is the correct code for the has_duplicates() function:",
        code: "def has_duplicates(elements):\n" +
            "    unique_elements = set()\n" +
            "    for element in elements:\n" +
            "        if element in unique_elements:\n" +
            "            return True\n" +
            "        unique_elements.add(element)\n" +
            "    return False"
    },
]


const research_data1: ResearchData = {
    intro: "These are just a few examples of sorting algorithms and the time complexity analysis assumes the average case scenario. The actual time complexity of an algorithm depends on various factors such as the size of the input, the distribution of the data, and the hardware being used.",
    listNames: [
        "Programiz - Python for Loop",
        "LearnPython - Loops",
        "GeeksforGeeks - loops in python",
    ],
    listLinks: [
        "https://www.programiz.com/python-programming/for-loop",
        "https://www.learnpython.org/en/Loops",
        "https://www.geeksforgeeks.org/loops-in-python/",
    ],
}

const research_data2: ResearchData = {
    intro: "These are just a few examples of sorting algorithms and the time complexity analysis assumes the average case scenario. The actual time complexity of an algorithm depends on various factors such as the size of the input, the distribution of the data, and the hardware being used.",
    listNames: [
        "GeeksforGeeks - Sorting Algorithms in Python ",
        "Real Python - Sorting Algorithms in Python",
        "Python Guides - Sorting Algorithms in Python",
        "FreeCodeCamp - Sorting Algorithms Explained with Examples in Python",
        "Towards Data Science - Sorting Algorithms with Python",
        "EduCBA - Sorting Algorithms in Python",
        "Python Pool - Sorting Techniques using Python",
        "CRIO Blog - Top 10 Sorting Algorithms",
        "Stack Overflow - What Algorithm does Python's sorted() use",
    ],
    listLinks: [
        "https://www.geeksforgeeks.org/sorting-algorithms-in-python/",
        "https://realpython.com/sorting-algorithms-python/",
        "https://pythonguides.com/sorting-algorithms-in-python/",
        "https://www.freecodecamp.org/news/sorting-algorithms-explained-with-examples-in-python-java-and-c/",
        "https://towardsdatascience.com/sorting-algorithms-with-python-4ec7081d78a1",
        "https://www.educba.com/sorting-algorithms-in-python/",
        "https://www.pythonpool.com/sorting-techniques-using-python/",
        "https://www.crio.do/blog/top-10-sorting-algorithms/",
        "https://stackoverflow.com/questions/10948920/what-algorithm-does-pythons-sorted-use",
    ],
}

const research_data3: ResearchData = {
    intro: "The following articles provide better insight into different approaches in different data structures and understanding when they are needed.",
    listNames: [
        "Real Python - Common Python Data Structures (Guide)",
        "Edureka - Data Structures You Need To Learn In Python",
        "DataCamp - Python Data Structures Tutorial",
        "Medium - Data Structures in Python— A Brief Introduction",
    ],
    listLinks: [
        "https://realpython.com/python-data-structures/",
        "https://www.edureka.co/blog/data-structures-in-python/",
        "https://www.datacamp.com/tutorial/data-structures-python",
        "https://towardsdatascience.com/data-structures-in-python-a-brief-introduction-b4135d7a9b7d",
    ],
}

export const LessonDefinitions: Map<LessonID, Lesson> = new Map([
    [
        "python-1",
        {
            id: "python-1",
            course: "Python Algorithms",
            title: "Loops in Python",
            description: "Loops are essential part of programming in general. In this lesson you will learn how to write the most efficient loops.",
            code: "from time import sleep\nfor i in range(10):\n  print(i)\nsleep(1)",
            locked: true,
            completed: true,
            hints: hints1,
            researchMaterial: research_data1,
        },
    ],
    [
        "python-2",
        {
            id: "python-2",
            course: "Python Algorithms",
            title: "Speed Up the Sorter",
            description: "You have been given a task to sort a list of numbers in ascending order. The code provided to you is slow and takes a lot of time to sort even small lists. Your job is to optimise the code and make it faster. The code should be able to handle large lists and sort them efficiently.",
            code: "def bubbleSort(arr):\n" +
                "\tn = len(arr)\n" +
                "\tfor i in range(n):\n" +
                "\tfor j in range(0, n-i-1):\n" +
                "\tif arr[j] > arr[j+1]:\n" +
                "\tarr[j], arr[j+1] = arr[j+1], arr[j]\n" +
                "\treturn arr\n" +
                "\n" +
                "numbers = [64, 34, 25, 12, 22, 11, 90]\n" +
                "print(\"Sorted array is:\", bubbleSort(numbers))",
            locked: true,
            completed: false,
            hints: hints2,
            researchMaterial: research_data2,
        },
    ],
    [
        "python-3",
        {
            id: "python-3",
            course: "Data structures",
            title: "Optimizing with Data Structures",
            description: "This task is all about improving your Python code and making it run faster and more efficiently. You will start by looking at an unoptimized code that doesn't use the right data structures. Your job is to use the hints provided and choose the right data structures to make the code better. By doing this task, you will learn about different data structures in Python and how to use them to improve your code. By the end of it, you will have a better understanding of how to choose the right data structure for your code to make it run faster and use less memory. So, let's get started and see how much you can improve this code!" +
                "\nNote: you should change only the has_duplicates() function",
            code: "import string\n" +
                "import array\n" +
                "import random\n" +
                "def random_string(string_length=10):\n" +
                "    letters = string.ascii_letters\n" +
                "    return ''.join(random.choice(letters) for i in range(string_length))\n" +
                "\n" +
                "array = [random_string(10) for i in range(100000)]\n" +
                "el = array[300]\n" +
                "\n" +
                "array.append(el)\n" +
                "\n" +
                "# You can change only this function in this lesson!\n" +
                "def has_duplicates(elements):\n" +
                "    for i in range(len(elements)):\n" +
                "        for j in range(i + 1, len(elements)):\n" +
                "            if elements[i] == elements[j]:\n" +
                "                return True\n" +
                "    return False\n" +
                "\n" +
                "print(has_duplicates(array))",
            locked: false,
            completed: false,
            hints: hints3,
            researchMaterial: research_data3,
        }
    ]
]);
