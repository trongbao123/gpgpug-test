import Credentials from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import { BASE_URL, serverkit_instance_id, serverkit_project_id } from "@component/configs/setting";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                const res = await fetch(`${BASE_URL}/user/login`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        serverkit_instance_id: serverkit_instance_id,
                        serverkit_project_id: serverkit_project_id,
                    },
                    body: JSON.stringify({
                        email: credentials?.email,
                        password: credentials?.password,
                    }),
                });

                const tokenResponse = await res.json();
                const token = tokenResponse && tokenResponse.token;

                if (!token) {
                    throw new Error("User not found.");
                }
                const user: any = {
                    email: credentials.email as string,
                    token: token as string,
                };
                return user;
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.accessToken = user.token;
            }
            return token;
        },
        async session({ session, token }) {
            session.accessToken = token.accessToken as string;
            return session;
        },
    },
});
