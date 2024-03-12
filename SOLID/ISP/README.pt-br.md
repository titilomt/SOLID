# ISP - Princípio da Segregação de Interface
[![en](https://img.shields.io/badge/lang-en-red.svg)](./README.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](./README.pt-br.md)

O Princípio da Segregação de Interface (ISP) é um dos cinco princípios SOLID da programação orientada a objetos. Ele afirma que um cliente não deve ser forçado a depender de métodos que não utiliza. Em outras palavras, uma classe não deve ser forçada a implementar interfaces que não precisa.

## Estudo de Caso do Princípio da Segregação de Interface (ISP): Sistema de Gerenciamento de Pedidos

Imagine um sistema de gerenciamento de pedidos onde diferentes tipos de pedidos precisam ser processados: pedidos online, pedidos por telefone e pedidos por email. Originalmente, o sistema usava uma única interface OrderProcessor com métodos para processar cada tipo de pedido. Isso forçava as classes a implementar todos os métodos da interface, mesmo que não fossem relevantes para o tipo específico de solicitação que a classe se destinava a processar.

### Cenário Inicial - Violando o ISP

Neste exemplo, `OnlineOrderProcessor` é forçado a implementar `processPhoneOrder` e `processEmailOrder`, mesmo que deva processar apenas pedidos online. Isso claramente viola o ISP, pois `OnlineOrderProcessor` é forçado a depender de interfaces que não utiliza.

```javascript
interface OrderProcessor {
    processOnlineOrder(orderId: string): void;
    processPhoneOrder(orderId: string): void;
    processEmailOrder(orderId: string): void;
}

class OnlineOrderProcessor implements OrderProcessor {
    processOnlineOrder(orderId: string) {
        console.log(`Process online order: ${orderId}`);
    }

    processPhoneOrder(orderId: string) {
        throw new Error("Not supported");
    }

    processEmailOrder(orderId: string) {
        throw new Error("Not supported");
    }
}
```

### Cenário Refatorado - Adotando o ISP

Para aderir ao ISP, podemos dividir OrderProcessor em várias interfaces menores, cada uma focada em um tipo específico de processamento de pedido.

```javascript
interface OnlineOrderProcessor {
    processOnlineOrder(orderId: string): void;
}

interface PhoneOrderProcessor {
    processPhoneOrder(orderId: string): void;
}

interface EmailOrderProcessor {
    processEmailOrder(orderId: string): void;
}

class OnlineOrder implements OnlineOrderProcessor {
    processOnlineOrder(orderId: string) {
        console.log(`Process online order: ${orderId}`);
    }
}

class PhoneOrder implements PhoneOrderProcessor {
    processPhoneOrder(orderId: string) {
        console.log(`Process phone order: ${orderId}`);
    }
}

class EmailOrder implements EmailOrderProcessor {
    processEmailOrder(orderId: string) {
        console.log(`Process email order: ${orderId}`);
    }
}
```

Vantagens da Refatoração

- Especialização: Cada classe agora se especializa no processamento de um tipo específico de pedido, seguindo o ISP.
- Flexibilidade e Manutenibilidade: Fica mais fácil adicionar novos tipos de processadores de pedidos no futuro sem afetar os existentes.
- Evitar Implementações Inúteis: As classes não precisam mais implementar métodos desnecessários, tornando o código mais limpo e compreensível.

---

# Exercício: Refatorando o Sistema de Notificação para Adotar o ISP

## Contexto

Você está trabalhando em um sistema de notificação que atualmente possui uma única interface INotification para enviar diferentes tipos de notificações: por email, SMS e notificações push. Cada tipo de notificação requer diferentes parâmetros, e, portanto, nem todos os métodos da interface são relevantes para cada implementação concreta. Isso está causando confusão e ineficiências no código.

## Tarefa

Seu desafio é refatorar o sistema aplicando o Princípio da Segregação de Interface (ISP), garantindo que classes de notificação específicas implementem apenas os métodos relevantes para elas.
