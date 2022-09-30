import React from "react";
import { Link } from "react-router-dom";

const posts = [
  //더미 데이터 디자인 체크를 위한
  {
    id: 1,
    title: "여기는 제목이 들어갈 위치입니다.",
    desc: "여기는 내용이 들어갈 위치입니다.",
    img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    title: "여기는 제목이 들어갈 위치입니다.",
    desc: "여기는 내용이 들어갈 위치입니다.",
    img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    title: "여기는 제목이 들어갈 위치입니다.",
    desc: "여기는 내용이 들어갈 위치입니다.",
    img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];
function Home() {
  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt=""></img>
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
