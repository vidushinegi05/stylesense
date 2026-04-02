function Header({
  title = "StyleSense",
  subtitle = "Occasion-Aware Outfit Evaluation System",
  showAuthor = true,
}) {
  return (
    <header className="header-card">
      <div className="header-badge">Your own AI Wardrobe!</div>
      <h1 className="title">{title}</h1>
      <h2 className="subtitle">{subtitle}</h2>
      {showAuthor && <p className="author">Developed by Vidushi (24BCE0786)</p>}
    </header>
  );
}

export default Header;