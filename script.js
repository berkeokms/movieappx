const MOVIE_API_URL = "https://api.themoviedb.org/3/search/movie?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&include_adult=false&query=";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

var search = document.getElementById("input");
var search1 = document.getElementById("search1");

document.getElementById("button").onclick = () => {
  window.location.reload()
}
async function Movies() {

  search1.onclick = async () => {
    var r = await fetch(MOVIE_API_URL + search.value);
    var rData = await r.json();

    rData.results.forEach(movie => {
      const {
        id,
        title,
        vote_average,
        poster_path

      } = movie;
  

      if (IMGPATH + poster_path != "https://image.tmdb.org/t/p/w1280null") {

        var container2 = document.querySelector(".container-movie1");
        var container = document.createElement("div");
        
        container.innerHTML = `
  <div class="container-movie"> 
   <img class="poster"
   src="${IMGPATH+poster_path}"
   />
   <div class="title1"> 
   ${title}
 
       </div>
       <img 
       src="cancel.svg"
       class="cancel"
       />
       <span class="${notAverage(vote_average)}">
 
${vote_average}

</span>

   </div> 

  `;
  document.querySelector(".container-movie1").onclick = (e) => {
    if (e.target.className == "cancel")
       e.target.parentElement.remove();
  }
        function notAverage(average) {

          if (average > 8) {
            return "green";
          } else if (average >= 5) {
            return "orange";
          } else {
            return "red";
          }
        }
        container2.appendChild(container);

        
      }
    });
  }
}
Movies();
search.addEventListener("keyup", function (event) {

  if (event.keyCode === 13) {

    event.preventDefault();

    document.getElementById("search1").click();
  }
});
