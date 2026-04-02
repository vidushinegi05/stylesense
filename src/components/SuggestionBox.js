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
      <p>{result.suggestion}</p>
    </section>
  );
}

export default SuggestionBox;