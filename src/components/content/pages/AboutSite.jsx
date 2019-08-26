import React from 'react';

function AboutSite() {
  return (
    <div className='wrapper aboutsite'>
      <div className='container-content container-aboutsite'>
        <h2>And this WebPage?</h2>
        <p>Sometime we need to test our skills, so I like to create random projects,
          about random things and this time I decide to write line by line of own website. don't is a portfolio, just a toy for learning. :)</p>
        <p>Is a simple and unique page made with ReactJS, Redux to share the current page, and little CSS. Is simple because I made it in less 8 hours.</p>
        <p>The tools that I used:</p>
        <div className="lists">
          <ul>
            <li>
              <a href="https://reactjs.org/">ReactJS</a>
            </li>
            <li>
              <a href="https://material.io/tools/icons/">Google Material Font</a>
            </li>
            <li>
              <a href="https://code.visualstudio.com/">Visual Studio Code</a>
            </li>
            <li>
              <a href="https://redux.js.org">Redux</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="https://www.youtube.com/user/NoCopyrightSounds">NoCopyrightSounds</a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCvmUdL2NHWlj1NRiNJPI-TQ">EDM Bot</a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCiTrmGJsu8SuUh8N0crqlHQ">DIL34N</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AboutSite