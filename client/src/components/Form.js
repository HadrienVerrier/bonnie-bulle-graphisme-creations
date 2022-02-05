import React, { useState } from "react";

const Form = () => {
  const [identity, setIdentity] = useState(null);
  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(
      "/api/server?" +
        new URLSearchParams({ table: "message", identity, email, message }),
      { method: "POST" }
    ).then((res) => {
      return res.json();
    });

    if (res.message === "success") {
      document.querySelector(".success-message").classList.toggle("active");
    }

    setEmail("");
    setIdentity("");
    setMessage("");
  };

  return (
    <article className="contact-form" action="#">
      <h2>Contactez-moi</h2>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="row">
          <label>
            <span>Nom Prénom *</span>
            <input
              type="text"
              name="identity"
              id="identity"
              placeholder="Henri Matisse"
              required
              value={identity}
              onChange={(e) => {
                setIdentity(e.target.value);
              }}
            />
          </label>
          <label>
            <span>Email *</span>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder="henri.matisse@artiste.com"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
        </div>
        <div className="row">
          <label>
            <span>Message</span>
            <textarea
              name="message"
              id="message"
              value={message}
              placeholder="Rédigez votre message ici..."
              required
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></textarea>
          </label>
        </div>
        <div className="row">
          <input type="submit" value="envoyer" />
        </div>

        <div className="success-message">Merci pour votre message !</div>
      </form>
    </article>
  );
};

export default Form;
