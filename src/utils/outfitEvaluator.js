import vidushiNegi_24BCE0786_evaluateSkinToneCompatibility from "./skinToneHelper";

const colorWheelGroups = {
  neutral: ["black", "white", "grey", "beige"],
  warm: ["red", "orange", "yellow", "maroon"],
  cool: ["blue", "green", "purple", "navy"],
  earth: ["brown", "olive"],
  soft: ["pink"],
};

const complementaryPairs = [
  ["red", "green"],
  ["blue", "orange"],
  ["yellow", "purple"],
];

const occasionProfiles = {
  formal: {
    tops: ["shirt", "blazer"],
    bottoms: ["trousers", "skirt"],
  },
  casual: {
    tops: ["tshirt", "shirt", "hoodie", "kurti"],
    bottoms: ["jeans", "trousers", "palazzo", "skirt"],
  },
  college: {
    tops: ["tshirt", "shirt", "hoodie", "kurti"],
    bottoms: ["jeans", "trousers", "palazzo", "skirt"],
  },
  party: {
    tops: ["blazer", "kurti", "shirt"],
    bottoms: ["skirt", "trousers", "palazzo", "jeans"],
  },
  date: {
    tops: ["shirt", "kurti", "blazer"],
    bottoms: ["skirt", "trousers", "jeans", "palazzo"],
  },
  festive: {
    tops: ["kurti", "shirt", "blazer"],
    bottoms: ["palazzo", "skirt", "trousers"],
  },
};

const balancedPairs = [
  ["tshirt", "jeans"],
  ["shirt", "trousers"],
  ["hoodie", "jeans"],
  ["kurti", "palazzo"],
  ["blazer", "trousers"],
  ["shirt", "skirt"],
];
const vidushiNegi_24BCE0786_evaluatorReady = true;

function getColorGroup(color) {
  return Object.entries(colorWheelGroups).find(([, colors]) =>
    colors.includes(color)
  )?.[0];
}

function calculateColorHarmony(topColor, bottomColor) {
  if (topColor === bottomColor) {
    return 8;
  }

  const topGroup = getColorGroup(topColor);
  const bottomGroup = getColorGroup(bottomColor);
  const isComplementaryPair = complementaryPairs.some(
    ([firstColor, secondColor]) =>
      (firstColor === topColor && secondColor === bottomColor) ||
      (firstColor === bottomColor && secondColor === topColor)
  );

  if (topGroup === "neutral" || bottomGroup === "neutral") {
    return 9;
  }

  if (isComplementaryPair) {
    return 10;
  }

  if (
    (topGroup === "warm" && bottomGroup === "cool") ||
    (topGroup === "cool" && bottomGroup === "warm")
  ) {
    return 8;
  }

  if (topGroup && bottomGroup && topGroup === bottomGroup) {
    return 6;
  }

  return 5;
}

function calculateOccasionCompatibility(topType, bottomType, occasion) {
  const profile = occasionProfiles[occasion];

  if (!profile) {
    return 5;
  }

  const topMatch = profile.tops.includes(topType);
  const bottomMatch = profile.bottoms.includes(bottomType);

  if (topMatch && bottomMatch) {
    return 9;
  }

  if (topMatch || bottomMatch) {
    return 6;
  }

  return 3;
}

function calculateStyleBalance(topType, bottomType, topColor, bottomColor) {
  const isBalancedPair = balancedPairs.some(
    ([top, bottom]) => top === topType && bottom === bottomType
  );
  const colorContrast = topColor !== bottomColor;
  const outerwearTop = ["blazer", "hoodie"].includes(topType);
  const structuredBottom = ["trousers", "skirt", "palazzo"].includes(bottomType);

  let score = 4;

  if (isBalancedPair) {
    score += 3;
  }

  if (colorContrast) {
    score += 2;
  }

  if (outerwearTop && structuredBottom) {
    score += 1;
  }

  return Math.min(score, 10);
}

function calculateAccessoryEnhancement(occasion, topType, topColor, bottomColor) {
  let score = 5;

  if (["formal", "party", "date", "festive"].includes(occasion)) {
    score += 2;
  }

  if (["blazer", "kurti"].includes(topType)) {
    score += 2;
  }

  if (topColor === "black" || bottomColor === "black") {
    score += 1;
  }

  return Math.min(score, 10);
}

