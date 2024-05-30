import { AnimationType } from "../types/types";

// Меняем местами левый и правый элемент
export const swap = (arr: number[], i: number, j: number) => {
  const copy = arr[i];
  arr[i] = arr[j];
  arr[j] = copy;
};

// Сортировка Шелла
export const shellSort = (array: number[]) => {
  const animations: AnimationType[] = [];
  // Изменение шага сортировки
  for (
    let step = Math.floor(array.length / 2);
    step > 0;
    step = Math.floor(step / 2)
  ) {
    // Контроль прохода по всему массиву
    for (let pass = step; pass < array.length; pass++) {
      // Замена элемента
      for (
        // Индекс левого элемента
        let replacment = pass - step;
        // Пока индекс левого элемента больше или равно 0 и пока левый элемент > правого
        replacment >= 0 && array[replacment] > array[replacment + step];
        replacment -= step
      ) {
        swap(array, replacment, replacment + step);
        animations.push({
          arr: [...array],
        });
      }
    }
  }

  return animations;
};

export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
