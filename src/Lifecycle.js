//? Juan Gallardo 16-03-2022
import React, { useState, useEffect } from 'react';

console.log('Pre-render');

const Lifecycle = () => {
    console.log('Logic render')
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);


    //? UseEffect  -> Puede recibir dos parametros, la funcion a ejecutar (Obligatoria), y un arreglo (Opcional) con las dependencias

    // useEffect(() => {
    //     //* Se ejecuta cada vez que cargue o que cambie un estado de un componente
    //     console.log ('useEffect no dependency');
    // });
    
    useEffect(() => {
        console.log('useEffect []');
        return () => {
            console.log('cleanup useEffect []')
        }
    }, [])

    // useEffect(() => {
    //     //* Se ejecuta al cargar por primera vez
    //     console.log('useEffect []');
    // }, []);

    useEffect(() => {
        console.log('useEffect no dependency');
        return () => {
            console.log('cleanup useEffect no dependency');
        }
    })

    // useEffect(() => {
    //     //* Se ejecuta al cargar por primera vez y al suceder un cambio en su respectiva dependencia, en este caso, counter1
    //     console.log('useEffect [counter1]')
    // }, [counter1]);

    useEffect(() => {
        console.log('useEffect [counter1]');
        return () => {
            console.log('cleanup useEffect [counter1]');
        }
    }, [counter1]);

    // useEffect(() => {
    //     console.log('useEffect [counter1, counter2]')
    // }, [counter1, counter2]);

    useEffect(() => {
        console.log('useEffect [counter1, counter2]');
        return () => {
            console.log('cleanup useEffect [counter1, counter2]');
        }
    }, [counter1, counter2]);

  return (
    <div>
        { console.log('return render') }
        <h1>Clicks c1: {counter1}</h1>
        <h1>Clicks c2: {counter2}</h1>
        <button onClick={() => setCounter1(counter1+1)}>
            Increment c1
        </button>
        <button onClick={() => setCounter2(counter2+1)}>
            Increment c2
        </button>
    </div>
  )
}

export default Lifecycle