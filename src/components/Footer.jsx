const Footer = () => {
  return (
    <footer className="w-full bg-linear-to-b from-primary/30 to-secondary/20 text-gray-800">
      <div className="max-w-7xl mx-auto py-5 flex flex-col items-center">
        <div className="flex items-center space-x-3">
          <img className="h-28" src="/logo.png" />
        </div>
        <a className="text-xl font-bold text-secondary">HonoredCode</a>
      </div>
    </footer>
  );
};
export default Footer;
