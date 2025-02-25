import Button from "./Button";

export default function ButtonGroup({children}) {
  return (
    <section className="button-group">
      <Button type="secondary">Mark all as complete</Button>
      <Button type="secondary">Mark all as incomplete</Button>
      <Button type="secondary">Mark all as initial</Button>
      <Button type="secondary">Remove all items</Button>
    </section>
  )
}