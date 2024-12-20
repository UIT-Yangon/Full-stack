import UltiWrapper from '../Components/UltiWrapper';
import About from './About';
import Publication from './Publication';
import Education from './Education';
import Research from './Research';
import Course from './Course';
import StickyProfile from './Layout/StickyProfile';
import img from '../Images/Staff/staff.jfif';
import Name from '../utils/Name';
function Staff() {
  Name("Staff");



 

  let about = {
    title: "About",
    body: "Dr. Aung Nway Oo earned a Bachelor degree in 2002, Master degree in 2006 and Doctoral degree in 2010 from University of Computer Studies, Yangon, (UCSY). He was started working as a Tutor at UCSY in 2004. He is currently a Professor in Faculty of Computer Science, University of Information Technology (UIT)."
  }

  let education = {
    title: "Education",
    list: [
      "Ph.D. (Information Technology) (2010) from University of Computer Studies Yangon, Myanmar",
      "M.C.Sc.(Credit), (2006) from University of Computer Studies, Yangon, Myanmar",
      "B.C.Sc.(Hons.) (2003) from University of Computer Studies, Yangon, Myanmar",
      "B.C.Sc.(Credit) (2002) from University of Computer Studies, Yangon, Myanmar"
    ]
  }

  let research = {
    title: "Research Interests",
    list: [
      "Data mining and machine learning",
      "Computer vision and deep learning"
    ]

  }

  let courses = {
    title: "Courses taught",
    list: [
      "Computer graphics",
      "Computer Vision",
      "Interactive Multimedia"

    ]
}

let publication = {
  title: "Publication",
  bander: "Edge based Crime Assistance System with Cloud Computing",
  date: "16 July 2024",
  body: "Proceedings of the 3rd International Conference on Advanced Information Technologies (ICAIT), Myanmar,"
}

let profile = {
  img: img,
  name: "Staff name",
  title: "Professor & Dean of",
  faculty: "Faculty of Computer Science",
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