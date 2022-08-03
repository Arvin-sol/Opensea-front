import BlueButton from "../buttons/BlueBtn/BlueButton"
import './cardStyle.css'
import monkai from './monkai.gif'
import logo from './logo.png'
const Card = ()=>{
    return(
        <div className="card w-100">
            <img className="img" src={monkai}/>
            <div className="d-flex mb-3 align-items-center items">
                <div className="p-2">
                    <img className="profile--img" src={logo}/>
                </div>
                <div className="p-2 d-flex flex-column mt-2 text-white fw-bold">
                    <p>Monkai <br/>
                        <a href="https://opensea.io/collection/zoonies/mint">
                            by Monkai
                        </a>
                    </p> 
                </div>
                <div className="ms-auto p-2">
                    <BlueButton name={'Mint now'}
                        left={'20px'}
                        right={'20px'}
                        top={'8px'}
                        bottom={'8px'}
                    />
                </div>
            </div>
        </div>
    )
}
export default Card