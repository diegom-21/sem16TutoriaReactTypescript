import biblioteca from './biblioteca';
import { Card } from '../card/Card';

export const Library = () => {
    return (
        <div className="biblioteca">
            {biblioteca.map((libro, index) => (
                <Card
                    key={index}
                    titulo={libro.titulo}
                    anioPublicacion={libro.anioPublicacion}
                    genero={libro.genero}
                    disponible={libro.disponible}
                    autor={libro.autor}
                />
            ))}
        </div>
    );
};