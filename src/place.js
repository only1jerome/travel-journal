import locs from './img/locs.png'
export  default function Place(prop){
    return(
        <div className='details'>
            <span><img className='loc-img' src={prop.img}/></span>
            <span className='text'>
                <div>
                    <span><img className='loc-icon' src={locs}/></span>
                    <span>{prop.location}</span>
                    <span><a href={prop.mapLink} className='link' target='_blank'>View on map</a></span>
                </div>
                <div><h1>{prop.title}</h1></div>
                <div className='date'>
                    <span>{prop.startDate}</span>
                    <span> - </span>
                    <span>{prop.endDate}</span>
                </div>
                <div className='desc'>{prop.description}</div>
            </span>
        </div>
    )
}