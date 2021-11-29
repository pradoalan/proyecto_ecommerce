export const productos = [
    {id:1, nombre:"Dildo", descripcion:"Dildo de silicona", stock:3, precio:500, categoria:"dildo", imagen:"https://www.lenceriamericana.com/98847-large_default/consolador-de-aspecto-y-tacto-real-de-21-cm-en-silicona-medica-con-ventosa.jpg"},
    {id:2, nombre:"Anillo", descripcion:"Anillo vibrador para parejas", stock:5, precio:300, categoria:"parejas", imagen:"https://image.made-in-china.com/202f0j10qoFpbgItJQrZ/Double-Ring-Vibration-for-Couples-Sex-Toy-Waterproof-Vibratior.jpg"},
    {id:3, nombre:"Gel", descripcion:"Gel intimo", stock:2, precio:100, categoria:"gel", imagen:"https://boomshell.com.ar/wp-content/uploads/2021/10/Gel-intimo-ST-Neutro-Natural-60cc.jpg"}
]

export const getFetch = new Promise((resolve, reject)=>{
    const condition=true
    if (condition) {
        setTimeout(()=>{
            resolve(productos)
        },2000)
    }
    else{
        setTimeout(()=>{
            reject("404 error, not found")
        },2000)
    }
})
