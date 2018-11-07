var movieCards = document.getElementById('result')

document.addEventListener('DOMContentLoaded', function () {
  console.log('loading contents')
  var watchlist = localStorage.getItem('watchlist')
  watchlistJSON = JSON.parse(watchlist) //This is because the local storage only takes 
  movieCards.innerHTML = renderMovies(watchlistJSON) // build movie cards
})

function renderMovies (watchlist) {
  console.log('rendering...')
  var moviesHTML = []

  moviesHTML = watchlist.map(function (movie) {
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
