import CredentialsProvider from "next-auth/providers/credentials";

import dbConnect, { collectionNames } from "@/lib/dbConnect";
import GoogleProvider from "next-auth/providers/google";

// Define the authOptions separately
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log("credentials from auth", credentials);
        const { username, password } = credentials;
        const user = await dbConnect(collectionNames.TEST_USER).findOne({
          username,
        });
        const isPasswordOk = password == user.password;

        // Replace this with real verification logic (e.g., fetch from DB)
        // const user = {
        //   id: "1",
        //   name: "J Smith",
        //   email: "jsmith@example.com",
        // };

        if (isPasswordOk) {
          return user;
        } else {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account) {
        // console.log('from signin',{ user, account, profile, email, credentials })
        try {
          const { providerAccountId, provider } = account;
          const { email: user_email, name, image } = user;
          const payload = {
            role:'user',
            providerAccountId,
            provider,
            email: user_email,
            name,
            image,
          };
          console.log("from signin callback", payload);

          const userCollection = dbConnect(collectionNames.TEST_USER);
          const isUserExist =await userCollection.findOne({ providerAccountId });
          console.log('isUserExist','providerAccountId',isUserExist,providerAccountId)
          if (!isUserExist) {
           const result = await userCollection.insertOne(payload);
           console.log('result',result)
          }
        } catch (err) {
          console.log(err);
          return false;
        }
      }

      return true;
    },
    async session({ session, token, user }) {
      if (token) {
        session.user.username = token.username;
        session.user.role = token.role;
      }
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.username = user.username;
        token.role = user.role;
      }
      return token;
    },
  },
  // session: {
  //   strategy: "jwt", // optional; can also use "database" strategy if needed
  // },
  // secret: process.env.NEXTAUTH_SECRET, // Make sure this is defined in .env.local
  // You can also configure callbacks, events, etc. here if needed
};
