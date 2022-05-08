import React from "react";

export default function Contact() {
  return (
    <div className="bg-dark-cyan py-10">
      <div>
        <div className="uppercase email text-5xl text-center email">
          Send Email
        </div>
        <form
          name="contactForm"
          method="post"
          data-netlify="true"
          className="email"
        >
          <input
            name="name"
            type="text"
            className="feedback-input text-center "
            placeholder="نام "
          />
          <input
            name="email"
            type="email"
            className="feedback-input text-center "
            placeholder="ایمیل"
          />
          <textarea
            name="message "
            className="feedback-input email text-center"
            placeholder="پیام"
          ></textarea>
          <div class="field">
            <div data-netlify-recaptcha="true"></div>
          </div>
          <input type="submit" value="ارسال " />
        </form>
      </div>
    </div>
  );
}
