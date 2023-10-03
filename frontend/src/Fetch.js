import React, {useState, useEffect} from 'react'

const Fetch = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/users', {method: 'GET'})
        .then(res => res.json())
        .then(data => {
            setPosts(data)
            console.log(data)
        })
    },[])

    return (
        <div>
            <ul>
        {

          posts.map(post =>
            <li key={post.id}>{JSON.stringify(post)}</li>
            )
        }
      </ul>
        </div>
    )
}

export default Fetch;