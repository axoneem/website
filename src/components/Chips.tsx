import Chip from "./Chip";

export default function Chips(props: { values: string[] }) {
  const { values } = props;
  return (
    <div className="flex flex-row gap-2">
      {values.map((value) => (
        <Chip key={value}>{value}</Chip>
      ))}
    </div>
  )
}
