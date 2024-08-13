import Modal from "/src/UI/Modal";
import "./MobileNav.scss";
import { Close } from "@mui/icons-material";
function MobileNav({ setOpenNav }) {
  const elements = [
    { title: "Projects", secId: "projects-sec" },
    { title: "About", secId: "about-sec" },
    { title: "Contacts", secId: "contacts-sec" },
  ];
  return (
    <Modal setOpen={setOpenNav}>
      <nav className="mobileNav">
        <div>
          <Close onClick={() => setOpenNav((prev) => !prev)} />
        </div>
        <ul>
          {elements.map((item, id) => (
            <li key={id} onClick={() => setOpenNav((prev) => !prev)}>
              <a href={`#${item.secId}`} className="nav-item">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </Modal>
  );
}

export default MobileNav;
