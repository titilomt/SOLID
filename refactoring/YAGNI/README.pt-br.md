# YAGNI - You Aren't Gonna Need It
[![en](https://img.shields.io/badge/lang-en-red.svg)](./README.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](./README.pt-br.md)

O princípio YAGNI ("Você não vai precisar disso") é uma prática de desenvolvimento de software que afirma que recursos só devem ser adicionados quando necessário. Como parte da filosofia de programação extrema (XP), a YAGNI elimina o excesso e a ineficiência no desenvolvimento para facilitar o desejado aumento da frequência de lançamentos.

## Descrição Detalhada

O princípio YAGNI, que significa "You Aren't Gonna Need It" (Você Não Vai Precisar Disso), é uma filosofia de desenvolvimento que encoraja os desenvolvedores a implementarem apenas funcionalidades que são imediatamente necessárias. Originário do desenvolvimento ágil, YAGNI é um lembrete para evitar o excesso de engenharia e a inclusão de funcionalidades baseadas em especulações sobre necessidades futuras, que podem nunca se materializar.

Este princípio ajuda a manter a base de código enxuta, reduzindo a complexidade e o custo de manutenção, além de acelerar o processo de desenvolvimento ao focar no que é essencial para o momento.

## Estudo de Caso: Sistema de Gerenciamento de Eventos

Uma equipe está desenvolvendo um sistema de gerenciamento de eventos que, na fase inicial, requer funcionalidades básicas como criar, visualizar e deletar eventos. Entretanto, antecipando possíveis requisitos futuros, a equipe também implementa funcionalidades avançadas como exportação de eventos para múltiplos formatos, integração com plataformas de mídia social e análise preditiva de participação.

## Problema

A inclusão prematura dessas funcionalidades avançadas resultou em um atraso significativo no cronograma de lançamento do projeto. Além disso, a complexidade adicional introduzida por essas funcionalidades não essenciais aumentou a carga de testes e manutenção, sem trazer benefícios imediatos para os usuários finais.

## Solução

Aplicando o princípio YAGNI, a equipe decide remover as funcionalidades avançadas não utilizadas e focar nas funcionalidades básicas necessárias para o lançamento inicial. Isso simplifica significativamente o sistema, reduzindo o tempo de desenvolvimento e os custos de manutenção, e permite que a equipe entregue o projeto dentro do prazo.

- Antes da Aplicação do YAGNI:

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

- Depois da Aplicação do YAGNI:

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

## Questão de Exercício: Refatoração do Sistema de Biblioteca

> Todos os trechos de código estão dentro da pasta `src`.

Você está revisando o código de um sistema de biblioteca online que, na sua concepção, incluiu um módulo de recomendação de livros baseado em inteligência artificial, antecipando uma demanda futura por personalização avançada.

### Tarefa

Considerando que o módulo de recomendação ainda não foi utilizado e há necessidades mais imediatas a serem atendidas, aplique o princípio YAGNI ao decidir o destino deste módulo. Sua tarefa é simplificar o sistema removendo ou adiando a implementação desse módulo, focando em melhorar as funcionalidades básicas de busca e empréstimo de livros.

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

Transforme o sistema focando nas necessidades atuais dos usuários e removendo o módulo de recomendação até que seja claramente necessário.
