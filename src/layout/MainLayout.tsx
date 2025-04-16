import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './MainLayout.css';
import AddModal from '../components/Modal/AddModal';
import MenuButton from '../components/MenuButton/MenuButton';

type ModalType = 'conversation' | 'participant' | null;

const MainLayout = () => {
  const [modalType, setModalType] = useState<ModalType>(null);

  const handleClose = () => setModalType(null);

  return (
    <div className="main-layout">
      <header className="main-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <MenuButton
            onAddConversation={() => setModalType('conversation')}
            onAddParticipant={() => setModalType('participant')}
          />
          <h2>Моё автопротоколирование</h2>
        </div>
      </header>

      <main style={{ padding: '1rem' }}>
        <Outlet />
      </main>

      <footer className="main-footer">
        <small>© 2025 Автопротоколирование</small>
      </footer>

      {modalType && (
        <AddModal
          type={modalType}
          isOpen={true}
          onClose={handleClose}
          onSuccess={() => {
            window.dispatchEvent(new Event('conversationsUpdated'));
            handleClose();
          }}
        />
      )}
    </div>
  );
};

export default MainLayout;