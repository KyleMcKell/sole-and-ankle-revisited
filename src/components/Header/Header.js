import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
	const [showMobileMenu, setShowMobileMenu] = React.useState(false);

	// For our mobile hamburger menu, we'll want to use a button
	// with an onClick handler, something like this:
	//
	// <button onClick={() => setShowMobileMenu(true)}>

	return (
		<header>
			<SuperHeader />
			<MainHeader>
				<Side>
					<HeaderLogo />
				</Side>
				<DesktopNav>
					<NavLink href="/sale">Sale</NavLink>
					<NavLink href="/new">New&nbsp;Releases</NavLink>
					<NavLink href="/men">Men</NavLink>
					<NavLink href="/women">Women</NavLink>
					<NavLink href="/kids">Kids</NavLink>
					<NavLink href="/collections">Collections</NavLink>
				</DesktopNav>
				<Side />
				<MobileActions>
					<UnstyledButton>
						<Icon id="shopping-bag" strokeWidth={1} />
						<VisuallyHidden>Open cart</VisuallyHidden>
					</UnstyledButton>
					<UnstyledButton>
						<Icon id="search" strokeWidth={1} />
						<VisuallyHidden>Search</VisuallyHidden>
					</UnstyledButton>
					<UnstyledButton onClick={() => setShowMobileMenu(true)}>
						<Icon id="menu" strokeWidth={3} />
						<VisuallyHidden>Menu</VisuallyHidden>
					</UnstyledButton>
				</MobileActions>
			</MainHeader>

			<MobileMenu
				isOpen={showMobileMenu}
				onDismiss={() => setShowMobileMenu(false)}
			/>
		</header>
	);
};

const MainHeader = styled.div`
	display: flex;
	align-items: baseline;
	padding: 18px clamp(16px, 9.5vw - 24px, 32px);
	height: 72px;
	border-bottom: 1px solid ${COLORS.gray[300]};

	@media ${QUERIES.tabletAndSmaller} {
		border-top: 4px solid ${COLORS.gray[900]};
	}
`;

const DesktopNav = styled.nav`
	display: flex;
	gap: 48px;
	margin: 0px 48px;

	@media ${QUERIES.tabletAndSmaller} {
		display: none;
	}
`;

const Side = styled.div`
	flex: 1;
	pointer-events: none;

	@media ${QUERIES.tabletAndSmaller} {
		flex: revert;
	}
`;

const HeaderLogo = styled(Logo)`
	width: fit-content;
	pointer-events: auto;
`;

const NavLink = styled.a`
	font-size: 1.125rem;
	text-transform: uppercase;
	text-decoration: none;
	color: ${COLORS.gray[900]};
	font-weight: ${WEIGHTS.medium};

	&:first-of-type {
		color: ${COLORS.secondary};
	}
`;

const MobileActions = styled.div`
	display: none;

	@media ${QUERIES.tabletAndSmaller} {
		display: flex;
		margin-left: auto;
		gap: clamp(16px, 9.5vw - 1.75rem, 32px);
	}
`;

export default Header;
