import React,{useEffect, useState} from 'react';
import * as styles from '../src/styles/App.styles';
import {Category} from './types/Category'
import {Item} from './types/Item'
import {categories} from './data/categories'
import {items} from './data/items'
import {filterListByMonth, getCurrentMonth} from './utils/dateFilter'
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';
function App() {
  const [list,setList]=useState(items)
  const [filteredList,setFilteredList]=useState<Item[]>([])
  const [currentMonth,setCurrentMonth]=useState(getCurrentMonth())
  useEffect(()=>{
      setFilteredList(filterListByMonth(list,currentMonth))
  },[list,currentMonth])
  function handleMonthChange(newMonth:string){
    setCurrentMonth(newMonth)

  }
  return (
    <div className="App"> 
      <styles.Container>
        <styles.Header>
          <styles.HeaderText>Sistema Financeiro</styles.HeaderText> 
        </styles.Header>
        <styles.body>
          <InfoArea
          onMonthChange={handleMonthChange}
          currentMonth={currentMonth}/>
          <TableArea list={filteredList}/>
        </styles.body>
      </styles.Container>
    </div>
  );
}

export default App;
