import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const AddPost = () => {
  const initialFormData = {
    title: "",
    image: "",
    content: "",
    tags: [],
  };

  const navigate = useNavigate();

  const baseApiUrl = "http://localhost:3000";

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleAddPost = (e) => {
    e.preventDefault();
    const tagsArray = formData.tags.split("-").map((tag) => tag.trim());
    const newPost = { ...formData, tags: tagsArray };

    axios.post(`${baseApiUrl}/posts`, newPost).then((res) => {
      setFormData(initialFormData);
      navigate("/prodotti");
    });
  };

  return (
    <>
      <div className="container my-5">
        <div className="card">
          <div className="card-body">
            <h1 className="my-5 text-center">CREA UN NUOVO POST</h1>
            <div className="container my-3">
              <div className="card">
                <div className="card-body">
                  <form action="" onSubmit={handleAddPost}>
                    <div className="mb-3">
                      <label htmlFor="title">Titolo Post</label>
                      <input
                        id="title"
                        type="text"
                        name="title"
                        className="form-control"
                        placeholder="Titolo Post"
                        value={formData.title}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="content">Descrizione:</label>
                      <textarea
                        id="content"
                        type="text"
                        name="content"
                        className="form-control"
                        placeholder="Titolo Post"
                        value={formData.content}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="image">URL immagine</label>
                      <input
                        id="image"
                        type="text"
                        name="image"
                        className="form-control"
                        placeholder="URL immagine"
                        value={formData.image}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="Tags">Tags (separati da trattino)</label>
                      <input
                        id="tags"
                        type="text"
                        name="tags"
                        className="form-control"
                        placeholder="Es. Dolci - Cioccolaro"
                        value={formData.tags}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <button className="btn btn-warning" type="submit">
                        Aggiungi Post
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPost;
