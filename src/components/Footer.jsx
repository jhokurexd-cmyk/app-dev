function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <p>© {year} Jhonard Kurt Reyes. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
