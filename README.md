# 0-Next

npm install --save-dev prettier

npx create-next-app@latest [my-nextjs] --typescript --eslint --tailwind

npx create-next-app@latest  [my-nextjs]  --typescript --eslint --tailwind --prettier

npm install -g typescript typescript-language-server

npm install --save-dev eslint-config-next eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-prettier


### 1️⃣ Root Level
```
my-app/
├── app/                        # ← routing heart (required for App Router)
│   ├── (auth)/                 # Route group – no URL segment
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── register/
│   │       └── page.tsx
│   ├── (dashboard)/            # Another route group
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── api/                    # Route Handlers = API endpoints
│   │   └── users/
│   │       └── route.ts
│   ├── dashboard/              # ← normal route segment (/dashboard)
│   │   └── page.tsx
│   ├── layout.tsx              # Root layout (required)
│   ├── page.tsx                # Home page (/)
│   ├── globals.css
│   ├── favicon.ico
│   ├── loading.tsx             # optional
│   └── not-found.tsx           # optional
│
├── src/                        # ← almost everyone uses this in medium/large projects
│   ├── components/             # or components/ui/ + components/layout/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   └── Card.tsx
│   │   └── layout/
│   │       ├── Header.tsx
│   │       └── Sidebar.tsx
│   ├── features/               # ← very popular (feature folders / domain-driven)
│   │   ├── auth/
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   └── actions.ts      # Server Actions
│   │   └── dashboard/
│   │       ├── components/
│   │       └── hooks/
│   ├── lib/                    # non-React utilities, configs, db, auth
│   │   ├── auth.ts
│   │   ├── db.ts
│   │   └── logger.ts
│   ├── hooks/                  # shared React hooks
│   ├── store/                  # Zustand / Jotai / Redux
│   ├── types/                  # global .ts types / interfaces
│   └── utils/                  # small helpers (cn, formatDate, etc.)
│
├── public/                     # static files
├── .env.local
├── next.config.ts              # or .js
├── tsconfig.json
├── tailwind.config.ts          # if using Tailwind
└── package.json

```

## app/
### Official purpose according to Next.js docs
Defines the routing structure (file-system router).
Special files: page.tsx, layout.tsx, loading.tsx, route.ts, etc.
Next.js reads this folder to build routes, layouts, server actions, etc.

### What usually lives here
- Only routing-related files
- Route groups (auth)/, (marketing)/
- Route handlers api/users/route.ts
- Colocated per-route components (optional: _components/, components/)

### Typical location in project
Usually src/app/ or directly ./app/

### Why people put it here / common feeling
This folder is "sacred" — mixing too much non-routing code here can feel messy


## src/
### Official purpose according to Next.js docs
Optional convention (explicitly supported by Next.js).
Acts as a container for all application source code.
Separates app code from project config files.

### What usually lives here
- app/ (the router folder)
- components/, ui/, features/, lib/, hooks/, store/, types/, utils/
- Anything that's not routing-specific or config
  
### Typical location in project
Root-level folder: ./src/

### Why people put it here / common feeling
Keeps root clean (only public/, next.config.ts, tsconfig.json, package.json, .env stay at root)

Real-world reasoning in 2025–2026 (from community patterns)


# Type 2 structure - simple

```
src/
├─ app/
│  ├─ (auth)/                 # Route groups (no URL impact)
│  │  ├─ login/
│  │  └─ register/
│  ├─ (dashboard)/
│  │  ├─ layout.tsx
│  │  └─ page.tsx
│  ├─ api/                    # Route handlers (backend)
│  │  └─ users/route.ts
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx              # Root layout
│  ├─ loading.tsx
│  ├─ not-found.tsx
│  └─ page.tsx                # Home page
│
├─ components/
│  ├─ ui/                     # Reusable UI components
│  │  ├─ Button.tsx
│  │  └─ Modal.tsx
│  ├─ layout/                 # Header, Footer, Sidebar
│  └─ forms/
│
├─ features/                  # Feature-based logic (recommended)
│  ├─ auth/
│  │  ├─ components/
│  │  ├─ actions.ts
│  │  └─ hooks.ts
│  └─ dashboard/
│
├─ lib/                       # Core utilities & configs
│  ├─ auth.ts
│  ├─ db.ts
│  └─ fetcher.ts
│
├─ hooks/                     # Shared custom hooks
│  └─ useDebounce.ts
│
├─ store/                     # Global state (Zustand, Redux)
│  └─ userStore.ts
│
├─ types/                     # TypeScript types
│  └─ index.ts
│
├─ styles/                    # Extra styles (if needed)
│
└─ utils/                     # Small pure helper functions

```

