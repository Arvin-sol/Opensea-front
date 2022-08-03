import './navbarStyle.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import opensea from './opensea.svg'
import {FaSearch} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'
import {AiOutlineWallet} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import NavbarWallet from '../navbarWallet/navbarWallet';
import { useState } from 'react';


const Navbar = ()=>{
    const displayNone = {
        display:'none'
    }
    const displayBlock = {
        display:'block' 
    }
    const [Visible , SetVisible] = useState(displayNone)

    return(
        <nav className='nav--bar w-100'>
            <ul className='d-flex align-items-center gap-3 pt-2 mb-0'>                
                <li >
                    <Link to="/" className='w-10 d-flex align-items-center gap-1 pe-4'>
                        <img className='nav--img' src={opensea} alt='logo'/>
                        <h4 className='text-white pt-1'>OpenSea</h4> 
                    </Link>
                </li>

                <li class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1"><FaSearch/></span>
                    <input type="search" 
                    class="form-control search--input fs-5 text-white" 
                    placeholder="Search items,collection,and accounts" 
                    aria-label="Username" 
                    aria-describedby="basic-addon1"/>
                </li>
                <li>
                    <Link to="NFT" className='text-secondary'>
                        <h5>NFTs</h5>
                    </Link>
                </li>
                <li>
                    <h5 className='text-secondary'>State</h5>
                </li>
                <li>
                    <h5 className='text-secondary'>Resources</h5>                     
                </li>
                <li >
                    <Link to='Create'>
                        <h5 className='text-secondary'>Create</h5>     
                    </Link>
                </li>
                <li>
                    <Link to="Profile" >  
                        <h3 className='text-secondary'><CgProfile/></h3>
                    </Link>                    
                </li>
                <li >
                    <button onClick={()=>SetVisible(displayBlock)}
                    aria-controls='wallet-list' aria-expanded='false' 
                    className='text-secondary me-4 wallet--btn p-0 fs-3 mb-2' 
                    >
                        <AiOutlineWallet/>
                    </button>                       
                </li>
            </ul>
            <NavbarWallet 
                visable={Visible}
                closeVisable={()=>SetVisible(displayNone)}
            />
        </nav>
    )
}
export default Navbar