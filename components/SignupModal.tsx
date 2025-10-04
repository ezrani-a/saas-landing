"use client";

import { useState } from "react";

export default function SignupModal({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you! ${email} has been signed up.`);
    setEmail("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl w-96 shadow-2xl relative">
        <button
          className="absolute top-4 right-4 text-gray-500 dark:text-gray-200 font-bold"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Sign Up</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition transform"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
