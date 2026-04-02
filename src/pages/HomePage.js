import { Link } from "react-router-dom";
import Header from "../components/Header";
import StyleTipBanner from "../components/StyleTipBanner";
import styleTips from "../data/styleTips";

function HomePage() {
  const featuredTip = styleTips[0];

  return (
    <>
      <Header subtitle="Build, evaluate, and improve your outfit choices with StyleSense." />
      <StyleTipBanner tip={featuredTip} />

      <section className="home-grid">
        <article className="section-card">
          <h2>Welcome to StyleSense</h2>
          <p>
            StyleSense helps you build an outfit, check whether it suits the occasion,
            and receive a simple suggestion to improve the look.
          </p>
          <Link to="/evaluate" className="page-link-button">
            Start Evaluating
          </Link>
        </article>

        <article className="section-card">
          <h2>What You Can Do</h2>
          <ul className="info-list">
            <li>Create an outfit using tops, bottoms, colors, and occasion.</li>
            <li>Preview your selected wardrobe pieces before evaluation.</li>
            <li>See a score, explanation, and styling suggestion.</li>
          </ul>
        </article>
      </section>
    </>
  );
}

export default HomePage;