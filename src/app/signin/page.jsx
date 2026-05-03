'use client'
import { Check } from '@gravity-ui/icons';
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import {Icon} from "@iconify/react";
import { authClient } from '@/lib/auth-client';
const SignInPage = () => {


    const onSubmit = async (e) => {
        e.preventDefault();

    const email = e.target.email.value;

        const password = e.target.password.value;
        

        const { data, error } = await authClient.signIn.email({
            email: email, // required
            password: password, // required
            rememberMe: true,
            callbackURL: "/",
        });
        if (error) {
      alert("SignIn Failed");
    } else {
      alert("SignIn Successfully Your Account");
    }
    }

     const handelGoogleSignIn = async () => {
         const data = await authClient.signIn.social({
            provider: "google",
        });
    }



    return (
       <Card className="border mx-auto  py-10 my-5">
      <h1 className="text-center text-2xl font-bold">Sign In</h1>

      <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="Enter your mail" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>
            {/* slkfjlsdfjs dfl  */}
        <div className="flex gap-2">
          <Button type="submit">
            <Check />
            Submit 
          </Button>
              </div>
              <Link href='/signup'>
                  <p className="text-red-500">Do not have an account? Register here</p>
              </Link>
          </Form>


          <p className="text-center font-bold text-red-500">Or</p>
          
          <Button className="w-full" variant="tertiary" onClick={handelGoogleSignIn}>
        <Icon icon="devicon:google" />
        Sign in with Google
      </Button>
          
          
    </Card>
    );
};

export default SignInPage;