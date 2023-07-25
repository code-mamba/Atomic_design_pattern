import React,{ChangeEvent} from "react"

export interface TextInputWithLabelProps{
	label: string,
	type: string,
	onChange: (event:ChangeEvent<HTMLInputElement>)=>void
	value: string,
	name: string
	placeholder: string
}