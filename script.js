// Script.js

import { WsTransport } from "@ndn/ws-transport";
async function main() {
  const face = await WsTransport.createFace({}, "wss://hmbe.ndntel-u.my.id:9696");
  face.addRoute(new Name("/"));
  // Enable the form after connection was successful.
  // document.querySelector("#seeAllButton").addEventListener("click", seeAll);
}
window.addEventListener("load", main);

// Toggle Menu
const menuBar = document.getElementById('menubar');
const navbar = document.querySelector('.navbar');

menuBar.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Smooth Scroll
const links = document.querySelectorAll('.navbar a');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const href = link.getAttribute('href');
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
      top: offsetTop,
      behavior: 'smooth'
    });

    navbar.classList.remove('active');
  });
});
