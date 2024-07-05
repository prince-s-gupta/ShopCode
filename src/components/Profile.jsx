import React, { useEffect, useState } from 'react'
import MainLayout from './MainLayout'
import firebaseAppConfig from '../utils/firebase-config'
import { getAuth, onAuthStateChanged, updateProfile } from 'firebase/auth'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { getFirestore, collection, addDoc, getDocs, query, where, updateDoc } from 'firebase/firestore'
import Swal from 'sweetalert2'


const auth = getAuth(firebaseAppConfig)
const db = getFirestore(firebaseAppConfig)
const storage = getStorage()

const Profile = () => {
    const [session, setSession] = useState(null)
    const [uploading, setUploading] = useState(false)
    const [isAddress, setIsAddress] = useState(false)
    const [formValue, setFormValue] = useState({
        fullname: '',
        email: '',
        mobile: '',
    })

    const [addressValue, setAddressValue] = useState({
        address: '',
        city: '',
        state: '',
        country: '',
        pincode: '',
        userId: ''
    })


    const handleOnChange = (e) => {
        const input = e.target
        const name = input.name
        const value = input.value
        setFormValue({
            ...formValue,
            [name]: value
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setSession(user)
            }
            else {
                setSession(false)
            }
        })
    }, [])

    useEffect(() => {
        const ref = async () => {
            if (session) {
                setFormValue({
                    ...formValue,
                    fullname: session.displayName,
                    mobile: (session.phoneNumber ? session.phoneNumber : '')
                })

                setAddressValue({
                    ...addressValue,
                    userId: session.uid
                })

                //fetching address
                const col = collection(db, "addresses")
                const q = query(col, where("userId", "==", session.uid))
                const snapshot = await getDocs(q)
                setIsAddress(!snapshot.empty)
                snapshot.forEach((doc) => {
                    const address = doc.data()
                    setAddressValue({
                        ...addressValue,
                        ...address
                    })
                })
            }
        }
        ref()
    }, [session])

    const saveProfileInfo = async (e) => {
        e.preventDefault()
        await updateProfile(auth.currentUser, {
            displayName: formValue.fullname,
            phoneNumber: formValue.mobile
        })

        new Swal({
            icon: "success",
            title: "Profile Updated !"
        })
    }

    const handleAddressValue = (e) => {
        const input = e.target
        const name = input.name
        const value = input.value
        setAddressValue({
            ...addressValue,
            [name]: value
        })
    }

    const saveAddress = async (e) => {
        try {
            e.preventDefault()
            await addDoc(collection(db, 'addresses'), addressValue)
            new Swal({
                icon: "success",
                title: "Address Saved Successfully!"
            })
        } catch (error) {
            new Swal({
                icon: "error",
                title: "Failed !",
                text: "Something Went Wrong !"
            })
        }
    }
    const updateAddress = async (e) => {
        try {
            e.preventDefault()
            const col = collection(db, "addresses")
            const q = query(col, where("userId", "==", session.uid))
            await updateDoc(q, addressValue)
            new Swal({
                icon: "success",
                title: "Address Updated Successfully!"
            })
        } catch (error) {
            new Swal({
                icon: "error",
                title: "Failed !",
                text: "Something Went Wrong !"
            })
        }
    }


    if (session === null) {

        return (
            <div className='bg-gray-100 h-full fixed top-0 left-0 w-full flex justify-center items-center'>
                <span className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-sky-500"></span>
                </span>
            </div>
        )
    }

    const setProfileImage = async (e) => {
        try {
            const file = e.target.files[0];
            const ext = file.name.split('.').pop();
            const path = `/pictures/${Date.now()}.${ext}`;
            const bucket = ref(storage, path);
            const snapshot = await uploadBytes(bucket, file);
            setUploading(true)
            const url = await getDownloadURL(snapshot.ref);
            await updateProfile(auth.currentUser, { photoURL: url });
            setUploading(false)
            setSession({
                ...session,
                photoURL: url
            })
        } catch (error) {
            console.error("Error updating profile image: ", error);
        }
    };

    return (
        <MainLayout>
            <div className='mx-auto shadow-lg bg-white md:my-16 p-8 border rounded-md md:w-7/12'>
                <div className='flex items-center gap-3'>
                    <i className='ri-user-line  md:text-4xl text-3xl'></i>
                    <h1 className='md:text-3xl text-2xl font-semibold'>Profile</h1>
                </div>
                <hr className='my-6' />

                <div className='w-24 h-24 mx-auto relative mb-8'>
                    {
                        uploading ? <img src="/images/loader.gif" alt="" />
                            : <img src={session.photoURL ? session.photoURL : "/images/avt.avif"} alt="" className='rounded-full h-24 w-24 mx-auto ' />

                    }
                    <input type="file" accept='image/*' onChange={setProfileImage} className=' opacity-0 absolute top-0 left-0 w-full h-full' />
                </div>
                <form className='grid grid-cols-2 gap-6' onSubmit={saveProfileInfo}>
                    <div className='flex flex-col gap-2'>
                        <label className='md:text-lg text-md font-semibold'>Fullname</label>
                        <input type="text" name='fullname' onChange={handleOnChange} value={formValue.fullname} className='p-2 rounded border border-gray-300' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='md:text-lg text-md font-semibold'>Email</label>
                        <input type="email" disabled name='email' value={session.email} className='p-2 rounded border border-gray-300' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='md:text-lg text-md font-semibold'>Mobile</label>
                        <input type="tel" name='mobile' onChange={handleOnChange} value={formValue.mobile} className='p-2 rounded border border-gray-300' />
                    </div>
                    <div></div>
                    <button className='px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded w-fit'>
                        <i className='ri-save-line mr-2'></i>
                        Save
                    </button>
                </form>
            </div>
            <div className='mx-auto shadow-lg bg-white md:my-16 p-8 border rounded-md md:w-7/12 my-2'>
                <div className='flex items-center gap-3'>
                    <i className='ri-link-unlink-m  md:text-4xl text-3xl'></i>
                    <h1 className='md:text-3xl text-2xl font-semibold'>Delivery</h1>
                </div>
                <hr className='my-6' />
                <form className='grid grid-cols-2 gap-6' onSubmit={isAddress ? updateAddress : saveAddress}>
                    <div className='flex flex-col gap-2 col-span-2'>
                        <label className='md:text-lg text-md font-semibold'>Area/Street/Village</label>
                        <input type="text" name='address' onChange={handleAddressValue} value={addressValue.address} className='p-2 rounded border border-gray-300' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='md:text-lg text-md font-semibold'>City</label>
                        <input type="text" name='city' onChange={handleAddressValue} value={addressValue.city} className='p-2 rounded border border-gray-300' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='md:text-lg text-md font-semibold'>State</label>
                        <input type="text" name='state' onChange={handleAddressValue} value={addressValue.state} className='p-2 rounded border border-gray-300' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='md:text-lg text-md font-semibold'>Country</label>
                        <input type="text" name='country' onChange={handleAddressValue} value={addressValue.country} className='p-2 rounded border border-gray-300' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='md:text-lg text-md font-semibold'>PinCode</label>
                        <input type="tel" name='pincode' onChange={handleAddressValue} value={addressValue.pincode} className='p-2 rounded border border-gray-300' />
                    </div>
                    <button className='px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded w-fit'>
                        <i className='ri-save-line mr-2'></i>
                        Save
                    </button>
                </form>
            </div>
        </MainLayout>
    )
}

export default Profile