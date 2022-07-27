---
layout: ../../layouts/project.astro
title: SkiAnalyze
client: Self
publishDate: 2021-08-01 00:00:00
img: /projects/skianalyze.png
description: |
  I built an application to analyze Garmin files of skiing days
tags:
  - dotnet
  - web
  - vue
  - osm
  - C#
---

SkiAnalyze is a web application that analyzes Garmins proprietary .FIT files from their watches to get insights of skiing day.
It display some simple stats like speed, heart rate and distance. To get more interesting information, I take piste and lift information from OpenStreetMaps and combine them with my tracks.
This leads to more or less interesting stats like:
- Which type of piste difficulty do you use most often?
- Which lift types do you prefer?
- Is your heart rate higher if you are going down more difficult pistes?

Furthermore I use the OSM data to display generic stats of skiing areas, like piste length, gondola length, piste difficulty distribution...

Some of the technologies I used:
- Dotnet 6
- ASP.NET Core WebAPI
- EntityFramework
- [OSMSharp](https://osmsharp.com)
- [Leaflet](https://leafletjs.com)
- [Garmin FIT Sdk](https://developer.garmin.com/fit/download/)
- [Vue 2](https://vuejs.org)

The code is open source on [Github](https://github.com/soerenchrist/skianalyze).