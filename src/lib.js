export function parse(html) {
  const parent = document.createElement("div");
  parent.innerHTML = html.trim();
  return parent.firstChild;
}
