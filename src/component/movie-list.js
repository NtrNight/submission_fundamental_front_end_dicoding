/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable arrow-parens */
/* eslint-disable quotes */

/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */

import "./movie-item";

class MovieList extends HTMLElement {
  set movie(movies) {
    this._movies = movies;
    this.render();
  }

  render() {
    // this.classList.add("row");
    this.innerHTML = "";
    this._movies.forEach(movieList => {
      const movieItemElement = document.createElement("movie-item");
      // movieItemElement.classList.add("col-4");
      movieItemElement.movie = movieList;
      this.appendChild(movieItemElement);
    });
  }

  renderError(message) {
    this.innerHTML = `
        <style>

        </style>
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>${message}</strong>. Please search with another keyword!
        <a href="/">
          <button type="submit" class="close btn btn-danger" data-dismiss="alert" aria-label="Close">
              <svg xmlns="" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>
          </button>
        </a>
        </div>
        `;
  }
}

customElements.define("movie-list", MovieList);
