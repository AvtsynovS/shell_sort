import { memo } from "react";
import styles from "./Pillar.module.scss";

type PillarProps = {
  value: number;
};

export const Pillar = memo(({ value }: PillarProps) => (
  <div
    className={styles.pillar}
    style={{ height: `${value + 20}px` }}
  >
    {value}
  </div>
));
