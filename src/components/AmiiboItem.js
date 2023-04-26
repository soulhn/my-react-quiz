import React, { useState } from "react";
import { fetchPurchaseDecision } from "../api/api";
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
      <p>시리즈: {amiibo.amiiboSeries}</p>
      <p>게임 시리즈: {amiibo.gameSeries}</p>
      <p>출시일: {amiibo.release.eu || "정보 없음"}</p>
      <button onClick={handleButtonClick} disabled={buttonDisabled}>
        어린이날 이거 사도 될까요?
      </button>
      {purchaseDecision && <p>{purchaseDecision === "yes" ? "네, 구매해도 좋습니다!" : "아니요, 다른 걸 구매하세요.🥲"}</p>}
    </Item>
  );
}

export default AmiiboItem;
