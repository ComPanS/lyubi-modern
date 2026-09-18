import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { site } from '../content/site'

const navigation = [
  { to: '#about', label: 'О салоне' },
  { to: '#services', label: 'Услуги' },
  { to: '#contacts', label: 'Контакты' },
]

export function SiteLayout() {
  const [open, setOpen] = useState(false)
  return (
    <div className="site-shell">
      <header className="site-header">
        <Link className="brand" to="/"><img src={`${import.meta.env.BASE_URL}media/logo.jpg`} alt="Люби" />{site.shortName}<span>салон красоты</span></Link>
        <button className="menu-toggle" aria-label="Открыть меню" aria-expanded={open} onClick={() => setOpen(!open)}><i /><i /></button>
        <nav className={open ? 'is-open' : ''} aria-label="Основная навигация">
          {navigation.map(({ to, label }) => <a key={to} href={to} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="header-book" href={site.bookingUrl} target="_blank" rel="noreferrer">Записаться</a>
        </nav>
      </header>
      <main><Outlet /></main>
      <footer className="site-footer">
        <p>{site.name} · Калуга</p>
        <a href={site.contact.phoneHref}>{site.contact.phone}</a>
        <a href="#top">Наверх ↑</a>
      </footer>
    </div>
  )
}
