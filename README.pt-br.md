# Principios SOLID
[![en](https://img.shields.io/badge/lang-en-red.svg)](./README.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](./README.pt-br.md)

Este repositório é dedicado a demonstrar os princípios SOLID do design orientado a objetos por meio de exemplos práticos. Cada princípio é ilustrado com exemplos de código claros e concisos em Node.js, visando fornecer um entendimento direto de como esses princípios podem ser aplicados para melhorar o design de software, tornando-o mais manutenível, escalável e flexível.

## O que são Princípios SOLID?
SOLID representa cinco princípios de design destinados a tornar os designs de software mais compreensíveis, flexíveis e manuteníveis. O acrônimo SOLID significa:

- Princípio da Responsabilidade Única (SRP)
- Princípio Aberto/Fechado (OCP)
- Princípio da Substituição de Liskov (LSP)
- Princípio da Segregação de Interface (ISP)
- Princípio da Inversão de Dependência (DIP)

## Começando
Para explorar os exemplos, clone este repositório para sua máquina local e navegue até o diretório dedicado de cada princípio. Cada princípio é demonstrado usando Node.js, então certifique-se de ter o Node.js instalado em seu sistema.

```bash
git clone https://github.com/titilomt/SOLID.git
cd SOLID
```

## Pré-requisitos
Node.js (versão recomendada 18 ou superior)

## Instalação
Nenhuma instalação adicional é necessária. Cada exemplo pode ser executado diretamente usando o Node.js. Por exemplo, para executar um exemplo para o Princípio da Responsabilidade Única:

```bash
cd SRP
npm install
npm test
```

## Visão Geral dos Exemplos

- Princípio da Responsabilidade Única (SRP)
  - Localização: /SRP 
  - Demonstra como projetar classes que têm apenas um motivo para mudar, focando em uma única responsabilidade.
- Princípio Aberto/Fechado (OCP)
  - Localização: /OCP
  - Apresenta como entidades devem ser abertas para extensão, mas fechadas para modificação.
- Princípio da Substituição de Liskov (LSP)
  - Localização: /LSP
  - Ilustra a substituibilidade de objetos de uma superclasse com objetos de uma subclasse sem afetar a correção do programa.
- Princípio da Segregação de Interface (ISP)
  - Localização: /ISP
  - Demonstra como criar interfaces enxutas que não forçam as classes implementadoras a depender de métodos que não utilizam.
- Princípio da Inversão de Dependência (DIP)
  - Localização: /DIP
  - Explica como desacoplar módulos de alto nível de módulos de baixo nível, introduzindo abstrações que ambos podem depender.

---