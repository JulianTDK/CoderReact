import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import ItemDetail from './ItemDetail'

export default function ItemDetailContainer() {
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true)
    const { pid } = useParams()
    
    useEffect(()=>{
        const queryDb = getFirestore();
        const queryDoc = doc(queryDb, 'productos', pid);
        getDoc(queryDoc)
        .then(res=>setProducto({id: res.id, ...res.data()}))
        .finally(()=>{
            setLoading(false)
        })
        },[pid])
  

    return (
        <>
            {loading || !producto.title
            ?   <div className='detail__warning'>
                <h1>
                    Cargando...
                </h1>

                </div>
            :   <ItemDetail producto={producto} />
            }
        </>
    )
}
