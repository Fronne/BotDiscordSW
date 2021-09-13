## BotDiscordSW

## Déploiement via docker =>

## Téléchargement de l'image de base
```sudo docker pull node:16-bullseye-slim```

## Tag de l'image personnalisée
```sudo docker build -t botdiscordws:1 .```

## Déploiement via `Docker run`
```sudo docker run -e NPM_CONFIG_LOGLEVEL=info -it --rm --name botdiscordws botdiscordws:1```
