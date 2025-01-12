import styled from 'styled-components';

export const MessageWrapper = styled.div<MessageWrapperProps>`
  display: flex;
  margin-top: ${(props) => props.marginTop};
`;

export const MessageUserAvatar = styled.div<Hideable>`
  display: ${(props) => (props.hidden ? 'none' : 'inherit')};
  position: absolute;
  margin-left: -40px;
`;

export const MessageInfo = styled.div<Hideable>`
  display: ${(props) => (props.hidden ? 'none' : 'flex')};
  align-items: baseline;
  gap: 5px;
  margin-top: -4px;
`;

export const MessageDate = styled.label`
  color: ${({ theme }) => theme.text.secondaryColor};
  font-size: 0.7rem;
`;

export const MessageText = styled.p`
  padding: 0;
  margin: 5px 0;
`;

interface Hideable {
  hidden?: boolean;
}

interface MessageWrapperProps {
  marginTop?: string;
}
