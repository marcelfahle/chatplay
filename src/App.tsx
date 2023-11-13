import { useState, useEffect } from 'react';
import { api, ourUserId, Message } from './api-mock/api';

export default function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const pollingInterval = 3000;

  const fetchMessages = () => {
    api.getMessages().then(setMessages);
  };

  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, pollingInterval);

    return () => clearInterval(interval);
  }, []);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    if (newMessage.trim().length > 0) {
      const optimisticMessage: Message = {
        userId: ourUserId,
        text: newMessage,
        timestamp: new Date().toISOString()
      };

      // optimistic ui
      setMessages(prevMessages => [...prevMessages, optimisticMessage]);
      setNewMessage('');

      api.sendMessage(newMessage.trim()).then(() => {
        fetchMessages();
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto border flex flex-col h-screen overflow-hidden">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex items-end space-x-2 ${message.userId === ourUserId ? 'justify-end' : ''}`}>
            {message.userId !== ourUserId && (
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-10 h-10 border">
                <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">U1</span>
              </span>
            )}
            <div className={`p-3 ${message.userId === ourUserId ? 'bg-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200'} rounded-lg`}>
              <div className="text-sm">{message.text}</div>
              {/* Placeholder for timestamp */}
              <div className="text-xs">{/* Timestamp Here */}</div>
            </div>
            {message.userId === ourUserId && (
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-10 h-10 border">
                <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">U2</span>
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="p-4 border-t">
        <div className="relative">
          <input
            type="text"
            className="w-full px-4 py-2 rounded-md border"
            id="message"
            placeholder="Type your message"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 absolute right-2 top-2"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

