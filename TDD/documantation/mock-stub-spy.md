# Test-Driven Development (TDD): Padrões Mock, Stub e Spy

## Introdução

O **Test-Driven Development (TDD)** é uma abordagem que enfatiza a criação de testes antes da implementação do código de produção. Além disso, o TDD se beneficia de padrões específicos para criar testes mais eficazes e legíveis. Neste README, exploraremos três desses padrões: **Mock, Stub e Spy**.

## 1. Mock

O padrão **Mock** é usado para simular o comportamento de um objeto real em um ambiente controlado. Isso é útil quando queremos testar um componente que depende de outro componente, mas queremos isolar o teste para garantir que ele seja confiável e previsível.

- Definição de Mock: Um **Mock** é um objeto simulado que imita o comportamento de um objeto real em um ambiente controlado.
- Uso: O **Mock** é usado para isolar o teste de um componente que depende de outro componente.
- Exemplo: Suponha que queremos testar um serviço que depende de uma conexão de banco de dados. Em vez de usar um banco de dados real, podemos criar um **Mock** que simula o comportamento do banco de dados, permitindo que o teste seja executado em um ambiente controlado.

```javascript
// Exemplo de Mock
const databaseMock = {
  query: jest.fn(() => [{ id: 1, name: 'John Doe' }]),
};

describe('UserService', () => {
  it('should return user data', () => {
    // Arrange
    const userService = new UserService(databaseMock);
    const userId = 1;
    const expected = { id: 1, name: 'John Doe' };
    
    // Act
    const result = userService.getUser(userId);
    
    // Assert
    expect(result).toEqual(expected);
  });
});
```

## 2. Stub

O padrão **Stub** é usado para substituir um componente real por um comportamento simulado. Isso é útil quando queremos controlar a saída de um componente para garantir que o teste seja confiável e previsível.

- Definição de Stub: Um **Stub** é um objeto simulado que substitui o comportamento de um objeto real por um comportamento simulado.
- Uso: O **Stub** é usado para controlar a saída de um componente para garantir que o teste seja confiável e previsível.
- Exemplo: Suponha que queremos testar um serviço que depende de um serviço de e-mail. Em vez de usar um serviço de e-mail real, podemos criar um **Stub** que simula o comportamento do serviço de e-mail, permitindo que o teste seja executado em um ambiente controlado.

```javascript
// Exemplo de Stub
const emailServiceStub = {
  send: jest.fn(() => true),
};

describe('NotificationService', () => {
  it('should send notification email', () => {
    // Arrange
    const notificationService = new NotificationService(emailServiceStub);
    const userId = 1;
    const message = 'Hello, John Doe!';
    
    // Act
    const result = notificationService.sendNotification(userId, message);
    
    // Assert
    expect(result).toBe(true);
  });
});
```

## 3. Spy

O padrão **Spy** é usado para monitorar o comportamento de um componente durante a execução do teste. Isso é útil quando queremos verificar se um componente foi chamado com os argumentos corretos e quantas vezes foi chamado.

- Definição de Spy: Um **Spy** é um objeto simulado que monitora o comportamento de um objeto real durante a execução do teste.
- Uso: O **Spy** é usado para verificar se um componente foi chamado com os argumentos corretos e quantas vezes foi chamado.
- Exemplo: Suponha que queremos testar um serviço que depende de um serviço de log. Podemos criar um **Spy** para monitorar se o serviço de log foi chamado com os argumentos corretos e quantas vezes foi chamado.

```javascript
// Exemplo de Spy
const logServiceSpy = {
  log: jest.fn(),
};

describe('UserService', () => {
  it('should log user activity', () => {
    // Arrange
    const userService = new UserService(logServiceSpy);
    const userId = 1;
    const activity = 'User logged in';
    
    // Act
    userService.logActivity(userId, activity);
    
    // Assert
    expect(logServiceSpy.log).toHaveBeenCalledWith(userId, activity);
    expect(logServiceSpy.log).toHaveBeenCalledTimes(1);
  });
});
```

## Conclusão

Os padrões **Mock, Stub e Spy** são ferramentas poderosas para criar testes mais eficazes e legíveis. Ao usar esses padrões, podemos isolar o teste de componentes dependentes, controlar a saída de componentes e monitorar o comportamento de componentes durante a execução do teste. Isso nos permite criar testes mais confiáveis e previsíveis, garantindo a qualidade do nosso código.

> Lembre-se de que o TDD e os padrões **Mock, Stub e Spy** são ferramentas poderosas para garantir a qualidade do seu código. Ao seguir esses padrões, você cria testes mais legíveis, mantíveis e confiáveis. 🚀
