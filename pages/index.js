import { useState } from "react";
import { supabase } from "../lib/supabaseClient"; // ✅ Import Supabase

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState(null);

  const signInWithGoogle = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({ provider: "google" });
    if (error) console.error("Error logging in:", error.message);
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to Financial Planner</h1>
      <p className="mt-4 text-lg text-gray-700">
        Manage your finances effectively with our easy-to-use planner.
      </p>

      {session ? (
        <p className="mt-6 text-green-600 font-semibold">You're logged in!</p>
      ) : (
        <button
          className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
          onClick={signInWithGoogle}
          disabled={loading}
        >
          {loading ? "Signing in..." : "Sign in with Google"}
        </button>
      )}
    </div>
  );
}

