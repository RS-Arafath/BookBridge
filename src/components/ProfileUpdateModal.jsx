import React from 'react';
import { Envelope } from '@gravity-ui/icons';
import {
  Button,
  Input,
  Label,
  ListBoxItemIndicator,
  Modal,
  Surface,
  TextField,
} from '@heroui/react';
import toast from 'react-hot-toast';
import { SquarePen } from 'lucide-react';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
const ProfileUpdateModal = () => {
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    //const image = e.target.image.value;

    const { data, error } = await authClient.updateUser({
      name,
    });

    if (error) {
      toast.error(error.message || 'Update failed!');
      return;
    }

    toast.success('Update Profile Successfully!');

    setTimeout(() => {
      router.push('/');
    }, 1000);
  };
  return (
    <div>
      <Modal>
        <Button
          variant="bordered"
          className="border-[#F7971D] hover:bg-[#F7971D] transition-colors duration-150 border bg-white text-[#0F172A] "
        >
          Update Information
        </Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Heading>
                  <div className="flex gap-2 justify-start items-center">
                    <SquarePen className="text-[#F7971D]" />
                    <span> Update User Information</span>
                  </div>
                </Modal.Heading>
              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form onSubmit={onSubmit} className="flex flex-col gap-4">
                    <TextField
                      isRequired
                      className="w-full"
                      name="name"
                      type="text"
                      variant="secondary"
                    >
                      <Label className="text-[#1E3A5F]">Name</Label>

                      <Input
                        placeholder="Enter your name"
                        className="
      focus:border-[#F7971D]
      focus:ring-[#F7971D]
    "
                      />
                    </TextField>

                    <Modal.Footer>
                      <Button
                        slot="close"
                        variant="secondary"
                        className="
  border  duration-200 transition-colors   border-[#1E3A5F] hover:bg-[#054293]  text-white bg-[#1E3A5F]
  "
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        className="
    bg-[#F7971D]
  text-[#0F172A]
    hover:bg-[#e88915]
    transition-colors
    duration-200
  "
                      >
                        Update
                      </Button>
                    </Modal.Footer>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default ProfileUpdateModal;
