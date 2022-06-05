import pl from "../../assets/img/placeholder.png"
import secure from "../../assets/img/mula-secure.png"
import fast from "../../assets/img/mula-fast.png"
import {GiPayMoney} from "react-icons/gi"
import {RiSecurePaymentLine} from "react-icons/ri"
import {IoSpeedometer} from "react-icons/io5"
export const carouselData = [

    {
        id:1,
        icon: <GiPayMoney className='lg:text-5xl text-2xl text-white'/>,
        head:'LOW',
        title:"TRANSACTION FEES",
        subtitle:'Why pay 3%-8% when sending money across Africa when you can pay only 0.5% with MULA Wallet.',
        image:pl
    },
    {
        id:2,
        icon: <RiSecurePaymentLine className='lg:text-5xl text-2xl text-white'/>,
        head:'SECURE',
        title:"MOBILE TRANSACTIONS",
        subtitle:'With mula finance you are guaranteed top tier security, rooted on blockchain technology.',
        image:secure
    },
    {
        id:3,
        head:'SWIFT',
        icon: <IoSpeedometer className='lg:text-5xl text-2xl text-white'/>,
        title:"TRANSACTION DELIVERY",
        subtitle:'Why pay 3%-8% when sending money across Africa when you can pay only 0.5% with MULA Wallet.',
        image:fast
    },
    
]