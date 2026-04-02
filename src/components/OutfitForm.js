import {
  bottomOptions,
  colorOptions,
  occasionOptions,
  topOptions,
} from "../data/outfitOptions";

function OutfitForm({
  topType,
  setTopType,
  topColor,
  setTopColor,
  bottomType,
  setBottomType,
  bottomColor,
  setBottomColor,
  occasion,
  setOccasion,
  onEvaluate,
}) {
  return (
    <section className="section-card wardrobe-builder">
      <h2>Build Your Outfit</h2>

      <div className="builder-section">
        <h3>Choose Top</h3>
        <div className="option-grid">
          {topOptions.map((item) => (
            <button
              key={item.value}
              type="button"
              className={`option-card ${topType === item.value ? "selected-card" : ""}`}
              onClick={() => setTopType(item.value)}
            >
              <span className="emoji">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="builder-section">
        <h3>Pick Top Color</h3>
        <div className="swatch-row">
          {colorOptions.map((color) => (
            <button
              key={color.value}
              type="button"
              className={`color-swatch ${color.className} ${
                topColor === color.value ? "selected-swatch" : ""
              }`}
              onClick={() => setTopColor(color.value)}
            >
              {color.label}
            </button>
          ))}
        </div>
      </div>

      <div className="builder-section">
        <h3>Choose Bottom</h3>
        <div className="option-grid">
          {bottomOptions.map((item) => (
            <button
              key={item.value}
              type="button"
              className={`option-card ${bottomType === item.value ? "selected-card" : ""}`}
              onClick={() => setBottomType(item.value)}
            >
              <span className="emoji">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="builder-section">
        <h3>Pick Bottom Color</h3>
        <div className="swatch-row">
          {colorOptions.map((color) => (
            <button
              key={color.value}
              type="button"
              className={`color-swatch ${color.className} ${
                bottomColor === color.value ? "selected-swatch" : ""
              }`}
              onClick={() => setBottomColor(color.value)}
            >
              {color.label}
            </button>
          ))}
        </div>
      </div>

      <div className="builder-section">
        <h3>Select Occasion</h3>
        <div className="occasion-row">
          {occasionOptions.map((item) => (
            <button
              key={item}
              type="button"
              className={`occasion-pill ${occasion === item ? "selected-pill" : ""}`}
              onClick={() => setOccasion(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <button type="button" className="evaluate-btn" onClick={onEvaluate}>
        Evaluate My Look
      </button>
    </section>
  );
}

export default OutfitForm;