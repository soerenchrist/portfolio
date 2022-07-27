---
layout: ../../layouts/project.astro
title: Pixelizer
client: Self
publishDate: 2021-12-21 00:00:00
dark: true
img: /projects/pixelizer.png
description: |
  I built a desktop application to generate pixelated images for CNC machines
tags:
  - dotnet
  - desktop
  - C#
---

I built a custom CNC machine at home. This application takes any image and converts it to a pixelated version, based on some parameters like height, width, pixel size...
These generated images can be exported as image or as GCODE that can be used to plot them on a CNC machine. 

Some of the technologies I used:
- Dotnet 6
- [AvaloniaUI](https://avaloniaui.net/)
- [ReactiveUI](https://www.reactiveui.net/)

The code is open source on [Github](https://github.com/soerenchrist/pixelizer).