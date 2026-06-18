# Implementation Plan: Arte Oficial Idle do SGT Antonio Rafael

**Branch**: `003-antonio-rafael-art` | **Date**: 2026-06-18 | **Spec**: [spec.md](file:///d:/Projetos/Unfallen/specs/003-antonio-rafael-art/spec.md)
**Input**: primeira criacao oficial dos assets visuais do protagonista SGT Antonio Rafael.

## Summary

Esta feature cria a primeira rodada oficial valida de assets visuais idle do protagonista SGT Antonio Rafael para avaliacao humana futura no Godot 4. O escopo e exclusivamente artistico: gerar oito sprites individuais `128x128`, um preview/contact sheet e documentacao de origem, sem importar no Godot e sem alterar cenas ou scripts.

## Technical Context

**Language/Version**: N/A para gameplay; pos-processamento local via Python/Pillow  
**Primary Dependencies**: `image_gen` integrado ao Codex; Pillow local para PNG/alpha/resize  
**Storage**: arquivos PNG e Markdown no `res://`  
**Testing**: validacao visual e validacao tecnica de dimensoes/alpha/hash  
**Target Platform**: Godot 4 futuramente, sem importacao nesta etapa  
**Project Type**: arte 2D isometrica Pixel Art HD  
**Performance Goals**: N/A nesta etapa  
**Constraints**: celula final `128x128`, escala consistente, sem labels externos, sem cenas/scripts  
**Scale/Scope**: oito direcoes idle do protagonista

## Constitution Check

- [x] **Spec First, Implementacao Depois**: existe spec em `specs/003-antonio-rafael-art/spec.md`.
- [x] **Gate Humano Obrigatorio**: usuario solicitou explicitamente a primeira execucao oficial; resultado deve parar para aprovacao humana.
- [x] **Character First**: trabalho restrito ao protagonista Antonio Rafael.
- [x] **Pixel Art HD Consistente**: exportacao em PNG `128x128`, Pixel Art HD, preview para avaliacao.
- [x] **Identidade do Jogo e Direcao de Arte**: personagem humano, PMGO, sobrevivencia brasileira, sem gore/acao.

## Project Structure

```text
res://
├── assets/
│   └── characters/
│       └── antonio_rafael/
│           ├── references/
│           ├── source/
│           │   └── official_round_01/
│           ├── sprites/
│           │   └── idle/
│           └── exports/
└── docs/
    ├── art/
    │   ├── antonio-rafael.md
    │   └── asset-sources.md
    └── technical/
        └── character-pipeline.md
```

## Proposed Changes

- Gerar fontes visuais novas com `image_gen` usando as fotos reais em `references/`.
- Exportar oito PNGs individuais `128x128` em `sprites/idle/`.
- Gerar `antonio_rafael_idle_contact_sheet_preview.png` em `exports/`.
- Atualizar documentacao de personagem, origem e pipeline.
- Nao alterar cenas Godot.
- Nao alterar scripts.
- Nao criar walk cycle.
- Nao fazer commit ou push.

## Verification Plan

1. Confirmar existencia das quatro fotos reais no caminho obrigatorio.
2. Confirmar existencia dos oito PNGs individuais.
3. Confirmar dimensoes `128x128`, modo `RGBA`, cantos transparentes e escala consistente.
4. Confirmar que nao ha labels externos proibidos nos sprites individuais.
5. Confirmar diferenca visual e hashes distintos entre direcoes criticas.
6. Apresentar preview para aprovacao humana.
