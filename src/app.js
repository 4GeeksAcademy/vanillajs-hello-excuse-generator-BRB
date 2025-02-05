let sentence = document.getElementById("excuse");
let button = document.getElementById("button");

let who = ["My Cat", "My Kid", "My Grandma", "My Mom"];
let what = ["Slept", "Slid", "Tripped", "Twirled"];
let item = ["On the Floor", "On the Road", "On the Ice", "On the Carpet"];

button.addEventListener("click", function() {
  //write your code here
  let randomNumberFirst = Math.floor(Math.random() * who.length);
  let randomNumberSecond = Math.floor(Math.random() * what.length);
  let randomNumberThird = Math.floor(Math.random() * item.length);

  let first = who[randomNumberFirst];
  let second = what[randomNumberSecond];
  let third = item[randomNumberThird];

  return (sentence.innerHTML = first + " " + second + " " + third + ".");
});
