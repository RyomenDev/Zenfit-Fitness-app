

import { useState } from "react";
import emailjs from "emailjs-com";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    console.log(e.target);

    e.preventDefault();

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        e.target,
        EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="md:flex md:space-x-8">
            <div className="md:w-2/3">
              <div className="section-title mb-8">
                <h2 className="text-3xl font-bold text-gray-800">
                  Get In Touch
                </h2>
                <p className="text-gray-600 mt-2">
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form
                name="sentMessage"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control px-4 py-2 border rounded-lg w-full"
                      placeholder="Name"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control px-4 py-2 border rounded-lg w-full"
                      placeholder="Email"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control px-4 py-2 border rounded-lg w-full"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="md:w-1/3 md:ml-8">
              <div className="contact-info space-y-4">
                <div className="contact-item">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Contact Info
                  </h3>
                  <p className="text-gray-600">
                    <span className="font-medium">
                      <i className="fa fa-map-marker"></i> Address:
                    </span>
                    {props.data ? props.data.address : "Loading..."}
                  </p>
                </div>
                <div className="contact-item">
                  <p className="text-gray-600">
                    <span className="font-medium">
                      <i className="fa fa-phone"></i> Phone:
                    </span>
                    {props.data ? props.data.phone : "Loading..."}
                  </p>
                </div>
                <div className="contact-item">
                  <p className="text-gray-600">
                    <span className="font-medium">
                      <i className="fa fa-envelope-o"></i> Email:
                    </span>
                    {props.data ? props.data.email : "Loading..."}
                  </p>
                </div>
                <div className="social space-x-4">
                  <ul className="flex">
                    <li>
                      <a
                        href={props.data ? props.data.facebook : "/"}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href={props.data ? props.data.twitter : "/"}
                        className="text-blue-400 hover:text-blue-600"
                      >
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href={props.data ? props.data.youtube : "/"}
                        className="text-red-600 hover:text-red-800"
                      >
                        <i className="fa fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer id="footer" className="py-4 bg-gray-800 text-white">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; 2023 Issaaf Kattan React Land Page Template. Design by{" "}
            <a
              href="http://www.templatewire.com"
              className="text-blue-400 hover:text-blue-600"
              rel="nofollow"
            >
              TemplateWire
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

