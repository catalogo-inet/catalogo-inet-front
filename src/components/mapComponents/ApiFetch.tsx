import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

export const getServerSideProps = (async (context) => {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const repo = await res.json()
    return { props: { repo } }
})