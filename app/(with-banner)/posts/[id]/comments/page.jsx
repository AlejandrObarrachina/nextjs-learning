const fetchComments = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json())
}

export default async function Post({ params }) {
  const { id } = params
  const comments = await fetchComments(id)

  return (
    <ul style={{ background: '#ccc', fontSize: '10px' }}>
      {comments.map((comment) => (
        <li style={{ padding: '1rem' }} key={comment.id}>
          <h2 style={{ color: '#444' }}>{comment.name}</h2>
          <p style={{ color: '#444' }}>{comment.body}</p>
        </li>
      ))}
    </ul>
  )
}
