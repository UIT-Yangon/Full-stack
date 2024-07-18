import icon1 from './../Images/MonthlyPrice.svg';
import icon2 from './../Images/availableRoom.svg';
import icon3 from './../Images/roomIcon.svg';
import icon4 from './../Images/totalRoom.svg';

const data = [
    {img: icon1,title: 'Monthly Price',value: '10000 MMK'},
    {img: icon3,title: 'Room Type',value: 'Twin'},
    {img: icon4,title: 'Total Rooms',value: '400+'},
    {img: icon2,title: 'Available Rooms',value: '30+'},
]

export default function HostelInfo(){
    return(
        <div>
            <h3 className="xl:text-[64px] text-[35px] text-[#3798a6]">Hostel Info</h3>
            <div className="grid grid-cols-4 items-center justify-center">
                {data.map((item,index) => (
                <div key={index} className="flex flex-col items-center w-[288px] h-[377px] justify-around">
                    <div className='h-[200px] flex justify-center items-center'><img src={item.img} alt=''  /></div>
                    <div className='flex flex-col items-center'>
                        <h4 className='text-[#3798a6] text-[32px]'>{item.title}</h4>
                        <h4 className='text-[#1c1d20] opacity-50 text-[32px]'>{item.value}</h4>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}