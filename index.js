var card = document.getElementById('results')
card.innerHTML = renderMovies(movieData)

function renderMovies (movies) {
    console.log('rendering...')
    var moviesHTML = [];
  moviesHTML = movies.map(function (movie) {
    return `
        <div class="movie card bg-light text-center" style="width: 15rem; margin-top: 1rem;">
            <img class="card-img-top img-responsive" src="${movie.Poster}" alt=${movie.Title} />
            <div class="card-body" style="margin:0 auto 0 auto">
                <h5 class="card-title mt-1 movie-title">${movie.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${movie.Year}</p>
            </div>
                <div class="card-footer bg-warning btn">Add to Watchlist</div>
        </div>
        `
  })
  console.info(movieData)
  console.info(moviesHTML.join(''))

  return `
    <div class="movies-container col-12" id="results" style="display:flex; flex-direction: row; flex-wrap: wrap; justify-content: space-around">
            ${moviesHTML.join('')} 
    </div>
    `
    
}

document.addEventListener('DOMContentLoaded', function () {
  console.log('loading contents')})

//   // document.getElementById('search-form').addEventListener('input',searchMovies)
//   // document.getElementById('search-form').addEventListener('submit',searchMovies)
// })


