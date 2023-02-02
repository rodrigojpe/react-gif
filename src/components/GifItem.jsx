

export const GifItem = ({ title, id, url}) => {


    console.log('props', url);
    return (
        <div className="card">
            <img src={ url } alt={ title }/>   
            <p> { title } </p> 
        </div>
    )
}
