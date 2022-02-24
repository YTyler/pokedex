import Layout from '../components/Layout'
import Link from 'next/Link'
import Image from 'next/Image'

export default function pokemon({ mon }) {
  console.log(mon)
  return (
    <Layout title={mon.name}>
      <h1 className="mb-2 items-center text-center text-4xl capitalize">
        {mon.name}
      </h1>
      <Image
        className="mx-auto"
        src={mon.image}
        alt={mon.name}
        width={800}
        height={800}
      />
      <div className="flex justify-evenly">
        <div className="text-right">
          <h2 className="mb-2 text-2xl">Base Stats</h2>
          {mon.stats.map((item, index) => (
            <p key={index}>
              <span className="mr-2 font-bold capitalize">
                {item.stat.name}:
              </span>
              {item.base_stat}
            </p>
          ))}
        </div>
        <div>
          <h2 className="mb-2 text-2xl">Types</h2>
          {mon.types.map(({ type }, index) => (
            <p key={index} className="capitalize">
              {type.name}
            </p>
          ))}
          <h2 className="mt-6 mb-2 text-2xl">Physical</h2>
          <p>
            <span className="mr-2 font-bold">Weight:</span>
            {mon.weight} lbs
          </p>
          <p>
            <span className="mr-2 font-bold">Height:</span>~{mon.height}'
          </p>
        </div>
      </div>
      <p className="mt-10 text-center">
        <Link href="/">
          <a className="text-2xl underline">Home</a>
        </Link>
      </p>
    </Layout>
  )
}

export async function getServerSideProps({ query }) {
  const id = query.id
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const mon = await res.json()
    const paddedIndex = ('00' + id).slice(-3)
    const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`
    mon.image = image
    return {
      props: { mon },
    }
  } catch (error) {
    console.error(error)
  }
}
