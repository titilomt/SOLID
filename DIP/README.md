# DIP - Dependency Inversion Principle
[![en](https://img.shields.io/badge/lang-en-red.svg)](./README.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](./README.pt-br.md)

The Dependency Inversion Principle (DIP) is one of the five SOLID principles of object-oriented programming. It states that high-level modules should not depend on low-level modules. Both should depend on abstractions. In addition, abstractions should not depend on details. Details should depend on abstractions.

## Dependency Inversion Principle (DIP) Study Case: Implementing Dependency Inversion Principle (DIP) in a User Management System

### Background
The Dependency Inversion Principle (DIP) is one of the SOLID principles of object-oriented design, which states two essential things:

1. High-level modules should not depend on low-level modules. Both should depend on abstractions.
2. Abstractions should not depend upon details. Details should depend upon abstractions.

This principle encourages decoupling your code by inverting the direction of the dependencies. In practice, this often means using interface or abstract class dependencies instead of concrete class dependencies.

### Scenario: User Profile Management

Imagine a system for managing user profiles in an application. The system allows for the retrieval of user information from a database and the ability to notify users via email. Initially, the system directly integrates high-level logic (user profile management) with low-level implementations (database access and email sending), violating the DIP.

### Initial Scenario - Violating the DIP

```javascript
// UserRepository.ts
class UserRepository {
    getUser(id: string): string {
        // Directly access the database to get user info
        return `User info for ID: ${id}`;
    }
}

// EmailService.ts
class EmailService {
    sendEmail(userEmail: string, message: string): void {
        // Directly send an email
        console.log(`Sending email to ${userEmail}: ${message}`);
    }
}

// UserProfileManager.ts
class UserProfileManager {
    private userRepository = new UserRepository();
    private emailService = new EmailService();

    getUserProfile(id: string): string {
        return this.userRepository.getUser(id);
    }

    notifyUser(id: string): void {
        const userEmail = this.getUserProfile(id); // Simplification for example
        this.emailService.sendEmail(userEmail, "Your profile has been updated.");
    }
}
```

In this initial design, `UserProfileManager` directly depends on `UserRepository` and `EmailService`, violating the DIP. This design makes it difficult to change the database or email service implementations without modifying `UserProfileManager`.

### Refactored Scenario - Adhering to the DIP

To adhere to the Dependency Inversion Principle (DIP), we can invert the dependencies by introducing abstractions and using dependency injection to provide the concrete implementations.

1. Defining abstractions for the low-level modules (UserRepository and EmailService).
2. Modifying UserProfileManager to depend on these abstractions instead of concrete implementations.
3. Injecting the concrete implementations into UserProfileManager from a higher level (e.g., during instantiation).

#### Step 1: Define Abstractions

```javascript
// IUserRepository.ts
interface IUserRepository {
    getUser(id: string): string;
}

// IEmailService.ts
interface IEmailService {
    sendEmail(userEmail: string, message: string): void;
}
```

#### Step 2: Implement Abstractions

```javascript
// UserRepository.ts
class UserRepository implements IUserRepository {
    getUser(id: string): string {
        return `User info for ID: ${id}`;
    }
}

// EmailService.ts
class EmailService implements IEmailService {
    sendEmail(userEmail: string, message: string): void {
        console.log(`Sending email to ${userEmail}: ${message}`);
    }
}
```

#### Step 3: Modify High-Level Module

```javascript
// UserProfileManager.ts
class UserProfileManager {
    private userRepository: IUserRepository;
    private emailService: IEmailService;

    constructor(userRepository: IUserRepository, emailService: IEmailService) {
        this.userRepository = userRepository;
        this.emailService = emailService;
    }

    getUserProfile(id: string): string {
        return this.userRepository.getUser(id);
    }

    notifyUser(id: string): void {
        const userEmail = this.getUserProfile(id); // Simplification for example
        this.emailService.sendEmail(userEmail, "Your profile has been updated.");
    }
}
```

#### Dependency Injection

```javascript
const userProfileManager = new UserProfileManager(new UserRepository(), new EmailService());
```

### Conclusion
By refactoring the system to adhere to the Dependency Inversion Principle, we've decoupled the high-level user profile management logic from the low-level database access and email sending implementations. This makes the system more modular, easier to test, and flexible for future changes, such as introducing new types of repositories or notification methods without altering the core logic.

---

## Exercise: Refactoring a Payment Processing System with DIP

### Context

You are tasked with refactoring a payment processing system that currently violates the Dependency Inversion Principle (DIP). The system is tightly coupled with a specific payment gateway for processing payments, making it difficult to introduce additional payment methods or switch payment service providers without significant changes to the system.

Initial Implementation

The initial implementation directly integrates with a concrete StripePaymentService, which makes HTTP requests to the Stripe API to process payments.

### Task
Your task is to refactor this payment processing system to adhere to the Dependency Inversion Principle. This involves creating an abstraction for the payment service and modifying the `PaymentProcessor` to depend on this abstraction rather than a concrete implementation. The system should be able to support different payment services (e.g., Stripe, PayPal) without changing the `PaymentProcessor` class.

#### Requirements for the Solution
- Refactor the system following the DIP to pass the test.
- Ensure that adding a new payment service doesn't require changes to the `PaymentProcessor`.
- Demonstrate the system's flexibility by writing additional tests for a new payment service.

This exercise challenges you to apply the Dependency Inversion Principle to make the payment processing system more flexible and maintainable, thereby facilitating easier testing and extension with new payment methods.
