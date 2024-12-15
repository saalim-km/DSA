# Why Is Bubble Sort Stable?

Welcome to the **Bubble Sort Stability Guide**! This document explains why Bubble Sort is a stable sorting algorithm, with examples and step-by-step walkthroughs.

## Key Characteristics of Stability

### 1. No Swap for Equal Elements
- Bubble Sort explicitly avoids swapping elements when they are equal, ensuring that their relative order remains unchanged.

### 2. Relative Position
- Because it doesn’t disturb the order of equal elements, their relative positions in the sorted array match their positions in the input array.

## Step-by-Step Process

### Example Input:
`[5, 3, 2, 5, 1]`

1. During the sorting process, when the two `5`s are encountered, they are not swapped because they are equal.
2. This ensures that the `5` that appeared first in the original array remains before the second `5` in the sorted array.

### Pass-by-Pass Walkthrough
- **Pass 1**: `[3, 2, 5, 1, 5]`
- **Pass 2**: `[2, 3, 1, 5, 5]`
- **Pass 3**: `[2, 1, 3, 5, 5]`
- **Pass 4**: `[1, 2, 3, 5, 5]`

### Final Output:
`[1, 2, 3, 5, 5]`

The two `5`s retain their original relative order.

## Summary
Bubble Sort ensures stability because:
1. Equal elements are not swapped.
2. The relative order of equal elements in the input array is preserved in the sorted array.

This predictable behavior makes Bubble Sort a stable sorting algorithm.

## Features
- Detailed explanation of Bubble Sort's stability.
- Example-driven walkthrough for clarity.
- Easy-to-follow process for understanding stability in sorting algorithms.

---
Happy Sorting! 🚀

