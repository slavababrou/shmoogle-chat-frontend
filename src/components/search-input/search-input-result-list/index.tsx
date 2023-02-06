import { FC, memo, useEffect, useMemo, useState } from 'react';

import { User } from 'core/entities/user.entity';
import { useAppSelector } from 'shared/hooks/app-selector.hook';
import { UserService } from 'shared/services/user.service';
import { ResultContainer, StyledSearchInputResultsList } from './styled';
import UserSearchResult from '../user-search-result';
import ChatSearchResult from '../chat-search-result';

interface SearchInputResultsListProps {
  filterValue: string;
  chatClickHandler: (chatId: number) => void;
  userClickHandler: (userId: number, chatId?: number) => void;
}

function fetchUsers() {
  return UserService.Instance.getAll();
}

// TODO: improve filter;
const SearchInputResultsList: FC<SearchInputResultsListProps> = memo((props: SearchInputResultsListProps) => {
  const { filterValue, chatClickHandler, userClickHandler } = props;
  const [users, setUsers] = useState<User[]>([]);

  const { user, chats } = useAppSelector((state) => state.userReducer);

  const filterUsers = useMemo(
    () => users.filter((u) => u.login.includes(filterValue) || (u.username.includes(filterValue) && u.id != user?.id)),
    [filterValue],
  );
  const filterChats = useMemo(() => chats.filter((ch) => ch.name.includes(filterValue) && ch.isGroup), [filterValue]);

  const findDmByUserId = (userId: number) => {
    return chats.find((chat) => !chat.isGroup && chat.users.find((u) => u.id === userId))?.id;
  };

  useEffect(() => {
    fetchUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  return (
    <StyledSearchInputResultsList>
      {filterUsers.length && filterValue ? (
        filterUsers.map((u) => (
          <ResultContainer key={u.id} onClick={() => userClickHandler(u.id, findDmByUserId(u.id))}>
            <UserSearchResult user={u} />
          </ResultContainer>
        ))
      ) : (
        <></>
      )}
      {filterChats.length && filterValue ? (
        filterChats.map((chat) => (
          <ResultContainer key={chat.id} onClick={() => chatClickHandler(chat.id)}>
            <ChatSearchResult chat={chat} />
          </ResultContainer>
        ))
      ) : (
        <></>
      )}

      {!filterUsers.length && !filterChats.length && filterValue ? <div>Совпадений нет</div> : <></>}
    </StyledSearchInputResultsList>
  );
});

SearchInputResultsList.displayName = 'SearchInputResultsList';

export default SearchInputResultsList;
