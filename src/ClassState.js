import React from 'react'

class ClassState extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      error: true,
      loading: false
    }
  }

  componentDidUpdate(){
    console.log('Starting the effect');
    if (this.state.loading) {
      setTimeout(() => {
        console.log('Doing the validation');
        this.setState({loading: false});
        console.log('Validated')
      }, 3000);
    }
  }
 render(){
  return (
    <>
      <h2>Eliminar ClassState</h2>
      <p>Por favor, escribe el code de seguridad</p>
      {this.state.error && <> twm</>}
      {this.state.loading && <>Cargando...</>}
      <input placeholder='Codigo de seguridad' />
      <button onClick={()=> this.setState({loading: true})}>Prueba</button>
    </>
  )
 }
}

export { ClassState }