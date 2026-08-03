import { Customer } from '@/types/types'

const getCustomers = async (): Promise<Customer[]> => {
  const url = '/api/customers'
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Response status: ${response}`)
    }
    const result = await response.json()
    return result
  } catch (error) {
    throw new Error('Failed to load customer data', { cause: error })
  }
}

export default getCustomers
