export interface Session {
  user: {
    name: string,
    email: string,
    image: string
  },
  accessToken: string,
  expires: string
}