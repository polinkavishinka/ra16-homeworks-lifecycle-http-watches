import { Clock, Item } from './Clock'

interface IIlist {
    list: {
        title: string,
        time: number
        id: number
    }[],
    handleBtnDelete: (e: Item) => void

}

export const ClockList = ({list, handleBtnDelete}: IIlist) => {
  return (
    <div style={{display: 'flex', columnGap: '15px'}}>
        {list.map(item => (
            <Clock 
                key={item.id}
                item={item}
                handleBtnDelete={handleBtnDelete}
            />
        ))}
    </div>
  )
}
