import React, { useEffect, useState } from 'react'

const UseState = () => {
  const [error, setError] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('Starting the effect');
    if (loading) {
      setTimeout(() => {
        console.log('Doing the validation');
        setLoading(false);
        console.log('Validated')
      }, 3000);
    }
    console.log('End of effect');
  }, [loading])

  
  return (
    <>
      <h2>Eliminar ClassState</h2>
      {error && <> twm</>}
      {loading && <> Cargando...</>}
      <p>Por favor, escribe el code de seguridad</p>
      <input placeholder='Codigo de seguridad' />
      <button onClick={()=>{setLoading(true)}}>Try</button>
    </>
  )
}

export { UseState }; 