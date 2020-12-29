import React, { useState } from 'react';

import './App.css';

import { Header } from './components/Header';
import BackgroundPhoto from './assets/photo-1609146373501-1c45dcbf2643.jpeg';

function App() {
  const [projects, setProjects] = useState(['Desenvolvimento de app', 'Sites com ReactJS']);

  function handleAddProject() {
    setProjects([...projects, `Novo projeto ${Date.now()}`]);
    
    console.log(projects);
  }

  return (
    <>
      <Header title="Home">
        <img width={300} src={BackgroundPhoto}/>

        <ul>
          {projects.map(project => <li key={project}>{project}</li>)}
        </ul>

        <button type="button" onClick={handleAddProject}>Adicionando projeto</button>
      </Header>
    </>
  );
}

export default App;
