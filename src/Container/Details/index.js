import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import './detail.css'

import { img_300,img_not_available } from '../../Coonfig';

const DetailsContainer =()=>{
  const params = useParams();
  const [content, setContent] = useState();
  const [video, setVideo] = useState();
  const [credits, setCredits] = useState();
  const id = params.movieid || '';
  const media_type = params.mediatype || '';
  const API_KEY = process.env.REACT_APP_NOT_SECRET_CODE;
  
  const fetchData = async () =>{
    try{
      const {data} = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=${API_KEY}&language=en-US`);
      setContent(data);
      //console.log('fetchData details',  data);
    }catch(error){
      console.error(error)
    }
}
  return(
        <>
          <h1>Hello i am details page</h1>
        </>
    )
}
export default DetailsContainer;
