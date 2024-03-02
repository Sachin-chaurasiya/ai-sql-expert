'use client';

import { useChat } from 'ai/react';
import Markdown from 'react-markdown';
import { INITIAL_MESSAGES } from './constant/chat.constants';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    initialMessages: INITIAL_MESSAGES,
  });
  return (
    <div>
      <div className="text-center py-8">
        <h2 className="text-center text-2xl font-bold mb-2">SQL Expert</h2>
        <p>
          Welcome to the SQL Expert. You can ask any SQL related questions and
          expert will help you out.
        </p>
      </div>

      <div className="flex flex-col w-full max-w-2xl pb-24 mx-auto stretch gap-4">
        {messages
          .filter((m) => m.role !== 'system')
          .map((m) => (
            <div
              key={m.id}
              className="bg-gray-100 p-4 rounded flex gap-2 flex-col"
            >
              <span className="font-medium">
                {m.role === 'user' ? 'You' : 'Expert'}
              </span>
              <Markdown>{m.content}</Markdown>
            </div>
          ))}

        <form
          className="flex gap-4 fixed bottom-0 w-full mb-8"
          onSubmit={handleSubmit}
        >
          <input
            className="p-2 border border-gray-300 rounded shadow-xl outline-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 flex-grow max-w-xl"
            value={input}
            placeholder="Ask your SQL related question.."
            onChange={handleInputChange}
          />

          <button
            className="border p-2 px-4 rounded shadow-xl border-gray-300 bg-purple-500 text-white"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
