import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorizationUrl:
        'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
      scope:
        'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email',
    }),
  ],

  callbacks: {
    signIn: async (token, user, account) => {
      return Promise.resolve(token)
    },

    session: async (session, user) => {
      session.user.id = 1
      return Promise.resolve(session)
    },
  },

  theme: {
    colorScheme: 'light',
    brandColor: '#1e88e5',
    logo: '/devduo.svg',
  },
}

export default NextAuth(options)
