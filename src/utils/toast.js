import { toast } from 'react-toastify';

export const successToast = (message) =>
  toast.success(`'🦄 Congrats! ${message}`, {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

export const errorToast = (message) =>
  toast.error(`🦄 Oops! ${message}`, {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
