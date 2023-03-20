import './Card.css';




const Card = (props) => {
  const a = 'card ' + props.className;
  return <div className={a}> {props.children} </div>;
};

export default Card;