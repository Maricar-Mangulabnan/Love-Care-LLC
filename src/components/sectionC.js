import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import config from '../config';

const SectionC = () => {
  const { servicesTitle, servicesDescription, cards = [] } = config.sections.sectionC;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="w-full py-12 bg-white-100">
      {/* Services Title and Description */}
      <div className="max-w-4xl mx-auto mt-12" data-aos="fade-up">
        <h1 className="pb-3 text-orange-500 font-bold text-start text-3xl">{servicesTitle}</h1>
        <hr />
        <p className="text-slate-600 text-center leading-relaxed font-light pt-3">
          {servicesDescription}
        </p>
      </div>

      {/* Cards Section */}
      <div
        className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto my-10 px-2"
        data-aos="fade-up"
      >
        {Array.isArray(cards) && cards.length > 0 ? (
          cards.map((card, index) => (
            <div
              key={index}
              className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-80 md:w-96"
              data-aos="fade-up"
              data-aos-delay={100 * index}
            >
              <div className="relative h-98 m-2.5 overflow-hidden text-white rounded-md">
                <img
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4">
                <h6 className="mb-2 text-slate-800 text-xl font-semibold">{card.title}</h6>
                <p className="text-slate-600 leading-normal font-light py-5">{card.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-slate-600 text-center">No services available at the moment.</p>
        )}
      </div>

      {/* Other Services Section */}
      <div className="max-w-4xl mx-auto mt-12" data-aos="fade-up">
        <h1 className="pb-3 text-orange-500 font-bold text-start text-3xl">
          {config.sections.sectionC.otherServicesTitle}
        </h1>
        <hr className="mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-600">
          {config.sections.sectionC.otherServicesList.map((service, index) => (
            <ul key={index} className="list-disc pl-5">
              <li>{service}</li>
            </ul>
          ))}
        </div>
      </div>

    </section>
  );
};

export default SectionC;