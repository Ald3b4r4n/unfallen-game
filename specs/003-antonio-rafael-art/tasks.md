# Tasks: Arte Oficial Idle do SGT Antonio Rafael

**Input**: Design documents from `/specs/003-antonio-rafael-art/`  
**Prerequisites**: spec.md, checklist aprovado, fotos reais em `res://assets/characters/antonio_rafael/references/`

---

## 1. Preparacao e referencias

- [x] T001 Confirmar checklist de requisitos em `res://specs/003-antonio-rafael-art/checklists/requirements.md`
  - **Completion Criteria**: checklist sem itens pendentes.

- [x] T002 Confirmar existencia das fotos reais em `res://assets/characters/antonio_rafael/references/`
  - **Completion Criteria**: `ref_1.jpg`, `ref_2.png`, `ref_3.png`, `ref_4.png` encontrados.

## 2. Geracao visual

- [x] T003 Gerar fontes visuais novas para as oito direcoes idle em `res://assets/characters/antonio_rafael/source/official_round_01/`
  - **Completion Criteria**: uma fonte PNG por direcao, sem usar artes antigas rejeitadas.

- [x] T004 Exportar sprites individuais finais `128x128` em `res://assets/characters/antonio_rafael/sprites/idle/`
  - **Completion Criteria**: oito PNGs `RGBA`, transparentes, centralizados e em escala consistente.

- [x] T005 Gerar preview/contact sheet em `res://assets/characters/antonio_rafael/exports/antonio_rafael_idle_contact_sheet_preview.png`
  - **Completion Criteria**: preview com as oito direcoes para aprovacao humana.

## 3. Documentacao e validacao

- [x] T006 Atualizar ficha visual em `res://docs/art/antonio-rafael.md`
  - **Completion Criteria**: primeira rodada oficial valida, referencias, arquivos e pendencias registrados.

- [x] T007 Atualizar origem de assets em `res://docs/art/asset-sources.md`
  - **Completion Criteria**: referencias, fontes, sprites finais e preview rastreados.

- [x] T008 Atualizar pipeline em `res://docs/technical/character-pipeline.md`
  - **Completion Criteria**: fluxo de geracao, pos-processamento e validacao registrado.

- [x] T009 Validar tecnicamente os arquivos finais
  - **Completion Criteria**: existencia, `128x128`, `RGBA`, alpha, hashes distintos e preview confirmados.

## 4. Aprovacao humana da Base Idle Oficial V1

- [x] T010 Registrar aprovacao humana da Base Idle Oficial V1 em `res://docs/art/antonio-rafael.md`
  - **Completion Criteria**: status oficial atualizado de aprovacao parcial para APROVADA.

- [x] T011 Registrar rastreabilidade aprovada em `res://docs/art/asset-sources.md`
  - **Completion Criteria**: os 8 sprites idle constam como BASE IDLE OFICIAL V1 APROVADA.

- [x] T012 Registrar estado aprovado e proxima feature recomendada em `res://docs/technical/character-pipeline.md`
  - **Completion Criteria**: pipeline informa validacao humana no Godot e recomenda futura feature de walk cycle 8 direcoes.

## Relatorio Final de Implementacao

**Status**: BASE IDLE OFICIAL V1 APROVADA.  
**Validacao Humana**: Os 8 sprites idle `128x128` foram validados visualmente no Godot. O personagem aparece corretamente na cena de teste, o fundo verde nao aparece, a transparencia e valida, a escala esta aceitavel para teste e a direcao idle troca conforme a ultima direcao de movimento.  
**Restricoes Confirmadas**: Nao ha `Policia Civil`, `Sargento Silva`, labels externos ou `PMGO` usado como pose. Nao houve alteracao indevida de gameplay ou de sistemas fora do escopo.  
**Proxima Feature Recomendada**: Walk Cycle 8 direcoes do SGT Antonio Rafael, usando a Base Idle Oficial V1 como referencia visual obrigatoria.  
**Nao realizado nesta execucao documental**: sprites, imagens, cenas, scripts, importacao de assets, walk cycle, commit ou push.
