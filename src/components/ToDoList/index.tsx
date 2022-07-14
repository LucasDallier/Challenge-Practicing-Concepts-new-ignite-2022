//Libs
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

//Assets
import Logo from "../../assets/Logo.svg";

//Styles
import {
  Container,
  Header,
  ContentForm,
  ContentList,
  HeaderList,
  Content,
  ListTasks,
  Task,
} from "./styles";

function ToDoList() {
  const [taskCreated, setTaskCreated] = useState(0);
  const [taskConcluded, setTaskConclued] = useState(0);

  // id: Date.now(),

  const test = [
    "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
  ];

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

          <ListTasks>
            {test.map((p) => {
              return (
                <Task>
                  <label className="check">
                    <input type="checkbox" />
                    <div className="box"></div>
                  </label>

                  <span>{p}</span>
                  <FontAwesomeIcon icon={faTrashAlt} />
                </Task>
              );
            })}
          </ListTasks>
        </ContentList>
      </Content>
    </Container>
  );
}

export default ToDoList;
