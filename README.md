<div align="center">
  <div>
  <h1>Seamstress</h1>
  A simple url shortener application built with a SvelteKit and Tailwind CSS frontend, and a Firebase backend.
  </div>
<br />

<a href="https://gwen.vercel.app/">Snip Snip</a>

  <div>
   <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"> <img src="https://img.shields.io/badge/svelte-%23f1413d.svg?style=for-the-badge&logo=svelte&logoColor=white"> <img src="https://img.shields.io/badge/Firebase-ff9900?style=for-the-badge&logo=firebase&logoColor=white"> <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white">
  </div>

  <img style="width:35%;" src="/static/Gwen_OriginalSkin.jpg">
</div>

## 🚀 Getting Started

Just input the link you want, and you will get a shortened version of that link! Links are not saved if you do not login, so you will have to track them yourself. If you login, you can view the amount of times your link has been clicked as well as when they were created.

To run the project locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the root directory of the project.
3. Run `npm install` to install the necessary dependencies.
4. Run `npm run dev` to start the development server.
5. Visit `http://localhost:5173` in your web browser to view the application.

## 🤔 Why

Having recently graduated, I have begun to apply for many positions and track them. I've become acutely aware of how long some of the urls are for job portals/applications, and how unsightly they can be and cumbersome when they fill chat logs or overfill tables. There are many very good solutions online like Bitly, but I wanted to make one for myself using some technologies I know and also potentially learn some more on the way. Through this, I used Firebase for the first time.

Originally, I used Supabase, but I later tried to add another separate project of mine to the current Supabase project, which ended up being a real hassle, so I moved this one to Firebase. The authentication from one app would carry over to the other through local storage, which was annoying since this one uses Github Oauth login, while my other project uses magic links. Regret not using TypeScript, but wanted to use JavaScript for some reason.

Project prominently features Gwen, who is a champion in League of Legends that has large scissors. Images are not mine.

## 💻 Technologies

- SvelteKit: a JavaScript framework for building server-rendered or statically-exported applications using Svelte.
- Tailwind: a CSS utility class library to quicken and bootstrap development of appealing and accessible websites.
- Firebase: A backend as a service, providing features like a document database and authentication with many OAuth providers.
