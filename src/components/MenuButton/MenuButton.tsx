import { useMenuButtonLogic } from '../../hooks/useMenuButtonLogic';
import './MenuButton.css';

interface Props {
  onAddConversation: () => void;
  onAddParticipant: () => void;
}

const MenuButton: React.FC<Props> = ({ onAddConversation, onAddParticipant }) => {
  const { menuOpen, setMenuOpen, handleNavigate, menuRef } = useMenuButtonLogic();

  return (
    <div className="menu-wrapper" ref={menuRef}>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {menuOpen && (
        <div className="dropdown-menu">
          <button onClick={() => handleNavigate('/conversations')}> Совещания</button>
          <button onClick={() => { onAddConversation(); setMenuOpen(false); }}>
            Добавить совещание
          </button>
          <button onClick={() => handleNavigate('/participants')}>Участники</button>
          <button onClick={() => { onAddParticipant(); setMenuOpen(false); }}>
            Добавить участника
          </button>
        </div>
      )}
    </div>
  );
};

export default MenuButton;