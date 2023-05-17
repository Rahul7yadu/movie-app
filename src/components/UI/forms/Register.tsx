import { Container, FormLabel, Input, Button } from "@mui/material"
import { useState, useEffect, useContext } from 'react'
import app, { db } from '../../../../firebase'
import { context } from "@/context/context"
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import { collection, addDoc, setDoc, doc } from 'firebase/firestore'
import { useRouter } from "next/router"

const Register = () => {
    const auth = getAuth(app)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const router = useRouter()
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const user = await createUserWithEmailAndPassword(auth, email, password)

        await setDoc(doc(db, 'users', user.user.uid), { name, email })

    }
    const { state, changeValue } = useContext(context)
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if(user?.uid!=null){
                router.push('/user/dashboard/')
            }
        })
    }, [])
    return (

        <div className='flex justify-center items-center text-slate-700
         bg-slate-50 h-1/2 w-96 self-center top-1/2 left-1/2 -translate-x-1/2 
         -translate-y-1/2 fixed border-4 border-slate-700 rounded-lg ' >

            <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col justify-around  items-center p-8" >
                <section >
                    <FormLabel className=' mr-4'>Name</FormLabel>
                    <Input type='text' className=' ' onChange={(e) => setName(e.target.value)} />
                </section>
                <section >
                    <FormLabel className=' mr-4'>Email</FormLabel>
                    <Input type='email' className='' onChange={(e) => setEmail(e.target.value)} />
                </section>


                <section >
                    <FormLabel className='mr-2'>Password</FormLabel>
                    <Input type={'password'} className=" mr-4" onChange={(e) => setPassword(e.target.value)}></Input>
                </section>

                <Button variant='text' type='submit' className="mt-4">submit</Button>

            </form></div>
    )
}

export default Register