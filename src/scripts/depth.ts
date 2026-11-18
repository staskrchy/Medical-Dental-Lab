import { gsap } from 'gsap';

// Ледь помітна «глибина» за мишкою: зображення трохи повертається в перспективі й зсувається,
// ніби камера злегка змінює ракурс. Лише десктоп з мишкою і без reduced motion.
// Рухається тільки transform (без перерахунку розмітки), слухачі — лише на своїй секції.
export function mouseDepth(area: HTMLElement | null, target: HTMLElement | null, { scale = 1, strength = 1 } = {}) {
  if (!area || !target) return;

  gsap.matchMedia().add('(min-width: 1024px) and (hover: hover) and (prefers-reduced-motion: no-preference)', () => {
    gsap.set(target, { transformPerspective: 1400, transformOrigin: '50% 40%', scale });
    const opts = { duration: 1.2, ease: 'power3.out' };
    const to = {
      rx: gsap.quickTo(target, 'rotationX', opts),
      ry: gsap.quickTo(target, 'rotationY', opts),
      x: gsap.quickTo(target, 'x', opts),
      y: gsap.quickTo(target, 'y', opts),
    };

    const move = (e: MouseEvent) => {
      const r = area.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width - 0.5; // -0.5…0.5
      const ny = (e.clientY - r.top) / r.height - 0.5;
      // strength — множник амплітуди (1 = як на першому екрані: ±1.5°, ±1°, ±8px, ±5px)
      to.ry(nx * 3 * strength);
      to.rx(-ny * 2 * strength);
      to.x(nx * -16 * strength);
      to.y(ny * -10 * strength);
    };
    const reset = () => Object.values(to).forEach((fn) => fn(0));

    area.addEventListener('mousemove', move);
    area.addEventListener('mouseleave', reset);
    return () => {
      area.removeEventListener('mousemove', move);
      area.removeEventListener('mouseleave', reset);
      gsap.set(target, { clearProps: 'transformPerspective,rotationX,rotationY,x,y,scale' });
    };
  });
}
