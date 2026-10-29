import type { Customer } from '../types/Customer'

type CustomerListProps = {
  list?: Customer[]
}

export function CustomersList({ list = [] }: CustomerListProps) {
  return (
    <>
      <p className="text-secondary">Total de clientes: {list.length}</p>

      <div className="table-responsive">
        <table className="table table-striped table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th scope="col">Código</th>
              <th scope="col">Nome</th>
              <th scope="col">CPF</th>
              <th scope="col">E-mail</th>
              <th scope="col">Telefone</th>
              <th scope="col">Município</th>
              <th scope="col">UF</th>
            </tr>
          </thead>

          <tbody>
            {list.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.ident_document}</td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
                <td>{customer.municipality}</td>
                <td>{customer.state}</td>
              </tr>
            ))}

            {list.length === 0 && (
              <tr>
                <td colSpan={7} className="text-center text-secondary">
                  Nenhum cliente cadastrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}
''