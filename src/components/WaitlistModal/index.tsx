import { Button } from '@/components/UIKit/Button'
import { Dialog, DialogActions, DialogBody, DialogDescription, DialogTitle } from '@/components/UIKit/Dialog'
import WaitlistForm from './WaitlistForm'
interface WaitlistModalProps {
    isOpen: boolean
    setIsOpen: (args: boolean) => void
}

const WaitlistModal = ({ isOpen, setIsOpen }: WaitlistModalProps) => {

    return (
        <Dialog size="xl" open={isOpen} onClose={setIsOpen} className='relative z-20'>
            <DialogTitle>Get Early Access!</DialogTitle>
            <DialogDescription>
                Be among the first to streamline your admissions with Lepa.
            </DialogDescription>
            <DialogBody>
                <WaitlistForm />
            </DialogBody>
            <DialogActions >
                <Button outline className='' onClick={() => setIsOpen(false)} >
                    Cancel
                </Button>
                <Button className='' onClick={() => setIsOpen(false)} color='primary'>
                    Join waitlist
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default WaitlistModal