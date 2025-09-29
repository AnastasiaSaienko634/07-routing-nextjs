"use client";

interface ErrorProps {
  error: Error;
}

const ErrorNote = ({ error }: ErrorProps) => {
  return (
    <div>
      <p>Could not fetch note details. </p>
      <p>{error.message}</p>
    </div>
  );
};

export default ErrorNote;
