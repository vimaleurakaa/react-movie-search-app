import React, { Component } from "react";
import "../../Theme/_Theme.config.scss";
import "./Home.scss";
import MovieCard from "../../Components/MovieCard/MovieCard";
import Search from "../../Components/Search/Search";
import axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rData: [],
      movies: [],
    };
  }

  //global variables
  userInput = "";

  //get recommended movies from database
  getRecommendedMovies = () => {
    const rList = [
      "spider man",
      "war",
      "batman",
      "transformers",
      "blade",
      "avengers",
    ];
    const recommended = rList[Math.floor(Math.random() * rList.length)];
    const url = `https://www.omdbapi.com/?apikey=45f0782a&s=${recommended}`;
    axios.get(url).then((data) => {
      localStorage.setItem("recommended", JSON.stringify(data.data.Search));
      this.setState({
        rData: data.data.Search,
      });
    });
  };

  //update once..
  componentDidMount() {
    this.getRecommendedMovies();
  }

  //get search results from api
  searchHandler = () => {
    const url = `https://www.omdbapi.com/?apikey=45f0782a&s=${this.userInput}`;
    axios.get(url).then((movie) => {
      this.setState({
        movies: movie.data.Search,
      });
    });
  };

  bookmarkHandler = (e, value) => {
    e.preventDefault();
    console.log(value);
  };

  render() {
    return (
      <div className="light">
        <div className="app_hero container-fluid">
          <div className="row">
            <div className="col-md-6 app_hero_search">
              <div className="app_hero_title">
                <h2>Search your favorite movie</h2>
                <Search
                  clicked={this.searchHandler}
                  changed={(e) => (this.userInput = e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {this.state.movies.length !== 0 && (
          <div className="container">
            <div className="row">
              <MovieCard
                title={`Search results for ${this.userInput}`}
                data={this.state.movies}
              />
            </div>
          </div>
        )}

        <div className="container">
          <div className="row">
            <MovieCard
              title="Recommended movies"
              data={this.state.rData}
              bookmark={(e, value) => this.bookmarkHandler(e, value)}
            />
          </div>
        </div>

        <div style={{ textAlign: "center" }}>Vimal Kumar Thanikachalam</div>
      </div>
    );
  }
}

export default Home;
