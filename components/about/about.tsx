import React, { Fragment } from 'react';

function About() {
  return (
    <Fragment>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold dark:text-white mb-3">About</h1>
        <p className="text-lg mb-8 dark:text-white">
          <strong>Important!</strong> As of now, this site only supports <strong>Chrome-based browers</strong>. Support will be added for other browsers in future!
        </p>
        <p className="text-lg mb-8 dark:text-white">
          <strong>Tabletop Manager</strong> is designed to streamline your D&D experience, offering tools for managing characters, campaigns, and real-time interactions with fellow players. From character sheet creation to campaign management, the platform brings everything you need to the table, ensuring a seamless and immersive gameplay experience.
        </p>
        <h2 className="text-xl font-semibold dark:text-white mb-4">Work in Progress</h2>
        <p className="text-lg mb-4 dark:text-white">
          The site is in the midst of being actively developed and refined with a focus on adding features and enhancing user experience. Currently the following is in place with more to come:
        </p>
        <ul className="list-disc pl-5 mb-4 dark:text-white">
          <li>User authentication</li>
          <li>Character & Campaign creation</li>
          <li>Campaign & Character view</li>
          <li>User dashboard</li>
        </ul>
        <p className="text-lg mb-4 dark:text-white">
          Up next work will be done on more browser support, live sessions, UX improvements, and adding other various features to make the site more robust to follow its original vision.
        </p>
      </div>
    </Fragment>
  );
}

export default About;
