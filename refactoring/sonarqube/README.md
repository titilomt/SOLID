# Tutorial de Instalação e Execução Local do SonarQube

Este README fornece um guia passo a passo para instalar e executar localmente o SonarQube, uma plataforma de inspeção contínua de qualidade de código que permite realizar análises automáticas para identificar bugs, vulnerabilidades e "code smells" em seu código.

## Requisitos

- [Docker](https://www.docker.com/products/docker-desktop)

## Instalação

```bash
$ docker run -d --name sonarqube -e SONAR_ES_BOOTSTRAP_CHECKS_DISABLE=true -p 9000:9000 sonarqube:latest
```

## Acesso

- Acesse o SonarQube em [http://localhost:9000](http://localhost:9000)
- Faça login com as credenciais padrão:
  - **Usuário:** admin
  - **Senha:** admin

## Analisando um Projeto

Agora que está logado no SonarQube, você pode criar um novo projeto e analisar o código-fonte. Para isso, siga os passos abaixo:

1. Clique em "Create new project" e preencha as informações do seu projeto.
2. Dê ao seu projeto um `Project key` e um `Display name` e selecione `Set up`.
3. Em Fornecer um token, selecione Gerar um token. Dê um nome ao seu token, selecione Gerar e clique em Continuar.
4. Selecione o idioma principal do seu projeto em Executar análise no seu projeto e siga as instruções para analisar seu projeto. Aqui você baixará e executará um scanner em seu código (se estiver usando Maven ou Gradle, o scanner será baixado automaticamente).

Após obter sucesso, você verá seu projeto listado na página inicial do SonarQube. Clique no nome do projeto para ver os resultados da análise.