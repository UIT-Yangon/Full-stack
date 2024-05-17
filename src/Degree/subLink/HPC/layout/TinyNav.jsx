import NavBody from './NavBody';
import NavBody2 from './NavBody2';

function TinyNav({className, attr}) {

    return (
      
      <div  className={className} >
        <center className="mt-16">
            {attr ? <NavBody2 /> : <NavBody /> }
            
        </center>

    
      </div>

    );
  
   
  }
  
  export default TinyNav;