import Button from "../../components/button";
import { Container, Background, AnimationContainer, Content } from "./styles";
import { Link } from "react-router-dom";

const Singup = () => {
  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <form>
            <h1>Cadastro</h1>
            <input></input>
            <input></input>
            <input></input>
            <input></input>
          </form>
          <Button>Enviar</Button>
          <p>
            Já tem uma conta? Faça seu <Link to="/link">Login</Link>
          </p>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default Singup;
