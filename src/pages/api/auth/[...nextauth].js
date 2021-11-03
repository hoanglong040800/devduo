import { getMentorById } from 'modules/mentor/fetch-mentors'
import { getUserByEmail } from 'modules/user/fetch-users'
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
    jwt: async (token, user) => {
      if (user) {
        const data = await getUserByEmail(process.env.API_URL, token['email'])

        if (data) {
          token['id'] = data.id
          const profile = await getMentorById(process.env.API_URL, data.id)
          token['thumnail'] = profile.thumnail
          token['full_name'] = profile.full_name
        } else token['id'] = 0
      }

      return Promise.resolve(token)
    },

    session: async (session, token) => {
      session.user.id = token.id
      session.user.thumnail = token.thumnail
      session.user.full_name = token.full_name

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
