import React from "react";

const ContactSection = () => {
  return (
    <div className=" bg-gray-100 py-20  " id="contact">
      <div className="  relative text-center p-20  mx-5 lg:mx-auto  rounded-lg animate-modal-appear overflow-hidden bg-white max-w-lg ">
        <h1 className=" lg:text-6xl text-4xl font-bold mb-8">
          Contact<span className="text-blue-500">.</span>
        </h1>
        <p className="mb-4 lg:text-md text-xs">
          Shoot me an email if you want to connect! You can also find me on{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Linkedin
          </a>{" "}
          or{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Twitter
          </a>{" "}
          if that&rsquo;s more your speed.
        </p>
        <div className="flex items-center justify-center">
          <svg
            className="w-6 h-6 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <a
            href="mailto:olagbemisoyee@gmail.com"
            className="lg:text-xl text-sm hover:underline font-semibold"
          >
            olagbemisoyee@gmail.com
          </a>
        </div>
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className={`absolute bottom-0 left-${Math.floor(
                Math.random() * 100
              )}% animate-float-bubble opacity-70`}
              style={{
                width: `${Math.floor(Math.random() * 30 + 10)}px`,
                height: `${Math.floor(Math.random() * 30 + 10)}px`,
                backgroundColor: [
                  "#FF6B6B",
                  "#4ECDC4",
                  "#45B7D1",
                  "#FFA07A",
                  "#98D8C8",
                ][Math.floor(Math.random() * 5)],
                animationDuration: `${Math.floor(Math.random() * 5 + 3)}s`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
