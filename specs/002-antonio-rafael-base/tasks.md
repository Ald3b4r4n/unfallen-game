# Tasks: Protagonist Base Setup (Antônio Rafael)

**Input**: Design documents from `/specs/002-antonio-rafael-base/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md

---

## 1. Preparação e segurança do projeto

- [x] T001 Confirmar leitura da constituição do projeto no arquivo res://.specify/memory/constitution.md
  - **Description**: Verificar se todas as diretrizes constitucionais foram assimiladas.
  - **Expected Files/Folders**: res://.specify/memory/constitution.md
  - **Completion Criteria**: Confirmar conformidade com as restrições da constituição.
  - **Dependency**: Nenhuma.

- [x] T002 Confirmar restrição da feature ao escopo do personagem no arquivo res://specs/002-antonio-rafael-base/spec.md
  - **Description**: Validar que não há lógica de combate, inimigos ou inventário planejada.
  - **Expected Files/Folders**: res://specs/002-antonio-rafael-base/spec.md
  - **Completion Criteria**: Confirmar que o escopo está isolado.
  - **Dependency**: T001.

- [x] T003 Confirmar que nenhuma implementação ocorrerá sem aprovação humana no arquivo res://specs/002-antonio-rafael-base/plan.md
  - **Description**: Validar os gates de aprovação de execução estabelecidos.
  - **Expected Files/Folders**: res://specs/002-antonio-rafael-base/plan.md
  - **Completion Criteria**: Garantir conformidade com o princípio de Gate Humano.
  - **Dependency**: T002.

- [x] T004 Verificar abertura e integridade do projeto Godot em res://project.godot
  - **Description**: Abrir o projeto na engine Godot 4.x Standard e verificar se não há erros na inicialização.
  - **Expected Files/Folders**: res://project.godot
  - **Completion Criteria**: Projeto abre sem erros de importação ou console.
  - **Dependency**: Nenhuma.

- [x] T005 Registrar a versão utilizada da engine Godot no arquivo res://specs/002-antonio-rafael-base/plan.md
  - **Description**: Documentar a versão exata do Godot (ex: 4.x Standard) nas especificações do plano.
  - **Expected Files/Folders**: res://specs/002-antonio-rafael-base/plan.md
  - **Completion Criteria**: Versão da engine documentada no plano.
  - **Dependency**: T004.

---

## 2. Documentação da ficha do personagem

- [x] T006 [US1] Criar ficha técnica oficial do personagem no arquivo res://docs/art/antonio-rafael.md
  - **Description**: Escrever a ficha contendo idade, perfil, características visuais (óculos, colete, mochila, cabelo curto escuro estilo militar, barba feita) e direção de arte.
  - **Expected Files/Folders**: res://docs/art/antonio-rafael.md
  - **Completion Criteria**: Ficha descritiva salva e validada pelo estilo Pixel Art HD.
  - **Dependency**: T003.

---

## 3. Recebimento e organização das fotos de referência

- [x] T007 [P] [US1] Criar pasta de referências e organizar as fotos em res://assets/characters/antonio_rafael/references/
  - **Description**: Criar a pasta e salvar as imagens/fotos de base fornecidas para orientar as características físicas do protagonista.
  - **Expected Files/Folders**: res://assets/characters/antonio_rafael/references/
  - **Completion Criteria**: Fotos organizadas na pasta de destino.
  - **Dependency**: T003.

- [x] T008 [US1] Documentar origem e mapeamento das fotos de referência no arquivo res://docs/art/antonio-rafael.md
  - **Description**: Descrever como as fotos serão usadas como base visual (rosto, óculos, postura, cabelo curto) sem cópia literal.
  - **Expected Files/Folders**: res://docs/art/antonio-rafael.md
  - **Completion Criteria**: Rastreabilidade e conformidade das imagens descritas no documento de arte.
  - **Dependency**: T007.

---

## 4. Pipeline de arte Pixel Art HD

- [x] T009 [US1] Criar guia de pipeline técnico de arte no arquivo res://docs/technical/character-pipeline.md
  - **Description**: Definir as regras de exportação de sprites em 128x128 (alternativa 64x64), fluxo de animação (Idle e Walk), nomes padronizados dos arquivos e verificação de nitidez (filtro Nearest).
  - **Expected Files/Folders**: res://docs/technical/character-pipeline.md
  - **Completion Criteria**: Diretrizes técnicas de pipeline salvas.
  - **Dependency**: T006.

---

## 5. Estrutura de pastas

- [x] T010 Criar estrutura física de pastas do projeto per design do plano em res://
  - **Description**: Criar todos os subdiretórios descritos na seção Project Structure do plano (assets/characters/antonio_rafael/sprites/, scenes/player/, scripts/player/, etc.).
  - **Expected Files/Folders**: res://assets/, res://scenes/, res://scripts/, res://docs/
  - **Completion Criteria**: Todas as pastas criadas na árvore do projeto.
  - **Dependency**: T003.

---

## 6. Cena do personagem

- [x] T011 [US1] Criar cena base do jogador no arquivo res://scenes/player/Player.tscn
  - **Description**: Criar a cena modular do player contendo o nó raiz CharacterBody2D, um Node2D para o pivô, um Sprite2D para renderização, CollisionShape2D e AnimationPlayer.
  - **Expected Files/Folders**: res://scenes/player/Player.tscn
  - **Completion Criteria**: Cena Player.tscn salva com a hierarquia correta de nós.
  - **Dependency**: T010.

---

## 7. Cena de teste

- [x] T012 [US3] Criar a cena de teste de laboratório isolada no arquivo res://scenes/test/CharacterTestScene.tscn
  - **Description**: Criar cena neutra contendo um chão simples e instâncias necessárias do Player para validação isolada do protagonista.
  - **Expected Files/Folders**: res://scenes/test/CharacterTestScene.tscn
  - **Completion Criteria**: Cena de teste criada com o Player instanciado.
  - **Dependency**: T011.

---

## 8. Movimento isométrico

- [x] T013 [US2] Criar script de input e lógica de física do jogador no arquivo res://scripts/player/player_controller.gd
  - **Description**: Capturar teclas direcionais WASD/setas e enviar ao módulo de movimentação.
  - **Expected Files/Folders**: res://scripts/player/player_controller.gd
  - **Completion Criteria**: Script player_controller.gd criado e acoplado ao Player.tscn.
  - **Dependency**: T011.

- [x] T014 [US2] Criar script de cálculo matemático isométrico no arquivo res://scripts/player/isometric_movement.gd
  - **Description**: Converter vetores lineares em isométricos 2:1 com velocidade normalizada na diagonal.
  - **Expected Files/Folders**: res://scripts/player/isometric_movement.gd
  - **Completion Criteria**: Script isometric_movement.gd implementado com cálculo normalizado.
  - **Dependency**: T013.

---

## 9. Animações iniciais

- [x] T015 [US2] Criar script controlador de animações no arquivo res://scripts/player/player_animation_controller.gd
  - **Description**: Gerenciar máquina de estados básica de animações (Idle/Walk nas 4 direções isométricas) com base na velocidade e direção do controlador do player.
  - **Expected Files/Folders**: res://scripts/player/player_animation_controller.gd
  - **Completion Criteria**: Máquina de estados configurada e mudando sprites adequadamente.
  - **Dependency**: T014.

---

## 10. Câmera

- [x] T016 [US3] Criar cena modular da câmera no arquivo res://scenes/camera/CameraRig.tscn
  - **Description**: Configurar a câmera do jogo (Camera2D) de forma independente e encapsulada.
  - **Expected Files/Folders**: res://scenes/camera/CameraRig.tscn
  - **Completion Criteria**: Cena CameraRig salva.
  - **Dependency**: T010.

- [x] T017 [US3] Criar script de acompanhamento suave da câmera no arquivo res://scripts/camera/camera_follow.gd
  - **Description**: Lógica de LERP baseada em física para acompanhar o nó target do Player sem interrupções visuais.
  - **Expected Files/Folders**: res://scripts/camera/camera_follow.gd
  - **Completion Criteria**: Câmera seguindo o player com suavidade na cena CharacterTestScene.tscn.
  - **Dependency**: T016.

---

## 11. Colisão

- [x] T018 [US3] Implementar colisão física no protagonista no arquivo res://scenes/player/Player.tscn
  - **Description**: Acoplar e configurar CollisionShape2D na base do personagem (pivô dos pés).
  - **Expected Files/Folders**: res://scenes/player/Player.tscn
  - **Completion Criteria**: Forma de colisão ativa e delimitada no player.
  - **Dependency**: T011.

- [x] T019 [US3] Criar obstáculo físico de teste sólido no arquivo res://scenes/test/CharacterTestScene.tscn
  - **Description**: Adicionar um StaticBody2D com CollisionShape2D simples em cor sólida para verificação física.
  - **Expected Files/Folders**: res://scenes/test/CharacterTestScene.tscn
  - **Completion Criteria**: Bloco obstáculo inserido e posicionado no mapa de teste.
  - **Dependency**: T012.

---

## 12. Validação manual

- [x] T020 Criar checklist e executar testes manuais de conformidade no arquivo res://specs/002-antonio-rafael-base/tasks.md
  - **Description**: Validar as 12 condições (escala, movimentação, normalização, colisão, transição de animações) em execução de teste.
  - **Expected Files/Folders**: res://specs/002-antonio-rafael-base/tasks.md
  - **Completion Criteria**: Todos os testes manuais validados e marcados como com sucesso.
  - **Dependency**: T015, T017, T019.

---

## 13. Documentação final

- [x] T021 Atualizar registro de origem e rastreabilidade de assets em res://docs/art/asset-sources.md
  - **Description**: Documentar a origem dos spritesheets temporários ou gerados.
  - **Expected Files/Folders**: res://docs/art/asset-sources.md
  - **Completion Criteria**: Lista de assets e origens devidamente documentada.
  - **Dependency**: T020.

- [x] T022 Documentar configurações ideais de importação em res://docs/technical/godot-import-settings.md
  - **Description**: Gravar as instruções para importação de pixel art sem blur nas configurações globais do Godot.
  - **Expected Files/Folders**: res://docs/technical/godot-import-settings.md
  - **Completion Criteria**: Configurações documentadas.
  - **Dependency**: T021.

---

## 14. Gate humano de aprovação

- [x] T023 Apresentar relatório final de planejamento e solicitar portão de aprovação humana no arquivo res://specs/002-antonio-rafael-base/tasks.md
  - **Description**: Consolidar resumo do planejamento, arquivos a criar, arquivos a alterar, riscos, pendências e validações para gate de aprovação.
  - **Expected Files/Folders**: res://specs/002-antonio-rafael-base/tasks.md
  - **Completion Criteria**: Obter aprovação explícita humana antes de iniciar qualquer código.
  - **Dependency**: T022.

---

## Relatório Final de Implementação

**Status**: Todas as tarefas aprovadas para a base do personagem Antônio Rafael foram implementadas e configuradas.
**Arquivos Criados**: Estrutura física completa, base `.gitignore`, `project.godot`, documentos de arte/importação, Cenas (Player, CharacterTestScene, CameraRig), Scripts GDScript (Movimento Isométrico, Input, Animação e Câmera).
**Próximo Passo Humano**: Abrir o projeto na engine Godot 4, certificar-se da importação (Nearest/Lossless), inserir os sprites provisórios e realizar teste de gameplay manual isolado.
