"use client";
import { useState, useEffect } from "react";
import "../styles/login.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const [password, setPassword] = useState("");

  const router = useRouter();
  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event: any) => {
    event.preventDefault(); // Prevent the form from submitting traditionally

    const hardcodedPassword = "Ilovechicken123"; // This should be replaced with a more secure check in a real application
    if (password === hardcodedPassword) {
      router.push("/valentine"); // Redirect to a new page upon correct password
    } else {
      alert("Incorrect password"); // Simple feedback
    }
  };

  return (
    <main>
      <div id="wrapper">
        <div id="login">
          <h1>Enter Password</h1>
          <form className="form" action="submit" onSubmit={handleLogin}>
            <input
              type="password"
              name="text"
              autoComplete="off"
              required
              onChange={handlePasswordChange}
              value={password}
            />
            <label htmlFor="text" className="label-name">
              <span className="content-name"> Password </span>
            </label>
          </form>
        </div>
      </div>
    </main>
  );
}
