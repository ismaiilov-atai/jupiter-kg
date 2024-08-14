import Google from "next-auth/providers/google"
import type { NextAuthConfig } from "next-auth"

// uses for localization, has to be inside the config.ts
export const locales = ['ru', 'en', 'kg'];

// Notice this is only an object, not a full Auth.js instance
export const authConfig = {
  providers: [Google({
    authorization: {
      params: {
        prompt: "consent",
        access_type: "offline",
        response_type: "code",
      },
    },
    profile(profile) {
      return {
        id: profile.sub,
        name: profile.given_name,
        email: profile.email,
        role: profile.role ? profile.role : 'user',
        image: profile.picture
      }
    }
  }),
  ],
} satisfies NextAuthConfig