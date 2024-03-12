# SRP - Principio da Responsabilidade Única
[![en](https://img.shields.io/badge/lang-en-red.svg)](./README.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](./README.pt-br.md)

No contexto da Arquitetura Limpa, o SRP é aplicado em vários níveis. Em um nível mais macro, a arquitetura é dividida em camadas, como apresentação, lógica de negócios e dados. Cada camada tem uma responsabilidade claramente definida e não deve se sobrepor. Por exemplo, a camada de apresentação lida apenas com a interface do usuário, enquanto a camada de lógica de negócios foca apenas na lógica específica do domínio.

Em um nível mais micro, como ao definir classes e funções, o SRP é aplicado para garantir que cada componente tenha uma única responsabilidade. Uma classe deve ter apenas um motivo para ser modificada. Se uma classe está fazendo mais de uma tarefa, ela está violando o SRP.

Ao abordar o SRP no contexto da Arquitetura Limpa, é crucial destacar como a separação das responsabilidades em diferentes camadas e componentes de software promove a manutenibilidade, flexibilidade e testabilidade do sistema como um todo.

## Estudo de Caso do Princípio da Responsabilidade Única (SRP): Sistema de Gerenciamento de Biblioteca

No contexto de uma aplicação web desenvolvida usando Node.js, encontramos um problema comum onde uma única classe assume múltiplas responsabilidades. Este estudo de caso ilustra a aplicação do Princípio da Responsabilidade Única (SRP) ao refatorar uma classe LibraryManager, que originalmente lidava tanto com operações de usuários (como registro e autenticação) quanto com operações de livros (como adicionar ou remover livros) dentro do sistema da biblioteca.

### Cenário Inicial - Violando o SRP

A classe LibraryManager é responsável por lidar tanto com operações de usuários quanto com operações de livros. Isso viola o SRP, pois a classe tem mais de um motivo para mudar. Por exemplo, se as operações de usuário precisarem ser modificadas, a classe será afetada, mesmo que deveria estar preocupada apenas com operações de livros.

```javascript
class LibraryManager
{
    constructor() {
        this.users = [];
        this.books = [];
    }

    addUser(user) {
        this.users.push(user);
    }

    removeUser(user) {
        this.users = this.users.filter(u => u.id !== user.id);
    }

    addBook(book) {
        this.books.push(book);
    }

    removeBook(book) {
        this.books = this.books.filter(b => b.id !== book.id);
    }
}
```

### Cenário Refatorado - Adotando o SRP

Para aderir ao SRP, a classe `LibraryManager` é refatorada em duas classes separadas: `UserManager` e `BookManager`. Cada classe é responsável por lidar com operações de usuários e operações de livros, respectivamente. Essa separação de preocupações garante que cada classe tenha uma única responsabilidade e apenas um motivo para mudar.

```javascript
class UserManager
{
    constructor() {
        this.users = [];
    }

    addUser(user) {
        this.users.push(user);
    }

    removeUser(user) {
        this.users = this.users.filter(u => u.id !== user.id);
    }
}

class BookManager
{
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    removeBook(book) {
        this.books = this.books.filter(b => b.id !== book.id);
    }
}
```

Neste design refatorado, a classe `LibraryManager` é refatorada em duas classes separadas: `UserManager` e `BookManager`. Cada classe é responsável por lidar com operações de usuários e operações de livros, respectivamente. Esse design adere ao Princípio da Responsabilidade Única (SRP) ao garantir que cada classe tenha uma única responsabilidade e apenas um motivo para mudar.

---

# Exercício

No diretório `SRP`, você encontrará a classe `EmployeeManager`, que é responsável por lidar tanto com operações de funcionários quanto com operações de departamentos. Sua tarefa é refatorar a classe `EmployeeManager` em duas classes separadas: `EmployeeManager` e `DepartmentManager`. Cada classe deve ser responsável por lidar com operações de funcionários e operações de departamentos, respectivamente. 

Este exercício ajudará você a praticar a aplicação do Princípio da Responsabilidade Única (SRP) para melhorar a manutenibilidade e flexibilidade do sistema.

## Tarefa

Fazer com que os testes em `./__tests__` passem.

```bash
npm test
```