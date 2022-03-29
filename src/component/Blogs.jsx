import Card from "./Card";

const Blogs = ({ blogLists }) => {
  return (
    <div className="container">
      <div className="grid-container">
        {blogLists.map((data, index) => {
          const { title, description, author } = data;
          return (
            <Card
              key={index}
              title={title}
              description={description}
              author={author}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
