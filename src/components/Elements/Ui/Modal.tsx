import Modal from '@mui/material/Modal'
interface Props{
    children:any
    open:boolean
    onClose:()=>void
}

const CustomModal = ({children,open,onClose}:Props) => {
  return (
    <Modal open={open}
    onClose={onClose}  style={{display:'flex',alignItems:'center',justifyContent:'center'}} >
        {children}
    </Modal>
  )
}

export default CustomModal