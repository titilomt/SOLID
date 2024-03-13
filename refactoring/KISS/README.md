# KISS - Keep It Simple, Stupid
[![en](https://img.shields.io/badge/lang-en-red.svg)](./README.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](./README.pt-br.md)

## Detailed Description

The KISS principle, which stands for "Keep It Simple, Stupid," is a design philosophy that emphasizes the importance of simplicity in software development. The central idea is that systems should be designed in the simplest possible way, without adding unnecessary complexity. This not only makes the code easier to understand and maintain, but also minimizes the risk of errors.

## Case Study: Reporting System

The complexity of the reporting system made it difficult for new developers to understand how it works and how to make maintenance or additions. In addition, report generation became slow due to heavy processing load, and integrating new report formats required a large amount of development effort and time.

## Solution

The team decided to apply the KISS principle, simplifying the reporting system. They removed unnecessary abstraction layers, reduced the dependency on third-party libraries, and created a more direct and clear interface for report generation.

- Before Refactoring:

```javascript
class SalesReport {
    constructor(data) {
        this.data = data;
    }

    generateReport(format) {
        switch(format) {
            case (format === "HTML"):
                let report = "<html><head><title>Relatório de Vendas</title></head><body><h1>Dados de Vendas</h1><ul>";
                this.data.forEach(item => {
                    report += `<li>Venda: ${item.sale}, Data: ${item.date}, Total: ${item.total}</li>`;
                });
                report += "</ul></body></html>";
                return report;
            case (format === "PDF"):
                const pdfDocument = {};
                pdfDocument.start = () => {};
                pdfDocument.addText = (text) => {};
                pdfDocument.end = () => {};
                pdfDocument.start();
                pdfDocument.addText("Relatório de Vendas\n");
                this.data.forEach(item => {
                    pdfDocument.addText(`Venda: ${item.sale}, Data: ${item.date}, Total: ${item.total}\n`);
                });
                pdfDocument.end();
                return pdfDocument;
            case (format === "CSV"):
                let report = "Venda,Data,Total\n";
                this.data.forEach(item => {
                    report += `${item.sale},${item.date},${item.total}\n`;
                });
                return report;
            default:
                throw new Error("Formato de relatório não suportado.");
        }
    }
}

const reportData = [
    { sale: 1, date: "2021-01-01", total: 100 },
    { sale: 2, date: "2021-01-02", total: 200 }
];
const report = new SalesReport(reportData);
try {
    console.log(report.generateReport("HTML"));
} catch (error) {
    console.error(error);
}
```

- After Refactoring:

```javascript
interface ReportGenerator {
    generateReport(data: any): string;
}

class HtmlReportGenerator implements ReportGenerator {
    generateReport(data: any): string {
        let report = "<html><head><title>Relatório</title></head><body>";
        report += "</body></html>";
        return report;
    }
}

class PdfReportGenerator implements ReportGenerator {
    generateReport(data: any): string {
        const pdfCreator = new ComplexPdfLibrary();
        pdfCreator.startDocument();
        pdfCreator.endDocument();
        return pdfCreator.getOutput();
    }
}

class ReportConfiguration {
    constructor(public format: string) {}
    
    getReportGenerator(): ReportGenerator {
        switch (this.format) {
            case 'HTML':
                return new HtmlReportGenerator();
            case 'PDF':
                return new PdfReportGenerator();
            default:
                throw new Error('Formato de relatório não suportado');
        }
    }
}

class ReportClient {
    generate(data: any, format: string) {
        const config = new ReportConfiguration(format);
        const generator = config.getReportGenerator();
        return generator.generateReport(data);
    }
}

const client = new ReportClient();
const reportData = { /* Report Data */ };
console.log(client.generate(reportData, 'HTML'));
```

With this simplified approach, the reporting system has become easier to understand and extend. Report generation has become faster, and adding support for new report formats has become a much simpler task.

## Exercise Question: Refactoring the Navigation System

> All code snippets are inside the src folder.

You are working on a navigation system for a website that currently uses complex logic to determine which page should be shown to the user, based on a series of conditions and parameters. The current code structure is difficult to follow and prone to errors.

### Task

Your task is to refactor the navigation system by applying the KISS principle. Simplify the decision logic by removing unnecessary conditions and consolidating similar logic. The goal is to make the code clearer and easier to maintain, ensuring that the functionality remains unchanged.

```javascript
function navigate(user, pageRequested, permissions) {
    // Complex logic to determine which page to show
}
```

Transform the `navigate` function into a simpler and more direct solution that facilitates the addition or modification of navigation rules in the future.
