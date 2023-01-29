import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout/Layout'

export default function Home({movies}) {

  return (
    <div>
      <Layout>
      </Layout>
    </div> 
  )
}

export const getServerSideProps = async() => {
  const resData = await fetch('https://gbla-api.vercel.app/movies')
  const data = await resData.json();

    return {
      props: {
        movies: data
    }
  } 
}