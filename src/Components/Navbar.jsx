// import { useSelector } from "react-redux";
// import { Link, NavLink } from "react-router-dom";
// import {Badge, Flex} from '@radix-ui/themes'

// const Navbar = () => {
//   const cartItems = useSelector((state) => state.cart.items);
//   return (
//     <nav className="sticky top-0 bg-gray-600 text-white p-4 shadow-lg">
//       <div className="max-w-6xl mx-auto flex justify-between items-center">
//         <Link
//           to="/"
//           className="text-2xl font-bold hover:text-white-200 transition-colors"
//         >
//           ShopApp
//         </Link>

//         <div className="flex items-center space-x-6">
//           <NavLink
//             to="/products"
//             className={({ isActive }) =>
//               `px-4 py-2 rounded  ${
//                 isActive ? "bg-white-800" : "hover:bg-gray-700"
//               }`
//             }
//           >
//             Products
//           </NavLink>

//           <NavLink
//             to="/cart"
//             className="relative p-2 hover:bg-white-700 rounded transition-colors"
//           >
//             <span className="text-2xl">🛒</span>
//             <span className="absolute -top-0 -right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-sm">
//               {cartItems.length ? cartItems.length :0}
//             </span>
//           </NavLink>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { Flex, Text, Box, Badge } from "@radix-ui/themes";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Box className="sticky top-0 bg-gray-600 text-white shadow-lg z-50">
      <Flex
        className="max-w-6xl mx-auto px-4 py-3"
        justify="between"
        align="center"
      >
        <Text as="div" size="5" weight="bold">
          <Link to="/" className="text-white hover:opacity-80">
            ShopApp
          </Link>
        </Text>

        <Flex gap="4" align="center">
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `px-4 py-2 rounded ${
                isActive ? "bg-white/20" : "hover:bg-white/10"
              } transition-colors`
            }
          >
            <Text size="3" className="text-white">
              Products
            </Text>
          </NavLink>

          <NavLink
            to="/cart"
            className="relative p-2 hover:bg-white/10 rounded transition-colors"
          >
            <Text size="4" className="text-white">
              🛒
            </Text>

            {cartItems.length > 0 && (
              <Badge
                color="red"
                variant="solid"
                radius="full"
                className="absolute -top-1 -right-1 text-xs w-5 h-5 flex items-center justify-center"
              >
                {cartItems.length}
              </Badge>
            )}
          </NavLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
