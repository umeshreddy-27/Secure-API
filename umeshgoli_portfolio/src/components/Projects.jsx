import React from 'react'
const projects = [
  {title: 'BestBuy — Global Network Ops', summary: 'React & Angular 17 dashboard, Twilio integration, real-time SignalR updates.'},
  {title: 'PayPal — Partner Dashboard', summary: 'React/Angular SPA, NGRX/RxJS, performance optimizations.'},
  {title: 'MasterCard — Analytics UI', summary: 'Real-time dashboards, drag-and-drop widgets, Redux.'},
  {title: '7-Eleven — Retail Portal', summary: 'Legacy migration, responsive UI components.'},
]
export default function Projects(){
  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Selected Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map(p=>(
          <article key={p.title} className="bg-white/6 rounded-md p-4">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm mt-1">{p.summary}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
