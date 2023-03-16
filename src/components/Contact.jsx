import { createElement, useRef } from "react";
import { content } from "../Content";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const { Contact } = content;
  const form = useRef();

  // Sending Email
  const sendEmail = (e) => {
    e.preventDefault();

    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "priyank",
        email: "jainpriyank789@gamil.com",
      }),
    };
    fetch(
      "https://public.herotofu.com/v1/2429bc70-ba6d-11ed-ab97-31ebb4a00cbf",
      requestOptions
    )
      .then((response) => {
        toast.success("Email send Successfully");
        return response.json();
      })
      .then((data) => {
        this.setState({ postId: data.id });
        form.current.reset();
      })
      .catch((err) => {
        console.log("err", err);
        toast.error(err);
      });

    // emailjs
    //   .sendForm(
    //     "YOUR_SERVICE_ID",
    //     "YOUR_TEMPLATE_ID",
    //     form.current,
    //     "YOUR_PUBLIC_KEY"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //       // Clear all input field values
    //       form.current.reset();
    //       // Success toast message
    //       toast.success("Email send Successfully");
    //     },
    //     (error) => {
    //       console.log(error.text);
    //       toast.error(error.text);
    //     }
    //   );
  };

  return (
    <section className="bg-dark_primary text-white" id="contact">
      <Toaster />
      <div className="md:container px-5 py-14">
        <h2 className="title !text-white" data-aos="fade-down">
          {Contact.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Contact.subtitle}
        </h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
          <form
            ref={form}
            // onSubmit={sendEmail}
            data-aos="fade-up"
            className="flex-1 flex flex-col gap-5"
            action="https://public.herotofu.com/v1/2429bc70-ba6d-11ed-ab97-31ebb4a00cbf"
            method="post"
            accept-charset="UTF-8"
          >
            {/* Input Name as same as email js templates values */}
            <input
              name="Name"
              id="name"
              type="text"
              placeholder="Name"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <input
              name="Email"
              id="email"
              type="email"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              placeholder="Email Id"
              required
              className="border border-slate-600 p-3 rounded"
            />
            {/* <textarea
              name="message"
              placeholder="Message"
              className="border border-slate-600 p-3 rounded h-44"
              required
            ></textarea> */}
            <button
              className="btn self-start
            bg-white text-dark_primary"
              type="submit"
            >
              Submit
            </button>
          </form>
          <div className="flex-1 flex flex-col gap-5">
            {Contact.social_media.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 430}
                className="flex items-center gap-2"
              >
                <h4 className="text-white">{createElement(content.icon)}</h4>
                <a className="font-Poppins" href={content.link} target="_blank">
                  {content.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
