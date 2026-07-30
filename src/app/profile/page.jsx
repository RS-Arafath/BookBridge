'use client';

import ProfileUpdateModal from '@/components/ProfileUpdateModal';
import { authClient } from '@/lib/auth-client';
import { Avatar, Button, Card } from '@heroui/react';
import { User } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  const isPending = userData.isPending;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  if (isPending) {
    return (
      <Card className="container border mx-auto max-w-md my-10 p-5">
        <p className="text-center text-blue-600 ">Loading user information</p>
      </Card>
    );
  }

 if (!user) {
   return (
     <Card className="container border mx-auto max-w-md my-10 p-5 flex flex-col items-center gap-4">
       <p className="text-center text-slate-600 text-lg">
         You are not signed in.
       </p>
       <div>
         <Button
           as={Link}
           href="/signin"
           variant="bordered"
           className="border   text-[#0F172A] hover:bg-[#F7971D] border-[#F7971D] font-semibold transition-colors duration-150 "
         >
           <Link href="/signin">LogIn</Link>
         </Button>
       </div>
     </Card>
   );
 }
  return (
    <Card className="container border mx-auto max-w-md my-10 p-5">
      <h1 className="text-xl sm:text-2xl  font-bold text-center text-slate-700">
        User Data
      </h1>

      <Card>
        <div className="flex justify-center items-center gap-5">
          <div>
            <Avatar className="h-15 w-15 rounded-full">
              {user?.image ? (
                <Avatar.Image
                  alt={user.name}
                  src={user.image}
                  referrerPolicy="no-referrer"
                />
              ) : (
                <Avatar.Fallback>
                  <User className="h-10 w-10 text-gray-500" />
                </Avatar.Fallback>
              )}
            </Avatar>
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-slate-700">
              Hi, {user.name}!
            </h1>
            <h3 className="text-base text-gray-600">{user.email}</h3>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5 mt-5">
          <ProfileUpdateModal></ProfileUpdateModal>
          <Button
            size="sm"
            onClick={handleSignOut}
            variant="bordered"
            className=" border  duration-200 transition-colors   border-[#1E3A5F] hover:bg-[#054293]  text-white bg-[#1E3A5F]"
          >
            <Link href="/">Log Out</Link>
          </Button>
        </div>
      </Card>
    </Card>
  );
};

export default ProfilePage;
