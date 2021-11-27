/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
	return (
		<Overlay isOpen={isOpen} onDismiss={onDismiss}>
			<Content>
				<CloseButton onClick={onDismiss}>
					<Icon id="close" />
				</CloseButton>
				<MobileNav>
					<a href="/sale">Sale</a>
					<a href="/new">New&nbsp;Releases</a>
					<a href="/men">Men</a>
					<a href="/women">Women</a>
					<a href="/kids">Kids</a>
					<a href="/collections">Collections</a>
				</MobileNav>
				<MobileFooter>
					<a href="/terms">Terms and Conditions</a>
					<a href="/privacy">Privacy Policy</a>
					<a href="/contact">Contact Us</a>
				</MobileFooter>
			</Content>
		</Overlay>
	);
};

const Overlay = styled(DialogOverlay)`
	position: fixed;
	top: 0;
	right: 0;
	height: 100%;
	width: 90%;
`;

const Content = styled(DialogContent)`
	position: relative;
	background: white;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 32px;
`;

const CloseButton = styled(UnstyledButton)`
	align-self: flex-end;
`;

const MobileNav = styled.nav`
	display: flex;
	flex-direction: column;
`;

const MobileFooter = styled.footer`
	display: flex;
	flex-direction: column;
`;

export default MobileMenu;
