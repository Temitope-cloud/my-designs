"use client";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const Auth = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <div className="h-screen">
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700"
        >
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
        <div className="flex  justify-between flex-wrap">
          <div className="mt-20 ms-20">
            <div className="flex justify-center flex-col items-center">
              <p className="text-2xl uppercase font-semibold">Afrik-Musik</p>
              <p className="leading-5">
                Explore African songs at it&#39;s best
              </p>
            </div>

            <div className="mt-7 flex gap-2">
              <button className="active px-10 py-[5px] font-medium rounded-lg">
                Sign Up
              </button>
              <button className="inactive px-10 py-[5px] font-medium rounded-lg">
                Login
              </button>
            </div>

            <div className="mt-3">
              <p className="text-sm  ">Sign up with open account</p>
              <div className="mt-2 flex items-center gap-3">
                <div>
                  <i className="boxIcon bx bxl-apple border px-8 py-2 rounded-md text-lg"></i>
                </div>
                <div>
                  <i className="boxIcon bx bxl-google border px-8 py-2 rounded-md text-lg"></i>
                </div>
                <div>
                  <i className="boxIcon bx bxl-facebook border px-8 py-2 rounded-md text-lg"></i>
                </div>
              </div>

              <div className="flex items-center justify-center gap-1 my-5">
                <div
                  className={`w-30 h-[1px] bg-gradient-to-l ${
                    theme === "dark"
                      ? "from-white via-white to-transparent"
                      : "from-gray-900 via-gray-900 to-transparent"
                  } `}
                ></div>
                <p>Or</p>
                <div
                  className={`w-30 h-[1px] bg-gradient-to-l ${
                    theme === "dark"
                      ? "from-transparent via-white to-white"
                      : "from-transparent via-gray-900 to-gray-900"
                  } `}
                ></div>
              </div>

              <div>
                {/* { m: 1, width: "100%" } */}
                <Box
                  component="form"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    "& > :not(style)": { m: 0, width: "100%" },
                    "& label": {
                      color: `${theme === "dark" ? "white" : "black"}`,
                    },
                    "& label.Mui-focused": {
                      color: `${theme === "dark" ? "white" : "black"}`,
                    },
                    "& .MuiOutlinedInput-root": {
                      height: 48, // control full input height
                      padding: "12px 14px", // consistent padding for input
                      "& fieldset": { borderColor: "gray" }, // normal border
                      "&:hover fieldset": {
                        borderColor: `${theme === "dark" ? "white" : "black"}`,
                      }, // hover
                      "&.Mui-focused fieldset": {
                        borderColor: `${theme === "dark" ? "white" : "black"}`,
                      },
                    },

                    input: {
                      color: `${theme === "dark" ? "white" : "black"}`,
                    },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-basic"
                    label="Username"
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                  />
                  <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    fullWidth
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: theme === "dark" ? "white" : "black",
                        }}
                      />
                    }
                    label="Remember me"
                  />
                </Box>
              </div>
            </div>
          </div>
          <div>
            <div className="relative h-screen ">
              <Image
                src="/lady.jpg"
                alt="Lady"
                width={500}
                height={500}
                className="w-150 h-screen object-cover clip-diagonal rounded-2xl"
              />
              <div className="absolute top-0 opacity-50 blur-3xl h-full w-full bg-gray-900"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
