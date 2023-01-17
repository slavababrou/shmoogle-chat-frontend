import { ListCheckbox } from "components/ui/list-checkbox";
import { UserStatus } from "core/entities/status.entity";
import { FC, memo } from "react";
import { useAppSelector } from "shared/hooks/app-selector.hook";
import { NoBotherSvg } from "./no-bother-svg";
import { OfflineSvg } from "./offline-svg";
import { OnlineIcon, StatusSelectButton, StyledStatusSelect } from "./styled";

function renderSwitch(statusId: UserStatus) {
  switch (statusId) {
    case UserStatus.online:
      return (
        <>
          <OnlineIcon />
          <label>Онлайн</label>
        </>
      );

    case UserStatus.offline:
      return (
        <>
          <OfflineSvg />
          <label>Нет на месте</label>
        </>
      );
    case UserStatus.nobother:
      return (
        <>
          <NoBotherSvg />
          <label>Не беспокоить</label>
        </>
      );
  }
}

export const StatusSelect: FC<{}> = memo(() => {
  const { user } = useAppSelector((state) => state.userReducer);

  if (!user) {
    return <></>;
  }

  return (
    <StyledStatusSelect>
      {renderSwitch(user.statusId)}
      <StatusSelectButton>
        <ListCheckbox initialValue={true} />
      </StatusSelectButton>
    </StyledStatusSelect>
  );
});
