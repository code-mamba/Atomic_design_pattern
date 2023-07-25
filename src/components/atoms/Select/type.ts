import React from "react"

export interface SelectProps{
	id: string,
	value: string,
	options:{value:string,label:string}[]
	onChange:(event:React.ChangeEvent<HTMLSelectElement>)=>void
}