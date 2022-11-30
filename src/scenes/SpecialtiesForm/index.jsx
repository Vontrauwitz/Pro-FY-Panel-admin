import { useState } from "react";
import axios from "axios"
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const SpecialityForm = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");


//   const [admin, setAdmin] = useState([])

  const handleFormSubmit = async (values) => {
    console.log("entre al handle form");
    try {
      if (values) {
               // const response = await axios.post("http://localhost:3001/api/auth/register", values)
               const response = await axios.post("https://api-pro-fy-production.up.railway.app/api/specialities", values)
            //    setAdmin(response.data)
               console.log('====================================');
               console.log(response);
               console.log('====================================');
               return response + alert("Admin/Manager created") + window.location.reload();

      } else {
         //!! este no funciona urge
         return alert("Admin/Manager NOT CREATED please check your data!!") + window.location.reload();
      }

    } catch (error) {
      console.log('====================================');
      console.log(error);
      console.log('====================================');
    }


    // axios.post("https://api-pro-fy-production.up.railway.app/api/register")


    // fetch("http://localhost:3001/api/register")
    //   .then((data) => data.json())
    //   .then((data) => setAdmin(data.data))


  }



  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />

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
                label="Speciality"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                name="name"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 2" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New Speciality
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};


const checkoutSchema = yup.object().shape({
  name: yup.string().required("required"),
});
const initialValues = {
    name: "",

};

export default SpecialityForm;

