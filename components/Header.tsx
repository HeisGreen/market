"use client";

import {
  ClerkLoaded,
  SignedIn,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import React from "react";
import Link from "next/link";
import Form from "next/form";
import { PackageIcon, TrolleyIcon } from "@sanity/icons";

const Header = () => {
  const { user } = useUser();

  const createClerkPasskey = async () => {
    try {
      const response = await user?.createPasskey();
      console.log(response);
    } catch (error) {
      console.log("Error : ", JSON.stringify(error, null, 2));
    }
  };

  return (
    <header className="flex flex-wrap justify-between items-center px-4 py-2">
      <div className="flex flex-wrap w-full justify-between items-center">
        <Link
          href="/"
          className={
            "text-2xl font-bold bg-gradient-to-r from-green-500 to-green-950 bg-clip-text text-transparent hover:opacity-50 cursor-pointer mx-auto sm:mx-0"
          }
        >
          ShopwithGreen
        </Link>
        <Form
          action="/search"
          className="w-full sm:w-auto sm:flex-1 sm:mx-4 mt-2 sm:mt-0"
        >
          <input
            type="text"
            name="query"
            placeholder="Search Products"
            className="bg-green-30 text-gray-800 px-4 py-2 rounded focus:outline:none focus:ring-2 focus:ring-green-700
                     focus:ring-opacity-50 border w-full max-w-4xl"
          />
        </Form>

        <div className="flex items-center space-x-4 mt-4 sm:mt-0 flex-1 sm:flex-none">
          <Link
            href="/basket"
            className="flex-1 relative flex justify-center sm:justify-start
                          sm: flex-none items-center space-x-2 bg-gradient-to-r from-green-500 to-green-950 hover:bg-green-700
                           text-white font-bold py-2 px-4 rounded"
          >
            <TrolleyIcon className="w-6 h-6" />
            <span>My Basket</span>
          </Link>

          {/*User area*/}
          <ClerkLoaded>
            <SignedIn>
              <Link
                href="/orders"
                className="flex-1 relative flex justify-center sm:justify-start
                          sm: flex-none items-center space-x-2 bg-gradient-to-r from-green-500 to-green-950 hover:bg-green-700
                           text-white font-bold py-2 px-4 rounded"
              >
                <PackageIcon className="w-6 h-6" />
                <span>My Orders</span>
              </Link>
            </SignedIn>

            {user ? (
              <div>
                <UserButton />
                <div className="hidden sm:block text-xs">
                  <p className="Otext-gray-400">Welcome Back</p>
                  <p className="font-bold">{user.fullName}!</p>
                </div>
              </div>
            ) : (
              <SignInButton mode="modal" />
            )}

            {user?.passkeys.length === 0 && (
              <button
                onClick={createClerkPasskey}
                className="bg-white hover:bg-blue-700 hover:text-white
                            animate-pulse text-blue-500 font-bold py-2 px-4 rounded border-blue-300 border"
              >
                Create Passkey
              </button>
            )}
          </ClerkLoaded>
        </div>
      </div>
    </header>
  );
};
export default Header;
