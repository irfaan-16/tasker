// import client from "@/lib/db";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { sql } from "@vercel/postgres";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      try {
        const { rowCount } =
          await sql`select id from users where email=${user?.email}`;
        if (!rowCount) {
          const newUser =
            await sql`insert into users (name,email) values(${user?.name},${user?.email})`;
          console.log(newUser);
        }
        return true;
      } catch (err) {
        return false;
      }
    },
    async session({ session }) {
      const { rows } =
        await sql`select id from users where email=${session.user.email}`;
      const userID = rows[0].id;
      session.user.dbID = userID;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
