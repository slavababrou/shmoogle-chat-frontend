import { FC, memo } from "react";

export const ManagerSvg: FC<{}> = memo(() => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      fill="green"
      style={{ marginBottom: "-8px" }}
    >
      <path d="M-618-1848H782v3600H-618zM0 0h24v24H0z" fill="none"></path>
      <path d="M12 5l-7 7 7 7 7-7-7-7zm-4.17 7L12 7.83 16.17 12 12 16.17 7.83 12z"></path>
    </svg>
  );
});
