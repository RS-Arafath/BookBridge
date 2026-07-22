import { betterAuth } from 'better-auth';
import { MongoClient } from 'mongodb';
import { mongodbAdapter } from 'better-auth/adapters/mongodb';

console.log('=== ENV CHECK ===');
console.log('MONGODB_URI:', process.env.MONGODB_URI ? 'SET' : 'MISSING');
console.log(
  'BETTER_AUTH_URL:',
  process.env.BETTER_AUTH_URL ? 'SET' : 'MISSING',
);
console.log(
  'BETTER_AUTH_SECRET:',
  process.env.BETTER_AUTH_SECRET ? 'SET' : 'MISSING',
);
console.log(
  'GOOGLE_CLIENT_ID:',
  process.env.GOOGLE_CLIENT_ID ? 'SET' : 'MISSING',
);
console.log(
  'GOOGLE_CLIENT_SECRET:',
  process.env.GOOGLE_CLIENT_SECRET ? 'SET' : 'MISSING',
);
console.log('==================');

const client = new MongoClient(process.env.MONGODB_URI || '');
const db = client.db('bookBridge');

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL,
  trustedOrigins: [process.env.BETTER_AUTH_URL || ''],
  database: mongodbAdapter(db, {
    client,
  }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
  account: {
    accountLinking: {
      enabled: true,
      trustedProviders: ['google'],
    },
  },
});
