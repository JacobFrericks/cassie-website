import React, {Component} from 'react';
import strings from '../../strings';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

export default class NavBar extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {

    let base = process.env.PUBLIC_URL + "/#";
    console.log(base);

    let home = base + "/";
    let products = base + "/products";
    let services = base + "/services";
    let contactUs = base + "/contactUs";

    return (
      <div>
        <Navbar
          color="transparent"
          dark
          expand="md"
          fixed={'top'}
        >
          <NavbarBrand href="/">{strings.company_title}</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem><NavLink href={home} className={"text-white"}>{strings.navbar_home}</NavLink></NavItem>
            <NavItem><NavLink href={products} className={"text-white"}>{strings.navbar_products}</NavLink></NavItem>
            <NavItem><NavLink href={services} className={"text-white"}>{strings.navbar_services}</NavLink></NavItem>
            <NavItem><NavLink href={contactUs} className={"text-white"}>{strings.navbar_contact}</NavLink></NavItem>
          </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}