import { useState } from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE;

  const onSubmit = (data) => {
    if (data) {
      const form = document.forms["google-sheet"];
      fetch(scriptUrl, { method: "POST", body: new FormData(form) })
        .then((response) => setSuccess(true))
        .catch((error) => console.error("Error!", error.message));
    }
  };

  return (
    <div className="signup">
    {success && (
        <h3 style={{ textAlign: "center" }}>
        Thank you for your submission!
        </h3>
    )}
    {!success && (
        <>
        <h2 className="pxglow">Get In Touch</h2>
        <form onSubmit={handleSubmit(onSubmit)} name="google-sheet">
            <div className="flex-form">
            <div className="contact-info">
                <div className="input-label">
                <label htmlFor="name">Name *</label>
                <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    required
                    name="Name"
                />
                </div>
                <div className="input-label">
                <label htmlFor="email">Email address *</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Email Address"
                    name="Email"
                    required
                />
                </div>
            </div>
            <div className="contact-info message-margin">
                <div className="input-label">
                <label htmlFor="message">Message *</label>
                <textarea
                    name="Message"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="Message"
                    required
                ></textarea>
                </div>
            </div>
            </div>
            <div className="contact-button">
            <button>Submit message</button>
            </div>
        </form>
        </>
    )}
    </div>
  );
}
