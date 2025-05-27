import UltiWrapper from '../Components/UltiWrapper';
import About from './About';
import Publication from './Publication';
import Education from './Education';
import Research from './Research';
import Course from './Course';
import StickyProfile from './Layout/StickyProfile';

import Name from '../utils/Name';
import React,{useState,useEffect } from 'react';
import axios from '../utils/axiosInstance';
import { useLocation } from 'react-router-dom';

function Staff() {
  Name("Staff");

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const location = useLocation(); // React Router v6 hook

  // For React Router v5 and earlier, you'd access it via props:
  // const { location } = props;

  const secretData = location.state?.id;
  const url = `staff/${secretData}`;

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

function transformStringToArray(input) {
  if (typeof input !== 'string') {
      throw new Error("Input must be a string.");
  }

  // Split the input by `\r\n` and trim each entry
  const lines = input.split(/\r?\n/).map(line => line.trim());

  // Filter out empty entries and ensure the content has letters
  const result = lines.filter(line => /[a-zA-Z]/.test(line));

  return result;
}

let eduArray = transformStringToArray(data.education);
let interestArray = transformStringToArray(data.research_interests);
let courseArray = transformStringToArray(data.courses_taught);



  let about = {
    title: "About",
    body: data.biography
  }

  let education = {
    title: "Education",
    list: eduArray
  }

  let research = {
    title: "Research Interests",
    list: interestArray

  }

  let courses = {
    title: "Courses taught",
    list: courseArray
}

let publication = data.staff_publications;

let profile = {
  img: data.image,
  name: data.name,
  title: data.position,
  faculty: data.department,
  link: "/faculties/computer-science"
}





  return (
    <UltiWrapper className='p-[5%]'>
        <div className="w-full grid grid-cols-1 lg:grid-cols-[0.5fr_1fr] lg:gap-x-16 gap-8 lg:py-[72px] py-14">
            <StickyProfile data={profile} />
            <div>
                <About data={about}/>
                <Publication data={publication}/>
                <Education data={education}/>
                <Research data={research}/>
                <Course data={courses}/>
            </div>

        </div>


</UltiWrapper>
  );


}



export default Staff;