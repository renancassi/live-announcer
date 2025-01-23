# Projeto
O Live Announcer é um BOT gratuito e opensource que promete avisar no discord, sempre que lives iniciarem.

## Tecnologias
- Javascript
- Node.js

## Configurando o projeto
Instale as dependências:
```bash
npm install
```

Crie um arquivo .json com a seguinte estrutura:
```JSON
{
    "TOKEN":"SeuToken",
    "ClientId":"SeuClientId",
    "GuildId": "IdDoSeuServidor"
}
```

## Rodando o projeto
Alguns scripts foram definidos no package.json, use conforme sua necessidade:

Deploy dos comandos (Global)
```bash
npm run deployGlobal
```

Deploy dos comandos (Servidor/Guild)
```bash
npm run deployGuild
```

Remover os comandos (Global)
```bash
npm run deleteGlobal
```

Remover os comandos (Servidor/Guild)
```bash
npm run deleteGuild
```

Iniciar o bot
```bash
npm run bot
```

## Roadmap
Tenho alguns objetivos para esse projeto, apesar de não os ter planejados muito bem.

- Conexão com Banco de Dados
- Configuração Persistente de Streamers
- Configuração Persistente de Canais e Roles
- Conexão com API das 3 principais plataformas de livestreaming (Twitch, Youtube e Facebook)

## Funcionalidades
Funcionalidades que já existem

- Announce: Anúncio manual de início de live

> [Documentação](https://jevrton.gitbook.io/live-announcer)

## FAQ
#### O projeto é gratuito
Sim, o projeto é, até o momento, gratuito e de código aberto.

#### Estou com problemas, como posso solicitar ajuda?
Você pode solicitar ajuda tanto pela aba "Issues" dentro do github ou na aba "Ajuda" do discord
