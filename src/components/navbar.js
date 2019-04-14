import React  , {Component} from 'react';
import {connect} from 'react-redux';
import {logUserOut} from '../actions/auth-actions';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem ,
  ButtonDropdown 
 } from 'reactstrap';

class NavBarr extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleButton = this.toggleButton.bind(this);
    this.state = {
      isOpen: false , 
      dropdownOpen:false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  toggleButton() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  renderLoginOrLogout(){
    const {isAuth , logUserOut , profile}= this.props
    if(isAuth)
    {
      return (
        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggleButton}>
          <DropdownToggle caret>
            Wellcome, {profile.name}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={()=>logUserOut()}>LogOut</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      );
    }

    return (
      <>
      <NavItem>
      <NavLink href="/login/">Login</NavLink>
    </NavItem>
    <NavItem>
     <NavLink href="/register">Register</NavLink>
    </NavItem>
    </>

    )
  }

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Expense App</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            {this.renderLoginOrLogout()}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
const mapStateToProps = ({auth})=>
{
  return {
    isAuth : auth.isAuth,
    profile : auth.profile
  }

}
const Navbarr = connect(mapStateToProps,{logUserOut})(NavBarr)
export default Navbarr;