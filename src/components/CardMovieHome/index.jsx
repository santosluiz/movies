import React, { Component } from "react";
import styled from 'styled-components';
import { device } from '../../helper/device';
import { handleSynopsis, handleConvertDate, handleGetImageCard } from '../../helper/getDataMovie.js';
import { NavLink } from 'react-router-dom';
import { Popularity } from '../Popularity';

const CardMovie = styled.div`
  width: 100%;
  display: flex;
  margin: 60px 0;
  -webkit-box-shadow: 0px 5px 30px -17px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 5px 30px -17px rgba(0,0,0,0.75);
  box-shadow: 0px 5px 30px -17px rgba(0,0,0,0.75);
  @media ${device.tablet} {  
    flex-direction: column;
    align-items: center;
  }
`
const MovieImage = styled.div`
  width: 250px;
`
const CardContent = styled.div`
  width: calc(100% - 250px);
  position: relative;
  background: #ebebeb;
  @media ${device.tablet} {  
    width: 100%;
  }
`
const CardTopBar = styled.div`
  width: 100%;  
  height: 95px;
  background: #116193;
  position: relative;
`
const CardH1 = styled.h1`
  position: absolute;
  bottom: 3px;
  margin: 0 0 0 100px;
  font-size: 35px;
  font-weight: 300;
  color: #00e8e4;
`
const CardBoxPopularity = styled.div`
  position: absolute;
  top: 50px;
  left: 11px;
`
const CardDate = styled.p`
  margin: 0 0 0 100px;
  padding-top: 4px;
  font-family: 'Lato', sans-serif;
  font-size: 18px;
  font-weight: 300;
`
const CardDescription = styled.div`
  margin: 35px 20px;
  font-family: 'Lato',sans-serif;
  font-weight: 400;
}
`
const CardReadMore = styled.div`
  font-family: 'Lato',sans-serif;
  position: absolute;
  bottom: 0;
  right: 20px;
`

export class CardMovieHome extends Component{
  state = {
    urlImage: "https://image.tmdb.org/t/p/w300/",
  }
  render(){
    const { urlImage } = this.state

    return(
      <CardMovie key={this.props.content.id}>

        <MovieImage>
          <img src={handleGetImageCard(urlImage, this.props.content.poster_path)} alt="" style={{width: '100%', height: '100%'}}/>
        </MovieImage>

        <CardContent>
          <CardTopBar>
            <CardH1>{this.props.content.title}</CardH1>
          
            <CardBoxPopularity>
              <Popularity size="small" content={this.props.content.popularity}></Popularity>                                
            </CardBoxPopularity>
          </CardTopBar>

          <CardDate>                
            {handleConvertDate(this.props.content.release_date)}
          </CardDate>

          <CardDescription>
            <p>{handleSynopsis(this.props.content.overview)}</p>            
          </CardDescription>

          <CardReadMore>
            <NavLink to={`movie/${this.props.content.id}`}><p>SAIBA MAIS!</p></NavLink>
          </CardReadMore>
        </CardContent>

      </CardMovie>      
    )
  }
}
