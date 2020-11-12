var daily_feed1 = document.getElementById("feed1");
var status = true;
var rand = Math.random();
rand = Math.round(rand * 10);
console.log("normal" + rand);
if (rand < 10) {
  while (status = true) {
    if (rand - 1 > 0 && rand + 1 <= 10) {
      daily_feed1.innerHTML = `<img class = "feed_content" src="../Assests/Images/feed${rand}" alt="could't load" style="width: 450px; height: 300px">
        <img class = "feed_content" src="../Assests/Images/feed${
          rand - 1
        }" alt="could't load" style="width: 450px; height: 300px"> 
        <img class = "feed_content" src="../Assests/Images/feed${
          rand + 1
        }" alt="could't load" style="width: 450px; height: 300px">`;
        break;
    } else {
      rand = Math.random();
      rand = Math.round(rand * 10);
      console.log("else" + rand);
    }
  }
} else {
  //do nothing
}
