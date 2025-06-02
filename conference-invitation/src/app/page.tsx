"use client";
import React, { ChangeEvent, useState } from "react";

interface UserDetails {
  id: string;
  name: string;
  email: string;
  image: string;
  ticketType: string;
}

const MainPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [newUserId, setNewUserId] = useState<string | null>("");
  const [showUserId, setShowUserId] = useState<boolean | null>(false);
  type TicketType = "Student" | "Regular" | "VIP";
  const [ticketType, setTicketType] = useState<TicketType>("Student");
  const [fileSelctedName, setFileSelctedName] = useState("");
  const [base64, setBase64] = useState("");

  const ticketTypes = ["Student", "Regular", "VIP"];

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;
    setFileSelctedName(file.name);

    const reader = new FileReader();

    reader.onload = () => {
      const base64String = reader.result as string;
      setBase64(base64String);
      // localStorage.setItem("userImage", base64String);
      console.log("base 64 Image string saved");
    };

    reader.readAsDataURL(file);
  };
  // const savedImage = localStorage.getItem("userImage");

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

    const newUser: UserDetails & { id: string; image: string } = {
      id: Date.now().toString(),
      name: name.toLowerCase(),
      email: acceptedEmail,
      image: base64,
      ticketType: ticketType,
    };

    const updatedUser = [...existingUsers, newUser];

    localStorage.setItem("userDetails", JSON.stringify(updatedUser));

    setNewUserId(newUser.id);
    setShowUserId(true);
    setTimeout(() => {
      setShowUserId(false);
    }, 5000);

    console.log(updatedUser);

    setName("");
    setEmail("");
    setFileSelctedName("");
    setTicketType("Student");
  };

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-br from-green-100 to-indigo-200 text-gray-800">
        <div className="flex flex-col shadow p-5 gap-3 border rounded w-[40%]">
          <input
            type="text"
            name=""
            id=""
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className=" shadow border rounded p-2 outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=" shadow border rounded p-2 outline-none"
          />
          <select
            name=""
            id=""
            value={ticketType}
            onChange={(e) => setTicketType(e.target.value as TicketType)}
            className=" shadow border rounded p-2 outline-none"
          >
            <option className="hidden"> Select ticket type </option>
            {ticketTypes.map((t, idx) => (
              <option key={idx} value={t}>
                {t}
              </option>
            ))}
          </select>
          <label
            htmlFor="fileInput"
            className="shadow border rounded p-2 outline-none  px-4 py-2  cursor-pointer"
          >
            {" "}
            Choose File
          </label>
          <input
            type="file"
            name=""
            id="fileInput"
            className="hidden"
            onChange={handleFileChange}
          />

          {/* {savedImage && <img src={savedImage} alt="" />} */}

          {fileSelctedName && (
            <p>
              {" "}
              File Selected:{" "}
              <span className="font-bold"> {fileSelctedName} </span>{" "}
            </p>
          )}
          <button
            onClick={() =>
              name !== "" && email !== ""
                ? handleSubmit()
                : alert("The fields are empty")
            }
            className="bg-slate-900 text-white py-2 rounded cursor-pointer"
          >
            Submit
          </button>
          {newUserId && showUserId && (
            <p>
              {" "}
              Your Ticket:{" "}
              <a
                href={`http://localhost:3000/ticket/${newUserId}`}
                target="_blank"
                className="font-medium"
              >
                {" "}
                {`http://localhost:3000/ticket/${newUserId}`}{" "}
              </a>{" "}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default MainPage;
