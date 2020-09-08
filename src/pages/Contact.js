import React from "react";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import HeaderContact from "../components/HeaderContact";

function Contact() {
  return (
    <div>
      <HeaderContact />
      <ContactForm />
      <div></div>
      <Footer />
    </div>
  );
}

export default Contact;
