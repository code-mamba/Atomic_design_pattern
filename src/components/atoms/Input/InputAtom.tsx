import React from "react";
import { InputAtomProps } from "./type";

const InputAtom:React.FC<InputAtomProps> =({type,value,onChange,name,placeholder}):JSX.Element=>{
	return(<input type={type} value={value} onChange={onChange} name={name} placeholder={placeholder}></input>)
}

export default InputAtom