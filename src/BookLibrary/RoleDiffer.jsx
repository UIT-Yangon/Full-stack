import Role1 from './Role1';
import Role2 from './Role2';
function RoleDiffer() {

    return (
       
                         
    <>
        {(window.innerWidth < 1024 ) ? <Role2 /> : <Role1 />}
    </>
                        

        
    )
}

export default RoleDiffer;


//styleName: H4;
// font-family: Oldschool Grotesk;
// font-size: 32px;
// font-weight: 400;
// line-height: 36px;
// text-align: left;
