---
title: "Custom Voxel Renderer"
description: "A high-performance C++ voxel engine utilizing sparse octrees and compute shaders for real-time lighting."
tags: ["C++", "OpenGL", "Graphics"]
pubDate: 2024-01-10
---

## Technical Overview

This project explores the efficiency of Sparse Voxel Octrees (SVO) for rendering massive environments with minimal memory footprint. 

### Key Features

- **Real-time Path Tracing**: Experimental support for path-traced global illumination within the voxel grid.
- **Compute Shader Optimization**: Offloading heavy tree traversal logic to the GPU using OpenGL compute shaders.
- **Dynamic Level of Detail**: Automatic resolution adjustment based on viewer distance.

![Voxel Example](../../assets/astro.svg)
*Example of voxel rendering (placeholder asset)*
