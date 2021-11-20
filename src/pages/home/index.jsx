import { useHistory } from "react-router";
import Button from "../../components/button/index.jsx";
import { Container, Content } from "./style.js";

export default function Home() {
  const history = useHistory();

  const handleNavegation = (path) => {
    return history.push(path);
  };

  return (
    <Container>
      <Content>
        <h1>
          Do<span>.</span>it
        </h1>
        <span>Organize-se de forma mais fácil e efetiva !</span>
        <div>
          <Button whiteSchema onClick={() => handleNavegation("/signup")}>
            Cadastre-se
          </Button>
          <Button onClick={() => handleNavegation("/login")}>Login</Button>
        </div>
      </Content>
    </Container>
  );
}
