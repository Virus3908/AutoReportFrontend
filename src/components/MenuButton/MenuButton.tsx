import { useMenuButtonLogic } from '../../hooks/useMenuButtonLogic';
import './MenuButton.css';

interface Props {
  onAddClick: () => void;
}

const MenuButton: React.FC<Props> = ({ onAddClick }) => {
  const { menuOpen, setMenuOpen, handleNavigate, menuRef } = useMenuButtonLogic();

  return (
    <div className="menu-wrapper" ref={menuRef}>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {menuOpen && (
        <div className="dropdown-menu">
          <button onClick={() => handleNavigate('/conversations')}> Совещания</button>
          <button onClick={() => { onAddClick(); setMenuOpen(false); }}>
            Добавить совещание
          </button>
          <button onClick={() => handleNavigate('/participants')}>Участники</button>
        </div>
      )}
    </div>
  );
};

export default MenuButton;