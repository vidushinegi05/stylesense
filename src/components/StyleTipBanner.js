// Developed by Vidushi Negi (24BCE0786)
function StyleTipBanner({ tip }) {
  return (
    <section className="style-tip-banner">
      <div className="tip-icon">Tip</div>
      <div>
        <h3>Style Tip</h3>
        <p>{tip}</p>
      </div>
    </section>
  );
}

export default StyleTipBanner;
