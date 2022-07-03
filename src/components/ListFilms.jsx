import { SpaceForMovies } from "../style/ListFilmStyle";
import { MdNavigateBefore } from "react-icons/md"
import { MdNavigateNext } from "react-icons/md"

import { useState } from "react";

export const ListOfilms= ({ title, listOfilms }) => {
  const [scrollX, setScrollX]= useState(0)

  function exploreSideLeft(){
    let x= scrollX + Math.round(window.innerWidth / 2)
    if(x>0){
      x=0
    }
    setScrollX(x)
  }
  
  function exploreSideRight(){
    let x= scrollX - Math.round(window.innerWidth / 2)
    let listWidth= listOfilms.results.length * 150
    if((window.innerWidth - listWidth) > x){
      x= (window.innerWidth - listWidth) - 60;
    } 
    setScrollX(x)
  }
  return (
    <SpaceForMovies>
      <div className="MovieSpace">
        <h2>{title}</h2>

        <div className="navigateBefore" onClick={exploreSideLeft}>
          <MdNavigateBefore  style={{fontSize:50}}/>
        </div>
        <div className="navigateAfter" onClick={exploreSideRight}>
          <MdNavigateNext  style={{fontSize:50}}/>
        </div>

        <div className="movielist--listarea">
          <div className="movielist--space" style={{
            marginLeft: scrollX,
            marginRight: scrollX,
            width: listOfilms.results.length * 150
          }}>
            {listOfilms.results.length > 0 && listOfilms.results.map((item, key) => {
                return (
                  <div key={key} className="movielist--item">
                    <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </SpaceForMovies>
  );
};
