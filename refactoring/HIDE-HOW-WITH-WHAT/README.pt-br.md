# Hide How with What
[![en](https://img.shields.io/badge/lang-en-red.svg)](./README.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](./README.pt-br.md)

Este princípio é apenas uma parte/reformulação do princípio do código limpo, conforme formulado por Robert Martin.

Para mim, esconder "como" com "o quê" significa extrair classes e métodos sempre que:

- Posso identificar uma função distinta e não trivial executada por algum trecho de código e
- Posso esconder essa não trivialidade atrás de um método com um nome significativo.

## Descrição Detalhada

O princípio "Esconda o Como com o Quê" é uma técnica poderosa de design de software que incentiva os desenvolvedores a enfatizar o que uma parte do código faz, em vez de como ela faz. Esse princípio está intimamente relacionado à abstração e ao encapsulamento, servindo como um pilar para criar código mais limpo, modular e facilmente mantido.

A ideia é reduzir a complexidade do software, expondo interfaces simples que ocultam os detalhes de implementação internos. Isso não apenas facilita o uso e a compreensão do código por outros desenvolvedores, mas também promove a flexibilidade, permitindo que os detalhes de implementação sejam alterados sem impactar os consumidores dessa funcionalidade.

## Estudo de Caso: Sistema de Pagamento

Uma aplicação de comércio eletrônico implementou um sistema de pagamento que diretamente manipula detalhes sensíveis do cartão de crédito em várias partes do código. Essa abordagem expõe a lógica de processamento de pagamento, aumentando o risco de erros e dificultando mudanças no sistema de pagamento.

## Problema

A manipulação direta e repetida de informações sensíveis do cartão de crédito em todo o código é propensa a erros e cria um alto risco de falhas de segurança. Além disso, a introdução de um novo gateway de pagamento ou a mudança nas regras de processamento requer uma revisão extensiva do código, aumentando os custos de manutenção.

## Solução

A solução envolve encapsular a lógica de processamento de pagamento dentro de uma classe ou módulo dedicado, expondo apenas uma interface simples - o "quê" (por exemplo, `processPayment`) - e escondendo os detalhes do "como". Isso simplifica o código consumidor, reduz o risco de erros e facilita a manutenção e a atualização do sistema de pagamento.

- **Antes da Aplicação do Princípio**

```javascript
// Em várias partes do código
function checkout(cart, creditCardInfo) {
    // Lógica complexa e repetitiva de processamento de pagamento
}
```

- **Depois da Aplicação do Princípio**

```javascript
class PaymentProcessor {
    processPayment(amount, creditCardInfo) {
        // Lógica encapsulada de processamento de pagamento
    }
}

// Consumindo a nova interface
function checkout(cart, creditCardInfo) {
    const paymentProcessor = new PaymentProcessor();
    paymentProcessor.processPayment(cart.total, creditCardInfo);
}
```

## Questão de Exercício: Refatoração do Sistema de Relatórios

> Todos os trechos de código estão dentro da pasta `src`.

Você está trabalhando na refatoração de um sistema de relatórios complexo que gera relatórios em diferentes formatos (PDF, HTML, CSV) e que espalha a lógica de formatação pelo código.

### Tarefa

Sua tarefa é aplicar o princípio "Esconda o Como com o Quê" para encapsular a lógica de formatação de relatórios em uma classe ou módulo dedicado. Crie uma interface simples que permita aos consumidores do sistema gerar relatórios sem se preocupar com os detalhes de implementação.

```javascript
// Estrutura atual com lógica de formatação espalhada
function generateReport(data, format) {
    if (format === "PDF") {
        // Gera e formata o relatório em PDF
    } else if (format === "HTML") {
        // Gera e formata o relatório em HTML
    } else if (format === "CSV") {
        // Gera e formata o relatório em CSV
    }
}
```

Transforme esta função em uma solução que abstrai a complexidade de formatação, proporcionando uma maneira clara e simples de gerar relatórios em vários formatos, facilitando futuras extensões e manutenções.
