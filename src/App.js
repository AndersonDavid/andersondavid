import React from 'react';
import SideBar from './components/sidebar/SideBar';
import Content from './components/content/Content';
import './App.css'


function App() {
  return (
    <div className="App">
      <SideBar className='component-sidebar' />
      <Content className='component-content' />
    </div>
  );
}

export default App;
