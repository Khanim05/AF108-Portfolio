
import NavbarList from '../navbarList/NavbarList';
import NavbarLogo from '../navbarlogo/NavbarLogo';
import '../navbar/Navbar.css'

const Navbar = () => {
  return (
       <nav className='navbarsection container'>
        <NavbarLogo />
      <NavbarList />
       </nav>
      
   
  );
};

export default Navbar;

