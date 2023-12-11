// px重新计算
function recalculateSize(font) {
  const clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if (!clientWidth) return;
  const scale = clientWidth / 1440;
  return scale * font;
}

export { recalculateSize }
