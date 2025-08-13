import { Button } from '@/components/UIKit/Button'
import { Dialog, DialogActions, DialogBody, DialogDescription, DialogTitle } from '@/components/UIKit/Dialog'
import WaitlistForm from './WaitlistForm'
import { useState } from 'react'


interface WaitlistModalProps {
    isOpen: boolean
    setIsOpen: (args: boolean) => void
}

const WaitlistModal = ({ isOpen, setIsOpen }: WaitlistModalProps) => {
    const [isSubmitting, setIsSubmitting] = useState(false)

    return (
        <Dialog size="md" open={isOpen} onClose={setIsOpen} className='relative z-20'>
            <DialogTitle>Get Early Access!</DialogTitle>
            <DialogDescription>
                Be among the first to streamline your admissions with Lepa.
            </DialogDescription>
            <DialogBody>
                <WaitlistForm
                    onSubmittingChange={setIsSubmitting}
                    onSuccess={() => setIsOpen(false)}
                    setIsOpen={setIsOpen}
                />
            </DialogBody>
            <DialogActions >
                <Button className='w-full sm:min-w-sm' color='primary' form="waitlist-form" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting…' : 'Join waitlist'}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default WaitlistModal