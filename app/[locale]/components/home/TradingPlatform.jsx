import React from "react";
import { useTranslations } from "next-intl";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const TradingPlatform = () => {
  const t = useTranslations("home.whyGTC");

  const emailSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Required'),
  });

  return (
    <section className="md:py-16 3xl:py-16 py-8 bg-[#020125] px-5"> 
      <div className="container">
        <div className="relative text-center">
          <h2 
          style={{ lineHeight: "3.3rem" }}
          className="bg-gradient-to-r from-white to-secondary inline-block text-transparent bg-clip-text text-xl font-[500] xl:text-[30px] 2xl:text-[45px] capitalize max-w-xl leading-normal">
            Your Trusted Global Financial Partner
          </h2>
          <p className="text-gray-400 md:text-[16px] 2xl:text-[17px] text-sm text-center max-w-2xl mx-auto py-5 leading-7">
            At GTC Financial, we blend a global reach with local expertise. Whether you have intricate queries or simple questions, our dedicated team is ready to assist. Reach out to us anytime to connect with our experienced team.
          </p>
        </div>

        <div className="content-bg bg-[url('/bg-sec.webp')] bg-cover bg-center flex justify-between items-center h-[500px] p-5 md:p-10 rounded-2xl">
          <div className="content-side">
            <div className="relative text-left">
              <h2 

              className="bg-gradient-to-r from-white to-secondary inline-block text-transparent bg-clip-text text-2xl font-[500] xl:text-3xl 2xl:text-[45px] capitalize max-w-xl">
                24/5 Support Available
              </h2>
              <p className="text-gray-400  md:text-[16px] 2xl:text-[17px] text-sm text-left mt-5 md:w-[450px] leading-8 line-clamp-3 mb-5">
                Reach out for assistance anytime, 24/5, via our live chat or email at support@gtcfinancial.com.
              </p>
              {/* Newsletter Form */}
              <Formik
                initialValues={{ email: '' }}
                validationSchema={emailSchema}
                onSubmit={(values, { setSubmitting }) => {
                  alert('Subscription request sent: ' + values.email);
                  setSubmitting(false);
                }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <ErrorMessage name="email" component="div" className="text-red-600 text-sm" />
                    <Field type="email" name="email" placeholder="Enter your email" className="py-3 px-4 w-80 rounded-md" />
                    <button type="submit" disabled={isSubmitting} className="bg-gradient-to-r from-primary to-secondary text-white text-sm w-32 text-center py-3 rounded-md md:ml-3 mt-5 :mt-0">
                      Subscribe
                    </button>

                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingPlatform;
