import { useEffect } from "react"
import { getStatus } from "../actions/time"

export const Home = (props: any) => {
    useEffect(() => {
        const onSuccess = (status: any) => {
            console.log(status);
        }
        getStatus(onSuccess);
    }, [])
    return (
        <div>Home</div>
    )
}