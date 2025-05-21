import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from './components/sectionA';
import Landing from './components/sectionB';
import Services from './components/sectionC';
import About from './components/sectionD';
import Contact from './components/sectionE';
import Location from './components/sectionF';
import Footer from './components/sectionG';
import config from './config';

function App() {
  const { title = "Default Title", meta = {}, sections = {} } = config;

  useEffect(() => {
    const disableRightClick = (event) => {
      event.preventDefault();
    };

    window.addEventListener('contextmenu', disableRightClick);

    return () => {
      window.removeEventListener('contextmenu', disableRightClick);
    };
  }, []);

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={meta.description || "Default description"} />
        <meta name="keywords" content={meta.keywords?.join(', ') || "default, keywords"} />
        <meta name="author" content={meta.author || "Default Author"} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <link rel="canonical" href={meta.canonicalUrl || "https://defaulturl.com"} />
      </Helmet>

      <Header
        logo={sections.header?.logo || null}
        businessName={sections.header?.businessName || "Default Business Name"}
      />

      <section id="landing">
        <Landing {...sections.landing || { heroTitle: "Default Title", heroSubtitle: "Default Subtitle" }} />
      </section>

      <section id="services">
        <Services {...sections.services || { servicesTitle: "Our Services", servicesDescription: "Default Description" }} />
      </section>

      <section id="about">
        <About {...sections.about || { aboutTitle: "About Us", aboutText: "Default About Text" }} />
      </section>

      <section id="contact">
        <Contact {...sections.contact || { contactTitle: "Contact Us", contactEmail: "default@email.com" }} />
      </section>

      <section id="location">
        <Location {...sections.location || { address: "Default Address", mapEmbedUrl: "" }} />
      </section>

      <Footer {...sections.footer || { footerText: "Default Footer Text" }} />
    </div>
  );
}

export default App;
