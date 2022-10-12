document.addEventListener("DOMContentLoaded", () => {
  console.log("Loading");
  const playBtn = document.getElementById("play");
  const pauseBtn = document.getElementById("pause");
  const restartBtn = document.getElementById("restart");
  const timer = document.getElementById("counter");
  let time = 0;
  let isPlay = false;
  let interval;

  const mark_item = (el) => {
    if (document.querySelector(".btn-dark")) {
      document.querySelector(".btn-dark").classList.remove("btn-dark");
    }
    if (el) {
      el.classList.add("btn-dark");
    }
  };

  const print_time = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const new_minutes = minutes % 60;
    const new_seconds = seconds % 60;
    timer.innerHTML = `${hours.toString().padStart(2, "0")}:${new_minutes
      .toString()
      .padStart(2, "0")}:${new_seconds.toString().padStart(2, "0")}`;
  };

  playBtn.addEventListener("click", (e) => {
    if (isPlay) return;
    isPlay = true;
    interval = setInterval(() => {
      print_time(time);
      time++;
    }, 1000);
    mark_item(playBtn);
  });

  pauseBtn.addEventListener("click", () => {
    isPlay = false;
    clearInterval(interval);
    mark_item(pauseBtn);
  });

  restartBtn.addEventListener("click", () => {
    isPlay = false;
    clearInterval(interval);
    time = 0;
    print_time(time);
    mark_item();
  });
});
