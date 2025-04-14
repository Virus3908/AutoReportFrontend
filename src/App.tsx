import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom'
import ConversationsListPage from './pages/ConversationsListPage';
import ConversationDetailPage from './components/ConversationDetail/ConversationDetailPage';
import MainLayout from './layout/MainLayout';



function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/conversations" />} />
          <Route path="/conversations/" element={<ConversationsListPage />} />
          <Route path="/conversations/:id" element={<ConversationDetailPage />} />
          {/* Другие маршруты добавим позже */}
        </Route >
      </Routes>
    </Router>
  );
}

export default App;