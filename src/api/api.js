/* eslint-disable linebreak-style */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable prefer-promise-reject-errors */

const baseUrl = "https://api.themoviedb.org/3";
const APIkey = "bffe19e1bf0d19a2a3683c811d4c24db";

class SearchAPI {
  static dataAPI(keyword) {
    return fetch(`${baseUrl}/search/movie?api_key=${APIkey}&language=en-US&query=${keyword}&page=1&include_adult=false`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.results && responseJson.total_results !== 0) {
          return Promise.resolve(responseJson.results);
        }
        return Promise.reject(`${keyword} Tidak Ada`);
      });
  }
}
class TopAPI {
  static mainAPI() {
    return fetch(`${baseUrl}/movie/top_rated?api_key=${APIkey}&language=en-US&page=1`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.results && responseJson.total_results !== 0) {
          return Promise.resolve(responseJson.results);
          // return console.log(responseJson);
        }
        return Promise.reject("Tidak Ada Movie");
      });
  }
}
export { SearchAPI, TopAPI };
