// // import React from "react";
// // import React, { useState } from "react";

// export default function Contact() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleInputChange = (e) => {
//     // Getting the value and name of the input which triggered the change
//     const { target } = e;
//     const inputType = target.name;
//     const inputValue = target.value;

//     if (!validateEmail(email) || !userName) {
//       setErrorMessage("Email or username is invalid");

//       return;
//     }
//     if (!checkPassword(password)) {
//       setErrorMessage(
//         `Choose a more secure password for the account: ${userName}`
//       );
//       return;
//     }


//     if (inputType === "email") {
//       setEmail(inputValue);
//     } else if (inputType === "name") {
//       setUserName(inputValue);
//     } else {
//       setPassword(inputValue);
//     }
//   };
//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     setUserName("");
//     setPassword("");
//     setEmail("");
//   };

//   return (
//     <main className="container">
//       <div className="row">
//         <div className="col-md-12">
//           <section className="jumbotron">
//             <h1 className="display-4">Contact</h1>
//             <hr className="my-4" />
//             <div className="col-12">
//               <form>
//                 <div className="form-group">
//                   <label for="name">Name</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Name"
//                     id="usr"
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label for="email">Email</label>
//                   <input
//                     type="email"
//                     className="form-control"
//                     placeholder="Email"
//                     id="email"
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label for="message">Send A Message</label>
//                   <textarea
//                     className="form-control"
//                     rows="3"
//                     placeholder="How can I help you?"
//                     id="comment"
//                   ></textarea>
//                 </div>
//               </form>
//               <div className="row">
//                 <div className="col-12">
//                   <p className="lead">
//                     <a
//                       className="btn btn-primary btn-lg"
//                       href="#"
//                       role="button"
//                     >
//                       Submit
//                     </a>
//                   </p>
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="col-12">
//                   <p>Phone: 253-797-1533</p>
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="col-12">
//                   <p>
//                     Email:{" "}
//                     <a href="mailto:alekskimball@gmail.com">
//                       alekskimball@gmail.com
//                     </a>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>
//       </div>
//     </main>
//   );
// }
