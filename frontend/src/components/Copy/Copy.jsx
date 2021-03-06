import React, { useEffect, useState } from 'react'
import { BiCheck, BiCopy } from 'react-icons/bi'

export default function Copy({ gif, className }) {
  const [copied, setCopied] = useState(false)
  const copiedClassName = copied ? 'copied' : ''

  const copyLink = () => {
    const [protocol, , baseUrl] = window.location.href.split('/')
    const link = `${protocol}//${baseUrl}/gif/${gif.id}`
    setCopied(true)
    navigator.clipboard.writeText(link)
  }

  useEffect(() => {
    let timer
    if (copied) {
      timer = setTimeout(() => {
        setCopied(false)
      }, 1000)
    }
    return () => clearTimeout(timer)
  }, [copied])

  return (
    <button
      aria-label="Copiar link"
      disabled={copied}
      onClick={copyLink}
      className={`btn ${className} ${copiedClassName}`}
    >
      {copied ? <BiCheck size="17.6px" /> : <BiCopy />}
    </button>
  )
}
