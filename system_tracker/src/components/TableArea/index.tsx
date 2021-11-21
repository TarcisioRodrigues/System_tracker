import React from 'react'
import * as styles from './styles'
import {Item} from '../../types/Item'
import { TableItem } from '../TableItem'
type Props={
    list:Item[]
}
export function TableArea({list}:Props){
    //Tabela
    return(
        <styles.Container>
            <thead>
                <tr>
                    <styles.TableHeaderColumn width={100}> Data  </styles.TableHeaderColumn>
                    <styles.TableHeaderColumn width={130} > Categoria  </styles.TableHeaderColumn>
                    <styles.TableHeaderColumn> Titulo </styles.TableHeaderColumn>
                    <styles.TableHeaderColumn width={150}> Valor </styles.TableHeaderColumn>
                </tr>
            </thead>
            <tbody>
                {list.map((item,index)=>(
                 <TableItem key={index} item={item}/>
                ))}
            </tbody>
        </styles.Container>
    )
}