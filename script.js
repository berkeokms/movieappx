const MOVIE_API_URL = "https://api.themoviedb.org/3/search/movie?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&include_adult=false&query=";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

var search=document.getElementById("input");
var search1=document.getElementById("search1");

Movies();

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

      var container2 = document.querySelector(".container-movie1");

    var poster = document.createElement("IMG");
    poster.src = IMGPATH + poster_path;
    poster.className = "poster";

    var container = document.createElement("div");
    container.className = "container-movie";
    
    var title1 = document.createElement("div");
    title1.className = "title1";
    title1.innerHTML = movie.title;
   
    var vote1 = document.createElement("div");
   
    vote1.innerHTML = movie.vote_average;
   

  if(Number(vote1.innerHTML)>8){
    vote1.className = "vote3";
    container.appendChild(vote1);
  }else if (Number(vote1.innerHTML)>5){
    vote1.className = "vote2";
    container.appendChild(vote1);
  }else if(Number(vote1.innerHTML<5)){
    vote1.className = "vote1";
    container.appendChild(vote1);
   }

container.appendChild(title1);

container.appendChild(poster);

container2.appendChild(container);

});
}

document.getElementById("button").onclick=()=>{
  window.location.reload()
}
  
}
