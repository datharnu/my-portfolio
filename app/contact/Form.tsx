import { Button } from "@nextui-org/react";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
  message: string;
}

export default function Form() {
  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);

    // Reload the page to reset the form
    window.location.reload();
  };

  return (
    <div className="bg-shad md:mx-24 sm:mx-10 lg:mx-64 lg:py-10 md:py-10 sm:py-5 rounded-lg mb-20">
      <form onSubmit={handleSubmit} className="space-y-10 my-10 ">
        <div className=" lg:flex md:flex justify-center sm:text-center sm:space-y-3 gap-10">
          {/* First Name */}
          <div className="space-y-3">
            <div className="text-xs text-gray-300">
              <label htmlFor="firstname">First Name</label>
            </div>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              placeholder="Enter First Name"
              required
              className="rounded-sm py-1 firstname"
            />
          </div>
          {/* Last Name */}
          <div className="space-y-3">
            <div className="text-xs text-gray-300">
              <label htmlFor="lastname">Last Name</label>
            </div>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              placeholder="Enter Last Name"
              required
              className="rounded-sm py-1"
            />
          </div>
        </div>
        <div className="lg:flex md:flex justify-center sm:space-y-3 sm:text-center gap-10">
          {/* Email */}
          <div className="space-y-3">
            <div className="text-xs text-gray-300">
              <label htmlFor="email">Email</label>
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
              required
              className="rounded-sm py-1"
            />
          </div>
          {/* Phone Number */}
          <div className="space-y-3 sm:hidden">
            <div className="text-xs text-gray-300">
              <label htmlFor="phonenumber">Phone Number</label>
            </div>
            <input
              type="tel"
              id="phonenumber"
              name="phonenumber"
              value={formData.phonenumber}
              onChange={handleChange}
              placeholder="Enter Number"
              required
              className="rounded-sm py-1"
            />
          </div>
        </div>
        {/* Message Small Screen */}
        <div className="lg:hidden md:hidden">
          <div className="text-white text-center text-xs pb-3">
            <label htmlFor="message">Message</label>
          </div>
          <div className="text-center">
            <textarea
              id="message"
              name="message"
              rows={10}
              cols={25}
              maxLength={200}
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell us about your project, what you need help with, or any questions you may have."
              className="rounded-sm"
            />
          </div>
        </div>
        {/* Message Large Screen */}
        <div className="sm:hidden ">
          <div className="text-white text-center text-xs pb-3 ">
            <label htmlFor="message">Message</label>
          </div>
          <div className="text-center">
            <textarea
              id="message"
              name="message"
              rows={10}
              cols={45}
              maxLength={200}
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell us about your project, what you need help with, or any questions you may have."
              className="rounded-sm"
            />
          </div>
        </div>
        {/* Submit Button */}
        <div className="flex justify-center">
          <Button
            type="submit"
            className="bg-primary text-xs py-2 px-10 rounded-none"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
