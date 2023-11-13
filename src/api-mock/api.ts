import { followUpMessages, seedMessages } from './seed-messages';
import { promiseWithRandomTimeout, randomTimeout } from './mock-helpers';

export const ourUserId = '1';
export const remoteUserId = '2';

export interface Message {
  userId: string;
  text: string;
  timestamp: string;
}

// The messages mock "database" pre-seeded with initial message history.
let messageHistory: Message[] = seedMessages
  .map((message, index) => {
    return { userId: index % 2 === 0 ? ourUserId : remoteUserId, text: message, timestamp: new Date().toISOString() };
  });

// Emulate the remote user's reply by taking an item from the list of available sentences and pushing to messages list.
export function addRemoteUserReply(): void {
  const replyMessageText = followUpMessages.shift();
  if (replyMessageText !== undefined) {
    const replyMessage: Message = {
      userId: remoteUserId,
      text: replyMessageText,
      timestamp: new Date().toISOString()
    };
    setTimeout(() => messageHistory.push(replyMessage), randomTimeout(0));
  }
}

// Get all chat messages from the backend.
function getMessages(): Promise<Message[]> {
  return promiseWithRandomTimeout(() => {
    return [...messageHistory].sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
  });
}

// Send a new message to the chat.
function sendMessage(messageText: string): Promise<Message> {
  return promiseWithRandomTimeout(() => {
    const ourNewMessage: Message = {
      userId: ourUserId,
      text: messageText,
      timestamp: new Date().toISOString()
    };

    messageHistory.push(ourNewMessage);
    addRemoteUserReply();

    return ourNewMessage;
  });
}

export const api = {
  getMessages,
  sendMessage
};
