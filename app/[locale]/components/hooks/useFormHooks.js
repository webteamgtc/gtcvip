import axios from "axios"
import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import { toast } from "react-toastify"
import { useUserStore } from "../../store/userSlice"

const useFormHook = () => {
    const [step, setStep] = useState("1")
    const [data, setData] = useState(null)
    const [crmList, setCrmList] = useState([])
    const [loadingCrm, setLoadingCrm] = useState(false)
    const [message, setMessage] = useState(null)
    const router = useRouter();
    const setUser = useUserStore((state) => state.setUser);



    const handleSubmitData = async (data, formik, setLoading, commonForm, sendMail = false) => {
        sendDataToZaiper({ ...data, user_referrer: localStorage.getItem("user_referrer") }, formik, setLoading)
    }

    const sendDataToZaiper = async (data, formik,setLoading) => {
        console.log({ data })
        await axios.post(
            `/api/email`,
            JSON.stringify(data)
        ).then(res => {
            console.log({ res })
        }).catch(err => {
            console.log({ err })
        })
        await axios.post(``, JSON.stringify(data)).then(res => {
            toast.success(res?.data?.message)
            setUser(data);
            formik.resetForm()
            setLoading(false)
            router.push("/thank-you",);
        }).catch((err) => {
            toast.error("Something went wrong")
            console.log({ err })
        })

    }


    return { step, setStep, data, setData, crmList, loadingCrm, message, handleSubmitData }
}
export default useFormHook