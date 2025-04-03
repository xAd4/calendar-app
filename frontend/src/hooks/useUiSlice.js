import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "../store/ui/uiSlice";

export const useUiSlice = () => {
  const dispatch = useDispatch();

  const { isOpenModal } = useSelector((state) => state.ui);

  const onOpenModal = () => {
    dispatch(openModal());
  };

  const onCloseModal = () => {
    dispatch(closeModal());
  };

  return {
    isOpenModal,
    onOpenModal,
    onCloseModal,
  };
};
