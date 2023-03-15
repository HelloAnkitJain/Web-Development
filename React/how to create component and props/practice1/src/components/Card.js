import './Card.css';

function Card(props){
    const temp = 'card ' + props.className;
    const customProp = props.customProp;
    const proper = props.patola;
    return(
        <div>
        <div className={temp}>Ankit</div>
        <h1 className='flop'>
            {customProp}
        </h1>
        <h1>
            {proper}
        </h1>
        </div>
    )
};

export default Card;