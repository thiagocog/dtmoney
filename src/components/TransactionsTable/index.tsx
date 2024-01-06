import { useEffect, useState } from "react";
import { Container } from "./styles";
import api from "../../services/api";

interface Transaction {
  id: number
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

export default function TransactionsTable() {
  const [ transactions, setTransactions ] = useState<Transaction[]>([]);

  useEffect(() => {
    const getInitialData = async () => {
      const response = await api('transactions');
      setTransactions(response.data);
    }
    getInitialData();
  }, [])
  console.log(transactions)

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions && transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.title}</td>
              <td className={transaction.type === 'deposit' ? 'deposit' : 'withdraw'}>
                {transaction.type === 'deposit' ? '' : '-'}
                {transaction.amount}
              </td>
              <td>{transaction.category}</td>
              <td>{transaction.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}