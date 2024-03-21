# Princípios TDD
[![en](https://img.shields.io/badge/lang-en-red.svg)](./README.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](./README.pt-br.md)

Este repositório é dedicado a demonstrar os princípios do Desenvolvimento Guiado por Testes (TDD) por meio de exemplos práticos. Cada princípio é ilustrado com exemplos de código claros e concisos em Node.js, visando fornecer uma compreensão direta de como esses princípios podem ser aplicados para melhorar o design de software, tornando-o mais mantível, escalável e flexível.

## O que é TDD?

Desenvolvimento Guiado por Testes (TDD) é um processo de desenvolvimento de software que depende da repetição de um ciclo de desenvolvimento muito curto. O desenvolvedor escreve um caso de teste automatizado que define uma melhoria desejada ou nova função, produz a quantidade mínima de código para passar nesse teste e, por fim, refatora o novo código para padrões aceitáveis. Esse processo é repetido para cada melhoria desejada ou nova funcionalidade.

O ciclo TDD pode ser dividido nas seguintes etapas:

1. Vermelho: Escrever um caso de teste falho que define uma melhoria desejada ou nova funcionalidade.
2. Verde: Escrever a quantidade mínima de código para passar no caso de teste.
3. Refatorar: Refatorar o novo código para padrões aceitáveis.

## Começando

Neste repositório, você encontrará exemplos de princípios TDD demonstrados usando Node.js. Para explorar os exemplos, clone este repositório para sua máquina local e navegue até o diretório dedicado de cada princípio. Cada princípio é demonstrado usando Node.js, então certifique-se de ter o Node.js instalado em seu sistema.

```bash
npm install
```

E execute os testes:

```bash
npm test
```

Execute os testes com watch:

```bash
npm run test:watch
```

## Pré-requisitos

Node.js (versão recomendada 18 ou superior)

## Exercício

História: Você trabalha para uma empresa que possui um App usado por milhões de usuários. O App é um simples gerenciador de eventos, onde os usuários podem criar grupos e eventos. Cada grupo pode ter vários eventos, e cada evento tem uma data de início e fim. Como membro do grupo, você pode avaliar o evento, e o evento tem um status que pode ser "ativo", "emRevisão" ou "concluído".

Seu trabalho é implementar o seguinte caso de uso:

### `CheckLastEventStatus` UseCase

Obter o status do último evento do grupo

> ### Dados
* Id do Grupo

> ### Fluxo Principal
1. Obter os dados do último evento do grupo (data de término e duração do mercado de notas de revisão)
2. Retornar o status "ativo" se o evento ainda estiver em andamento

> ### Fluxo Alternativo: Evento está no limite do encerramento
2. Retornar o status "ativo"

> ### Fluxo Alternativo: Evento já encerrado, mas ainda dentro do limite de revisão
2. Retornar o status "emRevisão"

> ### Fluxo Alternativo: Evento já encerrado e fora do limite de revisão
2. Retornar o status "concluído"

> ### Fluxo Alternativo: Grupo não tem Evento marcado
2. Retornar o status "concluído"

## Todo

* Criar testes unitários
* Criar lógica para o fluxo principal
* Criar lógica para os fluxos alternativos

---

## Princípios

1. [Testes Unitários](./documantation/testes-unitarios.md)
2. [Red, Green, Refactor](./documantation/red-green-refactor.md)
3. [AAA - Arrange, Act, Assert](./documantation/aaa-arrange-act-assert.md)
4. [Mock, Stub e Spy](./documantation/mock-stub-spy.md)
5. [Commits Atômicos](./documantation/commits-atomicos.md)

## Por que usar TDD?

O TDD oferece vários benefícios:

- **Confiança**: Os testes garantem que o código funcione conforme o esperado.
- **Design melhorado**: O ciclo Red/Green/Refactor incentiva um design modular e bem estruturado.
- **Menos retrabalho**: Corrigir problemas no início economiza tempo e evita bugs no futuro.
- **Documentação viva**: Os testes servem como documentação atualizada do comportamento do código.

> ### Lembre-se de que o TDD não é uma bala de prata, mas é uma ferramenta poderosa para desenvolver software de alta qualidade. Experimente e veja como ele se encaixa no seu fluxo de trabalho! 🚀
