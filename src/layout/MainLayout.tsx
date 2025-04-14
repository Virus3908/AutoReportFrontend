import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './MainLayout.css'
import AddConversationModal from '../components/AddConversation/AddConversationModal';
import MenuButton from '../components/MenuButton/MenuButton';

const MainLayout = () => {
    const [modalOpen, setModalOpen] = useState(false);
    
    return (
        <div className='main-layout'>
            <header className="main-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <MenuButton onAddClick={() => setModalOpen(true)} />
                    <h2>Моё автопротоколирование</h2>
                </div>
            </header>

            <main style={{ padding: '1rem' }}>
                <Outlet /> {/* здесь рендерится вложенная страница */}
            </main>

            <footer className="main-footer">
                <small>© 2025 Автопротоколирование</small>
            </footer>

            <AddConversationModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                onSuccess={() => {
                    window.dispatchEvent(new Event('conversationsUpdated'));
                }}
            />
        </div >
    );
};

export default MainLayout;