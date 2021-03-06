import React from "react";
import axios from 'axios' ;
import { useState, useEffect } from "react";
import './ContentSection.css'
// import fontawe

function ContentSection(){

    const [posts,setPosts] = useState([]) ;


    useEffect(() => {
        const req = async () => {
            await axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
            // handle success
            // console.log(response.data);
            setPosts(response.data) ;
            })
            .catch(function (error) {
            // handle error
            // console.log(error);
            })
            .then(function () {
            // always executed
            });
        }  
        req() ;
      },[]);
    
      const postsTitles: any[][] = [[],[],[]] ;
      let i = 0 ;
      posts.forEach((element) => {
        postsTitles[i%3].push(
            <div key={element["id"]} className="card" style={{backgroundImage: `url("https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp")`}} >
                <div className="card-body">
                {/* <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp" className="img-fluid"/>
                    <a href="#!">
                    <div className="mask"></div>
                    </a>
                </div> */}
                    <h5 className="card-title">{element["title"]}</h5>
                    <p className="card-text">{element["body"]}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        );
        i ++ ;
    })


    return (
        <div className="row">
            <div className="col">
                {postsTitles[0]}
            </div>
            <div className="col">
                {postsTitles[1]}
            </div>
            <div className="col">
                {postsTitles[2]}
            </div>
        </div>
    );

}

export default ContentSection ;