import getCustomers from '@/services/getCustomers'
import CustomerList from './components/customerList/CustomerList'

export default async function Home() {
  const customers = await getCustomers()

  console.log(customers, 'customers here')

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          Customer support console.
        </h1>

        <CustomerList customers={customers} />
      </main>
    </div>
  )
}
