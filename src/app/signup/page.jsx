'use client'
import { authClient } from "@/lib/auth-client";
import { Check, ArrowRotateLeft } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const SignUpPage = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const image = e.target.image.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      image,
      password,
    });

    if (error) {
      toast.error("SignUp Failed: Email already exists or invalid data.");
    } else {
      toast.success("Account created successfully! Welcome to SunCart.");
      setTimeout(() => router.push('/signin'), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 flex items-center justify-center p-4">
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
      
      <Card className="w-full max-w-md border-none shadow-2xl bg-white/80 backdrop-blur-md p-8 rounded-3xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-orange-500 to-yellow-600 bg-clip-text text-transparent">
            SunCart
          </h1>
          <p className="text-gray-500 mt-2 font-medium">Join the summer vibe!</p>
          <h2 className="text-xl font-semibold text-gray-800 mt-4">Create your account</h2>
        </div>

        <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
          <TextField isRequired name="name" type="text" className="group">
            <Label className="text-sm font-semibold text-gray-700 ml-1">Full Name</Label>
            <Input 
              placeholder="Enter your name" 
              className="mt-1 transition-all duration-200 border-gray-200 focus:border-orange-400 rounded-xl"
            />
            <FieldError className="text-xs text-red-500 mt-1" />
          </TextField>

          <TextField isRequired name="image" type="text">
            <Label className="text-sm font-semibold text-gray-700 ml-1">Profile Image URL</Label>
            <Input 
              placeholder="https://example.com/photo.jpg" 
              className="mt-1 transition-all duration-200 border-gray-200 focus:border-orange-400 rounded-xl"
            />
            <FieldError className="text-xs text-red-500 mt-1" />
          </TextField>

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
            <Label className="text-sm font-semibold text-gray-700 ml-1">Email Address</Label>
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
            <Label className="text-sm font-semibold text-gray-700 ml-1">Password</Label>
            <Input 
              placeholder="••••••••" 
              className="mt-1 transition-all duration-200 border-gray-200 focus:border-orange-400 rounded-xl"
            />
            <Description className="text-[10px] text-gray-400 mt-1 leading-tight">
              Min 8 chars, 1 uppercase, 1 number
            </Description>
            <FieldError className="text-xs text-red-500 mt-1" />
          </TextField>

          <div className="flex flex-col gap-3 mt-4">
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-6 rounded-xl transition-all duration-300 shadow-lg shadow-orange-200"
            >
              <Check className="mr-2" />
              Sign Up
            </Button>
            <Button 
              type="reset" 
              variant="flat" 
              className="w-full text-gray-500 font-medium hover:bg-gray-100 rounded-xl"
            >
              <ArrowRotateLeft className="mr-2" />
              Reset Form
            </Button>
          </div>
        </Form>

        <div className="mt-8 text-center">
          <Link href="/signin" className="group">
            <p className="text-gray-600 text-sm">
              Already have an account? 
              <span className="text-orange-600 font-bold ml-1 group-hover:underline transition-all">
                Login
              </span>
            </p>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default SignUpPage;