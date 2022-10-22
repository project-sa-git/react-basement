/* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage"

const App = () => {
  console.log("さいしょ");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    // 「!」で現在の逆に上書き
    setFaceShowFlag(!faceShowFlag);
  }

// numを監視するようにしている
useEffect(() => {
  console.log("useeffect!!");
  if(num > 0 && num % 3 === 0){
    // 「faceShowFlag」がfalseの場合だけ、右側が走る
    faceShowFlag || setFaceShowFlag(true);
  } else {
    // 「faceShowFlag」がtrueの場合だけ、右側が走る
    faceShowFlag && setFaceShowFlag(false);
  }
}, [num]);

  
  return (
    <>
      {/* その側の{}はJavaScriptを書く宣言、内側の{}はJSONオブジェクト */}
      <h1 style={{ color: "red" }}>Appこん</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ！</button><br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>

      {/* 「&&」 　→　faceShowFlagがtrueの場合に右側が表示 */}
      {faceShowFlag && <p>(￣▽￣)</p>}
    </>
  );
};

export default App;
