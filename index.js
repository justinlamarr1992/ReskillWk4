const name = prompt("Whats your name");
const height = prompt("Whats your height in inches");
const country = prompt("Whats country do you live in");

function doIt(name, height, country) {
  alert(
    "Hello " +
      name +
      ", it's nice to see that you are " +
      height +
      " inches tall... Im not sure if thats average height in " +
      country
  );
}
doIt(name, height, country);
