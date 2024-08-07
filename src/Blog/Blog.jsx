
import React,{useState,useEffect } from 'react';
import useResize from '../utils/useResize';
import Heading from './Components/Heading';
import BodyPart from './BodyPart';
import { useLocation } from 'react-router-dom';
import UltiWrapper from '../Components/UltiWrapper';
import Idendity from './Components/Idendity';
import MajorImg from './Components/MajorImg';
import Image from '../Images/researchLab.png';
import useTop from '../utils/useTop';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from '../utils/axiosInstance';
import dateConvert from '../utils/dateConvert';
import { insertNewsData } from '../store/newsDataSlice';
import { insertPostsData } from '../store/postsDataSlice';

function Blog() {

  const windowWidth = useResize("Promotion and Transfer Announcement");
  const { pathname } = useLocation();

  useTop(pathname);

  const [data, setData] = useState(null);
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const url = `news/${id}`;
  const url2 = 'posts/news';
  const dispatch = useDispatch();



  useEffect(() => {
    // Define the URL to send the GET request to
   

    // Make the GET request
    axios.get(url)
      .then(response => {
        // Handle the successful response here
        setData(response.data);
        dispatch(insertNewsData(response.data));
        setLoading(false);
      })
      .catch(error => {
        // Handle any errors here
        setError(error.message);
        console.error('Error fetching data:', error);
        setLoading(false);
      });


      axios.get(url2)
      .then(response => {
        dispatch(insertPostsData(response.data));
        sessionStorage.setItem('news',JSON.stringify(response.data));
       
      })
      .catch(error => {
      });

      
  }, [url,dispatch]);

  //comments


  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  

  


   


const Img = data.images.heading ?  [data.images.heading] : [];
const title = "Rector";
const name = "Prof. Daw Saw Sanda Aye";
const date = dateConvert(data.updated_at);
const heading = data.title;

  
  return (
      <>
      <UltiWrapper>
        <div className='p-[5%]'>
          <Heading name={heading} />
          <Idendity title={title} name={name} date={date} />
          <MajorImg Img={Img}/>
          <BodyPart />
        </div>
      </UltiWrapper>
          
      
    
    </>
    
  );
}

export default Blog;
