
import { Container, FormLabel, Input, Button, Alert,Paper } from "@mui/material"
import { useState, useEffect, useContext } from 'react'
import app from '../../../../firebase'
import { context } from "@/context/context"
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth"
const Register = () => {
    const auth = getAuth(app)
    const [alert, setAlert] = useState({alertType:'',message:'',isAlert:false})
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const something = await signInWithEmailAndPassword(auth, email, password)
            console.log(something)
            setAlert({alertType:'success',message:"loggedIn",isAlert:true})
        } catch (error:any) {
            setAlert({alertType:'error',message:error.code,isAlert:true})
            console.log(error)
        }
    }
    const { state, changeValue } = useContext(context)
    return (
        <Paper  className="p-12 ">


            <form onSubmit={(e) => handleSubmit(e)}
             className="flex flex-col justify-between  items-center "
              >
                <section className="flex justify-between">
                    <FormLabel >Email</FormLabel>
                    <Input type='email' className='' onChange={(e) => setEmail(e.target.value)} />
                </section>


                <section className="flex justify-between">
                    <FormLabel >Password</FormLabel>
                    <Input type={'password'}  onChange={(e) => setPassword(e.target.value)}></Input>
                </section>

                <Button variant='contained' type='submit' sx={{color:'green',marginTop:'5px'}}>submit</Button>
                {alert.isAlert && <Alert severity={alert.alertType=='error'?'error':'success'}>{alert.message}</Alert>}
            </form>
        </Paper>
    )
}

export default Register