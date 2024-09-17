import { useEffect } from 'react';
import css from './Notify.module.css';
import toast, { Toaster } from 'react-hot-toast';

export default function Notify({ message }) {
  useEffect(() => {
    if (message) {
      toast.error(message);
    }
  }, [message]);
  return <Toaster position="top-right" />;
}
