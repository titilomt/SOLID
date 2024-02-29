# SOLID Principles Examples
This repository is dedicated to demonstrating the SOLID principles of object-oriented design through practical examples. Each principle is illustrated with clear, concise code examples in Node.js, aiming to provide a straightforward understanding of how these principles can be applied to improve software design, making it more maintainable, scalable, and flexible.

## What are SOLID Principles?
SOLID stands for five design principles intended to make software designs more understandable, flexible, and maintainable. The acronym SOLID stands for:

- Single Responsibility Principle (SRP)
- Open/Closed Principle (OCP)
- Liskov Substitution Principle (LSP)
- Interface Segregation Principle (ISP)
- Dependency Inversion Principle (DIP)

## Getting Started
To explore the examples, clone this repository to your local machine and navigate to each principle's dedicated directory. Each principle is demonstrated using Node.js, so ensure you have Node.js installed on your system.

```bash
git clone https://github.com/titilomt/SOLID.git
cd SOLID
```
## Prerequisites
Node.js (recommended version 18 or above)

## Installation
No additional installation is required. Each example can be run directly using Node.js. For instance, to run an example for the Single Responsibility Principle:

```bash
cd SRP
npm install
npm test
```

## Examples Overview
- Single Responsibility Principle (SRP)
  - Location: `/SRP`
  - Demonstrates how to design classes that have only one reason to change, focusing on a single responsibility.
- Open/Closed Principle (OCP)
  - Location: `/OCP`
  - Showcases how entities should be open for extension but closed for modification.
- Liskov Substitution Principle (LSP)
  - Location: `/LSP`
  - Illustrates substitutability of objects of a superclass with objects of a subclass without affecting the correctness of the program.
- Interface Segregation Principle (ISP)
  - Location: `/ISP`
  - Demonstrates how to create lean interfaces that do not force implementing classes to depend on methods they do not use.
- Dependency Inversion Principle (DIP)
  - Location: `/DIP`
  - Explains how to decouple high-level modules from low-level modules by introducing abstractions that both can depend on.
---