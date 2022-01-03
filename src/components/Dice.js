export default function Dice(props) {
    return (
        <div className={`dice ${props.isHeld ? "held" : ""}`} onClick={() => props.hold(props.id)}>
            <span className="die-num">{props.value}</span>
        </div>
    )    
};