function calculateLayeringCompatibility(topType, outerLayer, occasion) {
  if (!outerLayer) {
    return 7;
  }

  if (outerLayer === "blazer" && topType === "shirt") {
    return 9;
  }

  if (
    outerLayer === "blazer" &&
    topType === "tshirt" &&
    ["formal", "date"].includes(occasion)
  ) {
    return 8;
  }

  if (
    outerLayer === "denim jacket" &&
    topType === "tshirt" &&
    occasion === "casual"
  ) {
    return 8;
  }

  if (outerLayer === "hoodie" && topType === "shirt") {
    return 5;
  }

  return 6;
}

function getRating(score) {
  if (score >= 8) {
    return "Highly Aligned";
  }

  if (score >= 6) {
    return "Moderately Aligned";
  }

  return "Needs Refinement";
}

function getRecommendation(
  colorHarmony,
  occasionCompatibility,
  styleBalance,
  accessoryEnhancement,
  layeringCompatibility,
  skinToneCompatibility
) {
  if (occasionCompatibility < 6) {
    return "Recommendation Module: adjust the garment types to better align the outfit with the selected occasion.";
  }

  if (colorHarmony < 7) {
    return "Recommendation Module: improve the color pairing by introducing a neutral base or a more harmonious contrast.";
  }

  if (styleBalance < 7) {
    return "Recommendation Module: use a more structured top-bottom combination to create stronger visual balance.";
  }

  if (skinToneCompatibility < 7) {
    return "Recommendation Module: adjust the outfit colors so they better support the selected skin tone profile.";
  }

  if (accessoryEnhancement < 7) {
    return "Recommendation Module: add one occasion-aware accessory to strengthen the final presentation.";
  }

  if (layeringCompatibility < 7) {
    return "Recommendation Module: refine the outer layer so it better supports the selected top and occasion.";
  }

  return "Recommendation Module: the outfit is well aligned, so only light accessory refinement is needed.";
}

function vidushiNegi_24BCE0786_evaluateOutfit(
  topType,
  topColor,
  bottomType,
  bottomColor,
  occasion,
  outerLayer,
  skinTone
) {
  // OAOESS Evaluation Engine: compute each factor in the Scoring Model.
  const colorHarmony = calculateColorHarmony(topColor, bottomColor);
  const occasionCompatibility = calculateOccasionCompatibility(
    topType,
    bottomType,
    occasion
  );
  const styleBalance = calculateStyleBalance(
    topType,
    bottomType,
    topColor,
    bottomColor
  );
  const accessoryEnhancement = calculateAccessoryEnhancement(
    occasion,
    topType,
    topColor,
    bottomColor
  );
  const layeringCompatibility = calculateLayeringCompatibility(
    topType,
    outerLayer,
    occasion
  );
  const { skinToneScore: skinToneCompatibility, note: skinToneNote } =
    vidushiNegi_24BCE0786_evaluateSkinToneCompatibility(
      skinTone,
      topColor,
      bottomColor
    );

  const weightedScore =
    colorHarmony * 0.25 +
    occasionCompatibility * 0.25 +
    styleBalance * 0.15 +
    layeringCompatibility * 0.15 +
    skinToneCompatibility * 0.2;
  const score = Number(weightedScore.toFixed(1));
  const rating = getRating(score);

  const explanation =
    "The Evaluation Engine applied the OAOESS Scoring Model across color harmony, occasion compatibility, style balance, layering compatibility, and skin tone compatibility. " +
    `The Styling Intelligence Layer identified a ${rating.toLowerCase()} outfit pattern with strongest support from the ` +
    `${
      skinToneCompatibility > layeringCompatibility &&
      skinToneCompatibility > occasionCompatibility &&
      skinToneCompatibility > colorHarmony
        ? "skin-tone alignment"
        : layeringCompatibility > occasionCompatibility &&
            layeringCompatibility > colorHarmony
          ? "layering structure"
          : colorHarmony >= occasionCompatibility
            ? "color relationship"
            : "occasion alignment"
    } of the selected combination. ${skinToneNote}`;

  const recommendation = getRecommendation(
    colorHarmony,
    occasionCompatibility,
    styleBalance,
    accessoryEnhancement,
    layeringCompatibility,
    skinToneCompatibility
  );

  return {
    score,
    rating,
    breakdown: {
      colorHarmony,
      occasionCompatibility,
      styleBalance,
      accessoryEnhancement,
      layeringCompatibility,
      skinToneCompatibility,
    },
    explanation,
    recommendation,
    evaluatorReady: vidushiNegi_24BCE0786_evaluatorReady,
  };
}

export default vidushiNegi_24BCE0786_evaluateOutfit;
