import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import config from '../config';

const SectionF = () => {
  const { address, googleMapsEmbedUrl } = config.sections.sectionF || {};

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const defaultAddress = '39111 W. Six Mile Rd., Livonia, MI 48152';
  const defaultGoogleMapsEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.5105881886655!2d-83.4164797844882!3d42.41674397918219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b4a5940d07df1%3A0x4abdeed720ef7d6b!2s39111%20W%20Six%20Mile%20Rd%2C%20Livonia%2C%20MI%2048152%2C%20USA!5e0!3m2!1sen!2sph!4v1614123456789!5m2!1sen!2sph';

  const finalAddress = address || defaultAddress;
  const finalGoogleMapsEmbedUrl = googleMapsEmbedUrl || defaultGoogleMapsEmbedUrl;

  const openGoogleDirections = () => {
    const destination = encodeURIComponent(finalAddress);
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <section className="w-full py-12 bg-gray-100" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <h1 className="pb-3 text-orange-500 font-bold text-start text-3xl">Our Location</h1>
        <hr className="mb-6" />

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar with Links */}
          <div className="w-full lg:w-1/4 space-y-4 text-sm font-medium text-black">
            <a
              href={`https://maps.apple.com/?q=${encodeURIComponent(finalAddress)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:underline"
            >
              Apple Maps
            </a>
            <a
              href={`https://bing.com/maps?q=${encodeURIComponent(finalAddress)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:underline"
            >
              Bing Maps
            </a>
            <a
              href={`https://earth.google.com/web/search/${encodeURIComponent(finalAddress)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:underline"
            >
              Google Earth
            </a>
            <a
              href={`https://www.google.com/maps/place/${encodeURIComponent(finalAddress)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:underline"
            >
              Google Maps
            </a>
            <button
              onClick={openGoogleDirections}
              className="block text-left hover:underline"
            >
              Google Directions
            </button>
          </div>

          {/* Google Maps Embed */}
          <div className="w-full lg:w-3/4 rounded-lg overflow-hidden shadow-md">
            <iframe
              src={finalGoogleMapsEmbedUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionF;