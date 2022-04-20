function imageClickHandler(t) {
    var e = image.getBoundingClientRect();
    e.top, e.left;
  clickPosition[0] = t.clientX, clickPosition[1] = imageHeight - t.clientY;

  var i = 1 - t.clientX / (window.innerWidth / 2);
  t.clientX > .5 * window.innerWidth ? (i *= -1, clickPosition[0] -= i * t.clientX / 4 * .5) : clickPosition[0] += i * t.clientX * .5;

  var s = 1 - t.clientY / (window.innerHeight / 2);
  t.clientY > .5 * window.innerHeight ? (i *= -1, clickPosition[1] -= s * t.clientY / 4 * .5) : clickPosition[1] -= s * t.clientY * .5, clicks++;

  var n = document.getElementById("counter");
  clicks % CADANCE === 0 && ("zoom" === n.className ? n.className = "" : n.className = "zoom"), triangulate(), shatter()
}