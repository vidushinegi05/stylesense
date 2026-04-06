const vidushiNegi_24BCE0786_skinToneBaseline = "medium";
const softColors = ["pink"];
const coolColors = ["blue", "green", "purple", "navy"];
const warmColors = ["red", "orange", "yellow", "maroon"];
const jewelTones = ["blue", "green", "purple", "maroon"];
const veryDarkColors = ["black", "navy", "maroon", "brown"];
const veryPaleColors = ["white", "beige", "pink"];

function getColorScoreForSkinTone(skinTone, color) {
  if (skinTone === "fair") {
    if (softColors.includes(color) || coolColors.includes(color)) {
      return 9;
    }

    if (veryDarkColors.includes(color)) {
      return 7;
    }

    return 8;
  }

  if (skinTone === "dusky" || skinTone === "deep") {
    if (warmColors.includes(color) || jewelTones.includes(color)) {
      return 9;
    }

    if (veryPaleColors.includes(color)) {
      return 6;
    }

    return 8;
  }

  if (veryPaleColors.includes(color)) {
    return 7;
  }

  return 8;
}

function getSkinToneNote(skinTone, topColor, bottomColor, skinToneScore) {
  if (skinTone === "fair") {
    if (
      softColors.includes(topColor) ||
      softColors.includes(bottomColor) ||
      coolColors.includes(topColor) ||
      coolColors.includes(bottomColor)
    ) {
      return "Skin Tone Compatibility: soft and cool tones support a balanced appearance for fair skin tones.";
    }

    return "Skin Tone Compatibility: deeper shades remain wearable for fair skin tones, but they create a stronger contrast profile.";
  }

  if (skinTone === "dusky" || skinTone === "deep") {
    if (skinToneScore >= 8.5) {
      return "Skin Tone Compatibility: warm and jewel tones strongly support dusky and deep skin tones.";
    }

    return "Skin Tone Compatibility: very pale shades reduce tonal depth, so richer colors may produce a stronger outcome.";
  }

  return "Skin Tone Compatibility: medium skin tones generally support a broad range of colors with stable visual balance.";
}

function vidushiNegi_24BCE0786_evaluateSkinToneCompatibility(
  skinTone,
  topColor,
  bottomColor
) {
  const resolvedSkinTone = skinTone || vidushiNegi_24BCE0786_skinToneBaseline;
  const topScore = getColorScoreForSkinTone(resolvedSkinTone, topColor);
  const bottomScore = getColorScoreForSkinTone(resolvedSkinTone, bottomColor);
  const skinToneScore = Number(((topScore + bottomScore) / 2).toFixed(1));
  const note = getSkinToneNote(
    resolvedSkinTone,
    topColor,
    bottomColor,
    skinToneScore
  );

  return {
    skinToneScore,
    note,
  };
}

export default vidushiNegi_24BCE0786_evaluateSkinToneCompatibility;
