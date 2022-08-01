---
layout: ../../layouts/project.astro
title: GeoHero
client: Self
publishDate: 2022-04-19 00:00:00
dark: false
img: /projects/geohero.png
description: |
  I built a collection of geography based games
tags:
  - typescript
  - aws
  - web
---

GeoHero is a geography based quiz. Try to guess the searched countries as fast as possible. Start by guessing any country. The game will present you your guess on a map. Depending on how far your guess is away, the color of the country will be more red or green. If configured you will get more information like distance or direction of the searched country, which will make it a bit easier.

The game supports challenging friends. It will generate a random series of countries, which will stay the same for your friends. Authentication is not required.

The app is publicly available at [geohero.soerenchrist.de](https://geohero.soerenchrist.de). 

Also the code is open source on [Github](https://github.com/soerenchrist/geohero).

Some of the technologies I used:
- [NextJS](https://nextjs.org)
- [tRPC](https://trpc.io)
- [Tailwind](https://tailwindcss.com)
- [Leaflet](https://leafletjs.com)
- AWS S3
- DynamoDB