
### Project Overview

Use this guide to build a web app where users can input an audio prompt to transcribe speech model host from Replicate

### Feature Requirements

We will use **Next.js**, **Shadcn**, **Lucid**, **Supabase**, and **Clerk**.

1. **Create a Form:**
    - Set up a form where users can upload an audio file or provide a URL to their audio.
    - Include a button that, when clicked, calls the `vaibhavs10/incredibly-fast-whisper` model to generate the transcription.
2. **User Interface & Animation:**
    - Design a visually appealing UI with animations that indicate when the transcription is in progress or if no audio has been uploaded.
3. **Display Transcriptions:**
    - Show all previously generated transcriptions in a grid format.
4. **Hover Effects:**
    - When users hover over each transcription, display two icon buttons: one for downloading the transcription and another for liking it.

Relevant docs: 

Set the `REPLICATE_API_TOKEN` environment variable

```
export REPLICATE_API_TOKEN=<paste-your-token-here>
```

[Learn more about authentication](https://replicate.com/vaibhavs10/incredibly-fast-whisper/api/learn-more#authentication)

Install Replicate’s Node.js client library

```
npm install replicate
```

[Learn more about setup](https://replicate.com/vaibhavs10/incredibly-fast-whisper/api/learn-more#setup)

Run **vaibhavs10/incredibly-fast-whisper** using Replicate’s API. Check out the model's [schema](https://replicate.com/vaibhavs10/incredibly-fast-whisper/api/schema) for an overview of inputs and outputs.


import Replicate from "replicate";
const replicate = new Replicate();

const input = {
    audio: "https://replicate.delivery/pbxt/Js2Fgx9MSOCzdTnzHQLJXj7abLp3JLIG3iqdsYXV24tHIdk8/OSR_uk_000_0050_8k.wav",
    batch_size: 64
};

const output = await replicate.run("vaibhavs10/incredibly-fast-whisper:3ab86df6c8f54c11309d4d1f930ac292bad43ace52d10c80d87eb258b3c9f79c", { input });
console.log(output)
//=> {"text":" the little tales they tell are false the door w...




MY-APP
├── .next
├── app
│   ├── fonts
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components
│   └── ui
│       ├── button.tsx
│       ├── card.tsx
│       └── input.tsx
├── lib
│   └── utils.ts
├── node_modules
├── requirements
│   └── frontend_instructions.md
├── .eslintrc.json
├── .gitignore
├── components.json
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json

# Rules 
- All new component should go in /components and be named like example-components.tsx unless otherwise specified 
- All new pages go in /app
