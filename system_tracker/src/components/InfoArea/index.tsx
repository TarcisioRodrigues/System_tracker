import *as styles from './styles'
import {FiArrowLeft,FiArrowRight} from 'react-icons/fi';
import {formatCurrent} from '../../utils/dateFilter'
type Props={
    currentMonth:string
    onMonthChange:(newMonth:string)=>void
}
export function InfoArea({currentMonth,onMonthChange}:Props){
    function handlePrevius(){
        let[year,month]=currentMonth.split('-')
        let currentDate=new Date(parseInt(year),parseInt(month)-1,1)
        currentDate.setMonth(currentDate.getMonth()-1)
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth()+1}`)
    }
    function handleNext(){
        let[year,month]=currentMonth.split('-')
        let currentDate=new Date(parseInt(year),parseInt(month)-1,1)
        currentDate.setMonth(currentDate.getMonth()+1)
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth()+1}`)
    }
    return(
        <styles.Container>
            <styles.Month>
                <styles.Arrow onClick={handlePrevius}>
                    <FiArrowLeft/>
                </styles.Arrow>
                <styles.MonthTitle>{formatCurrent(currentMonth)}</styles.MonthTitle>
                <styles.Arrow onClick={handleNext}>
                    <FiArrowRight/>
                </styles.Arrow>
            </styles.Month>
            <styles.ResumeArea></styles.ResumeArea>
        </styles.Container>
    )
}