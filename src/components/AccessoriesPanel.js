import { useState } from "react";

const accessoryOptions = ["bracelet", "watch", "earrings", "hat"];
const colorOptions = ["black", "white", "brown", "beige", "pink"];

function AccessoriesPanel({ result }) {
  const [selectedAccessories, setSelectedAccessories] = useState([]);
  const [bagColor, setBagColor] = useState("");
  const [shoesColor, setShoesColor] = useState("");

  if (!result) {
    return null;
  }

  const handleAccessoryToggle = (accessory) => {
    setSelectedAccessories((currentAccessories) =>
      currentAccessories.includes(accessory)
        ? currentAccessories.filter((item) => item !== accessory)
        : [...currentAccessories, accessory]
    );
  };

  return (
    <section className="section-card accessories-panel">
      <h2>Accessories</h2>
      <p className="accessories-text">
        Your outfit has been evaluated. You can now add optional accessories to
        complete the look.
      </p>

      <div className="builder-section">
        <h3>Select Accessories</h3>
        <div className="accessories-grid">
          {accessoryOptions.map((accessory) => (
            <button
              key={accessory}
              type="button"
              className={`accessory-btn ${
                selectedAccessories.includes(accessory) ? "selected-card" : ""
              }`}
              onClick={() => handleAccessoryToggle(accessory)}
            >
              {accessory}
            </button>
          ))}
        </div>
      </div>

      <div className="builder-section">
        <h3>Bag Color</h3>
        <div className="occasion-row">
          {colorOptions.map((color) => (
            <button
              key={color}
              type="button"
              className={`occasion-pill ${bagColor === color ? "selected-pill" : ""}`}
              onClick={() => setBagColor(color)}
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      <div className="builder-section">
        <h3>Shoes Color</h3>
        <div className="occasion-row">
          {colorOptions.map((color) => (
            <button
              key={color}
              type="button"
              className={`occasion-pill ${shoesColor === color ? "selected-pill" : ""}`}
              onClick={() => setShoesColor(color)}
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      <div className="accessories-summary">
        <p>
          <strong>Selected accessories:</strong>{" "}
          {selectedAccessories.length > 0
            ? selectedAccessories.join(", ")
            : "None selected"}
        </p>
        <p>
          <strong>Bag color:</strong> {bagColor || "Not selected"}
        </p>
        <p>
          <strong>Shoes color:</strong> {shoesColor || "Not selected"}
        </p>
      </div>
    </section>
  );
}

export default AccessoriesPanel;
