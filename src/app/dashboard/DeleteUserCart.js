import React from 'react';
import Swal from 'sweetalert2';

const DeleteUserCart = (props) => {
    const itemId = props.id;
    const handleDelete = async () => {
        try {
            let result = await fetch(`http://localhost:3000/api/trynow/${itemId}`, {
                method: 'DELETE'
            });
            result = await result.json();
            if (result) {
                Swal.fire({
                    icon: 'success',
                    title: 'delete success',
                    showConfirmButton: false,
                    timer: 1500
                  });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Failed to delete item',
                });
            }
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'An error occurred while deleting the item',
            });
        }
    };

    return (
        <button onClick={handleDelete}>Delete</button>
    );
};

export default DeleteUserCart;
