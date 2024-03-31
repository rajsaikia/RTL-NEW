import { Link } from "react-router-dom"
export default function Legacy() {
  return (
    <div className="pt-40 pb-10">
       Have a legacy Account <Link to="/" className="text-underline text-orange-400 underline underline-offset-4">Login Here</Link>
    </div>
  )
}
