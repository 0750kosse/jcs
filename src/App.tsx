import React from 'react';
import styled from 'styled-components'
import { mediaQueries } from './mediaqueries'
import NavBar from './components/Navbar'
import { profile, projects, about, contact } from './lib/data';
import Profile from './components/Profile'
import Info from './components/Info'
import Project from './components/Projects'

const ColToRowWrapper = styled.div`
display: flex;
flex-direction: column;
align-items:center;
${mediaQueries("tablet")`
flex-flow:row wrap; 
justify-content: space-evenly;
`} `

const App = () => {
  return (
    <div className="App">
      <NavBar
      />
      <Profile
        header={profile.header}
        subheader={profile.subheader}
        ctaText={profile.ctaText}
        image={profile.image}
      />
      <Info
        title={about.title}
        description={about.description} />
      <ColToRowWrapper className="project__wrapper">
        {projects.map((project, index) => {
          const { header, subheader, stack, demo, github } = project
          return <Project
            key={index}
            header={header}
            subheader={subheader}
            stack={stack}
            demo={demo}
            github={github}
          />
        })
        }
      </ColToRowWrapper>
      <Info
        title={contact.title}
        description={contact.description} />
    </div>
  );
}

export default App;
