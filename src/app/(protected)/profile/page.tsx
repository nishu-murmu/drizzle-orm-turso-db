"use client";
import { signOut } from "@/auth";
import { User } from "next-auth";
import { useSession } from "next-auth/react";

const ProfilePage = () => {
  const session = useSession();

  const user = session.data?.user as User;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="items-center justify-center flex flex-col bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <div className="flex items-center space-x-4">
          <img
            src={user?.image ?? ""}
            width={60}
            height={60}
            alt="profile image"
            className="rounded-full border border-gray-300"
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
            <p className="text-gray-500">{user.email}</p>
          </div>
        </div>
        <button
          className="flex items-center  justify-center bg-red-500 text-white p-2 rounded-md"
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
