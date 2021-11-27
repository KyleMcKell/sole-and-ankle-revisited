import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const Header = ({ setShowMobileMenu }) => {
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
					<ShoppingBagButton>
						<Icon id="shopping-bag" strokeWidth={2} />
						<VisuallyHidden>Open cart</VisuallyHidden>
					</ShoppingBagButton>
					<UnstyledButton>
						<Icon id="search" strokeWidth={2} />
						<VisuallyHidden>Search</VisuallyHidden>
					</UnstyledButton>
					<UnstyledButton onClick={() => setShowMobileMenu(true)}>
						<Icon id="menu" strokeWidth={2} />
						<VisuallyHidden>Menu</VisuallyHidden>
					</UnstyledButton>
				</MobileActions>
			</MainHeader>
		</header>
	);
};

const MainHeader = styled.div`
	display: flex;
	align-items: baseline;
	padding: 18px 32px;

	overflow: auto;
	border-bottom: 1px solid ${COLORS.gray[300]};

	@media ${QUERIES.tabletAndSmaller} {
		border-top: 4px solid ${COLORS.gray[900]};
		justify-content: space-between;
		align-items: center;
	}

	@media ${QUERIES.phoneAndSmaller} {
		padding-left: 16px;
		padding-right: 16px;
	}
`;

const HeaderLogo = styled(Logo)`
	width: fit-content;
	pointer-events: auto;
`;

const DesktopNav = styled.nav`
	display: flex;
	gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
	margin: 0px 48px;

	@media ${QUERIES.tabletAndSmaller} {
		display: none;
	}
`;

const MobileActions = styled.div`
	display: none;

	@media ${QUERIES.tabletAndSmaller} {
		gap: 32px;
		display: flex;
	}

	@media ${QUERIES.phoneAndSmaller} {
		gap: 16px;
	}
`;

const Side = styled.div`
	flex: 1;
	pointer-events: none;

	@media ${QUERIES.tabletAndSmaller} {
		flex: revert;
	}
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

const ShoppingBagButton = styled(UnstyledButton)`
	transform: translateX(-2px);
`;

export default Header;
