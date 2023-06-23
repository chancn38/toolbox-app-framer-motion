import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

interface ItemProps {
    id: number;
    icon: string;
    link: string;
    placeholder: string;
    color: string;
  }

export const MenuItem = ({ icon, link, placeholder, color }:ItemProps) => {
  const style = { border: `2px solid ${color}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-placeholder" style={style}> {icon} </div>
      <div className="text-placeholder" style={style}> 
        <Link to={link}>{placeholder}</Link>
     </div>
    </motion.li>
  );
};
