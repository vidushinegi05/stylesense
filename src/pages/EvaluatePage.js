import { useState } from "react";
import Header from "../components/Header";
import OutfitForm from "../components/OutfitForm";
import OutfitPreview from "../components/OutfitPreview";
import ResultCard from "../components/ResultCard";
import SuggestionBox from "../components/SuggestionBox";
import StyleTipBanner from "../components/StyleTipBanner";
import AccessoriesSuggestion from "../components/AccessoriesSuggestion";
import styleTips from "../data/styleTips";
import accessoryRecommender from "../utils/accessoryRecommender";
import evaluateOutfit from "../utils/outfitEvaluator";

function EvaluatePage() {
  const [topType, setTopType] = useState("");
  const [topColor, setTopColor] = useState("");
  const [bottomType, setBottomType] = useState("");
  const [bottomColor, setBottomColor] = useState("");
  const [occasion, setOccasion] = useState("");
  const [result, setResult] = useState(null);
  const [accessorySuggestion, setAccessorySuggestion] = useState(null);
  const [error, setError] = useState("");

  const randomTip = styleTips[Math.floor(Math.random() * styleTips.length)];

  const handleEvaluate = () => {
    if (!topType || !topColor || !bottomType || !bottomColor || !occasion) {
      setError("Please complete your outfit selection before evaluation.");
      setResult(null);
      setAccessorySuggestion(null);
      return;
    }

    setError("");

    const evaluation = evaluateOutfit(
      topType,
      topColor,
      bottomType,
      bottomColor,
      occasion
    );

    const accessoryRecommendation = accessoryRecommender(
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
