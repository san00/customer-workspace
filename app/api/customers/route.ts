import { promises as fs } from 'fs'

export async function GET() {
  const file = await fs.readFile(process.cwd() + '/data/customers.json', 'utf8')
  const data = JSON.parse(file)

  return Response.json({ data })
}
