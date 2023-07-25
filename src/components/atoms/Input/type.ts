import React,{ChangeEvent} from "react"

export interface InputAtomProps{
	type:string,
	value: string,
	name: string,
	placeholder: string,
	onChange: (event:ChangeEvent<HTMLInputElement>)=>void
}