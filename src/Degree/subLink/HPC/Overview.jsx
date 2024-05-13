function Overview() {

    const paragraph = ["The Bachelor of Computer Science in High-Performance Computing (HPC) degree program focuses on teaching students how to harness supercomputers and advanced computing technologies to solve complex problems rapidly.B.C.Sc. (HPC) typically falls under the field of computer science or a closely related discipline. High-performance computing involves designing and utilizing powerful computing systems to solve complex problems and perform large-scale simulations.","B.C.Sc. (HPC) is designed to equip students with the knowledge and skills necessary to work with advanced computing systems and tackle computationally intensive tasks. This program covers a range of topics, including parallel computing, distributed systems, virtualization technology, numerical methods, and optimization techniques"]

    return (
      <>
        <div className="py-7 md:py-8" id="overview">
        <h3 className="capital mb-[20px] leading-7 text-2xl md:text-[32px] md:leading-9">Overview</h3>   
        {/* or marign 20px */}
        <div>
            {paragraph.map((item) => <><p className="mb-[12px] text-sm sm:text-base md:text-lg font-light leading-5 md:leading-[26px] text-left text-[#1c1d20b0]">{item}</p></>)}
        </div>

      </div>
      </>
      
    );
  
   
  }
  
  export default Overview;

//styleName: p - mobile;
// font-family: Oldschool Grotesk;
// font-size: 14px;
// line-height: 20px;