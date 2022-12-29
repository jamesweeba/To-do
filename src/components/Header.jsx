
function Header({title}){
    return(
        <div className="head">{title}</div>
    )
}

Header.defaultProps={
    title:"Default Groceries"
}

export default Header;