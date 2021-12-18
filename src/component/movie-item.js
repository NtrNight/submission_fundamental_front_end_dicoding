/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
class MovieItem extends HTMLElement {
  set movie(movies) {
    this._movies = movies;
    this.render();
  }

  render() {
    this.innerHTML = `
        <div id="${this._movies.id}" class="parent p-2 card overflow-hidden rounded-4 text-center text-dark bg-light m-2" type="button" data-toggle="modal" data-target="#exampleModalCenter">
        <img class=" card-img rounded-4 card-img-top" src="${this._movies.poster_path !== null || undefined || "" ? `https://image.tmdb.org/t/p/w500${this._movies.poster_path}` : "https://pbs.twimg.com/media/EXPCIJuUcAEDjo_?format=png&name=medium"}" alt="Poster Movie">
          <div class="d-flex flex-column justify-content-end">
            <p class="card-title mt-3"><strong>${this._movies.original_title}</strong> (${this._movies.release_date ? this._movies.release_date.substring(0, 4) : ""})</p>
          </div>
        </div>
      `;
  }
}

customElements.define("movie-item", MovieItem);
