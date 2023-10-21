import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import TablaHorario from './elementos/TablaHorario'

const Ejecutar = () =>{
    return (
        <>
            <div className='container'>
                <TablaHorario></TablaHorario>
            </div>
        </>
    );
}