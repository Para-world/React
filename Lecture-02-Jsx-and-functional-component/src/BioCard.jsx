

// Functional Component
function BioCard() {
  const name = "Para Lengend";
  const interest = "React & Modern Web Development";

  return (
    <div className="p-6 bg-white text-gray-800 shadow-lg rounded-xl border border-gray-200 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-2">Hello, {name} 😊</h2>
      <p className="mb-1">I am passionate about <span className="text-blue-600 font-medium">{interest}</span>.</p>
      <p>12 + 3 = <span className="font-semibold">{2 + 3}</span></p>
      <p>12 - 3 = <span className="font-semibold">{12 - 3}</span></p>
      <p>12 * 3 = <span className="font-semibold">{12 * 3}</span></p>
      <p>12 / 3 = <span className="font-semibold">{12 / 3}</span></p>
      <p>12 % 3 = <span className="font-semibold">{12 % 3}</span></p>
      <p>12 ** 3 = <span className="font-semibold">{12 ** 3}</span></p>
      
    </div>
  );
}

export default BioCard;