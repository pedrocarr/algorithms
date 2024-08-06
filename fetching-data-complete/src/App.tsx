import { useEffect, useRef, useState } from 'react'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

type Post = {
  id: number
  title: string
}


export function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [posts, setPosts] = useState<Post[]>([])
  const [error, setError] = useState()
  const [page, setPage] = useState(0)
  const abortControllerRef = useRef<AbortController | null>(null);



  useEffect(() => {
    const fecthPosts = async () => {
      abortControllerRef.current?.abort()
      abortControllerRef.current = new AbortController()
      setIsLoading(true)

    try {
        const response = await fetch(`${BASE_URL}/posts?_page=${page}`, {
          signal: abortControllerRef.current?.signal
        })
        const posts = await response.json() as Post[]
        setPosts(posts)
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      catch (error: any) {
        if (error.name === 'AbortError') {
          console.log('Fetch aborted')
          return
        }
        setError(error)
      }
      finally {
        setIsLoading(false)
      }
    }

    fecthPosts()


  }, [page])


  if (error) {
    return <div>Something went wrong. Try it again!!!</div>
  }

  return (
    <div className="text-center">
        <h1 className='mb-4 text-2xl'>Data Fetching in React</h1>
        <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-4'
        onClick={() => setPage(page + 1)}>Next Page {page}</button>
        {isLoading && <div>Loading...</div>}

        {!isLoading &&
        (
        <ul className='mt-4'>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>

        )}
    </div>
  )
}

