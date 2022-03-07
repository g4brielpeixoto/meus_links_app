export interface Link {
  id: number
  title: string
  url: string
  active: boolean
}

export interface User {
  id: number
  email: string
  name: string
  username: string
  validate: boolean
  links: Array<Link>
}