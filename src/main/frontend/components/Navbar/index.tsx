import Link from "next/link";
import { Flex, Box, Button, Text } from "@chakra-ui/react";
import { MdShoppingCart } from "react-icons/md";
import { useContext } from "react";
import CartContext from "@/lib/context/Cart";

const NavBar = () => {
  const { items }: any = useContext(CartContext);

  const itemsCount: any = Object.values(items).reduce(
    (x: any, y: any) => x + y,
    0
  );

  return (
    <Box
      position={"fixed"}
      top={0}
      left={0}
      w={"full"}
      bgColor={"white"}
      boxShadow={"md"}
    >
      <Flex
        width={"container.xl"}
        m={"auto"}
        p={"5"}
        justifyContent={"space-around"}
      >
        <Link href={"/"} passHref>
          <Text textColor={"blue.800"} fontWeight={"bold"} fontSize={"2xl"}>
            My e-commerce
          </Text>
        </Link>
        <Box>
          <Link href={"/cart"} passHref>
            <Button>
              <MdShoppingCart />
              <Text ml={"3"}>{itemsCount}</Text>
            </Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default NavBar;
