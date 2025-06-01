"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

interface UserDetails {
  id: string;
  name: string;
  email: string;
  image: string;
  ticketType: string;
  status: string;
}

const TicketPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState<UserDetails | null>(null);
  const [attendanceStatus, setAttendanceStatus] = useState<string>("");
  const [storedUserStatus, setStoredUserStatus] = useState<boolean | null>();

  useEffect(() => {
    const stored = localStorage.getItem("userDetails");
    const users: UserDetails[] = stored ? JSON.parse(stored) : [];
    const foundUser = users.find((user) => user.id === id);
    setUser(foundUser || null);
  }, []);

  const handleUserStatus = (status: "accept" | "decline") => {
    const stored = localStorage.getItem("userDetails");
    const users: UserDetails[] = stored ? JSON.parse(stored) : [];

    const userExist = users?.find((existing) => existing.id === id);

    if (userExist) {
      const newStatus = status === "accept" ? "Accepted" : "Rejected";
      userExist.status = newStatus;
      // setUser({ ...userExist });
      setAttendanceStatus(newStatus);
      setStoredUserStatus(newStatus === "Accepted" ? true : false);
      const updatedUser = users.map((user) =>
        user.id === id ? userExist : user
      );
      localStorage.setItem("userDetails", JSON.stringify(updatedUser));
      console.log(updatedUser);
    }
  };

  useEffect(() => {
    const stored = localStorage.getItem("userDetails");
    const users: UserDetails[] = stored ? JSON.parse(stored) : [];
    const foundUser = users.find((user) => user.id === id);

    if (foundUser) {
      if (foundUser.status === "Accepted") {
        setStoredUserStatus(true);
        setAttendanceStatus("Accepted");
      } else if (foundUser.status === "Rejected") {
        setStoredUserStatus(false);
        setAttendanceStatus("Rejected");
      } else {
        setStoredUserStatus(null);
      }
    } else {
      setStoredUserStatus(null);
    }

    console.log(foundUser);
  }, []);

  useEffect(() => {
    console.log(attendanceStatus);
  }, [attendanceStatus]);
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-br from-green-100 to-indigo-200 text-gray-800">
        {user ? (
          <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
            <h1 className="text-2xl font-bold text-green-600 mb-4">
              🎟 Event Ticket
            </h1>
            <div className="flex flex-col items-center gap-2">
              <img
                src={user?.image}
                className="w-24 h-24 rounded-full border-4 border-green-500 object-cover object-top"
                alt="User"
              />
              <p className="font-semibold capitalize">{user?.name}</p>
              <p className="text-sm text-gray-500">{user?.email}</p>
              <p className="mt-2">
                <span className="font-bold">Ticket Type:</span>{" "}
                {user?.ticketType}
              </p>
              <p className="text-xs text-gray-400">ID: {user?.id}</p>
            </div>
            {storedUserStatus === null ? (
              <div className="mt-4 flex gap-2 justify-center">
                <button
                  onClick={() => handleUserStatus("accept")}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Accept User
                </button>
                <button
                  onClick={() => handleUserStatus("decline")}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Decline User
                </button>
              </div>
            ) : (
              <p>
                {" "}
                This guest has been{" "}
                <span className="font-bold"> {attendanceStatus} </span>{" "}
              </p>
            )}
          </div>
        ) : (
          "..."
        )}
      </div>
    </>
  );
};

export default TicketPage;
