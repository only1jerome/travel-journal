import Place from "./place";
import traveldata from "./traveldata";
export default function MainComponent(){
    const data = traveldata.map(item=>{
        return(
            <Place
                key={item.id}
                {...item}
            />
        )
    })
    return(
        <div>
            {data}
        </div>    
    )
}