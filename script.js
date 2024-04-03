const theme = document.querySelector(":root");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const color = e.currentTarget.classList;

    if (color.contains("btn1")) {
      theme.style.setProperty("--theme-color", " #fc6f95");
    } else if (color.contains("btn2")) {
      theme.style.setProperty("--theme-color", " #6e46ff");
    } else if (color.contains("btn3")) {
      theme.style.setProperty("--theme-color", " #6ffcba");
    } else if (color.contains("btn4")) {
      theme.style.setProperty("--theme-color", " #f0fc6f");
    } else if (color.contains("btn5")) {
      theme.style.setProperty("--theme-color", " #ff9155");
    }
  });
});
