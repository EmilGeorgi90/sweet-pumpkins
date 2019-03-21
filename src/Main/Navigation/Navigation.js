import React from "react";
import "./Navigation.css";
import Selection from "./Selection";
import Slider from "./Slider";
import CustButton from "./Button";

class Navigation extends React.Component {
    componentDidMount() {
        fetch(this.props.url)
          .then(response => response.json())
          .then(data => this.props.setGenres( data.genres ))
          .catch(error => console.log(error));
      }




  onChange = data => {
    this.setState({
      [data.type]: {
        ...this.state[data.type],
        value: data.value
      }
    });
  };

  render() {
    const { genre, genres, onGenreChange, onChange, year, rating, runtime, onSearchButtonClick } = this.props;
    return (
      <section className="navigation">
        <Selection
          genre={genre}
          genres={genres}
          onGenreChange={onGenreChange}
        />

        <Slider data={year} onChange={onChange} />
        <Slider data={rating} onChange={onChange} />
        <Slider data={runtime} onChange={onChange} /> 

        <CustButton onClick={onSearchButtonClick}>
          Search
        </CustButton>      </section>
    )
  }
}

export default Navigation;