
import React from 'react';

import Swal from 'sweetalert2';

const RemoveBtn = ({ id }) => {


    const DeleteItem = async () => {
        const confirmed = await Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this item!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it',
        });

        if (confirmed.isConfirmed) {
            try {
                const res = await fetch(`http://localhost:3000/api/trynow?id=${id}`, {
                    method: 'DELETE',
                });
                window.location.reload();


            } catch (error) {
                console.error('Error deleting item:', error);
            }
        }
    };

    return (
        <div>
            <button
                className="btn btn-circle btn-outline btn-error"
                onClick={DeleteItem}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    );
};

export default RemoveBtn;










