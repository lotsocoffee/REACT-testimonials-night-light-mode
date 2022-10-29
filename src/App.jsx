// import { Fragment } from 'react';
import { useState } from 'react';

import './App.css';
import Testimonial from './components/testimonial';
import daniel from './imgs/image-daniel.jpg';
import jeanette from './imgs/image-jeanette.jpg';
import patrick from './imgs/image-patrick.jpg';
import Button from './components/Button';


// //osea function App es el componente App

// function App() {
//     return(
//         <h2 className="title">Componente</h2>  //mientras este triangulado todo se puede modificar in real time
//     )
// }

function App() {
   
    const [theme, setTheme] = useState('light');
    
    function onClickFn(){
        if(theme == 'light'){
            setTheme('dark')
        }else{    
            setTheme('light')
        }
    }

    return(
        <div className={'container ' + theme}>     
        {                                      /* NOTECE QUE LLEVA UN ESPACIO PARA PODER QUE CUENTE COMO DOS CLASES */}
            <Button
                onClickFn = {onClickFn}
                value = {theme == 'dark' ? 'light' : 'dark'} 
            />
            <Testimonial
                img={daniel}
                name= "Raniel Lopez"
                stars="⭐⭐"
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi velit, sequi deleniti placeat voluptas temporibus perspiciatis praesentium ipsum cupiditate facere facilis nam optio! Necessitatibus, molestiae vel optio natus expedita maiores."                
            />
            <Testimonial
                img={jeanette}
                name= "Mary-jean"
                stars="⭐⭐⭐"
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi velit, sequi deleniti placeat voluptas temporibus perspiciatis praesentium ipsum cupiditate facere facilis nam optio! Necessitatibus, molestiae vel optio natus expedita maiores."                
            />
            <Testimonial
                img={patrick}
                name= "Patrik Staaar"
                stars="⭐⭐⭐⭐⭐"
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi velit, sequi deleniti placeat voluptas temporibus perspiciatis praesentium ipsum cupiditate facere facilis nam optio! Necessitatibus, molestiae vel optio natus expedita maiores."                    
            />
        </div>
         
    )
}

//elementos jsx = js+xml xml es una forma de escribir etiquetas (se pueden personalizar las etiquetas...)
// por eso se puede poner App en la etiqueta en ves de poner la etiqueta del elemento en vez de el html
export default App;