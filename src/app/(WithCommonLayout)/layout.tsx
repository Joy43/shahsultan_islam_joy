
import Navbar from '@/shared/Navbar'
const CommonLayout = ({children}:{children:React.ReactNode}) => {
  return (
     <>
     <Navbar/>
    <main>{children}</main>
     </>
  )
}

export default CommonLayout;