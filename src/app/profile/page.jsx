'use client';
import UpdateUserProfile from "@/components/UpdateUserProfile";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import 'animate.css';

const ProfilePage = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;
    console.log("Hima", user);
    return (
        <div className="my-6">
      <Card className="mx-auto flex flex-col items-center border">
        <Avatar className="h-20 w-20">
          <Avatar.Image alt="John Doe" src={user?.image} />
          <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
              </Avatar>
              <h2 className="font-bold text-2xl text-[#660707]  animate__animated animate__fadeInRight">{user?.name}</h2>
              <p className="text-muted">{user?.email}</p>

              <UpdateUserProfile></UpdateUserProfile>
      </Card>
    </div>
    );
};

export default ProfilePage;