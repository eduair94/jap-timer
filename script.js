document.addEventListener("DOMContentLoaded", () => {
  console.log("Loading");
  const playBtn = document.getElementById("play");
  const pauseBtn = document.getElementById("pause");
  const restartBtn = document.getElementById("restart");
  const timer = document.getElementById("counter");
  let time = 0;
  let isPlay = false;
  let interval;
  let interval_time = 1000;
  const input_timer = document.getElementById("input_timer");

  const print_time = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const new_minutes = minutes % 60;
    const new_seconds = seconds % 60;
    timer.innerHTML = `${hours.toString().padStart(2, "0")}:${new_minutes
      .toString()
      .padStart(2, "0")}:${new_seconds.toString().padStart(2, "0")}`;
  };

  const playExec = () => {
    if (isPlay) return;
    isPlay = true;
    interval = setInterval(() => {
      time++;
      print_time(time);
    }, interval_time);
    mark_item(playBtn);
  };

  input_timer.addEventListener("input", function () {
    const val = parseInt(this.value);
    if (!isNaN(val) && val !== interval_time) {
      interval_time = val;
      if (interval) {
        clearInterval(interval);
      }
      isPlay = false;
      console.log("PLAY EXEC");
      playExec();
    }
  });

  const mark_item = (el) => {
    if (document.querySelector(".btn-dark")) {
      document.querySelector(".btn-dark").classList.remove("btn-dark");
    }
    if (el) {
      el.classList.add("btn-dark");
    }
  };

  playBtn.addEventListener("click", (e) => {
    playExec();
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
