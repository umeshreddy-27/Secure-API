import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from 'emailjs-com'

export default function Contact(){ 
  const form = useRef(null)
  const [status, setStatus] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()
    setStatus('sending')
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id'
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id'
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key'

    if (!serviceID || !templateID || !publicKey) {
      setStatus('missing_keys')
      return
    }

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
        setStatus('success')
        form.current.reset()
      }, (error) => {
        setStatus('error')
      })
  }

  return (

    <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} className="bg-white/6 rounded-md p-6">
      <h2 className="text-xl font-semibold mb-2">Contact</h2>
      <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input name="from_name" placeholder="Your name" className="p-2 rounded border bg-white/10" required />
        <input name="reply_to" placeholder="Your email" className="p-2 rounded border bg-white/10" required />
        <textarea name="message" placeholder="Message" className="p-2 rounded border bg-white/10 md:col-span-2" rows={5} required />
        <div className="md:col-span-2 flex items-center gap-3">
          <button type="submit" className="px-4 py-2 bg-white text-blue-700 rounded">Send Message</button>
          <div className="text-sm text-white/80">
            {status === 'sending' && 'Sending...'}
            {status === 'success' && 'Message sent — thank you!'}
            {status === 'error' && 'Error — please try again later.'}
            {status === 'missing_keys' && 'EmailJS keys missing. See README.'}
          </div>
        </div>
      </form>
      <div className="mt-4 text-sm">
        Or email directly: <a href="mailto:ugoli2710@gmail.com" className="underline">ugoli2710@gmail.com</a>
      </div>
    </motion.section>
  )
}
