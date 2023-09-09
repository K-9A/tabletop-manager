import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";

const validationSchema = Yup.object({
  name: Yup.string().required('Username is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
});

export default function Login() {
  const formik = useFormik({
    initialValues: {
      name: '',
      password: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
      <Card color="transparent" shadow={false} className="shadow-none">
        <Typography variant="h4" color="blue-gray">
          Login
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your login credentials.
        </Typography>
        <form onSubmit={formik.handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input 
              size="lg" 
              label="Username" 
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              error={!!(formik.errors.name && formik.touched.name)}
              crossOrigin=""
            />
            {formik.errors.name && formik.touched.name && (
              <Typography color="red" className="mt-2">{formik.errors.name}</Typography>
            )}
            <Input 
              type="password" 
              size="lg" 
              label="Password" 
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              error={!!(formik.errors.password && formik.touched.password)}
              crossOrigin=""
            />
            {formik.errors.password && formik.touched.password && (
              <Typography color="red" className="mt-2">{formik.errors.password}</Typography>
            )}
          </div>

          <Button type="submit" className="mt-6" fullWidth>
            Login
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Need an account?{" "}
            <Link href="/register" className="font-medium text-gray-900"> 
                Register
            </Link>
          </Typography>
        </form>
      </Card>
  );
}
