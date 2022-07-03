import styled from "styled-components";

export const SpaceForMovies= styled.div`
   .MovieSpace{
    margin-bottom: 20px;
   }
   .MovieSpace h2{
    margin-left: 40px;
   }
   .movielist--listarea{
    padding-left: 30px;
    overflow-x: hidden;
   }
   .movielist--space{
      transition: all ease 1s;
   }
   .movielist--item{
    width: 150px;
    display: inline-block;
   }
   .movielist--item img{
    width: 100%;
    transform: scale(0.9);
    transition: all ease 0.5s;
    cursor: pointer;
   }
   .movielist--item img:hover{
    transform: scale(1);
   }
   .navigateBefore, .navigateAfter{
      position: absolute;
      width: 40px;
      height: 225px;
      background-color: rgba(0 ,0 ,0 , 0.6);
      z-index: 99;
      transition: all ease 0.5s;

      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      cursor: pointer;
      opacity: 0;
   }
   .navigateBefore:hover , .navigateAfter:hover{
      opacity: 1;
   }
   .navigateBefore{
      left: 0;
   }
   .navigateAfter{
      right: 0;
   }


`