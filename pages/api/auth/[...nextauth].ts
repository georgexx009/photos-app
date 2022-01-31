import NextAuth, { NextAuthOptions } from 'next-auth'
import Providers from 'next-auth/providers'
import { githubEmailsURL } from 'constants/external-endpoints'

const options: NextAuthOptions = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
  ],
  callbacks: {
    signIn: async (profile, account, metadata) => {
      const res = await fetch(githubEmailsURL, {
          headers: {
              'Authorization': `token ${account.accessToken}`
          }
      })
      const emails = await res.json()
      if (!emails || emails.length === 0) {
          return false
      }
      const sortedEmails = emails.sort((a, b) => b.primary - a.primary)
      profile.email = sortedEmails[0].email

      return true
    },
  }
}

export default (req, res) => NextAuth(req, res, options)
