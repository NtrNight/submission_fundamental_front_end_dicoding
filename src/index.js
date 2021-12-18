/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable import/no-relative-packages */
/* eslint-disable import/newline-after-import */
import "regenerator-runtime";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./style/main.css";
import "./component/app-bar";
// import "./component/search-bar";

import { Main, Top } from "./view/main";

window.addEventListener("DOMContentLoaded", Main);
window.addEventListener("DOMContentLoaded", Top);
