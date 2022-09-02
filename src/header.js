import globe from './img/globe.png'
export default function Header(){
    return(
        <div className='header'>
            <img src={globe}/>
            <p>my travel journal</p>
        </div>
    )
}