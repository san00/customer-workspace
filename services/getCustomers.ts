import { Customer } from '@/types/types'
import { promises as fs } from 'fs'
const getCustomers = async (): Promise<Customer[]> => {
  const file = await fs.readFile(process.cwd() + '/data/customers.json', 'utf8')
  const data = JSON.parse(file)
  try {
    if (!data) {
      throw new Error(`Response status: ${data.staus}`)
    }
    return data
  } catch (error) {
    throw new Error('Failed to load customer data', { cause: error })
  }
}

export default getCustomers
