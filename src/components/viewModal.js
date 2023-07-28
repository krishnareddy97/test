import React from "react";
import {
    Modal,
    ModalHeader,
    ModalBody,
    CardImg,
    CardBody
} from "reactstrap";
import moment from "moment";

const ViewModal = ({ modalOpen, toggleModal, client }) => {
    return (
        <Modal
            isOpen={modalOpen}
            toggle={toggleModal}
            wrapClassName="modal-right"
            backdrop={false}
        >
            <ModalHeader toggle={toggleModal}>View Details</ModalHeader>
            <ModalBody>
                {client &&
                    <div className="d-flex flex-column align-items-center">
                        <div className="">
                            <CardImg src={client.avatar} alt="profile pic" className="img-thumnail list-thumbnail rounded-circle" />
                        </div>
                        <CardBody>
                            <div className="d-flex flex-column mb-3">
                                <span className="text-capitalize">name:</span>
                                <span className="text-muted">{client.name}</span>
                            </div>
                            <div className="d-flex flex-column mb-3">
                                <span className="text-capitalize">job title:</span>
                                <span className="text-muted">{client.job_title}</span>
                            </div>
                            <div className="d-flex flex-column mb-3">
                                <span className="text-capitalize">job descriptor:</span>
                                <span className="text-muted">{client.job_descriptor}</span>
                            </div>
                            <div className="d-flex flex-column mb-3">
                                <span className="text-capitalize">email:</span>
                                <span className="text-muted">{client.email}</span>
                            </div>
                            <div className="d-flex flex-column mb-3">
                                <span className="text-capitalize">Contact no:</span>
                                <span className="text-muted">{client.phone_no}</span>
                            </div>  
                            <div className="d-flex flex-column mb-3">
                                <span className="text-capitalize">date of birth:</span>
                                <span className="text-muted">{moment(client.date_of_birth).format("L")}</span>
                            </div>
                        </CardBody>
                    </div>
                }
            </ModalBody>
        </Modal>
    );
};

export default ViewModal;
