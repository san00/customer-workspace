import { Customer } from '@/types/types'
import CustomerListItem from './CustomerListItem'

type CustomerlistProps = {
  customers: Customer[]
}

const CustomerList = ({ customers }: CustomerlistProps) => {
  return (
    <div>
      {customers.map((customer) => (
        <CustomerListItem key={customer.id} customer={customer} />
      ))}
    </div>
  )
}

export default CustomerList
