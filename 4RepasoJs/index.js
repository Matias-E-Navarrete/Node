const alumnosDb = [{
        id: 1,
        nombre: "Matias E. Navarrete",
        idEscuela: 1,
        idCurso: 5
    },
    {
        id: 2,
        nombre: "Micaela E. Navarrete",
        idEscuela: 2,
        idCurso: 4
    },
    {
        id: 3,
        nombre: "María Ailin Nievas",
        idEscuela: 5,
        idCurso: 3
    },
    {
        id: 4,
        nombre: "Rocio Sofia Magdalena Zuñiga",
        idEscuela: 3,
        idCurso: 2
    },
    {
        id: 5,
        nombre: "Martin E. Navarrete",
        idEscuela: 2,
        idCurso: 2
    },
    {
        id: 6,
        nombre: "Rocío Maribel Nievas",
        idEscuela: 4,
        idCurso: 1
    },
];

const escuelaDb = [{
        id: 1,
        nombreEscuela: "San Vicente de Paul",
    },
    {
        id: 2,
        nombreEscuela: "Nuestra Señora de la Compasión",
    },
    {
        id: 3,
        nombreEscuela: "Intendente J. Kairuz",
    },
    {
        id: 4,
        nombreEscuela: "Instituto de Rodeo del Medio",
    },
    {
        id: 5,
        nombreEscuela: "María Auxiliadora",
    },
];

const cursoDb = [{
        id: 1,
        anio: "Primero"

    },
    {
        id: 2,
        anio: "Segundo"

    },
    {
        id: 3,
        anio: "Tercero"

    },
    {
        id: 4,
        anio: "Cuarto"

    },
    {
        id: 5,
        anio: "Quinto"

    },
]

async function getAlumnoById(id) {
    const alumno = alumnosDb.find((alumno) => alumno.id === id);
    if (!alumno) {
        const err = new Error();
        err.message = `No existe alumno con el id: ${id}`;
        throw err;
    }
    return alumno;
}

async function getEscuelaById(id) {
    const escuela = escuelaDb.find((escuela) => escuela.id === id);
    if (!escuela) {
        const err = new Error();
        err.message = `No existe escuela con el id: ${id}`;
        throw err;
    }
    return escuela;
}

async function main() {
    try {
        const alumno = await getAlumnoById(1);
        const escuela = await getEscuelaById(alumno.idEscuela);
        console.log(
            `El alumno ${alumno.nombre} va al colegio ${escuela.nombreEscuela}`
        );
    } catch (ex) {
        console.log(ex.message);
    }
}
main();