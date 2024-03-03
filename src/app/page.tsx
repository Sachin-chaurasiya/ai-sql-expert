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
            <div className="flex gap-4" key={m.id}>
              <div className="font-medium">
                {m.role === 'user' ? (
                  <div className="h-8 w-8 border rounded shadow-sm flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8ZM72 96a56 56 0 1 1 56 56 56.06 56.06 0 0 1-56-56Z"></path>
                    </svg>
                  </div>
                ) : (
                  <div className="h-8 w-8 border rounded shadow-sm flex justify-center items-center bg-purple-500 text-white">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 256 256"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                    >
                      <path d="M197.58,129.06l-51.61-19-19-51.65a15.92,15.92,0,0,0-29.88,0L78.07,110l-51.65,19a15.92,15.92,0,0,0,0,29.88L78,178l19,51.62a15.92,15.92,0,0,0,29.88,0l19-51.61,51.65-19a15.92,15.92,0,0,0,0-29.88ZM140.39,163a15.87,15.87,0,0,0-9.43,9.43l-19,51.46L93,172.39A15.87,15.87,0,0,0,83.61,163h0L32.15,144l51.46-19A15.87,15.87,0,0,0,93,115.61l19-51.46,19,51.46a15.87,15.87,0,0,0,9.43,9.43l51.46,19ZM144,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H184V64a8,8,0,0,1-16,0V48H152A8,8,0,0,1,144,40ZM248,88a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0V96h-8a8,8,0,0,1,0-16h8V72a8,8,0,0,1,16,0v8h8A8,8,0,0,1,248,88Z"></path>
                    </svg>
                  </div>
                )}
              </div>
              <div
                key={m.id}
                className="bg-gray-100 p-4 rounded flex gap-2 flex-col"
              >
                <Markdown>{m.content}</Markdown>
              </div>
            </div>
          ))}

        <form
          className="flex gap-4 fixed bottom-0 w-full mb-8"
          onSubmit={handleSubmit}
        >
          <input
            autoFocus
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
