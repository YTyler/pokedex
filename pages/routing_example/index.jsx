import Link from 'next/link'
import Layout from '../../components/Layout'

export default () => {
  return (
    <Layout title="Dynamic Routing">
      <h1 className="my-10 text-center text-4xl text-black">
        Dynamic Routing Example
      </h1>
      <ul className="grid-cols-2 text-black">
        {['First', 'Second', 'Third', 'Fourth'].map((item, index) => (
          <li
            className="my-8 rounded-md bg-blue-300 py-4 text-center text-2xl drop-shadow-md"
            key={index + 1}
          >
            <Link href={`/routing_example/${index + 1}`}>
              <a>
                <h2>{item} Dynamic Route</h2>
                <h3 className="mt-2 text-lg">/routing_example/{index + 1}</h3>
              </a>
            </Link>
          </li>
        ))}
        <li
          className="my-8 rounded-md bg-yellow-200 py-4 text-center text-2xl drop-shadow-md"
          key={0}
        >
          <Link href={`/routing_example/named`}>
            <a>
              <h2>Named Route</h2>
              <h3 className="mt-2 text-lg">/routing_example/named</h3>
            </a>
          </Link>
        </li>
      </ul>
    </Layout>
  )
}
