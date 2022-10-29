import './testimonial.css'



function Testimonial({img, name, stars, text}){    //declarado de las variables props (tipo objetos)---ojo con el declarado de los argumentos lleva {}
    return(
        <div className="testimonial__container">
            <div className="testimonial__profile"> 
                <img className="testimonial__photo" src={img} alt="Photo Profile"></img>
                <h2 className="testimonial__name">{name}</h2>
            </div>
            <div className="testimonial__content">
                <p className="testimonial__rating">{stars}</p>
                <p className="testimonial__text">{text}</p>
            </div>
        </div>
    )
}

export default Testimonial;

//function return retorna un componente...
//solo se puede poner en el codigo un DIV (pero dentro del div se pueden poner todos los divs que se requieran)
//osea un solo div por componente