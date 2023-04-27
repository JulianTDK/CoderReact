let productos = [
    { id: 1, src: "./src/componets/acdc/imagen1.jpg", alt: 'imagen1', title: '74\'Jailbreak', description: '1974', price: 10, category: "1" },
    { id: 2, src: "./src/componets/acdc/imagen2.jpg", alt: 'imagen2', title: 'High Voltage', description: '1975', price: 15, category: "1" },
    { id: 3, src: "./src/componets/acdc/imagen3.jpg", alt: 'imagen3', title: 'Dirty Deeds Done Dirt Cheap', description: '1976', price: 20, category: "2" },
    { id: 4, src: "./src/componets/acdc/imagen4.jpg", alt: 'imagen4', title: 'Let There Be Rock', description: '1977', price: 25, category: "2" }
] 



export const mFetch = (id) =>{
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res(!id ? productos : productos.find(producto => producto.id === id)) 
        }, 1000)
    }) 
}
