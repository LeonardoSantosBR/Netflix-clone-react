import styled from "styled-components";

export const FeatureMovieMain= styled.div`
    .featured{
        height: 100vh;
    }
    .degrade--horizontal{
        width: inherit;
        height: inherit;
        background: linear-gradient(to top, #111 10%, transparent 70%);
    }
    .degrade--vertical{
        width: inherit;
        height: inherit;
        background: linear-gradient(to right, #111 10%, transparent 70%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 39px;
        padding-bottom: 120px;
        padding-top: 70px;
    }
    .featured--name{
        font-size: 60px;
        font-weight: bold;
    }
    .featured--info{
        font-size: 18px;
        font-weight: bold;
        margin-top: 15px;
    }
    .featured--points{
        display: inline-block;
        color: #43d369;
        margin-right: 15px;
    }
    .featured--year{
        display: inline-block;
        margin-right: 15px;
    }
    .featured--seasons{
        display: inline-block;
    }
    .featured--description{
        margin-top: 15px;
        font-size: 20px;
        color: #999;
        max-width: 40%;
    }
    .featured--buttons{
        margin-top: 19px;
    }
    .buttonWatch, .buttonMyList{
        display: inline-block;
        font-weight: bold;
        font-size: 20px;
        padding: 11px 10px;
        margin-right: 10px;
        border: 0;
        text-decoration: none;
        border-radius: 10px;
        cursor: pointer;
        opacity: 1;
    }
    .buttonWatch:hover, .buttonMyList:hover{
        opacity: 0.7;
    }
    .buttonWatch{
        background-color: #fff;
        color: #000;
    }
    .buttonMyList{
        background-color: #222;
        color: #fff;
    }
    .featured--genres{
        margin-top: 10px;
        font-size: 15px;
        color: #999;
    }
    `