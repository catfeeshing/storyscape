"use client";
import Userdropdown from "./user";
import { auth, firestore } from "@/firebase/firebase";
import {
    signInWithPopup,
    GoogleAuthProvider,
    getAdditionalUserInfo,
    signOut,
    UserCredential,
    AdditionalUserInfo,
    signInWithRedirect,
} from "firebase/auth";


import { useAuthState } from 'react-firebase-hooks/auth';
import { setDoc, doc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { Avatar } from "@nextui-org/react";

export default function Auth({ red }: { red: string }) {
    const [user] = useAuthState(auth);
    let router = useRouter();

    const createUserObjectIfNotExists = async (result: UserCredential) => {
        const res = getAdditionalUserInfo(result);
        if (res === null) {
            return;
        }
        const { isNewUser }: AdditionalUserInfo = res;
        if (isNewUser) {
            await setDoc(doc(firestore, "users", result.user.uid), {
                username: result.user.displayName,
                email: result.user.email,
                products: [],
                profile_picture: result.user.photoURL,
            });
        }
    };
    const provider = new GoogleAuthProvider()
    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            await createUserObjectIfNotExists(result);
            router.push(red);
        } catch (err) {
            console.error(err);
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="flex" suppressHydrationWarning>
            {/* {user ? (
                <>
                    <p
                        className="my-auto mr-3 font-white"
                        suppressHydrationWarning
                    >
                        <Avatar src={user.photoURL!} />
                    </p>
                    <button
                        onClick={logout}
                        className="bg-transparent hover:bg-blue-950 font-white font-semibold hover:text-white py-1.5 px-4 border border-blue-500 hover:border-transparent rounded"
                    >
                        Logout
                    </button>
                </>
            ) : (
                <>
                    <button
                        className="px-4 py-2 font-semibold bg-transparent border border-blue-500 rounded hover:bg-blue-950 font-white hover:text-white hover:border-transparent"
                        onClick={signInWithGoogle}
                    >
                        Login
                    </button>
                </>
            )} */}
            {user ? (
                <div className="flex flex-row gap-3">
                    
                    <Userdropdown img={user.photoURL!} email={user.email!} name={user.displayName} logout={logout}/>
                </div>
            ) : (
                <>
                    <button
                        className="px-4 py-2 font-semibold bg-transparent border border-blue-500 rounded hover:bg-blue-950 font-white hover:text-white hover:border-transparent"
                        onClick={signInWithGoogle}
                    >
                        Login
                    </button>
                </>
            )}
        </div>
    );
}