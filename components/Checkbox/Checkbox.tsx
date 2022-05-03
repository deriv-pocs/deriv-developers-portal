import React from 'react';
import styles from './Checkbox.module.scss';

export default function Checkbox({
    register = null,
    id = "",
    label = "",
    className = "",
    onClickFunction = null
}) {
    const [is_checked, setIsChecked] = React.useState(false);
    const checkbox_active = is_checked ? " " + styles.activeCheckbox : "";
    const new_class_name = className !== "" ? " " + className : "";
    const toggleCheckbox = () => is_checked ? setIsChecked(false) : setIsChecked(true);

    return (
        <div>
            <input 
                {...register}
                id={id}
                type="checkbox"
                defaultChecked={is_checked}
                onChange={console.log(event)}
            />
            <span 
                className={`${styles.customCheckbox}${checkbox_active}${new_class_name}`} 
                onClick={() => {
                    if (onClickFunction !== null) onClickFunction()
                    toggleCheckbox()
                }} 
            />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}