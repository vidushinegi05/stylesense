import { bottomOptions, topOptions } from "../data/outfitOptions";

function getItemLabel(options, value) {
  const item = options.find((option) => option.value === value);
  return item ? item.label : "Not selected";
}

function getItemIcon(options, value) {
  const item = options.find((option) => option.value === value);
  return item ? item.icon : "Select";
}

function OutfitPreview({ topType, topColor, bottomType, bottomColor, occasion }) {
  return (
    <section className="section-card wardrobe-preview-card">
      <h2>Your Wardrobe Preview</h2>

      <div className="wardrobe-preview-grid">
        <div className="preview-tile">
          <div className="preview-emoji">{getItemIcon(topOptions, topType)}</div>
          <p className="preview-title">Top</p>
          <p className="preview-text">
            {topType ? `${topColor} ${getItemLabel(topOptions, topType)}` : "Not selected"}
          </p>
        </div>

        <div className="preview-tile">
          <div className="preview-emoji">{getItemIcon(bottomOptions, bottomType)}</div>
          <p className="preview-title">Bottom</p>
          <p className="preview-text">
            {bottomType
              ? `${bottomColor} ${getItemLabel(bottomOptions, bottomType)}`
              : "Not selected"}
          </p>
        </div>

        <div className="preview-tile full-tile">
          <div className="preview-emoji">Occasion</div>
          <p className="preview-title">Selected Occasion</p>
          <p className="preview-text">{occasion || "Not selected"}</p>
        </div>
      </div>
    </section>
  );
}

export default OutfitPreview;