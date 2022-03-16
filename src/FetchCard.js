//? Juan Gallardo 16-03-2022
import React, { useEffect, useState, useCallback } from 'react'
import getPosts from './helpers/getPosts';
import getUser from './helpers/getUser';

// const initialUser = {
//     name:"Nombre",
//     email: "correo@gmail.com"
// }

// const initialPosts = [
//     {
//         id: 1,
//         title: "Post 1",
//     },
//     {
//         id: 2,
//         title: "Post 2",
//     },
// ]

const FetchCard = () => {
    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);

    const updateUser = () => {
        getUser()
            .then((newUser) => {
                setUser(newUser);   
            })
    }

    // const updatePosts = () => {
    //     getPosts(user.id)
    //         .then((newPosts) => {
    //             setPosts(newPosts);
    //         })
    // }

    //! Esto era necesario anteriormente ya que saltaba una alerta por aquellas funciones que eran reutulizadas, 
    //! o que solian cambiar, esto ya no ocurre asi que no es necesario, o al menos, no me ocurrio a mi
    const updatePosts = useCallback(() => {
        getPosts(user.id)
            .then((newPosts) => {
                setPosts(newPosts);
            })
    }, [user.id]);
    
    useEffect(() => {
        updateUser();
    }, []);

    useEffect(() => {
        if(user?.id){
            updatePosts();
        }
    }, [user, updatePosts]);

  return (
    <div>
        <h1>{user.name}</h1>
        <h2>{user.email}</h2>
        <button onClick={updateUser}>
            Cambiar Usuario
        </button>
        <br/>
        <h2> Posts - user: {user.name}</h2>
        <ul>
            {
                posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default FetchCard