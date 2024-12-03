// app/home.tsx

"use client";

import Navbar from "@/components/ui/Navbar";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from 'next/link';

export default function Page() {

  return (
    <div>
      <Navbar />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "calc(100vh - 70px)", textAlign: "center" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Welcome to the Home Page</h1>
      </div>
    </div>
  );
}