import { toast } from "react-hot-toast";

export const errorAlert = (text, position) => {
  toast.error(text, {
    duration: 7000,
    position,
  });
};

export const successAlert = (text, position) => {
  toast.success(text, {
    duration: 7000,
    position,
  });
};
