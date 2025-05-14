import React from "react";
import "../style/Contact.css"; // Import the external CSS file
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Button } from "react-bootstrap";
import { Flip, ToastContainer, toast } from "react-toastify";
// import { db } from "../firebase"; // Make sure to import firebase config

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    // Handle form submission
    console.log(data);

    // try {
    //   await db.collection("contacts").add(data);
    //   alert("Your message has been sent!");
    // } catch (error) {
    //   alert("There was an error sending your message.");
    // }

    // Show success toast notification
    toast.success("Form submitted successfully!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Flip,
      className: "custom-toast",
      style: {
        backgroundColor: "#1a73e8",
        color: "#ffffff",
      },
    });

    reset();
  };

  return (
    <>
      <div className="contact-container">
        <div className="container">
          <h2>Contact Me</h2>
          <p>
            If you have any questions or want to get in touch, feel free to
            contact me using the form below or through my contact information.
          </p>

          <div className="row">
            {/* Contact Form */}
            <div className="col-md-6">
              <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    {...register("name", {
                      required: "Name is required",
                      minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters",
                      },
                      maxLength: {
                        value: 25,
                        message: "Name must be at most 25 characters",
                      },
                    })}
                    placeholder="Your Name"
                    className={errors.name ? "input-error" : ""}
                  />
                  {/* {errors.name && (
                    <p className="error-message">{errors.name.message}</p>
                  )} */}
                  <ErrorMessage
                    errors={errors}
                    name="name"
                    render={({ message }) => (
                      <p className="error-message">{message}</p>
                    )}
                  />
                </div>

                <div className="form-group">
                  <label>Email address</label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Enter a valid email address",
                      },
                    })}
                    placeholder="Your Email"
                    className={errors.email ? "input-error" : ""}
                  />
                  {/* {errors.email && (
                    <p className="error-message">{errors.email.message}</p>
                  )} */}
                  <ErrorMessage
                    errors={errors}
                    name="email"
                    render={({ message }) => (
                      <p className="error-message">{message}</p>
                    )}
                  />
                </div>

                <div className="form-group">
                  <label>Subject</label>
                  <input
                    type="text"
                    {...register("subject", {
                      required: "Subject is required",
                      minLength: {
                        value: 3,
                        message: "Subject must be at least 3 characters",
                      },
                    })}
                    placeholder="Subject"
                    className={errors.subject ? "input-error" : ""}
                  />
                  {/* {errors.subject && (
                    <p className="error-message">{errors.subject.message}</p>
                  )} */}
                  <ErrorMessage
                    errors={errors}
                    name="subject"
                    render={({ message }) => (
                      <p className="error-message">{message}</p>
                    )}
                  />
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message: "Message must be at least 10 characters",
                      },
                    })}
                    placeholder="Your Message"
                    rows="4"
                    className={errors.message ? "input-error" : ""}
                  ></textarea>
                  {/* {errors.message && (
                    <p className="error-message">{errors.message.message}</p>
                  )} */}
                  <ErrorMessage
                    errors={errors}
                    name="message"
                    render={({ message }) => (
                      <p className="error-message">{message}</p>
                    )}
                  />
                </div>

                <Button variant="primary" type="submit">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information with Icons */}
            <div className="col-md-6 contact-info">
              <h3>Contact Information</h3>
              <ul>
                <li>
                  <a href="mailto:jigarprajapati26122003@gmail.com">
                    <i className="fas fa-envelope"></i>
                   pdikkuu@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+918320216573">
                    <i className="fas fa-phone"></i> +91 8320216573
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/davda-preeti-b18801315/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin"></i> Preeti Davda
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Davda-Preeti"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i> Preeti Davda
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Contact;
