import Date from '../Degree/Bachelor/Components/Date';
import Overview from '../Degree/Bachelor/Components/Overview';
import MajorImg from '../Degree/Bachelor/Components/MajorImg';
import Objectives from '../Degree/Bachelor/Components/SubjectOffer';
import Areas from './Components/Areas';

import Member from './Components/Member';

import { faMicroscope, faBriefcase, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Publication from './Components/Publication';
import { useContext } from 'react';
import { LabContext } from './Labs';

function BgPart() {
  const { paragraph, Img, members, content, areas, currentWorks, completeWorks, publication } = useContext(LabContext);

  return (
    <div className="lg:ms-7">
      <Overview title='About' paragraph={paragraph} />
      <MajorImg Img={Img} />
      <Member members={members} />
      <Objectives title='Objectives' content={content} id="Objectives" />
      <Areas career={areas} title='Areas of Research' icon={faMicroscope} />
      <Areas career={currentWorks} title='Current Research Works' icon={faBriefcase} />
      <Areas career={completeWorks} title='Completed Research Works' icon={faCircleCheck} />
      <Publication publication={publication} />
    </div>
  );
}

export default BgPart;



