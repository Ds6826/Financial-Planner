import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

function MyApp({ Component, pageProps }) {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    console.log("User logged out");
  };
  
  return <Component {...pageProps} session={session} />;
}

  

export default MyApp;
