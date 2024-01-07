import useFirestore from "../hooks/useFirestore";

const ImageGrid = () => {
  const { docs } = useFirestore("images");
  console.log(docs);
  return (
    <>
      <div className="img-grid">
        {docs &&
          docs.map((doc) => {
            return (
              <div key={doc.id} className="img-wrap">
                <img src={doc.url} alt="Upload pic" />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ImageGrid;
