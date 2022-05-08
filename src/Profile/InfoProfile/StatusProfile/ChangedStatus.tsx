import React, {ChangeEvent, useState} from 'react';

type ChangedStatusType = {
    changeHandler:(title:string)=>void
    activeBlur:()=>void
    status:string
}

export const ChangedStatus:React.FC<ChangedStatusType> = (props) => {
    const [change, setChange] = useState<boolean>(false)
    const activateStatusHandler = ()=>{
        setChange(true)
    }
    const changeHandler = (e:ChangeEvent<HTMLInputElement>) =>{
        props.changeHandler(e.currentTarget.value)
    }

    const activeBlur = () =>{
        setChange(false)
        props.activeBlur()
    }
    return (
        <div>
            {change ?
                <input value={props.status} autoFocus onChange={changeHandler} onBlur={activeBlur}/>
                :
                <p onClick={activateStatusHandler}>{props.status}</p>
            }
        </div>
    );
};
