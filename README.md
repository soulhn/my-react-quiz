## 프로젝트 아이디어 생성 과정

- 비동기 통신을 위한 아이디어를 위해 오픈 API를 찾았습니다.
- amiibo라는 피규어 API를 찾았고 사진과 다양한 정보를 제공하여 적절하고 마리오 관련 정보를 제공하여 선택했습니다.
- 슈퍼 마리오 브라더스 영화의 개봉으로 마리오 IP의 상승으로 적용 해보았습니다.
- 어린이날이 다가오니 가져온 데이터의 피규어를 어린이날에 구매해도 될지 말지 결정해주는 프로젝트로 진행했습니다.

## 프로젝트 개요

- 어린이날을 기념하여 amiibo 피규어 정보를 가져오고 yesno를 응답하는 API로 구매해도 될 지 말지를 알려주는 프로젝트

## 문제 의도

- 비동기 통신[axios 라이브러리 사용, async/aswait 문법 사용하기], OPEN API를 직접 읽고 활용하기

  1. 오픈 API (https://amiiboapi.com/docs/)를 읽고 Amiibo 정보 가져오기
  2. 오픈 API (https://yesno.wtf/#api)를 읽고 활용하여 Yes, No 결정 정보 가져오기

- 컴포넌트 스타일링

  1. 스켈레톤 코드를 활용하여 React Styled Components 스타일을 적용할 수 있습니다.

- 상태 관리
  1. useReducer의 사용 방법을 익힐 수 있습니다.
  2. useState의 사용 방법을 익힐 수 있습니다.

## 지시사항[지시사항을 읽고 문제를 해결하세요.]

0. 프로젝트 전체 구조를 읽어보면서 데이터의 흐름을 파악하세요.
1. 사용하는 OPEN API를 문서를 읽고 활용법을 익히세요

   - 오픈 API (https://amiiboapi.com/docs/)
   - 오픈 API (https://yesno.wtf/#api)

2. src/api/api.js로 이동하세요.(추가 지시 사항은 해당 폴더에 지시사항으로 작성)

   - fetchPurchaseDecision를 완성하세요.
   - fetchAmiibos를 완성하세요.

3. src/reducers/useAmiiboReducer.js로 이동하세요.(추가 지시 사항은 해당 폴더에 지시사항으로 작성)

   - initialState를 작성하세요.
   - amiiboReducer를 완성 시키세요.

4. src/components/AmiiboItem.js로 이동하세요. (추가 지시 사항은 해당 폴더에 지시사항으로 작성)

   - 받아온 amiibo 데이터를 확인하고 알맞게 렌더링 하세요.

5. src/components/Header.js로 이동하세요. (추가 지시 사항은 해당 폴더에 지시사항으로 작성)

   - toggleDarkMode의 로직을 완성 시키세요.

6. src/styles/styles.js로 이동하세요. (추가 지시 사항은 해당 폴더에 지시사항으로 작성)
   - ItemContainer의 스타일 완성
   - Item의 스타일을 완성

## test 실행 방법

1. npm install
2. npm test

## CRA + 추가 사용 라이브러리

1. axios
2. npm install styled-components
3. npm install --save-dev @babel/core @babel/preset-env babel-jest
4. npm install --save-dev @testing-library/react @testing-library/jest-dom
5. npm install --save-dev jest-styled-components

## 🟢 찾은 오탈자

과제 진행 중 찾은 오탈자를 공유드립니다.

- 문제 풀이 1번 사진 갤러리 : folat: 'left' 오타가 있었습니다.

```js
  <label
    style={{
      backgroundColor: '#fff4e6',
      border: '2px solid #f76707',
      fontSize: '20px',
      folat: 'left',
      marginRight: '10px',
    }}
    htmlFor="rowCount"
  >
```

- 문제 풀이 1번 사진 갤러리  
  className이 image인 div 요소에 아래 CSS를 적용하세요.  
  ⇒  image인 img 요소에 아래 CSS를 적용하세요로 수정이 필요해보입니다.

- 문제 제작/과제 안내
  Node 및 package 버전은 제한이 없습니다. 구성한 개발 환경은 pckage.json에 명시하세요.  
  => package.json으로 수정이 필요해보입니다.
