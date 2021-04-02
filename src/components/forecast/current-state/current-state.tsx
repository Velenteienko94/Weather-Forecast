import { TCurrentStateProps } from "..";

export const CurrentState = ({
  description,
  locationName,
  temperature,
}: TCurrentStateProps): JSX.Element => {
  return (
    <div>
      <p>{description}</p>
      <p>{temperature}</p>
      <p>{locationName}</p>
    </div>
  );
};
