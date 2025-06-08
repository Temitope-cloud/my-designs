import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <Input id="password" type="password" required />
        </div>
        <Button
          type="submit"
          className="w-full bg-[#008751] hover:bg-[#008751c9]"
        >
          Login
        </Button>
        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background text-muted-foreground relative z-10 px-2">
            Or continue with
          </span>
        </div>
        <Button
          variant="outline"
          className="w-full border-[#008751] border text-[#008751]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 533.5 544.3"
            fill="none"
          >
            <path
              d="M533.5 278.4c0-18.6-1.5-37-4.8-54.8H272v103.8h146.9c-6.3 34-25 62.7-53.6 81.7v67.8h86.4c50.4-46.4 81.8-114.9 81.8-198.5z"
              fill="#008751"
            />
            <path
              d="M272 544.3c72.6 0 133.5-24 178-65.3l-86.4-67.8c-24 16.2-55 25.8-91.6 25.8-70.5 0-130.3-47.6-151.6-111.2H30.7v69.7c44.9 88.2 136.7 149 241.3 149z"
              fill="#008751"
            />
            <path
              d="M120.4 325.8c-10.2-30-10.2-62.3 0-92.3V163.8H30.7c-37.4 73.8-37.4 161 0 234.8l89.7-72.8z"
              fill="#008751"
            />
            <path
              d="M272 107.5c39.5 0 75 13.7 103.2 40.5l77.4-77.4C405.5 25.4 344.6 0 272 0 167.3 0 75.6 60.8 30.7 149l89.7 69.7C141.7 155 201.5 107.5 272 107.5z"
              fill="#008751"
            />
          </svg>
          Login with Google
        </Button>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <a href="#" className="underline underline-offset-4">
          Sign up
        </a>
      </div>
    </form>
  );
}
