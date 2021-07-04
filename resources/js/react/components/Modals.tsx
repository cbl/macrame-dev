import { useState } from 'react';
// import { Modal, Button as UiButton } from '@macramejs/admin-react';

export default function() {
    let [isOpen, setIsOpen] = useState<boolean>(false);

    const openModal = () => {
        console.log(isOpen);
        
        setIsOpen(true);
    }
    const closeModal = () => {
        setIsOpen(false);
    }
    return (
        <div className="p-24">
        {isOpen}
        <button onClick={openModal}>Open Modal</button>
        {/* <Modal isOpen={isOpen} onChange={isOpen => setIsOpen(isOpen)}>
            <h3 className="mb-4 text-xl font-semibold">Modal title</h3>
            <p className="mb-2">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
            </p>
            <button onClick={closeModal}>Close Modal</button>
        </Modal> */}
    </div>
    );
}