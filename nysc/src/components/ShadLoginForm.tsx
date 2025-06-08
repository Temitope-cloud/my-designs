"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Toaster } from "@/components/ui/sonner";
import { LogIn } from "lucide-react";
import { toast } from "sonner";

const ShadLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });

  const validateForm = () => {
    const newErrors = { email: "", password: "" };
    let isValid = true;

    // Email validation
    if (!email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Password validation
    if (!password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Simulate login process

    setTimeout(() => {
      setIsLoading(false);
      toast("Login Successful", {
        description: "Welcome back to NYSC Portal!",
      });
    }, 2000);
  };

  const handleForgotPassword = () => {
    toast("Password Reset", {
      description: "Password reset instructions will be sent to your email.",
    });
  };

  return (
    <Card className="w-full border-0  transition-all duration-300">
      <CardHeader className="text-center space-y-4">
        <div className="w-20 h-20 bg-[#008751] rounded-full flex items-center justify-center mx-auto shadow-lg">
          <LogIn className="w-10 h-10 text-white" />
        </div>
        <CardTitle className="text-2xl font-bold text-gray-800">
          Login to NYSC Portal
        </CardTitle>
        <CardDescription className="text-gray-600">
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              <i className="bx bxs-envelope"></i>
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`transition-all duration-200 focus:ring-2 focus:ring-green-500 ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-sm text-red-500 animate-fade-in">
                {errors.email}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              <i className="bx bxs-lock-alt"></i>
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`transition-all duration-200 focus:ring-2 focus:ring-green-500 ${
                errors.password ? "border-red-500" : ""
              }`}
            />
            {errors.password && (
              <p className="text-sm text-red-500 animate-fade-in">
                {errors.password}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-[#008751] hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Signing In...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <LogIn className="w-4 h-4" />
                <span>Sign In</span>
              </div>
            )}
          </Button>
        </form>

        <div className="text-center">
          <button
            onClick={handleForgotPassword}
            className="text-sm text-green-600 hover:text-green-700 hover:underline transition-colors duration-200"
          >
            Forgot your password?
          </button>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            Need help? Contact{" "}
            <a
              href="#"
              className="text-green-600 hover:text-green-700 hover:underline"
            >
              NYSC Support
            </a>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ShadLoginForm;
