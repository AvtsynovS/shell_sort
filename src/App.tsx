import React, { useRef, useState } from "react";
import styles from "./App.module.scss";
import { Pillar } from "./components/Pillar";
import { shellSort, sleep } from "./utils/utils";
import { AnimationType } from "./types/types";

const regExp = /(\d+\.\d+)|(\d+)/g;

function App() {
  const [initValue, setInitValue] = useState<number[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInit = () => {
    const value = (inputRef.current?.value || "")
      .match(regExp)
      ?.map((item) => Math.round(Number(item)));

    if (value) {
      setInitValue(value);
    } else {
      setInitValue([]);
    }
  };

  // Сортировка и анимация
  const sort = async () => {
    let animations: AnimationType[] = [];

    animations = shellSort(initValue);

    for (const { arr } of animations) {
      setInitValue(arr);
      await sleep(300);
    }
  };

  return (
    <div className={styles.container}>
      <header>
        <h1 className={styles.title}>Shell sort</h1>
      </header>
      <div className={styles.controlPanel}>
        <input
          className={styles.input}
          type="text"
          ref={inputRef}
          placeholder="Please enter numbers"
        />
        <button
          className={styles.button}
          onClick={handleInit}
        >
          Initialization
        </button>
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
          <button
            className={styles.button}
            onClick={sort}
          >
            Shell sort
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
