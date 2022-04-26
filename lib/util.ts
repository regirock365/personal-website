export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function shuffle<T>(array: T[]) {
  return array.sort(() => Math.random() - 0.5);
}

// localStorage helpers
export const getLocalStorage = (key: string, defaultValue = null) =>
  JSON.parse(localStorage.getItem(key) || JSON.stringify(defaultValue));
export const setLocalStorage = (key: string, value: any) =>
  localStorage.setItem(key, JSON.stringify(value));
