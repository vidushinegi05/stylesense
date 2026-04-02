// Project: StyleSense
// Developed by: Vidushi (24BCE0786)

function evaluateOutfit(topType, topColor, bottomType, bottomColor, occasion) {
  let score = 0;
  let explanation = [];
  let suggestion = "";

  // Occasion suitability
  if (occasion === "formal") {
    if (
      (topType === "shirt" || topType === "blazer") &&
      (bottomType === "trousers" || bottomType === "skirt")
    ) {
      score += 4;
      explanation.push("This outfit is suitable for a formal occasion.");
    } else {
      explanation.push("This outfit is not strongly suited for a formal occasion.");
    }
  }

  if (occasion === "casual" || occasion === "college") {
    if (
      ["tshirt", "shirt", "hoodie", "kurti"].includes(topType) &&
      ["jeans", "trousers", "palazzo", "skirt"].includes(bottomType)
    ) {
      score += 4;
      explanation.push("This outfit is suitable for a casual or college setting.");
    }
  }

  if (occasion === "party" || occasion === "date" || occasion === "festive") {
    if (
      ["blazer", "kurti", "shirt"].includes(topType) &&
      ["skirt", "trousers", "palazzo", "jeans"].includes(bottomType)
    ) {
      score += 4;
      explanation.push("This outfit can work well for the selected occasion.");
    }
  }

  // Color compatibility
  const neutralColors = ["black", "white", "beige"];

  if (topColor === bottomColor) {
    score += 2;
    explanation.push("Matching colors create a balanced outfit.");
  } else if (
    neutralColors.includes(topColor) ||
    neutralColors.includes(bottomColor)
  ) {
    score += 3;
    explanation.push("Neutral colors combine well with many outfits.");
  } else if (
    (topColor === "blue" && bottomColor === "white") ||
    (topColor === "white" && bottomColor === "blue") ||
    (topColor === "pink" && bottomColor === "black") ||
    (topColor === "black" && bottomColor === "pink") ||
    (topColor === "red" && bottomColor === "black") ||
    (topColor === "black" && bottomColor === "red")
  ) {
    score += 3;
    explanation.push("These colors create a stylish combination.");
  } else {
    explanation.push("The color combination may not be the most harmonious.");
  }

  // Clothing compatibility
  if (
    (topType === "tshirt" && bottomType === "jeans") ||
    (topType === "shirt" && bottomType === "trousers") ||
    (topType === "hoodie" && bottomType === "jeans") ||
    (topType === "kurti" && bottomType === "palazzo") ||
    (topType === "blazer" && bottomType === "trousers")
  ) {
    score += 3;
    explanation.push("The selected top and bottom pair well together.");
  } else {
    explanation.push("The clothing types are acceptable but not the strongest pair.");
  }

  let rating = "";

  if (score >= 8) {
    rating = "Good Match";
    suggestion =
      "This outfit looks well-coordinated and appropriate for the selected occasion.";
  } else if (score >= 5) {
    rating = "Acceptable";
    suggestion =
      "This outfit is decent, but you can improve it by adjusting colors or clothing type.";
  } else {
    rating = "Not Recommended";
    suggestion =
      "Try choosing a more suitable clothing combination or occasion-friendly style.";
  }

  return {
    score,
    rating,
    explanation: explanation.join(" "),
    suggestion,
  };
}

export default evaluateOutfit;