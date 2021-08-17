import Button from './Button'

const Header = ({onAdd, showAdd}) => {
   
    return (
        <header className = 'header'>
        <h1 style = {headingStyle}>Task tracker</h1> 
        <Button 
        color={showAdd ? 'red' : 'steelblue'} 
        text={showAdd ? 'Close' : 'Add'} 
        onClick = {onAdd} />
           
        </header>
    )
}

const headingStyle = {
    color: 'steelblue'
}

export default Header
