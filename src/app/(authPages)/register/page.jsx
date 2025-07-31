"use client";

import { registerUser } from "@/app/actions/auth/registerUser";
import React from "react";

export default function RegisterPage() {
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    const password = form.password.value;
    const payload = { username, password };
    // console.log('Registration Payload',payload);

    const result = await registerUser(payload);
    console.log(result);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleRegister}
        className="w-full max-w-sm space-y-4 border p-6 rounded"
      >
        <h2 className="text-lg font-semibold">Register</h2>

        <div>
          <label htmlFor="username" className="block text-sm">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full border px-3 py-2 rounded"
            placeholder="Enter username"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full border px-3 py-2 rounded"
            placeholder="Enter password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          Register
        </button>
      </form>
    </div>
  );
}
