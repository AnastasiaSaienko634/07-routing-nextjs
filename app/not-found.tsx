"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => router.push("/"));
    return () => clearTimeout(timer);
  }, [router]);
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>
        Sorry, the page you are looking for doesnt exist, you will be return to
        a Home page.
      </p>
    </div>
  );
};

export default NotFound;
