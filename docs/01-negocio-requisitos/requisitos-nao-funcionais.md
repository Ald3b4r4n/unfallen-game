# Requisitos Não Funcionais

## Lista de Requisitos Não Funcionais (RNF)

- **[RNF-001 — Depth Sorting Isométrico](file:///d:/Projetos/Unfallen/.sdd-master/requirements/rnf/RNF-001.md)**: Ordenação automática de sprites pelo pé da coordenada Y a cada render loop do Phaser, para garantir profundidade 2.5D sem bugs visuais.
- **[RNF-002 — Design de Som Imersivo](file:///d:/Projetos/Unfallen/.sdd-master/requirements/rnf/RNF-002.md)**: Áudios compactados em WebM/OGG e MP3 representando chiado de rádio policial, passos, rosnados distantes e trilhas lentas e melancólicas para induzir suspense.
- **[RNF-003 — Controles Desktop-First e Responsividade de Input](file:///d:/Projetos/Unfallen/.sdd-master/requirements/rnf/RNF-003.md)**: Resposta perceptivelmente imediata aos comandos de teclado/mouse e busca por estabilidade de 60 FPS no Phaser em desktops modernos, sem travamentos perceptíveis.
- **[RNF-004 — Tamanho do Pacote e Carregamento Progressivo](file:///d:/Projetos/Unfallen/.sdd-master/requirements/rnf/RNF-004.md)**: Carregamento inicial leve focado no boot/menu/cena inicial ("Plantão Final"), realizando Lazy Loading de mapas, sprites e áudios de capítulos posteriores.
- **[RNF-005 — Segurança de Autenticação e Persistência](file:///d:/Projetos/Unfallen/.sdd-master/requirements/rnf/RNF-005.md)**: Autenticação via Firebase Authentication. Sincronização de save exige Firebase ID Token validado via Firebase Admin no Next.js antes de persistir no MongoDB. MONGODB_URI protegida em variáveis server-side.
- **[RNF-006 — Política de Assets e Licenciamento](file:///d:/Projetos/Unfallen/.sdd-master/requirements/rnf/RNF-006.md)**: Rastreabilidade e licenças explícitas para todos os assets visuais e sonoros; proibido ripagem ou cópia por IA de assets pagos a partir de prints. IA apenas para prompts originais próprios.

## Status
Rascunho

## Aprovação humana
Pendente
