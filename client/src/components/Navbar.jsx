import Wrapper from '../assets/wrappers/Navbar';
import { FaBars } from 'react-icons/fa';
import Logo from './Logo';
import { useDashboardContext } from '../pages/DashboardLayout';

const Navbar = () => {
  const { toggleSidebar } = useDashboardContext();

  return (
    <Wrapper>
      <nav className='nav-center'>
        <button type='button' className='toggle-btn' onClick={toggleSidebar}>
          <FaBars />
        </button>
        <div>
          <Logo />
          <h4 className='logo-text'>Painel de Controle</h4>
        </div>
        <div className='btn-container'>toggle/logout</div>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
