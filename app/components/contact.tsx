import React, {useState} from "react";
import Formik, { useFormik } from "formik";
import * as yup from "yup";
import Link  from 'next/link';
import type { NextPage } from 'next';

const Contacts: NextPage = () => {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState("");

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      message: '',
    },
    onSubmit: () => {
      setMessage('Form submitted');
      setSubmitted('');
    },
    validationSchema: yup.object({
      name: yup.string().trim().required('Name is required'),
      email: yup
        .string()
        .email('Must be a valid email')
        .required('Email is required'),
      message: yup.string().trim().required('Message is required'),
    }),
  });


  return (
    <>
      <div>
        <Link href="https://github.com/RemyXVX">GitHub</Link>
        <Link href="https://www.linkedin.com/in/remyflores/">LinkedIn</Link>
        <Link href="https://www.instagram.com/youngglitterbearxvx/">Instagram</Link>
      </div>
      <div className="">
        <div className="" hidden={!submitted}>
          {message}
        </div>
        <form className="" onSubmit={formik.handleSubmit}>
          <div className="">
            <label className="" htmlFor="name">
              Name
            </label>
            <input
              className=""
              type="text"
              name="name"
              placeholder="tu nombre foo"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.name && (
              <div className="text-danger">
                {formik.errors.name}
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  )
}

export default Contacts;
