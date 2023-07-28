import '../styles/Container.css'



export const Container=(props)=>{
const data=props.data
// console.log(data)

    return (
        <>
        <div id="container">
            
        {data.map((obj)=>{
            return(
                <div key={obj.id}>
                    <img src={obj.img}></img>
                     <p>{obj.name}<br/>{obj.description}</p>
                     <p></p>
                </div>
            )
        })}
        </div>
        </>
    )
}