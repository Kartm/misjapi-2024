import {Dialog, DialogBackdrop, DialogPanel, DialogTitle} from '@headlessui/react'
import React, {PropsWithChildren} from 'react'
import CloseIcon from '../../images/close.svg';

// .activenow-form #active-now-submit {
//     margin-left: auto;
//     margin-right: 0;
// }
//
// /* hide "Lokalizacja" selector */
// #activenow-venue-selector {
//     display: none!important;
// }

type IframeDialogProps = {
    open: boolean;
    onClose: () => void;
}

const IframeDialog: React.FC<PropsWithChildren<IframeDialogProps>> = ({open, onClose, children}) => {
    return (
        <Dialog open={open} onClose={onClose} className={'relative z-10'}>
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                        <DialogTitle className="flex w-full p-4"><button className="ml-auto" onClick={onClose}><CloseIcon className="w-8" /></button></DialogTitle>

                        <div className="bg-white p-4 sm:p-6">
                            <div className="flex items-center justify-center">
                                {children}
                            </div>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}

export default IframeDialog;