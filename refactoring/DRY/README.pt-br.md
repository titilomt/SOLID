# DRY (Don't Repeat Yourself)
[![en](https://img.shields.io/badge/lang-en-red.svg)](./README.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](./README.pt-br.md)

## Descrição Detalhada

O princípio DRY é um conceito fundamental no desenvolvimento de software que enfatiza a importância de evitar código redundante. A sigla DRY vem do inglês "Don't Repeat Yourself" (Não se Repita) e visa reduzir a repetição de padrões de software, substituindo-os por abstrações ou usando normalização de dados para evitar redundâncias. O princípio é baseado na crença de que a duplicação pode levar a mais bugs, maiores custos de manutenção e uma base de código complicada, tornando-a mais difícil de gerenciar e entender.

Aderir ao princípio DRY ajuda a garantir que cada peça de conhecimento ou lógica na base de código tenha uma representação única e inequívoca. Isso não apenas melhora a legibilidade e a manutenibilidade do código, mas também facilita a escalabilidade e a eficiência em projetos de software.

## Estudo de Caso: Sistema de Autenticação de Usuários

Considere uma aplicação web com múltiplos componentes que requerem autenticação de usuário. Inicialmente, a lógica de autenticação (verificação de nomes de usuário e senhas contra um banco de dados) é duplicada em vários lugares: quando os usuários fazem login, quando se cadastram e quando atualizam as configurações de suas contas.

## Problema

A lógica de autenticação repetida não apenas infla a base de código, mas também introduz potenciais inconsistências. Se o método de autenticação precisar ser atualizado (por exemplo, para incluir hashing de senhas), cada instância da lógica deve ser encontrada e atualizada individualmente. Isso é propenso a erros e pode levar a vulnerabilidades de segurança se alguma instância for negligenciada.

## Solução

A solução envolve abstrair a lógica de autenticação em uma única função ou classe reutilizável. Essa lógica centralizada pode então ser chamada sempre que a autenticação for necessária, garantindo consistência e reduzindo o risco de erros.

- Antes do Refatoramento:

```javascript
// Login
function login(username, password) {
    // Lógica de autenticação
}

// Cadastro
function signUp(username, password) {
    // Lógica de autenticação duplicada
}

// Atualizar conta
function updateAccount(username, password) {
    // Lógica de autenticação duplicada
}
```

- Depois do Refatoramento:

```javascript
// Lógica de autenticação centralizada
function authenticateUser(username, password) {
    // Lógica de autenticação
}

// Funções atualizadas chamam a lógica centralizada
function login(username, password) {
    authenticateUser(username, password);
}

function signUp(username, password) {
    authenticateUser(username, password);
}

function updateAccount(username, password) {
    authenticateUser(username, password);
}
```

Ao refatorar o código para aderir ao princípio DRY, a lógica de autenticação é centralizada, tornando-a mais fácil de manter e atualizar. Isso não apenas reduz o risco de inconsistências, mas também melhora a qualidade geral e a manutenibilidade da base de código.

## Questão de Exercício: Refatore o Sistema de Inventário

> Todos os trechos de código estão dentro da pasta `src`.

Você recebeu um sistema de gerenciamento de inventário para uma livraria que atualmente tem a seguinte estrutura de código:

```javascript
// Adiciona um novo livro
function addBook(title, author, ISBN) {
    // Verifica se o livro já existe
    // Adiciona o livro ao banco de dados
}

// Atualiza a quantidade de livros
function updateBookQuantity(ISBN, quantity) {
    // Verifica se o livro existe
    // Atualiza a quantidade no banco de dados
}

// Deleta um livro
function deleteBook(ISBN) {
    // Verifica se o livro existe
    // Deleta o livro do banco de dados
}
```

Cada função começa verificando se o livro existe no banco de dados, uma lógica que é repetida em todas as três funções.

### Tarefa

Refatore o código para aderir ao princípio DRY, removendo a redundância. Crie uma única função para verificar se um livro existe e use esta função dentro de `addBook`, `updateBookQuantity` e `deleteBook`.
