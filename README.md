src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                 # landing page
│
├── components/
│   ├── ui/                      # shadcn/ui overrides or wrappers
│
├── lib/
│   └── utils.ts
│
├── db/
│   ├── schema.ts               # Drizzle ORM schema
│   └── migrations/             # migration files
│
├── scripts/
│   └── seed.ts                 # optional dummy data for dev
│
├── middleware.ts               # Supabase session auth
├── drizzle.config.ts
├── tsconfig.json
└── .env.local
