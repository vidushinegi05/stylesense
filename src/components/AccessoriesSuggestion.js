// Developed by Vidushi Negi (24BCE0786)
function AccessoriesSuggestion({ recommendation }) {
  if (!recommendation) {
    return null;
  }

  return (
    <section className="section-card accessories-suggestion-card">
      <h2>Suggested Accessories &amp; Styling</h2>

      <div className="accessory-recommendation-grid">
        <article className="recommendation-block">
          <p className="recommendation-label">Suggested Accessories</p>
          <div className="recommendation-tags">
            {recommendation.accessories.map((item) => (
              <span key={item} className="recommendation-tag">
                {item}
              </span>
            ))}
          </div>
        </article>

        <article className="recommendation-block">
          <p className="recommendation-label">Footwear</p>
          <p className="recommendation-value">{recommendation.footwear}</p>
        </article>

        <article className="recommendation-block">
          <p className="recommendation-label">Bag Suggestion</p>
          <p className="recommendation-value">{recommendation.bag}</p>
        </article>
      </div>

      <div className="recommendation-explanation">
        <p className="recommendation-label">Why This Works</p>
        <p>{recommendation.explanation}</p>
      </div>

      <div className="pro-tip-box">
        <div className="pro-tip-title">💡 Pro Tip</div>
        <div>Don’t forget to wear a smile — it completes every outfit!</div>
      </div>
    </section>
  );
}

export default AccessoriesSuggestion;
