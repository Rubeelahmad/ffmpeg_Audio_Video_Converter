import Swal from 'sweetalert2';

export const successMessageAlert = (message = "Converted your media successfully!") => {
    Swal.fire("Success", message, "success");
};

export const errorMessageAlert = (message="Internal error") => {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: message,
        // footer: '<a href="">Why do I have this issue?</a>',
    });
};