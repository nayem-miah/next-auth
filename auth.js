
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "./lib/mongoClientPromise";
import Credentials from "next-auth/providers/credentials"
import { userModel } from "./models/user-model";
import { dbConnect } from "./lib/mongo";

export const {
    handlers:{GET,POST},
    auth,
    signIn,
    signOut
} = NextAuth({

  adapter: MongoDBAdapter(clientPromise, {databaseName: process.env.ENVIRONMENT}),

  session: {
    strategy: 'jwt',
  },

  providers: [

    Credentials({
      credentials: {
        email: {},
        password: {}
      },
      async authorize(credentials){
        if(credentials ===null) return null;
        await dbConnect();
        try{
          const user = await userModel.findOne({email: credentials?.email})
    
          if(user){
            const isMatch = user?.password === credentials?.password;
            if (isMatch){
              return user
            }else{
              throw new Error('Email or Password is not correct')
            }
          } else{
            throw new Error("Email or Password is not correct")
          }
        }catch(e){
          throw new Error(e)
        }

      }
    
    }),
      
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),

    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ]
  
});
