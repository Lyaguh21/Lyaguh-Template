import { Button, Center, Flex, Text } from "@mantine/core";
import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <Center h="100vh">
      <Flex direction="column">
        <Text
          style={{ fontSize: "80px" }}
          fw={900}
          variant="gradient"
          gradient={{ from: "cyan", to: "#4f46e5", deg: 77 }}
        >
          ERROR 404
        </Text>
        <Center>
          <Link to="/">
            <Button variant="outline" color="#4f46e5">
              Вернуться на главную
            </Button>
          </Link>
        </Center>
      </Flex>
    </Center>
  );
}
