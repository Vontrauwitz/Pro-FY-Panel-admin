// import { useState } from "react";
// import axios from "axios"
// import { Link } from "react-router-dom";
// import { Box, Button, TextField } from "@mui/material";
// import { Formik } from "formik";
// import * as yup from "yup";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import Header from "../../components/Header";


// function Login() {

//   const [datos, setDatos] = useState({
//     email: "",
//     password: ""
//   })





// const handleInputChange = (e) => {
//   e.preventDefault()
//   try {
//     const { name, value } = e.target;
//     const newDatos = { ...datos, [name]: value };
//     setDatos(newDatos)
//   } catch (error) {
//     console.log(error);
//   }
//   const handleInputChange = async (e) => {
//     e.preventDefault()
//     if (!e.target.) {

//     } else {
//       const response = await axios.post("http://localhost:3001/api/auth/login", e)
//       setDatos(response.data)
//       return response
//     }
//   }



// axios.post("https://api-pro-fy-production.up.railway.app/api/register")






// return (
//   <>
//     <form onSubmit={handleSubmit}>
//       <label for="email">Email:</label>
//       <input value={email} type="email" placeHolder="example@example.com" id="email" name="email"></input>
//       <label for="email">Password:</label>
//       <input value={pass} type="password" placeHolder="*******************" id="password" name="password"></input>
//       <Link to='/dash'>
//         <button handleClick={handleAuthSubmit}>Log In</button>
//       </Link>
//     </form>
//   </>
// )

import { useState } from "react";
import axios from "axios"
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../src/components/Header";
import { useNavigate } from "react-router-dom";

import { DataThresholdingSharp } from "@mui/icons-material";

function Login() {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();

  const [datos, setDatos] = useState({
    email: "",
    password: ""
  })

  const handleFormSubmit = async (values) => {
    console.log("entre al handle form");
    try {
      if (values) {



        // const response = await axios.post("http://localhost:3001/api/auth/register", values)
        const response = await axios.post("http://localhost:3001/api/auth/login", values)
        setDatos(response.data)
        console.log('====================================');
        console.log(response);
        console.log('====================================');
        return response + navigate("/home")
      } else {
        alert("User not registered, please refer to the admin of Pro-FY")
      }
    } catch (error) {
      console.log('====================================');
      console.log(error);
      alert("User not registered, please refer to the admin of Pro-FY")
      console.log('====================================');
    }
  }


  return (
    <Box m="20px">
      <Header title="LOG-IN ADMIN" subtitle="Please login to enter the Dashboard" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={!!touched.password && !!errors.password}
                helperText={touched.password && errors.password}
                sx={{ gridColumn: "span 2" }}
              />

            </Box>
            <Box display="flex" justifyContent="end" mt="20px">

              <Button type="submit" color="secondary" variant="contained">
                Log-In
              </Button>

            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};







const checkoutSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});

const initialValues = {
  email: "",
  password: "",


};



export default Login
