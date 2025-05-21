import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import config from '../config'; // Import dynamic configuration

const SectionD = () => {
  const {
    aboutTitle = 'About',
    aboutImage = {
      src: 'https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2832&amp;q=80',
      alt: 'Default About Image',
    },
    aboutText = [],
  } = config.sections.sectionD || {}; // Destructure sectionD data from config.js

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="w-full py-12 bg-gray-100" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* About Section Title */}
        <h1 className="pb-3 text-orange-500 font-bold text-start text-3xl">
          {aboutTitle}
        </h1>
        <hr className="mb-6" />

        {/* About Section Content */}
        <div className="flex flex-wrap lg:flex-nowrap items-center gap-8">
          {/* Image on the Left */}
          <div
            className="w-full lg:w-1/2"
            data-aos="fade-right"
          >
            <img
              className="object-cover object-center w-full rounded-lg shadow-xl h-106 shadow-blue-gray-900/50"
              src={aboutImage.src}
              alt={aboutImage.alt}
            />
          </div>

          {/* Text on the Right */}
          <div
            className="w-full lg:w-1/2"
            data-aos="fade-left"
          >
            {Array.isArray(aboutText) ? (
              aboutText.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-slate-600 leading-relaxed font-light text-justify mb-4"
                >
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="text-slate-600 leading-relaxed font-light text-justify">
                {aboutText}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionD;