export function bleed(size: number) {
  return {
    width: `calc(100% + (${size}px * 2))`,
    marginLeft: `-${size}px`,
    marginRight: `-${size}px`,
  };
}
