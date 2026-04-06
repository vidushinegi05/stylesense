// Developed by Vidushi Negi (24BCE0786)
import Header from "../components/Header";

function AboutPage() {
  return (
    <>
      <Header subtitle="Learn more about the StyleSense project and its occasion-aware evaluation methodology." />

      <section className="section-card page-card">
        <h2>About the Project</h2>
        <p>
          StyleSense presents an internal framework called the
          {" "}
          <strong>Occasion-Aware Outfit Evaluation and Styling System (OAOESS)</strong>.
          It helps users assess outfits through a structured frontend-based methodology
          supported by an Evaluation Engine, a Scoring Model, and a Styling Intelligence Layer.
        </p>
        <p>
          The project focuses on giving beginner-friendly feedback with a clear score,
          explanation, and recommendation while still sounding like a defined system
          rather than a simple outfit checker.
        </p>
      </section>

      <section className="section-card page-card">
        <h2>How the System Works</h2>
        <p>
          <strong>User Input Layer:</strong> collects the selected top, bottom,
          colors, and occasion from the user interface.
        </p>
        <p>
          <strong>Evaluation Engine:</strong> processes the selected outfit using
          occasion-aware rules and color relationship checks.
        </p>
        <p>
          <strong>Scoring Model:</strong> generates four factor scores for color
          harmony, occasion compatibility, style balance, and accessory enhancement.
        </p>
        <p>
          <strong>Recommendation Module:</strong> converts the score breakdown into
          a simple styling suggestion that is easy to explain during a viva or demo.
        </p>
      </section>

      <section className="section-card page-card">
        <h2>Student Details</h2>
        <p>
          <strong>Developed by:</strong> Vidushi Negi
        </p>
        <p>
          <strong>Registration Number:</strong> 24BCE0786
        </p>
      </section>
    </>
  );
}

export default AboutPage;
