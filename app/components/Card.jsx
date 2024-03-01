const Card = ({ item, title, content }) => {
  return (
    <div className="bg-black p-6 rounded-lg shadow-lg text-center">
      <div className="flex justify-between">
        <h2 className="text-8xl font-bold mb-2 text-gray-900">{item}</h2>
        <h3 className="text-xl mb-2">{title}</h3>
      </div>
      <p className="text-gray-400">{content}</p>
    </div>
  );
};

export default Card;
