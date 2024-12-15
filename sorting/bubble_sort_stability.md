Why Is Bubble Sort Stable?

Bubble Sort is considered a stable sorting algorithm because it maintains the relative order of elements with equal keys (values) in the input array. Below is a concise explanation of why this happens:

Key Characteristics of Stability

No Swap for Equal Elements:

Bubble Sort explicitly avoids swapping elements when they are equal, ensuring that their relative order remains unchanged.

Relative Position:

Because it doesn’t disturb the order of equal elements, their relative positions in the sorted array match their positions in the input array.

Step-by-Step Process

Consider an example array: [5, 3, 2, 5, 1]

During the sorting process, when the two 5s are encountered, they are not swapped because they are equal.

This ensures that the 5 that appeared first in the original array remains before the second 5 in the sorted array.

Example Walkthrough

Input Array: [5, 3, 2, 5, 1]

Pass 1: [3, 2, 5, 1, 5]

Pass 2: [2, 3, 1, 5, 5]

Pass 3: [2, 1, 3, 5, 5]

Pass 4: [1, 2, 3, 5, 5]

Final Output:

[1, 2, 3, 5, 5]

The two 5s retain their original relative order.

Summary

Bubble Sort ensures stability because:

Equal elements are not swapped.

The relative order of equal elements in the input array is preserved in the sorted array.

This predictable behavior makes Bubble Sort a stable sorting algorithm.