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

  const onConfirm = () => {
    setState({ 
      error: false, 
      loading: false,
      confirmed: true,
    });
  }

  const onError = () => {
    setState({ 
      error: true, 
      loading: false 
    });
  };

  const onWrite = (newValue) => {
    setState({ 
      value: newValue 
    });
  }

  const onCheck = () => {
    setState({ 
      ...state, 
      loading: true 
    });
  }

  const onDelete = () => {
    setState({
      ...state, 
      deleted: true
    });
  }

  const onReset = () => {
    setState({
      ...state, 
      confirmed: false,
      deleted: false,
      value: '',
    });
  }

  React.useEffect(() => {
    console.log("Empezando el efecto")
    if (!!state.loading) {
      setTimeout(() => {
        console.log("Haciendo la validación")
  
        if (SECURITY_CODE === state.value) {
          onConfirm();
        } else {
          onError();
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
            onWrite(event.target.value);
          }}
        />
        <button
          onClick={() => onCheck()}
        >Comprobar</button>
      </div>
    );
  } else if (!!state.confirmed && !state.deleted) {
    return (
      <>
        <p>We ask for a confirmation, are you sure?</p>
        <button 
          onClick={() => {
            onDelete();
          }}
        >Yeah</button>
        <button 
          onClick={() => {
            onReset();
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
            onReset();
          }}
        >Reset</button>
      </>
    )
  }
}



export { UseState };