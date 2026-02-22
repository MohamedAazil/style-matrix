import { useState } from "react";
import { useAppContext } from "@/context/AppContext"; // 1. Import the context hook
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // 2. Access the login and signup functions from your Global Manager
  const { login, signup } = useAppContext();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        // Calls the Supabase signup logic from AppContext
        await signup(email, password);
        console.log("Registration successful");
      } else {
        // Calls the Supabase login logic from AppContext
        await login(email, password);
        console.log("Login successful");
      }
      // Note: Navigation to "/" is handled automatically inside AppContext.tsx
    } catch (error: any) {
      console.error("Auth error:", error.message);
      alert(error.message || "Authentication failed. Please try again.");
    }
  };

  const handleGoogleAuth = () => {
    console.log("Redirecting to Google Auth...");
    // Future: Add Google OAuth logic here using supabase.auth.signInWithOAuth()
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-stone-100 p-4">
      <Card className="w-full max-w-md border-0 bg-white shadow-2xl rounded-none">
        <CardHeader className="space-y-3 text-center pb-8 pt-12">
          <CardTitle className="font-serif text-3xl tracking-tight text-stone-900">
            STYLE MATRIX
          </CardTitle>
          <CardDescription className="text-stone-500 uppercase tracking-[0.2em] text-xs font-semibold">
            {isSignUp ? "Establish Your Identity" : "Access Your Wardrobe"}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            {isSignUp && (
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[10px] uppercase tracking-widest text-stone-600 font-bold">
                  Full Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Jane Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="rounded-none border-stone-300 focus-visible:ring-stone-800 focus-visible:ring-1 h-11"
                />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email" className="text-[10px] uppercase tracking-widest text-stone-600 font-bold">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rounded-none border-stone-300 focus-visible:ring-stone-800 focus-visible:ring-1 h-11"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-[10px] uppercase tracking-widest text-stone-600 font-bold">
                  Password
                </Label>
                {!isSignUp && (
                  <a href="#" className="text-[10px] text-stone-400 hover:text-stone-900 transition-colors uppercase tracking-widest">
                    Forgot password?
                  </a>
                )}
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="rounded-none border-stone-300 focus-visible:ring-stone-800 focus-visible:ring-1 h-11"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full rounded-none bg-stone-900 hover:bg-stone-800 text-white uppercase tracking-[0.15em] text-xs h-12 mt-2 transition-all"
            >
              {isSignUp ? "Create Account" : "Sign In"}
            </Button>
          </form>

          <div className="relative pt-2">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-stone-200" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-3 text-stone-400 tracking-widest text-[10px]">Or continue with</span>
            </div>
          </div>

          <Button
            type="button"
            variant="outline"
            onClick={handleGoogleAuth}
            className="w-full rounded-none border-stone-300 hover:bg-stone-50 h-12 text-stone-700 transition-all"
          >
            <svg className="mr-3 h-4 w-4" aria-hidden="true" focusable="false" viewBox="0 0 488 512">
              <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
            </svg>
            <span className="uppercase tracking-widest text-xs font-semibold">Google</span>
          </Button>
        </CardContent>

        <CardFooter className="flex justify-center pb-12 pt-4">
          <p className="text-[11px] text-stone-500 uppercase tracking-widest">
            {isSignUp ? "Already a member?" : "New to the matrix?"}{" "}
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="font-bold text-stone-900 hover:text-stone-600 transition-colors ml-1"
            >
              {isSignUp ? "SIGN IN" : "CREATE ACCOUNT"}
            </button>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}