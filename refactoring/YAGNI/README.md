# YAGNI - You Aren't Gonna Need It
[![en](https://img.shields.io/badge/lang-en-red.svg)](./README.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](./README.pt-br.md)

The YAGNI principle ("You Aren't Gonna Need It") is a software development practice that states that features should only be added when necessary. As part of the Extreme Programming (XP) philosophy, YAGNI eliminates excess and inefficiency in development to facilitate the desired increase in release frequency.

## Detailed Description

The YAGNI principle, which stands for "You Aren't Gonna Need It," is a development philosophy that encourages developers to implement only functionalities that are immediately necessary. Originating from agile development, YAGNI serves as a reminder to avoid overengineering and including functionalities based on speculations about future needs, which may never materialize.

This principle helps keep the codebase lean, reducing complexity and maintenance costs, and accelerating the development process by focusing on what is essential for the moment.

## Case Study: Event Management System

A team is developing an event management system that, in its initial phase, requires basic functionalities like creating, viewing, and deleting events. However, anticipating possible future requirements, the team also implements advanced functionalities such as exporting events to multiple formats, integration with social media platforms, and predictive participation analysis.

## Problem

The premature inclusion of these advanced functionalities resulted in a significant delay in the project's release schedule. Additionally, the extra complexity introduced by these non-essential functionalities increased the testing and maintenance burden without bringing immediate benefits to the end-users.

## Solution

By applying the YAGNI principle, the team decides to remove the unused advanced functionalities and focus on the basic functionalities needed for the initial launch. This significantly simplifies the system, reducing development time and maintenance costs, and allows the team to deliver the project on schedule.

- Before Applying YAGNI:

```javascript
class EventManager {
    constructor() {
        this.events = [];
    }

    addEvent(event) {
        this.events.push(event);
    }

    deleteEvent(event) {
        const index = this.events.indexOf(event);
        if (index > -1) {
            this.events.splice(index, 1);
        }
    }

    exportEvents(format) {
        switch (format) {
            case "CSV":
                // Export events to CSV
                break;
            case "PDF":
                // Export events to PDF
                break;
            case "ICS":
                // Export events to ICS
                break;
            case "HTML":
                // Export events to HTML
                break;
            default:
                throw new Error("Unsupported export format");
        }
    }

    shareOnSocialMedia(event, platform) {
        // Share event details on social media
    }

    predictEventParticipation(event) {
        // Predict participation based on historical data
    }
}
```

- After Applying YAGNI:

```javascript
class EventManager {
    constructor() {
        this.events = [];
    }

    addEvent(event) {
        this.events.push(event);
    }

    deleteEvent(event) {
        const index = this.events.indexOf(event);
        if (index > -1) {
            this.events.splice(index, 1);
        }
    }
}
```

## Exercise Question: Refactoring the Library System

> All code are inside `src`.

You are reviewing the code of an online library system that, in its design, included a book recommendation module based on artificial intelligence, anticipating a future demand for advanced customization.

### Task

Considering that the recommendation module has not been used yet and there are more immediate needs to be met, apply the YAGNI principle in deciding the fate of this module. Your task is to simplify the system by removing or postponing the implementation of this module, focusing on improving the basic functionalities of book search and loan.

```javascript
// Estrutura complexa atual do sistema de biblioteca, incluindo o módulo de recomendação não utilizado
function searchBook(title, author) {
    // Lógica de busca de livros
}

function loanBook(bookId, userId) {
    // Lógica de empréstimo de livros
}

// Módulo de recomendação de livros baseado em IA
function recommendBooks(userId) {
    // Lógica complexa de recomendação não utilizada
}
```

Transform the system by focusing on the current needs of the users and removing the recommendation module until it is clearly needed.
