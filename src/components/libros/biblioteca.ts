type Autor = {
    nombre: string;
    nacionalidad: string;
  };
  
  type Libro = {
    titulo: string;
    anioPublicacion: number;
    genero: string;
    disponible: boolean;
    autor: Autor;
  };
  
  const biblioteca: Libro[] = [
    {
      titulo: "Cien años de soledad",
      anioPublicacion: 1967,
      genero: "Novela",
      disponible: true,
      autor: {
        nombre: "Gabriel García Márquez",
        nacionalidad: "Colombiano"
      }
    },
    {
      titulo: "Don Quijote de la Mancha",
      anioPublicacion: 1605,
      genero: "Novela",
      disponible: false,
      autor: {
        nombre: "Miguel de Cervantes",
        nacionalidad: "Español"
      }
    },
    {
      titulo: "Orgullo y prejuicio",
      anioPublicacion: 1813,
      genero: "Romance",
      disponible: true,
      autor: {
        nombre: "Jane Austen",
        nacionalidad: "Británica"
      }
    }
  ];
  
  export default biblioteca;
  