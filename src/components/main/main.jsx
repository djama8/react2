import './main.css';
import './jj.jpg';

function Main ({img, text, button}) {
    return (
    <main>

        <img src={img} alt="" />
       <h2>{text}</h2>
       <button>{button}</button>

    </main> );
}

export default Main ;