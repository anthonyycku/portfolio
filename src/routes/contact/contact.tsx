import React from 'react';

const Contact = () => {

  const handleEmailClick = () => {
    window.open('mailto:anthony.yc.ku@gmail.com');
  }

  return (
    <div className="flex flex-col space-y-2">
      <p>Thank you very much for visiting my site.</p>
      <p>
        Please find my contact information below should you want to connect with me!
      </p>

      <div className="flex space-x-2 pt-4">
        <p className="text-yellow-500">#Contact</p>
        <p>{`{`}</p>
      </div>

      <div className="pl-4 flex space-x-2 items-center">
        <p className="">email:</p>
        <button
          onClick={handleEmailClick}
          className="text-blue-500 hover:text-white border border-blue-500 hover:bg-blue-800 rounded px-2">
          Send me an email!
        </button>
      </div>

      <div className="pl-4 flex space-x-2 items-center">
        <p>linkedIn:</p>
        <button
          className="text-emerald-500 hover:text-white border border-emerald-500 hover:bg-emerald-800 rounded px-2"
        >
          <a target="_blank" href="https://www.linkedin.com/in/anthonyycku/">
            Connect with me!
          </a>
        </button>
      </div>

      <p>{`}`}</p>
    </div>
  )
};

export default Contact;