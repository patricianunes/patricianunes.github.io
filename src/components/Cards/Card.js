import React from "react";

import "./Card.css";
import TicTacToe from "./tictactoe.png";
import BjjKing from "./bjjking.png";
import ChromeExtension from "./ce.png";
import CardItem from "./Card.Item";

const items = [
  {
    name: "TicTacToe",
    description:
      "My first ever project was this 😼 vs 🐶 tic-tac-toe game. Using JavaScrip, HTML and CSS. I wrote it as an assignment and had it reviewed by @cironunesdev.",
    github: "https://github.com/patricianunes/TicTacToe",
    value: "https://patricianunes.github.io/TicTacToe/",
    image: TicTacToe,
    linkGitHub: "patricianunes/TicTacToe",
    linkValue: "patricianunes.github.io/TicTacToe/"
  },
  {
    name: "My Website",
    description:
      "This very website was programmed by me as an exercise to practice JavaScript, React, HTML, CSS and Trevis.",
    github: "https://github.com/patricianunes/website",
    linkGitHub: "patricianunes/website"
  },
  {
    name: "Bjj King app",
    description:
      "Ruby on Rails CRUD app with authentication deployed to Heroku. For the styles I used Bootstrap 4.",
    github: "https://github.com/patricianunes/bjjking",
    value: "https://bjjking.herokuapp.com/",
    image: BjjKing,
    linkGitHub: "patricianunes/bjjking",
    linkValue: "bjjking.herokuapp.com/"
  },
  {
    name: "Super Chrome Extension",
    description:
      "Chrome extension multi-apps, with React. Similar at the cellphone menu that can have many apps that help us in our routing.",
    github: "https://github.com/patricianunes/super-chrome-extension",
    value: "https://patricianunes.github.io/super-chrome-extension/",
    image: ChromeExtension,
    linkValue: "patricianunes.github.io/super-chrome-extension/",
    linkGitHub: "patricianunes/super-chrome-extension"
  }
];

const Card = () => (
  <ul className="grid">
    {items.map(item => (
      <CardItem {...item} />
    ))}
  </ul>
);

export default Card;
