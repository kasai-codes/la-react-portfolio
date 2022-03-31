import { validateEmail } from "../../utils/helpers";
import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Enter a valid email address.");
    } else if (!name) {
      setErrorMessage("Name is required");
    } else if (!email) {
      setErrorMessage("Email is required");
    } else if (!message) {
      setErrorMessage("Message is required");
    }

    setName("");
    setEmail("");
  };

  return (
    <main className="container" id="Contact">
      <div className="row">
        <div className="col-md-12">
          <h1 className="display-4 text-center">Contact</h1>
          <hr className="my-4" />
          <div className="col-12">
            <form>

              <div className="form-group">
                <input
                  className="form-control"
                  value={name}
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  type="name"
                  placeholder="Name"
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  className="form-control"
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                />
              </div>

              <div className="form-group">
                <label for="message">Send A Message</label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Type a short message"
                >
                  <input
                    value={message}
                    name="message"
                    onChange={(e) => setMessage(e.message.value)}
                  />
                </textarea>
              </div>

              <p className="form-alert">{errorMessage}</p>

              <button
                type="button"
                className="btn btn-dark mt-1"
                onClick={handleFormSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
