import { FC, memo } from "react";

import { AvatarLabel, AvatarWrapper } from "./styled";

interface AvatarProps {
  label: string;
  src?: string;
  size?: string;
}

export const Avatar: FC<AvatarProps> = memo((props: AvatarProps) => {
  const { label, src, size } = props;

  return (
    <AvatarWrapper size={size || ""} background={src ? "#fff" : "purple"}>
      {src ? <img src={src} /> : <AvatarLabel>{label}</AvatarLabel>}
    </AvatarWrapper>
  );
});
