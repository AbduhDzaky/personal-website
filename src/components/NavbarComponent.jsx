import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const sections = [
  { id: "home", text: "Home" },
  { id: "about", text: "About" },
  { id: "certificate", text: "Certificate" },
  { id: "project", text: "Project" },
  { id: "activity", text: "Activity" },
];

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener("scroll", changeBackgroundColor);
    return () => {
      window.removeEventListener("scroll", changeBackgroundColor);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
        <Container>
          <Navbar.Brand href="#home" className="fs-5 fw-bold">
            AbduhDzaky.
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              {sections.map((section) => (
                <div className="nav-link" key={section.id}>
                  <Nav.Link
                    onClick={() => scrollToSection(section.id)}
                    className="cursor-pointer"
                  >
                    {section.text}
                  </Nav.Link>
                </div>
              ))}
            </Nav>

            <div className="text-center">
              <button className="btn rounded-1">Let’s Talk!</button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
