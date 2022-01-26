import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Form from "../components/Form";
import LazyImage from "../components/LazyImage";

const Infos = () => {
  const user = useSelector((state) => state.userReducer);
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <section className="infos container">
      {user && (
        <article className="bio">
          <section className="column">
            <h2>{user.name}</h2>
            <h3>Designer graphique basée à Nice</h3>
            <p className="container">
              <strong>Étudiante en 3ème année de DNMADE graphisme </strong>au
              lycée René Goscinny de DRAP (06), je suis passionnée de design et
              d'illustration.
            </p>
          </section>
          <LazyImage
            className="column"
            name={user.pictureArray[0].filename}
            title={user.pictureArray[0].filename}
            alt={user.pictureArray[0].filename}
            src={user.pictureArray[0].url}
            thumb={user.pictureArray[0].thumbnails.small.url}
            height={user.pictureArray[0].height}
            width={user.pictureArray[0].width}
          />
        </article>
      )}

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
      {/* <article className="qualities">
				<section className="card">
					<img
						src="/img/decorations/Patter_main_bandeau.jpg"
						alt=""
						width="50"
					/>
					<h4>Mode</h4>
					<h2>Créativité</h2>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
						velit saepe eaque ut quisquam omnis, quo suscipit fugit earum
						repellat?
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
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
						velit saepe eaque ut quisquam omnis, quo suscipit fugit earum
						repellat?
					</p>
				</section>
				<section className="card">
					<img
						src="/img/decorations/Patter_main_bandeau.jpg"
						alt=""
						width="50"
					/>
					<h4>Santé</h4>
					<h2>Engagement</h2>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
						velit saepe eaque ut quisquam omnis, quo suscipit fugit earum
						repellat?
					</p>
				</section>
			</article> */}
      <Form />
    </section>
  );
};

export default Infos;
