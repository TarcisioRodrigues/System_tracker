import { type } from 'os'
import *as styles from './styles'
type Props={
    title:string
    value:number
    color?:string;
   
}
export function ResumeItem({title,value,color}:Props){
    return(
        <styles.Container>
            <styles.Title>{title}</styles.Title>
            <styles.Info color={color}>R$ {value}</styles.Info>
        </styles.Container>
    )
}