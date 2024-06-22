import connection from "../database/connection.js";

export let mostrarTodosProductos = (req, res) => {
    console.log("Accediendo a la ruta /celulares");
    connection.query("SELECT * FROM Celulares")
    .then((data) => {
        console.log("Estos son los celulares: ", data[0]);
        res.status(200).json(data[0]);
    })
    .catch((error) => {
        console.error("Ha ocurrido un error durante la obtención de los celulares: ", error);
        res.status(500).json({
            mensaje: "Ha ocurrido un error durante la obtención de los celulares"
        });
    });
};

export let mostrarCelularesMarca = (req, res) => {
    console.log("Accediendo a la ruta /celulares/marca");
    const { marca } = req.params;

    if (!marca) {
        return res.status(400).json({
            mensaje: "Debe proporcionar una marca para filtrar los celulares"
        });
    }

    connection.query("SELECT * FROM Celulares WHERE Marca_Celular = ?", [marca])
    .then((data) => {
        console.log(`Estos son los celulares de la marca ${marca}: `, data[0]);
        res.status(200).json(data[0]);
    })
    .catch((error) => {
        console.error(`No se pudieron obtener los celulares de la marca ${marca}, por el error: `, error);
        res.status(500).json({
            mensaje: `No se pudieron obtener los celulares de la marca ${marca}`
        });
    });
};





export let cel = (req, res) => {
    console.log("Accediendo a la ruta /celulares");
    connection.query("SELECT Modelo_Celular, Marca_Celular FROM Celulares")
    .then((data) => {
        console.log("Estos son los celulares: ", data[0]);
        res.status(200).json(data[0]);
    })
    .catch((error) => {
        console.error("Ha ocurrido un error durante la obtención de los celulares: ", error);
        res.status(500).json({
            mensaje: "Ha ocurrido un error durante la obtención de los celulares"
        });
    });
};