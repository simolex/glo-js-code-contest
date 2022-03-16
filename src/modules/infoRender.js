export const infoRender = (heroMetrics) => {
  const infoWrapper = document.querySelector(".info");

  const createMetric = ({ label, content }) => {
    const itemInfo = document.createElement("div");
    itemInfo.classList.add("info__item");
    //card.dataset.heroesName = heroesItem.name;
    itemInfo.innerHTML = `
      <div class="info__label">${label}</div>
      <div class="info__content">${content}</div>
    `;
    infoWrapper.append(itemInfo);
  };

  infoWrapper.innerHTML = "";

  for (let metric in heroMetrics) {
    if ("photo" !== metric && "movies" !== metric) {
      createMetric({
        label: metric,
        content: heroMetrics[metric],
      });
    }
  }
};
