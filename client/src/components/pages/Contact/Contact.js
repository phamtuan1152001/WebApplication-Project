import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <>
      <div class="contact-container">
        <div class="left-col">
          <img
            src="/image/Contact-poster.jpg"
            className="contact-img"
            alt="Poster"
          ></img>
        </div>
        <div class="right-col">
          <h1>Contact us</h1>
          <p></p>

          <form id="contact-form" method="post">
            <label for="name">Full name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <label for="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email Address"
              required
            />
            <label for="message">Message</label>
            <textarea
              rows="6"
              placeholder="Your Message"
              id="message"
              name="message"
              required
            ></textarea>
            <a href="\">
              <button type="submit" id="submit" name="submit">
                Submit
              </button>
            </a>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
