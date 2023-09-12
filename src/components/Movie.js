import React from "react";
import Stars from "./Stars";

export default class Movie extends React.Component {
  // constructor(props) {
  // super(props);
  // this.state = {
  //     items: [],
  //     DataisLoaded: false
  // };
  // }

  // componentDidMount() {
  // fetch('http://www.omdbapi.com/?i=tt3896198&apikey=7887e7ff&page=5')
  //     .then(res => res.json())
  //     .then(json => {
  //       this.setState({
  //         items: json,
  //         DataisLoaded: true
  //       });
  //     })
  // }

  render() {
    // const {DataisLoaded, items} = this.state;
    // console.log(items)
    // if(!DataisLoaded) {
    // return <div><h1>Please wait...</h1></div>
    // }
    return (
    <div className="card w-50">
        <img src="..." className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <Stars />
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        {/* <img src={items.Poster} className="card-img-top"></img>
        <div className="card-body">
          <h5 className="card-title">{items.Title}</h5>
        </div> */}

        {/* <h1>Fetch data from an api in react</h1>{
        items.map((item) => (
          <ul key={item.id}>
          Title: {item.Title}
        </ul>
        ))
        } */} 
      </div>
      )
        }
      }
