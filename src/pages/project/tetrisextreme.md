---
layout: ../../layouts/project.astro
title: TetrisExtreme
client: Self
publishDate: 2022-11-25 00:00:00
dark: true
img: /projects/tetrisextreme.png
description: |
  I built a multiplayer tetris game to player online 
tags:
  - C#
  - Dotnet
  - ASP.NET Core
  - SignalR
---

TetrisExtreme is an implementation of Tetris, that you can play either in single player mode, or online over the network with your friends. When you clear some lines, they will be automatically send to one of your opponents, to make his game even harder.
The backend is implemented using an ASP.NET Core WebAPI and a SignalR hub for live and multidirectional communication. The desktop application is developed using Avalonia and ReactiveUI.

The code is open source on [Github](https://github.com/soerenchrist/TetrisExtreme).

Some of the technologies I used:
- C#
- ASP.NET Core
- SignalR
- Avalonia UI
- ReactiveUI