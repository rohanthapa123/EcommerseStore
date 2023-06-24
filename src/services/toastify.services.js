import {  toast } from "react-toastify";

const toasterConfig = {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
};



export const ToastifySuccess = (message) => {
    toast.success(message, toasterConfig);
}

export const ToastifyWarning = (message) => {
    toast.warning(message, toasterConfig);
}

export const ToastifyError = (message) => {
    toast.error(message, toasterConfig);
}


