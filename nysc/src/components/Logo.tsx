// "use client";
// import React, { useState } from "react";
// import {
//   Sidebar,
//   SidebarBody,
//   SidebarLink,
// } from "../../../components/ui/sidebar";
// import {
//   IconArrowLeft,
//   IconBrandTabler,
//   IconSettings,
//   IconUserBolt,
// } from "@tabler/icons-react";
// import { motion } from "motion/react";
// import { cn } from "@/lib/utils";

interface Logoprops {
  motion: typeof import("framer-motion").motion;
}

const Logo = ({ motion }: Logoprops) => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <div className=" shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
      <div className="flex items-center">
        <img src="/nysclogo.png" alt="NYSC Logo" className="h-15 w-15 " />
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-semibold whitespace-pre text-black "
        >
          NYSC Portal
        </motion.span>
      </div>
    </a>
  );
};

export default Logo;
