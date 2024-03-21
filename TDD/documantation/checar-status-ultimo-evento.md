# CheckLastEventStatus UseCase

Obter o status do último evento do grupo

> ## Dados
* Id do Grupo

> ## Fluxo Principal
1. Obter os dados do último evento do grupo (data de término e duração do mercado de notas de revisão)
2. Retornar o status "ativo" se o evento ainda estiver em andamento

> ## Fluxo Alternativo: Evento está no limite do encerramento
2. Retornar o status "ativo"

> ## Fluxo Alternativo: Evento já encerrado, mas ainda dentro do limite de revisão
2. Retornar o status "em revisão"

> ## Fluxo Alternativo: Evento já encerrado e fora do limite de revisão
2. Retornar o status "encerrado"

> ## Fluxo Alternativo: Grupo não tem Evento marcado
2. Retornar o status "encerrado"

## Todo

* [x] Criar testes unitários
* [x] Criar logica para o fluxo principal
* [x] Criar logica para os fluxos alternativos

---
