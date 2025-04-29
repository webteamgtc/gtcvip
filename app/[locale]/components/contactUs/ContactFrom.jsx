'use client';
import { useTranslations } from "next-intl";
import { useState } from "react";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from 'axios';

const ContactFrom = () => {
  const [loading, setLoading] = useState(false);
  const t = useTranslations("about.contact-us");
  const formik = useFormik({
    initialValues:{
      first_name: '',
      last_name: '',
      phone: '',
      email: '',
      message:''
    },
    validationSchema:Yup.object({
      first_name: Yup.string().min(2, t("error.min")).required(t("error.firstName")),
      last_name: Yup.string().min(2, t("error.min")).required(t("error.lastName")),
      email: Yup.string().email(t("error.invalidEmail")).required(t("error.email")),
      phone: Yup.number().required('Phone number is required'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit:async(values)=>{
      console.log(values);
      try{
        setLoading(true);
        const response = await axios.post('https://hooks.zapier.com/hooks/catch/16420445/3gwk9ez/',JSON.stringify(values));
      }catch(error){
        console.log(error);
      }finally{
        setLoading(false);
        toast('Form Submitted Successfully!')
        formik.resetForm();
      }
     
    }
  })
  return (
    <div className="bg-transparent">
      <form onSubmit={formik.handleSubmit}>
        <div className="space-y-12">
          <div className="grid max-w-6xl grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6 md:col-span-2 text-left">
            <div className="sm:col-span-3">
            
              <div>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  placeholder= {t("form.first-name")}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.first_name}
                  className={`block w-full border border-gray-100 text-white bg-transparent border-opacity-25 rounded-md p-2 placeholder:text-gray-100 outline-none sm:text-sm sm:leading-6 ${formik.touched.first_name && formik.errors.first_name
                    ? "border-2 border-red-600"
                    : ""
                  }`}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
           
              <div>
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.last_name}
                  placeholder= {t("form.last-name")}
                  className={`block w-full border border-gray-100 p-2 text-white bg-transparent border-opacity-25 rounded-md placeholder:text-gray-100 outline-none sm:text-sm sm:leading-6 ${formik.touched.last_name && formik.errors.last_name
                    ? "border-2 border-red-600"
                    : ""
                  }`}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
           
              <div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  autoComplete="email"
                  placeholder= {t("form.email")}
                  className={`block w-full border border-gray-100 p-2 text-white bg-transparent border-opacity-25 rounded-md placeholder:text-gray-100 outline-none sm:text-sm sm:leading-6 ${formik.touched.email && formik.errors.email
                    ? "border-2 border-red-600"
                    : ""
                  }`}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
           
              <div>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                  placeholder="+971 00 111 2233"
                  className={`block w-full border border-gray-100 p-2 text-white bg-transparent border-opacity-25 rounded-md placeholder:text-gray-100 outline-none sm:text-sm sm:leading-6 ${formik.touched.phone && formik.errors.phone
                    ? "border-2 border-red-600"
                    : ""
                  }`}
                />
              </div>
            </div>

            <div className="col-span-full">
             
              <div className="mt-2">
                <textarea
                  id="message"
                  name="message"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  rows={3}
                  className={`block w-full border border-gray-100 p-2 bg-transparent text-white border-opacity-25 rounded-md placeholder:text-gray-100 outline-none sm:text-sm sm:leading-6 ${formik.touched.message && formik.errors.message
                    ? "border-2 border-red-600"
                    : ""
                  }`}
                  placeholder={t("form.message")}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-start justify-end gap-x-6">
          <button
           disabled={loading}
            type="submit"
            className="block bg-primary text-white text-xl w-[120px] h-[40px] border border-gray-100 p-2 border-opacity-25  placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6 mb-2"
          >
             {loading ? <p>{t("form.sending")}</p>:<p>{t("form.submit")}</p>}
          </button> 
          <p className="text-xs py-3 text-gray-400 leading-5">{t("contactTerms")}.</p>
        </div>
      </form>
    </div>
  );
};

export default ContactFrom;
