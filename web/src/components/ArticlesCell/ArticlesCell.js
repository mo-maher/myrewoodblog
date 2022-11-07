import { Link, routes } from '@redwoodjs/router'
import Article from 'src/components/Article'

export const QUERY = gql`
  query ArticlesQuery {
   articles : posts {
      id,
      title,
      body,
      createdAt

    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ articles }) => {
  return (
    <ul>
      {articles.map((article) => {
        return (
          //<li key={item.id}>{JSON.stringify(item)}</li>
          <Article key={article.id} article={article} />

        )
      })}
    </ul >
  )
}
