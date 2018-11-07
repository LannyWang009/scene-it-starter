var movieCards = document.getElementById('result')

document.addEventListener('DOMContentLoaded', function () {
  console.log('loading contents')
  movieCards.innerHTML = renderMovies(movieData) // build movie cards

  document.getElementById('search-form').addEventListener('input', searchMovies)
  document.getElementById('search-form').addEventListener('submit', searchMovies)
})

// save to watchlist
function saveToWatchlist (imdbID) {
  var movie = movieData.find(function (currentMovie) {
    return currentMovie.imdbID == imdbID
  })
  console.info(movie)

  var watchlistJSON = localStorage.getItem('watchlist')
  var watchlist = JSON.parse(watchlistJSON)
  if (watchlist == null) {
    watchlist = [];
  }
  
  watchlist.push(movie)
  watchlistJSON = JSON.stringify(watchlist)
  localStorage.setItem('watchlist', watchlistJSON) // this is to save this movie(JSON) into the localstorage
  console.info(watchlist)
}

// render the movie cards
function renderMovies (movies) {
  console.log('rendering...')
  var moviesHTML = []
  moviesHTML = movies.map(function (movie) {
    return `
        <div class="movie card bg-light text-center" style="width: 15rem; margin-top: 1rem;">
            <img class="card-img-top img-responsive" src="${movie.Poster}" alt=${movie.Title} />
            <div class="card-body" style="margin:0 auto 0 auto">
                <h5 class="card-title mt-1 movie-title">${movie.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${movie.Year}</p>
            </div>
                <div class="card-footer bg-warning btn" onclick="saveToWatchlist('${movie.imdbID}')">Add to Watchlist</div>
        </div>
        `
  })

  var x = `
    <div class="movies-container col-12" id="results" style="display:flex; flex-direction: row; flex-wrap: wrap; justify-content: space-around">
            ${moviesHTML.join('')} 
    </div>
    `
  return x
}

// search movie function
function searchMovies (e) {
  e.preventDefault()
  var searchString = e.target.value.toLowerCase()
  var filterData = movieData.filter(function (movie) {
    var foundInName = movie.Title.toLowerCase().indexOf(searchString) > -1
    var foundInDate = movie.Year.toLowerCase().indexOf(searchString) > -1
    return foundInName || foundInDate
  })

  if (e.target.value === '') {
    console.log('rendering movies')
    movieCards.innerHTML = renderMovies(movieData)
  } else {
    console.log('rendering search')
    // SpeechRecognitionResultList.log('rendering search')
    movieCards.innerHTML = renderMovies(filterData) + `
        <div class="col-12 text-center text-white-50 mt-5 mb-5 pt-3 pb-3" id="pageDivider">
        <h2>Other Movies You Might Enjoy</h2>
        </div>
        ` + renderMovies(movieData)
  }
}
