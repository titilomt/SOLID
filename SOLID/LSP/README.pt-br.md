# LSP - Principio da Substituição de Liskov
[![en](https://img.shields.io/badge/lang-en-red.svg)](./README.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](./README.pt-br.md)

O Princípio da Substituição de Liskov (LSP) é um dos cinco princípios SOLID da programação orientada a objetos. Ele afirma que objetos de uma superclasse devem ser substituíveis por objetos de uma subclasse sem afetar a correção do programa. Em outras palavras, uma subclasse deve ser capaz de substituir sua superclasse sem alterar o comportamento do programa.

## Estudo de Caso do Princípio da Substituição de Liskov (LSP): Sistema de Gerenciamento de Arquivos
Imagine um sistema de gerenciamento de arquivos onde você tem uma classe base `FileProcessor` que lida com a leitura de arquivos. Você decide estender essa funcionalidade para suportar não apenas arquivos locais, mas também arquivos remotos, como aqueles acessados via HTTP.

## Cenário Inicial - Violando o LSP
No design inicial, a classe `FileProcessor` tem um método `readFile` que lê um arquivo do sistema de arquivos local. Para suportar arquivos remotos, você cria uma subclasse `RemoteFileProcessor` que sobrescreve o método `readFile` para ler arquivos de um servidor remoto. No entanto, a classe `RemoteFileProcessor` viola o Princípio da Substituição de Liskov (LSP) porque altera o comportamento do método `readFile`, o que não é esperado ao substituir a superclasse `FileProcessor`.

```javascript
class FileProcessor {
    readFile(path: string): string {
        return "Local File Content";
    }
}

class RemoteFileProcessor extends FileProcessor {
    readFile(url: string): string {
        throw new Error("This method doesnt support read remote URL.");
    }
}
```

`RemoteFileProcessor` tenta estender `FileProcessor` para suportar arquivos remotos. No entanto, ele altera o comportamento esperado do método `readFile`, introduzindo uma restrição (não suporta leitura de URLs remotos) que não existia na classe base. Isso viola o LSP, pois agora o uso de `FileProcessor` e `RemoteFileProcessor` não é intercambiável sem alterar o comportamento esperado do programa.

## Cenário Refatorado - Adotando o LSP

Para aderir ao Princípio da Substituição de Liskov (LSP), você pode refatorar o design para usar composição em vez de herança. Em vez de criar uma subclasse `RemoteFileProcessor`, você pode criar uma classe `RemoteFileReader` que lida com a leitura de arquivos de URLs remotos. Este design adere ao LSP, garantindo que o comportamento da classe `FileProcessor` não seja alterado ao usar a classe `RemoteFileReader`.

```javascript
interface IFileProcessor {
    readFile(source: string): string;
}

class LocalFileProcessor implements IFileProcessor {
    readFile(path: string): string {
        return "Local File Content";
    }
}

class RemoteFileProcessor implements IFileProcessor {
    readFile(url: string): string {
        return "Remote File Content";
    }
}
```

Nesta refatoração:

- Definimos uma interface `IFileProcessor` com o método `readFile`.
- `LocalFileProcessor` e `RemoteFileProcessor` implementam `IFileProcessor`, lidando com seu próprio tipo de fonte de arquivo, mas ambos aderem ao contrato definido pela interface.
- Ambas as classes agora são substituíveis uma pela outra sem alterar o comportamento esperado, de acordo com o LSP.

---

## Exercício: Refatorando um Sistema de Gerenciamento de Formas Geométricas

### Contexto

Você está trabalhando em um sistema de renderização gráfica que suporta diferentes tipos de formas. Atualmente, o sistema possui uma classe base Shape com subclasses `Circle` e `Square`. O sistema foi estendido para suportar a renderização de texto introduzindo uma nova classe `Text`. No entanto, a introdução da classe `Text` quebra a substituibilidade, já que `Text` não se encaixa perfeitamente no modelo Shape, violando o Princípio da Substituição de Liskov (LSP).

### Tarefa

Sua tarefa é refatorar o sistema de renderização para aderir ao LSP, garantindo que todas as classes possam ser tratadas uniformemente na renderização. Você também precisará ajustar ou adicionar testes unitários, que atualmente estão falhando devido à violação do LSP.

### Requisitos do Exercício

Refatorar o Sistema de Renderização: Modifique as classes e/ou introduza novas abstrações para garantir que `Circle`, `Square` e `Text` possam ser tratados uniformemente. Todos devem aderir a uma interface comum que permita a renderização sem quebrar o LSP.

`Corrija os Testes Unitários`: Ajuste ou adicione testes unitários para garantir que a renderização de `Circle`, `Square` e `Text` funcione corretamente e que a substituição de objetos não quebre o comportamento esperado.