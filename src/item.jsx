
const Item=(props)=>{
    const handleDeletItem=(e)=>{
        alert(e.target.innerHTML)
    }
    return(
        <div onClick={handleDeletItem}>
            {props.children}
        </div>

    )
}
export default Item;