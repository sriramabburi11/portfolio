export function scrollToId(id: string): void {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
