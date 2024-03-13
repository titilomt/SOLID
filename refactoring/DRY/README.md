# DRY (Don't Repeat Yourself)
[![en](https://img.shields.io/badge/lang-en-red.svg)](./README.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](./README.pt-br.md)

## Detailed Description

The DRY principle is a fundamental concept in software development that emphasizes the importance of avoiding redundant code. It stands for "Don't Repeat Yourself" and aims to reduce the repetition of software patterns, replacing them with abstractions or using data normalization to avoid redundancy. The principle is rooted in the belief that duplication can lead to more bugs, higher maintenance costs, and a complicated codebase, making it harder to manage and understand.

Adhering to the DRY principle helps ensure that each piece of knowledge or logic in the codebase has a single, unambiguous representation. This not only enhances code readability and maintainability but also facilitates scalability and efficiency in software projects.

## Case Study: User Authentication System

Consider a web application with multiple components that require user authentication. Initially, the authentication logic (verifying usernames and passwords against a database) is duplicated in several places: when users log in, when they sign up, and when they update their account settings.

## Problem

The repeated authentication logic not only bloats the codebase but also introduces potential inconsistencies. If the authentication method needs to be updated (for example, to include password hashing), each instance of the logic must be found and updated individually. This is error-prone and can lead to security vulnerabilities if any instance is overlooked.

## Solution

The solution involves abstracting the authentication logic into a single, reusable function or class. This centralized logic can then be called wherever authentication is needed, ensuring consistency and reducing the risk of errors.

- Before Refactoring:

```javascript
// Login
function login(username, password) {
    // Authentication logic
}

// Sign up
function signUp(username, password) {
    // Duplicate authentication logic
}

// Update account
function updateAccount(username, password) {
    // Duplicate authentication logic
}
```

- After Refactoring:

```javascript
// Centralized authentication logic
function authenticateUser(username, password) {
    // Authentication logic
}

// Updated functions call the centralized logic
function login(username, password) {
    authenticateUser(username, password);
}

function signUp(username, password) {
    authenticateUser(username, password);
}

function updateAccount(username, password) {
    authenticateUser(username, password);
}
```

By refactoring the code to adhere to the DRY principle, the authentication logic is centralized, making it easier to maintain and update. This not only reduces the risk of inconsistencies but also improves the overall quality and maintainability of the codebase.

## Exercise Question: Refactor the Inventory System

> All Code Snippets are inside the `src` folder.

You are given an inventory management system for a bookstore that currently has the following code structure:

```javascript
// Adds a new book
function addBook(title, author, ISBN) {
    // Check if the book already exists
    // Add the book to the database
}

// Updates book quantity
function updateBookQuantity(ISBN, quantity) {
    // Check if the book exists
    // Update the quantity in the database
}

// Deletes a book
function deleteBook(ISBN) {
    // Check if the book exists
    // Delete the book from the database
}
```

Each function begins by checking if the book exists in the database, a logic that is repeated across all three functions.

#### Task

Refactor the code to adhere to the DRY principle by removing the redundancy. Create a single function to check if a book exists and use this function within `addBook`, `updateBookQuantity`, and `deleteBook`.
