"use client";
import { Input } from "postcss";
import React, { useState } from "react";

export default function Form() {
  const [value, setValue] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Do something with the form data, for now, just log it
    console.log("First Name:", value);
  };

  return (
    <div>
      <form>
        <label htmlFor="firstName">
          First Name:
          <input
            type="textarea"
            id="firstName"
            value={value}
            placeholder="odunayo"
            // onChange={(e) => setValue(e.target.value)}
          />
          <input />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
