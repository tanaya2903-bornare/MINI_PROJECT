// // import React, { useState } from "react";
// // import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
// // import { Link } from "react-router-dom";


// // export function LoginForm(){
// //   // const [username, setUsername] = useState("");
// //   // const [password, setPassword] = useState("");

// //   const submitForm = () => {
// //     // Your form submission logic here
// //   };
   
// // //  export function LoginForm(){
// //   return (
// //     <Container className="mt-5">
// //       <Row className="justify-content-center">
// //         <Col md={6}>
// //           <Form className="p-4 shadow-lg bg-white rounded">
// //             <div className="text-center mb-4">
// //               <img
// //                 src="https://icon2.cleanpng.com/20171220/fuw/extinguisher-png-5a3a637a36ebd4.9770630315137759942256370.jpg"
// //                 alt="Your Logo"
// //                 className="img-fluid"
// //                 style={{ maxHeight: "100px" }}
// //               />
// //             </div>

// //             <h1 className="mb-4 text-center">Login</h1>

// //             <Form.Group controlId="formUsername" className="mb-3">
// //               <InputGroup>
// //                 <Form.Control
// //                   type="text"
// //                   placeholder="Username"
// //                   // value={username}
// //                   // // onChange={(e) => setUsername(e.target.value)}
// //                   // required
// //                   className="rounded-start"
// //                 />
// //                 <InputGroup.Text className="rounded-end">
// //                   <i className="bi bi-person" />
// //                 </InputGroup.Text>
// //               </InputGroup>
// //             </Form.Group>

// //             <Form.Group controlId="formPassword" className="mb-3">
// //               <InputGroup>
// //                 <Form.Control
// //                   type="password"
// //                   placeholder="Password"
// //                   // value={password}
// //                   // onChange={(e) => setPassword(e.target.value)}
// //                   // required
// //                   className="rounded-start"
// //                 />
// //                 <InputGroup.Text className="rounded-end">
// //                   <i className="bi bi-lock" />
// //                 </InputGroup.Text>
// //               </InputGroup>
// //             </Form.Group>

// //             <Form.Group
// //               controlId="formRemember"
// //               className="mb-3 d-flex justify-content-between align-items-center"
// //             >
// //               <Form.Check type="checkbox" label="Remember me" />
// //               <Form.Text>
// //                 <a href="#" className="text-decoration-none text-muted">
// //                   Forgot password
// //                 </a>
// //               </Form.Text>
// //             </Form.Group>

// //             <Button
// //               variant="primary"
// //               type="button"
// //               className="btn w-100"
// //               onClick={submitForm}
// //             >
// //               Login
// //             </Button>

// //             <Form.Text className="register-link mt-3 text-center">
// //               <p className="mb-0">
// //                 Don't have an account?{" "}

                
// //                 <Link to="/Signup">Register</Link>
                
                
// //               </p>
// //             </Form.Text>
// //           </Form>
// //         </Col>
// //       </Row>
// //     </Container>
// //   );
// //   }



























// import { useState } from "react";
// import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
// import { login } from "../services/AdminService";
// import { useNavigate, Link } from "react-router-dom";

// export function LoginForm() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({ phone: "", password: "" });
//   const [loginError, setLoginError] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const result = await login(formData);
//       localStorage.setItem("token", result.token);
//       navigate("/home");
//     } catch (error) {
//       console.log(error);
//       setLoginError(true);
//     }
//   };

//   return (
//     <Container className="mt-5">
//       <Row className="justify-content-center">
//         <Col lg={6}>
//           <Form className="p-4 shadow-lg bg-white rounded">
//             <div className="text-center mb-4">
//               <img
//                 src="https://icon2.cleanpng.com/20171220/fuw/extinguisher-png-5a3a637a36ebd4.9770630315137759942256370.jpg"
//                 alt="Your Logo"
//                 className="img-fluid"
//                 style={{ maxHeight: "100px" }}
//               />
//             </div>

//             <h1 className="mb-4 text-center">Login</h1>

//             <Form.Group className="mb-3">
//               <Form.Control
//                 type="text"
//                 placeholder="Phone"
//                 name="phone"
//                 onChange={handleChange}
//               />
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Control
//                 type="password"
//                 placeholder="Password"
//                 name="password"
//                 onChange={handleChange}
//               />
//             </Form.Group>

//             <Form.Group
//               controlId="formRemember"
//               className="mb-3 d-flex justify-content-between align-items-center"
//             >
//               <Form.Check type="checkbox" label="Remember me" />
//               <Link to="#" className="text-decoration-none text-muted">
//                 Forgot password
//               </Link>
//             </Form.Group>

//             <Button
//               variant="primary"
//               type="submit"
//               className="btn w-100"
//               onClick={handleSubmit}
//             >
//               Login
//             </Button>

//             <Form.Text className="register-link mt-3 text-center">
//               <p className="mb-0">
//                 Don't have an account? <Link to="/Signup">Register</Link>
//               </p>
//             </Form.Text>
//           </Form>

//           {loginError && (
//             <Alert variant="danger" className="mt-3">
//               Invalid phone or password
//             </Alert>
//           )}
//         </Col>
//       </Row>
//     </Container>
//   );
// }



















import { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { login } from "../services/AdminService";
import { useNavigate, Link } from "react-router-dom";

export function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ phone: "", password: "" });
  const [loginError, setLoginError] = useState(false);
  const [validationError, setValidationError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setValidationError(""); // Clear validation error when user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple form validation
    if (!formData.phone || !formData.password) {
      setValidationError("Please fill in all fields");
      return;
    }

    try {
      const result = await login(formData);
      localStorage.setItem("token", result.token);
      navigate("/home");
    } catch (error) {
      console.log(error);
      setLoginError(true);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col lg={6}>
          <Form className="p-4 shadow-lg bg-white rounded">
            <div className="text-center mb-4">
              <img
                src="https://icon2.cleanpng.com/20171220/fuw/extinguisher-png-5a3a637a36ebd4.9770630315137759942256370.jpg"
                alt="Your Logo"
                className="img-fluid"
                style={{ maxHeight: "100px" }}
              />
            </div>

            <h1 className="mb-4 text-center">Login</h1>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Phone"
                name="phone"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
            </Form.Group>

            {validationError && (
              <Alert variant="danger" className="mt-3">
                {validationError}
              </Alert>
            )}

            <Form.Group
              controlId="formRemember"
              className="mb-3 d-flex justify-content-between align-items-center"
            >
              <Form.Check type="checkbox" label="Remember me" />
              <Link to="#" className="text-decoration-none text-muted">
                Forgot password
              </Link>
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="btn w-100"
              onClick={handleSubmit}
            >
              Login
            </Button>

            <Form.Text className="register-link mt-3 text-center">
              <p className="mb-0">
                Don't have an account? <Link to="/Signup">Register</Link>
              </p>
            </Form.Text>
          </Form>

          {loginError && (
            <Alert variant="danger" className="mt-3">
              Invalid phone or password
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
}