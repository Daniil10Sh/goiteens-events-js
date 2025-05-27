export default function Event({name, location, speaker,type,start,end}) {
    return (
        <div className="event-container">
            <h2 className="event-name">{name}</h2>
            <p className="event-location">Location: {location}</p>
            <p className="event-speaker">Speaker: {speaker}</p>
            <p className="event-type">Type: {type}</p>
            <p className="event-start">Start: {start}</p>
            <p className="event-end">End: {end}</p>
        </div>
    )

}