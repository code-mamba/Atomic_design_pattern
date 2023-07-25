import React from "react";
import { SelectProps } from "./type";

const Select: React.FC<SelectProps> =(props) =>{
	return(
		<select id={props.id} value={props.value} onChange={props.onChange} >
			{props.options.map((option)=>(<option key={option.value} value={option.value}>{option.label}</option>))}
		</select>
		
	)
}
export default Select