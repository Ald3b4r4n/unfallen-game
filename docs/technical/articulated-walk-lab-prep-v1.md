# Articulated Walk Lab Prep V1

**Feature**: `016-rig-imports-versioning-and-articulated-walk-lab-prep-v1`  
**Data**: 2026-06-24  
**Status**: preparacao documental concluida; aguardando gate humano.  
**Proxima feature recomendada**: `017-articulated-walk-lab-v1`

## Observacao Obrigatoria

```txt
Ainda nao existe caminhada articulada oficial no projeto.
Esta feature nao cria walk cycle oficial.
Esta feature nao cria animacao oficial.
Esta feature nao integra caminhada ao Player.
Esta feature apenas consolida imports oficiais do rig e prepara a proxima feature de laboratorio.
```

## Objetivo Do Futuro Laboratorio

Preparar a proxima etapa real do pipeline do SGT Antonio Rafael: um laboratorio experimental de caminhada articulada usando o rig tecnico como base de producao.

O objetivo da futura feature sera testar poses e movimento articulado em ambiente isolado, sem promover o resultado automaticamente a walk cycle oficial e sem integrar nada ao Player runtime.

## Estado Atual Do Rig

O projeto possui os seguintes marcos tecnicos:

- **Rig Parts Separation V1**: partes do personagem separadas e aprovadas parcialmente como base tecnica.
- **Rig Assembly V1**: montagem tecnica inicial em laboratorio, aprovada parcialmente.
- **Rig Refinement V1**: partes criticas refinadas, aprovadas parcialmente e validadas visualmente no Godot.
- **Rig Articulation Test V1**: estados tecnicos de articulacao aprovados parcialmente como teste de pivots.
- **Official Rig Imports Versioning V1**: imports oficiais do rig preparados para versionamento explicito.

Todos esses marcos permanecem tecnicos/laboratoriais. Nenhum deles aprova animacao final, walk cycle final ou gameplay.

## Arquivos E Cenas Que Podem Servir Como Base Futura

A futura feature 017 pode ler e usar como referencia:

```txt
docs/technical/rig-parts-separation.md
docs/technical/rig-assembly-v1.md
docs/technical/rig-refinement-v1.md
docs/technical/rig-articulation-test-v1.md
docs/technical/official-rig-imports-versioning-v1.md
assets/characters/antonio_rafael/rig/parts_manifest.json
assets/characters/antonio_rafael/rig/rig_assembly_manifest.json
assets/characters/antonio_rafael/rig/rig_articulation_test_manifest.json
assets/characters/antonio_rafael/rig/parts/front_right/
assets/characters/antonio_rafael/rig/previews/
scenes/rig/AntonioRafaelRigLab.tscn
```

Uso permitido na futura feature inicial:

- criar laboratorio separado;
- criar poses experimentais;
- gerar preview tecnico;
- documentar limitacoes;
- validar visualmente no Godot.

## Arquivos Que Nao Devem Ser Alterados Sem Nova Aprovacao

```txt
.gitignore
scenes/player/Player.tscn
scripts/player/
assets/characters/antonio_rafael/sprites/idle/
```

Tambem devem continuar protegidos, salvo escopo explicito posterior:

```txt
scenes/rig/AntonioRafaelRigLab.tscn
scripts/rig/
assets/characters/antonio_rafael/rig/
```

A futura feature 017 deve preferir criar laboratorio separado em vez de modificar o laboratorio validado existente, caso precise testar caminhada articulada.

## Criterios Visuais Para Caminhada Experimental

A futura caminhada experimental deve buscar:

1. alternancia clara de pernas;
2. alternancia clara de bracos;
3. sensacao visual de peso corporal;
4. oscilacao controlada de tronco sem deformar o personagem;
5. mochila acompanhando o movimento de forma sutil;
6. preservacao de rosto, oculos, cabelo e tom de pele;
7. preservacao de uniforme, colete, mochila, patch e divisa quando visiveis;
8. consistencia de escala com a Base Idle Oficial V1;
9. ausencia de texto, labels, fundo verde, gore, zumbis ou armas em destaque;
10. separacao clara entre teste tecnico e asset final de gameplay.

## Restricoes Da Proxima Fase Inicial

- Nao integrar caminhada ao Player na primeira versao.
- Nao declarar walk cycle oficial sem validacao humana.
- Nao criar gameplay.
- Nao criar combate.
- Nao criar inventario.
- Nao alterar sprites idle aprovados.
- Nao substituir o Player por rig.
- Nao exportar frames finais de gameplay sem nova aprovacao.

## Proximos Passos Recomendados Para 017

1. Criar especificacao da feature `017-articulated-walk-lab-v1`.
2. Definir laboratorio isolado para caminhada articulada experimental.
3. Reusar o rig tecnico como base de estudo, nao como Player runtime.
4. Criar estados de pose ou mini-ciclo experimental em laboratorio.
5. Gerar preview tecnico para validacao humana.
6. Registrar limitacoes visuais.
7. Validar no Godot antes de qualquer decisao sobre sprites finais.
8. Parar em gate humano antes de declarar qualquer animacao como oficial.

## Confirmacoes De Escopo

- Ainda nao existe caminhada articulada oficial no projeto.
- Esta feature nao cria walk cycle oficial.
- Esta feature nao cria animacao oficial.
- Esta feature nao integra caminhada ao Player.
- Esta feature apenas consolida imports oficiais do rig e prepara a proxima feature de laboratorio.
