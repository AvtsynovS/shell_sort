import React, { useRef, useState } from "react";
import styles from "./App.module.scss";
import { Pillar } from "./components/Pillar";
import { shellSort, sleep } from "./utils/utils";
import { AnimationType } from "./types/types";

const regExp = /[^\d]{2,}/g;

function App() {
  const [initValue, setInitValue] = useState<number[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInit = () => {
    const value = (inputRef.current?.value || "")
      .replaceAll(regExp, " ")
      .split(" ")
      .map(Number);

    setInitValue(value);
  };

  // Сортировка и анимация
  const sort = async () => {
    let animations: AnimationType[] = [];

    animations = shellSort(initValue);

    for (const { arr } of animations) {
      setInitValue(arr);
      await sleep(10);
    }
  };

  return (
    <div className={styles.container}>
      <header>
        <h1>Shell sort</h1>
      </header>
      <div className={styles.controlPanel}>
        <input
          type="text"
          ref={inputRef}
        />
        <button onClick={handleInit}>Initialization</button>
      </div>
      {initValue.length > 0 && (
        <div className={styles.sortBloc}>
          <div className={styles.graphWrapper}>
            {initValue.map((number, index) => (
              <Pillar
                key={index}
                value={number}
              />
            ))}
          </div>
          <button onClick={sort}>Сортировка</button>
        </div>
      )}
    </div>
  );
}

export default App;
