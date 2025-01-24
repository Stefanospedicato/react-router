import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();
  const baseApiUrl = "http://localhost:3000";
  const [post, setPost] = useState(null);
  // const navigate = useNavigate();

  const fetchPost = () => {
    axios
      .get(`${baseApiUrl}/posts/${id}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log("Errore Post", err);
      });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <>
      <div className="card">
        <img
          src={post?.image}
          className="card-img-top img-fluid"
          alt={post?.title}
        />
        <div className="card-body">
          <h5 className="card-title">{post?.title}</h5>
          <p className="card-text">{post?.content}</p>
          <button className="btn btn-primary">Torna alla Lista</button>
          <button className="btn btn-danger">Elimina</button>
        </div>
      </div>
    </>
  );
};

export default PostDetail;
