import React, { useRef, useState } from "react";
import ContactImg from "../images/contact.png";
import { FiPhoneCall, FiMapPin, FiMail } from "react-icons/fi";
import { BiSolidErrorAlt } from "react-icons/bi";
import InputsValidation from "../Middleware/InputsValidation";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputs = (e) => {
    const newObj = { ...values, [e.target.name]: e.target.value };
    setValues(newObj);
  };

  const InputsStyling = "mr-5 px-3 py-2 bg-white rounded-lg text-primer relative";

  const handleForm = (e) => {
    e.preventDefault();
    const validationErrors = InputsValidation(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      emailjs
        .sendForm("service_t7kpwob", "template_d3zzd8t", formRef.current, "ss2bNjXbsq_v44GsF")
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <>
      <div className="relative bg-center mb-36">
        <img src={ContactImg} alt="Contact Images" className="w-full h-80 object-cover" />
        <h1 className="absolute top-1/2 lg:right-80 right-10 transform 
        -translate-x-1/2 -translate-y-1/2 text-5xl lg:text-7xl font-black text-white">
          Contact Us
        </h1>
      </div>
      <div className="flex justify-evenly items-center flex-wrap">
        <div className=" mb-12 lg:ml-1 ml-5">
          <h1 className="text-3xl font-bold mb-3">Let's talk with us</h1>
          <span className="my-5 text-lg">
            Questions, comments, or suggestions? 
            Simply fill in the form, and we'll be in touch shortly.
          </span>
          <div className="space-y-5">
            <div className="flex mt-12">
              <FiMapPin className=" text-efrct text-2xl mr-5"/>
              <span>1055 Arthur Ave Elk Groot, 67. New Palmas South Carolina</span>
            </div>
            <div className="flex">
              <FiPhoneCall className=" text-efrct text-2xl mr-5"/>
              <span>+1 234 678 9108 99</span>
            </div>
            <div className="flex">
              <FiMail className=" text-efrct text-2xl mr-5"/>
              <span>Contact@moralizer.com</span>
            </div>
          </div>
        </div>
        <div>
          <form ref={formRef} onSubmit={handleForm} className="space-y-8 mb-12 shadow-3xl shadow-efrct px-8 py-20 relative">
            <h1 className="text-text text-2xl font-semibold text-center">Add Your Message</h1>
            <div>
              <input
                name="firstName"
                type="text"
                placeholder="First Name"
                className={InputsStyling}
                onChange={handleInputs}
              />
              <input
                name="lastName"
                type="text"
                placeholder="Last Name"
                className={InputsStyling}
                onChange={handleInputs}
              />
            </div>
            <input name="email" type="email" placeholder="Email*" className={InputsStyling} onChange={handleInputs} />
            <input name="phone" type="tel" placeholder="Phone Number*" className={InputsStyling} onChange={handleInputs} />
            <textarea
              name="message"
              rows="4"
              cols="49"
              placeholder="Message........"
              className={`${InputsStyling} block`}
              onChange={handleInputs}
            />
            <button type="submit" className="bg-hover px-6 py-2 rounded-full w-full hover:opacity-75 transition-all">
              Send Message
            </button>

            <div>
              {Object.keys(errors).map((fieldName) => (
                <div className="validationmasseg" key={fieldName}>
                  <BiSolidErrorAlt className="text-lg" />
                  <p>{errors[fieldName]}</p>
                </div>
              ))}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
