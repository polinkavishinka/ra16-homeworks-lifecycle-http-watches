import React from "react"

interface IIform {
    title: string,
    zone: number,
    handlerInput: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handlerBTN: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const Form = ({title, zone, handlerInput, handlerBTN}: IIform) => {


    return (
    <>
    
    <form>
        <label htmlFor="title">Название</label>
        <input 
            id='title' 
            type="text" 
            name="title"
            value={title}
            onChange={handlerInput}
        />

        <label htmlFor="zone">Временная зона</label>
        <input 
            id='zone' 
            type="text" 
            name="zone"
            value={zone}
            onChange={handlerInput}
        />

        <button 
            type='button'
            onClick={handlerBTN}
        >
            Добавить
        </button>
    </form>


    </>

    )
}
