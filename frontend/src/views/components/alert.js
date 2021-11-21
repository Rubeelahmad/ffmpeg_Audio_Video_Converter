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

export const confrimAlert = (message) => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
}