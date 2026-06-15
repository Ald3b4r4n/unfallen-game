# Autenticação e Segurança — Unfallen

Este documento descreve as políticas de autenticação e validação segura de dados estabelecidas para o projeto *Unfallen*.

## Diretrizes de Segurança

1. **Autenticação via Firebase**: O gerenciamento de identidades e login dos jogadores é delegado ao Firebase Authentication (e-mail e senha).
2. **Uso de ID Token**: O front-end recupera o JWT (ID Token) do Firebase após o login e o envia a cada requisição ao servidor Next.js no header `Authorization`.
3. **Validação Criptográfica Server-Side**: O backend Next.js decodifica o token usando o Firebase Admin SDK, extraindo com segurança o `uid` e rejeitando tokens inválidos ou expirados.
4. **Armazenamento Seguro de Segredos**: Credenciais e URIs de conexão com o banco de dados MongoDB Atlas residem exclusivamente em variáveis de ambiente server-side e nunca são expostas ao cliente ou inclusas no bundle de produção.

Para visualizar os snippets de código do middleware e as chaves de ambiente exigidas no deploy, consulte a especificação [auth-security.md](file:///d:/Projetos/Unfallen/.sdd-master/specs/auth-security.md).
