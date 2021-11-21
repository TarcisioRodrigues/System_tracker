import React,{useEffect, useState} from 'react';
import * as styles from '../src/styles/App.styles';
import {Category} from './types/Category'
import {Item} from './types/Item'
import {categories} from './data/categories'
import {items} from './data/items'
import {filterListByMonth, getCurrentMonth} from './utils/dateFilter'
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';
import { InputArea } from './components/InputArea';
function App() {
  const [list,setList]=useState(items)
  const [filteredList,setFilteredList]=useState<Item[]>([])
  const [currentMonth,setCurrentMonth]=useState(getCurrentMonth())
  const [income,setIncome]=useState(0)
  const [expense,setExpense]=useState(0)
  useEffect(()=>{
    let incomeCount=0
    let expenseCount=0
    for(let i in filteredList){
      if(categories[filteredList[i].category].expense){
        expenseCount+=filteredList[i].value
      }else{
        incomeCount+=filteredList[i].value
      }
    }
    setIncome(incomeCount)
    setExpense(expenseCount)
  },[filteredList])
  useEffect(()=>{
      setFilteredList(filterListByMonth(list,currentMonth))
  },[list,currentMonth])

  function handleMonthChange(newMonth:string){
    setCurrentMonth(newMonth)

  }
  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
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
          currentMonth={currentMonth}
          income={income}
          expense={expense}
          />
           <InputArea onAdd={handleAddItem} />
          <TableArea list={filteredList}/>
        </styles.body>
      </styles.Container>
    </div>
  );
}

export default App;
