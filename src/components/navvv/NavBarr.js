import React from "react";
import NavLink from "../link/Link";

class NavBarr extends React.Component {
  constructor() {
    super();
    this.state = {
      navelements: [
        { data: "/home", content: "Home" },
        { data: "/products", content: "Products" },
        { data: "/favs", content: "Favorities" },
      ],
    };
  }
  render() {
    return (
      <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            Store
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              {this.state.navelements.map((item) => (
                <NavLink data={item.data} content={item.content} />
              ))}
            </ul>
          </div>
        </nav>
      </>
    );
  }
}
export default NavBarr;