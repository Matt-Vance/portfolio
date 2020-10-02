import * as React from "react";
import GithubIcon from "../icons/GithubIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import EmailIcon from "../icons/EmailIcon";

function Contact() {
  return (
    <section className="contact-form-container">
      <EmailIcon />
      <GithubIcon link="https://github.com/mvance43776"/>
      <LinkedinIcon link="https://www.linkedin.com/in/matt-vance-8b169265"/>
    </section>
  );
}

export default Contact;
