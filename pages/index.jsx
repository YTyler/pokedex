import Layout from '../components/Layout'
import Link from 'next/link'
import Image from 'next/image'

export default function Home({ pokemon }) {
  return (
    <Layout title="NextJS Pokedex">
      <Link href="/dynamic_routing">
        <a className="text-black">
          <h1 className="mb-8 text-center text-4xl">NextJs Pokedex</h1>
        </a>
      </Link>
      <ul>
        {pokemon.map((mon, index) => (
          <li key={index}>
            <Link href={`/pokemon?id=${index + 1}`}>
              <a className="my-2 flex items-center rounded-xl border bg-gray-100 p-4 text-xl capitalize text-black">
                <Image
                  src={mon.image}
                  alt={mon.name}
                  width={150}
                  height={150}
                />
                <span className="ml-5 mr-2 font-bold">{index + 1}</span>
                {mon.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export async function getStaticProps(context) {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    const { results } = await res.json()
    const pokemon = results.map((result, index) => {
      const paddedIndex = ('00' + (index + 1)).slice(-3)
      const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`
      return {
        ...result,
        image,
      }
    })
    return {
      props: { pokemon },
    }
  } catch (error) {
    console.error(error)
  }
}
