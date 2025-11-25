"use client";

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log("response", response);
      // const result = await response.json();
      // if (response.ok) {
      //   alert(result.message);
      // } else {
      //   alert(result.error);
      // }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen  flex justify-center items-center bg-forth text-secondary lg:px-20 p-6">
      <div className="flex justify-between">
        <div className=" lg:w-1/2 hidden lg:flex lg:flex-col">
          <h1 className=" text-6xl font-semibold font-poppins capitalize mt-40">
            Tell us about your project
          </h1>
          <p className=" mt-10 font-poppins w-[500px]">
            In our brief consultation, protected by an NDA, we will assess your
            product for critical design issues and outline potential steps that
            are tailored specifically to your goals
          </p>
        </div>
        <div className=" lg:w-1/2 px-6">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap gap-10 mt-20 justify-between">
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="border-b-2 border-orange-600 bg-transparent py-2 focus:outline-none outline-none"
                placeholder="Full Name"
              />
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="border-b-2 border-orange-600 bg-transparent py-2 focus:outline-none outline-none"
                placeholder="Email"
              />
              <input
                type="text"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="border-b-2 border-orange-600 bg-transparent py-2 focus:outline-none outline-none"
                placeholder="Phone Number"
              />
              <input
                type="text"
                name="country"
                id="country"
                value={formData.country}
                onChange={handleChange}
                className="border-b-2 border-orange-600 bg-transparent py-2 focus:outline-none outline-none"
                placeholder="Country"
              />
            </div>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="outline-0 mt-10 p-2.5 w-full text-sm bg-transparent border-b-2 border-orange-600 focus:outline-none outline-none"
              placeholder="Message"
            ></textarea>
            <div>
              <button
                type="submit"
                className="py-3 lg:px-20 p-6 bg-orange-600 mt-10 rounded-full"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
