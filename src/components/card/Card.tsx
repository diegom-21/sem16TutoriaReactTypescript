interface CardProps {
    titulo: string;
    anioPublicacion: number;
    genero: string;
    disponible: boolean;
    autor: {
        nombre: string;
        nacionalidad: string;
    };
}

export const Card = ({ titulo, anioPublicacion, genero, disponible, autor }: CardProps) => {
    return (
        <div className="card">
            <div className="card-header">
                <h2 className="card-title">{titulo}</h2>
            </div>
            <div className="card-body">
                <p><strong>Año de Publicación:</strong> {anioPublicacion}</p>
                <p><strong>Género:</strong> {genero}</p>
                <p><strong>Disponible:</strong> {disponible ? 'Sí' : 'No'}</p>
                <p><strong>Autor:</strong> {autor.nombre} ({autor.nacionalidad})</p>
            </div>
        </div>
    );
};