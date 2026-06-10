# StudyFlow Dashboard

A modern student learning dashboard built using Next.js, TypeScript, Tailwind CSS, Framer Motion, and Supabase.

## Features

* Responsive dashboard layout
* Server-side course data fetching
* Dynamic course cards
* Animated progress bars
* Activity tracking visualization
* Loading states with Suspense
* Error handling UI
* Dark mode interface
* Lucide React icons
* Framer Motion animations

## Tech Stack

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* Framer Motion
* Supabase
* Lucide React

## Database Schema

### courses

| Column     | Type      |
| ---------- | --------- |
| id         | uuid      |
| title      | text      |
| progress   | integer   |
| icon_name  | text      |
| created_at | timestamp |

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Installation

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Author

Rashmi Rahangdale
