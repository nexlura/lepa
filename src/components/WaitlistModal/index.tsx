import { Button } from '@/components/UIKit/Button'
import { Dialog, DialogActions, DialogBody, DialogDescription, DialogTitle } from '@/components/UIKit/Dialog'
import { Field, Label } from '@/components/UIKit/Fieldset'
import { Input } from '@/components/UIKit/Input'
import WaitlistForm from './WaitlistForm'

interface WaitlistModalProps {
    isOpen: boolean
    setIsOpen: (args: boolean) => void
}

const WaitlistModal = ({ isOpen, setIsOpen }: WaitlistModalProps) => {

    return (
        <Dialog size="xl" open={isOpen} onClose={setIsOpen}>
            <DialogTitle>Get Early Access!</DialogTitle>
            <DialogDescription>
                Be among the first to streamline your admissions with Lepa.
            </DialogDescription>
            <DialogBody>
                {/* <Field>
                    <Label>Amount</Label>
                    <Input name="amount" placeholder="$0.00" />
                </Field> */}
                <WaitlistForm />
            </DialogBody>
            <DialogActions>
                <Button onClick={() => setIsOpen(false)} color='primary'>Join waitlist</Button>
            </DialogActions>
        </Dialog>
    )
}


export default WaitlistModal