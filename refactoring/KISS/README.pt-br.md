# KISS - Keep It Simple, Stupid
[![en](https://img.shields.io/badge/lang-en-red.svg)](./README.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](./README.pt-br.md)

## Descrição Detalhada

O princípio KISS, que significa "Keep It Simple, Stupid" (Mantenha Isso Simples, Estúpido), é uma filosofia de design que enfatiza a importância da simplicidade no desenvolvimento de software. A ideia central é que sistemas devem ser projetados da maneira mais simples possível, sem adicionar complexidade desnecessária. Isso não apenas facilita a compreensão e a manutenção do código, mas também minimiza o risco de erros.

## Estudo de Caso: Sistema de Relatórios

A complexidade do sistema de relatórios tornou difícil para novos desenvolvedores entenderem como ele funciona e como fazer manutenções ou adições. Além disso, a geração de relatórios tornou-se lenta devido à pesada carga de processamento, e a integração de novos formatos de relatório exigia uma grande quantidade de esforço e tempo de desenvolvimento.

## Solução

A equipe decidiu aplicar o princípio KISS, simplificando o sistema de relatórios. Eles removeram as camadas de abstração desnecessárias, reduziram a dependência de bibliotecas de terceiros e criaram uma interface mais direta e clara para a geração de relatórios.

- Antes do Refatoramento:

```javascript
class SalesReport {
    constructor(data) {
        this.data = data;
    }

    // Gera um relatório em um formato específico, baseado em uma string de formato
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
                const pdfDocument = {}; // Simula uma biblioteca complexa de PDF
                pdfDocument.start = () => {};
                pdfDocument.addText = (text) => {};
                pdfDocument.end = () => {};
                // Suposto código complexo para gerar um PDF
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
// Exemplo de uso
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

- Depois do Refatoramento:

```javascript
// Interface genérica para relatórios
interface ReportGenerator {
    generateReport(data: any): string;
}

// Implementação para relatório em HTML
class HtmlReportGenerator implements ReportGenerator {
    generateReport(data: any): string {
        let report = "<html><head><title>Relatório</title></head><body>";
        // Processamento complexo e construção do relatório em HTML
        report += "</body></html>";
        return report;
    }
}

// Implementação para relatório em PDF usando uma biblioteca de terceiros
class PdfReportGenerator implements ReportGenerator {
    generateReport(data: any): string {
        const pdfCreator = new ComplexPdfLibrary();
        pdfCreator.startDocument();
        // Processamento complexo e adição de conteúdo ao documento PDF
        pdfCreator.endDocument();
        return pdfCreator.getOutput();
    }
}

// Sistema de configuração para determinar qual gerador usar
class ReportConfiguration {
    constructor(public format: string) {}
    
    getReportGenerator(): ReportGenerator {
        switch (this.format) {
            case 'HTML':
                return new HtmlReportGenerator();
            case 'PDF':
                return new PdfReportGenerator();
            // Potencialmente mais casos para diferentes formatos
            default:
                throw new Error('Formato de relatório não suportado');
        }
    }
}

// Classe cliente que utiliza os geradores de relatório
class ReportClient {
    generate(data: any, format: string) {
        const config = new ReportConfiguration(format);
        const generator = config.getReportGenerator();
        return generator.generateReport(data);
    }
}

// Uso
const client = new ReportClient();
const reportData = { /* Dados do relatório */ };
console.log(client.generate(reportData, 'HTML'));
```

Com essa abordagem simplificada, o sistema de relatórios tornou-se mais fácil de entender e estender. A geração de relatórios ficou mais rápida, e adicionar suporte para novos formatos de relatório tornou-se uma tarefa muito mais simples.

## Questão de Exercício: Refatoração do Sistema de Navegação

> Todos os trechos de código estão dentro da pasta `src`.

Você está trabalhando em um sistema de navegação para um site que atualmente utiliza uma lógica complexa para determinar qual página deve ser mostrada ao usuário, baseada em uma série de condições e parâmetros. A estrutura atual do código é difícil de seguir e propensa a erros.

### Tarefa

Sua tarefa é refatorar o sistema de navegação aplicando o princípio KISS. Simplifique a lógica de decisão, removendo condições desnecessárias e consolidando a lógica semelhante. O objetivo é tornar o código mais claro e fácil de manter, garantindo que a funcionalidade permaneça inalterada.

```javascript
// Estrutura complicada atual para determinar a navegação
function navigate(user, pageRequested, permissions) {
    // Lógica complexa para decidir qual página mostrar
}
```

Transforme a função `navigate` em uma solução mais simples e direta que facilite a adição ou modificação de regras de navegação no futuro.
