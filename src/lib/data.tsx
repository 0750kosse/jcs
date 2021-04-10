import { ProjectProps, ProfileProps, InfoProps } from '../types'

const projects: ProjectProps[] = [
  {
    header: 'St. Joseph´s Highgate',
    subheader: 'Website revamping for a responsive, modern and accessible feel',
    stack: 'HTML, CSS, Vanilla JS',
    demo: 'https://demo-stjosephs.netlify.app/',
    github: 'https://github.com/0750kosse/StJosephs'
  },
  {
    header: 'PetBuddy',
    subheader: 'Where your pet becomes their buddy',
    stack: 'ReactJs, Typescript',
    demo: 'Coming soon',
    github: 'https://github.com/t0nin0s/petbuddy-website'
  },
  {
    header: 'PetBuddy',
    subheader: 'Where your pet becomes their buddy',
    stack: 'ReactJs, Typescript',
    demo: 'Coming soon',
    github: 'https://github.com/t0nin0s/petbuddy-website'
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
  header: "Front End Dev",
  subheader: "Hey there, I'm Jose! I'm a passionate software developer. Currently living in London and originally from Barcelona. For the past two years, I've been teaching myself to code and currently seeking an entry level Front End Dev role",
  image: '',
  cta: true,
  ctaText: ['Learn More', 'Contact']
}

const about: InfoProps = {
  title: 'Projects',
  description: "Find below a few side projects that I have been building from scratch in which I put to use the different languages learnt. Next stop in my learning bucket list are Python and Svelte, so watch this space…"
}

const contact: InfoProps = {
  title: 'Get in touch',
  description: 'It will be great to hear from you! Feel free to contact me for questions, or just to say hola!'
}

export { projects, profile, about, contact }