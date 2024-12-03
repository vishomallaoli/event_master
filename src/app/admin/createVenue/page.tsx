"use client";

import React, { useState, useEffect } from "react";
import { db, auth } from "@/lib/firebaseConfig";
import { collection, setDoc, doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

const CreateVenuePage = () => {
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [capacity, setCapacity] = useState<number>(0);
  const [features, setFeatures] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [venName, setVenName] = useState<string>("");
  const [venueId, setVenueId] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const checkAdminStatus = async () => {
      const user = auth.currentUser;

      if (!user) {
        router.push("/signin");
        return;
      }

      try {
        const userDocRef = doc(db, "users", user.uid);
        const userDocSnapshot = await getDoc(userDocRef);

        if (userDocSnapshot.exists()) {
          const userData = userDocSnapshot.data();
          if (userData.isAdmin) {
            setIsAdmin(true);
          } else {
            setIsAdmin(false);
            router.push("/dashboard");
          }
        } else {
          setIsAdmin(false);
          router.push("/dashboard");
        }
      } catch (error) {
        console.error("Error checking admin status:", error);
        setIsAdmin(false);
        router.push("/dashboard");
      }
    };

    checkAdminStatus();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!capacity || !features || !location || !price || !venName || !venueId) {
      setMessage("All fields are required.");
      return;
    }

    // Ask for confirmation before submitting
    const isConfirmed = window.confirm("Are you sure you want to create this venue?");
    if (!isConfirmed) return;

    try {
      const venueRef = doc(db, "veneus", venueId);
      await setDoc(venueRef, {
        capacity,
        features,
        location,
        price,
        ven_name: venName,
        venue_id: venueId,
      });

      setMessage("Venue added successfully!");
      setCapacity(0);
      setFeatures("");
      setLocation("");
      setPrice(0);
      setVenName("");
      setVenueId("");
    } catch (error) {
      console.error("Error adding venue:", error);
      setMessage("Error adding venue. Please try again.");
    }
  };

  const handleBackToDashboard = () => {
    router.push("/dashboard"); // Redirect to dashboard
  };

  if (isAdmin === null) {
    return <p>Loading...</p>;
  }

  if (!isAdmin) {
    return <p>You do not have permission to view this page.</p>;
  }

  return (
    <div>
      <h1>Add a Venue </h1>
      <h1>Please fill out the following information to add a new venue:</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="capacity">Capacity:</label>
          <input
            type="number"
            id="capacity"
            value={capacity}
            onChange={(e) => setCapacity(Number(e.target.value))}
            required
          />
        </div>

        <div>
          <label htmlFor="features">Features:</label>
          <input
            type="text"
            id="features"
            value={features}
            onChange={(e) => setFeatures(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            required
          />
        </div>

        <div>
          <label htmlFor="ven_name">Venue Name:</label>
          <input
            type="text"
            id="ven_name"
            value={venName}
            onChange={(e) => setVenName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="venue_id">Venue ID:</label>
          <input
            type="text"
            id="venue_id"
            value={venueId}
            onChange={(e) => setVenueId(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "12px 24px",
            fontSize: "16px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "#45a049";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "#4CAF50";
          }}
        >
          Add Venue
        </button>
      </form>

      <button
        onClick={handleBackToDashboard}
        style={{
          backgroundColor: "#f44336",
          color: "white",
          padding: "12px 24px",
          fontSize: "16px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          marginTop: "10px",
          transition: "background-color 0.3s",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = "#e53935";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = "#f44336";
        }}
      >
        Back to Home
      </button>
    </div>
  );
};

export default CreateVenuePage;
