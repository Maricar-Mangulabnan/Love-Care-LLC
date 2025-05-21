import React, { useEffect } from 'react';
import { IoCall } from 'react-icons/io5';
import AOS from 'aos';
import 'aos/dist/aos.css';
import config from '../config'; 

const SectionB = () => {
  const {
    heroTitle = 'Default Hero Title',
    heroSubtitle = 'Default Hero Subtitle',
    learnAboutText = 'Learn About',
    phoneNumber = '',
    phoneLabel = '',
    heroBackgroundImage = '',
    cardData = [],
    description = 'Default description',
  } = config.sections.sectionB || {}; 

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <section
        className="relative w-full h-screen bg-cover bg-center bg-opacity-60 flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
            url("${heroBackgroundImage}")
          `,
          backdropFilter: 'blur(10px)',
        }}
        data-aos="fade-in"
      >
        <div className="p-8 rounded-lg">
          <h1
            className="font-bold leading-snug tracking-tight mx-auto my-6 text-3xl lg:text-5xl text-orange-500"
            data-aos="fade-up"
          >
            {heroTitle}
          </h1>

          <hr className="border-orange-500 w-1/2 mx-auto mb-6" data-aos="fade-up" />

          <h2 className="text-lg lg:text-2xl" data-aos="fade-up" data-aos-delay="200">
          {heroSubtitle}
          </h2>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
          <button
            className="rounded-md border border-orange-500 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-orange-500 hover:text-white hover:bg-orange-400 hover:border-orange-400 focus:text-white focus:bg-orange-400 focus:border-orange-400 active:border-orange-400 active:text-white active:bg-orange-400 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            aria-label="Learn more about our services"
            data-aos="fade-up"
            data-aos-delay="400"
            onClick={() => {
              const servicesSection = document.getElementById('services');
              if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            {learnAboutText}
          </button>

            {phoneNumber && (
              <button
                className="flex items-center gap-2 rounded-md bg-orange-500 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-orange-600 focus:shadow-none active:bg-orange-700 hover:bg-orange-600 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                onClick={() => window.location.href = `tel:${phoneNumber}`}
                aria-label={`Call us at ${phoneLabel}`}
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <IoCall className="text-lg" />
                {phoneLabel}
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="w-full py-12 bg-gray-100" data-aos="fade-up">
        <div className="flex flex-wrap justify-center py-12 gap-8 max-w-7xl mx-auto">
          {cardData.length > 0 ? (
            cardData.map((card, index) => (
              <div
                key={index}
                className="relative flex flex-col bg-white shadow-lg border border-slate-200 rounded-lg w-80 md:w-96"
                data-aos="fade-up"
                data-aos-delay={200 + index * 200}
              >
                <div className="p-6">
                  <h5 className="mb-4 text-orange-400 text-xl font-semibold text-center">
                    {card.title}
                  </h5>
                  <hr className="mb-4" />
                  <p className="text-slate-600 text-center leading-normal font-light">
                    {card.description}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-slate-600">No services available.</p>
          )}
        </div>

        <div className="max-w-4xl mx-auto mt-12" data-aos="fade-up" data-aos-delay="400">
          <p className="text-slate-600 text-center leading-relaxed font-light">
            {description}
          </p>
        </div>
      </section>
    </>
  );
};

export default SectionB;