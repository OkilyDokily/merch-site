import CartCount from './CartCount'

function Header(props)
{
  return(
  <div>
    <CartCount count={props.count}/>
  </div>
  )
}

export default Header;