import React, { useState } from 'react'

const UseState = () => {
  const [error, setError] = useState(true)
  return (
    <>
      <h2>Eliminar ClassState</h2>
      {error && <> twm</>}
      <p>Por favor, escribe el code de seguridad</p>
      <input placeholder='Codigo de seguridad' />
      <button onClick={()=>{setError(!error)}}>Try</button>
    </>
  )
}

export { UseState }; 