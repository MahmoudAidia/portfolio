import "./Modal.scss";
import { motion } from "framer-motion";
function Modal({ setOpen, children }) {
  return (
    <div className="modal-box">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0 }}
        className="overlay"
        onClick={() => setOpen((prev) => !prev)}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="modal"
      >
        {children}
      </motion.div>
    </div>
  );
}

export default Modal;
