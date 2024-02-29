# SRP - Single Responsibility Principle
In the context of Clean Architecture, SRP is applied at several levels. At a more macro level, the architecture is divided into layers, such as presentation, business logic and data. Each layer has a clearly defined responsibility and should not overlap. For example, the presentation layer only deals with the user interface, while the business logic layer only focuses on domain-specific logic.
On a more micro level, such as when defining classes and functions, SRP is applied to ensure that each component has a single responsibility. A class should only have one reason to be modified. If a class is doing more than a single task, it is violating the SRP.
When approaching SRP in the context of Clean Architecture, it is crucial to highlight how the separation of responsibilities into different layers and software components promotes the maintainability, flexibility and testability of the system as a whole.

## Single Responsibility Principle (SRP) Case Study: Library Management System
In the context of a web application developed using Node.js, we encounter a common issue where a single class takes on multiple responsibilities. This case study illustrates the application of the Single Responsibility Principle (SRP) by refactoring a LibraryManager class, which originally handled both user operations (such as registration and authentication) and book operations (such as adding or removing books) within the library system.

### Problem
The LibraryManager class is responsible for handling both user operations and book operations. This violates the SRP, as the class has more than one reason to change. For example, if the user operations need to be modified, the class will be affected, even though it should only be concerned with book operations.

```javascript
class LibraryManager
{
    constructor() {
        this.users = [];
        this.books = [];
    }

    addUser(user) {
        this.users.push(user);
    }

    removeUser(user) {
        this.users = this.users.filter(u => u.id !== user.id);
    }

    addBook(book) {
        this.books.push(book);
    }

    removeBook(book) {
        this.books = this.books.filter(b => b.id !== book.id);
    }
}
```

### Solution
To adhere to the SRP, the LibraryManager class is refactored into two separate classes: UserManager and BookManager. Each class is responsible for handling user operations and book operations, respectively. This separation of concerns ensures that each class has a single responsibility and only one reason to change.

```javascript
class UserManager
{
    constructor() {
        this.users = [];
    }

    addUser(user) {
        this.users.push(user);
    }

    removeUser(user) {
        this.users = this.users.filter(u => u.id !== user.id);
    }
}

class BookManager
{
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    removeBook(book) {
        this.books = this.books.filter(b => b.id !== book.id);
    }
}
```

# Exercise
In the `SRP` directory, you will find the EmployeeManager class, which is responsible for handling both employee operations and department operations. Your task is to refactor the EmployeeManager class into two separate classes: EmployeeManager and DepartmentManager. Each class should be responsible for handling employee operations and department operations, respectively. This exercise will help you practice applying the Single Responsibility Principle (SRP) to improve the maintainability and flexibility of the system.