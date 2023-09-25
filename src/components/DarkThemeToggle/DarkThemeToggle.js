import { useState } from "react"
import './dark-theme-toggle.css'

const DarkThemeToggle = ({ children }) => {

    const [isEnable, setIsEnable] = useState(false)

    const onChangeThemeColor = () => {
        setIsEnable((prevState) => !prevState)

    }

    return (
        <div className={isEnable ? 'dark-theme app' : 'light-theme app'}>
            <label>change theme
                <input type='checkbox' checked={isEnable} onChange={onChangeThemeColor} />
            </label>

            {children}
        </div>
    )
}



export default DarkThemeToggle