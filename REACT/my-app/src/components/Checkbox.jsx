import React,{Fragment} from "react";

const Checkbox=props=>{
    const {
        onChange,
        data:{id,description,done}

    }=props;
    return( 
    <Fragment>
        <label className="todo new-item">
            <input 
                type="checkbox" 
                className="todo_state" 
                name={id} 
                defaultChecked={done} 
                onChange={onChange}
            />
        </label>
        <div className="todo_text">
            {description}
        </div>

    </Fragment>

    );
}

export default Checkbox;