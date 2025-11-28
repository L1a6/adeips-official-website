import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { supabaseAdmin } from './supabase';
import bcrypt from 'bcryptjs';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Email and password required');
        }

        // Fetch admin user from Supabase
        const { data: admin, error } = await supabaseAdmin
          .from('admin_users')
          .select('*')
          .eq('email', credentials.email)
          .single();

        if (error || !admin) {
          throw new Error('Invalid credentials');
        }

        // Verify password
        const isValidPassword = await bcrypt.compare(
          credentials.password,
          admin.password_hash
        );

        if (!isValidPassword) {
          throw new Error('Invalid credentials');
        }

        // Update last login
        await supabaseAdmin
          .from('admin_users')
          .update({ last_login: new Date().toISOString() })
          .eq('id', admin.id);

        return {
          id: admin.id,
          email: admin.email,
          name: admin.name,
          role: admin.role,
        };
      },
    }),
  ],
  pages: {
    signIn: '/admin/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as string;
      }
      return session;
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60, // 24 hours
  },
  secret: process.env.NEXTAUTH_SECRET,
};