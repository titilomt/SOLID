# LSP - Liskov Substitution Principle

The Liskov Substitution Principle (LSP) is one of the five SOLID principles of object-oriented programming. It states that objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program. In other words, a subclass should be able to replace its superclass without changing the behavior of the program.

## Liskov Substitution Principle (LSP) Study Case: File Management System

Imagine a file management system where you have a `FileProcessor` base class that handles reading files. You decide to extend this functionality to support not only local files but also remote files, such as those accessed over HTTP.

### Initial Scenario - Violating the LSP

In the initial design, the `FileProcessor` class has a `readFile` method that reads a file from the local file system. To support remote files, you create a `RemoteFileProcessor` subclass that overrides the `readFile` method to read files from a remote server. However, the `RemoteFileProcessor` class violates the Liskov Substitution Principle (LSP) because it changes the behavior of the `readFile` method, which is not expected when replacing the `FileProcessor` superclass.

```javascript
class FileProcessor {
    readFile(path: string): string {
        return "Local File Content";
    }
}

class RemoteFileProcessor extends FileProcessor {
    readFile(url: string): string {
        throw new Error("This method doesnt support read remote URL.");
    }
}
```

`RemoteFileProcessor` attempts to extend `FileProcessor` to support remote files. However, it changes the expected behavior of the readFile method, introducing a restriction (does not support reading from remote URLs) that did not exist in the base class. This violates LSP, as now the use of `FileProcessor` and `RemoteFileProcessor` is not interchangeable without changing the expected behavior of the program.

### Refactored Scenario - Adhering to the LSP

To adhere to the Liskov Substitution Principle (LSP), you can refactor the design to use composition instead of inheritance. Instead of creating a `RemoteFileProcessor` subclass, you can create a `RemoteFileReader` class that handles reading files from remote URLs. This design adheres to the LSP by ensuring that the behavior of the `FileProcessor` class is not changed when using the `RemoteFileReader` class.

```javascript
interface IFileProcessor {
    readFile(source: string): string;
}

class LocalFileProcessor implements IFileProcessor {
    readFile(path: string): string {
        return "Local File Content";
    }
}

class RemoteFileProcessor implements IFileProcessor {
    readFile(url: string): string {
        return "Remote File Content";
    }
}
```

In this refactoring:

- We define an IFileProcessor interface with the readFile method.
- LocalFileProcessor and RemoteFileProcessor implement IFileProcessor, each dealing with its own file source type, but both adhere to the contract defined by the interface.
- Both classes are now substitutable for each other without changing the expected behavior, in accordance with LSP.

---

## Exercise: Refactoring a Shape Rendering System

### Context
You are working on a graphics rendering system that supports different types of shapes. Currently, the system has a Shape base class with Circle and Square subclasses. The system has been extended to support text rendering by introducing a new Text class. However, the introduction of the Text class breaks substitutability, as Text does not fit perfectly into the Shape model, violating the Liskov Substitution Principle (LSP).

### Task
Your task is to refactor the rendering system to adhere to LSP, ensuring that all classes can be treated uniformly in rendering. You will also need to adjust or add unit tests, which are currently failing due to LSP violation.


### Exercise Requirements
Refactor the Rendering System: Modify classes and/or introduce new abstractions to ensure that Circle, Square, and Text can be treated uniformly. Everyone must adhere to a common interface that allows rendering without breaking LSP.

`Fix Unit Tests:` Adjust unit tests to reflect your changes, ensuring they all pass. Tests should verify that all shapes and texts can be rendered uniformly.