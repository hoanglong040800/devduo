import { loginByEmail } from 'modules/auth/fetch-auth'
import { getMentorById } from 'modules/mentor/fetch-mentors'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const apiUrl=process.env.API_URL

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
        const data = await loginByEmail(apiUrl, token['email'])

        if (data) {
          token['id'] = data.user_id
          token['mentor_id'] = data.mentor_id
        } else token['id'] = 0
      }

      return Promise.resolve(token)
    },

    session: async (session, token) => {
      const profile = await getMentorById(apiUrl, token.id)
      session.user.id = token.id
      session.user.mentor_id = token.mentor_id
      session.user.thumbnail = profile.thumbnail
      session.user.full_name = profile.full_name

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
