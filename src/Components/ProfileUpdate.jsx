import React, { use } from "react";
import { AuthContext } from '../Context/AuthContext';
import Swal from "sweetalert2";

const ProfileUpdate = () => {
    const { updateUser } = use(AuthContext);

    const handleProfileUpdate = (e) => {
        e.preventDefault();
        const displayName = e.target.name.value;
        const photoURL = e.target.photo.value;
        updateUser({ displayName, photoURL })
            .then(() => {
                document.getElementById("edit_profile").close()
                e.target.reset()
                Swal.fire({
                    icon: "success",
                    title: "Profile Updated!",
                    text: "Your ToyVerse profile looks even better now 🎉",
                    confirmButtonColor: "#e1ad01",
                });
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "An error occurred",
                    text: `${error.code}`,
                });
            });
    };

    return (
        <div>
            <dialog id="edit_profile" className="modal">
                <div className="modal-box bg-[#FFF7E0] rounded-2xl border border-[#f5d77a] shadow-lg text-[#6f4e37] relative">
                    <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-[#e1ad01] via-[#f5d77a] to-[#e1ad01] rounded-t-2xl"></div>
                    <h3 className="font-bold text-2xl text-center mt-4 mb-6">
                        ✨ Update Your Profile
                    </h3>
                    {/* Form */}
                    <form onSubmit={handleProfileUpdate} className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold mb-1">Display Name</label>
                            <input
                                name="name"
                                type="text"
                                placeholder="Enter your new name"
                                className="input input-bordered w-full bg-white border-[#e1ad01]/40 focus:border-[#e1ad01] focus:ring-[#e1ad01]"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1">Photo URL</label>
                            <input
                                name="photo"
                                type="text"
                                placeholder="Enter your new photo URL"
                                className="input input-bordered w-full bg-white border-[#e1ad01]/40 focus:border-[#e1ad01] focus:ring-[#e1ad01]"
                            />
                        </div>
                        <div className="flex justify-end gap-3 pt-3">
                            <button
                                type="submit"
                                className="px-6 py-2 rounded-lg font-semibold bg-[#e1ad01] text-[#6f4e37] hover:bg-[#f5c400] shadow-md hover:shadow-lg transition-all">
                                Update
                            </button>
                            <button
                                type="button"
                                onClick={() => document.getElementById("edit_profile").close()}
                                className="px-6 py-2 rounded-lg font-semibold bg-white text-[#6f4e37] border border-[#f5d77a] hover:bg-[#FFF0B3] shadow-sm transition-all">
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
                {/* close btn */}
                <form method="dialog" className="modal-backdrop bg-black/30 backdrop-blur-sm">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default ProfileUpdate;
