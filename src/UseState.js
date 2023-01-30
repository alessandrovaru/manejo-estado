import React, { useEffect, useState } from 'react'

const SECURITY_CODE = '123xxx'

const UseState = () => {
  const [value, setValue] = useState('second')
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('Starting the effect');
    if (loading) {
      setError(false);
      setTimeout(() => {
        console.log('Doing the validation');
        if (value === SECURITY_CODE) {
          setLoading(false);
          
        } else {
          setLoading(false);
          setError(true);
        }
        
        console.log('Validated')
      }, 3000);
    }
    console.log('End of effect');
  }, [loading])

  
  return (
    <>
      <h2>Eliminar ClassState</h2>
      {error && <> No coincide</>}
      {loading && <> Cargando...</>}
      <p>Por favor, escribe el code de seguridad</p>
      <input 
        placeholder='Codigo de seguridad' 
        value={value} 
        onChange={(event)=>{
          setValue(event.target.value);
        }} 
      />
      <button onClick={()=>{setLoading(true)}}>Try</button>
    </>
  )
}

export { UseState }; 