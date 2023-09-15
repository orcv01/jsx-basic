import './Header.css'

let x_hora = 20;
let x_text = " ";

const Header = () => {
     
    if (x_hora > 0 && x_hora <= 12) {
        x_text = "Buenos días";
    } else if (x_hora > 12 && x_hora <= 18){
        x_text = "Buenas tardes";
    } else {
        x_text = "Buenas noches"
    }
    ;

return (
    <header className="header">
        <h1>Son las {x_hora} horas. {x_text}</h1>
    </header>
    );
};

export default Header;
