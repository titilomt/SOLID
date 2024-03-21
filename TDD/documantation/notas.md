# Anti-patterns/Code Smells
1. Especulação Generalizada (General Speculation) - Especular sobre o futuro, tentar prever o que pode acontecer.
2. God Class - Classe que faz muitas coisas 
3. Divergent Change - Se você precisa de mexer em um componente por mais de um motivo, isso é um anti padrão
4. Blank Lines - Code Smells (Mantem um padrão de código - melhora a legibilidade)
5. Improper Instantiation  (Instanciação Incorreta) é um termo utilizado principalmente em programação e desenvolvimento de software para descrever uma situação onde objetos de uma classe são criados de maneira inadequada ou ineficiente.
6. High Coupling - Alto acoplamento causa possiveis problemas de uma classe afetar outras como efeito domino
7. Test code in Production - Código de teste em produção (Código de teste que acaba indo para produção)
8. Duplicate Code - Quando você mexe em um lugar e precisa de modificar a mesma coisa em outros
9. Shootgun Surgery - Quando a alteração em um método e acaba afetando outros métodos
10. Long Parameter List - Muitos parametros em um método
11. Bad Naming - Nomes ruins de variáveis, métodos, classes
12. Overengineering - Não fazer mais do que o necessário

---

# Design Patterns/Principles/Conventions
1. YAGNI - Você não vai precisar disso.
2. Single Responsibility Principle (SRP) Resolve 2 e 3 - Uma classe deve ter um, e somente um, motivo para mudar
3. Arrange, Act, Assert (AAA) - Convenção para melhorar legibilidade e entendimento do que está sendo testado
4. Repository Pattern - Abstração da camada de dados/infraestrutura, para que o caso de uso não saiba de onde vem os dados
5. Dependency injection (DI) - Injeção de dependência, para que o caso de uso não saiba de onde vem os dados
6. Liskov Substitution (Após explicar sobre abstrações) - Se um objeto é uma instancia de uma classe, então ele também é uma instancia de uma subclasse
7. Dependency Inversion (DIP, após explicar diagramas - Desacoplar o repositório do caso de uso)
8. Test Doubles (Mock, Stub, Spy) - Simular comportamentos de objetos reais
  1. Mock - Simula comportamento de um objeto real com foco no Input
  2. Stub - Simula comportamento de um objeto real com foco no Output
  3. Spy - Simula comportamento de um objeto real com foco no Input e Output (Monitora o comportamento do método)
9. Small Commits (Boa prática, ajuda a não fazer mais de uma coisa de uma vez e mantem um padrão legivel do que foi feito, evita subir bugs de features não implementadas)
10. SUT - System Under Test uma convenção para melhorar legibilidade e entendimento do que está sendo testado
11. Strategy pattern (Podemos compor um gateway de diversas maneiras, tudo isso é possível sem afetar o caso de uso. ex: Banco de dados + Cache Redis)
12. Factory - Criar instancias de objetos complexos
13. Clean Code - Boas práticas de código limpo resolve 10, 11

---

### Mockdate

```javascript
import { set, reset } from 'mockdate'

beforeAll(() => {
  set(new Date())
})

afterAll(() => {
  reset()
})
```