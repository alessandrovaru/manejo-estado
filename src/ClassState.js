import React from 'react'

class ClassState extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      error: true,
    }
  }
 render(){
  return (
    <>
      <h2>Eliminar ClassState</h2>
      <p>Por favor, escribe el code de seguridad</p>
      {this.state.error && <> twm</>}
      <input placeholder='Codigo de seguridad' />
      <button onClick={()=> this.setState({error: !this.state.error})}>Prueba</button>
    </>
  )
 }
}

export { ClassState }