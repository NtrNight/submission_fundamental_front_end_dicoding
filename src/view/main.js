/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable new-cap */
/* eslint-disable no-const-assign */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import { SearchAPI, TopAPI } from "../api/api";
import "../component/app-bar";
import "../component/movie-list";

const Main = () => {
  const searchElement = document.querySelector("app-bar");
  const movieList = document.querySelector("movie-list");

  const onButtonClicked = async (e) => {
    e.preventDefault();
    // console.log(searchElement.value);
    try {
      const result = await SearchAPI.dataAPI(searchElement.value);
      renderResult(result);
      // console.log(result);
    } catch (message) {
      fallbackMessage(message);
    }
  };

  const renderResult = (results) => {
    movieList.movie = results;
  };

  const fallbackMessage = (message) => {
    movieList.renderError(message);
  };

  searchElement.clickEvent = onButtonClicked;
};

const Top = () => {
  const movieList = document.querySelector("movie-list");

  const movieTop = async () => {
    try {
      const result = await TopAPI.mainAPI();
      renderResult(result);
    } catch (message) {
      fallbackMessage(message);
    }
  };
  const renderResult = (results) => {
    movieList.movie = results;
  };

  const fallbackMessage = (message) => {
    movieList.renderError(message);
  };

  movieTop();
};

export { Main, Top };
