# Ordem de Implementação das Fases

Este documento descreve a ordem recomendada de implementação para o desenvolvimento do MVP "Plantão Final" do jogo **Unfallen**.

## Cronograma de Desenvolvimento Sequencial

1. **BLOCO 01 — Fundação do Projeto**
   - Setup inicial de Next.js, TS, Jest e linters.
   
2. **BLOCO 02 — Autenticação Firebase**
   - Configuração de login no cliente e validação segura de JWT tokens no back-end.

3. **BLOCO 03 — MongoDB e Save System**
   - Persistência em banco pooling Atlas M0 usando UID resolvido no back-end.
   - Lógica de sincronização local (LocalStorage) vs remota (MongoDB).

4. **BLOCO 04 — Phaser Runtime**
   - Integração do canvas Phaser 3 no React.
   - Estrutura base de 8 cenas e suas transições.

5. **BLOCO 05 — Sistema Isométrico**
   - Fórmulas geométricas 2:1 e depth sorting dinâmico de sprites pelo eixo Y.

6. **BLOCO 06 — Gameplay MVP**
   - Movimentação, estamina, inventário limitado, lanterna, inimigos e regras de combate.

7. **BLOCO 07 — Fase "Plantão Final"**
   - Layout do mapa, checkpoints, investigação de pistas e gatilhos de derrota ou vitória do MVP.

8. **BLOCO 08 — Assets e Áudio**
   - Lazy loading e registro de direitos autorais e compressão WebP.

9. **BLOCO 09 — Cheats/Debug**
   - Overlay de controle dev-only (desativado fisicamente na build de produção).

10. **BLOCO 10 — Testes, QA e Playtest**
    - Consolidação da qualidade do software.

11. **BLOCO 11 — Build e Deploy**
    - Configuração de build e publicação de staging/produção na Vercel.
