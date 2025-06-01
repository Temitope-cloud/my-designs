"use client";
import React, { useState } from "react";

interface UserDetails {
  name: string;
  email: string;
}

const MainPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [newUserId, setNewUserId] = useState<string | null>("");
  const [showUserId, setShowUserId] = useState<boolean | null>(false);

  const handleSubmit = () => {
    const acceptedEmail = email.toLowerCase();
    const stored = localStorage.getItem("userDetails");
    const existingUsers: UserDetails[] = stored ? JSON.parse(stored) : [];

    const emailExist = existingUsers.some(
      (user) => user.email === acceptedEmail
    );

    if (emailExist) {
      alert("This users exists");
      return;
    }

    const newUser: UserDetails & { id: string } = {
      id: Date.now().toString(),
      name: name.toLowerCase(),
      email: acceptedEmail,
    };

    const updatedUser = [...existingUsers, newUser];

    localStorage.setItem("userDetails", JSON.stringify(updatedUser));

    setNewUserId(newUser.id);
    setShowUserId(true);
    setTimeout(() => {
      setShowUserId(false);
    }, 5000);

    console.log(updatedUser);
  };

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center bg-gray-50  text-gray-900">
        <div className="flex flex-col shadow p-5 gap-3 border rounded w-[40%]">
          <input
            type="text"
            name=""
            id=""
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className=" shadow border rounded p-2 "
          />
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=" shadow border rounded p-2"
          />
          <button
            onClick={() =>
              name !== "" && email !== ""
                ? handleSubmit()
                : alert("The fields are empty")
            }
            className="bg-slate-900 text-white py-2 rounded"
          >
            Submit
          </button>
          {newUserId && showUserId && (
            <p>
              {" "}
              Your Link:{" "}
              <a href=""> {`http://localhost:3000/${newUserId}`} </a>{" "}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default MainPage;
