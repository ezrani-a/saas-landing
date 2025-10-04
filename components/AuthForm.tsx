"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function AuthForm({ mode }: { mode: "login" | "signup" }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock auth (replace with NextAuth/Supabase later)
    alert(`${mode === "login" ? "Logged in" : "Signed up"} with ${email}`);
    router.push("/");
  };

  const handleSocialLogin = (provider: string) => {
    // Mock social login
    alert(`Logging in with ${provider}`);
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-6">
      <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          {mode === "login" ? "Welcome Back" : "Create Account"}
        </h2>

        {/* Email/Password form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition transform hover:scale-105"
          >
            {mode === "login" ? "Log In" : "Sign Up"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300" />
          <span className="px-3 text-gray-500 text-sm">or</span>
          <div className="flex-grow h-px bg-gray-300" />
        </div>

        {/* Social login buttons */}
        <div className="space-y-3">
          <button
            onClick={() => handleSocialLogin("Google")}
            className="flex items-center justify-center w-full border border-gray-300 py-3 rounded-xl bg-white hover:bg-gray-50 transition"
          >
            <FcGoogle className="mr-2 text-xl" /> Continue with Google
          </button>
          <button
            onClick={() => handleSocialLogin("GitHub")}
            className="flex items-center justify-center w-full border border-gray-300 py-3 rounded-xl bg-white hover:bg-gray-50 transition"
          >
            <FaGithub className="mr-2 text-xl" /> Continue with GitHub
          </button>
        </div>

        {/* Switch link */}
        <p className="text-center mt-6 text-gray-600">
          {mode === "login" ? (
            <>
              Don’t have an account?{" "}
              <a
                href="/auth/signup"
                className="text-indigo-600 font-semibold hover:underline"
              >
                Sign up
              </a>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <a
                href="/auth/login"
                className="text-indigo-600 font-semibold hover:underline"
              >
                Log in
              </a>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
