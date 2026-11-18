const logos = import.meta.glob<{ default: ImageMetadata }>('../assets/images/partners/*.png', { eager: true });

// Розміри логотипів з макета (px при ширині 1920)
const sizes = [[63, 60], [231, 81], [171, 62], [122, 84], [199, 62], [176, 62], [183, 62], [158, 62]];

export default {
  logos: Object.values(logos).map((m, i) => ({
    src: m.default,
    alt: `Partner logo ${i + 1}`,
    width: sizes[i][0],
    height: sizes[i][1],
  })),
};
