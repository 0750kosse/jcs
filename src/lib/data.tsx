import { ProjectProps, ProfileProps, InfoProps } from '../types'

const projects: ProjectProps[] = [
  {
    header: 'St. Joseph´s',
    subheader: 'A project to revamp the existing church website for a responsive, mobile-first, modern and accessible feel.',
    stack: 'HTML, CSS, and Vanilla JS',
    demo: 'https://demo-stjosephs.netlify.app/',
    github: 'https://github.com/0750kosse/StJosephs'
  },
  {
    header: 'PetBuddy',
    subheader: 'A commercial project building a responsive, writing clean, reusable code for a local pet business.',
    stack: 'ReactJs, Typescript, React testing library',
    demo: 'Coming soon',
    github: 'https://github.com/t0nin0s/petbuddy-website'
  },
  {
    header: 'Netfailx',
    subheader: 'Bored at home...? Check out this movie search engine which uses the Open Movie Database API.',
    stack: 'React, Javascript, Jest & Enzyme',
    demo: 'https://netfailx.netlify.app',
    github: 'https://github.com/0750kosse/movieapp-react'
  },
  {
    header: 'Domino ́s Pizza',
    subheader: 'Hungry after the movie...? Then use my online takeaway pizza application...',
    stack: 'Node, Express, Mongoose, AWS, MongoDB',
    demo: 'https://pizzadominos.herokuapp.com/',
    github: 'https://github.com/0750kosse/restful-pizza'
  }
]

const profile: ProfileProps = {
  id: '',
  header: "Front End Dev",
  subheader: "Hey there, I'm Jose! I'm a passionate software developer. Currently living in London and originally from Barcelona. For the past two years, I've been teaching myself to code and currently seeking an entry level Front End Dev role",
  image: '',
  cta: true,
  ctaText: ''
}

const about: InfoProps = {
  id: '',
  title: 'Projects',
  description: "Find below a few side projects that I have been building from scratch in which I put to use the different languages learnt. Next stop in my learning bucket list are Python and Svelte, so watch this space…"
}

const contact: InfoProps = {
  id: '',
  title: 'Get in touch',
  description: 'It will be great to hear from you! Feel free to contact me for questions, or just to say hola!'
}

export { projects, profile, about, contact }