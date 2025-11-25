"use client";

import React from "react";
import { useFormState } from "react-dom";
import styles from "./login.module.css";
import Link from "next/link";
import { login } from "@/lib/action";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  return (
    <form action={formAction} className={styles.form}>
      <input
        type="text"
        className="px-6 py-5 focus:outline-0 border-b"
        name="username"
        id="username"
        placeholder="username"
      />
      <input
        className="px-6 py-5 focus:outline-0 border-b"
        type="password"
        name="password"
        id="password"
        placeholder="password"
      />
      <button>Login</button>
      {state?.error}
    </form>
  );
};

export default LoginForm;
