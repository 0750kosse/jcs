import React from 'react';
import NavBar from './components/Navbar'
import About from './screens/About'
import Projects from './screens/Projects'
import Contact from './screens/Contact'

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
