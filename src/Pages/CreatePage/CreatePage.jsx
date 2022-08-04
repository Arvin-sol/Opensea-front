import { useState , useEffect} from 'react'
import './CreactPageStyle.css'
import NftCards from '../../components/NftCards/NftCards'
import axios from 'axios'
import  toast,{Toaster} from 'react-hot-toast'

const displayNone = {
    display:'none'
}
const displayBlock = {
    display:'block'
}

const CreatePage = ()=>{

    const [createBtn , SetcreateBtn] = useState(displayNone)
    const [createBtnStyle , SetcreateBtnStyle] =useState(displayBlock)

    function Btn(){
        SetcreateBtn(displayBlock)
        SetcreateBtnStyle(displayNone)
    }

    const [input1 , Setinput1] = useState()
    const [input2 , Setinput2] = useState()
    const [input3 , Setinput3] = useState()
    const [input4 , Setinput4] = useState()
    const [input5 , Setinput5] = useState()
    const [input6 , Setinput6] = useState()

    function getInputData1(val){
        Setinput1(val.target.value)
    }
    function getInputData2(val){
        Setinput2(val.target.value)
    }    
    function getInputData3(val){
        Setinput3(val.target.value)
    }    
    function getInputData4(val){
        Setinput4(val.target.value)
    }    
    function getInputData5(val){
        Setinput5(val.target.value)
    }    
    function getInputData6(val){
        Setinput6(val.target.value)
    }

    const sumbit = (address,toastHandler = toast)=>{
        toastHandler.success(
            `your NFT sumbit`,
        )
    }

    function handleSumbit(){
        axios.post('https://opensea-server.herokuapp.com/posts',{
            Image:input1,
            Name:input2,
            Price:input3,
            number:input4,
            Blockchain:input5,
            Description:input6
        }).then(res => {
            console.log(res.data)
            sumbit()
            Setinput1('')
            Setinput2('')
            Setinput3('')
            Setinput4('') 
            Setinput5('')
            Setinput6('')
            }
            ).catch(err => console.log(err)
        )
    }
    return(
        <div className='create--container w-100 text-white'>
            <button 
            style={createBtnStyle} 
            className="create--btn text-white" 
            onClick={Btn}>
                Create NFt +
            </button>

            <Toaster
                position="top-center"
                reverseOrder={false}
            />

            <div style={createBtn} className='w-100'>
                <div className='w-100 d-flex'>
                    <div  className='d-flex flex-column align-items-center mt-5 gap-5 ms-5 pb-4 w-100'>

                        <div className='w-100'>
                            <h5>Image Link Address :</h5>
                            <input 
                            className='w-50 input--group' 
                            placeholder='........' 
                            type={'text'} 
                            onChange={getInputData1}/>                    
                        </div>

                        <div className='w-100'>
                            <h5>enter Name :</h5>
                            <input 
                            className='w-50 input--group' 
                            placeholder='........'  
                            type={'text'} 
                            onChange={getInputData2}/>
                        </div>

                        <div className='w-100'>
                            <h5>Price :</h5>
                            <input 
                            className='w-50 input--group' 
                            placeholder='........'   
                            type={'number'} 
                            onChange={getInputData3}/>
                        </div>

                        <div className='w-100'>
                            <h5>Number :</h5>
                            <input 
                            className='w-50 input--group'  
                            placeholder='........'  
                            type={'number'} 
                            onChange={getInputData4}/>
                        </div>

                        <div className='w-100'>
                            <h5>Blockchaine :</h5>
                            <input 
                            className=' input--group w-50' 
                            placeholder='........'  
                            type={'text'} 
                            onChange={getInputData5}/>
                        </div>

                        <div className='w-100'>
                            <h5>Description :</h5>
                            <input 
                            className='w-50 input--group' 
                            placeholder='.........'   
                            type={'tel'} 
                            onChange={getInputData6}/>
                        </div> 

                    </div>

                    <div className='w-100 h-50'>
                        <div className='w-75 mw-75'>
                            <NftCards 
                                img={input1}
                                name={input2}
                                id={input4}
                                price={input3}
                                description={input6}
                                blockchain={input5}
                            />           
                        </div>
                        <button onClick={handleSumbit} className='create--btn--sumbit w-75 text-white fw-bold fs-4 '>Create</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CreatePage