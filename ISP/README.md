# ISP - Interface Segregation Principle

The Interface Segregation Principle (ISP) is one of the five SOLID principles of object-oriented programming. It states that a client should not be forced to depend on methods it does not use. In other words, a class should not be forced to implement interfaces it does not need.

## Interface Segregation Principle (ISP) Study Case: Orders Management System

Imagine an order management system where different types of orders need to be processed: online orders, telephone orders and email orders. Originally, the system used a single OrderProcessor interface with methods to process each type of order. This forced classes to implement all interface methods, even if they were not relevant to the specific type of request the class was intended to process.

### Initial Scenario - Violating the ISP

In this example, OnlineOrderProcessor is forced to implement processPhoneOrder and processEmailOrder, even though it should only process online orders. This clearly violates the ISP, as OnlineOrderProcessor is forced to depend on interfaces it does not use.

```javascript
interface OrderProcessor {
    processOnlineOrder(orderId: string): void;
    processPhoneOrder(orderId: string): void;
    processEmailOrder(orderId: string): void;
}

class OnlineOrderProcessor implements OrderProcessor {
    processOnlineOrder(orderId: string) {
        console.log(`Process online order: ${orderId}`);
    }

    processPhoneOrder(orderId: string) {
        throw new Error("Not supported");
    }

    processEmailOrder(orderId: string) {
        throw new Error("Not supported");
    }
}
```

### Refactored Scenario - Adhering to the ISP

To adhere to the ISP, we can split OrderProcessor into several smaller interfaces, each focusing on a specific type of order processing.


```javascript
interface OnlineOrderProcessor {
    processOnlineOrder(orderId: string): void;
}

interface PhoneOrderProcessor {
    processPhoneOrder(orderId: string): void;
}

interface EmailOrderProcessor {
    processEmailOrder(orderId: string): void;
}

class OnlineOrder implements OnlineOrderProcessor {
    processOnlineOrder(orderId: string) {
        console.log(`Process online order: ${orderId}`);
    }
}

class PhoneOrder implements PhoneOrderProcessor {
    processPhoneOrder(orderId: string) {
        console.log(`Process phone order: ${orderId}`);
    }
}

class EmailOrder implements EmailOrderProcessor {
    processEmailOrder(orderId: string) {
        console.log(`Process email order: ${orderId}`);
    }
}
```

Pros of Refactoring

- Specialization: Each class now specializes in processing a specific type of order, following the ISP.
- Flexibility and Maintainability: It is easier to add new types of order processors in the future without affecting existing ones.
- Avoid Useless Implementations: Classes no longer need to implement unnecessary methods, making the code cleaner and more understandable.

---

## Exercise: Refactoring the Notification System to Adopt ISP

### Context
You are working on a notification system that currently has a single INotification interface to send different types of notifications: by email, SMS and push notifications. Each notification type requires different parameters, and therefore not all interface methods are relevant for each concrete implementation. This is causing confusion and inefficiencies in the code.

### Task
Your challenge is to refactor the system by applying the Interface Segregation Principle (ISP), ensuring that specific notification classes implement only the methods relevant to them.
