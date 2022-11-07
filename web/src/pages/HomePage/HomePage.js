// import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />


      <p>
        This site was created to demonstrate my mastery of Redwood: Look on my
        works, ye mighty, and despair!
      </p>
      <ArticlesCell />

    </>
  )
}

export default HomePage
