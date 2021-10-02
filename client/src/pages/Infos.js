import React from "react";

const Infos = () => {
	return (
		<section className="infos container">
			<article className="bio">
				<section className="column">
					<h2>Bonnie BULLE</h2>
					<h3>Designer graphique basée à Nice</h3>
					<p className="container">
						<strong>Étudiante en 3ème année de DNMADE graphisme </strong>au lycée René
						Goscinny de DRAP (06), je suis passionnée de design et d'illustration.
					</p>
				</section>
				<picture className="column">
					<img
						src="/img/illustration/Photo_De_Profil (2).jpg"
						alt="dessin de rofil"
						width="50"
					/>
				</picture>
			</article>
			<article className="cv">
				<section className="realisations">
					<h4>Réalisations</h4>
					<ul>
						<li>Logo</li>
						<li>Affiche</li>
						<li>Carte de Visite</li>
						<li>Pictogrammes</li>
						<li>Signalétique</li>
						<li>Édition</li>
						<li>Mise en page</li>
						<li>Illustration</li>
					</ul>
				</section>
				<section className="studies">
					<h4>Études</h4>
					<ul>
						<li>
							<h5>2019-2022</h5>
							<p>DNMADE graphisme (Drap)</p>
						</li>
						<li>
							<h5>2018-2019</h5>
							<p>Licence 1 Histoire de l'art (Toulouse)</p>
						</li>
						<li>
							<h5>2017-2018</h5>
							<p>MANAA à la Grande Tourrache (La Garde)</p>
						</li>
					</ul>
				</section>
			</article>
			<article className="qualities">
				<section className="card">
					<img src="/img/decorations/Patter_main_bandeau.jpg" alt="" width="50" />
					<h4>Mode</h4>
					<h2>Créativité</h2>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus velit
						saepe eaque ut quisquam omnis, quo suscipit fugit earum repellat?
					</p>
				</section>
				<section className="card">
					<img
						src="/img/decorations/Motif_String_bandeau-01.jpg"
						alt=""
						width="50"
					/>
					<h4>Accueil</h4>
					<h2>Sensibilité</h2>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus velit
						saepe eaque ut quisquam omnis, quo suscipit fugit earum repellat?
					</p>
				</section>
				<section className="card">
					<img src="/img/decorations/Patter_main_bandeau.jpg" alt="" width="50" />
					<h4>Santé</h4>
					<h2>Engagement</h2>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus velit
						saepe eaque ut quisquam omnis, quo suscipit fugit earum repellat?
					</p>
				</section>
			</article>
			<article
				className="contact-form"
				action="#"
				onSubmit={(e) => e.preventDefault()}
			>
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
							/>
						</label>
						<label>
							<span>Email *</span>
							<input
								type="email"
								name="email"
								id="email"
								placeholder="henri.matisse@artiste.com"
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
							></textarea>
						</label>
					</div>
					<div className="row">
						<input type="submit" value="envoyer" />
					</div>

					<div className="success-message">Merci pour votre message !</div>
				</form>
			</article>
		</section>
	);
};

export default Infos;
