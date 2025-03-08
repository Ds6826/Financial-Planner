import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import Head from "next/head";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    console.log("User logged out");
  };
  
  // Add this inside your component's return statement:
  <button onClick={handleLogout} className="bg-red-500 text-white py-2 px-4 rounded-md">
    Logout
  </button>
  
  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    const { user, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      console.log("Logged in:", user);
      // Redirect or update UI as needed
    }
  };

  return (
    <>
      <Head>
        <title>Login Page</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-md w-96 text-center">
          <h2 className="text-2xl font-bold mb-4">Login</h2>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <form onSubmit={handleLogin}>
            <div className="mb-4 text-left">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email:
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-4 text-left">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password:
              </label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
