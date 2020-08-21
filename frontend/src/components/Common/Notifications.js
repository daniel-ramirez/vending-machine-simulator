import { renderHTML } from "./Functions";

export const showNotification = ({
  notificationsReference,
  message,
  appearance = "success",
  autoDismissTimeout = 5000
}) => () => {
  notificationsReference.add(renderHTML(message), {
    appearance,
    autoDismiss: "true",
    autoDismissTimeout
  });
};
