export function getFromLocalStorage<T>(key: string, initialValue: T): T {
  try {
    const stored = localStorage.getItem(key);

    if (!stored) {
      localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    }

    return JSON.parse(stored) as T;
  } catch {
    localStorage.setItem(key, JSON.stringify(initialValue));
    return initialValue;
  }
}
