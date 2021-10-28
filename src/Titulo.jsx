
export const Titulo = ({nombre, apellido, mostrar}) => {
    mostrar()

    return (
        <>
            <h2>{nombre}</h2>
            <p>{apellido}</p>
        </>
    )
}


