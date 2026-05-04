'use client'
import { Check } from '@gravity-ui/icons';
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { Icon } from "@iconify/react";
import { authClient } from '@/lib/auth-client';

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignInPage = () => {

  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email: email,
      password: password,
      rememberMe: true,
      callbackURL: "/",
    });

    if (error) {
      toast.error("Invalid email or password");
    } else {
      toast.success("Login successful");
    }
  }

  const handelGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 flex items-center justify-center p-4">

      <ToastContainer position="top-right" autoClose={3000} theme="colored" />

      <Card className="w-full max-w-md border-none shadow-2xl bg-white/80 backdrop-blur-md p-8 rounded-3xl">

        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-orange-500 to-yellow-600 bg-clip-text text-transparent">
            SunCart
          </h1>
          <p className="text-gray-500 mt-2 font-medium">Welcome back</p>
          <h2 className="text-xl font-semibold text-gray-800 mt-4">
            Sign in to your account
          </h2>
        </div>

        <Form className="flex flex-col gap-5" onSubmit={onSubmit}>

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
            <Label className="text-sm font-semibold text-gray-700 ml-1">
              Email Address
            </Label>
            <Input
              placeholder="you@example.com"
              className="mt-1 transition-all duration-200 border-gray-200 focus:border-orange-400 rounded-xl"
            />
            <FieldError className="text-xs text-red-500 mt-1" />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) return "Password must be at least 8 characters";
              if (!/[A-Z]/.test(value)) return "Need at least one uppercase letter";
              if (!/[0-9]/.test(value)) return "Need at least one number";
              return null;
            }}
          >
            <Label className="text-sm font-semibold text-gray-700 ml-1">
              Password
            </Label>
            <Input
              placeholder="Enter your password"
              className="mt-1 transition-all duration-200 border-gray-200 focus:border-orange-400 rounded-xl"
            />
            <Description className="text-[10px] text-gray-400 mt-1 leading-tight">
              Min 8 chars, 1 uppercase, 1 number
            </Description>
            <FieldError className="text-xs text-red-500 mt-1" />
          </TextField>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-6 rounded-xl transition-all duration-300 shadow-lg shadow-orange-200"
          >
            <Check className="mr-2" />
            Sign In
          </Button>

          <Link href="/signup">
            <p className="text-center text-sm text-gray-600 mt-2">
              Do not have an account?
              <span className="text-orange-600 font-bold ml-1 hover:underline transition-all">
                Register
              </span>
            </p>
          </Link>

        </Form>

        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-[1px] bg-gray-200"></div>
          <p className="text-xs text-gray-400">OR</p>
          <div className="flex-1 h-[1px] bg-gray-200"></div>
        </div>

        <Button
          className="w-full flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 shadow-sm hover:shadow-md transition-all"
          variant="tertiary"
          onClick={handelGoogleSignIn}
        >
          <Icon icon="devicon:google" />
          Sign in with Google
        </Button>

      </Card>
    </div>
  );
};

export default SignInPage;