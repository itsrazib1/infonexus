

import Link from 'next/link';
import React from 'react';

const DetailsButton = ({ cartData }) => {
    let id = cartData._id


    return (
        <div>
            <button className='btn btn-accent rounded-full font-bold btn-outline'>
                <Link href={{
                    pathname: `/purchaseDetails/${id}`
                }}>
                GO
                </Link>


            </button>
        </div>
    );
};

export default DetailsButton;










// import Link from 'next/link';

// import React from 'react';

// const DetailsButton = () => {

//     // const id = cartData._id;
//     // const name = cartData.name;


//     return (
//         <div>
//             <button className='btn btn-primary'>
//                 <Link
//                     href={{

//                         pathname: `/purchaseDetails`,
//                         query: {
//                             name: "rezaul",
//                             age: "25",
//                         },
//                     }}>
//                     Go to Page
//                 </Link>
//             </button>
//         </div >
//     );
// };

// export default DetailsButton;
