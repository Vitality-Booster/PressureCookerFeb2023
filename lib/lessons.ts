import { Lesson } from "./models/lesson";
import {Hint} from "./models/hint";

type LessonID = string;

export const Courses: Map<string, LessonID[]> = new Map([
    ["Python Loops Course", ["python-1", "python-2"]],
]);

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

export const LessonDefinitions: Map<LessonID, Lesson> = new Map([
    [
        "python-1",
        {
            id: "python-1",
            title: "Python Loops",
            description: "Learn about loops in Python",
            code: "from time import sleep\nfor i in range(10):\n  print(i)\nsleep(1)",
            locked: true,
            completed: false,
            hints: hints1,
        },
    ],
    [
        "python-2",
        {
            id: "python-2",
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
        },
    ],
]);
