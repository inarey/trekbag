import Button from "./Button";

export default function ButtonGroup({children}) {

  const secondaryButtons = [
    "Mark all as complete",
    "Mark all as incomplete",
    "Mark all as initial",
    "Remove all items"
  ]

  return (
    <section className="button-group">
      {secondaryButtons.map(text => {
        return <Button key={text} type="secondary">{text}</Button>
      })}
    </section>
  )
}