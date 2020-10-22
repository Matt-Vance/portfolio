import * as React from "react";
import { navigate } from 'gatsby-link'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

function ContactForm() {
  const [formValues, setFormValues] = React.useState({});

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...formValues, // your fields paired with key: name
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };
  return (
    <form
      className="contact-form"
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      action="/success"
    >
      <input type="hidden" name="bot-field" />
      <p hidden>
        <label>
          Don’t fill this out:
          <input name="bot-field" onChange={handleChange} />
        </label>
      </p>
      <input
        type="hidden"
        name="form-name"
        value="contact"
        onChange={handleChange}
      />
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
          onChange={handleChange}
          required
        />
        <label htmlFor="email">email </label>
      </div>
      <div className="form-field" id="message-text">
        <textarea
          className="input-text"
          name="message"
          onChange={handleChange}
        ></textarea>
        <label>message: </label>
      </div>

      <button type="submit" value="submit">
        Send
      </button>
    </form>
  );
}

export default ContactForm;
