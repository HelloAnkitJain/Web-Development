import Card from './Card'
// function Tours({tours, removeTour,customprop}) {
function Tours(props) {
    let arr = props.tours
    return (
        <div className='container'>
            <div>
                <h2 className='title'> Plan With Love</h2>
                <h2>{props.customprop}</h2>

            </div>
            <div className='cards'>
                {
                    arr.map( (tour) => {
                        return <Card key={tour.id} {...tour} removeTour={props.removeTour}></Card>
                    } )
                }
            </div>
        </div>
    );
}

export default Tours;