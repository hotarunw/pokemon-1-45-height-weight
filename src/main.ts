(() => {
  // ポケモン徹底攻略 ポケモン1匹のページ
  if (
    location.host === "yakkun.com" &&
    location.pathname.search(/\/.+\/zukan\/.+/) !== -1
  ) {
    const c1ClassElements = document.getElementsByClassName("c1");
    let heightElement: HTMLTableCellElement | undefined = undefined;
    let weightElement: HTMLLIElement | undefined = undefined;

    // 高さ・重さと書いてある表セルの隣を検索する
    // 高さと重さは表セル内の構造が違うので処理が違う

    for (let i = 0; i < c1ClassElements.length; i++) {
      const element = c1ClassElements[i];
      if (
        element.textContent === "高さ" &&
        element.nextElementSibling != null
      ) {
        heightElement = element.nextElementSibling as HTMLTableCellElement;
        break;
      }
    }

    for (let i = 0; i < c1ClassElements.length; i++) {
      const element = c1ClassElements[i];
      if (
        element.textContent === "重さ" &&
        element.nextElementSibling != null
      ) {
        weightElement = element.nextElementSibling?.firstElementChild
          ?.firstElementChild as HTMLLIElement;
        break;
      }
    }

    if (heightElement != null) {
      const value = (parseFloat(heightElement.innerText) * 1.45).toFixed(3);
      const td = document.createElement("td");
      const ul = document.createElement("ul");
      const li1 = document.createElement("li");
      const li2 = document.createElement("li");
      li1.innerText = heightElement.innerText;
      li2.innerText = `1.45倍${value}m`;
      li2.classList.add("small");
      li2.style.color = "red";

      heightElement.insertAdjacentElement("afterend", td);
      td.insertAdjacentElement("beforeend", ul);
      ul.insertAdjacentElement("beforeend", li1);
      ul.insertAdjacentElement("beforeend", li2);
      heightElement.remove();
    }

    if (weightElement != null) {
      const value = (parseFloat(weightElement.innerText) * 1.45).toFixed(3);
      const element = document.createElement("li");
      element.innerHTML = `1.45倍${value}kg`;
      element.classList.add("small");
      element.style.color = "red";
      weightElement.insertAdjacentElement("afterend", element);
    }
  }
})();
