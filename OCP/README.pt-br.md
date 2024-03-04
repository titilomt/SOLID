# OCP - Principio Aberto/Fechado
[![en](https://img.shields.io/badge/lang-en-red.svg)](./README.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](./README.pt-br.md)

O Princípio Aberto/Fechado é o "O" no acrônimo SOLID, que representa os cinco princípios básicos da programação e do design orientados a objetos. Afirma que entidades de software devem ser abertas para extensão, mas fechadas para modificação. Isso significa que você deve ser capaz de adicionar novas funcionalidades a uma classe ou módulo sem modificar sua estrutura. Esses princípios têm como objetivo tornar os designs de software mais compreensíveis, flexíveis e manuteníveis.

## Estudo de Caso do Princípio Aberto/Fechado (OCP): Sistema de Relatórios de Vendas

Imagine um *Sistema de Relatórios de Vendas* que gera diferentes tipos de relatórios para uma loja. Inicialmente, o sistema foi projetado para gerar relatórios apenas em formato de texto. Com o tempo, surgiu a necessidade de suportar outros formatos de relatório, como HTML e PDF.

## Cenário Inicial - Violando o OCP

A implementação inicial do Sistema de Relatórios de Vendas viola o Princípio Aberto/Fechado (OCP) porque não está aberta para extensão. Se um novo formato de relatório for necessário, o código existente deve ser modificado, o que pode levar a potenciais bugs e problemas de manutenção.

```javascript
class SalesReport {
    generateReport(salesData: any[]): string {
        // Lógica para gerar um relatório em formato de texto
        return "Text Sales Report";
    }
}
```

Neste design, se quiséssemos adicionar suporte para formatos de relatório adicionais (como HTML ou PDF), precisaríamos modificar a classe `SalesReport`, adicionando mais condições ou métodos para cada novo formato. Isso viola o OCP, pois estamos modificando uma classe existente toda vez que precisamos estender sua funcionalidade.

## Cenário Refatorado - Adotando o OCP

Para aderir ao Princípio Aberto/Fechado (OCP), podemos refatorar o sistema de relatórios de vendas para estar aberto para extensão, mas fechado para modificação. Podemos alcançar isso introduzindo uma classe abstrata Report e criando classes de relatório concretas para cada formato. Desta forma, podemos adicionar novos formatos de relatório sem modificar o código existente.

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

Neste design refatorado, a interface `ReportGenerator` define um contrato para gerar relatórios. Em seguida, criamos classes concretas para cada formato de relatório, como `TextReport`, `HtmlReport` e `PdfReport`. Este design nos permite adicionar novos formatos de relatório sem modificar o código existente, aderindo assim ao Princípio Aberto/Fechado (OCP).

---

## Exercício

Sistema de Notificação com Princípio Aberto/Fechado (OCP)

### Contexto

Você está trabalhando em um sistema de notificação para uma aplicação que precisa enviar diferentes tipos de notificações para os usuários, como emails, SMS e mensagens dentro do aplicativo. O sistema atual suporta apenas o envio de emails, mas a empresa planeja expandir os métodos de notificação no futuro.

Seu desafio é refatorar o sistema existente para aderir ao Princípio Aberto/Fechado (OCP), permitindo a adição de novos tipos de notificação sem modificar o código existente.

### Requisitos

- Implementar uma estrutura que permita a fácil adição de novos métodos de notificação, como SMS ou mensagens dentro do aplicativo, sem alterar o código das classes existentes.
- Cada tipo de notificação deve implementar uma interface comum que inclua um método para enviar notificações.
- Criar uma classe NotificationService que possa usar qualquer método de notificação para enviar mensagens aos usuários.
- Escrever testes unitários para verificar que o NotificationService pode enviar notificações usando diferentes métodos.

