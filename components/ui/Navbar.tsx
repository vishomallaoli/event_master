// components/Navbar.tsx

"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const router = useRouter();

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token);
  }, []);

  return (
    <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 2rem", backgroundColor: "#333", color: "#fff" }}>
      <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", cursor: "pointer" }} onClick={() => router.push("/")}>
        EventMaster
      </h1>
      <div style={{ display: "flex", gap: "15px" }}>
        <Link href="/faq" style={{ color: "#fff" }}>FAQ</Link>
        {!isAuthenticated ? (
          <>
            <Link href="/signin" style={{ color: "#fff" }}>Sign In</Link>
            <Link href="/signup" style={{ color: "#fff" }}>Sign Up</Link>
          </>
        ) : (
          <>
            <Link href="/profile" style={{ color: "#fff" }}>Profile</Link>
            <Button onClick={() => router.push("/logout")} style={{ color: "#fff" }}>Logout</Button>
          </>
        )}
      </div>
    </nav>
  );
}