import { ProjectProps, ProfileProps } from '../types'

const projects: ProjectProps[] = [
  {
    header: 'St. Joseph´s Highgate',
    subheader: 'Website revamping for a responsive, modern and accessible feel',
    stack: 'HTML, CSS, JS',
    demo: 'https://demo-stjosephs.netlify.app/',
    github: 'https://github.com/0750kosse/StJosephs'
  },
  {
    header: 'PetBuddy',
    subheader: 'Where your pet becomes their buddy',
    stack: 'ReactJs, Typescript',
    demo: 'Coming soon',
    github: 'https://github.com/t0nin0s/petbuddy-website'
  }
]

const profile: ProfileProps = {
  header: "Front End Dev for Hire",
  subheader: "Hey there, I'm Jose! I'm a passionate software. Currently living in London and originally from Barcelona (...yes, I know) For the past two years, I've been teaching myself to code and currently seeking an entry level Front End Dev role",
  image: '',
  cta: true,
  ctaText: ['Learn More', 'Contact']
}

export { projects, profile }