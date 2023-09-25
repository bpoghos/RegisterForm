import './dark-theme-toggle.css'



const DarkThemeToggle = ({ onDarkMode }) => {

    return (
        <div>
            <input type='checkbox' onClick={onDarkMode}/>
        </div>
    )
}



export default DarkThemeToggle