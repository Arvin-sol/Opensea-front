import './BlueButtonStyle.css'
const BlueButton = (props)=>{
    const blueStyle={
        paddingLeft:props.left,
        paddingRight:props.right,
        paddingTop:props.top,
        paddingBottom:props.bottom,
    };
    return(
        <button className="blue--btn" style={blueStyle}>{props.name}</button>
    )
}
export default BlueButton