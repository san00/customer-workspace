import { Customer } from '@/types/types'

type CustomerlistItemProps = {
  customer: Customer
}

const CustomerListItem = ({ customer }: CustomerlistItemProps) => {
  return (
    <article>
      <p>{customer.id}</p>
      <p>
        {customer.name?.first} {customer.name?.last}
      </p>
      <p>{customer.email}</p>
    </article>
  )
}

export default CustomerListItem
