# Checklist TDD e Testes de Qualidade

Este documento apresenta a estratégia pública de testes do jogo **Unfallen**, dividindo as asserções de qualidade conforme a ferramenta ideal para cada camada.

## 1. Camada de Lógica Pura (Jest)
Todas as operações abaixo devem seguir o ciclo TDD (Escrever teste -> Falha -> Implementação -> Sucesso -> Refatoração):
- **Cálculos de Grade e Coordenadas Isométricas**: Conversão bidimensional lógica $2:1$.
- **Serialização do Save JSON**: Schema de dados, limites de atributos do player.
- **Lógica de Conflito de Saves**: Comparação de timestamps para determinar o arquivo mais recente.
- **Regras do Inventário**: Inserção de itens respeitando a capacidade simples e limitada.
- **Restauração em Checkpoints (Morte e Respawn)**: Redirecionamento e recriação de estado após a derrota.

## 2. Camada de API e Integração (Supertest)
Validação de endpoints REST e segurança:
- **Autenticação**: Validação de Firebase ID Token (JWT) e barreira de proteção 401.
- **Persistência**: Operações CRUD de gravação e leitura no banco de dados MongoDB Atlas.

## 3. Camada Visual e Transição de Tela (Playwright ou Checklist)
- **GameWrapper**: Montagem do canvas na página React sem vazamento de recursos de memória.
- **Cenas do Phaser**: Inicialização lógica das transições de cena.

## 4. Playtest Manual Técnico
Validado diretamente no navegador pelo desenvolvedor e QA:
- **Responsividade de Input (Teclado/Mouse)**: Controle desktop-first.
- **Física de Colisores**: Obstáculos do cenário e paredes.
- **Depth Sorting**: Efeito visual de camadas ordenadas dinamicamente pelo eixo Y.
- **Ciclo de Combate e Coleta**: Disparos de munição, bateria da lanterna e interações.
