function vidushiNegi_24BCE0786_accessoryRecommender(
  topType,
  topColor,
  bottomType,
  bottomColor,
  occasion
) {
  const vidushiNegi_24BCE0786_accessoryMode = "enabled";
  const accessories = [];
  const notes = [];
  let footwear = "";
  let bag = "";

  if (occasion === "formal") {
    accessories.push("watch", "minimal jewelry");
    footwear = "polished loafers or classic heels";
    bag = "structured handbag";
    notes.push("Formal outfits look best with refined and minimal accessories.");
  }

  if (occasion === "party") {
    accessories.push("statement earrings", "sleek bracelet");
    footwear = "heels or dressy boots";
    bag = "clutch";
    notes.push("Party looks can carry one or two bold statement pieces.");
  }

  if (occasion === "casual" || occasion === "college") {
    accessories.push("bracelet");
    footwear = "clean sneakers";
    bag = "backpack or crossbody bag";
    notes.push("Casual styling works better with relaxed and practical accessories.");
  }

  if (occasion === "festive") {
    accessories.push("earrings", "bangles", "dupatta");
    footwear = "embellished flats or festive heels";
    bag = "embroidered potli bag";
    notes.push("Festive outfits feel stronger with traditional layered accessories.");
  }

  if (occasion === "date") {
    accessories.push("delicate earrings", "watch");
    footwear = "block heels or stylish flats";
    bag = "small shoulder bag";
    notes.push("Date looks usually feel polished with softer, elegant details.");
  }

  if (topType === "blazer") {
    accessories.push("structured watch");
    notes.push("A blazer pairs well with tailored accessories.");
  }

  if (topType === "kurti") {
    accessories.push("jhumka-style earrings");
    notes.push("A kurti can be elevated with traditional jewelry.");
  }

  if (topType === "hoodie" || bottomType === "jeans") {
    accessories.push("cap");
    if (!footwear) {
      footwear = "sneakers";
    }
    notes.push("Relaxed outfit pieces work well with sporty finishing touches.");
  }

  const darkColors = ["black", "blue"];
  const brightColors = ["red", "pink", "green"];

  if (darkColors.includes(topColor) && darkColors.includes(bottomColor)) {
    accessories.push("light-toned accessories");
    notes.push("Lighter accessories can lift a darker outfit nicely.");
  } else if (
    brightColors.includes(topColor) ||
    brightColors.includes(bottomColor)
  ) {
    accessories.push("neutral-toned accessories");
    notes.push("Neutral accessories help balance brighter outfit colors.");
  }

  if (!footwear) {
    footwear = "neutral flats";
  }

  if (!bag) {
    bag = "simple handbag";
  }

  const uniqueAccessories = [...new Set(accessories)];

  return {
    accessories: uniqueAccessories,
    footwear,
    bag,
    explanation:
      notes.join(" ") +
      ` These accessories can improve your outfit appeal without changing the outfit itself. Accessory mode: ${vidushiNegi_24BCE0786_accessoryMode}.`,
  };
}

export default vidushiNegi_24BCE0786_accessoryRecommender;
