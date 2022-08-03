import metamask from './metamask-fox.svg'
import {useWeb3React} from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector';
import {AiFillCloseCircle} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import { useState } from 'react';
import  toast,{Toaster} from 'react-hot-toast'

const NavbarWallet = (props)=>{

    //web3 hook for connect,account,disconnect and what blockchain our web3 support  
    const {active , account , library , connector , activate , deactivate} = useWeb3React()

    //The chain ID 1 if main ETH Blockchain and Chain ID 4 represents the Rinkeyby network
    //The injected connectotr is a web3 connection method used by Metamask    
    const injected = new InjectedConnector({
        supportedChainIds:[1,1337]
    })

    const [ether, setether] = useState(null)
   
    
    //alert when wallet disconnected
    const walletdisconnect = (address,toastHandler = toast)=>{
        toastHandler.error("Wallet disconnected")
    }
    //alet when wallet successfully connected
    const walletConnect = (address,toastHandler = toast)=>{
        toastHandler.success(
            `Your wallet successfully connected`,
        )
    }

    //connect wallet function 
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

    

    return(
    <div className='w-100 wallet h-1000' style={props.visable}>
        <ul className='text-white wallet--connect--list d-flex flex-column w-25 h-1000 p-0 gap-5' 
        id='wallet-list'>
            <li >
                <button className='close--btn fs-4' onClick={props.closeVisable}>
                    <AiFillCloseCircle/>
                </button>
            </li>                                  
            <li className='d-flex gap-1 wallet--header'>
                <CgProfile className='fs-3'/>
                <h5>My Wallet</h5>
            </li>
            {deactivate && <Toaster
                position="top-center"
                reverseOrder={false}
            />}

            {!active &&  
            <li className='metamask--btn d-flex gap-4 ms-2 ' onClick={connect}>
                <img src={metamask}/>
                <h5 className='fw-bold'>MetaMask</h5>
                <h5 className='metamask--btn--h5'>Connect</h5>
            </li>}              

            {active &&
            <div>
                <Toaster
                position="top-center"
                reverseOrder={false}/>

                <li className='wallet--funds w-100'>
                    <p className='wallet--address'>{account}</p>                        
                    <h5>{ether}ETH</h5>
                </li>
                <button onClick={disconnector} className='disconnect--btn w-100 mt-5'>Disconnect</button>                   
            </div>}
        </ul>                
    </div>   
    )
}
export default NavbarWallet