import { Container } from "./styles";

export default function TransactionsTable() {

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
          <tr>
            <td>Salário</td>
            <td className="deposit">€3.500,00</td>
            <td>Trabalho</td>
            <td>20/12/2023</td>
          </tr>
          <tr>
            <td>Renda</td>
            <td className="withdraw">- €1.400,00</td>
            <td>Desenvolvimento</td>
            <td>29/12/2023</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}