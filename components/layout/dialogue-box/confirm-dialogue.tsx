import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
  } from "@material-tailwind/react";

const ConfirmDialog: React.FC<any> = ({
    open,
    title,
    body,
    onConfirm,
    onCancel,
  }) => {
    return (
      // @ts-ignore
        <Dialog open={open} onClose={onCancel as any} className="dark:bg-gray-800" >
          <DialogHeader className="dark:text-white">{title}</DialogHeader>
          <DialogBody className="dark:text-gray-300" divider>{body}</DialogBody >
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={onCancel}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button variant="gradient" color="green" onClick={onConfirm}>
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        </Dialog>
    );
  }
  
  export default ConfirmDialog;