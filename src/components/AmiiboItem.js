import React, { useState } from "react";
import { fetchPurchaseDecision } from "../api/api";
import { Item } from "../styles/styles";

function AmiiboItem({ amiibo }) {
  const [purchaseDecision, setPurchaseDecision] = useState(null);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleButtonClick = async () => {
    const decision = await fetchPurchaseDecision();
    setPurchaseDecision(decision);
    setButtonDisabled(true);
  };

  //지시사항 : 받아온 amiibo 데이터를 확인하고 알맞게 렌더링 하세요.
  // 1. img 태그 작성 : amiibo 객체의 image 속성 값을 src로 가지고, alt에는 amiibo 객체의 name 속성 값을 가지도록 설정하세요.
  // 2. h4 태그 작성 : amiibo 객체의 name 속성 값을 포함하여 텍스트를 표시하세요.
  // 3. p 태그 작성 : amiibo 객체의 amiiboSeries 속성 값을 포함하여 텍스트를 표시하세요.
  // ex) "시리즈: Super Smash Bros."
  // 4. p 태그 작성 : amiibo 객체의 gameSeries 속성 값을 포함하여 텍스트를 표시하세요.
  // ex)  "게임 시리즈: Super Mario"
  // 5. p 태그 작성 : amiibo 객체의 release.eu 속성 값을 포함하여 텍스트를 표시하세요.
  // ex)  "출시일: 2014-11-28"
  // 6. [선택 사항] : 속성 값이 없는 경우 "정보 없음" 표시 || 를 사용하세요! (잘 모르겠다면 리액트 조건부 렌더링 : OR연산자) 키워드를 사용해보세요.

  return (
    <Item>
      <button onClick={handleButtonClick} disabled={buttonDisabled}>
        어린이날 이거 사도 될까요?
      </button>
      {purchaseDecision && <p>{purchaseDecision === "yes" ? "네, 구매해도 좋습니다!" : "아니요, 다른 걸 구매하세요.🥲"}</p>}
    </Item>
  );
}

export default AmiiboItem;
