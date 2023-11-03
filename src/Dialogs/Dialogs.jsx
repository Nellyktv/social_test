import DialogNames from './DialogNames';
import Message from './Messages';
import styles from './Dialogs.module.css';
import React from 'react';





export default function Dialogs(props) {
    


    let dialogsElements = props.dialogsData.map( dialog => <DialogNames name={dialog.name} id={dialog.id} />)
    let messagesElements = props.messagesData.map(msg => <Message message={msg.message}/>)


    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs_items}>

                {dialogsElements}
            </div>
            
            {messagesElements}
        </div>
    );
}
