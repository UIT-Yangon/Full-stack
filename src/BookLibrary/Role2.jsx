import styled from 'styled-components';

const Span = styled.div`
    opacity:  ${props => props.signal ? "100%" : "50%"};

    &::after {
        content: "${props => props.after}";
        position: absolute;
        top: 0;
        left: 100%;
        font-size: 12px;
        font-weight: 400;
        line-height: 16.1px;
        text-align: left;


    }
`

const data = [
    {
        content: "faculty member",
        signal: 0,
        number: 20
    },
    {
        content: "admin/professional staff",
        signal: 0,
        number: 20
    },
    {
        content: "non-academic",
        signal: 0,
        number: 20
    },
    {
        content: "under-graduate",
        signal: 0,
        number: 20
    },
    {
        content: "master",
        signal: 0,
        number: 20
    },
    {
        content: "Ph.D",
        signal: 0,
        number: 20
    },
    {
        content: "diploma",
        signal: 0,
        number: 20
    },

]

function Differ() {

    return (
       
                         
                        <div className=" whitespace-wrap">
                        <span className="inline-block relative bottom-[5px]  text-xs font-normal ms-[5px] me-[30px] lg:me-[55px]  lg:leading-[18px] lg:text-base">
                            <div className="text-[#3798a6] inline-block relative bottom-[3.5px] px-[7px] text-xl">.</div>
                    
                                <span className="opacity-50 ">I am a mobile</span>
                        </span>
                        {data.map(
                            (item) => 
                                <Span className="text-[32px] leading-0 font-normal color-[#1c1d20] inline-block me-[40px] mb-4 relative" after={item.number} signal={item.signal}>{item.content}</Span>
                            )}
                        </div>
                        

        
    )
}

export default Differ;


//styleName: H4;
// font-family: Oldschool Grotesk;
// font-size: 32px;
// font-weight: 400;
// line-height: 36px;
// text-align: left;
