import React, { useEffect } from "react";
import LoginBtn from "../components/login-btn";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const login = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/createPost");
    }
  }, [session]);

  return <LoginBtn />;
};

export default login;
