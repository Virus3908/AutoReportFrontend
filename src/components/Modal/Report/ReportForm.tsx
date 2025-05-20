import { useReportForm } from '../../../hooks/useReportForm';
import { useLoadPrompts } from '../../../hooks/useLoadPrompts';
import '../Modal.css';

type Props = {
  conversationId: string;
  onClose: () => void;
  onSuccess?: () => void;
  reportType: 'semi' | 'full';
};

const ReportForm: React.FC<Props> = ({ conversationId, onClose, onSuccess, reportType }) => {
  const {
    promptName,
    setPromptName,
    handleSubmit
  } = useReportForm(conversationId, reportType, onSuccess, onClose);

  const { prompts, loading, error } = useLoadPrompts();

  const selectedPrompt = prompts.find(p => p.prompt_name === promptName);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="promptSelect">Выберите промпт:</label>
      <select
        id="promptSelect"
        value={promptName}
        onChange={(e) => setPromptName(e.target.value)}
        required
        className="prompt-select"
      >
        <option value="" disabled>-- Выберите промпт --</option>
        {prompts.map(prompt => (
          <option key={prompt.id} value={prompt.prompt_name}>
            {prompt.prompt_name}
          </option>
        ))}
      </select>

      {selectedPrompt && (
        <div className="prompt-preview">
          <label>Текст промпта:</label>
          <pre className="prompt-box">{selectedPrompt.prompt}</pre>
        </div>
      )}

      <button type="submit" className="modal-button">
        Создать задачу
      </button>

      {loading && <p>Загрузка промптов...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default ReportForm;