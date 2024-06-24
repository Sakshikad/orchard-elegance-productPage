// Define your products (this is just a placeholder, replace it with your actual product data)
export const products = [...Array(8)].map((_, index) => ({
  id: index,
  name: `Product ${index + 1}`,
}));
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
export function isTouchDevice() {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
}
export const hasTouchSupport = isTouchDevice();
