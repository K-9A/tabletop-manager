This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Table of Contents
- [Description](#description)
- [Tech Stack](#tech-stack)
- [Project Status](#project-status)
- [Future Roadmap](#future-roadmap)
- [Getting Started](#getting-started)
- [License](#license)
- [Acknowledgements](#acknowledgements)


## <a id="description"></a>Description

This web application is a solo-developed and designed, ongoing project that serves as a comprehensive platform for Dungeons and Dragons players and Dungeon Masters, providing tools to create, manage, and view character sheets and campaigns. Built with a modern tech stack including React, Next.js, and Tailwind CSS, the application offers a seamless and interactive user experience.
Table of Contents



## <a id="tech-stack"></a>Tech Stack

    Frameworks: React, Next.JS
    UI/Styling: Tailwind, Material UI Tailwind, Framer Motion
    Languages & Linters: TypeScript, ESLint
    Authentication: NextAuth (Traditional login, with plans for OAuth)
    Libraries & Tools: bcrypt, NanoID, Redux + Toolkit + Thunk, Axios, Socket.Io, Formik, Yup, express rate limit micro, validator
    Database: MySQL
    Routing: File-based routing (Next.js)
    Deployment: DigitalOcean
    Logging: Winston, Sentry

## <a id="project-status"></a>Project Status

The project is currently in active development, with essential packages installed and a ready MySQL schema. The application features a variety of pages and functionalities, including user authentication, character sheet creation, and very basic real-time chat.

**Features**

    Standard User Authentication (Registration, Login, Logout)
    Character Sheet Creation and Viewing
    Campaign Creation and Listing
    Real-Time Chat
    Basic Alerting System
    Redux Store + Thunk Setup
    MySQL + Schema Setup
    Socket.IO Broadcasting

## <a id="future-roadmap"></a>Future Roadmap

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


## <a id="getting-started"></a>Getting Started

To get a local copy up and running, follow these simple steps:

    Clone the repo

    sh



Install NPM packages

sh

npm install



## <a name="license"></a>License

Distributed under the MIT License. See LICENSE for more information.
Contact

Kirill Antipov - kirill.antipov@gmail.com





## <a id="acknowledgements"></a>Acknowledgements

I would like to express my sincere gratitude to all the developers and contributors of the technologies I've used in this project. Your hard work and dedication have made it possible for developers like me to bring our ideas to life.

    React and Next.js: Thank you for providing the robust frameworks that serve as the backbone of this application, enabling server-side rendering and efficient development practices.
    Tailwind CSS, Material UI Tailwind, and Framer Motion: Your libraries have been instrumental in creating a seamless and visually appealing user interface.
    TypeScript: Thank you for adding type safety to JavaScript, making the codebase more robust and maintainable.
    ESLint: Your tool has been invaluable in maintaining code quality and consistency throughout the project.
    NextAuth.js: For providing a secure and easy-to-implement authentication solution.
    bcrypt, NanoID, Redux, Redux Toolkit, Redux Thunk, Axios, Socket.IO, Formik, Yup, express-rate-limit, micro, validator: Each of these libraries and tools has played a crucial role in various functionalities of the       application, from security to state management, and data validation.
    MySQL: For providing a reliable and scalable database solution.
    DigitalOcean: For offering a platform that supports all the technologies used in this project, making deployment smooth and efficient.
    Winston: For assisting in implementing comprehensive logging throughout the application, ensuring that any issues can be quickly identified and resolved.

And last but not least, a huge thank you to GitHub for hosting the code and providing a platform for version control.

Your contributions to the open-source community are invaluable, and this project would not have been possible without your efforts.
