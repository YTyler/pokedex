import { useRouter } from 'next/router'
import Layout from '../../components/Layout'

export default ({ query }) => {
  const router = useRouter()
  const { id } = router.query
  return (
    <Layout title={'dynamic route ' + id}>
      <div className="rounded-2xl bg-blue-300 px-10 pb-6 text-black drop-shadow-md">
        <h1 className="mt-10 py-5 text-4xl">Dynamic Route {id}</h1>
        <p className="mt-5 text-2xl">
          This is the page for demonstrating dynamic routing with next
        </p>
      </div>
    </Layout>
  )
}
