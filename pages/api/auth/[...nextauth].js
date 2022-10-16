import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId:
        '72619605494-k89annr36nopesv3b2dob90mu4vrls5f.apps.googleusercontent.com',
      clientSecret: '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',
    }),
    // ...add more providers here
  ],
};
export default NextAuth(authOptions);
