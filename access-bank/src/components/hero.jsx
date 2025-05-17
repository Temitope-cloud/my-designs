import AccessBankLogo from "../assets/accessbank.png";
import HeroImage from "../assets/access-hero-img.jpg";
import Header from "./header.jsx";
import thinkImg from "@/assets/think.png";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { HeroToolTip } from "./ui/pageUI/HeroTooltip";

const HeroSection = () => {
  return (
    <div class="z-10 w-full overflow-hidden">
      <Header />
      <div className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src="https://v1.pinimg.com/videos/iht/720p/48/51/20/485120afec01eb190c73b085510a560c.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B2A]/20 via-[#1B263B]/90 to-[#415A77] backdrop-blur-2xl"></div>
        <BackgroundBeamsWithCollision>
          {/* Hero Content */}
          <div className="relative z-10 h-screen overflow-hidden p-6 text-white">
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2">
              {/* Left Section */}
              <div className="relative">
                <h1 className="text-5xl font-black uppercase md:mt-10">
                  <span className="block px-4 text-base leading-2 font-bold text-[#ff8400]">
                    Online Banking...
                  </span>
                  <span className="relative me-2 rounded-xl border-r border-l ps-3">
                    <span
                      className="animate__animated animate__fadeIn z-10 bg-gradient-to-r from-white to-[#efa351] bg-clip-text text-transparent"
                      style={{ animationDelay: "1.2s" }}
                    >
                      Re-imagined
                    </span>
                  </span>
                  <img
                    src={thinkImg}
                    className="absolute top-23 left-67 z-0 inline size-36 h-7 w-7 opacity-50 blur-[0.9px] brightness-0 invert filter"
                    alt=""
                  />
                  for the Future
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="inline h-20 w-15 blur"
                  >
                    <path d="M12 3v3m0 12v3m6-15l-2.25 2.25M6 6l2.25 2.25m10.5 3h-3m-9 0H3m15.75 3L18 15m-12 0l1.5-1.5" />
                  </svg>
                </h1>

                <p className="relative -mt-2 text-xl">
                  Seamless transactions. Effortless control. <br />
                  Banking that moves at the{" "}
                  <span className="relative ms-5">peed</span> of light.
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    className="absolute top-8 left-[231px] fill-white"
                  >
                    <path d="M13 9h9l-14 15 3-9h-9l14-15-3 9zm-8.699 5h8.086l-1.987 5.963 9.299-9.963h-8.086l1.987-5.963-9.299 9.963z" />
                  </svg>
                </p>

                {/* Buttons */}
                <div className="mt-7 flex gap-3">
                  <button className="flex items-center gap-1 rounded-md bg-[#ff8400]/60 px-3 py-2 font-bold backdrop-blur-md">
                    Our Story <i className="bx bx-group"></i>
                  </button>
                  <button className="flex items-center gap-1 rounded-md bg-[#ff8400]/60 px-3 py-2 font-bold backdrop-blur-md">
                    Get Started <i className="bx bx-link-external"></i>
                  </button>
                </div>

                {/* What We Offer */}
                <div className="mt-10">
                  <h2 className="text-xl font-semibold">What do we offer?</h2>
                  <div className="mt-2 flex">
                    <div className="mx-2 flex items-center rounded-2xl bg-white/10 p-3 backdrop-blur-md">
                      <div>
                        <svg
                          width="24"
                          height="24"
                          xmlns="http://www.w3.org/2000/svg"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          className="fill-white"
                        >
                          <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 2c5.519 0 10 4.481 10 10s-4.481 10-10 10-10-4.481-10-10 4.481-10 10-10zm2 12v-3l5 4-5 4v-3h-9v-2h9zm-4-6v-3l-5 4 5 4v-3h9v-2h-9z" />
                        </svg>
                      </div>

                      <div className="mx-2">
                        <p className="font-semibold">Instant Transfers</p>
                        <p>
                          Send and receive money in <br />
                          seconds — no delays, no stress.
                        </p>
                      </div>
                    </div>

                    <div className="mx-2 flex items-center rounded-2xl bg-white/10 p-3 backdrop-blur-md">
                      <div>
                        <svg
                          width="24"
                          height="24"
                          xmlns="http://www.w3.org/2000/svg"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          className="fill-white"
                        >
                          <path d="M3.848 19h-.848c-.796 0-1.559-.316-2.121-.879-.563-.562-.879-1.325-.879-2.121v-3c0-7.175 5.377-13 12-13s12 5.825 12 13v3c0 .796-.316 1.559-.879 2.121-.562.563-1.325.879-2.121.879h-.848c-2.69 4.633-6.904 5-8.152 5-1.248 0-5.462-.367-8.152-5zm16.152-5.876c-.601.236-1.269-.18-1.269-.797 0-.304-.022-.61-.053-.915-1.761-.254-3.618-1.926-3.699-3.723-1.315 2.005-4.525 4.17-7.044 4.17 1.086-.699 1.839-2.773 1.903-3.508-.581 1.092-2.898 3.136-4.551 3.487l-.018.489c0 .619-.669 1.032-1.269.797v3.771c.287.256.632.464 1.041.594.225.072.412.224.521.424 2.206 4.046 5.426 4.087 6.438 4.087.929 0 3.719-.035 5.877-3.169-1.071.433-2.265.604-3.759.653-.37.6-1.18 1.462-2.253 1.961 1.498-.054 2.901-.327 4.213-.853 2.82-1.126 4.548-2.738 5.634-5.068z" />
                        </svg>
                      </div>

                      <div className="mx-2">
                        <p className="font-semibold">Secure Transactions</p>
                        <p>
                          State-of-the-art encryption <br />
                          ensures safety & privacy.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <HeroToolTip /> */}
              </div>

              {/* Right Section */}
              <div className="relative hidden h-full w-full md:inline-flex">
                <img
                  src={HeroImage}
                  alt="Hero Background"
                  className="h-screen w-full rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </BackgroundBeamsWithCollision>
      </div>
    </div>
  );
};

export default HeroSection;
