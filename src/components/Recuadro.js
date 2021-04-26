import '../styles.css';
import Ciguena from '../images/stork.gif';
import Nubes from '../images/nubes_layer.png';
import NubesBack from '../images/nubesback.png';
import RecuadroPNG from '../images/recuadro.png';
import CieloBackground from '../images/cielo_background.png';
import Heading from '../components/Heading'

function Recuadro() {
    return (
        <div className="recuadro">
            <img className="cielo-background" src={CieloBackground} alt="" />
            <img className="nubes-back" src={NubesBack} alt="" />
            <img className="ciguena" src={Ciguena} alt="" />
            <img className="nubes" src={Nubes} alt="" />
            {/* <div className="title-container">
                <h1 className="title">Bienvenida Maya</h1>
            </div> */}
            <div className="wrapper">
                <Heading text="Bienvenida Maya" arc={120} radius={400} />
            </div>
            <div className="wrapper-mobile"><h1>Bienvenida Maya</h1></div>
            
            <div className="te-queremos-wrapper"><p className="te-queremos">Te queremos...</p><span>❤️</span></div> 
            <div className="nombres">
                <p>Mati</p>
                <p>Asia</p>
                <p>Santi</p>
                <p>Blanca</p>
                <p>Simone</p>
                <p>Selene</p>
                <p>Pepo</p>
                <p>Katja</p>
                <p>Caterina</p>
                <p>Nathalia</p>
                <p>Sergio</p>
                <p>Ceci</p>
                <p>Almudena</p>
                <p>Conxi</p>
                <p>Gabrielle</p>
                <p>Monica</p>
                <p>Stefano</p>
                <p>Mahy</p>
                <p>Claire</p>
                <p>Nichel</p>
                <p>Hugo</p>
                <p>Emeline</p>
                <p>Lauri</p>
                <p>Cristina</p>
            </div>
            <img className="recuadro-png" src={RecuadroPNG} alt="" />
        </div>
    );
}

export default Recuadro;
