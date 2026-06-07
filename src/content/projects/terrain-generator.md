---
title: "Procedural Terrain Generator"
description: "An Astro-based web tool for generating and exporting heightmaps using Simplex noise."
tags: ["Astro", "TypeScript", "Algorithms"]
pubDate: 2024-02-15
---

## Generation Algorithms

Utilizing layered Simplex noise and erosion simulation to create realistic terrain heightmaps directly in the browser.

### Workflow

1. Configure noise parameters (frequency, lacunarity, persistence).
2. Preview 3D terrain using Three.js.
3. Export as 16-bit PNG heightmaps for use in game engines.
