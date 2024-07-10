import toast from "react-hot-toast";

interface IToaster {
  message: string;
  position?: string;
  duration?: number;
}

export const showError: (error: string) => void = (error) => {
  toast.error(error, {
    duration: 4000,
    position: "top-center",
  });
};
