# Contratos de API — Unfallen

Este documento apresenta a especificação simplificada das rotas de integração REST da camada de servidor do projeto *Unfallen*.

## Endpoints de API

1. **`GET /api/user/me`**:
   - Retorna as informações básicas da conta logada. Exige Firebase ID Token no cabeçalho.
2. **`GET /api/save/load?slot=1`**:
   - Resgata os dados gravados no banco para o slot especificado (estritamente slot 1 no MVP). Retorna `404` caso não haja dados.
3. **`POST /api/save/write`**:
   - Grava o payload JSON contendo o estado do jogador no banco de dados remoto MongoDB Atlas. Executa validação de sanidade nos campos do payload (como vida e estamina).
4. **`DELETE /api/save/delete?slot=1`**:
   - Remove o documento do banco associado ao usuário.

Para consultar payloads de request/response e as asserções de erro de rede detalhadas, consulte a especificação [api-contracts.md](file:///d:/Projetos/Unfallen/.sdd-master/specs/api-contracts.md).
