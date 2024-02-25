# Learnative 🚀

Learnative is an innovative educational platform designed to empower students with the assistance of Artificial Intelligence (AI). 🎓✨

## About Learnative

Learnative combines cutting-edge AI technologies with interactive learning experiences, providing students with personalized and efficient study support. Whether you're tackling complex subjects, preparing for exams, or exploring new interests, Learnative is here to enhance your learning journey.

## Key Features

- **AI-Powered Assistance:** Leverage the power of AI to receive tailored learning recommendations and assistance.
- **Interactive Learning:** Engage in dynamic learning experiences to reinforce concepts.
- **Personalized Study Plans:** Receive customized study plans based on your unique learning style and progress.
- **Real-time Feedback:** Get instant feedback on your performance and track your learning milestones.

**Techstacks:**

- Tailwind design
- Tailwind animations and effects
- Full responsiveness
- Clerk Authentication (Email, Google, 9+ Social Logins)
- Client form validation and handling using react-hook-form
- Server error handling using react-toast
- Conversation Generation Tool
- Code Generation Tool
- How to write POST, DELETE, and GET routes in route handlers (app/api)
- How to fetch data in server react components by directly accessing the database (WITHOUT API! like Magic!)
- How to handle relations between Server and Child components!
- How to reuse layouts
- Folder structure in Next 13 App Router

## Getting Started

### Cloning the Repository

```bash
git clone https://github.com/Abiji-2020/DuHacks3.0-Learnative.git
```

### Install Packages

```bash
npm i
```

### Setup .env File

Create a `.env` file in the root of your project and add the following variables:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

OPENAI_API_KEY=

NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

## Running the App

To start the app in development mode, use the following command:

```bash
npm run dev
```

This command will initiate a development instance of the app.

### Available Commands

You can use the following commands with npm:

- `npm run dev`: Starts a development instance of the app
- `npm run [other_command]`: Describe other available commands and what they do, if any.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js. 🚀✨


