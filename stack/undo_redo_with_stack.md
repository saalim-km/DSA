# 🔄 Undo-Redo Operations Using Stacks

This guide explains how 🥞 stacks are used to implement undo-redo functionality in various applications, such as 📝 text editors, 🎨 graphic tools, or any interactive software. Learn how this simple yet effective approach ensures efficient operation management. 💡

## 📚 Key Concepts

### 🤔 What Is a Stack?
- A stack is a 🗂️ data structure that operates on the **LIFO (Last In, First Out)** principle.
- Common operations include:
  - **⬆️ Push**: Add an item to the top of the stack.
  - **⬇️ Pop**: Remove the top item from the stack.

### 🔄 The Role of Two Stacks in Undo-Redo
1. **↩️ Undo Stack**:
   - Stores all actions performed by the user.
2. **↪️ Redo Stack**:
   - Temporarily stores undone actions, allowing them to be re-applied.

## ⚙️ How It Works

### 1️⃣ Performing an Action
- Each new action (e.g., typing a letter, drawing a shape) is **⬆️ pushed** onto the **↩️ Undo Stack**.
- The **↪️ Redo Stack** is cleared whenever a new action is performed.

### 2️⃣ Undo Operation
- When the user performs an **↩️ Undo**:
  - The top action is **⬇️ popped** from the **↩️ Undo Stack**.
  - This action is reversed and then **⬆️ pushed** onto the **↪️ Redo Stack**.

### 3️⃣ Redo Operation
- When the user performs a **↪️ Redo**:
  - The top action is **⬇️ popped** from the **↪️ Redo Stack**.
  - This action is re-applied and then **⬆️ pushed** back onto the **↩️ Undo Stack**.

## ✏️ Example Walkthrough

### Scenario: Typing "ABC"
1. **User Types**:
   - Typing 'A': ↩️ Undo Stack: `[A]` | ↪️ Redo Stack: `[]`
   - Typing 'B': ↩️ Undo Stack: `[A, B]` | ↪️ Redo Stack: `[]`
   - Typing 'C': ↩️ Undo Stack: `[A, B, C]` | ↪️ Redo Stack: `[]`

2. **User Presses ↩️ Undo** (removes 'C'):
   - ↩️ Undo Stack: `[A, B]` | ↪️ Redo Stack: `[C]`

3. **User Presses ↩️ Undo Again** (removes 'B'):
   - ↩️ Undo Stack: `[A]` | ↪️ Redo Stack: `[C, B]`

4. **User Presses ↪️ Redo** (re-applies 'B'):
   - ↩️ Undo Stack: `[A, B]` | ↪️ Redo Stack: `[C]`

## ✅ Advantages of This Approach

### 1️⃣ Efficiency
- 🥞 Stack operations are fast, with **O(1)** complexity for both push and pop operations.

### 2️⃣ Simplicity
- The use of two stacks simplifies the implementation of undo-redo functionality, making it intuitive and effective. 🎯

## 🌟 Features of This Guide
- A clear and concise explanation of stack-based undo-redo operations. 🧠
- Step-by-step walkthrough with examples for better understanding. 🔍
- Applicable to a wide range of use cases, including 📝 text editors and 🎨 graphic tools.

---
Happy Coding! 🚀

