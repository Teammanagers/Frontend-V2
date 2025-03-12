import styled from 'styled-components';
import mocks from '@/entities/todo/mocks/get-todo-list.json';

import { ITeamTodoList } from '@/entities/todo/todo.type';
import { ImageUploadModal, Todo } from '@/entities/todo/ui';
import { Accordion } from '@/shared/components/accordion';
import TodoProvider from '@/app/providers/TodoContext';
import { useToggle } from '@/shared/hooks';

export function TodoList() {
  const mockData = mocks.result.teamTodoList as ITeamTodoList[];
  const myTodoId = mocks.result.ownerTeamManageId;

  const { isOpen, toggle } = useToggle();

  return (
    <TodoProvider
      value={{
        isOpen,
        toggle,
      }}
    >
      {/* // 투두 리스트 전체를 덮는 Container 컴포넌트 */}
      <Container>
        {/* 팀원별 투두 리스트(아코디온)들을 조절하는 Wrapper 레이아웃 컴포넌트 */}
        <TodosWrapper>
          {mockData.map((teamMember) => (
            <Accordion
              key={teamMember.teamManageId}
              title={teamMember.name}
              tagList={teamMember.roleTagList.map((tag) => tag.name)}
            >
              {teamMember.todoList.map((todo, idx) => (
                <Todo
                  buttonType={
                    // 내 투두이면 'menu', 아니면 'alarm' 버튼을 렌더링
                    myTodoId === teamMember.teamManageId ? 'menu' : 'alarm'
                  }
                  key={`${teamMember.teamManageId}-todo-${todo.todoId}-${idx}`}
                >
                  {todo.title}
                </Todo>
              ))}
            </Accordion>
          ))}
        </TodosWrapper>
      </Container>

      <ImageUploadModal isOpen={isOpen} toggle={toggle} />
    </TodoProvider>
  );
}

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-width: 900px;
  width: 70vw;
  height: 552px;
  padding: 32px 0;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: #ffffff;
  overflow: auto;
`;

const TodosWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: stretch;
  row-gap: 36px;
  column-gap: 24px;
  box-sizing: border-box;

  // width: 88%;
  width: 788px;
  margin: 0 auto;

  @media (min-width: 1920px) {
    width: 1194px;
  }
`;
