import Button from "./Button";
import { secondaryButtons } from "./lib/constants";

export default function ButtonGroup({children}) {

  return (
    <section className="button-group">
      {secondaryButtons.map(text => {
        return <Button key={text} type="secondary">{text}</Button>
      })}
    </section>
  )
}