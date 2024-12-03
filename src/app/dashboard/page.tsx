"use client";

import React, { useState, useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth, db } from "@/lib/firebaseConfig";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { doc, getDoc } from "firebase/firestore";

const DashboardPage = () => {
  const [user, setUser] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [isWorker, setIsWorker] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        // If no user is signed in, redirect to sign-in page
        <Link href="/signin"></Link>
      } else {
        // If there is a user, set the user state
        setUser(currentUser);

        try {
          // Fetch the user's document from the 'users' collection
          const userDocRef = doc(db, "users", currentUser.uid);
          const userDoc = await getDoc(userDocRef);

          if (userDoc.exists()) {
            const userData = userDoc.data();
            setIsAdmin(userData.isAdmin || false);
            setIsWorker(userData.isWorker || false);
          } else {
            console.warn("No user document found");
            setIsAdmin(false);
            setIsWorker(false);
          }
        } catch (error) {
          console.error("Error fetching user document:", error);
          setIsAdmin(false);
          setIsWorker(false);
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  // Handle sign out
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed out successfully");
        router.push("/signin"); // Back to sign-in page after sign out
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    (<div className="dashboard-container">
      <button className="sign-out-btn" onClick={handleSignOut}>
        Sign Out
      </button>
      <h1>Dashboard</h1>
      {/*"View Venues" button */}
      <div className="action-buttons">
        <Link href="/reservation/venues" legacyBehavior>
          <button className="action-button">View Venues</button>
        </Link>
      </div>
      <Link href="/reservation/userViewPendingReservation" legacyBehavior>
        <button className="action-button">View Your Pending Reservation Requests</button>
      </Link>
      <div className="button-divider" />
      {/* Conditionally render admin-only buttons */}
      {isAdmin && (
        <div>
          <br />
          <h1>Admins: </h1>


        <div className="action-buttons">
          <Link href="/admin/reviewReservations" legacyBehavior>
            <button className="action-button">Review pending reservations</button>
          </Link>
          <div className="button-divider" />
          <Link href="/admin/viewConfirmedReservations" legacyBehavior>
            <button className="action-button">View confirmed reservations</button>
          </Link>
          <div className="button-divider" />
          <Link href="/admin/assignAdmins" legacyBehavior>
            <button className="action-button">Promote Admins</button>
          </Link>
          <div className="button-divider" />
          <Link href="/admin/promoteWorkers" legacyBehavior>
            <button className="action-button">Promote Workers</button>
          </Link>
          <div className="button-divider" />
          <Link href="/admin/createVenue" legacyBehavior>
            <button className="action-button">Add Venues</button>
          </Link>
          <div className="button-divider" />
          <Link href="/admin/editVenue" legacyBehavior>
            <button className="action-button">Edit Venues</button>
          </Link>
        </div>
      </div>
        
      )}
      {/* Conditionally render worker-only button */}
      {isWorker && (
        <div>
          <br />
          <h1></h1>
          <h1>Workers:</h1>
          <div className="action-buttons">
            <Link href="/workers" legacyBehavior>
              <button className="action-button">View Your Work Schedule</button>
            </Link>
          </div>
        </div>
)}
    </div>)
  );
};

export default DashboardPage;
