import React from 'react';
import './chatPostList.css';

import Post from '../ChatPost/index';

class PostList extends React.Component {

  // Estado
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Alexandre Felix",
          avatar: "https://avatars1.githubusercontent.com/u/22612285?s=460&v=4"
        },
        date: "31 Jan 2020",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://avatars0.githubusercontent.com/u/2254731?s=460&v=4"
            },
            content: "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Fernando Ued",
          avatar: "https://avatars1.githubusercontent.com/u/22828912?s=460&v=4"
        },
        date: "29 Jan 2020",
        content: "Alguém sabe se o Elson vai dar aula amanhã? Estou com saudades da voz dele.",
        comments: [
          {
            id: 1,
            author: {
              name: "Alexandre Felix",
              avatar: "https://avatars1.githubusercontent.com/u/22612285?s=460&v=4"
            },
            content: "Manolo se esta com saudades da voz do Elsão eu posso resolver seu problema. Me ligue!"
          },
          {
            id: 2,
            author: {
              name: "Fernando Ued",
              avatar: "https://avatars1.githubusercontent.com/u/22828912?s=460&v=4"
            },
            content: "Uiiiiiiiiiii que delícia!"
          }
        ]
      }
    ],
  };

  render() {
    return(
      <div className="post-list">

       {this.state.posts.map(post => <Post key={post.id} data={post} />)}
       
      </div>
    )
  };
}

export default PostList;

