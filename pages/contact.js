import React from "react";
import MainLayout from "../layouts/mainLayout";
import Head from "next/head";

const Contact = (props) => {
  console.log(props.users);
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <header
        className="intro-header"
        style={{ backgroundImage: 'url("assets/images/contact-bg.jpg")' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
              <div className="page-heading">
                <h1>Contact Me</h1>
                <hr className="small" />
                <span className="subheading">
                  Have questions? I have answers (maybe).
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Main Content */}
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            <p>
              Want to get in touch with me? Fill out the form below to send me a
              message and I will try to get back to you within 24 hours!
            </p>
            {/* Contact Form - Enter your email address on line 19 of the mail/contact_me.php file to make this form work. */}
            {/* WARNING: Some web hosts do not allow emails to be sent through forms to common mail hosts like Gmail or Yahoo. It's recommended that you use a private domain email address! */}
            {/* NOTE: To use the contact form, your site must be on a live web host with PHP! The form will not work locally! */}
            <form name="sentMessage" id="contactForm" noValidate="">
              <div className="row control-group">
                <div className="form-group col-xs-12 floating-label-form-group controls">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    id="name"
                    required=""
                    data-validation-required-message="Please enter your name."
                  />
                  <p className="help-block text-danger" />
                </div>
              </div>
              <div className="row control-group">
                <div className="form-group col-xs-12 floating-label-form-group controls">
                  <label>Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    id="email"
                    required=""
                    data-validation-required-message="Please enter your email address."
                  />
                  <p className="help-block text-danger" />
                </div>
              </div>
              <div className="row control-group">
                <div className="form-group col-xs-12 floating-label-form-group controls">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone Number"
                    id="phone"
                    required=""
                    data-validation-required-message="Please enter your phone number."
                  />
                  <p className="help-block text-danger" />
                </div>
              </div>
              <div className="row control-group">
                <div className="form-group col-xs-12 floating-label-form-group controls">
                  <label>Message</label>
                  <textarea
                    rows={5}
                    className="form-control"
                    placeholder="Message"
                    id="message"
                    required=""
                    data-validation-required-message="Please enter a message."
                    defaultValue={""}
                  />
                  <p className="help-block text-danger" />
                </div>
              </div>
              <br />
              <div id="success" />
              <div className="row">
                <div className="form-group col-xs-12">
                  <button type="submit" className="btn btn-default">
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export async function getServerSideProps(context) {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();
  return { props: { users } };
}

Contact.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Contact;
