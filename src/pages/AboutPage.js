import Header from "../components/Header";

function AboutPage() {
  return (
    <>
      <Header subtitle="Learn more about the StyleSense project and its purpose." />

      <section className="section-card page-card">
        <h2>About the Project</h2>
        <p>
          StyleSense is a wardrobe and outfit evaluation app that helps users choose
          outfits based on clothing type, color combination, and occasion.
        </p>
        <p>
          The project focuses on giving beginner-friendly feedback with a clear score,
          explanation, and styling suggestion.
        </p>
      </section>

      <section className="section-card page-card">
        <h2>Student Details</h2>
        <p>
          <strong>Developed by:</strong> Vidushi
        </p>
        <p>
          <strong>Registration Number:</strong> 24BCE0786
        </p>
      </section>
    </>
  );
}

export default AboutPage;