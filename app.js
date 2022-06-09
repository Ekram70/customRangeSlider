const range = document.getElementById("range");

range.addEventListener("input", (e) => {
  const value = +e.target.value;
  const label = e.target.nextElementSibling;

  const rangeWidth = +getComputedStyle(e.target)
    .getPropertyValue("width")
    .slice(0, -2);

  const left = value * (rangeWidth / 100);
  label.style.left = `${left}px`;
  label.style.transform = `translateX(calc(-50% + ${preciseThumb()}px))`;

  label.innerHTML = value;
});

function preciseThumb() {
  // from 12 to 0
  if (range.value < 50) return 12 - (range.value * 12) / 50;
  if (range.value == 50) return 0;
  // from 0 to -12
  if (range.value > 50) return ((range.value - 50) * -12) / 50;
}
