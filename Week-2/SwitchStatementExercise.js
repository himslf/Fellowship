let favMov = "Jaws";
let moviePhrase = "a Phrase";

switch (favMov) {
	// let moviePhrase = ""; does this go here instead?

	case ("Jaws") || ("jaws"): // lowercase doesnt register
		moviePhrase = "You're gonna need a bigger boat.";
		break;

 	case "The Shining" || "the shining":
  	moviePhrase = "All work and no play make Jack a dull boy.";
    break;

  case "Star Wars" || "star wars":
    moviePhrase = "Do. Or do not. There is no try.";
    break;

  case "Forrest Gump" || "forrest gump":
    moviePhrase = "Life was like a box of chocolates.";
    break;

  case "Back to the Future" || "back to the future":
    moviePhrase = "Where we're going, we don't need roads.";
    break;

  default:
    moviePhrase = "Great movie choice!";
}

console.log(moviePhrase);