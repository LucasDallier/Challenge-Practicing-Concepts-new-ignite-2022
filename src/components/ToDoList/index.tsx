import Logo from "../../assets/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Container,
  Header,
  ContentForm,
  ContentList,
  HeaderList,
  Content,
} from "./styles";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function ToDoList() {
  const [taskCreated, setTaskCreated] = useState(0);
  const [taskConcluded, setTaskConclued] = useState(0);

  return (
    <Container>
      <Header>
        <img src={Logo} alt="" />
      </Header>

      <Content>
        <ContentForm>
          <form>
            <input type="text" placeholder="Adicione uma nova tarefa" />

            <button type="button">
              <span>Criar</span>
              <FontAwesomeIcon icon={faCirclePlus} />
            </button>
          </form>
        </ContentForm>

        <ContentList>
          <HeaderList>
            <div>
              <span>Tarefas Criadas</span>
              <button type="button">{taskCreated}</button>
            </div>
            <div>
              <span>Concluídas</span>
              <button type="button">{taskConcluded}</button>
            </div>
          </HeaderList>
        </ContentList>
      </Content>
    </Container>
  );
}

export default ToDoList;
