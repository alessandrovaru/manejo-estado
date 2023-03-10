import React from 'react';
import { Loading } from './Loading';

const SECURITY_CODE = 'paradigma';

class ClassState extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      value: '',
      error: false,
      loading: false,
      deleted: false,
      confirmed: false
    };
  }

  // componentWillMount() {
  // UNSAFE_componentWillMount() {
  //   console.log("componentWillMount")
  // }
  
  // componentDidMount() {
  //   console.log("componentDidMount")
  // }

  componentDidUpdate() {
    console.log('actualizacion');

    if (!!this.state.loading) {
      setTimeout(() => {
        console.log("Haciendo la validación")
  
        if (SECURITY_CODE === this.state.value) {
          this.setState({ 
            error: false, 
            loading: false,
            confirmed: true,
          });
        } else {
          this.setState({ error: true, loading: false });
        }
        
        console.log("terminando la validación")
      }, 3000);
    }
  }
  
  render() {
    if (!this.state.deleted && !this.state.confirmed) {
      return (
        <div>
          <h2>Eliminar {this.props.name}</h2>
          
          <p>Por favor, escribe el código de seguridad.</p>
  
          {(this.state.error && !this.state.loading) && (
            <p>Error: el código es incorrecto</p>
          )}
  
          {this.state.loading && (
            <Loading />
          )}
  
          <input
            placeholder="Código de seguridad"
            value={this.state.value}
            onChange={(event) => {
              this.setState({ value: event.target.value });
            }}
          />
          <button
            onClick={() => this.setState({ ...this.state, loading: true })}
          >Comprobar</button>
        </div>
      );
    } else if (!!this.state.confirmed && !this.state.deleted) {
      return (
        <>
          <p>We ask for a confirmation, are you sure?</p>
          <button 
            onClick={() => {
              this.setState({
                ...this.state, 
                deleted: true
              });
            }}
          >Yeah</button>
          <button 
            onClick={() => {
              this.setState({
                ...this.state, 
                confirmed: false,
                value: '',
              });
            }}
          >Nope</button>
        </>
      )
    } else {
      return(
        <>
          <p>eliminado con exito</p>
          <button 
            onClick={() => {
              this.setState({
                ...this.state, 
                confirmed: false,
                deleted: false,
                value: '',
              });
            }}
          >Reset</button>
        </>
      )
    }
  }
}

export { ClassState };