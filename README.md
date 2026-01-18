# 0-Next

npm install --save-dev prettier

npx create-next-app@latest [my-nextjs] --typescript --eslint --tailwind

npx create-next-app@latest  [my-nextjs]  --typescript --eslint --tailwind --prettier

npm install -g typescript typescript-language-server

### 1️⃣ Root Level
```
my-nextjs-app/
│
├─ public/                  # Static assets (images, fonts, icons)
├─ src/                     # All source code
│   ├─ pages/               # Next.js pages
│   ├─ components/          # Reusable UI components
│   ├─ layouts/             # Page layouts
│   ├─ hooks/               # Custom React hooks
│   ├─ services/            # API calls / HTTP clients
│   ├─ types/               # TypeScript interfaces/types
│   ├─ utils/               # Utility/helper functions
│   ├─ context/             # React Context providers
│   ├─ store/               # State management (Zustand, Redux, etc.)
│   └─ styles/              # Global styles / CSS modules / Tailwind config
│
├─ .env.local               # Environment variables (API URLs etc.)
├─ next.config.js           # Next.js configuration
├─ tsconfig.json            # TypeScript config
├─ package.json
└─ README.md
```

### 2️⃣ Pages
```
src/pages/
├─ index.tsx               # Home
├─ blog/
│   ├─ index.tsx           # Blog listing
│   └─ [id].tsx            # Blog detail
├─ about.tsx
└─ 404.tsx
```

### 3️⃣ Components
```
src/components/
├─ Button.tsx
├─ Card.tsx
├─ Navbar.tsx
└─ BlogPostItem.tsx
```

### 4️⃣ Services (API Layer)  Django Api Calles
```
src/services/
├─ apiClient.ts            # Axios/fetch wrapper
├─ blogService.ts          # Functions like getPosts(), getPostById()
└─ authService.ts          # Login, register, etc.
```

 - *Example* blogService.ts:
```
import apiClient from './apiClient';
import { Post } from '../types/post';

export const getPosts = async (): Promise<Post[]> => {
  const res = await apiClient.get<Post[]>('/posts/');
  return res.data;
};

export const getPostById = async (id: number): Promise<Post> => {
  const res = await apiClient.get<Post>(`/posts/${id}/`);
  return res.data;
};
```

### 5️⃣ Types
 - Keep all TypeScript interfaces in one place:
```
src/types/
├─ post.ts
├─ user.ts
└─ index.ts          # optional barrel file for easy imports
```

### 7️⃣ Optional: Utilities & Hooks
```
src/hooks/
├─ useAuth.ts
├─ useFetch.ts
└─ useDebounce.ts

src/utils/
├─ formatDate.ts
└─ slugify.ts
```
