# DIP - Principio da Inversão de Dependência
[![en](https://img.shields.io/badge/lang-en-red.svg)](./README.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](./README.pt-br.md)

O Princípio da Inversão de Dependência (DIP) é um dos cinco princípios SOLID da programação orientada a objetos. Ele afirma que módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações. Além disso, abstrações não devem depender de detalhes. Detalhes devem depender de abstrações.

## Estudo de Caso do Princípio da Inversão de Dependência (DIP): Implementando o Princípio da Inversão de Dependência (DIP) em um Sistema de Gerenciamento de Usuários

### Contexto

O Princípio da Inversão de Dependência (DIP) é um dos princípios SOLID de design orientado a objetos, que afirma duas coisas essenciais:

1. Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações.
2. Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações.

Este princípio incentiva o desacoplamento do seu código ao inverter a direção das dependências. Na prática, isso muitas vezes significa usar dependências de interface ou classe abstrata em vez de dependências de classe concreta.

### Cenário: Gerenciamento de Perfil de Usuário

Imagine um sistema para gerenciar perfis de usuários em uma aplicação. O sistema permite a recuperação de informações do usuário de um banco de dados e a capacidade de notificar usuários via email. Inicialmente, o sistema integra diretamente a lógica de alto nível (gerenciamento de perfil do usuário) com implementações de baixo nível (acesso ao banco de dados e envio de email), violando o DIP.

### Cenário Inicial - Violando o DIP

```javascript
// UserRepository.ts
class UserRepository {
    getUser(id: string): string {
        // Directly access the database to get user info
        return `User info for ID: ${id}`;
    }
}

// EmailService.ts
class EmailService {
    sendEmail(userEmail: string, message: string): void {
        // Directly send an email
        console.log(`Sending email to ${userEmail}: ${message}`);
    }
}

// UserProfileManager.ts
class UserProfileManager {
    private userRepository = new UserRepository();
    private emailService = new EmailService();

    getUserProfile(id: string): string {
        return this.userRepository.getUser(id);
    }

    notifyUser(id: string): void {
        const userEmail = this.getUserProfile(id); // Simplification for example
        this.emailService.sendEmail(userEmail, "Your profile has been updated.");
    }
}
```

Neste design inicial, `UserProfileManager` depende diretamente de `UserRepository` e `EmailService`, violando o DIP. Este design torna difícil alterar as implementações do banco de dados ou serviço de email sem modificar o `UserProfileManager`.

### Cenário Refatorado - Adotando o DIP

Para aderir ao Princípio da Inversão de Dependência (DIP), podemos inverter as dependências introduzindo abstrações e usando injeção de dependência para fornecer as implementações concretas.

1. Definir abstrações para os módulos de baixo nível (UserRepository e EmailService).
2. Modificando UserProfileManager para depender dessas abstrações em vez de implementações concretas.
3. Injetando as implementações concretas em UserProfileManager de um nível superior (por exemplo, durante a instanciação).

Passo 1: Definir Abstrações


```javascript
// IUserRepository.ts
interface IUserRepository {
    getUser(id: string): string;
}

// IEmailService.ts
interface IEmailService {
    sendEmail(userEmail: string, message: string): void;
}
```

Passo 2: Implementar Abstrações

```javascript
// UserRepository.ts
class UserRepository implements IUserRepository {
    getUser(id: string): string {
        return `User info for ID: ${id}`;
    }
}

// EmailService.ts
class EmailService implements IEmailService {
    sendEmail(userEmail: string, message: string): void {
        console.log(`Sending email to ${userEmail}: ${message}`);
    }
}
```

Passo 3: Modificar Módulo de Alto Nível

```javascript
// UserProfileManager.ts
class UserProfileManager {
    private userRepository: IUserRepository;
    private emailService: IEmailService;

    constructor(userRepository: IUserRepository, emailService: IEmailService) {
        this.userRepository = userRepository;
        this.emailService = emailService;
    }

    getUserProfile(id: string): string {
        return this.userRepository.getUser(id);
    }

    notifyUser(id: string): void {
        const userEmail = this.getUserProfile(id); // Simplification for example
        this.emailService.sendEmail(userEmail, "Your profile has been updated.");
    }
}
```

Injeção de Dependência

```javascript
const userProfileManager = new UserProfileManager(new UserRepository(), new EmailService());
```

### Conclusão

Ao adotar o Princípio da Inversão de Dependência (DIP), o `UserProfileManager` agora depende de abstrações (IUserRepository e IEmailService) em vez de implementações concretas. Isso permite que o `UserProfileManager` seja desacoplado das implementações concretas, facilitando a substituição de implementações concretas sem modificar o `UserProfileManager`. Além disso, a injeção de dependência permite que as implementações concretas sejam fornecidas de um nível superior, tornando o `UserProfileManager` mais flexível e extensível.

---

# Exercício: Refatorando um Sistema de Processamento de Pagamentos com DIP

## Contexto

Você tem a tarefa de refatorar um sistema de processamento de pagamentos que atualmente viola o Princípio da Inversão de Dependência (DIP). O sistema está fortemente acoplado a um gateway de pagamento específico para processar pagamentos, tornando difícil introduzir métodos de pagamento adicionais ou trocar provedores de serviços de pagamento sem mudanças significativas no sistema.

## Implementação Inicial

A implementação inicial integra diretamente com um StripePaymentService concreto, que faz requisições HTTP para a API da Stripe para processar pagamentos.

### Tarefa
Sua tarefa é refatorar este sistema de processamento de pagamentos para aderir ao Princípio da Inversão de Dependência. Isso envolve criar uma abstração para o serviço de pagamento e modificar o `PaymentProcessor` para depender dessa abstração em vez de uma implementação concreta. O sistema deve ser capaz de suportar diferentes serviços de pagamento (por exemplo, Stripe, PayPal) sem mudar a classe `PaymentProcessor`.

### Requisitos para a Solução
- Refatore o sistema seguindo o DIP para passar no teste.
- Garanta que a adição de um novo serviço de pagamento não exija mudanças no `PaymentProcessor`.
- Demonstre a flexibilidade do sistema escrevendo testes adicionais para um novo serviço de pagamento.

Este exercício desafia você a aplicar o Princípio da Inversão de Dependência para tornar o sistema de processamento de pagamentos mais flexível e manutenível, facilitando assim testes mais fáceis e extensão com novos métodos de pagamento.
