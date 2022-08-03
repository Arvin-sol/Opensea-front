import BlueButton from '../../components/buttons/BlueBtn/BlueButton'
import WhiteButton from '../../components/buttons/GrayBtn/WhiteButton'
import Card from '../../components/card/card'
import './HomePageStyle.css'
import {AiFillPlayCircle} from'react-icons/ai'
import {Link} from 'react-router-dom'
const HomePage = ()=>{

    return(
        <div className="homepage--container w-100 h-100 position-relative">
            <div className='div-1 w-100 h-100'>
                <div className='div-1-cover h-100 d-flex justify-content-around pt-5'>
                    <div className=' div--items'>
                        <h1 className='fw-bold text-white'>Discover,collect,and sell extraordinary NFTs</h1>
                        <p className='fs-5 pt-2 text-white'>OpenSea is the word's first and<br/> largest NFT marketplace</p>
                        <div className='d-flex justify-content-between w-75 pt-4'>
                            <BlueButton
                                name={'Explore'}
                                left={'60px'}
                                right={'60px'}
                                top={'15px'}
                                bottom={'15px'}
                            />
                            <Link to="Creact">
                                <WhiteButton name={'Create'}/>                            
                            </Link>

                        </div>
                        <div className='mt-5'>
                            <a className='fs-5' href='#'>
                                <AiFillPlayCircle/>
                                Learn more about OpenSea
                            </a>
                        </div>
                    </div>

                    <div className='card--div'>
                        <Card/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomePage