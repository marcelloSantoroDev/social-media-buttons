'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
  const [url, setUrl] = useState('');
  const handleUrl = ({ target }) => {
    const { value } = target;
    setUrl(value); 
  }
  const encodedUrl = encodeURI(url)
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <label htmlFor="input">
      Insira o link do que você quer compartilhar:
      </label >
      <input className='' value={url} id="input" type="text" placeholder='link' onChange={handleUrl} />
      <div className='flex p-24 space-x-10'>
        <a href={`https://www.facebook.com/share.php?u=${url}`} target="_blank">
          <Image src="https://www.vectorlogo.zone/logos/facebook/facebook-official.svg" width={100} height={100} alt='social-logo' />
        </a>
        <a href={`https://www.twitter.com/share?&url=${url}`}>
          <Image src="https://www.vectorlogo.zone/logos/twitter/twitter-tile.svg" width={100} height={100} alt='social-logo' />
        </a>
        <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}>
          <Image src="https://www.vectorlogo.zone/logos/linkedin/linkedin-icon.svg" width={100} height={100} alt='social-logo' />
        </a>
      </div>
    </main>
  )
}
