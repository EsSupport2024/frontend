"use client";
import React, {useState} from "react";

const ContactForm = () => {
  const [submitForm, setSubmitForm] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitForm(true);

    await fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLScIJfNAPdNrOffv35V4qqzGpOY6jqXGxpbtrptH8eumqW7Ucw/formResponse",
      {
        method: "POST",
        body: new FormData(event.currentTarget),
        mode: "no-cors",
      },
    );

    setSubmitForm(false);
    setSuccess(true);
  };

  return (
    <div>
      {submitForm ? (
        <div role="status" className="animate-pulse mt-5">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
          <div className="mb-5"></div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px]"></div>
          <div className="h-10 bg-gray-200 rounded-lg dark:bg-gray-700 w-full mt-8"></div>
        </div>
      ) : (
        <form
          className="border-t-2 border-black pt-5 mt-5 space-y-3"
          onSubmit={handleSubmit}
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
            <label className="mb-2 text-sm font-bold text-gray-900">
              Messages
            </label>
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
      )}
      {success && (
        <div className="p-2 rounded-lg mt-4 text-center text-sm lg:text-lg px-5 py-2.5 bg-orange font-medium text-white animate-pulse">
          Form submitted successfully
        </div>
      )}
    </div>
  );
};

export default ContactForm;
