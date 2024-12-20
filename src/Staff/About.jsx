import Head from './Layout/Head';
    
function About({data}) {


  return (
    <div className="pb-8">
        <Head heading={data.title} />
        <p className="lg:text-lg text-sm font-[350px] leading-[21px] lg:leading-[27px] opacity-80 lg:pb-0 pb-5">
        {data.body}

        </p>
    </div>
  );

 
}



export default About;







