import { useEffect } from 'react'
import { useState } from 'react'
import './NFTPage.css'
import axios from 'axios'
import NftCards from '../../components/NftCards/NftCards'
import { useWeb3React } from '@web3-react/core'
import {FaEthereum} from 'react-icons/fa'

const NFTPage = ()=>{

    const {active , account , library , connector , activate , deactivate} = useWeb3React()
    //get data base from json server with axios
    const [Database , SetDatabase] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/posts')
        .then((data)=>{
            SetDatabase(data.data)
        }).catch((err)=>console.log(err))
    })


    return(
        <div className="w-100 bg--container text-white">
            <div className='w-100 nftpage--header'>
                <div className='w-100 h-25 pt-7'>
                    <div className='header--items'>
                        <h1 className='ps-5'>Your created NFts</h1>
                        <div className='d-flex gap-5 mt-4 ps-5'>
                            <h4>total volume :  <FaEthereum/></h4>
                            <h4>items :{active && Database.length}</h4>
                            <h4>owner :   {account}</h4>
                        </div>                        
                    </div>

                </div>
            </div>

           {active && <div className='w-100 h-100 d-flex ps-5 gap-5 mt-4 flex-wrap'>
                {Database.map (item =>{
                    return(
                        <div className='w-25 ms-5 nft-card' key={`nftlist ${item.id}`}>
                            <NftCards
                                img={item.Image}
                                name={item.Name}
                                id={item.number}
                                price={item.Price}
                                description={item.Description}
                                blockchain={item.Blockchain}
                            />
                        </div>
                    )
                })}            
            </div>}
        </div>
    )
}
export default NFTPage