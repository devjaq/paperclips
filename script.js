"use strict";

let qtyPaperclips = document.getElementById('paperclips');

console.log(qtyPaperclips.attributes);

let paperclips = 0;

let funds = 0;
let fundsDisplay = document.getElementById('funds');
fundsDisplay.innerText = `Available Funds: ${funds}`;

qtyPaperclips.innerText = `Paperclips: ${paperclips}`;


function makeClip() {
  paperclips += 1;
  qtyPaperclips.innerText = `Paperclips: ${paperclips}`
}

let qtyWire = 1000;

let qtyWireDisplay = document.getElementById('qty-wire');
qtyWireDisplay.innerText = `${qtyWire} Inches`;

let costWire = 14;
let costWireDisplay = document.getElementById('wire-cost');
costWireDisplay.innerText = `Cost: $${costWire}`


function addWire() {
  // add wire
  qtyWire += 1000;
  qtyWireDisplay.innerText = `${qtyWire} Inches`;

  // subtract money
  funds -=  costWire;
  fundsDisplay.innerText = `Available Funds: $${funds}`

}

let clipPrice = .25;
let clipPriceDisplay = document.getElementById('clip-price');
clipPriceDisplay.innerText = `Price per Clip: $${clipPrice}`;

function raisePrice() {
  clipPrice += .01;
  clipPriceDisplay.innerText = `Price per Clip: $${clipPrice}`;
}

function lowerPrice() {
  clipPrice -= .01;
  clipPriceDisplay.innerText = `Price per Clip: $${clipPrice}`;
}

setInterval(sellClip, 3000);

function sellClip() {
  console.log("sold");
  if (paperclips > 0) {
    paperclips -= 1;
    qtyPaperclips.innerText = `Paperclips: ${paperclips}`;

    // add funds
    funds += clipPrice;
    fundsDisplay.innerText = `Available Funds: $${funds}`;
  }
}
