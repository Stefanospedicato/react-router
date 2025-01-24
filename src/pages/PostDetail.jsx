import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();
  const baseApiUrl = "http://localhost:3000";
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

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

  const handleDeletePost = () => {
    axios
      .delete(`${baseApiUrl}/posts/${id}`)
      .then((res) => {
        navigate("/prodotti");
      })
      .catch((error) => {
        console.error("Errore", error);
      });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <>
      <div className="card">
        <img src={post?.image} className="card-img-top" alt={post?.title} />
        <div className="card-body">
          <h5 className="card-title">{post?.title}</h5>
          <p className="card-text">{post?.content}</p>
          <div className="d-flex justify-content-between">
            <button
              onClick={() => navigate("/prodotti")}
              className="btn btn-primary"
            >
              Torna alla Lista
            </button>
            <button onClick={handleDeletePost} className="btn btn-danger">
              Elimina
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetail;
