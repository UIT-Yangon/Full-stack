

import Name from '../utils/Name';
import UltiWrapper from '../Components/UltiWrapper';
import ImageHeader from '../Components/ImageHeader';
import HeadingStyle2 from '../Components/HeadingStyle2';
import {AnimationButton} from '../Components/Footer';
import Image from '../Images/showPhoto.png';
import { Link } from 'react-router-dom';

function Map() {
  Name("Map");
  // const language = useSelector((state) => state.language.value);

  // const MyanText = "မြေပုံများ";

  // const display = (language === "EN") ? title : MyanText;
  // const windowWidth = useResize(title);

  // const [dataFromNav, setDataFromNav] = useState(true);

  //   const handleDataFromNav = (data) => {
  //       setDataFromNav(data);
  //   };

  return (
    <UltiWrapper className='p-[5%]'>
      
      <ImageHeader name="Map" name1="" image={Image}/>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.403523801537!2d96.13277827511159!3d16.855921617898137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1936f625d4ba7%3A0x9676670831769962!2sUniversity%20of%20Information%20Technology(UIT)!5e0!3m2!1sen!2smm!4v1734720008834!5m2!1sen!2smm"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className=" w-full aspect-video lg:mt-[72px] mt-14"></iframe>
      <div className="mt-9">
      <HeadingStyle2 name="Where we are at:" tinyText="Location" space="pt-8" sizeLead="leading-[48px]" size="text-5xl" mobileSize="text-4xl" mobileSizeLead="leading-[38px]" mobileSpace="pt-8" />
     
      </div>
      <p className="lg:leading-[27px] leading-[21px] text-justify font-[350px] lg:text-lg text-sm my-4">
      Located in Yangon, Myanmar, University of Information Technology is situated on Parami Road in Hlaing Township. The campus is easily accessible, with the nearest bus stop being A.D on Pyay Road, providing convenient public transportation options for students and visitors. The university's strategic location within the city offers a vibrant environment for academic pursuits, surrounded by a mix of residential and commercial areas, making it a dynamic place to study and engage with the local community. There are also accommodation for students from other cities.   
      </p>
      <div className=" lg:mb-[72px] mb-14">
        <Link to="/about/accomodation">
        <AnimationButton value="About Accomodation" />
        </Link>
      
      </div>
      
      
   
    </UltiWrapper>

  );

 
}



export default Map;


//     <>
//      <Navbar sendDataToParent={handleDataFromNav} />

// <div className={windowWidth <= 1024 && !dataFromNav ? 'mainUnactive main px-2' : 'main px-2'}>

  

//  <motion.div initial={{ opacity: 0}} animate={{ opacity: 1}} exit={{ opacity: 0 }} >
//    <div className="hide hero ps-14 pt-[8rem]  lg:pb-24">
// <span className="overflow-hidden fade">
// <AnimatedText
//      once
//      text={display}
//      el="h1"
//      className="lg:text-7xl text-6xl font-medium"
//      language={language}
//    />
// </span>
// </div>
// <div className="sm:hidden hero ps-4 pt-[5rem] lg:pt-72">
//   <span className="overflow-hidden fade">
//    <AnimatedText
//   once
//   text={display}
//   el="h1"
//   className="text-5xl font-medium"
//   language={language}
// />

//   </span>
// </div>
//  </motion.div> 
 


// </div>
   
    
  
//     </>