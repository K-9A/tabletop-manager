This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

**Description**

This web application is a solo-developed and designed, ongoing project that serves as a comprehensive platform for Dungeons and Dragons players and Dungeon Masters, providing tools to create, manage, and view character sheets and campaigns. Built with a modern tech stack including React, Next.js, and Tailwind CSS, the application offers a seamless and interactive user experience.
Table of Contents

    Tech Stack
    Project Status
    Features
    Future Roadmap
    Getting Started
    License
    Contact

**Tech Stack**

    Frameworks: React, Next.JS
    UI/Styling: Tailwind, Material UI Tailwind, Framer Motion
    Languages & Linters: TypeScript, ESLint
    Authentication: NextAuth (Traditional login, with plans for OAuth)
    Libraries & Tools: bcrypt, NanoID, Redux + Toolkit + Thunk, Axios, Socket.Io, Formik, Yup, express rate limit micro, validator
    Database: MySQL
    Routing: File-based routing (Next.js)
    Deployment: DigitalOcean
    Logging: Winston, Sentry

**Project Status**

The project is currently in active development, with essential packages installed and a ready MySQL schema. The application features a variety of pages and functionalities, including user authentication, character sheet creation, and very basic real-time chat.
Features

    Standard User Authentication (Registration, Login, Logout)
    Character Sheet Creation and Viewing
    Campaign Creation and Listing
    Real-Time Chat
    Basic Alerting System
    Redux Store + Thunk Setup
    MySQL + Schema Setup
    Socket.IO Broadcasting

**Future Roadmap**

Comprehensive Character Sheet Development

    Detailed Sections: Adding more sections to the character sheet for comprehensive character information.
    Interactive Elements: Implementing interactive elements to calculate and update character stats dynamically where applicable.

Profile Enhancements

    Profile Customization: Allowing users to customize their profiles by uploading images of their characters for their character sheeet and/or their user profile. Ability to change user name.

Chat Improvements

    Rich Text Support: Implementing rich text support in the chat.
    Tying chat to user account: Whenever a user posts in chat, that should be linked to their profile.
    Chat notifications: Notifying those present in a chat session that a user has joined or left.

Additional Features

    OAuth Integration: Implementing OAuth with NextAuth for more streamlined and secure logins via existing Google or Facebook accounts.
    Mobile Responsiveness: Ensuring the app is fully responsive and provides a great experience on mobile devices.

Performance and Security

    Optimization: Continuously optimizing the application for better performance.
    Security Enhancements: Implementing additional security measures to protect user data.


**Getting Started**

To get a local copy up and running, follow these simple steps:

    Clone the repo

    sh



Install NPM packages

sh

npm install



**License**

Distributed under the MIT License. See LICENSE for more information.
Contact

Kirill Antipov - kirill.antipov@gmail.com

