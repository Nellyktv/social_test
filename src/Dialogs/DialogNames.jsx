import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css';


export default function DialogNames(props){
    return (
        <>
            <div className={styles.item}>
                <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
            </div>
        </>
    )

}

