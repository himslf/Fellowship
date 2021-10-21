let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload =  function(event) {
  
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)

// 1
function newTitle() {
  document.getElementById("main-title").innerText = "Dom's Page";
}
newTitle();

// 2
function BGChange() {
  document.body.style.backgroundColor = "beige";
}
BGChange();

// 3
function lastBeGone() {
  document.querySelector("li:last-child").remove("li:last-child");
}
lastBeGone();

// 4
function newFont() {
  let objects = document.getElementsByClassName("special-title");
  for (let i = 0; i < objects.length; i++) {
    objects[i].style.fontSize = "2rem";
  }
}
newFont();


// 5
function pastRaces() {
  let pastRaces = document.getElementById("past-races");
  pastRaces.removeChild(pastRaces.children[3]);
}
pastRaces();

// 6
function appendCity() {
  let newItem = document.createElement("li");
  let text = document.createTextNode("New York");
  newItem.appendChild(text);
  document.getElementById("past-races").appendChild(newItem);

}
appendCity();

// 7
function newP() {
  let blogPost = document.createElement("div");
  let heading = document.createElement("h1");
  let para = document.createElement("p");
  blogPost.className = "blog-post purple";
  heading.innerHTML = "New York";
  para.innerHTML = "I did a cool flip in my car!";
  blogPost.appendChild(heading);
  blogPost.appendChild(para);
  let main = document.getElementsByClassName("main")[0];
  main.appendChild(blogPost);
}

newP();
} // endWINDOW


//jeezlouweez