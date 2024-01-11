//movie, search.js 파일 불러오기
import { generateMovieCards } from "./movie.js";
import { handleSearch } from "./search.js";

generateMovieCards();

const searchInput = document.querySelector("#search-input");
searchInput.focus();

//form input이 submit 될때마다 이벤트 실행
const form = document.querySelector("#search-form");
form.addEventListener("submit", (event) => { 
  event.preventDefault();
  handleSearch(searchInput.value);
});




