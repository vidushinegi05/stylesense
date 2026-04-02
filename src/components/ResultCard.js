function ResultCard({ result }) {
  if (!result) {
    return (
      <section className="section-card">
        <h2>Evaluation Result</h2>
        <p>Select your outfit details and click Evaluate Outfit.</p>
      </section>
    );
  }

  return (
    <section className="section-card">
      <h2>Evaluation Result</h2>
      <div className="result-box">
        <h3 className={`result-rating ${result.rating.toLowerCase().replace(" ", "-")}`}>
          {result.rating}
        </h3>
        <p>
          <strong>Score:</strong> {result.score}/10
        </p>
        <p>
          <strong>Explanation:</strong> {result.explanation}
        </p>
      </div>
    </section>
  );
}

export default ResultCard;