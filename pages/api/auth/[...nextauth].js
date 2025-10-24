import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import dbConnect from "../../../lib/mongodb";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // For simplicity, using a hardcoded admin user
        // No database connection needed for basic auth
        const adminEmail = process.env.ADMIN_EMAIL;
        const adminPassword = process.env.ADMIN_PASSWORD;

        if (credentials.email === adminEmail) {
          console.log("Authorize attempt for:", credentials.email);
          let isValid = false;
          try {
            // If ADMIN_PASSWORD looks like a bcrypt hash, compare with bcrypt
            if (
              typeof adminPassword === "string" &&
              adminPassword.startsWith("$2")
            ) {
              isValid = await bcrypt.compare(
                credentials.password,
                adminPassword
              );
            } else {
              // Otherwise fall back to plain-text comparison (development only)
              isValid = credentials.password === adminPassword;
            }
          } catch (e) {
            // If bcrypt fails for any reason, do not authenticate
            console.error("Auth compare error", e);
            isValid = false;
          }

          if (isValid) {
            return { id: 1, email: adminEmail, name: "Admin" };
          }
        }

        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/admin/login",
  },
};

export default NextAuth(authOptions);
