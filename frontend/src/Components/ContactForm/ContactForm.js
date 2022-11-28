import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import "./contactform.css";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Function that displays a success toast on bottom right of the page when form submission is successful
  const toastifySuccess = () => {
    toast("Form sent!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, subject, message } = data;
    try {
      const templateParams = {
        name,
        email,
        subject,
        message,
      };

      await emailjs.send(
        "service_1oggn3z",
        "template_ol5nwii",
        templateParams,
        "MaKHUGjpex190Fkcy"
      );

      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="app___formcontrol">
      <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <h1>Contactez-nous</h1>
        <div className="form__input mb-3">
          <input
            type="text"
            name="name"
            {...register("name", {
              required: { value: true, message: "Please enter your name" },
              maxLength: {
                value: 30,
                message: "Please use 30 characters or less",
              },
            })}
            className="form-control formInput"
            placeholder="Please enter your name"
          ></input>
          {errors.name && (
            <span className="errorMessage">{errors.name.message}</span>
          )}
        </div>
        <div className="form__input mb-3">
          <input
            type="email"
            name="email"
            {...register("email", {
              required: true,
              pattern:
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            })}
            className="form-control formInput"
            placeholder="Please enter your email"
          ></input>
          {errors.email && (
            <span className="errorMessage">
              Please enter a valid email address
            </span>
          )}
        </div>
        <div className="form__input mb-3">
          <input
            type="text"
            name="subject"
            {...register("subject", {
              required: { value: true, message: "Please enter a subject" },
              maxLength: {
                value: 75,
                message: "Subject cannot exceed 75 characters",
              },
            })}
            className="form-control formInput"
            placeholder="Please enter a subject"
          ></input>
          {errors.subject && (
            <span className="errorMessage">{errors.subject.message}</span>
          )}
        </div>
        <div className="form__input mb-4">
          <textarea
            rows={3}
            name="message"
            {...register("message", {
              required: true,
            })}
            className="form-control formInput"
            placeholder="Please enter a message"
          ></textarea>
          {errors.message && (
            <span className="errorMessage">Please enter a message</span>
          )}
        </div>
        <button className="submit-btn" type="submit">
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
