import CartCount from './CartCount'

function Header(props)
{
  const headerObj = {
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    fontSize: "14px",
    fontFamily: "OldFashion"
  }
  return(
  <div style={headerObj}>
    <div>Welcome to Ye Olde General Store (Now Online!)</div>
    <CartCount count={props.count}/>
  </div>
  )
}

export default Header;