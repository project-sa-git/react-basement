import React from "react";
import ColorfulMessage from "./components/ColorfulMessage"

const App = () => {
  const onClickButton = () => alert("onClickButton");
  
  return (
    <>
      {/* その側の{}はJavaScriptを書く宣言、内側の{}はJSONオブジェクト */}
      <h1 style={{ color: "red" }}>Appこん</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
