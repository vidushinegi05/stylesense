// Developed by Vidushi Negi (24BCE0786)
function ResultCard({ result }) {
  if (!result) {
    return (
      <section className="section-card">
        <h2>System Evaluation Result</h2>
        <p>Select your outfit details and run the Evaluation Engine.</p>
      </section>
    );
  }

  return (
    <section className="section-card">
      <h2>System Evaluation Result</h2>
      <div className="result-box">
        <h3
          className={`result-rating ${result.rating
            .toLowerCase()
            .replace(/\s+/g, "-")}`}
        >
          {result.rating}
        </h3>
        <p>
          <strong>Final Score:</strong> {result.score}/10
        </p>
        <p>
          <strong>Scoring Model Breakdown:</strong>
        </p>
        <p>
          <strong>Color Harmony Score:</strong> {result.breakdown.colorHarmony}/10
        </p>
        <p>
          <strong>Occasion Compatibility Score:</strong>{" "}
          {result.breakdown.occasionCompatibility}/10
        </p>
        <p>
          <strong>Style Balance Score:</strong> {result.breakdown.styleBalance}/10
        </p>
        <p>
          <strong>Accessory Enhancement Score:</strong>{" "}
          {result.breakdown.accessoryEnhancement}/10
        </p>
        <p>
          <strong>Layering Compatibility Score:</strong>{" "}
          {result.breakdown.layeringCompatibility}/10
        </p>
        <p>
          <strong>Skin Tone Compatibility Score:</strong>{" "}
          {result.breakdown.skinToneCompatibility}/10
        </p>
        <p>
          <strong>Evaluation Engine Summary:</strong> {result.explanation}
        </p>
        <p>
          <strong>Recommendation Module:</strong> {result.recommendation}
        </p>
      </div>
    </section>
  );
}

export default ResultCard;
