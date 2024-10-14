export function getRandomArrayItems<Item>(
  array: Array<Item>,
  count: number,
): Item[] {
  if (array.length < count) {
    return array;
  }

  const indices = new Set<number>();

  while (indices.size < 2) {
    const newIndex = Math.floor(Math.random() * array.length);

    indices.add(newIndex);
  }

  return [...indices].map((index) => array[index]);
}
