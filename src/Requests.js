const key = "9ffb073db9aa522f80c288713c1dd862"

// Helper function to get the current year
const getCurrentYear = () => {
  const currentDate = new Date();
  return currentDate.getFullYear();
};

// Helper function to get the year from a specified number of years ago
const getPastYear = (yearsAgo) => {
  const currentDate = new Date();
  return currentDate.getFullYear() - yearsAgo;
};

const requests = {
  movierequest: (limit, title, genres, id) => {
    let url = 'https://eu-west-2.aws.data.mongodb-api.com/app/application_movies-yupey/endpoint/movies?';
  
    if (limit) {
      url += `limit=${limit}&`;
    }
  
    if (title) {
      url += `title=${encodeURIComponent(title)}&`;
    }
  
    if (genres) {
      url += `genres=${encodeURIComponent(genres)}&`;
    }
  
    if (id) {
      url += `id=${encodeURIComponent(id)}&`;
    }
  
    return url.slice(0, -1); // Remove the trailing '&' from the URL
  }
  ,
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=true`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestAction: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&with_genres=28`,
  requestComedy: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&with_genres=35`,
  requestRomance: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&with_genres=10749`,
  requestPastYears: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&primary_release_date.gte=${getPastYear(10)}&primary_release_date.lte=${getCurrentYear()}`,
  requestGenreList: `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}`,
  // Add more categories or modify existing ones as needed
};

export default requests;
