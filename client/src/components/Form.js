import React, { useState } from "react";

const Form = () => {
	const [identity, setIdentity] = useState(null);
	const [email, setEmail] = useState(null);
	const [message, setMessage] = useState(null);

	const onSubmit = async (e) => {
		e.preventDefault();
		const res =  fetch('/api/server')
	};

	return (
		<article className="contact-form" action="#" onSubmit={(e) => onSubmit(e)}>
			<h2>Contactez-moi</h2>
			<form>
				<div className="row">
					<label>
						<span>Nom Prénom *</span>
						<input
							type="text"
							name="identity"
							id="identity"
							placeholder="Henri Matisse"
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
							placeholder="henri.matisse@artiste.com"
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
							placeholder="Rédigez votre message ici..."
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
