let favMonth = prompt("What is your favorite month?");
favMonth = favMonth.toLowerCase();

if (/\d/.test(favMonth)) {
  console.log("Please enter a valid month, not numbers!");
} else {

    switch (favMonth) {
    case "january":
      console.log("January — New year, new beginnings!");
      break;
    case "february":
      console.log("February — The month of love!");
      break;
    case "march":
      console.log("March — Spring is in the air!");
      break;
    case "april":
      console.log("April — Time for some showers and flowers!");
      break;
    case "may":
      console.log("May — Everything is blooming beautifully!");
      break;
    case "june":
      console.log("June — School’s out and summer begins!");
      break;
    case "july":
      console.log("July — Perfect for BBQs and fireworks!");
      break;
    case "august":
      console.log("August — Last chance for summer adventures!");
      break;
    case "september":
      console.log("September — Back to school and cozy vibes!");
      break;
    case "october":
      console.log("October — Spooky season and pumpkin spice!");
      break;
    case "november":
      console.log("November — Time to give thanks!");
      break;
    case "december":
      console.log("December — Holiday magic and snowflakes!");
      break;
    default:
      console.log("Hmm, that doesn't seem like a real month.");
      break;
  }

  if (favMonth === "december" || favMonth === "january" || favMonth === "february") {
    console.log("You love the winter months!");
  } else if (favMonth === "june" || favMonth === "july" || favMonth === "august") {
    console.log("You enjoy the summer months!");
  } else if (
    favMonth === "march" ||
    favMonth === "april" ||
    favMonth === "may" ||
    favMonth === "september" ||
    favMonth === "october" ||
    favMonth === "november"
  ) {
    console.log("Other months are interesting too!");
  }
}