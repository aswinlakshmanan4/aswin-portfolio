const Header = () => {
  return (
    <header className="container mx-10">
      <nav className="mt-8 mb-8 p-4">
        <div className="flex justify-between items-center">
          <span>MAL</span>
          <ul className="flex space-x-4 justify-end">
            <li>
              <a href="/home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
