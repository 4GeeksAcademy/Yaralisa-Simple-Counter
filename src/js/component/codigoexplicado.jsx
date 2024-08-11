// Importamos React y los hooks useState y useEffect desde la librería de React
import React, { useState, useEffect } from "react";

// Definimos el componente funcional SimpleCounter
const SimpleCounter = () => {
  // Declaramos un estado llamado 'segundos' y una función para actualizarlo 'setSegundos'
  // Inicializamos 'segundos' en 0
  const [segundos, setSegundos] = useState(0);

  // Convertimos el número de segundos a una cadena y luego a un array de dígitos
  const digits = segundos.toString().split("");

  // Utilizamos el hook useEffect para ejecutar código después de que el componente se haya renderizado
  useEffect(() => {
    // Creamos un intervalo que incrementa el estado 'segundos' en 1 cada segundo (1000 ms)
    const interval = setInterval(() => {
      setSegundos((prev) => prev + 1);
    }, 1000);

    // Retornamos una función de limpieza que se ejecutará cuando el componente se desmonte
    // Esto limpia el intervalo para evitar fugas de memoria
    return () => clearInterval(interval);
  }, []); // El array vacío [] asegura que este efecto solo se ejecute una vez, después del primer renderizado

  // Renderizamos el componente
  return (
    <>
      {/* Mapeamos cada dígito del array 'digits' a un div */}
      {digits.map((digit, index) => (
        <div key={index}>{digit}</div>
      ))}
    </>
  );
};

// Exportamos el componente para que pueda ser utilizado en otros archivos
export default SimpleCounter;