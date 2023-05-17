import Link from "next/link"
import { useRouter } from "next/router"
import { Popover } from "@mui/material"
interface props{
  open:boolean,
  onClose:()=>void
}
const Sidebar = ({open,onClose}:props) => {
  const router = useRouter()
 const tv =  router.pathname.slice(1)
 console.log(tv)
  return (
    <Popover open={open} onClose={onClose} className="h-screen">
        <ul className="flex flex-col align-middle justify-center"> 
            <Link href='?category=popular'>popular</Link>
            <Link href='?category=top_rated'>Top-rated</Link>
            <Link href={tv?'tv?category=on_the_air':'?category=now_playing'}>{tv?'on-the-air':'now-playing'}</Link>
            <Link href={tv?'tv?category=airing_today':'?category=upcoming'}>{tv?'airing-today':'upcomming'}</Link>
        </ul>
        </Popover>
  )
}

export default Sidebar
