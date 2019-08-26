import React from 'react';

function Contact() {
  return (
    <div className='wrapper contact'>
      <div className='container-content container-contact'>
        <h2>Wanna talk with me?</h2>
        <p>Above you acess all my social media and more:</p>
        <div className="lists">
          <ul>
            <li>
              <a href="https://fb.com/ndersondavid">Facebook</a>
            </li>
            <li>
              <a href="https://instagram.com/sayf_you">Instagram</a>
            </li>
            <li>
              <a href="https://twitter.com/ndersondavid">Twitter</a>
            </li>
            <li>
              <a href="mailto:andersondavidprofissional@gmail.com?Subject=Hello%20David">andersondavidprofissional@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contact