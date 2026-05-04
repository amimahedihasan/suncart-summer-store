'use client'
import Image from "next/image";
import Link from "next/link";

import image from "@/assets/pic.png";
import NavLink from "./NavLink";

import { Avatar, Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handelSignOut = async () => {
    await authClient.signOut();
  };

  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r from-orange-50 via-white to-yellow-50 border-b sticky top-0 z-50">

      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full px-4">

        {/* Logo */}
        <div className="flex gap-3 items-center">
          <Image
            src={image}
            alt="img"
            height={45}
            width={45}
            className="rounded-xl"
          />
          <h3 className="font-black text-lg text-orange-500 tracking-wide">
            SunCart
          </h3>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/products">Products</NavLink>
          </li>
          <li>
            <NavLink href="/profile">My Profile</NavLink>
          </li>
        </ul>

        {/* Desktop Right Section */}
        <div className="hidden md:flex gap-4 items-center">

          {!user && (
            <ul className="flex items-center gap-2 text-sm font-medium">
              <li>
                <Link
                  href={"/signup"}
                  className="px-3 py-1 rounded-lg text-orange-600 hover:bg-orange-100 transition"
                >
                  SignUp
                </Link>
              </li>
              <li>
                <Link
                  href={"/signin"}
                  className="px-3 py-1 rounded-lg text-gray-700 hover:bg-gray-100 transition"
                >
                  SignIn
                </Link>
              </li>
            </ul>
          )}

          {user && (
            <div className="flex items-center gap-3 px-3 py-1 rounded-2xl bg-white/60 backdrop-blur-md shadow-sm border border-orange-100">

              <h2 className="font-semibold text-orange-600 text-sm">
                Hey, {user.name}
              </h2>

              <Avatar className="ring-2 ring-orange-200">
                <Avatar.Image
                  alt="user"
                  src={user.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>
                  {user.name?.[0]}
                </Avatar.Fallback>
              </Avatar>

              <Button
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-medium rounded-xl px-4 py-2 hover:from-orange-600 hover:to-orange-700 transition"
                onClick={handelSignOut}
              >
                SignOut
              </Button>

            </div>
          )}

        </div>

        {/* Mobile Menu Button (Improved 3-dot style) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-white/70 backdrop-blur-md border border-orange-100 shadow-sm hover:shadow-md transition-all duration-300 active:scale-95"
        >
          <div className="flex flex-col gap-[5px]">
            <span
              className={`h-[2px] w-5 bg-orange-500 rounded-full transition-all duration-300 ${
                open ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`h-[2px] w-5 bg-orange-500 rounded-full transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[2px] w-5 bg-orange-500 rounded-full transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </div>
        </button>

      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 bg-white/80 backdrop-blur-md border-t">

          <div className="flex flex-col gap-3 mt-3 text-sm font-medium">

            <NavLink href="/" onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink href="/products" onClick={() => setOpen(false)}>Products</NavLink>
            <NavLink href="/profile" onClick={() => setOpen(false)}>My Profile</NavLink>

            {!user && (
              <div className="flex flex-col gap-2 mt-2">
                <Link
                  href="/signup"
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-lg text-orange-600 bg-orange-50"
                >
                  SignUp
                </Link>

                <Link
                  href="/signin"
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-lg text-gray-700 bg-gray-50"
                >
                  SignIn
                </Link>
              </div>
            )}

            {user && (
              <div className="flex flex-col gap-3 mt-2">

                <div className="flex items-center gap-3">
                  <Avatar className="ring-2 ring-orange-200">
                    <Avatar.Image src={user.image} />
                    <Avatar.Fallback>{user.name?.[0]}</Avatar.Fallback>
                  </Avatar>

                  <p className="text-orange-600 font-semibold">
                    {user.name}
                  </p>
                </div>

                <Button
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl"
                  onClick={handelSignOut}
                >
                  SignOut
                </Button>

              </div>
            )}

          </div>

        </div>
      )}

    </div>
  );
};

export default Navbar;