import './NftCardsStyle.css'
import {FaEthereum} from 'react-icons/fa'
const NftCards = (props)=>{
    return(
        <div className='w-100 h-100 nftcard--container'>
            <img className='w-100 img--style' src={props.img}/>
            <div className='card--information'>
                <div className='d-flex mt-3 m-2 gap-3'>
                    <h5>{props.name}</h5>
                    <h5>#{props.id}</h5>
                </div>
                <div className='d-flex gap-2 ms-3'>
                    <h5>Price :</h5>
                    <p className=''>{props.price} <FaEthereum/></p>
                </div>
                <p className='ms-3'>blockchain: {props.blockchain}</p>                
                <p className='ms-3 pb-3 fs-7 dec'>{props.description}</p>
            </div>
        </div>
    )
} 
export default NftCards