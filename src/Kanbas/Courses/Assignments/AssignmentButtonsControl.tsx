import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
export default function AssignmentButtonsControl() {
    return (
        <div className="float-end">
            <div className="ms-2 badge bg-secondary">40% of Total</div>
            <BsPlus className="fs-3" />
            <IoEllipsisVertical className="fs-5" />
        </div>
    );
}
