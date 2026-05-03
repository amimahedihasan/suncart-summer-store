'use client'
import Image from "next/image";
import Link from "next/link";

import image from "@/assets/pic.png";
import NavLink from "./NavLink";

import { Avatar, Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handelSignOut =async () => {
    await authClient.signOut();
  }
    return (
        <div>
            <div className="border-b px-2">
        <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
          <div className="flex gap-2 items-center">
            <Image src={image} alt="img" height={50} width={50}></Image>
            <h3 className="font-black text-lg text-orange-500">SunShop.</h3>
          </div>

          <ul className="flex items-center gap-5 ">
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

         <div className="flex gap-4">
          
            {!user && (
            <ul className="flex items-center gap-2  text-sm">
              <li>
                <Link href={"/signup"}>SignUp</Link>
              </li>
              <li>
                <Link href={"/signin"}>SignIn</Link>
              </li>
            </ul>
          )}
         {user && (
            <div className="flex  items-center gap-2">
              <h2 className="font-bold text-[#db5b10]">Hey, {user.name}</h2>
              <Avatar>
                <Avatar.Image alt="John Doe" src={user.image} referrerPolicy="no-referrer" />
                <Avatar.Fallback>{user.name[0]}</Avatar.Fallback>
              </Avatar>
              <Button variant="danger" onClick={handelSignOut}>SignOut</Button>
            </div>
          )}

         
        </div>



        </nav>
      </div>
        </div>
    );
};

export default Navbar;