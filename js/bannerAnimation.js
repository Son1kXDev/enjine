document.addEventListener("DOMContentLoaded", function () {
  const album = document.getElementById('game-screenshots');
  if (!album) {
    console.error("Элемент .album не найден на странице");
    return;
  }

  const items = album.querySelectorAll("img");
  if (items.length === 0) {
    console.error("Нет элементов img внутри .album");
    return;
  }

  let index = 0;
  const length = items.length;
  const last = length - 1;
  let isScrolling = false;
  let animationInterval;

  function rememberIndex() {
    const currentIndex = Math.round(album.scrollLeft / album.scrollWidth * length);
    if (currentIndex >= length - 1) {
      index = last;
    } else if (currentIndex <= 0) {
      index = 0;
    } else {
      index = currentIndex;
    }
  }

  function animate() {
    const current = items[index];
    const nextIndex = (index + 1) % length;
    const next = items[window.innerWidth >= 1200 && nextIndex == last ? 0 : nextIndex];

    if (!current || !next) {
      console.error("Элементы не найдены");
      return;
    }

    const distance = next.offsetLeft - album.scrollLeft;

    album.scrollTo({
      left: album.scrollLeft + distance,
      behavior: "smooth"
    });

    index = nextIndex;
  }

  function handleScroll() {
    if (!isScrolling) {
      isScrolling = true;
      clearInterval(animationInterval);
    }
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      isScrolling = false;
      rememberIndex();
      animationInterval = setInterval(animate, 5000);
    }, 100);
  }

  album.addEventListener("scroll", handleScroll);

  animationInterval = setInterval(animate, 5000);
});
