import Navbar from '../navbar/Navbar';
import Main from '../main/Main';
import '../header/Header.css'


const Header=()=>{
       return(
            <div className='background'>
              <Navbar/>
              <Main/>
            </div>
       )
}

export default Header;
