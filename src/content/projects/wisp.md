---
title: "Wisp"
description: "A lightweight CLI tool and editor plugin for managing Godot (private) addons via git."
tags: ["Tool", "CLI", "Go"]
githubUrl: "https://github.com/Alikznollet/godot-wisp"
priority: 1
---

## The Submodule Problem

Almost everyone in game development *dreads* dealing with git submodules. They are clunky, easy to break, and usually overkill when all you want to do is pull in a private plugin or a simple addon.

## Frictionless Addons

**Wisp** fixes this by staying true to how Godot handles addons naturally. Because addons are committed directly to your project's version control, Wisp's only job is to check for updates and pull them down when needed.

It's completely *friction-free* for teams. If you use Wisp to manager your addons, your peers don't even need to install the tool. They just pull the latest commits from git like normal.
