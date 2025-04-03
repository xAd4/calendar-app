import { addHours, differenceInSeconds } from "date-fns";
import { useEffect, useMemo, useState } from "react";
import DatePicker from "react-datepicker";
import Modal from "react-modal";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import { useUiSlice } from "../../hooks/useUiSlice";
import { useCalendarSlice } from "../../hooks/useCalendarSlice";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export const CalendarModal = () => {
  const { activeEvent } = useCalendarSlice();

  const { isOpenModal, onCloseModal } = useUiSlice();
  const [formSubmmited, setFormSubmmited] = useState(false);

  const [formValue, setFormValue] = useState({
    title: "Angel",
    notes: "Estarita",
    start: new Date(),
    end: addHours(new Date(), 2),
  });

  const titleClass = useMemo(() => {
    if (!formSubmmited) return "";

    return formValue.title.length > 0 ? "is-valid" : "is-invalid";
  }, [formValue.title, formSubmmited]);

  useEffect(() => {
    if (activeEvent !== null) {
      setFormValue({ ...activeEvent });
    }
  }, [activeEvent]);

  const onInputChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const onDateChange = (event, changing) => {
    setFormValue({
      ...formValue,
      [changing]: event,
    });
  };

  const handleCloseModal = () => {
    onCloseModal();
    console.log("Close modal");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmmited(true);

    const difference = differenceInSeconds(formValue.end, formValue.start);

    if (isNaN(difference) || difference <= 0) {
      Swal.fire("Dates incorrect", "Check dates", "error");
      return;
    }

    if (formValue.title.length <= 0) return;

    console.log({ difference });
  };

  return (
    <>
      <Modal
        isOpen={isOpenModal}
        onRequestClose={handleCloseModal}
        style={customStyles}
        className="modal"
        overlayClassName="modal-fondo"
        closeTimeoutMS={200}
      >
        <h1> Nuevo evento </h1>
        <hr />
        <form className="container" onSubmit={onSubmit}>
          <div className="form-group mb-2">
            <label>Fecha y hora inicio</label>
            <br />
            <DatePicker
              selected={formValue.start}
              onChange={(event) => onDateChange(event, "start")}
              className="form-control"
              dateFormat="Pp"
            />
          </div>

          <div className="form-group mb-2">
            <label>Fecha y hora fin</label>
            <br />
            <DatePicker
              minDate={formValue.start}
              selected={formValue.end}
              onChange={(event) => onDateChange(event, "end")}
              className="form-control"
              dateFormat="Pp"
            />
          </div>

          <hr />
          <div className="form-group mb-2">
            <label>Titulo y notas</label>
            <input
              type="text"
              className={`form-control ${titleClass}`}
              placeholder="Título del evento"
              name="title"
              autoComplete="off"
              value={formValue.title}
              onChange={onInputChange}
            />
            <small id="emailHelp" className="form-text text-muted">
              Una descripción corta
            </small>
          </div>

          <div className="form-group mb-2">
            <textarea
              type="text"
              className="form-control"
              placeholder="Notas"
              rows="5"
              name="notes"
              value={formValue.notes}
              onChange={onInputChange}
            ></textarea>
            <small id="emailHelp" className="form-text text-muted">
              Información adicional
            </small>
          </div>

          <button type="submit" className="btn btn-outline-primary btn-block">
            <i className="far fa-save"></i>
            <span> Guardar</span>
          </button>
        </form>
      </Modal>
    </>
  );
};
