"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send"; // API endpoint to send the email

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);
      if (response.ok) {
        setEmailSubmitted(true);
      } else {
        console.error("Error sending email");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently open to new opportunities. Whether you have a question 
          or just want to say hi, I&apos;ll try my best to get back to you!
        </p>
        <div className="contact-info text-[#ADB7BE] mb-4">
          <p>📧 Email: <a href="mailto:reignskalai76@gmail.com" className="text-white">reignskalai76@gmail.com</a></p>
          <p>📞 Mobile: <span className="text-white">+91 9344394587</span></p>
        </div>
        
     

        {/* Cybersecurity Skills Section */}
        <div className="skills text-[#ADB7BE] mb-4">
          <h5 className="text-lg font-bold text-white my-2">Cybersecurity Skills</h5>
          <ul className="list-disc list-inside">
            <li>🔹 Vulnerability Assessment & Penetration Testing</li>
            <li>🔹 Wireless Network Security</li>
            <li>🔹 Red Team & Blue Team Operations</li>
            <li>🔹 Web Application Security Testing</li>
            <li>🔹 Mobile Application Security</li>
          </ul>
        </div>

        {/* Tools & Platforms Section */}
        <div className="skills text-[#ADB7BE] mb-4">
          <h5 className="text-lg font-bold text-white my-2">Tools & Platforms</h5>
          <ul className="list-disc list-inside">
            <li>🛠️ Kali Linux</li>
            <li>🛠️ Metasploit Framework</li>
            <li>🛠️ Wireshark</li>
            <li>🛠️ Burp Suite</li>
            <li>🛠️ Nmap</li>
            <li>🛠️ Snort</li>
            <li>🛠️ And more...</li>
          </ul>
        </div>

        <div className="socials flex flex-row gap-4">
          <Link href="https://github.com/kalaiyarasan1919" target="_blank">
            <Image src={GithubIcon} alt="GitHub Icon" width={30} height={30} />
          </Link>
          <Link href="https://www.linkedin.com/in/kalai-kalai-4798a7269/" target="_blank">
            <Image src={LinkedinIcon} alt="LinkedIn Icon" width={30} height={30} />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
                Your Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
