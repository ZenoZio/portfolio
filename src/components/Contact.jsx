import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[rgb(10,25,47)] flex justify-center items-center p-4"
    >
      <form method="post" action="https://getform.io/f/nbvvmqxb" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
        </div>
        <p className="text-gray-300 py-4 ">
          // Submit the form below or shoot me an email -
          ngoctrieulk1118@gmail.com
        </p>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="bg-[#ccd6f6] p-2"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="my-4 bg-[#ccd6f6] p-2"
        />
        <textarea
          name="message"
          className="bg-[#ccd6f6] p-2"
          rows="10"
          placeholder="Message"
        ></textarea>

        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
