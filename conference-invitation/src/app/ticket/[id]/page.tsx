"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

interface UserDetails {
  id: string;
  name: string;
  email: string;
}

const TicketPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState<UserDetails | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("userDetails");
    const users: UserDetails[] = stored ? JSON.parse(stored) : [];
    const foundUser = users.find((user) => user.id === id);
    setUser(foundUser || null);
  }, []);
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center bg-gray-50  text-gray-900">
        <div>
          <p>{user?.id}</p>
          <p>{user?.name}</p>
          <p>{user?.email}</p>
        </div>
      </div>
    </>
  );
};

export default TicketPage;
