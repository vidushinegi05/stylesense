// Developed by Vidushi Negi (24BCE0786)
import Header from "../components/Header";
import styleTips from "../data/styleTips";

function StyleTipsPage() {
  return (
    <>
      <Header subtitle="Explore simple styling ideas you can use while building your looks." />

      <section className="tips-grid">
        {styleTips.map((tip, index) => (
          <article key={tip} className="section-card tip-card">
            <p className="tip-number">Tip {index + 1}</p>
            <p>{tip}</p>
          </article>
        ))}

        <article className="section-card tip-card">
          <p className="tip-number">Occasion Reminder</p>
          <p>
            Casual and college outfits usually work best with simple combinations,
            while formal and festive looks benefit from cleaner structure.
          </p>
        </article>
      </section>
    </>
  );
}

export default StyleTipsPage;
