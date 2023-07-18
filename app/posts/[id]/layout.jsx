import React from 'react';
import Link from 'next/link';
const fetchSinglePost = (id) => {
 return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
        revalidate: 60
    }
})
.then(res => res.json())
}

export default async function OnePost ({ children, params }) {
    const {id} = params
    const post = await fetchSinglePost(id)

    return (
        <article  className='card'style={{width: '60rem', margin: 'auto'}}>
          <div className="card-body"> 
            <h2>{post.title}</h2>
            <p>{post.body}</p>
           <Link type="button" className="btn btn-primary" href={`/posts/${id}/comments`} > Ver comentarios </Link>
          <section style={{padding: '3rem'}}> 
          {children}
          </section>
           
           </div>
        </article>
    );
}


