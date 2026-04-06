// Developed by Vidushi Negi (24BCE0786)
import { useState } from "react";
import Header from "../components/Header";
import OutfitForm from "../components/OutfitForm";
import OutfitPreview from "../components/OutfitPreview";
import ResultCard from "../components/ResultCard";
import SuggestionBox from "../components/SuggestionBox";
import StyleTipBanner from "../components/StyleTipBanner";
import AccessoriesSuggestion from "../components/AccessoriesSuggestion";
import styleTips from "../data/styleTips";
import vidushiNegi_24BCE0786_accessoryRecommender from "../utils/accessoryRecommender";
import vidushiNegi_24BCE0786_evaluateOutfit from "../utils/outfitEvaluator";

function EvaluatePage() {
  const vidushiNegi_24BCE0786_flag = true;
  const [topType, setTopType] = useState("");
  const [topColor, setTopColor] = useState("");
  const [bottomType, setBottomType] = useState("");
  const [bottomColor, setBottomColor] = useState("");
  const [occasion, setOccasion] = useState("");
  const [outerLayer, setOuterLayer] = useState("");
  const [skinTone, setSkinTone] = useState("medium");
  const [result, setResult] = useState(null);
  const [accessorySuggestion, setAccessorySuggestion] = useState(null);
  const [error, setError] = useState("");

  const randomTip = vidushiNegi_24BCE0786_flag
    ? styleTips[Math.floor(Math.random() * styleTips.length)]
    : styleTips[0];

  const handleEvaluate = () => {
    if (!topType || !topColor || !bottomType || !bottomColor || !occasion) {
      setError("Please complete your outfit selection before evaluation.");
      setResult(null);
      setAccessorySuggestion(null);
      return;
    }

    setError("");

    const evaluation = vidushiNegi_24BCE0786_evaluateOutfit(
      topType,
      topColor,
      bottomType,
      bottomColor,
      occasion,
      outerLayer,
      skinTone
    );

    const accessoryRecommendation = vidushiNegi_24BCE0786_accessoryRecommender(
      topType,
      topColor,
      bottomType,
      bottomColor,
      occasion
    );

    setResult(evaluation);
    setAccessorySuggestion(accessoryRecommendation);
  };

  return (
    <>
      <Header subtitle="Build your outfit and check how well it matches the occasion." />
      <StyleTipBanner tip={randomTip} />

      {error && <p className="error-message">{error}</p>}

      <div className="main-layout">
        <div className="left-panel">
          <OutfitForm
            topType={topType}
            setTopType={setTopType}
            topColor={topColor}
            setTopColor={setTopColor}
            bottomType={bottomType}
            setBottomType={setBottomType}
            bottomColor={bottomColor}
            setBottomColor={setBottomColor}
            occasion={occasion}
            setOccasion={setOccasion}
            outerLayer={outerLayer}
            setOuterLayer={setOuterLayer}
            skinTone={skinTone}
            setSkinTone={setSkinTone}
            onEvaluate={handleEvaluate}
          />
        </div>

        <div className="right-panel">
          <OutfitPreview
            topType={topType}
            topColor={topColor}
            bottomType={bottomType}
            bottomColor={bottomColor}
            occasion={occasion}
          />
          <ResultCard result={result} />
          <AccessoriesSuggestion recommendation={accessorySuggestion} />
          <SuggestionBox result={result} />
        </div>
      </div>
    </>
  );
}

export default EvaluatePage;
