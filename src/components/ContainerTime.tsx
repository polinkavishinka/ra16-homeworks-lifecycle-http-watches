import React, { useState } from 'react'
import { Form } from './Form'
import { ClockList } from './ClockList'
import { Item } from './Clock'

export const ContainerTime = () => {

    const [form, setForm] = useState({
        title: '',
        zone: 0,
    })
    const [list, setList] = useState<{ title: string; time: number, id: number }[]>([]);
    const [idCounter, setIdCounter] = useState(1);


    function handlerInput({ target }: React.ChangeEvent<HTMLInputElement>) {
        const {name, value} = target;
        setForm(prevForm => ({...prevForm, [name]: value}));
    }

    function handlerBTN() {
        setList(prevList => [...prevList, { title: form.title, time: form.zone, id:  idCounter}]);
        setIdCounter(idCounter + 1)
        setForm({ title: '', zone: 0 });
    }

    function handleBtnDelete(e: Item) {
        const filterList = list.filter((item: Item): boolean => item.id !== e.id);
        setList(filterList);
    }

  return (
    <>
        <Form
            title={form.title}
            zone={form.zone}
            handlerInput={handlerInput}
            handlerBTN={handlerBTN}
        />
        <ClockList 
            list={list} 
            handleBtnDelete={handleBtnDelete} 
        />
    </>
  )
}
