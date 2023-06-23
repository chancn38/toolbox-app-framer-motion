import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { SidebarMenu } from "../../data/SidebarMenu";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = () => (
  <motion.ul variants={variants}>
    {SidebarMenu.map((item,index) => (
      <MenuItem id={item.id} icon={item.icon} link={item.link} placeholder={item.placeholder} key={index} color={item.color} />
    ))}
  </motion.ul>
);

