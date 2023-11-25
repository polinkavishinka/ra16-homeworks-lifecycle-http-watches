import moment from 'moment'
import { useEffect, useState } from 'react'

export type Item = {
        title: string,
        time: number,
        id: number,
}

interface IClockProps {
    item: {
        title: string,
        time: number,
        id: number,
    }
    handleBtnDelete: (e: Item) => void
}

export const Clock = ({item, handleBtnDelete}: IClockProps) => {
    const currentTimeInGMT = moment.utc();

    const [currentTime, setCurrentTime] = useState('');
    function isNumber(number: number): number {
        return Math.abs(number);
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (item.time > 0) {
            setCurrentTime(currentTimeInGMT.clone().add(item.time, 'hours').format('HH:mm:ss'));
            } else if (item.time < 0) {
                setCurrentTime(currentTimeInGMT.clone().subtract(isNumber(item.time), 'hours').format('HH:mm:ss'));
            } else {
                setCurrentTime(currentTimeInGMT.clone().format('HH:mm:ss'));
            }}, 1000)

            return () => {
                clearInterval(intervalId)
            }
    }, [currentTime, currentTimeInGMT])


  return (
    <div>
       <div>{item.title}</div>
       <div>{currentTime}</div>
       <button onClick={() => handleBtnDelete(item)}>X</button>
    </div>
  )
}
