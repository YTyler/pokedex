import Head from 'next/head'

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto min-h-screen max-w-xl pt-8">
        {children}
      </main>
    </>
  )
}
