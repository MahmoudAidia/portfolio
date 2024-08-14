import Modal from "/src/UI/Modal";
import "./MobileNav.scss";
import { Close } from "@mui/icons-material";
import { motion } from "framer-motion";
function MobileNav({ setOpenNav }) {
  const elements = [
    { title: "About", secId: "about-sec" },
    { title: "Projects", secId: "projects-sec" },
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
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: id / 10 + 1 }}
              key={id}
              onClick={() => setOpenNav((prev) => !prev)}
            >
              <a href={`#${item.secId}`} className="nav-item">
                {item.title}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </Modal>
  );
}

export default MobileNav;
