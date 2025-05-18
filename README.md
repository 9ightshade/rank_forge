This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

RankForge/
├── app/
│   ├── layout.js
│   ├── page.js (Homepage)
│   ├── leaderboard/
│   │   └── page.js
│   ├── contributor/
│   │   └── [id]/
│   │       └── page.js (Public Profile View)
│   ├── dashboard/
│   │   ├── layout.js (Authenticated Layout)
│   │   ├── page.js (Contributor Dashboard)
│   │   ├── profile/
│   │   │   └── page.js
│   │   ├── submissions/
│   │   │   └── page.js
│   │   └── new-submission/
│   │       └── page.js
│   ├── admin/
│   │   ├── layout.js
│   │   ├── page.js (Admin Dashboard)
│   │   └── review/
│   │       └── [id]/
│   │           └── page.js (Scoring Panel)
│   ├── auth/
│   │   ├── signin/
│   │   │   └── page.js
│   │   └── signup/
│   │       └── page.js
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── Sidebar.jsx
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Badge.jsx
│   │   └── Modal.jsx
│   ├── auth/
│   │   ├── SignInForm.jsx
│   │   └── SignUpForm.jsx
│   ├── contributor/
│   │   ├── ProfileBadge.jsx
│   │   ├── ScoreCard.jsx
│   │   ├── ContributionForm.jsx
│   │   └── SubmissionList.jsx
│   └── admin/
│       ├── SubmissionsTable.jsx
│       └── ScoringPanel.jsx
├── lib/
│   ├── auth.js
│   └── database.js
└── public/
    ├── images/
    └── icons/