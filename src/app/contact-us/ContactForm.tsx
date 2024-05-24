// "use client";
import React from "react";

const ContactForm = () => {
  //  handle Submit form action

  // const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const form = document.getElementById(
  //     "contactForm",
  //   ) as HTMLFormElement | null;

  //   if (!form) return;

  //   const formData = new FormData(form);
  //   const formAction = form.action;

  //   const queryParams = new URLSearchParams();
  //   for (const [key, value] of formData.entries()) {
  //     queryParams.append(key, value as string);
  //   }

  //   const urlWithParams = `${formAction}?${queryParams.toString()}`;
  //   window.open(urlWithParams);
  //   form.reset();
  //   alert("Form submitted and reset successfully!");

  // fetch(urlWithParams)
  //   .then((response) => {
  //     if (response.ok) {
  //       form.reset();

  //     } else {
  //       alert("Form submission failed.");
  //     }
  //   })
  //   .catch((error) => {
  //     console.error("Error:", error);
  //     alert("Form submission failed.");
  //   });
  // };

  return (
    <form
      className="border-t-2 border-black pt-5 mt-5 space-y-3"
      action="https://docs.google.com/forms/d/e/1FAIpQLScIJfNAPdNrOffv35V4qqzGpOY6jqXGxpbtrptH8eumqW7Ucw/formResponse"
      method="POST"
      // onSubmit={handleFormSubmit}
      id="contactForm"
    >
      <div className="flex justify-between gap-10">
        <div className="w-full">
          <label className="mb-2 text-sm font-bold text-gray-900">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="entry.364763623"
            className="border rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="First Name"
            required
          />
        </div>
        <div className="w-full">
          <label className="mb-2 text-sm font-bold text-gray-900">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="entry.1615064793"
            className="border rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Last Name"
            required
          />
        </div>
      </div>
      <div>
        <label className="mb-2 text-sm font-bold text-gray-900">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="entry.25546596"
          className="border rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
          placeholder="name@gmail.com"
          required
        />
      </div>
      <div>
        <label className="mb-2 text-sm font-bold text-gray-900">Messages</label>
        <textarea
          id="message"
          name="entry.1913037194"
          className="border rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 lg:h-36"
          placeholder="Type here..."
          required
        />
      </div>
      <button
        type="submit"
        className="text-white bg-primaryBlue w-full focus:ring-4 focus:outline-none font-medium rounded-lg text-sm lg:text-lg px-5 py-2.5 text-center"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
