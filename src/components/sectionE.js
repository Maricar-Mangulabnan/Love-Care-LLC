import React, { useState, useEffect } from 'react';
import {
  IoCallOutline,
  IoMailOutline,
} from "react-icons/io5";
import { TfiWorld } from "react-icons/tfi";
import { MdOutlineLocationOn } from "react-icons/md";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaTwitter,
  FaTiktok,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaSquareGooglePlus } from "react-icons/fa6";

import AOS from 'aos';
import 'aos/dist/aos.css';
import config from '../config';

const SectionE = () => {
  const { profileImage, profileAlt, businessName, contact, socialMedia } =
    config.sections.sectionE || {};

  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, subject, message } = formData;

    const mailtoLink = `mailto:${
      contact?.email || "annparis3@yahoo.com"
    }?cc=webdev@bizsolutions.us,jhenelle.villanueva@bizsolutions.us&subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(`Name: ${name}\n\nMessage: ${message}`)}`;

    window.location.href = mailtoLink;
  };

  const defaultLink = "https://mybizsolutions.us/";

  const socialMediaIcons = [
    { href: socialMedia?.googlePlus, icon: <FaSquareGooglePlus /> },
    { href: socialMedia?.linkedIn, icon: <FaLinkedin /> },
    { href: socialMedia?.facebook, icon: <FaFacebookSquare /> },
    { href: socialMedia?.twitter, icon: <FaTwitter /> },
    { href: socialMedia?.tiktok, icon: <FaTiktok /> },
    { href: socialMedia?.instagram, icon: <FaInstagram /> },
    { href: socialMedia?.youtube, icon: <FaYoutube /> },
  ].filter(link => link.href); // Remove any icons with null or empty href

  return (
    <section className="w-full py-12 bg-white-100" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Contact Section Title */}
        <h1 className="pb-3 text-orange-500 font-bold text-start text-3xl">
          Contact Us
        </h1>
        <hr className="mb-6" />

        {/* Two-Column Layout */}
        <div className="flex flex-wrap lg:flex-nowrap items-start gap-8 mt-8">
          {/* Form on the Left */}
          <div className="w-full lg:w-1/2">
            <div className="relative flex flex-col rounded-xl bg-white shadow-lg p-6">
              <h4 className="block text-xl font-medium text-slate-800">
                Send us a message!
              </h4>
              <form className="mt-8 w-full" onSubmit={handleSubmit}>
                {/* Name Input */}
                <div className="mb-4">
                  <label className="block mb-2 text-sm text-slate-600">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-4 py-3"
                    placeholder="Your Name"
                    required
                  />
                </div>
                {/* Subject Input */}
                <div className="mb-4">
                  <label className="block mb-2 text-sm text-slate-600">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-4 py-3"
                    placeholder="Your Subject"
                    required
                  />
                </div>
                {/* Message Input */}
                <div className="mb-4">
                  <label className="block mb-2 text-sm text-slate-600">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-4 py-3 h-28"
                    placeholder="Your Message"
                    required
                  />
                </div>
                {/* Submit Button */}
                <button
                  className="w-full rounded-md bg-orange-500 py-3 px-4 text-center text-sm text-white"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>


          {/* Contact Details on the Right */}
          <div className="w-full lg:w-1/2 space-y-6">
            {/* Profile Image or Business Name */}
            {profileImage ? (
              <img
                src={profileImage}
                alt={profileAlt || "profile image"}
                className="inline-block h-[110px] object-cover "
              />
            ) : (
              <>
                <h1 className="pt-3 text-orange-500 font-bold text-start text-3xl">
                  {businessName || "BizSolutions"}
                </h1>
                <hr className="mb-6" />
              </>
            )}

            {/* Contact Info */}
            <div className="space-y-4 text-slate-600">
              <div className="flex items-center gap-3">
                <IoCallOutline className="text-xl text-slate-800" />
                <a
                  href={`tel:${contact?.phone || "7347716456"}`}
                  className="text-slate-800 hover:text-orange-500"
                >
                  {contact?.phoneLabel || "(734) 771-6456"}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <IoMailOutline className="text-xl text-slate-800" />
                <a
                  href={`mailto:${contact?.email || "annparis3@yahoo.com"}`}
                  className="text-slate-800 hover:text-orange-500"
                >
                  {contact?.email || "annparis3@yahoo.com"}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <TfiWorld className="text-xl text-slate-800" />
                <a
                  href={contact?.website || defaultLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-800 hover:text-orange-500"
                >
                  {contact?.website || "Visit Website"}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MdOutlineLocationOn className="text-xl text-slate-800" />
                <span>{contact?.address || "Address not provided"}</span>
              </div>
            </div>

            <button
              className="flex items-center gap-2 rounded-md border border-orange-500 py-2 px-4 text-center text-sm text-orange-500 transition-all shadow-sm hover:shadow-lg hover:text-white hover:bg-orange-400 hover:border-orange-400"
              type="button"
              onClick={() => window.open(contact?.website || defaultLink, '_blank')}
            >
              <LuSquareArrowOutUpRight />
              Visit Main Website
            </button>

            {/* Social Media Icons */}
            {socialMediaIcons.length > 0 && (
              <div>
                <p className="text-slate-600 font-medium mb-2">Social Media Sites</p>
                <div className="flex items-center gap-4 text-slate-800 text-2xl">
                  {socialMediaIcons.map((link, index) => (
                    <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-all">
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionE;
