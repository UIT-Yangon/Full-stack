import { Link } from "react-router-dom";

function DepartmentCon(){
    const data2  = [
        {
          name: "Department of English",
          link: "departments/english"
        },
        {
          name: "Department of Myanmar",
          link: "departments/myanmar"
        },
        {
          name: "Department of Physics",
          link: "departments/physics"
        },
        {
          name: "Department of Information Technology Support and Maintenance",
          link: ""
        },
        {
          name: "Department of Student Affair",
          link: ""
        },
        {
          name: "Department of Staff Affairs",
          link: ""
        },
        {
          name: "Department of Operation Division",
          link: ""
        },
        {
          name: "Department of International Relations",
          link: ""
        },
        {
          name: "Department of Finance",
          link: ""
        },
      
       ]

    return(
        <div className="flex justify-between gap-x-1 gap-y-10 w-full flex-wrap">
            {data2.map((data,index)=>(
                <Link to={`/${data.link}`} key={index} className="bg-[#077d81] 2xl:w-[350px] xl:w-[300px] w-[155px] h-[208px]  2xl:h-[308px] flex items-center justify-center  py-[64px] px-[32px] rounded-[32px]">
                    <h4 className="xl:text-[25px] text-[15px] 2xl:leading-[27px] special-font leading-[20px] text-center text-[#fff]">{data.name}</h4>

                </Link>
            ))}
            
        </div>
    )
}

export default DepartmentCon;