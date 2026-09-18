import { readFile } from 'node:fs/promises'

const files = ['src/components/SiteLayout.tsx', 'src/pages/HomePage.tsx']
const text = (await Promise.all(files.map((file) => readFile(file, 'utf8')))).join('\n')
if (text.includes('href="#"') || text.includes('to="/about"') || text.includes('to="/services"')) {
  console.error('Found an inert or deferred navigation link.')
  process.exit(1)
}
console.log('Landing navigation links passed validation.')
