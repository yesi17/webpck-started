
import '../css/componentes.css';
// import webpaklogo from '../assets/img/webpack-logo.png'

export const saludar=(nombre) =>{
    console.log('creando etiqueta h1 ');

    const h1 =document.createElement('h1');
    h1.innerText=`Hola,${nombre}!!!!!!!!!!!!!!!!!`;

    document.body.append(h1);

    // console.log(webpaklogo);
    // const img = document.createElement('img');
    // img.src = webpaklogo;
    // document.body.append(img);
}