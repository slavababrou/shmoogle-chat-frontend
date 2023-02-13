import Avatar from 'components/avatar';
import { useAppSelector } from 'shared/hooks/app-selector.hook';
import {
  Account,
  BtnAddAcc,
  BtnControleAccount,
  BtnExit,
  Container,
  ExitWrapper,
  Footer,
  Login,
  Text,
  UserName,
  WrapperAddAccount,
} from './styled';

const UserMenu = () => {
  const { user } = useAppSelector((state) => state.userReducer);

  return (
    <Container>
      <Account>
        <Avatar src={user?.avatarUrl} size={'90px'} label={user?.username[0] || 'u'} />
        <UserName>{user?.username}</UserName>
        <Login>{user?.login}</Login>
        <BtnControleAccount>Управление аккаунтом Google</BtnControleAccount>
      </Account>
      <hr />
      <WrapperAddAccount>
        <BtnAddAcc>Добавить аккаунт</BtnAddAcc>
      </WrapperAddAccount>
      <hr />
      <ExitWrapper>
        <BtnExit>Выйти</BtnExit>
      </ExitWrapper>
      <hr />
      <Footer>
        <Text href="https://policies.google.com/privacy?hl=ru" target="_blank">
          Политика конфиденциальности
        </Text>
        <Text href="https://policies.google.com/terms?hl=ru" target="_blank">
          Условия использования
        </Text>
      </Footer>
    </Container>
  );
};

export default UserMenu;
