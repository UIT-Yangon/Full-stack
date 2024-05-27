import Date from './Date';
import Overview from './Overview';
import MajorImg from './MajorImg';
import SubjectOffer from './SubjectOffer';
import Career from './Career';
import Syllabus from './Syllabus';
function BgPart() {

    return (
      <div className="lg:ms-7">
        <Date />
        <Overview />
        <MajorImg />
        <SubjectOffer />
        <Career />
        <Syllabus />
      </div>
      
    );
  
   
  }
  
  export default BgPart;


