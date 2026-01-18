# 0-Next

npm install --save-dev prettier

npx create-next-app@latest [my-nextjs] --typescript --eslint --tailwind

npx create-next-app@latest  [my-nextjs]  --typescript --eslint --tailwind --prettier

npm install -g typescript typescript-language-server

```
nextjs-ts-study/
│
├─ pages/
│  ├─ index.tsx          # Home page
│  ├─ about.tsx          # About page
│  ├─ blog/
│  │   ├─ index.tsx      # Blog list page
│  │   └─ [id].tsx       # Dynamic blog page
│  └─ api/
│      └─ posts.ts       # API route for blog posts
│
├─ types/
│  └─ post.ts            # TypeScript types
│
├─ components/
│  ├─ Layout.tsx
│  └─ Navbar.tsx
│
└─ styles/
   └─ globals.css
```

