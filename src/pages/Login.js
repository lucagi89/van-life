import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { loginUser } from "../api"

export default function Login() {
    const [loginFormData, setLoginFormData] = useState({ email: "", password: "" })
    const [ status, setStatus ] = useState("idle")
    const [error, setError] = useState(null)

    const location = useLocation()
    const message = location.state?.message || ""

    function handleSubmit(e) {
        e.preventDefault()
        async function handleUserData() {
            setStatus("submitting")
            try {
                const user = await loginUser(loginFormData)
                console.log(user)
            } catch (error) {
                console.error(error)
                setError("error")
            }finally {
                setStatus("idle")
        }

    }
    handleUserData()
    }

    // useEffect(function() {
    //   async function fetchVans() {
    //     setLoading(true)
    //     try {
    //       const vans = await getVans()
    //       setVans(vans)
    //     } catch (error) {
    //       setError(error)
    //     }finally {
    //       setLoading(false)
    //     }
    //   }
    //   fetchVans()

    // }, [])

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }


    return (
        <div className="login-container">
            {message && <h3 className="warning">{message}</h3>}
            <h1>Sign in to your account</h1>
            {error?.message && <h3 className="warning">{error.message}</h3>}
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button
                  disabled={status === "submitting"}>
                  {status === "submitting" ? "Loading..." : "Login"}
                </button>
            </form>
        </div>
    )

}
