import * as React from "react";

function ContactForm(){
  return (
    <form
      className="contact-form"
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <div className="form-field">
        <input
          type="text"
          id="name"
          className="input-text"
          name="name"
          placeholder="enter your name"
          required
        />
        <label htmlFor="name">name </label>
      </div>
      <div className="form-field">
        <input
          type="email"
          id="email"
          className="input-text"
          name="email"
          placeholder="enter your email"
          required
        />
        <label htmlFor="email">email </label>
      </div>
      <div className="form-field" id = "message-text">
        <textarea className="input-text" name="message"></textarea>
        <label>message: </label>
      </div>

      <button type="submit" value="submit">
        Send
      </button>
    </form>
  );
}

export default ContactForm;
