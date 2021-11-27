/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES, COLORS, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
	return (
		<Overlay isOpen={isOpen} onDismiss={onDismiss}>
			<Content>
				<CloseButton onClick={onDismiss}>
					<Icon id="close" />
					<VisuallyHidden>Dismiss Menu</VisuallyHidden>
				</CloseButton>
				<MobileNav>
					<NavLink href="/sale">Sale</NavLink>
					<NavLink href="/new">New&nbsp;Releases</NavLink>
					<NavLink href="/men">Men</NavLink>
					<NavLink href="/women">Women</NavLink>
					<NavLink href="/kids">Kids</NavLink>
					<NavLink href="/collections">Collections</NavLink>
				</MobileNav>
				<MobileFooter>
					<FooterLink href="/terms">Terms and Conditions</FooterLink>
					<FooterLink href="/privacy">Privacy Policy</FooterLink>
					<FooterLink href="/contact">Contact Us</FooterLink>
				</MobileFooter>
			</Content>
		</Overlay>
	);
};

const Overlay = styled(DialogOverlay)`
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: flex-end;
	background-color: hsl(220 5% 40% / 0.8);
`;

const Content = styled(DialogContent)`
	position: relative;
	background: white;
	width: 300px;
	max-width: 90vw;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 32px;
`;

const CloseButton = styled(UnstyledButton)`
	align-self: flex-end;
	margin: -16px;
	margin-top: -22px;
	margin-right: -20px;
	padding: 16px;

	@media ${QUERIES.phoneAndSmaller} {
		margin-right: -30px;
	}
`;

const MobileNav = styled.nav`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

const NavLink = styled.a`
	font-size: ${18 / 16} rem;
	text-transform: uppercase;
	text-decoration: none;
	color: ${COLORS.gray[900]};
	font-weight: ${WEIGHTS.medium};

	&:first-of-type {
		color: ${COLORS.secondary};
	}
`;

const MobileFooter = styled.footer`
	display: flex;
	flex-direction: column;
	gap: 14px;
`;

const FooterLink = styled.a`
	text-decoration: none;
	color: ${COLORS.gray[700]};
	font-size: ${14 / 16} rem;
`;

export default MobileMenu;
