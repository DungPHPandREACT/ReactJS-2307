import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavItem, Navbar, NavbarBrand } from 'reactstrap';
import './styles.css';
import { Button, Stack } from '@chakra-ui/react';

const Header = () => {
  return (
    <Navbar color="dark" dark>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <NavbarBrand>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img
              alt="logo"
              src="/logo192.png"
              style={{
                height: 40,
                width: 40,
              }}
            />
            <span style={{ marginLeft: '8px' }}>Quizz Test</span>
          </div>
        </NavbarBrand>

        <div className="pages">
          <span style={{ marginLeft: '8px', marginRight: '8px' }}>
            <NavLink className="nav-bar-item" to="/">
              ReactJS
            </NavLink>
          </span>
          <span style={{ marginLeft: '8px', marginRight: '8px' }}>
            <NavLink className="nav-bar-item" to="/">
              Javascript
            </NavLink>
          </span>
          <span style={{ marginLeft: '8px', marginRight: '8px' }}>
            <NavLink className="nav-bar-item" to="/">
              HTML
            </NavLink>
          </span>
          <span style={{ marginLeft: '8px', marginRight: '8px' }}>
            <NavLink className="nav-bar-item" to="/">
              CSS
            </NavLink>
          </span>
        </div>

        <Stack spacing={4} direction="row" align="center">
          <Button colorScheme="teal" size="sm">
            Đăng nhập
          </Button>

          <Button colorScheme="teal" size="sm" variant="outline">
            Đăng ký
          </Button>
        </Stack>
      </div>
    </Navbar>
  );
};

export default Header;
