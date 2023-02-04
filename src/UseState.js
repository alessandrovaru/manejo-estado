import React from 'react';
import { Loading } from './Loading';
const SECURITY_CODE = 'paradigma';

function UseState( props ) {
  const [state, setState] = React.useState({
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
  });

  console.log(state)

  React.useEffect(() => {
    console.log("Empezando el efecto")
    if (!!state.loading) {
      setTimeout(() => {
        console.log("Haciendo la validación")
  
        if (SECURITY_CODE === state.value) {
          setState({ 
            error: false, 
            loading: false,
            confirmed: true,
          });
        } else {
          setState({ error: true, loading: false });
        }
        
        console.log("terminando la validación")
      }, 3000);
    }
    console.log("Terminando el efecto")
  }, [state.loading]);
  
  if (!state.deleted && !state.confirmed) {
    return (
      <div>
        <h2>Eliminar {props.name}</h2>
        
        <p>Por favor, escribe el código de seguridad.</p>

        {(state.error && !state.loading) && (
          <p>Error: el código es incorrecto</p>
        )}

        {state.loading && (
          <Loading />
        )}

        <input
          placeholder="Código de seguridad"
          value={state.value}
          onChange={(event) => {
            setState({ value: event.target.value });
          }}
        />
        <button
          onClick={() => setState({ ...state, loading: true })}
        >Comprobar</button>
      </div>
    );
  } else if (!!state.confirmed && !state.deleted) {
    return (
      <>
        <p>We ask for a confirmation, are you sure?</p>
        <button 
          onClick={() => {
            setState({
              ...state, 
              deleted: true
            });
          }}
        >Yeah</button>
        <button 
          onClick={() => {
            setState({
              ...state, 
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
            setState({
              ...state, 
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



export { UseState };