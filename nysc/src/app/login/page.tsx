import ShadLoginForm from "@/components/ShadLoginForm";
import { GalleryVerticalEnd } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="relative min-h-svh">
      <div className="grid absolute w-full min-h-svh lg:grid-cols-2 bg-white/80 backdrop-blur-[2px]">
        <div className="flex flex-col gap-4 p-6 md:p-10">
          <div className="flex justify-center gap-2 md:justify-start">
            <a href="#" className="flex items-center gap-2 font-medium">
              <div className=" flex  items-center justify-center rounded-md">
                <div className="flex justify-center items-center">
                  <img
                    src="https://images.seeklogo.com/logo-png/45/1/nysc-logo-png_seeklogo-457178.png"
                    alt=""
                    className="w-15 h-15 rounded-full"
                  />{" "}
                  <div className="flex flex-col">
                    <p className="uppercase font-bold text-lg">
                      National Youth Service Corps
                    </p>
                    <p className="text-[#820000] relative uppercase flex font-semibold">
                      <span className="text-5xl leading-0">.</span> Service and
                      Humility
                      <span className="text-5xl leading-0">.</span>
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="w-full">
            <div className="w-full ">
              <ShadLoginForm />
            </div>
          </div>
        </div>
        <div className="bg-muted relative hidden lg:block">
          <img
            src="/nysc.webp"
            alt="Image"
            className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
          <div className="absolute bg-green-500/20 backdrop-blur-[2px] top-0 h-full w-full"></div>
        </div>
      </div>{" "}
      <img src="/background.jpg" className="min-h-screen" alt="" />
    </div>
  );
}
