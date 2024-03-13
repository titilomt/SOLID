# Hide How with What
[![en](https://img.shields.io/badge/lang-en-red.svg)](./README.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](./README.pt-br.md)

This principle is just a part/reformulation of the Clean Code principle as formulated by Robert Martin.

To me, hiding "how" with "what" means extracting classes and methods whenever:

- I can identify a distinct and non-trivial function performed by some piece of code, and
- I can hide that non-triviality behind a method with a meaningful name.

## Detailed Description

The "Hide 'How' With 'What'" principle is a powerful software design technique that encourages developers to emphasize what a piece of code does, rather than how it does it. This principle is closely related to abstraction and encapsulation, serving as a pillar for creating cleaner, more modular, and easily maintained code.

The idea is to reduce the complexity of software by exposing simple interfaces that hide internal implementation details. This not only makes the code easier for other developers to use and understand but also promotes flexibility, allowing implementation details to be changed without impacting the consumers of that functionality.

## Case Study: Payment System

An e-commerce application implemented a payment system that directly manipulates sensitive credit card details in various parts of the code. This approach exposes the payment processing logic, increasing the risk of errors and making changes to the payment system difficult.

## Problem

The direct and repeated handling of sensitive credit card information throughout the code is error-prone and creates a high risk of security breaches. Furthermore, introducing a new payment gateway or changing processing rules requires an extensive review of the code, increasing maintenance costs.

## Solution

The solution involves encapsulating the payment processing logic within a dedicated class or module, exposing only a simple interface - the "what" (for example, processPayment) - and hiding the details of the "how". This simplifies the consumer code, reduces the risk of errors, and facilitates the maintenance and updating of the payment system.

- **Before Applying the Principle**

```javascript
// In various parts of the code
function checkout(cart, creditCardInfo) {
    // Complex and repetitive payment processing logic
}
```

- **After Applying the Principle**

```javascript
class PaymentProcessor {
    processPayment(amount, creditCardInfo) {
        // Encapsulated payment processing logic
    }
}

// Consuming the new interface
function checkout(cart, creditCardInfo) {
    const paymentProcessor = new PaymentProcessor();
    paymentProcessor.processPayment(cart.total, creditCardInfo);
}
```

## Exercise Question: Refactoring the Reporting System

> All code snippets are inside the `src` folder.

You are working on refactoring a complex reporting system that generates reports in different formats (PDF, HTML, CSV) and spreads the formatting logic throughout the code.

### Task

Your task is to apply the "Hide 'How' With 'What'" principle to encapsulate the report formatting logic in a dedicated class or module. Create a simple interface that allows the system's consumers to generate reports without worrying about implementation details.

```javascript
// Current structure with scattered formatting logic
function generateReport(data, format) {
    if (format === "PDF") {
        // Generates and formats the report in PDF
    } else if (format === "HTML") {
        // Generates and formats the report in HTML
    } else if (format === "CSV") {
        // Generates and formats the report in CSV
    }
}
```

Transform this function into a solution that abstracts the complexity of formatting, providing a clear and simple way to generate reports in various formats, facilitating future extensions and maintenance.
