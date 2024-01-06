import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer } from 'miragejs';
import App from './App';

createServer({
  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Salário',
          amount: 3500,
          type: 'deposit',
          category: 'Trabalho',
          createdAt: new Date()
        },
        {
          id: 2,
          title: 'Renda',
          amount: 1400,
          type: 'withdraw',
          category: 'Moradia',
          createdAt: new Date()
        }
      ]
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
