import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../../Admin/redux/actions/userActions";
import { Typography, TextField, Button, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { InputAdornment, Tooltip } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useFormik } from "formik";
import * as Yup from "yup";
import '../../../App.css'
import VpnKeyIcon from '@mui/icons-material/VpnKey';

function AdminLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: formvalidationSchema,
      onSubmit: (values) => {
        dispatch(userLogin(values));
        // console.log(values);
      },
    });
  const [text, setText] = useState("Show");
  const [visible, setVisible] = useState("password");
  const icon =
    visible === "password" ? <VisibilityIcon /> : <VisibilityOffIcon />;
  const visibility = () => {
    setVisible((visible) => (visible === "password" ? "text" : "password"));
    setText((text) => (text === "Show" ? "Hide" : "Show"));
  };
  return (
    <div className="loginpage">
      <div className="brand">
        <Typography
          sx={{
            fontSize: { xs: "50px", sm: "60px" },

            fontWeight: "bold",
            
          }}
          variant="h1"
        >
          Mobile Store
        </Typography>
      </div>
      <div className="formcontainer">
        <form onSubmit={handleSubmit}>
          <div>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Bungee",
                fontSize: { sm: "35px", xs: "28px" },
              }}
            >
              Log In&nbsp;
            <IconButton ><a href="https://github.com/Nishanth4696/MobileEcommerce-Client/blob/master/README.md" target="_blank"><VpnKeyIcon /></a></IconButton>
            </Typography>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <TextField
              variant="outlined"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email && touched.email}
              value={values.email}
              helperText={errors.email && touched.email && errors.email}
              name="email"
              id="email"
              label="Email"
              placeholder="Enter Email"
              fullWidth
              sx={{ margin: "5px" }}
            />
            <TextField
              variant="outlined"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.password && touched.password}
              value={values.password}
              helperText={
                errors.password && touched.password && errors.password
              }
              name="password"
              id="password"
              label="password"
              
              placeholder="Enter the password"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <Tooltip title={text}>
                      <IconButton onClick={() => visibility()}>
                        {icon}
                      </IconButton>
                    </Tooltip>
                  </InputAdornment>
                ),
              }}
              sx={{ margin: "5px" }}
            />
            <Button
              sx={{ marginRight: "20px" }}
              variant="text"
              onClick={() => navigate("/admin/forgotpassword")}
            >
              Forgot Password?
            </Button>
            <Button type="submit" variant="contained" color="success">
              Log In
            </Button>
          </div>
          <div style={{ margin: "5px" }}>
            <label className="account">Don't have an Account?</label>
            <Button
              color="info"
              variant="text"
              onClick={() => navigate("/admin/register")}
            >
              Register
            </Button>
          </div>
         
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;

const formvalidationSchema = Yup.object({
  email: Yup.string()
    .email("Please enter the valid email")
    .required("Required Field"),
});
