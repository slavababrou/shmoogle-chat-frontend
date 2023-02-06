import Avatar from 'components/avatar';
import { User } from 'core/entities/user.entity';
import { FC } from 'react';
import {
  StyledUserSearchResult,
  UserSearchResultAvatarContainer,
  UserSearchResultInfo,
  UserSearchResultLogin,
} from './styled';

interface UserSearchResultProps {
  user: User;
}

const UserSearchResult: FC<UserSearchResultProps> = (props: UserSearchResultProps) => {
  const { user } = props;

  return (
    <StyledUserSearchResult>
      <UserSearchResultAvatarContainer>
        <Avatar size="32px" src={user.avatarUrl} label={user.username[0]} />
      </UserSearchResultAvatarContainer>
      <UserSearchResultInfo>
        <span>{user.username}</span>
        <UserSearchResultLogin>{user.login}</UserSearchResultLogin>
      </UserSearchResultInfo>
    </StyledUserSearchResult>
  );
};

UserSearchResult.displayName = 'UserSearchResult';

export default UserSearchResult;
