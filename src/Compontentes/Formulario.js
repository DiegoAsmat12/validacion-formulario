import React, { useReducer } from "react";

const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    }
};

const reducer = (state,action) => {
    return {
        ...state,
        [action.type]:action.payload
    };
}

const Formulario = (props) =>{
    const [state, dispatch] = useReducer(reducer,initialState)


    const onSubmitForm = (e) =>{
        e.preventDefault();
        if(!state.firstName.error && !state.lastName.error && !state.lastName.error) return;
    }

    const onChange = (e,validationRegex) =>{
        const {name,value} = e.target;
        let error = null;
        if(validationRegex){
            if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) error="Email no reconocido"
            else error=null;
        }
        dispatch({
            type:name,
            payload:{
                value:value,
                error:error
            }
        })
    }

    return (
        <div>
            <div>
                <label htmlFor="firstName">First Name: </label>
                <input type="text" name="firstName" id="firstName" value={state.firstName.value} onChange={(e)=>{
                    onChange(e)
                }}/>
                {state.firstName.error !== null && (
                    <p className="error">{state.firstName.error}</p>
                )}
            </div>
            <div>
                <label htmlFor="lastName">First Name: </label>
                <input type="text" name="lastName" id="lastName" value={state.lastName.value} onChange={(e)=>{
                    onChange(e)
                }}/>
                {state.lastName.error !== null && (
                    <p className="error">{state.lastName.error}</p>
                )}
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" id="email" value={state.email.value} onChange={(e)=>{
                    onChange(e,true)
                }}/>
                {state.email.error !== null && (
                    <p className="error">{state.email.error}</p>
                )}
            </div>
            <button>Submit</button>
        </div>
    )

}

export default Formulario;