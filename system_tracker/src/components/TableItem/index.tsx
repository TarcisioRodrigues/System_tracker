import *as styles from './styles';
import {Item} from '../../types/Item';
import {formatDate} from '../../utils/dateFilter'
import {categories} from '../../data/categories'
type Props={
    item:Item
}
export function TableItem({item}:Props){
    return(
        <styles.Container>
            <styles.TableColumn>{formatDate(item.date)}</styles.TableColumn>
            <styles.TableColumn>
                <styles.category color={  categories[item.category].color}>
                {categories[item.category].title}
                </styles.category>
            </styles.TableColumn>
            <styles.TableColumn>{item.title}</styles.TableColumn>
            <styles.TableColumn>
                <styles.Value color={categories[item.category].expense? 'red' :'green'}>
                    R${item.value}
                </styles.Value>
            </styles.TableColumn>
        </styles.Container>
    )
}