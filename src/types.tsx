export interface ProjectProps {
  header: string,
  subheader: string;
  stack: string;
  demo: string;
  github: string;
  image?: any;
}

export interface ProfileProps {
  header: string,
  subheader: string,
  image?: any,
  cta?: boolean,
  ctaText?: string[]
}

export interface AboutSection {
  title: string,
  description: string
}
