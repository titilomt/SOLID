# TDD Principles
[![en](https://img.shields.io/badge/lang-en-red.svg)](./README.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](./README.pt-br.md)

This repository is dedicated to demonstrating the principles of Test-Driven Development (TDD) through practical examples. Each principle is illustrated with clear, concise code examples in Node.js, aiming to provide a straightforward understanding of how these principles can be applied to improve software design, making it more maintainable, scalable, and flexible.

## What is TDD?

Test-Driven Development (TDD) is a software development process that relies on the repetition of a very short development cycle. The developer writes an automated test case that defines a desired improvement or new function, then produces the minimum amount of code to pass that test, and finally refactors the new code to acceptable standards. This process is repeated for each desired improvement or new feature.

The TDD cycle can be broken down into the following steps:

1. **Red**: Write a failing test case that defines a desired improvement or new feature.
2. **Green**: Write the minimum amount of code to pass the test case.
3. **Refactor**: Refactor the new code to acceptable standards.

## Getting Started

In this repository, you will find examples of TDD principles demonstrated using Node.js. To explore the examples, clone this repository to your local machine and navigate to each principle's dedicated directory. Each principle is demonstrated using Node.js, so ensure you have Node.js installed on your system.

```bash
npm install
```

And run the tests:

```bash
npm test
```

Run tests with watch:

```bash
npm run test:watch
```

## Prerequisites

Node.js (recommended version 18 or above)

## Exercice

History: You work for a company that has an App that is used by millions of users. The App is a simple event Manager, where users can create groups and events. Each group can have multiple events, and each event has a start and end date. As a group member you can rate the event, and the event has a status that can be "active", "inReview" or "done".

Your job is to implement the following use case:

`CheckLastEventStatus` UseCase

Get the status of the last event of the group

> ## Data
* Group Id

> ## Main Flow
1. Get the data of the last event of the group (end date and duration of the review notes market)
2. Return the status "active" if the event is still ongoing

> ## Alternative Flow: Event is at the closing limit
2. Return the status "active"

> ## Alternative Flow: Event has already ended, but still within the review limit
2. Return the status "inReview"

> ## Alternative Flow: Event has already ended and outside the review limit
2. Return the status "done"

> ## Alternative Flow: Group does not have a scheduled Event
2. Return the status "done"

## Todo

Remember to follow the TDD cycle (Red, Green, Refactor) and TDD pattern (AAA - Arrange, Act, Assert).

- Create unit tests
- Create logic for the main flow
- Create logic for alternative flows
