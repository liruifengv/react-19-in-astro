import { useActionState } from "react"
import { experimental_withState } from "@astrojs/react/actions"
import { actions } from "astro:actions";

export function Form() {
  const [state, submitAction, isPending] = useActionState(
    experimental_withState(actions.updateName),
    ""
  );

  return (
    <form action={submitAction}>
      <input type="text" name="name" placeholder="name"/>
      <button type="submit" disabled={isPending}>Update</button>
      
      {state}
    </form>
  )
}