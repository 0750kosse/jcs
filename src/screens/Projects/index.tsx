import React from 'react';
import styled from 'styled-components'
import { mediaQueries } from '../../mediaqueries'
import Project from '../../components/Project'
import { projects } from '../../lib/data'

const ColToRowWrapper = styled.div`
display: flex;
flex-direction: column;
align-items:center;
${mediaQueries("tablet")`
flex-flow:row wrap; 
justify-content: space-evenly;
`} `

export default () => {
  return (
    <>
      <ColToRowWrapper className="project__wrapper" id="projects">
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
    </>
  )
}