import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom'
import ConversationsListPage from './pages/ConversationsListPage';
import ConversationDetailPage from './pages/ConversationDetailPage';
import MainLayout from './layout/MainLayout';
import ParticipantListPage from './pages/ParticipantListPage';
import PromptListPage from './pages/PromptListPage';



function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/conversations" />} />
          <Route path="/conversations/" element={<ConversationsListPage />} />
          <Route path="/conversations/:id" element={<ConversationDetailPage />} />
          <Route path="/participants" element={<ParticipantListPage />} />
          <Route path="/prompts" element={<PromptListPage />} />
          {/* Другие маршруты добавим позже */}
        </Route >
      </Routes>
    </Router>
  );
}

export default App;