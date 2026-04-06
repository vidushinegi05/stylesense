// Developed by Vidushi Negi (24BCE0786)
function SuggestionBox({ result }) {
  if (!result) {
    return (
      <section className="section-card">
        <h2>Styling Suggestion</h2>
        <p>Your outfit suggestions will appear here.</p>
      </section>
    );
  }

  return (
    <section className="section-card">
      <h2>Styling Suggestion</h2>
      <p>{result.recommendation}</p>
    </section>
  );
}

export default SuggestionBox;
