import React from "react";
import { submitProps } from "./type";
const Button: React.FC<submitProps> = ({onClick,text}) =>{

	return(
		<button onClick={onClick} >{text}</button>
	)
}
export default Button