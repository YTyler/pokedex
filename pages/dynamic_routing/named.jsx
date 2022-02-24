import Layout from '../../components/Layout'

export default () => {
  return (
    <Layout title="Named Route">
      <div className="mt-36 rounded-2xl bg-yellow-200 px-10 pb-6 text-center text-black drop-shadow-md">
        <h1 className="mt-10 py-5 text-4xl">Named Route</h1>
        <p className="mt-5 text-2xl">
          This page demonstrates how predefined routes take precedence over
          dynamic routes
        </p>
      </div>
    </Layout>
  )
}
