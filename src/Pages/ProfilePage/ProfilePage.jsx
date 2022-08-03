import { useWeb3React } from "@web3-react/core"
import { InjectedConnector } from "@web3-react/injected-connector"
import './ProfilePageStyle.css'
import {CgProfile} from 'react-icons/cg'
import { useState,useEffect } from "react"
import  toast,{Toaster} from 'react-hot-toast'
import NftCards from "../../components/NftCards/NftCards"
import axios from 'axios'


const ProfilePage =()=>{
    const {active , account , library , connector , activate , deactivate} = useWeb3React()

    const injected = new InjectedConnector({
        supportedChainIds:[1,1337]
    })


    //alert when wallet successfully connected
    const walletConnect = (address,toastHandler = toast)=>{
        toastHandler.success(
            `Your wallet successfully connected`,
        )
    }
    //alert when wallet disconnected
    const walletdisconnect = (address,toastHandler = toast)=>{
        toastHandler.error("Wallet disconnected")
    }

    //connect function 
    async function connect(){
        try{
            await activate(injected)
            walletConnect()
        }catch(err){
            console.log(err)
        }
    }
    //disconnect wallet function
    async function disconnector(){
        try{
            await deactivate()
            walletdisconnect()
        }catch(err){
            console.log(err);
        }
    }

    
    const displayNone = {
        display:'none'
    }
    const displayBlock = {
        display:'block'
    }


    const [collection , Setcollection] = useState(displayNone)
    const [walletBalace , SetwalletBalance] = useState(displayNone)
    const [NFts , SetNFts] = useState(displayNone)


    function NftActive(){
        SetNFts(displayBlock)
        Setcollection(displayNone)
        SetwalletBalance(displayNone)
    }
    function WalletBalaceActive(){
        SetNFts(displayNone)
        Setcollection(displayNone)
        SetwalletBalance(displayBlock)
    }    
    //get data base from json server with axios
    const [database , SetDatabase] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/posts')
        .then((data)=>{
            SetDatabase(data.data)
        }).catch((err)=>console.log(err))
    })

    return (
        <div className="w-100 profile--container">
            {!active &&  
            <div 
            className="connect--wallet w-100 h-100 d-flex align-items-center justify-content-center div--container">
                <button onClick={connect} className='connect--btn text-white fw-bold'>Connect Wallet</button>
                {deactivate && <Toaster
                position="top-center"
                 reverseOrder={false}
                />}                 
            </div>}

            {active && 
            <div className="w-100 div--container d-flex align-items-center justify-content-center flex-column text-white position-relative">
                <Toaster
                position="top-center"
                reverseOrder={false}/>

                <button onClick={disconnector} className="text-white position-absolute disconnect--profile--btn">Disconnect</button>
   
                <div className="d-flex flex-column align-items-center">
                    <h1 className="fs-0"><CgProfile/></h1>
                    <p className="fs-4">{account}</p>
                </div>
                <ul class="nav nav-tabs w-75 ps-7">
                    <li class="nav-item" >
                        <button className="nav-link" onClick={WalletBalaceActive}>Wallet Balance</button>
                    </li>
                    <li class="nav-item">
                        <button className="nav-link" onClick={NftActive}>NFTs</button>
                    </li>
                </ul>

                <div className="tab-content w-75 pt-100">
                    <div style={walletBalace} >222222</div>

                    <div style={NFts} className='profile--nft pb-3'>
                        {active && <div className='w-100 h-100 ms-3 d-flex  gap-5 mt-4 d-flex flex-wrap'>
                            {database.map(item =>{
                                return(
                                    <div className=' ms-1 nft--card' key={`Nft List ${item.id}`}>
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
                </div>
            </div>}
        </div>
    )
}
export default ProfilePage