


function Button(props) {
    
const { text, variant } = props
const defaultBtnClasses = "px-6 py-3  font-medium rounded-full hover:shadow-lg transition-all duration-300"
const primaryBtnClasses = "bg-gradient-to-r from-blue-500 to-purple-600 text-white"  
const normalBtnClasses = "border border-gray-300 text-gray-700" 


return (
        <button className={`
        ${defaultBtnClasses} 
        ${variant === 'primary' ? primaryBtnClasses : ""}
        ${variant === 'normal' ? normalBtnClasses : ""}
        `} >
            {text }
        </button>
    )
}

export default Button;
