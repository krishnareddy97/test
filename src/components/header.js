import React from 'react';
import { Container, Input } from "reactstrap";
import logo from "../assets/img/logo.svg";
import clients from "../data/clients.json";
import { connect } from "react-redux";
import { setFilteredData } from "../redux/actions";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
        };
    }
    componentDidMount = () => {
        this.props.setFilteredData(clients);
    }
    handleChange = (e) => {
        var results = [];
        let searchValue = e.target.value;
        for (var i = 0; i < clients.length; i++) {
            if ((clients[i].name).includes(searchValue) ||
                (clients[i].email).includes(searchValue) ||
                (clients[i].phone_no).includes(searchValue) ||
                (clients[i].job_descriptor).includes(searchValue) ||
                (clients[i].job_title).includes(searchValue)) {
                results.push(clients[i]);
            }
        }
        this.setState({ search: searchValue })
        if (searchValue === "")
            this.props.setFilteredData(clients);

        this.props.setFilteredData(results);
    }
    render() {
        return (
            <header className="bg-dark">
                <Container>
                    <div className="d-flex flex-row justify-content-between align-items-center">
                        <img src={logo} className="logo-img" alt="logo" />
                        <h4 className="text-light">Client's Info</h4>
                        <span>
                            <Input type="text" placeholder="Search" onChange={this.handleChange} value={this.state.search} />
                        </span>
                    </div>
                </Container>
            </header>
        );
    }
}

export default connect(null, { setFilteredData })(Header);
