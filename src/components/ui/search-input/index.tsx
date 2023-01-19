import { FC, useState, memo, ChangeEvent } from 'react';

import { BlankDiv, SearchInputContainer, StyledSearchInput } from './styled';
import Tooltip from '../../tooltip';
import RoundButton from '../round-button';
import CrossSvg from 'components/svg/cross-svg';
import SearchSvg from 'components/svg/search-svg';

const SearchInput: FC = memo(() => {
  const [inputValue, setInputValue] = useState('');

  const changeValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <SearchInputContainer>
      <Tooltip text="Поиск">
        <RoundButton size="24px" padding="8px" margin="0 8px">
          <SearchSvg />
        </RoundButton>
      </Tooltip>
      <StyledSearchInput
        onChange={changeValueHandler}
        placeholder="Поиск людей, чат-групп и сообщений"
      ></StyledSearchInput>
      {inputValue ? (
        <Tooltip text="Удалить поисковой запрос">
          <RoundButton size="24px" padding="8px" margin="0 8px">
            <CrossSvg />
          </RoundButton>
        </Tooltip>
      ) : (
        <BlankDiv padding="25px"></BlankDiv>
      )}
    </SearchInputContainer>
  );
});

SearchInput.displayName = 'SearchInput';

export default SearchInput;
