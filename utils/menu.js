import { list, check, todo, home } from "./Icons";

export const menu = [
  {
    id: 1,
    title: "All tasks",
    icon: home,
    link: "/",
  },
  {
    id: 2,
    title: "Importants",
    icon: list,
    link: "/important",
  },
  {
    id: 3,
    title: "Completed!",
    icon: check,
    link: "/completed",
  },
  {
    id: 4,
    title: "Do it now",
    icon: todo,
    link: "/incomplete",
  },
];
