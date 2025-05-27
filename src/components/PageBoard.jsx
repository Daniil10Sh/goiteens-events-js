import Data from "../upcoming-events.json"
import Event from "./Events"

export default function PageBoard({events = Data}){
    return(
        <>
        <h1>hi</h1>

        {events.map((event, index) => (
            <Event key={index} name={event.name}></Event>
        ))}
        
        </>
    )
}