import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  group,
  AnimationTriggerMetadata,
} from "@angular/animations";

export const menuAnimations: {
  readonly transformMenu: AnimationTriggerMetadata;
} = {
  /**
   * This animation controls the menu panel's entry and exit from the page.
   *
   * When the menu panel is added to the DOM, it scales in and fades in its border.
   *
   * When the menu panel is removed from the DOM, it simply fades out after a brief
   * delay to display the ripple.
   */
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
