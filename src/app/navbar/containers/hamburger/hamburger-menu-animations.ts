import {
  trigger,
  style,
  animate,
  transition,
  AnimationTriggerMetadata,
} from "@angular/animations";

export const menuAnimations: {
  readonly transformMenu: AnimationTriggerMetadata;
} = {
  transformMenu: trigger("transformMenu", [
    transition(":enter", [
      style({ transform: "translateX(-200px)", opacity: "0" }),
      animate(
        "100ms cubic-bezier(.09,.38,.38,1)",
        style({
          transform: "translateY(0)",
          opacity: "1",
        }),
      ),
    ]),
    transition(":leave", [
      animate(
        "100ms cubic-bezier(.09,.38,.38,1)",
        style({
          transform: "translateX(-200px)",
          opacity: "0",
        }),
      ),
    ]),
  ]),
};
