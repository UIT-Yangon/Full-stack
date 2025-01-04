import '../Styles/Degree.css';
import Headline from '../Components/Headline';
import Frame4 from './Frame4';
import Frame6 from './Frame6';
import Frame7 from './Frame7';
import useResize from '../utils/useResize';
import React,{ useState,useEffect } from 'react';
import UltiWrapper from '../Components/UltiWrapper';
import Name from '../utils/Name';
import axios from '../utils/axiosInstance';

function Admission(){
    Name("Requirement");
    useResize("Requirement");

    const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);


const url = 'admission/requirements';

useEffect(() => {
  // Define the URL to send the GET request to
 

  // Make the GET request
  axios.get(url)
    .then(response => {
      // Handle the successful response here
      setData(response.data[0]);
      setLoading(false);
    })
    .catch(error => {
      // Handle any errors here
      setError(error.message);
      console.error('Error fetching data:', error);
      setLoading(false);
    });
    
}, [url]);

if (loading) {
  return <p>Loading...</p>;
}

if (error) {
  return <p>Error: {error}</p>;
}

const studentCount = data.student_intake;
const requirement = data.requirements;
    

    


 

    
    return (
        <>
            <UltiWrapper>
                    <Headline title='Admission Information and Requirements' MyanText='Admission Information and Requirements'/>
                    
                    <div className='px-[5%]'>
                    <Frame4 />
                    <Frame6 studentCount = {studentCount} />
                    <Frame7 requirement = {requirement}/>
                    </div>
                </UltiWrapper>

            
        </>
    )
}


export default Admission;