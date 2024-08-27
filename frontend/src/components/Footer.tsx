const Footer = () => {
  return (
    <footer className="bg-blue-800 py-10">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-tight">
          Book My Hotel
        </span>
        <nav className="text-white font-bold tracking-tight flex gap-4">
          <p className="cursor-pointer">Privacy Policy</p>
          <p className="cursor-pointer">Terms of Service</p>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;