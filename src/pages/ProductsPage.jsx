import axios from "axios";
import { useState, useEffect } from "react";

const ProductsPage = () => {
  const [posts, setPosts] = useState(null); // Correzione di "useStete" in "useState"
  const baseApiUrl = "http://localhost:3000";

  const fetchData = () => {
    axios
      .get(`${baseApiUrl}/posts`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log("Errore nel caricamento");
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-center">PRODOTTI</h1>
      <ul className="list-group">
        {posts &&
          posts.map((post) => (
            <li key={post.id} className="list-group-item">
              {post.title}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
