import { TListProps } from ".";

export const List = ({
  items,
  ...ulProps
}: TListProps &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  >): JSX.Element => {
  return (
    <ul {...ulProps}>
      {items.map((listItem, index) => {
        return <li key={index}>{listItem}</li>;
      })}
    </ul>
  );
};
