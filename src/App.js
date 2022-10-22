import React from "react";

const App = () => {
  const onClickButton = () => alert("onClickButton");
  const contentStyle = {
    color: "blue"
  };
  return (
    <>
      {/* その側の{}はJavaScriptを書く宣言、内側の{}はJSONオブジェクト */}
      <h1 style={{ color: "red" }}>Appこん</h1>
      <p style={contentStyle}>あお</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
