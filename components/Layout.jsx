import Head from 'next/Head'

export default function Layout({ title, children }) {
  return (
    <div className="bg-gray-200">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto min-h-screen max-w-xl pt-8">
        {children}
      </main>
    </div>
  )
}
