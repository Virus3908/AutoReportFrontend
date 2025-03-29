import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './MainLayout.css'
import AddConversationModal from '../components/AddConversationModal';

const MainLayout = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className='main-layout'>
            <header className="main-header">
                <h2 style={{ display: 'inline-block' }}>Моё автопротоколирование</h2>
                <button
                    onClick={() => setModalOpen(true)}
                    className="add-button"
                >
                    + Добавить совещание
                </button>
            </header>

            <main style={{ padding: '1rem' }}>
                <Outlet /> {/* здесь рендерится вложенная страница */}
            </main>

            <footer className="main-footer">
                <small>© 2025 Сбербанк</small>
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