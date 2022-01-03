export default function Dice(props) {
    return (
        <div className={`dice ${props.isHeld ? "held" : ""}`}>
            <span className="die-num">{props.value}</span>
        </div>
    )    
};
