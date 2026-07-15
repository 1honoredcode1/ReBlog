import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Moment from "moment";

import { blogData, commentsData } from "../assets/assets";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

const Blog = () => {
  const { id } = useParams();

  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const fetchBlogData = async () => {
    const data = blogData.find((item) => item._id === id);
    setData(data);
  };

  const fetchComments = async () => {
    setComments(commentsData);
  };

  const addComment = async (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    fetchBlogData();
    fetchComments();
  }, []);

  return data ? (
    <div className="relative">
      <NavBar />
      {/* BLOG HEADER */}
      <div className="text-center mt-20 text-secondary/90">
        <p className="text-primary py-4 font-medium">
          Published on {Moment(data.createdAt).format("Do MMMM YYYY")}
        </p>
        <h1 className="text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-secondary/80">
          {" "}
          {data.title}
        </h1>
        <h2 className="my-5 max-w-lg truncate mx-auto"> {data.subtitle}</h2>
        <p
          className="inline-block py-1 px-4 rounded-full mb-6 border text-sm border-primary/40 
        bg-primary/7 font-medium text-primary"
        >
          HonoredCode
        </p>
      </div>
      {/* BLOG CONTENT */}
      <div className="mx-5 max-w-5xl md:mx-auto my-10 mt-6">
        <img src={data.image} alt={data.title} className="rounded-4xl mb-5" />
        <div className="text-secondary/80 leading-relaxed font-bold text-4xl">
          {data.description}
        </div>
        {/* COMMENT SECTION */}
        <div className="mt-14 mb-10 max-w-3xl mx-auto">
          <p className="font-semibold mb-5">Comments ({comments.length})</p>
          <div className="flex flex-col gap-4">
            {comments.map((item, index) => (
              <div
                className="relative bg-primary/5 border border-primary/8 max-w-xl
              p-4 rounded text-secondary"
                key={index}
              >
                <div className="flex items-center gap-2 mb-2">
                  <img
                    src="/toji.jpg"
                    alt={item.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <p className="font-semibold text-secondary/80">{item.name}</p>
                </div>
                <p className="text-sm max-w-md ml-8">{item.content}</p>
                <div className="absolute right-4 bottom-3 flex items-center gap-2 text-xs">
                  {Moment(item.createdAt).fromNow()}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* COMMENT FORM */}
        <div className="max-w-3xl mx-auto">
          <p className="font-semibold mb-5">Add your comment</p>
          <form
            onSubmit={addComment}
            className="flex flex-col items-start gap-4 max-w-lg"
          >
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded outline-none"
            />
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Your comment"
              className="w-full p-2 border border-gray-300 rounded outline-none h-48"
              required
            />
            <button
              type="submit"
              className="bg-primary text-white rounded p-2 px-8 hover:scale-102 transition-all cursor-pointer"
            >
              Submit Comment
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <div>
      <Loading />
    </div>
  );
};

export default Blog;
