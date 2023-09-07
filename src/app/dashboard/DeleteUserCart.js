import React from "react";
import Swal from "sweetalert2";

const DeleteUserCart = (props) => {
  const itemId = props.id;
  const handleDelete = async () => {
    try {
      let result = await fetch(`https://infonexus.netlify.app/api/trynow/${itemId}`, {
        method: "DELETE",
      });
      result = await result.json();
      if (result) {
        Swal.fire({
          icon: "success",
          title: "delete success",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to delete item",
        });
      }
       props.onDelete(itemId);
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "An error occurred while deleting the item",
      });
    }
  };

  return (
    <button className="btn btn-circle btn-outline btn-error" onClick={handleDelete}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
};

export default DeleteUserCart;