import { useState } from "react";
import "./styles.css";
import Acc from "./Acc";
import cards from "./cards.json";

export default function App() {
  const [active, setActive] = useState();
  const onToggle = (id) => {
    setActive(id === active ? null : id);
  };
  return (
    <div className="App">
      {cards.map((card) => (
        <Acc
          key={card.id}
          id={card.id}
          onToggle={onToggle}
          active={card.id === active}
          text={card.text}
        />
      ))}
    </div>
  );
}
