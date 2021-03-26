let scroll;
let x = 0;
let y = 0;
let mx = 0;
let my = 0;
let speed = 0.05;

let bg7;

window.onload = function() {
  let progressBar = document.getElementsByClassName("progressBar")[0];

  let bg1 = document.getElementsByClassName("parallax_image")[0];
  let bg2 = document.getElementsByClassName("parallax_image")[1];
  let bg3 = document.getElementsByClassName("parallax_image")[2];
  let bg4 = document.getElementsByClassName("parallax_image")[3];
  let bg5 = document.getElementsByClassName("parallax_image")[4];
  let bg6 = document.getElementsByClassName("parallax_image")[5];

  bg7 = document.getElementById("parallax_6");

  window.addEventListener("scroll", progress, false)
  window.addEventListener("scroll", bg, false)
  window.addEventListener("mousemove", mouseMove, false);

  function progress() {
    scrollTop = document.documentElement.scrollTop;
    let per = scrollTop / (document.body.scrollHeight - window.outerHeight) * 100;
    progressBar.style.width = per + "%";
  }

  function bg() {
    scrollTop = document.documentElement.scrollTop;

    bg1.style.transform = "translate3d(0," + scrollTop*0.05 + "px, 0)";
    bg2.style.transform = "translate3d(0," + -(scrollTop*0.01) + "px, 0)";
    bg3.style.transform = "translate3d(0," + -(scrollTop*0.05) + "px, 0)";
    bg4.style.transform = "translate3d(0," + -(scrollTop*0.08) + "px, 0)";
    bg5.style.transform = "translate3d(0," + -(scrollTop*0.12) + "px, 0)";
    bg6.style.transform = "translate3d(0," + -(scrollTop*0.15) + "px, 0)";
  }

  function mouseMove(e) {
    x = (e.clientX - window.innerWidth / 2);
    y = (e.clientY - window.innerHeight / 2);
    // console.log(x,y);

    mx += (x - mx) * speed;
    my += (y - my) * speed;


    bg7.style.transform = "translate(" + -(mx/10) +"px," + -(my/8) + "px) scale(1.3)";
  }

  //loop();

} // window.onload

// function loop() {
//   mx += (x - mx) * speed;
//   my += (y - my) * speed;
//
//
//   bg7.style.transform = "translate(" + -(mx/2) +"px", + -(my/2) + "px)";
//
// }