import Head from 'next/head'
import { useSession } from 'next-auth/client'

export default function About() {
  const [session, loading] = useSession()

  return (
    <>
      <Head>
        <title>About - DevDuo</title>
      </Head>

      <h1>About DevDuo</h1>

      {/* <pre>{JSON.stringify(session,null,2)}</pre> */}

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem,
        quod dignissimos. Itaque ipsum adipisci voluptates libero animi et hic,
        quis mollitia impedit suscipit, deleniti nihil delectus nulla neque
        iure. Voluptatem temporibus minima, esse voluptatum incidunt suscipit.
        Nulla magnam reprehenderit temporibus dolorum laborum ipsa iure hic,
        corrupti, consequatur perspiciatis perferendis, voluptatum molestiae
        suscipit deserunt molestias odio officiis velit ex ab nisi cum optio
        impedit. Voluptatibus fugit aut recusandae? Ea, quia voluptatem?
        Deserunt cum, quisquam tempore vitae dicta provident doloremque qui
        quaerat aliquam nemo saepe quod, minima error quae sequi velit quis quos
        quo explicabo obcaecati corporis. Maxime aperiam doloremque excepturi
        vitae.
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam iusto
        nulla dicta, maxime a aspernatur unde consequuntur aperiam officia odit
        natus mollitia quasi nemo nobis minus, molestiae neque nisi. Ullam a
        fuga reiciendis, velit iste corporis sed consequatur fugit, harum,
        maxime mollitia minus autem architecto magnam pariatur ad? Commodi, sed.
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        accusantium a pariatur blanditiis minima et asperiores necessitatibus
        nisi, praesentium aspernatur, est, sint nihil laborum ex. Et illum
        tempora impedit odio perferendis, non facere explicabo odit ipsum earum!
        Quas tempore minus ducimus illo ad dicta error omnis aperiam iste
        reiciendis doloremque voluptate velit est harum sit doloribus odit,
        placeat ut? Perferendis ullam nobis odit ipsa sapiente veniam suscipit
        voluptates quasi, voluptas expedita possimus quia consectetur quam
        repellendus eum dignissimos officia nihil.
      </p>
    </>
  )
}
