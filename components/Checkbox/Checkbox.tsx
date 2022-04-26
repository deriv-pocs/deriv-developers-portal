import React from 'react';
import styles from './Checkbox.module.scss';

export default function Checkbox({ name, id }) {
    const [is_checked, setIsChecked] = React.useState(false);
    const toggleCheckbox = () => is_checked ? setIsChecked(false) : setIsChecked(true);
    return (
        <div>
            <input 
                { ...name }
                id={id}
                type="checkbox"
                defaultValue="read"
                defaultChecked={is_checked} />
            <span 
                className={`${styles.customCheckbox}${is_checked ? " " + styles.activeCheckbox : ""}`} 
                onClick={() => toggleCheckbox()} 
            />
            <label htmlFor={id}>Read all: Full access to users' information, including private
                information</label>
        </div>
    )
}