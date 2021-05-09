const MOVIE_API_URL = "https://api.themoviedb.org/3/search/movie?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&include_adult=false&query=";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

var search = document.getElementById("input");
var search1 = document.getElementById("search1");



//Enter ataması yapıyoruz
search.addEventListener("keyup", function (event) {

  if (event.keyCode === 13) {

    event.preventDefault();

    document.getElementById("search1").click();
  }
});

////Programın çalısması için fonksiyonu çalıstırıyoruz..
Movies();

document.getElementById("button").onclick = () => {
  window.location.reload()
}
async function Movies() {

  search1.onclick = async () => {
    var r = await fetch(MOVIE_API_URL + search.value);//API üzerinden aldığımız adresi ve bizim girdiğimiz inputun eş zamanlı çalısması için bu şekil de yazıyoruz.
    var rData = await r.json(); //json atamasını yapıyoruz

    rData.results.map(movie => {
      const {
        id,
        title,
        vote_average,
        poster_path
      } = movie;  //çekeceğimiz başlıkları programda gösteriyoruz..




  //null değerleri almıyoruz   
   if (IMGPATH + poster_path != "https://image.tmdb.org/t/p/w1280null")  {
        
   var container2 = document.querySelector(".container-movie1");

        var container = document.createElement("div");
        container.className = "container-movie";

        var poster = document.createElement("IMG");
        poster.src = IMGPATH + poster_path;
        poster.className = "poster";
        poster.innerHTML = movie.poster_path;

        var title1 = document.createElement("div");
        title1.className = "title1";
        title1.innerHTML = movie.title;

           //vote numaralarının rengini değiştirmek için bu fonksiyonu kullanıyoruz..
        function not() {
          var vote1 = document.createElement("div");
          vote1.innerHTML = movie.vote_average;

          if (Number(vote1.innerHTML) > 8) {
            vote1.className = "vote3";
            container.appendChild(vote1);
          } else if (Number(vote1.innerHTML) >= 5) {
            vote1.className = "vote2";
            container.appendChild(vote1);
          } else if (Number(vote1.innerHTML < 5)) {
            vote1.className = "vote1";
            container.appendChild(vote1);
          }
        }

        //parent child atamalarını yapıyoruz. en üst parent container2 olacak şekilde. container2=container-move..
        container.appendChild(poster);
        container.appendChild(title1);
        container2.appendChild(container);
        //en sonda da not fonksiyonunu çağırıyoruz..
        not();

      } else {
        console.log("Fotoğrafı görünmeyenler silindi***");
      }
    });
  }
}
