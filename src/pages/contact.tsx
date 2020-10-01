import * as React from "react";
import GithubIcon from "../icons/GithubIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import EmailIcon from "../icons/EmailIcon";
import Layout from "../components/layout";

function Contact() {
  return (
    <section className="contact-form-container">
      <EmailIcon />
      <GithubIcon />
      <LinkedinIcon />
    </section>
  );
}

export default Contact;
