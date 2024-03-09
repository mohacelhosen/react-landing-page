import logo_white from '../../assets/img/logo-white.png'
import logo_black from '../../assets/img/logo-black.png'
import search_white from '../../assets/img/search-w.png'
import search_black from '../../assets/img/search-b.png'
import day from '../../assets/img/day.png'
import night from '../../assets/img/night.png'


const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo_black} alt="" className="logo" />
        <ul>
            <li>Home</li>
            <li>Product</li>
            <li>Feature</li>
            <li>About</li>
        </ul>
        <div className='search-box'>
            <input type="text" name="search" placeholder='Search' id="search" />
            <img src={search_white} alt="search icon" />
        </div>
        <img src={night} alt="toggle icon" className='toggle-icon' />
    </div>
  );
};

export default Navbar;
