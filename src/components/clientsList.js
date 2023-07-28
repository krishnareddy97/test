import React from 'react';
import { Container, Row, Col, Card, CardBody, CardSubtitle, CardText, NavLink } from "reactstrap";
import ViewModal from './viewModal.js';
import { connect } from "react-redux";

class ClientsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
            client: null,
            clients: [],
        }
    };

    componentDidMount = () => {
        this.setProps(this.props)
    };

    setProps = (props) => {
        let { clients } = props.state;
        this.setState({ clients });
    };

    componentWillReceiveProps = (nextProps) => {
        if (nextProps !== this.props)
            this.setProps(nextProps);
    };

    toggleModal = (client) => {
        if (client) {
            this.setState({ client });
        }
        this.setState({
            modalOpen: !this.state.modalOpen
        });
    };
    render() {
        let { clients } = this.state;
        return (
            <div className="bg-light c-list py-3">
                <Container>
                    <Row>
                        {clients.length !== 0 ?
                            clients.map((item) =>
                                <Col xs="12" className="mb-3" key={item.id}>
                                    <Card>
                                        <NavLink to="#" onClick={() => this.toggleModal(item)}>
                                            <div className="d-flex flex-row align-items-center">
                                                <img className="list-thumbnail" src={item.avatar} alt="avatar" />
                                                <CardBody>
                                                    <CardSubtitle className="">
                                                        {item.name}
                                                    </CardSubtitle>
                                                    <CardText className="text-muted text-small">
                                                        {item.email}
                                                    </CardText>
                                                </CardBody>
                                            </div>
                                        </NavLink>
                                    </Card>
                                </Col>
                            )
                            :
                            <Col xs="12" className="text-center">
                                <Card className="p-4 font-weight-bolder">
                                    No Clients
                                </Card>
                            </Col>
                        }
                    </Row>
                    <ViewModal
                        modalOpen={this.state.modalOpen}
                        toggleModal={this.toggleModal}
                        client={this.state.client}
                    />
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (props) => {
    return { state: props }
}
export default connect(mapStateToProps, null)(ClientsList);
