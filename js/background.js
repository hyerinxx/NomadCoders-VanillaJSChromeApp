const images = ["crosswalk.png", "leaves.png", "sea.png", "seawall.png"];

const chosenImage = images[parseInt(Math.random() *999 %images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);