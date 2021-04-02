import React from 'react';
import NavBar from './components/Navbar'
import { profile } from './lib/data';
import Profile from './components/Profile'

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Profile
        header={profile.header}
        subheader={profile.subheader}
        ctaText={profile.ctaText}
        image={profile.image}
      />
    </div>
  );
}

export default App;
