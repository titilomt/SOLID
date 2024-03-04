# OCP - Open/Closed Principle
[![en](https://img.shields.io/badge/lang-en-red.svg)](./README.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](./README.pt-br.md)

The Open/Closed Principle is the "O" in the SOLID acronym, which represents the five basic principles of object-oriented programming and design. States that software entities should be open for extension but closed for modification. This means that you should be able to add new features to a class or module without modifying its structure. These principles are intended to make software designs more understandable, flexible, and maintainable.

## Open/Closed Principle (OCP) Case Study: Sales Reports System

Imagine a *Sales Reporting System* that generates different types of reports for a store. Initially, the system was designed to only generate reports in text format. Over time, the need arose to support other report formats, such as HTML and PDF.

### Initial Scenario - Violating the OCP

The initial implementation of the *Sales Reporting System* violates the Open/Closed Principle (OCP) because it is not open for extension. If a new report format is required, the existing code must be modified, which can lead to potential bugs and maintenance issues.

```javascript
class SalesReport {
    generateReport(salesData: any[]): string {
        // Lógica para gerar um relatório em formato de texto
        return "Text Sales Report";
    }
}
```

In this design, if we wanted to add support for additional report formats (like HTML or PDF), we would need to modify the `SalesReport` class, adding more conditions or methods for each new format. This violates OCP as we are modifying an existing class every time we need to extend its functionality.

### Refactored Scenario - Adhering to the OCP

To adhere to the Open/Closed Principle (OCP), we can refactor the sales reporting system to be open for extension but closed for modification. We can achieve this by introducing an abstract `Report` class and creating concrete report classes for each format. This way, we can add new report formats without modifying the existing code.

```javascript
interface ReportGenerator {
    abstract generateReport(salesData: any[]): string;
}

class TextReport implements ReportGenerator {
    generateReport(salesData: any[]): string {
        return "Text Sales Report";
    }
}

class HtmlReport implements ReportGenerator {
    generateReport(salesData: any[]): string {
        return "<h1>HTML Sale Report</h1>";
    }
}

class PdfReport implements ReportGenerator {
    generateReport(salesData: any[]): string {
        return "PDF Sales Report";
    }
}
```

In this refactored design, the `ReportGenerator` interface defines a contract for generating reports. We then create concrete classes for each report format, such as `TextReport`, `HtmlReport`, and `PdfReport`. This design allows us to add new report formats without modifying the existing code, thus adhering to the Open/Closed Principle (OCP).

---

## Exercise

Notification System with Open/Closed Principle (OCP)

### Context

You are working on a notification system for an application that needs to send different types of notifications to users, such as emails, SMS, and in-app messages. The current system only supports email sending, but the company plans to expand the notification methods in the future.

Your challenge is to refactor the existing system to adhere to the Open/Closed Principle (OCP), allowing the addition of new types of notification without modifying the existing code.

### Requirements

- Implement a structure that allows for the easy addition of new notification methods, such as SMS or in-app messages, without changing the code of existing classes.
- Each type of notification must implement a common interface that includes a method to send notifications.
- Create a NotificationService class that can use any notification method to send messages to users.
- Write unit tests to verify that the NotificationService can send notifications using different methods.
