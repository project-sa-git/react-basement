import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage"

const App = () => {
  const onClickCountUp = () => {
setNum(num + 1);
  };
  const [num, setNum] = useState(0);
  
  return (
    <>
      {/* その側の{}はJavaScriptを書く宣言、内側の{}はJSONオブジェクト */}
      <h1 style={{ color: "red" }}>Appこん</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ！</button>
      <p>{num}</p>
    </>
  );
};

export default App;
