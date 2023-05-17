'use client'

import Image from 'next/image'
import { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Jost } from 'next/font/google';

const jost = Jost({
  subsets: ['latin']
})

export default function Home() {
  const [url, setUrl] = useState('');
  const [valid, setValid] = useState(false)
  const handleUrl = ({ target }) => {
    const { value } = target;
    setUrl(value);
    const regex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/;
    if (!regex.test(value)) {
      setValid(true)
    } else {
      setValid(false)
    }
  }
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className={jost.className}>
        Insira o link do que você quer compartilhar:
      </h1>
      <br />
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Link" variant="outlined" onChange={handleUrl} />
        {valid && <p className={`text-red-500 ${jost.className}`}>Insira uma url válida</p>}
        </Box>
      <div className='flex p-24 space-x-10'>
        <a href={`https://www.facebook.com/share.php?u=${url}`} target="_blank">
          <Image src="https://www.vectorlogo.zone/logos/facebook/facebook-official.svg" width={100} height={100} alt='social-logo' />
        </a>
        <a href={`https://www.twitter.com/share?&url=${url}`} target="_blank">
          <Image src="https://www.vectorlogo.zone/logos/twitter/twitter-tile.svg" width={100} height={100} alt='social-logo' />
        </a>
        <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`} target="_blank">
          <Image src="https://www.vectorlogo.zone/logos/linkedin/linkedin-icon.svg" width={100} height={100} alt='social-logo' />
        </a>
      </div>
    </main>
  )
}
