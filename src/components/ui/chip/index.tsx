import Avatar from 'components/avatar';
import CrossSvg from 'components/svg/cross-svg';
import { FC } from 'react';
import RoundButton from '../round-button';
import { ChipLabel, StyledChip } from './style';

interface ChipProps {
  name?: string;
  imageSrc?: string;
  onButtonClick?: (event?: any) => void;
}

// TODO: make passing one of the props necessary
const Chip: FC<ChipProps> = (props: ChipProps) => {
  const { name, imageSrc, onButtonClick } = props;

  return (
    <StyledChip>
      {name && !imageSrc ? <Avatar label={name[0]} size="20px" /> : <></>}
      {!name && imageSrc ? <Avatar src={imageSrc} label="" size="20px" /> : <></>}
      {name ? <ChipLabel>{name}</ChipLabel> : <></>}
      <RoundButton size="16px" onClick={onButtonClick}>
        <CrossSvg />
      </RoundButton>
    </StyledChip>
  );
};

Chip.displayName = 'Chip';

export default Chip;
