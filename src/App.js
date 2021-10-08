import Title from "./Title";
import Content from "./Content";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState("");

  return (
    <div className="App">
      <Title title="One Piece Facts" />
      <Content data={data} setData={setData}></Content>
    </div>
  );
}
