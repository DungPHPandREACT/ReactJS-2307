import { AddIcon, ChevronDownIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavbarBrand } from 'reactstrap';
import ModalAuth from './ModalAuth';
import './styles.css';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const statusAuth = useRef('login');

  const handleOpenModalAuth = status => {
    statusAuth.current = status;
    onOpen();
  };

  return (
    <>
      <ModalAuth
        initialRef={initialRef}
        finalRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        statusAuth={statusAuth.current}
      />
      <Navbar color="dark" dark sticky="top">
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
              <NavLink
                style={{
                  color: 'white',
                }}
                to="/"
              >
                <span style={{ marginLeft: '8px' }}>Quizz Test</span>
              </NavLink>
            </div>
          </NavbarBrand>

          <div className="pages">
            <span style={{ marginLeft: '8px', marginRight: '8px' }}>
              <NavLink className="nav-bar-item" to="?subject=reactjs">
                ReactJS
              </NavLink>
            </span>
            <span style={{ marginLeft: '8px', marginRight: '8px' }}>
              <NavLink className="nav-bar-item" to="?subject=javascript">
                Javascript
              </NavLink>
            </span>
            <span style={{ marginLeft: '8px', marginRight: '8px' }}>
              <NavLink className="nav-bar-item" to="?subject=html">
                HTML
              </NavLink>
            </span>
            <span style={{ marginLeft: '8px', marginRight: '8px' }}>
              <NavLink className="nav-bar-item" to="?subject=css">
                CSS
              </NavLink>
            </span>
          </div>

          {/* Chưa đăng nhập */}
          <Stack spacing={4} direction="row" align="center">
            <Button
              colorScheme="teal"
              size="sm"
              onClick={() => handleOpenModalAuth('login')}
            >
              Đăng nhập
            </Button>

            <Button
              colorScheme="teal"
              size="sm"
              variant="outline"
              onClick={() => handleOpenModalAuth('register')}
            >
              Đăng ký
            </Button>
          </Stack>

          {/* Sau khi đăng nhập */}

          {/* <Menu>
            <MenuButton rightIcon={<ChevronDownIcon />}>
              <Stack spacing={4} direction="row" align="center">
                <Avatar name="Đỗ Tiến Dũng" />
                <Text color="white" as="b">
                  Đỗ Tiến Dũng
                </Text>
              </Stack>
            </MenuButton>

            <MenuList>
              <MenuGroup title="Profile">
                <MenuItem>Edit profile</MenuItem>
                <MenuItem>Change password</MenuItem>
                <MenuItem>Log out</MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup title="Admin">
                <MenuItem icon={<AddIcon />}>Create quizz</MenuItem>
                <MenuItem icon={<AddIcon />}>Create quizz</MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu> */}
        </div>
      </Navbar>
    </>
  );
};

export default Header;
