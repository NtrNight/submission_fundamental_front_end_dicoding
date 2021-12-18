/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector("#searchElement").value;
  }

  render() {
    this.innerHTML = `

        <style>
          .navbar-custom{
            background-color:#F2789F!important;
          }
          .input-field:focus{
            box-shadow:none;
            outline:none !important;
            border:2px solid #eee;
          }
        </style>

          <nav class="navbar navbar-custom navbar-expand-lg navbar-light bg-light shadow-sm bg-body rounded">
            <div class="container-fluid d-flex align-items-center">
              <a class="navbar-brand fs-3 text-white" href="/">Movlix</a>
              <button class="navbar-toggler bg-light shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <form class="d-flex">
                  <input id="searchElement" class="form-control me-2 input-field" type="search" placeholder="Search" aria-label="Search">
                  <button class="btn btn-outline-light" id="btn-search" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>

        `;
    this.querySelector("#btn-search").addEventListener("click", this._clickEvent);
  }
}

customElements.define("app-bar", AppBar);
