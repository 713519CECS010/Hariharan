import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { useFormik } from "formik";
import '../../App.css'
import * as yup from 'yup';
import { API_URL} from '../../GlobalConstants';
import { Navbar } from './Navbar';

const formValidationSchema= yup.object({
  model:yup
      .string()
      .required("why not fill tis field🎃"),
  img:yup
      .string()
      .required("why not fill this field🎃"),
  company:yup
      .string()
      .required("why not fill tis field🎃"),
  price:yup
      .number()
      .required("why not fill tis field🎃"),
  details:yup
      .string()
      .required("why not fill tis field🎃"),
 
})


export function AdminEditMobile() {
    const { id } = useParams();
    
    const [mobile, setMobile] = useState(null);

    useEffect(() => {
      fetch(`${API_URL}/mobilelist/${id}`,{method:"GET"})
      .then((data) => data.json())
      .then((mv) => setMobile(mv))
      
    },[id])
   
 return mobile ? <UpdateMobile mobile={mobile}  /> : ""; 
 
}

function UpdateMobile({mobile}){
  
  const formik = useFormik({
    initialValues: {
      model: mobile.model,
      img: mobile.img,
      company: mobile.company,
      price: mobile.price,
      details:mobile.details,
      },
    // validate: validateForm,
    validationSchema: formValidationSchema,
    onSubmit: (updateMobile) => {
      console.log("onSumbit", updateMobile)
      editMobile(updateMobile);
    }
  });
  
  
  const navigate = useNavigate();
  const editMobile = (updateMobile) => {

   
    
    
    fetch(`${API_URL}/mobilelist/${mobile._id}`,
    {
      method:"PUT",
      body:JSON.stringify(updateMobile),
      headers:{'Content-Type':'application/json'},
    }).then(() => navigate("/admin/product"))
    

  
  };

  return (
<section>
  <Navbar/>
    <form onSubmit={formik.handleSubmit} className='add-mobile-form'>
      <TextField
        id="model"
        name="model"
        value={formik.values.model}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        label='Enter the model'
        variant="outlined" 
        error={formik.errors.model && formik.touched.model}
        helperText={formik.errors.model && formik.touched.model && formik.errors.model}/>


      <TextField
        className='add-mobile-input'
        id="img"
        name="img"
        value={formik.values.img}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        label='Enter the img'        
        variant="outlined" 
        error={formik.errors.img && formik.touched.img}
        helperText={formik.errors.img && formik.touched.img && formik.errors.img}/>
        

      <TextField
        id="company"
        name="company"
        value={formik.values.company}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        label='Enter the company'       
        variant="outlined"
        error={formik.errors.company && formik.touched.company}
        helperText={formik.errors.company && formik.touched.company && formik.errors.company} />
        

      <TextField
        id="price"
        name="price"
        value={formik.values.price}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        label='Enter the price'
        variant="outlined" 
        error={formik.errors.price && formik.touched.price}
        helperText={formik.errors.price && formik.touched.price && formik.errors.price}/>

<TextField
        id="details"
        name="details"
        value={formik.values.details}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        label='Enter the details'       
        variant="outlined"
        error={formik.errors.details && formik.touched.details}
        helperText={formik.errors.details && formik.touched.details && formik.errors.details} />
        
        




      <Button type='submit' variant="contained" style={{width:'200px',margin:'auto'}} >Save</Button>

    </form>
    </section>
  );
}