import { GreetProps } from "./greet2.types";

export const Greet2 = (props: GreetProps) => {
  return <div>Hello {props.name ? props.name : "Guest"}</div>;
};
