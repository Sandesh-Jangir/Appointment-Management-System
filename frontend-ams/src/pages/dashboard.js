import { useRouter } from "next/router"

export default function Admin() {
    const router = useRouter()
    const {passkey} = router.query.slug
    console.log(passkey)
    return (
        <div>
            <h1>Hello World, This is admin dashboard</h1>
        </div>
    )
}