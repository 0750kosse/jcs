export interface ProjectProps {
  header: string,
  subheader: string;
  stack: string;
  demo: string;
  github: string;
  image?: any;
}

export interface ProfileProps {
  id?: string,
  header: string,
  subheader: string,
  image?: any,
  cta?: boolean,
  ctaText?: string[]
}

export interface InfoProps {
  id?: string,
  title: string,
  description: string
}

export interface NavBarProps {
  scrollY?: any
}
