import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
    const ref = useRef()
    const passwordRef = useRef()
    const [form, setForm] = useState({
        site: "",
        username: "",
        password: ""
    });
    const [passwordArray, setPasswordArray] = useState([]);

    useEffect(() => {
        let passwords = localStorage.getItem("passwords")
        let passwordArray;
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }
    }, [])

    const copyText = (text) => {
        toast('🦄 Copied to Clipboard!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        navigator.clipboard.writeText(text)
    }

    const showPassword = () => {
        passwordRef.current.type = "text"
        if (ref.current.src.includes("eyecross.png")) {
            ref.current.src = "eye.png";
            passwordRef.current.type = "text"
        }
        else {
            ref.current.src = "eyecross.png";
            passwordRef.current.type = "password"
        }

    }

    const savePassword = () => {
        if (!form.site || !form.username || !form.password) {
            toast.error('⚠️ Please fill all fields!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }
        setPasswordArray([...passwordArray, { id: uuidv4(), ...form }])
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, { id: uuidv4(), ...form }]))
        console.log([...passwordArray, form])
        setForm({site: "", username: "", password: ""}) 
         toast('🦄 Password Saved!!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

        
    }

    const deletePassword = (id) =>{
        console.log("Deleting password with id: ", id)
        let c = confirm("Are you sure you want to delete this password?")
        if (c){
            setPasswordArray(passwordArray.filter(item=> item.id !== id))
            localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item=> item.id !== id)))
            toast('🦄 Password Deleted!!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            }); 
        }
    }

    const editPassword = (id) =>{
        console.log("Editing password with id: ", id)
        setForm(passwordArray.filter(i=> i.id === id)[0])
        setPasswordArray(passwordArray.filter(item=> item.id !== id))
        localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item=> item.id !== id)))
    }


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>

            <div className='p-2 md:px-0 md:mycontainer '>
                <h1 className='text-4xl font-bold text-center'>
                    <span className='text-green-500'>&lt;</span>
                    Pass
                    <span className='text-green-500'>JAIL/&gt;</span>
                </h1>
                <p className='text-green-900 text-lg text-center'>Your Password Keeper</p>  

                <div className=' flex flex-col p-4 text-black gap-8 items-center '>
                    <input value={form.site} onChange={handleChange} placeholder="Website URL" className="rounded-full border border-green-500 md:w-[500px] px-4 py-2" type="text" name="site" id="site" />
                    <div className="flex flex-col md:flex-row justify-between gap-8">
                        <input value={form.username} onChange={handleChange} placeholder="Enter Username" type="text" className='rounded-full border border-green-500 md:w-[450px] px-4 py-2' name="username" id="username" />

                        <div className='relative flex flex-row md:Flex-col'>
                            <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder="Enter Password" type="password" className='rounded-full border border-green-500 md:w-[300px] px-4 py-2' name="password" id="password" />
                            <span className='absolute right-4 top-3 cursor-pointer' onClick={showPassword}>
                                <img ref={ref} width={20} src="eye.png" alt="eye" />
                            </span>
                        </div>

                    </div>
                    <button onClick={savePassword} className='text-sm flex justify-center items-center gap-2 bg-green-500 rounded-full px-4 py-2 w-fit hover:bg-green-300 border border-green-900'>
                        <lord-icon
                            src="https://cdn.lordicon.com/efxgwrkc.json"
                            trigger="hover">
                        </lord-icon>
                        Save</button>
                </div>
                <div className="passwords md:px-40 ">
                    <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
                    {passwordArray.length === 0 && <p>No passwords saved yet.</p>}
                    {passwordArray.length !== 0 && <table className="table-auto w-full rounded-md overflow-hidden shadow-lg mb-20">
                        <thead className='bg-green-800 text-white'>
                            <tr >
                                <th className='py-2'>Site</th>
                                <th className='py-2'>Username</th>
                                <th className='py-2'>Password</th>
                                <th className='py-2'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='bg-green-100'>
                            {passwordArray.map((item, index) => {
                                return <tr key={index}>
                                    <td className='py-2 border border-white text-center'><div className='flex items-center justify-center'><a href={item.site} target="_blank"><span>{item.site}</span></a>
                                        <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.site) }}>
                                            <lord-icon
                                                style={{ width: "25px", height: "25px", paddingTop: "2px", paddingLeft: "3px" }}
                                                src="https://cdn.lordicon.com/fsstjlds.json"
                                                trigger="hover">
                                            </lord-icon>
                                        </div>
                                    </div>
                                    </td>
                                    <td className='py-2 border border-white text-center'><div className='flex items-center justify-center'><span>{item.username}</span>
                                        <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.username) }}>
                                            <lord-icon
                                                style={{ width: "25px", height: "25px", paddingTop: "2px", paddingLeft: "3px" }}
                                                src="https://cdn.lordicon.com/fsstjlds.json"
                                                trigger="hover">
                                            </lord-icon>
                                        </div>
                                    </div>
                                    </td>
                                    <td className='py-2 border border-white text-center'><div className='flex items-center justify-center'><span>{item.password}</span>
                                        <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.password) }}>
                                            <lord-icon
                                                style={{ width: "25px", height: "25px", paddingTop: "2px", paddingLeft: "3px" }}
                                                src="https://cdn.lordicon.com/fsstjlds.json"
                                                trigger="hover">
                                            </lord-icon>
                                        </div>
                                    </div>
                                    </td>
                                    <td className='py-2 border border-white text-center'>
                                        <span className='cursor-pointer mx-1' onClick={() => { editPassword(item.id) }}>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/exymduqj.json"
                                                trigger="hover"
                                                style={{ "width": "25px", "height": "25px" }}>
                                            </lord-icon>
                                        </span>
                                        <span className='cursor-pointer mx-1' onClick={() => { deletePassword(item.id) }}>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/jzinekkv.json"
                                                trigger="hover"
                                                style={{ "width": "25px", "height": "25px" }}>
                                            </lord-icon>
                                        </span>

                                    </td>
                                </tr>
                            })}

                        </tbody>
                    </table>}
                </div>
            </div>
        </>
    )
}

export default Manager
