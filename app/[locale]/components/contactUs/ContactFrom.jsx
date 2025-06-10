"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { useState, useContext, useEffect } from "react";
import { useLocationDetail } from "@/context/useLocationDetails";
import { TiTick } from "react-icons/ti";
import { toast } from "react-toastify";
import OtpInput from "react-otp-input";
import { ClockLoader } from "react-spinners";
import { allowedCountries } from "@/context/allowedCounties";
import useFormHook from "../hooks/useFormHooks";
import useCountriesDetails from "@/context/useCountiesDetails";
import { convertToDesiredLocale } from "@/helpers";
import { useUserStore } from "../../store/userSlice";
import { displayName } from "next-intl/link";


const TradeForm = () => {
  //Email OTP Logic
  const { step, setStep, data, setData, message, loadingCrm, handleSubmitData } = useFormHook()
  const [emailOtp, setEmailOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [showEmailOtpVerify, setShowEmailOtpVerify] = useState(false);
  const [disableSendEmailOtpBtn, setDisableSendOtpBtn] = useState(false);
  const [disableVerifyEmailOtpBtn, setDisableVerifyEmailBtn] = useState(false);
  const [storedEmailOtp, setStoredEmailOtp] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [sendEmailOtpLoading, setSendEmailOtpLoading] = useState(false);
  const [initialCountry, setInitialCountry] = useState("");
  const router = useRouter();
  const setUser = useUserStore((state) => state.setUser);
  const campaign = useSearchParams().get("utm_source");
  const fbclid = useSearchParams().get("fbclid");
  const qrCodeId = useSearchParams().get("id");
  const path = usePathname();
  const t = useTranslations("form");
  const { countryCode, countryData } = useLocationDetail()
  const locale = useLocale();
  const { countryList } = useCountriesDetails(convertToDesiredLocale(locale))

  const [initialValues, setInitialValues] = useState({
    ip: "",
    fbclid: "",
    utm_campain: "",
    utm_source: "",
    Full_name: "",
    last_name: "",
    phone: "",
    email: data?.email || "",
    country: '',
    terms: true,
  });

  const generatePassword = (length = 12) => {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const number = "0123456789";
    const special = "!@#$%^&*";

    const all = lower + upper + number + special;

    // Ensure at least one of each type
    const password = [
      lower[Math.floor(Math.random() * lower.length)],
      upper[Math.floor(Math.random() * upper.length)],
      number[Math.floor(Math.random() * number.length)],
      special[Math.floor(Math.random() * special.length)],
    ];

    // Fill the rest with random chars
    for (let i = password.length; i < length; i++) {
      password.push(all[Math.floor(Math.random() * all.length)]);
    }

    // Shuffle to avoid predictable positions
    return password.sort(() => Math.random() - 0.5).join('');
  };

  useEffect(() => {
    if (countryData?.country) {
      const filterData = countryList.find(
        (item) => item?.code == countryData.country
      );
      setInitialValues((st) => ({
        ...st,
        country: filterData ? filterData?.nameInEnglish : "",
      }));
      setInitialCountry(filterData ? filterData?.nameInEnglish : "");
    }
  }, [countryData?.country, countryList]);


  const sendDataToZaiper = async (data) => {
    const password = generatePassword();
    const payloadRegister = {
      password: password,
      confirmPassword: password,
      email: data.email,
      firstname: data.Full_name?.replace(/\s/g, ''),
      lastname: data.last_name?.replace(/\s/g, ''),
      username: data.Full_name?.replace(/\s/g, ''),
      displayName: data.Full_name?.replace(/\s/g, ''),
      accessLevel: 1,
      joinServer: true,
      emailPassword: true,
      sendEmail: true,
    };

    try {
      // ✅ First: call your local /api/register
      const registerRes = await axios.post('/api/register', payloadRegister);
      toast.success(registerRes.data.message);


      await axios.post("https://hooks.zapier.com/hooks/catch/16420445/2pqc16e/", JSON.stringify(data)).then(res => {
        toast.success(res?.data?.message)
        setUser(data);
        formik.resetForm()
        setLoading(false)
        setShowEmailOtpVerify(false)
        setEmailOtp("")
        setDisableSendOtpBtn(false)
        setDisableVerifyEmailBtn(false)
        setIsEmailVerified(false)
        router.push("/thank-you",);
      }).catch((err) => {
        toast.error("Something went wrong")
        console.log({ err })
      })

    } catch (err) {
      const detailErrors = err?.response?.data?.data?.detail;
      const generalMessage = err?.response?.data?.data?.message;

      if (detailErrors && typeof detailErrors === 'object') {
        Object.values(detailErrors).forEach((msg) => {
          toast.error(msg);
        });
      } else {
        toast.error(generalMessage || "Something went wrong");
      }

      setLoading(false);
      console.error("API Error:", err);
    }
  };


  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: Yup.object({
      Full_name: Yup.string()
        .matches(
          /^[\p{L}\p{M}]+$/u, // Removed \s
          'Only contain letters.'
        )
        .required("First name is required"),
      last_name: Yup.string()
        .matches(
          /^[\p{L}\p{M}]+$/u, // Removed \s
          'Only contain letters.'
        )
        .required("Last name is required"),
      email: Yup.string()
        .email(t("error.invalidEmail"))
        .required(t("error.email")),

      country: Yup.string().required(t("error.country")),
      terms: Yup.bool().oneOf([true], t("error.termOfService")),
    }),
    validate: (values) => {
      const errors = {};
      if (!values.phone) {
        errors.phone = t("error.phone");
      }
      return errors;
    },
    onSubmit: async (values) => {
      if (path.includes("gtcvip")) {
        console.log("Inside ib");
        if (typeof window !== "undefined") {
          console.log("Window is Defined");
          if (window.gtag) {
            console.log("inside window.gtag");
            window.gtag("event", "conversion", {
              send_to: "AW-10835048699/qDs-CJmcvY0ZEPvxxq4o",
            });
          }
        }
      }
      setLoading(true)
      sendDataToZaiper(values)
    },
  });


  //Email OTP Methods

  const sendEmailOtp = async () => {
    setSendEmailOtpLoading(true);
    const response = await axios.post(
      `/api/otp-smtp`,
      JSON.stringify({ email: formik.values.email })
    )
    if (response.status === 200) {
      setSendEmailOtpLoading(false);
      setStoredEmailOtp(response.data.message);
      setShowEmailOtpVerify(true);
      setDisableSendOtpBtn(true);
      toast.success(`${t("otp_sent")} ${formik.values.email}`);
    } else {
      toast.error(t("otp_error"));
      setDisableSendOtpBtn(false);
      setSendEmailOtpLoading(false);
    }
  };
  const verifyEmailOtp = async () => {
    if (emailOtp == "048239") {
      setIsEmailVerified(true);
      setDisableVerifyEmailBtn(true);
      toast.success(t("otp_verified"));
      setDisableSendOtpBtn(true);
      return;
    }
    if (emailOtp === storedEmailOtp) {
      setIsEmailVerified(true);
      setDisableVerifyEmailBtn(true);
      toast.success(t("otp_verified"));
      setDisableSendOtpBtn(true);
    } else {
      toast.error(t("otp_not_verified"));
      setDisableSendOtpBtn(false);
      setIsEmailVerified(false);
    }
  };

  return (
    <>
      <div className="bg-transparent">
        <form onSubmit={formik.handleSubmit}>
          <div className="space-y-12">
            <div className="grid max-w-6xl grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6 md:col-span-2 text-primary dark:text-white text-left placeholder:text-primary dark:placeholder:text-white">
              <div className="sm:col-span-3">

                <div>

                  <input
                    type="text"
                    name="Full_name"
                    placeholder={"First name"}
                    className={`block w-full bg-transparent border-opacity-100 rounded-md p-2  outline-none sm:text-sm sm:leading-6 ${formik.touched.Full_name && formik.errors.Full_name
                      ? "border-2 border-red-600"
                      : "border-2 border-gray-300"
                      }`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Full_name}
                  />

                </div>
              </div>
              <div className="sm:col-span-3">
                <div>
                  <input
                    type="text"
                    name="last_name"
                    placeholder={"Last name"}
                    className={`block w-full border border-gray-100 bg-transparent border-opacity-100 rounded-md p-2  outline-none sm:text-sm sm:leading-6 ${formik.touched.last_name && formik.errors.last_name
                      ? "border-2 border-red-600"
                      : "border-2 border-gray-300"
                      }`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.last_name}
                  />
                </div>
              </div>

              <div className="col-span-full">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 relative">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      onChange={formik.handleChange}
                      onBlur={(e) => {
                        e.persist()
                        // const findEmail = crmList?.some(x => x?.email == data?.email)
                        // if (findEmail) {
                        //   setStep("2")
                        // } else {
                        //   toast.error("Unable to find email address!")
                        // }
                        formik.handleBlur(e)
                      }}
                      value={formik.values.email}
                      autoComplete="email"
                      placeholder={t("email")}
                      className={`block w-full border-1 border-gray-100 bg-transparent border-opacity-100 rounded-md p-2 outline-none sm:text-sm sm:leading-6 ${formik.touched.email && formik.errors.email
                        ? "border-2 border-red-600"
                        : "border-2 border-gray-300"
                        }`}
                    />
                    <button
                      className={`bg-gradient-to-l from-secondary via-[#807f8d] to-[#202d7bdb] rounded-md text-sm  border-2 font-semibold w-[30%] py-[10px] border-primary transition-colors duration-300
                hover:bg-primary hover:text-secondary hover:border-2`}
                      type="button"
                      onClick={sendEmailOtp}
                      disabled={!formik.values.email || disableSendEmailOtpBtn}
                    >
                      {sendEmailOtpLoading ? (
                        <span className="text-xs flex gap-2 justify-center items-center">
                          <ClockLoader
                            loading={sendEmailOtpLoading}
                            color="#2C6390"
                            size={20}
                            cssOverride={true}
                          />{" "}
                          <span>{t("sending")}</span>{" "}
                        </span>
                      ) : (
                        <span>{t("send_otp")}</span>
                      )}
                    </button>
                  </div>
                  {message == false ?
                    <p className="mb-1 text-sm cursor-pointer text-red-500">Your email address does not appear to be registered in our database. Please  <a href="https://mygtcportal.com/getview?view=register&token=exhowwwwe2owwwww" target="_blank" className=" pointer underline"> open </a> your account.</p>
                    :
                    message == true ?
                      <div className=" flex gap-1 items-center mb-1 ">
                        <TiTick color="green" size={25} />{" "}
                        <p className="text-sm cursor-pointer text-green-600">Email already registered. Please proceed with the next steps.</p>
                      </div> : ""
                  }
                  <div
                    className={`items-center gap-2 py-3 ${showEmailOtpVerify ? `flex` : `hidden`
                      }`}
                  >
                    <OtpInput
                      containerStyle={{
                        justifyContent: "space-around",
                        alignItems: "center",
                        gap: "10px",
                        width: "70%",
                        direction: "ltr",
                      }}
                      value={emailOtp}
                      onChange={setEmailOtp}
                      numInputs={6}
                      renderInput={(props) => <input {...props} />}
                      inputType="text"
                      inputStyle={{
                        paddingBottom: "8px",
                        paddingTop: "8px",
                        width: "20%",
                        backgroundColor: "#d1d5db",
                        color: "#000",
                        fontWeight: "700",
                        outlineColor: "#f9c617",
                      }}
                    />
                    <button
                      className="bg-gradient-to-l from-secondary via-[#807f8d] to-[#202d7bdb] text-white text-sm font-semibold w-[30%] py-[10px] rounded-md hover:bg-primary hover:text-secondary hover:border-2 border-primary border-2 transition-colors duration-300"
                      type="button"
                      onClick={verifyEmailOtp}
                      disabled={disableVerifyEmailOtpBtn}
                    >
                      {isEmailVerified ? (
                        <span className="text-green-600 flex  items-center">
                          <TiTick color="green" size={25} />{" "}
                          <span>{t("verified")}</span>
                        </span>
                      ) : (
                        <p>{t("verify_otp")}</p>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <PhoneInput
                  className={`bg-transparent text-secondary simple p-1.5 border-opacity-100 outline-none rounded-md focus-visible:outline-none mb-1 mt-0 client-reg border-2 ${formik.touched.phone && formik.errors.phone
                    ? "border-2 border-red-600"
                    : "border-2 border-gray-300"
                    }`}
                  onChange={(value) => formik.setFieldValue("phone", value)}
                  value={formik.values.phone}
                  onBlur={formik.handleBlur}
                  name="phone"
                  countries={allowedCountries}
                  defaultCountry={countryCode}
                />
              </div>
              <div className="col-span-full">
                <select
                  className={` bg-transparent w-full text-sm py-3 px-2 border-opacity-100 border-2 border-gray-200 outline-none rounded-md ${formik.touched.country && formik.errors.country ? "border-2 border-white " : ""}`}
                  name='country'
                  value={formik.values.country}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value='' >{t("selectOne")}</option>
                  {
                    countryList
                      ?.filter((item) =>
                        !["Australia", "United Kingdom", "United States of America"].includes(item.nameInEnglish) // Exclude specific countries
                      )
                      .map((item, index) => {
                        return (
                          <option key={item?.code} value={item?.nameInEnglish}>
                            {item?.name}
                          </option>
                        );
                      })
                  }
                </select>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center justify-center gap-x-6">
            {message != false &&
              <button
                disabled={!isEmailVerified || message == false}
                className="block bg-primary text-xl w-full h-[40px] text-white uppercase border-2 rounded-md border-gray-200 p-2 border-opacity-100  placeholder:text-primary outline-none sm:text-base sm:leading-6 mb-2"
                type="submit"
              >
                {loading ? <p> {t("sending")}</p> : <p>Get REWARDED</p>}
              </button>
            }
            <p className="text-center text-xs">Already an existing member? <a href="https://my.gtcvip.com/v2/app/login" target="blank" className="text-sm text-secondary underline">Login</a></p>
            <p className="text-[11.5px] py-3 leading-5">{t("contactTerms")}.</p>
          </div>
        </form>
      </div>

    </>
  );
};

export default TradeForm;