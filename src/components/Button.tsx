import { useFormState } from "react-dom"

export function Button() {
  return <button onClick={() => {
    alert('Hello, world!');
  }}>Click me!</button>;
}