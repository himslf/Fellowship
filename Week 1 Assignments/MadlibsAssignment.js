function madlibs() {
  let storyLine1;
  let storyLine2;
  
  let playerChoice = prompt("Would You Prefer Story1 or Story2?");
  
  // Story-1 Path
  if (playerChoice == "Story1" || "story1" || "1") {
    let adj1 = prompt("Type An Adjective: ");
    let genPlace = prompt("Type A General Place: ");
    let carNameP = prompt("Type A Name of Vehicle (Plural): ");
    let gameName = prompt("Type The Name of a Game: ");
    let pNoun = prompt("Type a Noun in Plural Form: ");
    let verbING = prompt("Type A '-ing' Verb: ");
    let verbING2 = prompt("Type Another '-ing' Verb: ");    
    let foodName = prompt("Type a Food Name (Plural): ");
    let sportName = prompt("Type The Name of a Sport: ");
    let verbING3 = prompt("Type Another '-ing' Verb: ");
    let emoshun = prompt("Type An Emotion: ");
    let numb = prompt("Type A Number: ");
    
    storyLine1 = `A vacation is when you take a trip to some ${adj1} place
    near an amazing ${genPlace}. A good vacation place is one where you can
    ride ${carNameP} or play ${gameName} or go hunting for ${pNoun}. I like
    to spend my time ${verbING} or ${verbING2}. When parents go on vacation,
    they spend their time eating three ${foodName} a day. Usually, fathers
    play ${sportName}, and mothers spend their time ${verbING3}. Adults need
    vacations more than kids because adults are always very $
    {emoshun} because they have to work ${numb} hours everyday all year just
    to afford vacations!`;
    
    return storyLine1;
  }; // if-statement end

  
  
  // Story-2 Path
  if (playerChoice == "Story2" || "story2" || "2") {
    
    let adj2 = prompt("Type An Adjective: ");
    let famousPlace = prompt("Type A Famous Place: ");
    let pNoun2 = prompt("Type a Noun in Plural Form: ");
    let adj3 = prompt("Type Another Adjective: ");
    let foodName2 = prompt("Type a Food Name (Plural): ");
    let emoshun2 = prompt("Type An Emotion: ");
    let verbING4 = prompt("Type A '-ing' Verb: ");
    let commPlace = prompt("Type a Common Place: ");
    let adj4 = prompt("Type Another Adjective: ");
    let plainNoun = prompt("Type a Noun: ");
    let adj5 = prompt("Type Another Adjective: ");
    let plainNoun2 = prompt("Type Another Noun: ");
    let famBer = prompt("Type A Family Member: ");
    let adj6 = prompt("Type Another Adjective: ");
    
   
    storyLine2 = `Today we took a ${adj2} fieldtrip to ${famousPlace}. They're
    famous for making ${pNoun2} and for cooking ${adj3} ${foodName2}. Eating
    all that food made me feel ${emoshun2}. Next, we enjoyed the local
    tradition of ${verbING4} in the middle of the ${commPlace}! Finally, we
    went shopping for souvenirs. I bought a ${adj4} ${plainNoun} for myslef,
    and a ${adj5} ${plainNoun2} for my favorite ${famBer}. I'll definitely
    never this ${adj6} trip!`;
    
    return storyLine2;
  }; // if-statement end
  
}; // function end

// printing madlibs function return value; U N C O M M E N T below:
console.log(madlibs());


