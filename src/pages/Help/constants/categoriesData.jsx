import { FiUser } from "react-icons/fi";
import { CiReceipt } from "react-icons/ci";

export const categoriesData = [
  {
    title: "Account",
    icon: <FiUser className="text-2xl" />,
    description: "Learn how to manage your account",
  },
  {
    title: "Ordering",
    icon: <CiReceipt className="text-2xl" />,
    description: "Everything you need to know about ordering in Sari Buana",
    topics: [
      { title: "How to order via WhatsApp Bot" },
      { title: "How to order via App" },
    ],
  },
];