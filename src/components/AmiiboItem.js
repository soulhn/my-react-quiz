import React, { useState } from "react";
import { fetchPurchaseDecision } from "../api";
import { Item } from "../styles";

function AmiiboItem({ amiibo }) {
  const [purchaseDecision, setPurchaseDecision] = useState(null);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleButtonClick = async () => {
    const decision = await fetchPurchaseDecision();
    setPurchaseDecision(decision);
    setButtonDisabled(true);
  };

  return (
    <Item>
      <img src={amiibo.image} alt={amiibo.name} />
      <h4>{amiibo.name}</h4>
      <p>Series: {amiibo.amiiboSeries}</p>
      <p>Game series: {amiibo.gameSeries}</p>
      <p>Release date: {amiibo.release.na || "Unknown"}</p>
      <button onClick={handleButtonClick} disabled={buttonDisabled}>
        구매해도 되나요?
      </button>
      {purchaseDecision && <p>{purchaseDecision === "yes" ? "네, 구매해도 좋습니다!" : "아니요, 구매하지 않는 것이 좋습니다."}</p>}
    </Item>
  );
}

export default AmiiboItem;
