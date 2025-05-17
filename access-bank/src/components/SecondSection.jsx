import { useState } from "react";
import { motion } from "framer-motion";
import NigerianFlag from "../assets/nig-flag.png";
function SecondSect() {
  const Spinner = () => (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      className="inline-block h-5 w-5 rounded-full border-4 border-white border-t-transparent"
    />
  );
  const [availableBalance, setAvailableBalance] = useState(3000064);
  const formattedBalance = new Intl.NumberFormat("en-US").format(
    availableBalance,
  );
  const [buttonText, setButtonText] = useState("Confirm and Send");
  const [isLoading, setIsLoading] = useState(false);
  let [inputValue, setInputValue] = useState("");

  const handleTransaction = async () => {
    const amountToSubtract = Number(inputValue);

    if (amountToSubtract <= 0 || amountToSubtract > availableBalance) {
      alert("Invalid");
      return;
    }

    setIsLoading(true);
    setButtonText("Processing...");
    console.log("Button text after setting:", buttonText);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setAvailableBalance((prevBalance) => prevBalance - amountToSubtract);
    setButtonText("Successfully Sent");
    console.log("Button text after sent:", buttonText);

    setInputValue("");

    setTimeout(() => {
      setButtonText("Confirm and Send");
      setIsLoading(false);
    }, 2000);
  };

  // const handleSubtract = () => {
  //   setAvailableBalance((prevBalance) => prevBalance - Number(inputValue));
  //   setInputValue("");
  // };
  return (
    <div className="bg-slate-100 pt-10">
      <div className="flex justify-center">
        <h2 className="flex items-center justify-center gap-1 rounded border border-orange-200 bg-orange-100 px-4 text-lg text-orange-400">
          <i class="bx bxs-bank"></i>Daily Finances
        </h2>
      </div>
      <h2 className="mt-5 text-center text-4xl font-medium md:mx-90">
        Efficiency at it's best: Access Bank daily finance
      </h2>
      <p className="text-center font-bold opacity-40">
        Empowering global financial management
      </p>
      <div className="mt-5 grid h-full md:grid-cols-2">
        <div className="ms-30 mt-40">
          <p className="w-fit rounded-md border border-gray-100 bg-orange-100 px-2 text-orange-500">
            <i class="bx bxs-bank"></i> Account Transfer
          </p>
          <h2 className="mt-5 text-4xl">
            Global payments. Your gateway to success transactons
          </h2>
        </div>
        <div>
          <div className="me-10 mt-5 rounded-t-4xl bg-gray-100 p-10">
            <div className="h-full rounded-t-4xl rounded-b bg-white ps-5 pb-3">
              <h1 className="pt-15 text-2xl font-semibold">Amount</h1>
              <p className="mt-3 text-gray-400">Send money</p>
              <form action="">
                <div className="flex w-[90%] items-center gap-2 rounded-2xl bg-gray-100 px-2">
                  <div className="w-[70%] ps-2">
                    <label htmlFor="amountsending" className="">
                      <input
                        className="mt-3 w-full rounded-lg text-2xl outline-none"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        id="amountsending"
                        type="number"
                      />
                    </label>
                    <p class="text-sm font-medium text-gray-400">
                      Balance:₦{formattedBalance}
                    </p>
                  </div>
                  <div className="flex items-center rounded-lg bg-white px-2 py-1">
                    <img src={NigerianFlag} className="w-5" alt="" />
                    <p className="w-full ps-2">NGN</p>

                    <i class="bx bx-chevron-down"></i>
                  </div>
                </div>

                <div className="mt-10">
                  <p className="text-lg text-gray-400">
                    Who are you sending money to?
                  </p>
                  <div className="w-[90%] rounded-full bg-gray-100 px-3 py-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <p className="rounded-full bg-purple-300 px-3 py-2">
                          BT
                        </p>
                        <p className="font-medium">Balogun Temitope</p>
                      </div>
                      <div>
                        <i class="bx bx-chevron-down text-2xl"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </form>

              <motion.button
                onClick={handleTransaction}
                disabled={isLoading}
                className={`mt-10 flex w-full cursor-pointer items-center justify-center rounded-full py-3 text-white ${isLoading ? "cursor-not-allowed" : ""}`}
                animate={{
                  backgroundColor:
                    buttonText === "Processing..."
                      ? "#D97706"
                      : buttonText === "Successfully Sent"
                        ? "#10B981"
                        : "#000000",
                  scale: isLoading ? 0.95 : 1,
                  opacity: isLoading ? 0.97 : 1,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {buttonText === "Processing..." ? <Spinner /> : buttonText}
              </motion.button>

              {/* <button
                onClick={handleTransaction}
                disabled={isLoading}
                className={`mt-10 w-full cursor-pointer rounded-full bg-black py-3 text-white ${buttonText === "Processing..." ? "cursor-not-allowed bg-amber-600" : ""} ${buttonText === "Successfully Sent" ? "bg-green-500" : ""} ${buttonText === "Confirm and Send" ? "bg-black" : ""} ${isLoading ? "cursor-not-allowed opacity-50" : ""} `}
              >
                {buttonText}
              </button> */}
            </div>
          </div>
        </div>
        {/* 
        <div>
          <div className="grid grid-cols-3">
            <div>
              <h2 className="text-xl">Market</h2>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default SecondSect;
