"use client";

import { useState } from "react";

export default function AuthModal({ onClose }: { onClose: () => void }) {
  const [mode, setMode] = useState<"login" | "signup">("login");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`${mode === "login" ? "Logged in" : "Signed up"} successfully!`);
    onClose(); // close modal after success (for now, mock)
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl w-full max-w-md relative animate-fade-in">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>

        {/* Tabs */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setMode("login")}
            className={`px-4 py-2 rounded-l-xl font-semibold ${
              mode === "login"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            Log In
          </button>
          <button
            onClick={() => setMode("signup")}
            className={`px-4 py-2 rounded-r-xl font-semibold ${
              mode === "signup"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            required
          />

          {mode === "signup" && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            />
          )}

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition transform hover:scale-105"
          >
            {mode === "login" ? "Log In" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}
