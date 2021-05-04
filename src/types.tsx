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
  ctaText?: string

}

export interface InfoProps {
  id?: string,
  title: string,
  description: string
}

export interface NavBarProps {
  scrollY?: any
}

export interface ButtonProps {
  href?: string,
  children?: React.ReactNode
  type?: string,
  value?: string,
  target?: string,
  rel?: string,
  ctaText?: string,
  id?: string,
  onClick?: (e: React.MouseEvent) => void
}