import React from 'react';

/*
 * Create navbar and add on-click handlers
 */
export class Navbar extends React.Component {
  createNavEntry (navEntry) {
    return (
      <li>
        <a href={navEntry.link}>
          {navEntry.text}
        </a>
      </li>
    );
  }
  render () {
    const entries = [
      {link: "#/", text: "Home", id: "welcome"},
      {link: "#/services", text: "Leistungen", id: "services"},
      {link: "#/about-us", text: "Über uns", id: "about-us"},
      {link: "#/articles", text: "Artikel", id: "articles"}]
    return (
      <nav  style={{visibility: "hidden", position: "absolute"}} >
        <ul>
          {entries.map(this.createNavEntry)}
        </ul>
      </nav>
    );
  }
}
