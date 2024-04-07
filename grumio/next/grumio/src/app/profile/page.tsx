import { getSession } from 'next-auth/react'
import Head from 'next/head'

export default function Profile({ user }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold mb-4">Profile</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-lg">Name: {user.name}</p>
          <p className="text-lg">Email: {user.email}</p>
          <p className="text-base">AboutMe: {user.description}</p>
          <div class="h-40 w-96 p-2 bg-gray-200 flex flex-wrap content-around"> {/*this will display a user's recipes... one day*/}
            <div class="px-10 py-2 bg-white rounded">1</div>
            <div class="px-10 py-2 bg-white rounded">2</div>
            <div class="px-10 py-2 bg-white rounded">3</div>
            <div class="px-10 py-2 bg-white rounded">4</div>
            <div class="px-10 py-2 bg-white rounded">5</div>
            <div class="px-10 py-2 bg-white rounded">6</div>
           </div>
          {/* Add more profile information here */}
        </div>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)

  if (!session || !session.user) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  const user = session.user

  return {
    props: {
      user,
    },
  }
}
